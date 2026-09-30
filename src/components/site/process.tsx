"use client";

import { asset } from "@/lib/site";

import { ClipboardCheck, PencilRuler, Layers, ShieldCheck } from "lucide-react";
import { Reveal } from "./reveal";

const STEPS = [
  {
    icon: ClipboardCheck,
    title: "Site Visit & Consultation",
    description:
      "We visit your property, listen to what you want, measure the work and talk you through the options — honestly and without obligation.",
  },
  {
    icon: PencilRuler,
    title: "Design & Quotation",
    description:
      "You receive a clear, itemised quotation covering the timber structure, thatch specification and timeline. No surprises later.",
  },
  {
    icon: Layers,
    title: "Structure & Thatching",
    description:
      "Our carpenter team erects the timber structure, then the thatching team layers, compacts and dresses every bundle by hand.",
  },
  {
    icon: ShieldCheck,
    title: "Handover & Aftercare",
    description:
      "We walk the finished roof with you, hand over a maintenance guide, and remain a phone call away for the years ahead.",
  },
];

export function Process() {
  return (
    <section
      id="process"
      className="scroll-mt-header relative overflow-hidden bg-bark-950 py-24 sm:py-28"
    >
      {/* subtle texture backdrop */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        aria-hidden
      >
        { }
        <img
          src={asset("/images/gallery/img_25.jpeg")}
          alt=""
          className="h-full w-full object-cover"
          loading="lazy"
        />
      </div>
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-bark-950 via-transparent to-bark-950"
        aria-hidden
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-thatch-400">
            How we work
          </p>
          <h2 className="font-display mt-4 text-balance text-3xl font-semibold leading-tight text-white sm:text-4xl">
            From first phone call to final bundle — a process you can trust.
          </h2>
        </Reveal>

        <ol className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {STEPS.map((step, i) => (
            <li key={step.title} className="relative">
              <Reveal delay={0.1 * i} className="h-full">
                <div className="flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm transition-colors hover:border-thatch-500/40">
                  <div className="flex items-center justify-between">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-thatch-500 text-bark-950 shadow-lg shadow-bark-950/60">
                      <step.icon className="h-6 w-6" aria-hidden />
                    </span>
                    <span className="font-display text-4xl font-semibold text-white/10">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="font-display mt-5 text-lg font-semibold text-white">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/65">
                    {step.description}
                  </p>
                </div>
              </Reveal>
              {i < STEPS.length - 1 && (
                <span
                  className="absolute right-[-1.25rem] top-1/2 hidden h-px w-5 bg-thatch-500/50 lg:block"
                  aria-hidden
                />
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
