"use client";

import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Facebook, Loader2, Mail, MapPin, Phone, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { CONTACT } from "@/lib/site";
import { Reveal } from "./reveal";

const quoteSchema = z.object({
  name: z.string().min(2, "Please enter your name."),
  phone: z
    .string()
    .min(9, "Please enter a valid contact number.")
    .regex(/^[0-9+()\s-]+$/, "Digits, spaces and + only."),
  email: z
    .string()
    .email("Please enter a valid email address.")
    .optional()
    .or(z.literal("")),
  service: z.string().min(1, "Please choose a service."),
  message: z.string().min(10, "Tell us a little more about the job."),
});

type QuoteForm = z.infer<typeof quoteSchema>;

const SERVICE_OPTIONS = [
  "New roof structure & timber works",
  "Thatching of a new roof",
  "Repairs & maintenance",
  "Professional roof advice / assessment",
  "Roof conversion",
  "Other",
];

const CONTACT_CARDS = [
  {
    icon: Phone,
    label: "Phone",
    value: CONTACT.phoneDisplay,
    href: CONTACT.phoneHref,
  },
  {
    icon: Mail,
    label: "Email",
    value: CONTACT.email,
    href: `mailto:${CONTACT.email}`,
  },
  {
    icon: Facebook,
    label: "Facebook",
    value: "Muguduza Thatchers",
    href: CONTACT.facebook,
  },
];

