import { Reveal } from "./reveal";
import { galleryCategories } from "@/lib/data";
import { ImagePlus } from "lucide-react";

export function Gallery() {
  return (
    <section id="gallery" className="py-24">
      <div className="container-content">
        <Reveal>
          <p className="eyebrow mb-4">Photo Gallery</p>
          <h2 className="section-title max-w-2xl">Moments from the training room.</h2>
        </Reveal>

        <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryCategories.map((cat, i) => (
            <Reveal key={cat} delay={(i % 4) * 0.05}>
              <div className="aspect-square rounded-xl border border-dashed border-ink/20 dark:border-paper/20 flex flex-col items-center justify-center text-center p-4 bg-ink/[0.02] dark:bg-paper/[0.02]">
                <ImagePlus className="text-gold" size={20} />
                <p className="text-xs mt-3 text-slate dark:text-paper/60">{cat}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
