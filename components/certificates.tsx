"use client";

import { useState } from "react";
import { Reveal } from "./reveal";
import { certificateCategories } from "@/lib/data";
import { Award, Plus } from "lucide-react";

export type Certificate = {
  title: string;
  organization: string;
  issueDate: string;
  credentialId?: string;
  category: string;
  url?: string;
  image?: string;
};


const certificates: Certificate[] = [
  {
    title: "Teaching with Technology",
    organization: "Microsoft",
    issueDate: "2026",
    category: "Teaching & Training",
  },

  {
    title: "Training of Trainers",
    organization: "Professional Training Certification",
    issueDate: "2026",
    category: "Teaching & Training",
  },
{
  title: "AI Prompt Essentials",
  organization: "University of Wyoming - WyoLearn",
  issueDate: "2026",
  category: "AI & Prompt Engineering",
},
{
  title: "CMS Site Editor Training",
  organization: "University of Wyoming - WyoLearn",
  issueDate: "2026",
  category: "Web Content Management & Accessibility",
},

  {
    title: "Google AI Essentials",
    organization: "Google",
    issueDate: "2025",
    category: "Artificial Intelligence",
  },

  {
    title: "Generative AI Fundamentals",
    organization: "IBM",
    issueDate: "2025",
    category: "Artificial Intelligence",
  },
{
    title: "Soft Skills Training",
    organization: "Association des Jeunes Créateurs",
    issueDate: "2021",
    category: "Soft Skills",
  },
{
    title: "Animation Training",
    organization: "Association des Jeunes Créateurs",
    issueDate: "2019",
    category: "Teaching",
  },
  {
    title: "HP LIFE e-Learning Training",
    organization: "HP",
    issueDate: "2019",
    category: "HP LIFE",
  }
];
export function Certificates() {
  const [active, setActive] = useState<string>("All");
  const filtered =
    active === "All" ? certificates : certificates.filter((c) => c.category === active);

  return (
    <section id="certificates" className="py-24">
      <div className="container-content">
        <Reveal>
          <p className="eyebrow mb-4">Certificates</p>
          <h2 className="section-title max-w-2xl">A credentials gallery, ready to grow.</h2>
        </Reveal>

        <Reveal delay={0.05}>
          <div className="mt-8 flex flex-wrap gap-2">
            {["All", ...certificateCategories].map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`text-xs px-3 py-1.5 rounded-full border transition-colors ${
                  active === cat
                    ? "border-gold bg-gold/10 text-gold"
                    : "border-ink/15 dark:border-paper/15 text-slate dark:text-paper/60 hover:border-gold"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((c) => (
            <div key={c.title} className="card-surface rounded-2xl p-6">
              <Award className="text-gold" size={22} />
              <h3 className="font-display text-lg mt-4">{c.title}</h3>
              <p className="text-sm text-slate dark:text-paper/60 mt-1">{c.organization}</p>
              <p className="text-xs font-mono text-teal dark:text-teal-light mt-2">
                {c.issueDate}
                {c.credentialId ? ` · ${c.credentialId}` : ""}
              </p>
              {c.url && (
                <a
                  href={c.url}
                  className="inline-block mt-4 text-xs font-medium text-gold hover:underline"
                >
                  View Certificate →
                </a>
              )}
            </div>
          ))}

        
        </div>
      </div>
    </section>
  );
}
