"use client";

import Link from "next/link";
import { ArrowUpRight, Facebook, Mail, MapPin, Phone } from "lucide-react";
import { asset, CONTACT, NAV_LINKS } from "@/lib/site";

const SERVICE_LINKS = [
  "Roof structures & timber works",
  "Thatching of new roofs",
  "Repairs & maintenance",
  "Professional roof advice",
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-bark-950 text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            { }
            <img
              src={asset("/images/brand/logo.png")}
              alt="Muguduza Thatchers logo"
              className="h-14 w-auto mix-blend-screen"
              loading="lazy"
            />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/60">
              Master thatchers based in Midrand, Gauteng. 23 years of beautiful
              roofs, honest advice and workmanship that sells itself.
            </p>
            <a
              href={CONTACT.facebook}
              target="_blank"
              rel="noreferrer"
              aria-label="Muguduza Thatchers on Facebook"
              className="mt-5 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/70 transition-colors hover:border-thatch-400 hover:text-thatch-300"
            >
              <Facebook className="h-4 w-4" aria-hidden />
            </a>
          </div>

          {/* Quick links */}
          <nav aria-label="Footer">
            <h3 className="text-xs font-bold uppercase tracking-[0.22em] text-thatch-400">
              Explore
            </h3>
            <ul className="mt-4 space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/65 transition-colors hover:text-thatch-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Services */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.22em] text-thatch-400">
              Services
            </h3>
            <ul className="mt-4 space-y-2.5">
              {SERVICE_LINKS.map((service) => (
                <li key={service} className="text-sm text-white/65">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.22em] text-thatch-400">
              Contact
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-white/65">
              <li>
                <a
                  href={CONTACT.phoneHref}
                  className="flex items-center gap-2.5 transition-colors hover:text-thatch-300"
                >
                  <Phone className="h-4 w-4 shrink-0 text-thatch-500" aria-hidden />
                  {CONTACT.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="flex items-center gap-2.5 break-all transition-colors hover:text-thatch-300"
                >
                  <Mail className="h-4 w-4 shrink-0 text-thatch-500" aria-hidden />
                  {CONTACT.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin
                  className="mt-0.5 h-4 w-4 shrink-0 text-thatch-500"
                  aria-hidden
                />
                <span>
                  {CONTACT.addressLines.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-6 text-center text-xs text-white/45 sm:flex-row sm:px-6 sm:text-left lg:px-8">
          <p>
            © {year} Muguduza Thatchers cc. All rights reserved.
          </p>
          <p className="hidden xl:block">
            Thatching &amp; General Trading in all Aspects · Est. Midrand, Gauteng
          </p>
          <a
            href="https://www.businesshustle.co.za/"
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-1.5 transition-colors hover:text-white/70"
          >
            <span>Built by</span>
            <span className="font-semibold text-thatch-400 transition-colors group-hover:text-thatch-300">
              Business Hustle
            </span>
            <ArrowUpRight
              className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              aria-hidden
            />
          </a>
        </div>
      </div>
    </footer>
  );
}
