import { PageShell } from "@/components/common/page-shell";
import { HeroSection } from "./_components/hero-section";
import { LandingAside } from "./_components/landing-aside";
import { SelectedNotesSection } from "./_components/selected-notes-section";
import { SelectedWorksSection } from "./_components/selected-works-section";

export default function HomePage() {
  return (
    <PageShell className="cursor-default py-10 sm:py-16">
      <HeroSection />

      <section className="mt-12 grid gap-10 lg:grid-cols-[minmax(0,1fr)_18rem]">
        <div className="space-y-12">
          <SelectedWorksSection />
          <SelectedNotesSection />
        </div>
        <LandingAside />
      </section>
    </PageShell>
  );
}
