import { LandingImage } from "@/components/LandingImage";
import { IntroSection } from "@/components/IntroSection";
import { ResearchPathways } from "@/components/ResearchPathways";
import { TeamSection } from "@/components/TeamSection";
import { PrinciplesSection } from "@/components/PrinciplesSection";
import { ActivitiesSection } from "@/components/ActivitiesSection";
import { JoinSection } from "@/components/JoinSection";
import { getCarouselImages } from "@/lib/getCarouselImages";

export default function Home() {
  const carouselImages = getCarouselImages();

  return (
    <>
      <LandingImage />
      <IntroSection />
      <ResearchPathways />
      <TeamSection />
      <ActivitiesSection carouselImages={carouselImages} />
      <PrinciplesSection />
      <JoinSection />
    </>
  );
}
