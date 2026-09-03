"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft, ArrowRight, LoaderCircle } from "lucide-react";

export function ApplicationForm() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [activeTreatment, setActiveTreatment] = useState("");

  function moveToStep(nextStep: number) {
    setStep(nextStep);
    window.scrollTo({ top: 0, behavior: "smooth" });
    requestAnimationFrame(() => {
      const heading = document.querySelector<HTMLElement>(".form-step.active h2");
      heading?.focus();
    });
  }

  function goForward() {
    const form = document.querySelector<HTMLFormElement>("#recovery-application");
    if (!form) return;

    const fields = Array.from(
      form.querySelectorAll<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>(
        `[data-step="${step}"]`,
      ),
    );
    if (fields.every((field) => field.reportValidity())) {
      setError("");
      moveToStep(Math.min(3, step + 1));
    }
  }

  async function submitApplication(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitting(true);
    setError("");

    try {
      const formData = new FormData(event.currentTarget);
      let attribution = {};
      try {
        attribution = JSON.parse(sessionStorage.getItem("h2w_attribution") ?? "{}");
      } catch {
        attribution = {};
      }

      const response = await fetch("/api/application", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...Object.fromEntries(formData.entries()), attribution }),
      });

      if (!response.ok) throw new Error("Application delivery failed");
      router.push("/schedule");
    } catch {
      setError("We could not submit your application. Please try again in a moment.");
      setSubmitting(false);
    }
  }

  return (
    <section className="application-panel" aria-labelledby="application-title">
      <div className="form-progress" aria-label={`Step ${step} of 3`}>
        {[1, 2, 3].map((item) => <span className={item <= step ? "active" : ""} key={item} />)}
      </div>
      <div className="form-step-label">Step {step} of 3</div>

      <form id="recovery-application" onSubmit={submitApplication}>
        <div className={step === 1 ? "form-step active" : "form-step"} aria-hidden={step !== 1}>
          <h2 id="application-title" tabIndex={-1}>First, tell us about you.</h2>
          <p>We will use these details only to review and follow up on your application.</p>
          <label>
            Full name
            <input data-step="1" name="fullName" autoComplete="name" maxLength={160} required />
          </label>
          <label>
            Email address
            <input data-step="1" type="email" name="email" autoComplete="email" maxLength={160} required />
          </label>
          <label>
            Mobile phone number
            <input data-step="1" type="tel" name="phone" autoComplete="tel" maxLength={60} required />
          </label>
          <label>
            Where are you located?
            <input data-step="1" name="location" autoComplete="address-level2" maxLength={180} required />
          </label>
          <label className="honeypot" aria-hidden="true">
            Company website
            <input name="website" tabIndex={-1} autoComplete="off" />
          </label>
        </div>

        <div className={step === 2 ? "form-step active" : "form-step"} aria-hidden={step !== 2}>
          <h2 tabIndex={-1}>Tell us about your recovery.</h2>
          <p>A clear starting picture helps Dr. Moe prepare for a more useful conversation.</p>
          <label>
            Which best describes what you are recovering from?
            <select data-step="2" name="recoveryType" defaultValue="" required>
              <option value="" disabled>Select one</option>
              <option value="cancer-treatment">Cancer treatment</option>
              <option value="major-illness">Major illness</option>
              <option value="surgery">Surgery</option>
              <option value="accident-or-injury">Accident or injury</option>
              <option value="prolonged-decline">Prolonged fatigue or health decline</option>
              <option value="other">Another health setback</option>
            </select>
          </label>
          <label>
            When did the event, treatment, or major health change occur?
            <input data-step="2" name="eventTiming" maxLength={300} required />
          </label>
          <label>
            What are the three biggest ways you do not feel like yourself right now?
            <textarea data-step="2" name="waysNotSelf" rows={5} maxLength={5000} required />
          </label>
          <label>
            What have you already tried?
            <textarea data-step="2" name="alreadyTried" rows={4} maxLength={5000} required />
          </label>
          <label>
            What would meaningful recovery allow you to do again?
            <textarea data-step="2" name="recoveryWouldAllow" rows={4} maxLength={5000} required />
          </label>
        </div>

        <div className={step === 3 ? "form-step active" : "form-step"} aria-hidden={step !== 3}>
          <h2 tabIndex={-1}>Fit, timing, and next steps.</h2>
          <p>These answers help protect your wellbeing and determine whether coaching is appropriate now.</p>
          <label>
            Are you currently receiving active medical treatment?
            <select
              data-step="3"
              name="activeTreatment"
              value={activeTreatment}
              onChange={(event) => setActiveTreatment(event.target.value)}
              required
            >
              <option value="" disabled>Select one</option>
              <option value="no">No</option>
              <option value="yes">Yes</option>
            </select>
          </label>
          <label>
            If yes, briefly explain your current treatment.
            <textarea
              data-step={activeTreatment === "yes" ? "3" : undefined}
              name="activeTreatmentDetails"
              rows={3}
              maxLength={3000}
              required={activeTreatment === "yes"}
            />
          </label>
          <label>
            Are you willing and able to participate in a six-month private coaching program if we determine it is a good fit?
            <select data-step="3" name="sixMonthReadiness" defaultValue="" required>
              <option value="" disabled>Select one</option>
              <option value="yes">Yes</option>
              <option value="unsure">I am interested, but have questions</option>
              <option value="no">Not at this time</option>
            </select>
          </label>
          <label>
            Why do you want support now?
            <textarea data-step="3" name="whyNow" rows={4} maxLength={5000} required />
          </label>
          <label>
            How did you hear about Dr. Moe or Happy Healthy Wealthy?
            <input data-step="3" name="referralSource" maxLength={500} required />
          </label>
          <label className="consent-row">
            <input data-step="3" type="checkbox" name="consent" value="yes" required />
            <span>
              I understand that coaching is not emergency care and does not replace diagnosis or
              treatment from my licensed healthcare providers.
            </span>
          </label>
          <label className="consent-row">
            <input data-step="3" type="checkbox" name="privacyConsent" value="yes" required />
            <span>
              I consent to H2W processing the health-related information I provide for the purpose
              of reviewing and responding to this coaching application.
            </span>
          </label>
          <p className="form-privacy">
            By submitting, you also agree to the <a href="/terms" target="_blank">terms</a> and
            acknowledge the <a href="/privacy" target="_blank">privacy policy</a> and
            <a href="/disclaimer" target="_blank"> educational disclaimer</a>.
          </p>
        </div>

        {error ? <p className="form-error" role="alert">{error}</p> : null}
        <div className="form-controls">
          {step > 1 ? (
            <button className="button form-back" type="button" onClick={() => moveToStep(step - 1)}>
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
