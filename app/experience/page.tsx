import type { Metadata } from "next";

import { ExperienceRegistry } from "./_components/experience-registry";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Somto's fullstack development timeline and transition into smart contract security.",
};

export default function ExperiencePage() {
  return <ExperienceRegistry />;
}
