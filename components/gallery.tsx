import { Reveal } from "./reveal";
import { galleryCategories } from "@/lib/data";
import { ImagePlus } from "lucide-react";
const photos = [
  "/photocentreinfo.png",
  "/p1.jpg",
  "/p2.jpg",
  "/p3.jpg",
  
];
export function Gallery() {
  return (
    <section id="gallery" className="py-24">
      <div className="container-content">
        <Reveal>
          <p className="eyebrow mb-4">Photo Gallery</p>
          <h2 className="section-title max-w-2xl">Moments from the training room.</h2>
        </Reveal>

        <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {photos.map((photo, i) => (
            <Reveal key={photo} delay={(i % 4) * 0.05}>
              <div className="aspect-square rounded-xl border border-dashed border-ink/20 dark:border-paper/20 flex flex-col items-center justify-center text-center p-4 bg-ink/[0.02] dark:bg-paper/[0.02]">
                <img
                  src={photo}
                  alt={`Training moment ${i + 1}`}
                  className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"                  />
            </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
