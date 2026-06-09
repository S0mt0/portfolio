import type { Metadata } from "next";

import { PageShell } from "@/components/common/page-shell";
import { SectionHeading } from "@/components/common/section-heading";
import { pageIntros } from "@/lib/fallbacks/portfolio-data";
import { NotesList } from "./_components/notes-list";

export const metadata: Metadata = {
  title: "Notes",
  description:
    "Somto's planned and drafted technical notes on fullstack engineering, smart contract development, and security review.",
};

export default function NotesPage() {
  return (
    <PageShell>
      <SectionHeading {...pageIntros.notes} tag="NOTE" />
      <NotesList />
    </PageShell>
  );
}
