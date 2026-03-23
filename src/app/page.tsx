import { LandingImage } from "@/components/LandingImage";
import { IntroSection } from "@/components/IntroSection";
import { ResearchPathways } from "@/components/ResearchPathways";
import { TeamSection } from "@/components/TeamSection";
import { PrinciplesSection } from "@/components/PrinciplesSection";
import { ActivitiesSection } from "@/components/ActivitiesSection";
import { JoinSection } from "@/components/JoinSection";

export default function Home() {
  return (
    <>
      <LandingImage />
      <IntroSection />
      <ResearchPathways />
      <TeamSection />
      <PrinciplesSection />
      <ActivitiesSection />
      <JoinSection />
    </>
  );
}
