"use client";

import { FormEvent, useState } from "react";
import { ArrowRight, CheckCircle2, LoaderCircle } from "lucide-react";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    const form = event.currentTarget;
    const body = Object.fromEntries(new FormData(form).entries());
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    }).catch(() => null);

    if (response?.ok) {
      setStatus("sent");
      form.reset();
    } else {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="contact-success" role="status">
        <CheckCircle2 aria-hidden="true" size={38} />
        <h2>Thank you. Your message is in.</h2>
        <p>The H2W team will review it and follow up using the email you provided.</p>
      </div>
    );
  }

  return (
    <form className="contact-form" onSubmit={submit}>
      <div className="field-grid">
        <label>First name<input name="firstName" autoComplete="given-name" maxLength={80} required /></label>
        <label>Last name<input name="lastName" autoComplete="family-name" maxLength={80} required /></label>
      </div>
      <label>Email address<input name="email" type="email" autoComplete="email" maxLength={160} required /></label>
      <label>
        What can we help with?
        <select name="inquiryType" defaultValue="" required>
          <option value="" disabled>Select one</option>
          <option>General question</option>
          <option>Podcast guest or topic</option>
          <option>Media or speaking inquiry</option>
          <option>Coaching question</option>
          <option>Partnership</option>
        </select>
      </label>
      <label>Message<textarea name="message" rows={7} minLength={20} maxLength={4000} required /></label>
      <label className="honeypot" aria-hidden="true">Website<input name="website" tabIndex={-1} autoComplete="off" /></label>
      {status === "error" ? <p className="form-error" role="alert">Your message could not be delivered. Please try again shortly.</p> : null}
      <button className="button button-primary" type="submit" disabled={status === "sending"}>
        {status === "sending" ? <LoaderCircle className="spin" aria-hidden="true" size={18} /> : null}
        Send inquiry <ArrowRight aria-hidden="true" size={18} />
      </button>
    </form>
  );
}
