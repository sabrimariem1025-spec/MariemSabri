import { Reveal } from "./reveal";
import { blogTopics } from "@/lib/data";

export function Blog() {
  return (
    <section id="blog" className="py-24">
      <div className="container-content">
        <Reveal>
          <p className="eyebrow mb-4">Blog</p>
          <h2 className="section-title max-w-2xl">Writing on education, AI and technology.</h2>
          <p className="mt-4 text-sm text-slate dark:text-paper/60 max-w-xl">
            Draft topics below — ready to become full articles.
          </p>
        </Reveal>

        <div className="mt-10 grid sm:grid-cols-2 gap-6">
          {blogTopics.map((post, i) => (
            <Reveal key={post.title} delay={(i % 2) * 0.08}>
              <div className="hairline pt-5">
                <p className="text-xs font-mono uppercase tracking-wide text-teal dark:text-teal-light">
                  {post.category}
                </p>
                <h3 className="font-display text-lg mt-2">{post.title}</h3>
                <span className="inline-block mt-3 text-xs px-2 py-1 rounded-full border border-ink/15 dark:border-paper/15 text-slate dark:text-paper/50">
                  Draft
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
