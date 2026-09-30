"use client";

import { asset } from "@/lib/site";

import { Compass, Hammer, Layers, Ruler, ArrowUpRight } from "lucide-react";
import { Reveal } from "./reveal";

const SERVICES = [
  {
    icon: Ruler,
    image: asset("/images/gallery/img_11.jpeg"),
    alt: "Carpenters setting wall plates and timber battens on a roof structure",
    title: "Roof Structures & Timber Works",
    description:
      "Every great thatch roof starts with sound engineering. Our carpenter team builds and sets complete roof structures and timber works — trusses, wall plates, battens and binders — cut and erected to carry the span beautifully.",
  },
  {
    icon: Layers,
    image: asset("/images/gallery/img_1.jpeg"),
    alt: "Completed cone thatch lapa with steel finial against a blue sky",
    title: "Thatching of New Roofs",
    description:
      "From lapas and rondavels to full homesteads, we thatch new roof structures by hand — quality grass, dense compaction, clean ridging and a finish that turns the whole property into a landmark.",
  },
  {
    icon: Hammer,
    image: asset("/images/gallery/img_7.jpeg"),
    alt: "Craftsman re-thatching and combing an existing farmhouse roof",
    title: "Repairs & Maintenance",
    description:
      "Bring an ageing roof back to life. We brush and comb existing thatch, replace spars and bundles, and strengthen the roof structure underneath — extending the life of your roof by years, at a fraction of the cost of a rebuild.",
  },
  {
    icon: Compass,
    image: asset("/images/gallery/img_10.jpeg"),
    alt: "Freshly thatched roofline after professional assessment",
    title: "Professional Roof Advice",
    description:
      "Buying, selling, or worried about an existing roof? We assess the state of your thatch and structure, tell you plainly what needs attention now and what can wait, and give you a practical maintenance plan.",
  },
];

export function Services() {
  return (
    <section id="services" className="scroll-mt-header bg-white py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-thatch-700">
            What we do
          </p>
          <h2 className="font-display mt-4 text-balance text-3xl font-semibold leading-tight text-bark-900 sm:text-4xl">
            Four crafts. One standard: excellence.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-bark-600">
            Whether it is a brand-new entertainment lapa or a 15-year-old roof
            that needs expert care, every job gets the same hands-on attention.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-7 sm:grid-cols-2">
          {SERVICES.map((service, i) => (
            <Reveal key={service.title} delay={0.08 * (i % 2)}>
              <article className="group h-full overflow-hidden rounded-2xl border border-bark-100 bg-bark-50 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-bark-900/10">
                <div className="relative h-52 overflow-hidden sm:h-56">
                  { }
                  <img
                    src={service.image}
                    alt={service.alt}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-bark-950/55 via-transparent to-transparent" />
                  <span className="absolute bottom-4 left-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-thatch-500 text-bark-950 shadow-lg">
                    <service.icon className="h-5 w-5" aria-hidden />
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="font-display flex items-center justify-between text-xl font-semibold text-bark-900">
                    {service.title}
                    <ArrowUpRight
                      className="h-5 w-5 text-thatch-600 opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:opacity-100"
                      aria-hidden
                    />
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-bark-600 sm:text-base">
                    {service.description}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
