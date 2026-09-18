import { getContactEmail } from "@/lib/site-config";

type DeliveryOptions = {
  webhookUrl?: string;
  subject: string;
  replyTo: string;
  payload: Record<string, unknown>;
  text: string;
};

export function isFormDeliveryConfigured(webhookUrl?: string) {
  return Boolean(
    webhookUrl || (process.env.RESEND_API_KEY?.trim() && process.env.FORM_FROM_EMAIL?.trim()),
  );
}

export async function deliverForm({ webhookUrl, subject, replyTo, payload, text }: DeliveryOptions) {
  const resendApiKey = process.env.RESEND_API_KEY?.trim();
  const fromEmail = process.env.FORM_FROM_EMAIL?.trim();

  if (resendApiKey && fromEmail) {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [getContactEmail()],
        subject,
        reply_to: replyTo,
        text,
      }),
      signal: AbortSignal.timeout(10_000),
    }).catch(() => null);

    return { ok: Boolean(response?.ok), mode: "email" as const };
  }

  if (webhookUrl) {
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      signal: AbortSignal.timeout(10_000),
    }).catch(() => null);

    return { ok: Boolean(response?.ok), mode: "webhook" as const };
  }

  return { ok: process.env.NODE_ENV !== "production", mode: "preview" as const };
}
