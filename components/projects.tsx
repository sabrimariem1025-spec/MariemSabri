import { Reveal } from "./reveal";
import { projects } from "@/lib/data";

export function Projects() {
  return (
    <section id="projects" className="py-24 bg-paper-soft/40 dark:bg-white/[0.02]">
      <div className="container-content">
        <Reveal>
          <p className="eyebrow mb-4">Projects</p>
          <h2 className="section-title max-w-2xl">Case studies, not just a list of repos.</h2>
        </Reveal>

        <div className="mt-12 grid md:grid-cols-2 gap-8">
          {projects.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.08}>
              <div className="card-surface rounded-2xl p-8 h-full">
                <p className="font-mono text-xs uppercase tracking-wide text-gold">{p.tag}</p>
                <h3 className="font-display text-2xl mt-3">{p.title}</h3>
                <p className="text-sm text-slate dark:text-paper/70 mt-4">{p.description}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {p.stack.map((s) => (
                    <span
                      key={s}
                      className="text-[11px] font-mono px-2.5 py-1 rounded-full border border-ink/15 dark:border-paper/15"
                    >
                      {s}
                    </span>
                  ))}
                </div>

                {p.link && (
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center mt-6 px-4 py-2 rounded-full text-sm font-medium bg-ink text-paper hover:opacity-80 transition"
                  >
                    View Website →
                  </a>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
