"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useInView } from "framer-motion";
import { ArrowDown, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { HERO_SLIDES, STATS } from "@/lib/site";

const SLIDE_INTERVAL = 6000;

function CountUp({ value, suffix }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 1400;
    const start = performance.now();
    let frame: number;
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(eased * value));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, value]);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}

export function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(
      () => setIndex((i) => (i + 1) % HERO_SLIDES.length),
      SLIDE_INTERVAL
    );
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] flex-col overflow-hidden bg-bark-950"
    >
      {/* Slideshow */}
      <div className="absolute inset-0" aria-hidden>
        <AnimatePresence mode="sync">
          <motion.div
            key={index}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.4, ease: "easeInOut" }}
          >
            { }
            <img
              src={HERO_SLIDES[index].src}
              alt=""
              className="kenburns h-full w-full object-cover"
            />
          </motion.div>
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-b from-bark-950/75 via-bark-950/35 to-bark-950/85" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-bark-950 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative mx-auto flex w-full max-w-7xl flex-1 flex-col justify-center px-4 pt-32 pb-16 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-thatch-300/40 bg-bark-950/40 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.22em] text-thatch-200 backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-thatch-400" />
            23 Years of Master Thatching
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="font-display mt-6 max-w-3xl text-balance text-4xl font-semibold leading-[1.08] text-white sm:text-5xl lg:text-[3.9rem]"
        >
          Beautiful thatch roofs,{" "}
          <span className="text-thatch-300">built to last generations.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg"
        >
          From the first timber beam to the final hand-combed finish —
          Muguduza Thatchers delivers roof craft that has kept families
          recommending us for over two decades.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="mt-9 flex flex-wrap items-center gap-4"
        >
          <Button
            asChild
            size="lg"
            className="rounded-full bg-thatch-500 px-8 text-base font-semibold text-bark-950 shadow-xl shadow-bark-950/40 transition-colors hover:bg-thatch-400"
          >
            <a href="#gallery" className="gap-2">
              View our work
              <ArrowDown className="h-4 w-4" aria-hidden />
            </a>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="rounded-full border-white/35 bg-white/5 px-8 text-base font-semibold text-white backdrop-blur transition-colors hover:bg-white/15 hover:text-white"
          >
            <a href="#contact">Get a free quote</a>
          </Button>
        </motion.div>
      </div>

      {/* Stats strip */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.9 }}
        className="relative border-t border-white/10 bg-bark-950/35 backdrop-blur-md"
      >
        <dl className="mx-auto grid max-w-7xl grid-cols-2 gap-y-6 px-4 py-7 sm:px-6 lg:grid-cols-4 lg:px-8">
          {STATS.map((stat) => (
            <div key={stat.label} className="text-center lg:text-left">
              <dt className="order-2 mt-1 block text-xs font-medium uppercase tracking-[0.14em] text-white/60 sm:text-[0.7rem]">
                {stat.label}
              </dt>
              <dd className="font-display order-1 text-3xl font-semibold text-thatch-300 sm:text-4xl">
                <CountUp value={stat.value} suffix={stat.suffix} />
              </dd>
            </div>
          ))}
        </dl>
        <a
          href="#about"
          aria-label="Scroll to about section"
          className="absolute -top-16 right-6 hidden h-12 w-12 items-center justify-center rounded-full border border-white/25 text-white/80 transition-colors hover:border-thatch-300 hover:text-thatch-300 lg:flex"
        >
          <ChevronDown className="h-5 w-5 animate-bounce" aria-hidden />
        </a>
      </motion.div>
    </section>
  );
}
