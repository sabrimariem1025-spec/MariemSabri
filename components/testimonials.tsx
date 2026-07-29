import { Reveal } from "./reveal";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "We love learning with Madame Mariem. She makes computer science and artificial intelligence easy, fun, and exciting to understand. We hope to continue learning with her for a long time because she is a kind and inspiring teacher. She encourages us to discover technology and become more confident. We would love to have Madame Mariem teach us again at our school.",
    author: "Young Learners",
    role: "Artificial Intelligence Training Workshop",
  },
{
  quote:
    "Mariem Sabri is a dedicated and passionate trainer who consistently demonstrates professionalism, commitment, and a strong sense of responsibility. Throughout her involvement in the QIMA project, she showed great motivation, adaptability, and a real willingness to contribute. She brings positive energy to her work, supports learners with patience, and always goes beyond expectations to ensure the success of training activities.",
  author: "Riadh Henntech",
  role: "QIMA Project Coordinator — CIDEAL & AVER Association",
},
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-paper-soft/40 dark:bg-white/[0.02]">
      <div className="container-content">
        <Reveal>
          <p className="eyebrow mb-4">Testimonials</p>
          <h2 className="section-title max-w-2xl">
            What learners and partners are saying.
          </h2>
        </Reveal>

        <div className="mt-10 grid md:grid-cols-2 gap-8">
          {testimonials.map((item, index) => (
            <Reveal key={index} delay={index * 0.05}>
              <div className="card-surface rounded-2xl p-10">
                <Quote className="text-gold mb-6" size={26} />

                <p className="text-slate dark:text-paper/70 leading-relaxed">
                  “{item.quote}”
                </p>

                <div className="mt-6">
                  <p className="font-semibold">{item.author}</p>
                  <p className="text-sm text-slate dark:text-paper/60">
                    {item.role}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}