import { Reveal } from "./reveal";
import { experience } from "@/lib/data";

export function Experience() {
  return (
    <section id="experience" className="py-24">
      <div className="container-content">
        <Reveal>
          <p className="eyebrow mb-4">Professional Experience</p>
          <h2 className="section-title max-w-2xl">Where the training and the code come from.</h2>
        </Reveal>

        <div className="mt-12 space-y-0">
          {experience.map((e, i) => (
            <Reveal key={e.org + e.role} delay={i * 0.05}>
              <div className="grid sm:grid-cols-[160px_1fr] gap-2 sm:gap-8 py-6 hairline first:border-0">
                <div className="font-mono text-xs text-teal dark:text-teal-light pt-1">{e.period}</div>
                <div>
                  <h3 className="font-display text-lg">{e.role}</h3>
                  <p className="text-sm text-gold mt-0.5">{e.org}</p>
                  <p className="text-sm text-slate dark:text-paper/70 mt-2 max-w-xl">{e.detail}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
