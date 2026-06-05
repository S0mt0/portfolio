import type { Metadata } from "next";

import { PageShell } from "@/components/common/page-shell";
import { SectionHeading } from "@/components/common/section-heading";
import { pageIntros } from "@/lib/portfolio-data";
import { ExperienceTimeline } from "./_components/experience-timeline";
import { OperatingNote } from "./_components/operating-note";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Somto's fullstack development timeline and transition into smart contract security.",
};

export default function ExperiencePage() {
  return (
    <PageShell>
      <SectionHeading {...pageIntros.experience} tag="XP" />
      <ExperienceTimeline />
      <OperatingNote />
    </PageShell>
  );
}
