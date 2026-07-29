import { Reveal } from "./reveal";
import { timeline, profile } from "@/lib/data";

export function About() {
  return (
    <section id="about" className="py-24">
      <div className="container-content">
        <Reveal>
          <p className="eyebrow mb-4">About</p>
          <h2 className="section-title max-w-2xl">
            From student curiosity to international training ambition.
          </h2>
        </Reveal>

        <div className="mt-10 grid md:grid-cols-2 gap-12">
          <Reveal delay={0.05}>
            <div className="space-y-5 text-slate dark:text-paper/70 leading-relaxed">
              <p>
                Mariem Sabri is a Tunisia-based Full-Stack Developer and
                technology trainer whose work sits at the intersection of
                software engineering and education. Her mission is
                straightforward: {profile.mission.toLowerCase()}
              </p>
              <p>
                Her teaching philosophy favors doing over listening — every
                training track is built around a project-based method so
                that learners, regardless of age or starting point, leave
                with something they built themselves.
              </p>
              <p>
                Her long-term vision is to bring that same practical,
                learner-first approach to an international stage. {profile.objective}
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <ol className="relative border-l border-ink/15 dark:border-paper/15 pl-6 space-y-8">
              {timeline.map((step, i) => (
                <li key={step.stage} className="relative">
                  <span className="absolute -left-[31px] top-1 w-3 h-3 rounded-full bg-gold" />
                  <span className="font-mono text-[11px] text-teal dark:text-teal-light">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-display text-lg mt-1">{step.stage}</h3>
                  <p className="text-sm text-slate dark:text-paper/60 mt-1">{step.detail}</p>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
