import { Reveal } from "./reveal";
import { trainingAreas } from "@/lib/data";

export function Training() {
  return (
    <section id="training" className="py-24 bg-paper-soft/40 dark:bg-white/[0.02]">
      <div className="container-content">
        <Reveal>
          <p className="eyebrow mb-4">Training Expertise</p>
          <h2 className="section-title max-w-2xl">Programs built to be used, not just attended.</h2>
        </Reveal>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {trainingAreas.map((area, i) => (
            <Reveal key={area.title} delay={(i % 3) * 0.06}>
              <div className="card-surface rounded-2xl p-6 h-full flex flex-col">
                <h3 className="font-display text-xl leading-snug">{area.title}</h3>
                <p className="text-xs font-mono uppercase tracking-wide text-gold mt-2">{area.audience}</p>
                <p className="text-sm text-slate dark:text-paper/70 mt-4">{area.objectives}</p>
                <dl className="mt-4 space-y-2 text-xs text-slate dark:text-paper/60">
                  <div>
                    <dt className="inline font-medium text-ink dark:text-paper">Skills: </dt>
                    <dd className="inline">{area.skills}</dd>
                  </div>
                  <div>
                    <dt className="inline font-medium text-ink dark:text-paper">Method: </dt>
                    <dd className="inline">{area.methodology}</dd>
                  </div>
                  <div>
                    <dt className="inline font-medium text-ink dark:text-paper">Duration: </dt>
                    <dd className="inline">{area.duration}</dd>
                  </div>
                </dl>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