export function Contact() {
  const { toast } = useToast();
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors, isSubmitting },
  } = useForm<QuoteForm>({
    resolver: zodResolver(quoteSchema),
    defaultValues: { name: "", phone: "", email: "", service: "", message: "" },
  });

  const onSubmit = async (data: QuoteForm) => {
    // Demo handler: opens the user's email client with the enquiry pre-filled.
    const subject = encodeURIComponent(
      `Quote request: ${data.service} — ${data.name}`
    );
    const body = encodeURIComponent(
      [
        `Name: ${data.name}`,
        `Phone: ${data.phone}`,
        data.email ? `Email: ${data.email}` : null,
        `Service: ${data.service}`,
        "",
        data.message,
      ]
        .filter(Boolean)
        .join("\n")
    );
    const mailtoUrl = `mailto:${CONTACT.email}?subject=${subject}&body=${body}`;
    window.location.assign(mailtoUrl);

    await new Promise((r) => setTimeout(r, 600));
    toast({
      title: "Thank you! Your enquiry is ready to send.",
      description:
        "Your email client has been opened with the details — just hit send. Prefer to talk? Call us on 082 713 6435.",
    });
    reset();
  };

  return (
    <section id="contact" className="scroll-mt-header bg-bark-50 py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-5 lg:gap-16">
          {/* Info column */}
          <div className="lg:col-span-2">
            <Reveal>
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-thatch-700">
                Get in touch
              </p>
              <h2 className="font-display mt-4 text-balance text-3xl font-semibold leading-tight text-bark-900 sm:text-4xl">
                Let&apos;s talk about your roof.
              </h2>
              <p className="mt-4 text-base leading-relaxed text-bark-600">
                Based in Midrand, Gauteng — working across South Africa. Phone
                us directly, send an email, or complete the form and we will
                call you back to arrange a free site visit.
              </p>
            </Reveal>

            <Reveal delay={0.12}>
              <ul className="mt-8 space-y-4">
                {CONTACT_CARDS.map((card) => (
                  <li key={card.label}>
                    <a
                      href={card.href}
                      target={card.href.startsWith("http") ? "_blank" : undefined}
                      rel={card.href.startsWith("http") ? "noreferrer" : undefined}
                      className="group flex items-center gap-4 rounded-2xl border border-bark-100 bg-white p-4 transition-all hover:-translate-y-0.5 hover:border-thatch-300 hover:shadow-md"
                    >
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-thatch-100 text-thatch-700 transition-colors group-hover:bg-thatch-500 group-hover:text-bark-950">
                        <card.icon className="h-5 w-5" aria-hidden />
                      </span>
                      <span>
                        <span className="block text-xs font-semibold uppercase tracking-[0.14em] text-bark-500">
                          {card.label}
                        </span>
                        <span className="mt-0.5 block text-sm font-semibold text-bark-900">
                          {card.value}
                        </span>
                      </span>
                    </a>
                  </li>
                ))}
                <li className="flex items-start gap-4 rounded-2xl border border-bark-100 bg-white p-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-thatch-100 text-thatch-700">
                    <MapPin className="h-5 w-5" aria-hidden />
                  </span>
                  <span>
                    <span className="block text-xs font-semibold uppercase tracking-[0.14em] text-bark-500">
                      Address
                    </span>
                    <address className="mt-0.5 text-sm not-italic leading-relaxed text-bark-900">
                      {CONTACT.addressLines.map((line) => (
                        <span key={line} className="block">
                          {line}
                        </span>
                      ))}
                    </address>
                  </span>
                </li>
              </ul>
            </Reveal>
          </div>

          {/* Form column */}
          <Reveal delay={0.15} className="lg:col-span-3">
            <form
              onSubmit={handleSubmit(onSubmit)}
              noValidate
              className="rounded-2xl border border-bark-100 bg-white p-6 shadow-sm sm:p-8"
            >
              <h3 className="font-display text-xl font-semibold text-bark-900">
                Request a free quote
              </h3>
              <p className="mt-1 text-sm text-bark-500">
                Tell us about your project — we typically respond the same
                working day.
              </p>

              <div className="mt-6 grid gap-5 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name">Full name *</Label>
                  <Input
                    id="name"
                    placeholder="e.g. Thabo Mokoena"
                    aria-invalid={!!errors.name}
                    {...register("name")}
                  />
                  {errors.name && (
                    <p className="text-xs font-medium text-destructive">
                      {errors.name.message}
                    </p>
                  )}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Contact number *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="e.g. 082 123 4567"
                    aria-invalid={!!errors.phone}
                    {...register("phone")}
                  />
                  {errors.phone && (
                    <p className="text-xs font-medium text-destructive">
                      {errors.phone.message}
                    </p>
                  )}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email (optional)</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="you@example.co.za"
                    aria-invalid={!!errors.email}
                    {...register("email")}
                  />
                  {errors.email && (
                    <p className="text-xs font-medium text-destructive">
                      {errors.email.message}
                    </p>
                  )}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="service">Service needed *</Label>
                  <Controller
                    name="service"
                    control={control}
                    render={({ field }) => (
                      <Select value={field.value} onValueChange={field.onChange}>
                        <SelectTrigger id="service" aria-invalid={!!errors.service}>
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent>
                          {SERVICE_OPTIONS.map((option) => (
                            <SelectItem key={option} value={option}>
                              {option}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    )}
                  />
                  {errors.service && (
                    <p className="text-xs font-medium text-destructive">
                      {errors.service.message}
                    </p>
                  )}
                </div>
                <div className="space-y-2 sm:col-span-2">
                  <Label htmlFor="message">About the job *</Label>
                  <Textarea
                    id="message"
                    rows={5}
                    placeholder="Tell us about your property, the roof size or the problem you're seeing…"
                    aria-invalid={!!errors.message}
                    {...register("message")}
                  />
                  {errors.message && (
                    <p className="text-xs font-medium text-destructive">
                      {errors.message.message}
                    </p>
                  )}
                </div>
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="mt-6 w-full rounded-full bg-thatch-600 py-6 text-base font-semibold text-white shadow-lg shadow-thatch-600/20 transition-colors hover:bg-thatch-700 sm:w-auto sm:px-10"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" aria-hidden />
                    Sending…
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4" aria-hidden />
                    Send enquiry
                  </>
                )}
              </Button>
              <p className="mt-3 text-xs text-bark-400">
                Submitting opens your email app with the enquiry pre-filled for
                info@muguduzathatchers.co.za — no details are stored on this
                site.
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
