import { Reveal } from "./reveal";
import { skillGroups } from "@/lib/data";

export function Skills() {
  return (
    <section id="skills" className="py-24 bg-paper-soft/40 dark:bg-white/[0.02]">
      <div className="container-content">
        <Reveal>
          <p className="eyebrow mb-4">Technical Skills</p>
          <h2 className="section-title max-w-2xl">The stack behind the training.</h2>
        </Reveal>

        <div className="mt-12 grid md:grid-cols-3 gap-10">
          {skillGroups.map((g, i) => (
            <Reveal key={g.group} delay={i * 0.08}>
              <h3 className="font-mono text-xs uppercase tracking-widest text-gold mb-4">{g.group}</h3>
              <ul className="space-y-2">
                {g.items.map((item) => (
                  <li key={item} className="text-sm text-slate dark:text-paper/70 hairline pt-2 first:border-0 first:pt-0">
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
