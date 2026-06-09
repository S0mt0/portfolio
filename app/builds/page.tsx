import type { Metadata } from "next";

import { PageShell } from "@/components/common/page-shell";
import { SectionHeading } from "@/components/common/section-heading";
import { getBuildsContent } from "@/lib/api/pages";
import { builds, pageIntros } from "@/lib/fallbacks/portfolio-data";
import type { BuildItem, BuildsPageContent } from "@/lib/types/experience";
import { BuildList } from "./_components/build-list";

export const metadata: Metadata = {
  title: "Builds",
  description:
    "Selected fullstack, Web3, and smart contract learning builds from Somto.",
};

export const revalidate = 900;

export default async function BuildsPage() {
  const response = await getBuildsContent();
  const content = response?.data;
  const intro = content?.hero
    ? {
        ...pageIntros.builds,
        eyebrow: content.hero.eyebrow,
        heading: content.hero.title,
        description: content.hero.description,
      }
    : pageIntros.builds;

  const items: BuildItem[] = content?.items?.length
    ? content.items.map((build: BuildsPageContent["items"][number], index) => ({
        index: String(index + 1).padStart(3, "0"),
        name: build.title,
        category: build.category,
        status: build.featured ? "active" : "shipped",
        description: build.summary || "",
        proof: build.proofNote || "",
        stack: build.stack || [],
        githubHref: build.githubUrl || undefined,
        liveHref: build.liveUrl || undefined,
      }))
    : builds;

  return (
    <PageShell>
      <SectionHeading {...intro} tag="SAMPLES" />
      <BuildList items={items} />
    </PageShell>
  );
}
