"use client";

import { asset } from "@/lib/site";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { Reveal } from "./reveal";

const HIGHLIGHTS = [
  "Owner-managed quality control on every site",
  "Experienced carpenters and thatchers in dedicated teams",
  "Honest, professional advice from the first visit",
  "A 23-year reputation built purely on word of mouth",
];

export function About() {
  return (
    <section id="about" className="scroll-mt-header bg-bark-50 py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          {/* Collage */}
          <div className="relative mx-auto w-full max-w-xl lg:mx-0">
            <Reveal>
              <div className="overflow-hidden rounded-2xl shadow-2xl shadow-bark-900/20">
                { }
                <img
                  src={asset("/images/gallery/img_5.jpeg")}
                  alt="Muguduza Thatchers team at work on twin lapa roofs, branded bakkie in the foreground"
                  className="aspect-[4/3] w-full object-cover"
                  loading="lazy"
                />
              </div>
            </Reveal>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-70px" }}
              transition={{ duration: 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="absolute -bottom-10 -right-3 w-[55%] sm:-right-8"
            >
              <div className="overflow-hidden rounded-2xl border-8 border-bark-50 shadow-xl shadow-bark-900/25">
                { }
                <img
                  src={asset("/images/gallery/img_3.jpeg")}
                  alt="Thatchers hand-bundling grass on a new roof span"
                  className="aspect-[4/3] w-full object-cover"
                  loading="lazy"
                />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-70px" }}
              transition={{ duration: 0.7, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="absolute -top-6 -left-3 rounded-2xl bg-bark-900 px-6 py-5 text-white shadow-xl shadow-bark-900/30 sm:-left-8"
            >
              <p className="font-display text-4xl font-semibold text-thatch-300">
                23<span className="text-2xl">+</span>
              </p>
              <p className="mt-1 text-xs font-medium uppercase tracking-[0.18em] text-white/70">
                Years of
                <br />
                craftsmanship
              </p>
            </motion.div>
          </div>

          {/* Copy */}
          <div>
            <Reveal>
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-thatch-700">
                About Muguduza
              </p>
              <h2 className="font-display mt-4 text-balance text-3xl font-semibold leading-tight text-bark-900 sm:text-4xl">
                A hands-on team, a craft passed down, and roofs that speak for
                themselves.
              </h2>
            </Reveal>
            <Reveal delay={0.12}>
              <div className="mt-6 space-y-4 text-base leading-relaxed text-bark-700">
                <p>
                  Muguduza Thatchers cc was founded by Mr. Petrus Mathebula in
                  April 2006, and today the business is celebrating 23 years in
                  the thatching trade. Mr. Mathebula remains the managing
                  director and sole owner — a hands-on director with 28 years
                  of experience in the thatching industry who still walks every
                  site personally.
                </p>
                <p>
                  The company employs 30 dedicated staff members, led on the
                  ground by site foreman Mr. Danger Lubisi, who brings 20 years
                  of thatching experience of his own. Work is carried out by
                  three specialised teams: the carpenters, who build and
                  strengthen the timber roof structures, and the thatchers, who
                  layer, dress and finish every roof by hand.
                </p>
                <p>
                  For 23 years our work has travelled the way the best things
                  do — by word of mouth, from one happy homeowner to the next.
                  This site simply puts that reputation where you can see it.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <ul className="mt-8 space-y-3">
                {HIGHLIGHTS.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2
                      className="mt-0.5 h-5 w-5 shrink-0 text-thatch-600"
                      aria-hidden
                    />
                    <span className="text-sm font-medium text-bark-800 sm:text-base">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
