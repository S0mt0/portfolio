import { PageShell } from "@/components/common/page-shell";
import { HeroSection } from "./_components/hero-section";
import { LandingAside } from "./_components/landing-aside";
import { SelectedNotesSection } from "./_components/selected-notes-section";
import { SelectedWorksSection } from "./_components/selected-works-section";
import { getLandingContent } from "@/lib/landing-content";

export default async function HomePage() {
  const landingContent = await getLandingContent();

  return (
    <PageShell className="cursor-default py-10 sm:py-16">
      <HeroSection content={landingContent.hero} />

      <section className="mt-12 grid gap-10 lg:grid-cols-[minmax(0,1fr)_18rem]">
        <div className="space-y-12">
          <SelectedWorksSection content={landingContent.selectedWorks} />
          <SelectedNotesSection content={landingContent.selectedNotes} />
        </div>
        <LandingAside content={landingContent.aside} />
      </section>
    </PageShell>
  );
}
