"use client";

import type { FormEvent } from "react";
import { Download, Mail, Send } from "lucide-react";
import { motion } from "framer-motion";

import { PageShell } from "@/components/common/page-shell";
import { SectionHeading } from "@/components/common/section-heading";
import { Button } from "@/components/ui/button";
import { pageIntros, socialLinks } from "@/lib/portfolio-data";

const fieldClassName =
  "w-full rounded-none border border-border/30 bg-background/55 px-3 py-2.5 text-sm outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-primary";

export function ContactDesk() {
  const intro = pageIntros.contact;

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") ?? "");
    const email = String(formData.get("email") ?? "");
    const workType = String(formData.get("workType") ?? "");
    const timeline = String(formData.get("timeline") ?? "");
    const budget = String(formData.get("budget") ?? "");
    const details = String(formData.get("details") ?? "");

    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Work type: ${workType}`,
      `Timeline: ${timeline}`,
      `Budget: ${budget}`,
      "",
      "Project details:",
      details,
    ].join("\n");

    window.location.href = `mailto:hello@0xsomto.xyz?subject=${encodeURIComponent(
      "Work request for 0xSomto"
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <PageShell>
      <SectionHeading {...intro} tag="HOLA" />

      <section className="mt-10 grid gap-10 lg:grid-cols-[minmax(0,1fr)_20rem]">
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="relative border-y border-border/25 py-8"
        >
          <div className="absolute right-0 top-0 hidden -translate-y-1/2 rotate-3 border border-border/35 bg-accent px-4 py-2 text-xs font-black uppercase tracking-[0.16em] sm:block">
            open
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <label className="grid gap-2 text-sm font-bold">
              Your name
              <input
                name="name"
                required
                className={fieldClassName}
                placeholder="Jane Doe"
              />
            </label>
            <label className="grid gap-2 text-sm font-bold">
              Email
              <input
                name="email"
                type="email"
                required
                className={fieldClassName}
                placeholder="you@example.com"
              />
            </label>
          </div>

          <div className="mt-4 grid gap-4 sm:grid-cols-3">
            <label className="grid gap-2 text-sm font-bold">
              Work type
              <select name="workType" className={fieldClassName} defaultValue="">
                <option value="" disabled>
                  Choose one
                </option>
                <option>Fullstack product</option>
                <option>Web3 frontend</option>
                <option>Solidity support</option>
                <option>Code review</option>
              </select>
            </label>
            <label className="grid gap-2 text-sm font-bold">
              Timeline
              <input
                name="timeline"
                className={fieldClassName}
                placeholder="2-4 weeks"
              />
            </label>
            <label className="grid gap-2 text-sm font-bold">
              Budget
              <input
                name="budget"
                className={fieldClassName}
                placeholder="Range is fine"
              />
            </label>
          </div>

          <label className="mt-4 grid gap-2 text-sm font-bold">
            What are we making?
            <textarea
              name="details"
              required
              rows={8}
              className={fieldClassName}
              placeholder="Tell me the problem, what already exists, what needs to ship, and what a good outcome looks like."
            />
          </label>

          <div className="mt-6 flex flex-wrap gap-3">
            <Button
              type="submit"
              size="lg"
              className="h-11 rounded-none bg-foreground px-5 text-background hover:bg-foreground/85"
            >
              Draft email
              <Send className="h-4 w-4" />
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="h-11 rounded-none border-border/40 bg-transparent px-5"
            >
              <a href="/somto-cv.pdf" download>
                Download CV
                <Download className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </motion.form>

        <aside className="space-y-8">
          <motion.section
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: 0.08, ease: "easeOut" }}
            className="border-y border-border/25 py-6"
          >
            <p className="font-sketch text-3xl font-bold text-primary">
              Handles
            </p>
            <div className="mt-5 grid gap-3">
              {socialLinks.map(({ href, label, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    href.startsWith("http")
                      ? "noreferrer noopener"
                      : undefined
                  }
                  className="group flex items-center justify-between border-b border-border/20 py-3 text-sm font-bold last:border-b-0 hover:text-primary"
                >
                  <span className="inline-flex items-center gap-2">
                    <Icon className="h-4 w-4" />
                    {label}
                  </span>
                  <span className="font-sketch text-xl transition-transform group-hover:translate-x-1">
                    go
                  </span>
                </a>
              ))}
            </div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: 0.14, ease: "easeOut" }}
            className="relative border border-border/25 bg-card/45 p-5"
          >
            <div className="absolute right-4 top-4 h-12 w-12 rotate-6 border border-border/35 bg-secondary" />
            <Mail className="h-5 w-5 text-primary" />
            <p className="mt-5 text-sm font-semibold leading-7">
              A useful first message has the goal, the current state, the rough
              deadline, and where I can be most helpful.
            </p>
          </motion.section>
        </aside>
      </section>
    </PageShell>
  );
}
