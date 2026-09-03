import { NextResponse } from "next/server";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  const contentLength = Number(request.headers.get("content-length") ?? 0);
  if (contentLength > 25_000) {
    return NextResponse.json({ error: "Request is too large" }, { status: 413 });
  }
  const type = request.headers.get("content-type");
  if (!type?.includes("application/json")) {
    return NextResponse.json({ error: "Unsupported request" }, { status: 415 });
  }

  const body = await request.json().catch(() => null);
  if (!body || typeof body !== "object") {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
  if (body.website) return NextResponse.json({ accepted: true });

  const required = ["firstName", "lastName", "email", "inquiryType", "message"];
  if (required.some((field) => typeof body[field] !== "string" || !body[field].trim())) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }
  if (!emailPattern.test(body.email) || body.message.length < 20 || body.message.length > 4000) {
    return NextResponse.json({ error: "Invalid fields" }, { status: 400 });
  }

  const webhookUrl = process.env.CONTACT_WEBHOOK_URL;
  if (!webhookUrl && process.env.NODE_ENV === "production") {
    return NextResponse.json({ error: "Contact delivery is not configured" }, { status: 503 });
  }
  if (webhookUrl) {
    const payload = {
      firstName: body.firstName.trim().slice(0, 80),
      lastName: body.lastName.trim().slice(0, 80),
      email: body.email.trim().slice(0, 160),
      inquiryType: body.inquiryType.trim().slice(0, 80),
      message: body.message.trim().slice(0, 4000),
      submittedAt: new Date().toISOString(),
      source: "h2w-contact",
    };
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
