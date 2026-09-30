"use client";

import { Phone, Quote } from "lucide-react";
import { REFERENCES } from "@/lib/site";
import { Reveal } from "./reveal";

export function References() {
  return (
    <section className="bg-white py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <Quote
            className="mx-auto h-8 w-8 text-thatch-500"
            aria-hidden
          />
          <h2 className="font-display mt-4 text-balance text-2xl font-semibold leading-snug text-bark-900 sm:text-3xl">
            “Muguduza is highly experienced and provides professional
            services.”
          </h2>
          <p className="mt-4 text-base leading-relaxed text-bark-600">
            For 23 years, our clients have done our marketing for us. These
            trade references have worked with us and will happily take your
            call.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {REFERENCES.map((ref, i) => (
            <Reveal key={ref.name} delay={0.08 * i}>
              <article className="flex h-full flex-col items-center rounded-2xl border border-bark-100 bg-bark-50 p-7 text-center transition-all duration-300 hover:-translate-y-1 hover:border-thatch-300 hover:shadow-lg hover:shadow-bark-900/10">
                <span
                  className="flex h-14 w-14 items-center justify-center rounded-full bg-bark-900 font-display text-lg font-semibold text-thatch-300"
                  aria-hidden
                >
                  {ref.name
                    .split(" ")
                    .map((word) => word[0])
                    .slice(0, 2)
                    .join("")}
                </span>
                <h3 className="font-display mt-4 text-lg font-semibold text-bark-900">
                  {ref.name}
                </h3>
                <p className="mt-1 text-xs font-medium uppercase tracking-[0.16em] text-bark-500">
                  Trade reference
                </p>
                <a
                  href={ref.phoneHref}
                  className="mt-4 inline-flex items-center gap-2 rounded-full border border-bark-200 bg-white px-4 py-2 text-sm font-semibold text-bark-800 transition-colors hover:border-thatch-500 hover:text-thatch-700"
                >
                  <Phone className="h-4 w-4 text-thatch-600" aria-hidden />
                  {ref.phoneDisplay}
                </a>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
