"use client";

import { Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { asset, CONTACT } from "@/lib/site";
import { Reveal } from "./reveal";

export function CtaBanner() {
  return (
    <section className="relative overflow-hidden bg-bark-950 py-20">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.08]"
        aria-hidden
      >
        { }
        <img
          src={asset("/images/gallery/img_1.jpeg")}
          alt=""
          className="h-full w-full object-cover"
          loading="lazy"
        />
      </div>
      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6">
        <Reveal>
          <h2 className="font-display text-balance text-3xl font-semibold leading-tight text-white sm:text-4xl">
            Ready for a roof that turns heads — and lasts generations?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-white/70">
            Call or email us today for a free, no-obligation site visit and
            quotation. Most quotes are back to you within days, not weeks.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="rounded-full bg-thatch-500 px-8 text-base font-semibold text-bark-950 shadow-xl hover:bg-thatch-400"
            >
              <a href={CONTACT.phoneHref} className="gap-2">
                <Phone className="h-4 w-4" aria-hidden />
                Call {CONTACT.phoneDisplay}
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-full border-white/30 bg-transparent px-8 text-base font-semibold text-white hover:bg-white/10 hover:text-white"
            >
              <a href={`mailto:${CONTACT.email}`} className="gap-2">
                <Mail className="h-4 w-4" aria-hidden />
                Email us
              </a>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
