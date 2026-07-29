import { Experience } from "@/components/experience";
import { Skills } from "@/components/skills";
import { Achievements } from "@/components/achievements";
import { Testimonials } from "@/components/testimonials";

export const metadata = { title: "Experience — Mariem Sabri" };

export default function ExperiencePage() {
  return (
    <div className="pt-16">
      <Experience />
      <Skills />
      <Achievements />
      <Testimonials />
    </div>
  );
}
