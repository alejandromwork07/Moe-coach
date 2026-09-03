import { Quote } from "lucide-react";

type Testimonial = {
  quote: string;
  attribution: string;
};

// Publish only stories approved by Dr. Moe with documented permission.
const testimonials: Testimonial[] = [];

export function TestimonialsSection() {
  if (!testimonials.length) return null;

  return (
    <section className="section section-light stories-section">
      <div className="page-shell">
        <div className="section-intro-row">
          <div><p className="eyebrow">Real people. Real recovery. Real momentum.</p><h2>Recovery stories, shared with permission.</h2></div>
        </div>
        <div className="testimonials-grid">
          {testimonials.map((testimonial) => (
            <figure className="story-placeholder" key={testimonial.quote}>
              <Quote aria-hidden="true" size={34} />
              <blockquote>{testimonial.quote}</blockquote>
              <figcaption>{testimonial.attribution}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
