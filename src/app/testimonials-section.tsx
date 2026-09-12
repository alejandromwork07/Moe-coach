import { Quote } from "lucide-react";

type Testimonial = {
  category: string;
  quote: string;
  attribution: string;
};

const testimonials: Testimonial[] = [
  {
    category: "Post-cancer recovery",
    quote: "After cancer treatment, I felt like I had survived - but I didn't feel like myself anymore. My energy was gone, my hair had changed, I felt weak, and I didn't know how to start rebuilding my health. Working with Dr. Moe gave me a roadmap. She helped me look at nutrition, inflammation, metabolism, lifestyle and the health factors I could actually influence moving forward. Over time, my energy came back, my hair began growing again, I became stronger, and I finally felt like I was getting my life back. More importantly, I no longer felt lost. I had a plan for taking care of my health for the future.",
    attribution: "Sarah K",
  },
  {
    category: "Migraines",
    quote: "I had suffered with migraines for years and had gotten used to planning my life around headaches. I had tried so many things that I honestly wasn't expecting anything to make a significant difference. Dr. Moe took the time to look beyond the headache itself and approach my health from several different angles. The change has been incredible. I'm now headache-free and can live my life without constantly wondering when the next migraine is going to hit. I wish I had found this approach years ago.",
    attribution: "Rosalina R",
  },
  {
    category: "Gut, skin & inflammation",
    quote: "For years I struggled with digestive problems, skin issues, inflammation and pain, and I never realized they could all be connected. Dr. Moe helped identify foods that were creating problems for me and developed a plan to address my gut health instead of simply chasing each symptom separately. As my gut improved, so did everything else. My skin cleared, my digestive issues resolved, my inflammation and pain dramatically improved, and I finally understood what my body had been trying to tell me. It changed the way I think about my health.",
    attribution: "Paul D",
  },
  {
    category: "Weight, metabolism & strength",
    quote: "I felt like I was doing everything right and still couldn't lose weight. Diet after diet wasn't working, and I was frustrated with feeling sluggish, uncomfortable and achy. Dr. Moe looked deeper and helped uncover food sensitivities and other factors that were getting in the way of my progress. We changed my nutrition, worked on my gut and metabolic health, and focused on becoming stronger rather than simply chasing a number on the scale. I've lost weight, gained significant muscle, become much more active, and I no longer live with the same daily aches and pains. For the first time, I feel strong and in control of my health.",
    attribution: "Holly R",
  },
];

export function TestimonialsSection() {
  return (
    <section className="section section-light stories-section">
      <div className="page-shell">
        <div className="section-intro-row">
          <div><p className="eyebrow">Client experiences</p><h2>What rebuilding can look like.</h2></div>
          <p>Different starting points. Individual paths. A clearer way forward.</p>
        </div>
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <figure className="story-card" key={testimonial.category}>
              <div className="story-card-header">
                <span>{String(index + 1).padStart(2, "0")}</span>
                <p>{testimonial.category}</p>
                <Quote aria-hidden="true" size={28} />
              </div>
              <blockquote><p>{testimonial.quote}</p></blockquote>
              <figcaption>- {testimonial.attribution}</figcaption>
            </figure>
          ))}
        </div>
        <p className="testimonial-disclaimer">These testimonials describe individual experiences. Results vary and are not guaranteed. H2W coaching is educational and does not replace medical care.</p>
      </div>
    </section>
  );
}
