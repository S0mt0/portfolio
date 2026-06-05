import type { Metadata } from "next";

import { PageShell } from "@/components/common/page-shell";
import { SectionHeading } from "@/components/common/section-heading";
import { pageIntros } from "@/lib/portfolio-data";
import { ContactAside } from "./_components/contact-aside";
import { ContactForm } from "./_components/contact-form";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Somto for fullstack, Web3 frontend, Solidity, and early security-facing work.",
};

export default function ContactPage() {
  return (
    <PageShell>
      <SectionHeading {...pageIntros.contact} tag="HOLA" />
      <section className="mt-10 grid gap-10 lg:grid-cols-[minmax(0,1fr)_20rem]">
        <ContactForm />
        <ContactAside />
      </section>
    </PageShell>
  );
}
