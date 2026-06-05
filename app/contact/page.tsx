import type { Metadata } from "next";

import { ContactDesk } from "./_components/contact-desk";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Somto for fullstack, Web3 frontend, Solidity, and early security-facing work.",
};

export default function ContactPage() {
  return <ContactDesk />;
}
