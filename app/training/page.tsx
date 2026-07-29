import { Training } from "@/components/training";
import { AudiencesMethodology } from "@/components/audiences-methodology";

export const metadata = { title: "Training — Mariem Sabri" };

export default function TrainingPage() {
  return (
    <div className="pt-16">
      <Training />
      <AudiencesMethodology />
    </div>
  );
}
