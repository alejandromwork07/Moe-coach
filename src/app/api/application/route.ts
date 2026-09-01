import { NextResponse } from "next/server";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const fields = ["firstName", "lastName", "email", "phone", "location", "challenge", "desiredOutcome", "whyNow", "readiness"];

export async function POST(request: Request) {
  if (!request.headers.get("content-type")?.includes("application/json")) {
    return NextResponse.json({ error: "Unsupported request" }, { status: 415 });
  }

  const body = await request.json().catch(() => null);
  if (!body || typeof body !== "object") {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
  if (body.website) return NextResponse.json({ accepted: true });

  if (fields.some((field) => typeof body[field] !== "string" || !body[field].trim()) || body.consent !== "yes") {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }
  if (!emailPattern.test(body.email) || body.challenge.length > 5000 || body.desiredOutcome.length > 5000 || body.whyNow.length > 5000) {
    return NextResponse.json({ error: "Invalid fields" }, { status: 400 });
  }
  const webhookUrl = process.env.APPLICATION_WEBHOOK_URL;
  if (!webhookUrl && process.env.NODE_ENV === "production") {
    return NextResponse.json({ error: "Application delivery is not configured" }, { status: 503 });
  }

  const payload = {
    firstName: body.firstName,
    lastName: body.lastName,
    email: body.email,
    phone: body.phone,
    location: body.location,
    focusAreas: Array.isArray(body.focusAreas) ? body.focusAreas.slice(0, 8) : [],
    challenge: body.challenge,
    desiredOutcome: body.desiredOutcome,
    whyNow: body.whyNow,
    readiness: body.readiness,
    consent: body.consent,
    submittedAt: new Date().toISOString(),
    source: "h2w-strategy-application",
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

  return NextResponse.json({ accepted: true, mode: webhookUrl ? "live" : "preview" });
}
