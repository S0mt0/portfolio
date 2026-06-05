import type { Metadata } from "next";

import { PageShell } from "@/components/common/page-shell";
import { SectionHeading } from "@/components/common/section-heading";
import { pageIntros } from "@/lib/portfolio-data";
import { BuildList } from "./_components/build-list";

export const metadata: Metadata = {
  title: "Builds",
  description:
    "Selected fullstack, Web3, and smart contract learning builds from Somto.",
};

export default function BuildsPage() {
  return (
    <PageShell>
      <SectionHeading {...pageIntros.builds} tag="LOGS" />
      <BuildList />
    </PageShell>
  );
}
