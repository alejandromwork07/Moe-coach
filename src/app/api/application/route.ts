import { NextResponse } from "next/server";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const requiredFields = [
  "fullName",
  "email",
  "phone",
  "location",
  "recoveryType",
  "eventTiming",
  "waysNotSelf",
  "alreadyTried",
  "recoveryWouldAllow",
  "activeTreatment",
  "sixMonthReadiness",
  "whyNow",
  "referralSource",
];
const longFields = ["waysNotSelf", "alreadyTried", "recoveryWouldAllow", "activeTreatmentDetails", "whyNow"];
const attributionKeys = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content", "landingPage", "referrer"];

function clean(value: unknown, maxLength = 500) {
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}

export async function POST(request: Request) {
  const contentLength = Number(request.headers.get("content-length") ?? 0);
  if (contentLength > 100_000) {
    return NextResponse.json({ error: "Request is too large" }, { status: 413 });
  }
  if (!request.headers.get("content-type")?.includes("application/json")) {
    return NextResponse.json({ error: "Unsupported request" }, { status: 415 });
  }

  const body = await request.json().catch(() => null);
  if (!body || typeof body !== "object") {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
  if (body.website) return NextResponse.json({ accepted: true });

  if (
    requiredFields.some((field) => !clean(body[field])) ||
    body.consent !== "yes" ||
    body.privacyConsent !== "yes"
  ) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }
  if (!emailPattern.test(clean(body.email, 160)) || longFields.some((field) => clean(body[field], 5001).length > 5000)) {
    return NextResponse.json({ error: "Invalid fields" }, { status: 400 });
  }
  if (body.activeTreatment === "yes" && !clean(body.activeTreatmentDetails)) {
    return NextResponse.json({ error: "Active treatment details are required" }, { status: 400 });
  }

  const webhookUrl = process.env.APPLICATION_WEBHOOK_URL;
  if (!webhookUrl && process.env.NODE_ENV === "production") {
    return NextResponse.json({ error: "Application delivery is not configured" }, { status: 503 });
  }

  const rawAttribution: Record<string, unknown> =
    body.attribution && typeof body.attribution === "object" ? body.attribution : {};
  const attribution = Object.fromEntries(
    attributionKeys.map((key) => [key, clean(rawAttribution[key], 500)]).filter(([, value]) => Boolean(value)),
  );
  const payload = {
    fullName: clean(body.fullName, 160),
    email: clean(body.email, 160),
    phone: clean(body.phone, 60),
    location: clean(body.location, 180),
    recoveryType: clean(body.recoveryType, 100),
    eventTiming: clean(body.eventTiming, 300),
    waysNotSelf: clean(body.waysNotSelf, 5000),
    alreadyTried: clean(body.alreadyTried, 5000),
    recoveryWouldAllow: clean(body.recoveryWouldAllow, 5000),
    activeTreatment: clean(body.activeTreatment, 20),
    activeTreatmentDetails: clean(body.activeTreatmentDetails, 3000),
    sixMonthReadiness: clean(body.sixMonthReadiness, 100),
    whyNow: clean(body.whyNow, 5000),
    referralSource: clean(body.referralSource, 500),
    consent: body.consent,
    privacyConsent: body.privacyConsent,
    attribution,
    submittedAt: new Date().toISOString(),
    source: "h2w-recovery-application",
  };

  if (webhookUrl) {
    const delivery = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      signal: AbortSignal.timeout(10_000),
    }).catch(() => null);
    if (!delivery?.ok) return NextResponse.json({ error: "Delivery failed" }, { status: 502 });
  }

  const response = NextResponse.json({ accepted: true, mode: webhookUrl ? "live" : "preview" });
  response.cookies.set("h2w_application_submitted", "1", {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    maxAge: 60 * 60 * 2,
    path: "/schedule",
  });
  return response;
}
