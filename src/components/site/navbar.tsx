"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Phone, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { NAV_LINKS, CONTACT } from "@/lib/site";
import { cn } from "@/lib/utils";

function Wordmark({ dark }: { dark?: boolean }) {
  return (
    <Link href="#home" className="flex items-center gap-3 group">
      <span
        className={cn(
          "flex h-10 w-10 items-center justify-center rounded-lg border font-display text-xl font-semibold transition-colors",
          dark
            ? "border-thatch-400/30 bg-bark-950/60 text-thatch-300"
            : "border-white/20 bg-white/10 text-thatch-200"
        )}
        aria-hidden
      >
        M
      </span>
      <span className="leading-none">
        <span
          className={cn(
            "block font-display text-lg font-semibold tracking-[0.18em]",
            dark ? "text-bark-900" : "text-white"
          )}
        >
          MUGUDUZA
        </span>
        <span
          className={cn(
            "mt-1 block text-[0.6rem] font-medium uppercase tracking-[0.42em]",
            dark ? "text-thatch-700" : "text-thatch-300"
          )}
        >
          Thatchers
        </span>
      </span>
    </Link>
  );
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "border-b border-bark-100/70 bg-bark-50/90 py-3 shadow-sm backdrop-blur-xl"
          : "bg-transparent py-5"
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Wordmark dark={scrolled} />

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={cn(
                "rounded-full px-4 py-2 text-sm font-medium transition-colors",
                scrolled
                  ? "text-bark-700 hover:bg-thatch-100 hover:text-thatch-800"
                  : "text-white/85 hover:bg-white/10 hover:text-white"
              )}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Button
            asChild
            className={cn(
              "hidden rounded-full font-semibold shadow-lg transition-all sm:inline-flex",
              scrolled
                ? "bg-thatch-600 text-white hover:bg-thatch-700"
                : "bg-thatch-500 text-bark-950 hover:bg-thatch-400"
            )}
          >
            <a href={CONTACT.phoneHref} className="gap-2">
              <Phone className="h-4 w-4" aria-hidden />
              {CONTACT.phoneDisplay}
            </a>
          </Button>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                aria-label="Open menu"
                className={cn(
                  "rounded-full lg:hidden",
                  scrolled
                    ? "border-bark-200 bg-white/80 text-bark-800"
                    : "border-white/30 bg-white/10 text-white backdrop-blur"
                )}
              >
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[300px] border-bark-100 bg-bark-50"
            >
              <SheetHeader className="pb-2 pt-6 pr-10 text-left">
                <SheetTitle className="font-display text-base tracking-[0.18em] text-bark-900">
                  MUGUDUZA{" "}
                  <span className="text-thatch-700">THATCHERS</span>
                </SheetTitle>
              </SheetHeader>
              <nav
                className="mt-2 flex flex-col gap-1 px-4"
                aria-label="Mobile"
              >
                {NAV_LINKS.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="rounded-lg px-3 py-3 text-base font-medium text-bark-800 transition-colors hover:bg-thatch-100 hover:text-thatch-800"
                  >
                    {link.label}
                  </a>
                ))}
                <Button asChild className="mt-4 rounded-full bg-thatch-600 font-semibold text-white hover:bg-thatch-700">
                  <a href={CONTACT.phoneHref} className="gap-2">
                    <Phone className="h-4 w-4" aria-hidden />
                    Call {CONTACT.phoneDisplay}
                  </a>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
