import { Reveal } from "./reveal";
import { audiences, methodology } from "@/lib/data";
import { SectionDivider } from "./lattice";

export function AudiencesMethodology() {
  return (
    <section className="py-24">
      <div className="container-content grid lg:grid-cols-2 gap-16">
        <div id="audiences">
          <Reveal>
            <p className="eyebrow mb-4">Audiences</p>
            <h2 className="font-display text-2xl sm:text-3xl mb-8">Who the training is built for</h2>
          </Reveal>
          <div className="flex flex-wrap gap-3">
            {audiences.map((a, i) => (
              <Reveal key={a.name} delay={i * 0.04} className="inline-block">
                <span className="px-4 py-2 rounded-full border border-ink/15 dark:border-paper/15 text-sm inline-flex items-center gap-2">
                  {a.name}
                  {a.range && (
                    <span className="font-mono text-[11px] text-teal dark:text-teal-light">{a.range}</span>
                  )}
                </span>
              </Reveal>
            ))}
          </div>
        </div>

        <div id="methodology">
          <Reveal>
            <p className="eyebrow mb-4">Teaching Methodology</p>
            <h2 className="font-display text-2xl sm:text-3xl mb-8">How the training runs</h2>
          </Reveal>
          <ul className="grid grid-cols-2 gap-3">
            {methodology.map((m, i) => (
              <Reveal key={m} delay={i * 0.04}>
                <li className="text-sm border-l-2 border-gold pl-3 py-1 text-slate dark:text-paper/70">
                  {m}
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
      <SectionDivider />
    </section>
  );
}
