"use client";

import { useState } from "react";
import { Reveal } from "./reveal";
import { contact } from "@/lib/data";
import { Mail, Phone, Linkedin, Github, Download } from "lucide-react";

export function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <section id="contact" className="py-24 bg-paper-soft/40 dark:bg-white/[0.02]">
      <div className="container-content grid lg:grid-cols-2 gap-16">
        <Reveal>
          <p className="eyebrow mb-4">Contact</p>
          <h2 className="section-title max-w-md">Let&rsquo;s talk about your next training program.</h2>

          <div className="mt-8 space-y-4 text-sm">
            <a href={`mailto:${contact.email}`} className="flex items-center gap-3 hover:text-gold transition-colors">
              <Mail size={16} /> {contact.email}
            </a>
            <a href={`tel:${contact.phone}`} className="flex items-center gap-3 hover:text-gold transition-colors">
              <Phone size={16} /> {contact.phone}
            </a>
            <a
              href={contact.linkedin.startsWith("http") ? contact.linkedin : `https://${contact.linkedin}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 hover:text-gold transition-colors"
            >
              <Linkedin size={16} /> LinkedIn
            </a>
            <a
              href={contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 hover:text-gold transition-colors"
            >
              <Github size={16} /> GitHub
            </a>
            <a href="/cv-mariem-sabri.pdf" className="flex items-center gap-3 hover:text-gold transition-colors">
              <Download size={16} /> Download CV
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
            className="space-y-4"
          >
            <div>
              <label htmlFor="name" className="text-xs font-mono uppercase tracking-wide text-slate dark:text-paper/60">
                Name
              </label>
              <input
                id="name"
                required
                className="mt-1 w-full bg-transparent border-b border-ink/20 dark:border-paper/20 py-2 focus:border-gold outline-none"
              />
            </div>
            <div>
              <label htmlFor="email" className="text-xs font-mono uppercase tracking-wide text-slate dark:text-paper/60">
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                className="mt-1 w-full bg-transparent border-b border-ink/20 dark:border-paper/20 py-2 focus:border-gold outline-none"
              />
            </div>
            <div>
              <label htmlFor="message" className="text-xs font-mono uppercase tracking-wide text-slate dark:text-paper/60">
                Message
              </label>
              <textarea
                id="message"
                required
                rows={4}
                className="mt-1 w-full bg-transparent border-b border-ink/20 dark:border-paper/20 py-2 focus:border-gold outline-none resize-none"
              />
            </div>
            <button
              type="submit"
              className="px-6 py-3 bg-ink text-paper dark:bg-paper dark:text-ink text-sm font-medium rounded-full hover:bg-gold hover:text-ink transition-colors"
            >
              {sent ? "Message sent" : "Send message"}
            </button>
            {sent && (
              <p className="text-xs text-teal dark:text-teal-light">
                Thank you — wire this form to an email service (e.g. Resend
                or Formspree) to receive submissions.
              </p>
            )}
          </form>
        </Reveal>
      </div>
    </section>
  );
}
