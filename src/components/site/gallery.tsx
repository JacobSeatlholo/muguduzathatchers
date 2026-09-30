"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Expand, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  GALLERY,
  GALLERY_CATEGORIES,
  type GalleryCategory,
  type GalleryItem,
} from "@/lib/site";
import { cn } from "@/lib/utils";
import { Reveal } from "./reveal";

function Lightbox({
  items,
  index,
  onClose,
  onNavigate,
}: {
  items: GalleryItem[];
  index: number | null;
  onClose: () => void;
  onNavigate: (nextIndex: number) => void;
}) {
  const isOpen = index !== null;

  const goPrev = useCallback(() => {
    if (index === null) return;
    onNavigate((index - 1 + items.length) % items.length);
  }, [index, items.length, onNavigate]);

  const goNext = useCallback(() => {
    if (index === null) return;
    onNavigate((index + 1) % items.length);
  }, [index, items.length, onNavigate]);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, goPrev, goNext, onClose]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const item = index !== null ? items[index] : null;

  return (
    <AnimatePresence>
      {isOpen && item && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label={item.caption}
          className="fixed inset-0 z-[70] flex items-center justify-center bg-bark-950/95 p-4 backdrop-blur-sm sm:p-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <Button
            size="icon"
            aria-label="Close gallery viewer"
            className="absolute right-4 top-4 z-10 rounded-full border-white/20 bg-white/10 text-white hover:bg-white/20"
            onClick={onClose}
          >
            <X className="h-5 w-5" />
          </Button>

          <Button
            size="icon"
            aria-label="Previous image"
            className="absolute left-3 top-1/2 z-10 h-11 w-11 -translate-y-1/2 rounded-full border-white/20 bg-white/10 text-white hover:bg-white/20 sm:left-6"
            onClick={(e) => {
              e.stopPropagation();
              goPrev();
            }}
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          <Button
            size="icon"
            aria-label="Next image"
            className="absolute right-3 top-1/2 z-10 h-11 w-11 -translate-y-1/2 rounded-full border-white/20 bg-white/10 text-white hover:bg-white/20 sm:right-6"
            onClick={(e) => {
              e.stopPropagation();
              goNext();
            }}
          >
            <ChevronRight className="h-6 w-6" />
          </Button>

          <motion.figure
            key={item.src}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="flex max-h-full w-full max-w-4xl flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            { }
            <img
              src={item.src}
              alt={item.alt}
              className="max-h-[76vh] w-full rounded-xl object-contain"
            />
            <figcaption className="mt-4 flex flex-wrap items-baseline justify-between gap-2 text-white">
              <span className="text-sm font-medium sm:text-base">
                {item.caption}
              </span>
              <span className="font-display text-sm text-thatch-300">
                {(index ?? 0) + 1} / {items.length}
              </span>
            </figcaption>
          </motion.figure>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export function Gallery() {
  const [filter, setFilter] = useState<GalleryCategory | "all">("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const items = useMemo(
    () =>
      filter === "all"
        ? GALLERY
        : GALLERY.filter((item) => item.category === filter),
    [filter]
  );

  return (
    <section id="gallery" className="scroll-mt-header bg-bark-50 py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-thatch-700">
            Our work
          </p>
          <h2 className="font-display mt-4 text-balance text-3xl font-semibold leading-tight text-bark-900 sm:text-4xl">
            Every roof a signature. Browse the gallery.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-bark-600">
            Real projects, photographed on site across Gauteng and beyond — new
            thatch roofs, careful repairs, conversions and the crews that build
            them.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div
            className="nice-scroll mt-10 flex gap-2 overflow-x-auto pb-2 sm:flex-wrap sm:justify-center"
            role="tablist"
            aria-label="Filter gallery by category"
          >
            {GALLERY_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                role="tab"
                aria-selected={filter === cat.id}
                onClick={() => setFilter(cat.id)}
                className={cn(
                  "shrink-0 rounded-full border px-5 py-2.5 text-sm font-semibold transition-all",
                  filter === cat.id
                    ? "border-thatch-600 bg-thatch-600 text-white shadow-lg shadow-thatch-600/25"
                    : "border-bark-200 bg-white text-bark-700 hover:border-thatch-400 hover:text-thatch-800"
                )}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </Reveal>

        <motion.div layout className="mt-10 columns-1 gap-5 sm:columns-2 lg:columns-3">
          <AnimatePresence mode="popLayout">
            {items.map((item, i) => (
              <motion.figure
                layout
                key={item.src}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="group relative mb-5 break-inside-avoid cursor-zoom-in overflow-hidden rounded-xl"
                onClick={() => setLightboxIndex(i)}
              >
                { }
                <img
                  src={item.src}
                  alt={item.alt}
                  loading="lazy"
                  className="w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-bark-950/80 via-bark-950/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <span className="pointer-events-none absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/15 text-white opacity-0 backdrop-blur transition-opacity duration-300 group-hover:opacity-100">
                  <Expand className="h-4 w-4" aria-hidden />
                </span>
                <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 translate-y-2 p-4 text-sm font-medium text-white opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  {item.caption}
                </figcaption>
              </motion.figure>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <Lightbox
        items={items}
        index={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onNavigate={setLightboxIndex}
      />
    </section>
  );
}
