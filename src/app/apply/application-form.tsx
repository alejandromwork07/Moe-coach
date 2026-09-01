"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft, ArrowRight, LoaderCircle } from "lucide-react";

const focusAreas = [
  "Energy and physical health",
  "Mindset and emotional wellbeing",
  "Performance and recovery",
  "Purpose and direction",
  "Relationships and connection",
  "Work, wealth, and freedom",
];

export function ApplicationForm() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  function goForward() {
    const form = document.querySelector<HTMLFormElement>("#strategy-application");
    if (!form) return;

    const fields = Array.from(form.querySelectorAll<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>(`[data-step="${step}"]`));
    const isValid = fields.every((field) => field.reportValidity());
    if (isValid) {
      setError("");
      setStep((current) => Math.min(3, current + 1));
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }

  async function submitApplication(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitting(true);
    setError("");

    try {
      const formData = new FormData(event.currentTarget);
      const payload = {
        ...Object.fromEntries(formData.entries()),
        focusAreas: formData.getAll("focusAreas"),
      };
      const response = await fetch("/api/application", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) throw new Error("We could not submit your application.");
      router.push("/schedule");
    } catch {
      setError("Something went wrong. Please try again in a moment.");
      setSubmitting(false);
    }
  }

  return (
    <section className="application-panel" aria-labelledby="application-title">
      <div className="form-progress" aria-label={`Step ${step} of 3`}>
        {[1, 2, 3].map((item) => (
          <span className={item <= step ? "active" : ""} key={item} />
        ))}
      </div>
      <div className="form-step-label">Step {step} of 3</div>

      <form id="strategy-application" onSubmit={submitApplication}>
        <div className={step === 1 ? "form-step active" : "form-step"} aria-hidden={step !== 1}>
          <h2 id="application-title">First, tell us about you.</h2>
          <p>We&apos;ll use these details only to follow up about your application.</p>
          <div className="field-grid">
            <label>
              First name
              <input data-step="1" name="firstName" autoComplete="given-name" required />
            </label>
            <label>
              Last name
              <input data-step="1" name="lastName" autoComplete="family-name" required />
            </label>
          </div>
          <label>
            Email address
            <input data-step="1" type="email" name="email" autoComplete="email" required />
          </label>
          <label>
            Phone number
            <input data-step="1" type="tel" name="phone" autoComplete="tel" required />
          </label>
          <label>
            City and time zone
            <input data-step="1" name="location" autoComplete="address-level2" required />
          </label>
          <label className="honeypot" aria-hidden="true">
            Company website
            <input name="website" tabIndex={-1} autoComplete="off" />
          </label>
        </div>

        <div className={step === 2 ? "form-step active" : "form-step"} aria-hidden={step !== 2}>
          <h2>Where would you like change?</h2>
          <p>Select every area that feels relevant right now.</p>
          <div className="checkbox-grid">
            {focusAreas.map((area) => (
              <label key={area}>
                <input type="checkbox" name="focusAreas" value={area} />
                <span>{area}</span>
              </label>
            ))}
          </div>
          <label>
            What is the biggest challenge you are facing right now?
            <textarea data-step="2" name="challenge" rows={5} required />
          </label>
          <label>
            If we were talking one year from now, what would you want to be different?
            <textarea data-step="2" name="desiredOutcome" rows={5} required />
          </label>
        </div>

        <div className={step === 3 ? "form-step active" : "form-step"} aria-hidden={step !== 3}>
          <h2>Why is now the right time?</h2>
          <p>A little context helps make the strategy session more useful from the start.</p>
          <label>
            Why are you looking for guidance now?
            <textarea data-step="3" name="whyNow" rows={5} required />
          </label>
          <label>
            How ready are you to make meaningful changes?
            <select data-step="3" name="readiness" defaultValue="" required>
              <option value="" disabled>Select one</option>
              <option>Ready now and committed</option>
              <option>Ready, but I need a clear plan</option>
              <option>Exploring what support could look like</option>
            </select>
          </label>
          <label className="consent-row">
            <input data-step="3" type="checkbox" name="consent" value="yes" required />
            <span>
              I understand this application does not establish a doctor-patient relationship or
              guarantee acceptance into a program.
            </span>
          </label>
          <p className="form-privacy">
            By submitting, you agree that H2W may use this information to review and respond to
            your application. See our <a href="/privacy" target="_blank">privacy policy</a>.
          </p>
        </div>

        {error && <p className="form-error" role="alert">{error}</p>}

        <div className="form-controls">
          {step > 1 ? (
            <button className="button form-back" type="button" onClick={() => setStep(step - 1)}>
              <ArrowLeft aria-hidden="true" size={18} /> Back
            </button>
          ) : <span />}
          {step < 3 ? (
            <button className="button button-primary" type="button" onClick={goForward}>
              Continue <ArrowRight aria-hidden="true" size={18} />
            </button>
          ) : (
            <button className="button button-primary" type="submit" disabled={submitting}>
              {submitting ? <LoaderCircle className="spin" aria-hidden="true" size={19} /> : null}
              Submit application
            </button>
          )}
        </div>
      </form>
    </section>
  );
}
