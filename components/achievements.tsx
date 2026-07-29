import { Reveal } from "./reveal";
import { achievements } from "@/lib/data";
import { Trophy, Gavel, Mic, Users, HeartHandshake, GraduationCap } from "lucide-react";

const icons = [Trophy, Gavel, Mic, Users, HeartHandshake, GraduationCap];

export function Achievements() {
  return (
    <section className="py-24 bg-paper-soft/40 dark:bg-white/[0.02]">
      <div className="container-content">
        <Reveal>
          <p className="eyebrow mb-4">Achievements</p>
          <h2 className="section-title max-w-2xl">Recognition earned along the way.</h2>
        </Reveal>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((a, i) => {
            const Icon = icons[i % icons.length];
            return (
              <Reveal key={a.title} delay={(i % 3) * 0.07}>
                <div className="p-6 card-surface rounded-2xl h-full">
                  <Icon className="text-teal dark:text-teal-light" size={22} />
                  <h3 className="font-display text-lg mt-4">{a.title}</h3>
                  <p className="text-sm text-slate dark:text-paper/60 mt-2">{a.detail}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
