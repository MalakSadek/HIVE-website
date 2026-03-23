import Image from "next/image";
import type { ReactNode } from "react";
import { Container } from "./Container";

type Activity = {
  text: string;
};

const activities: Activity[] = [];

/**
 * Lightweight formatter for activity text.
 *
 * Supported syntax:
 * - Bold: `**some text**`
 * - Link: `[label](https://example.com)`
 *
 * Examples:
 * - "Dr. **Malak Sadek** presented at [The Symposium](https://example.com)"
 */
function renderActivityText(text: string): ReactNode {
  // Match either a markdown-style link or bold segment.
  const pattern = /(\[([^\]]+)\]\(([^)]+)\))|(\*\*([^*]+)\*\*)/g;
  const nodes: ReactNode[] = [];

  let lastIndex = 0;

  let match: RegExpExecArray | null;
  while ((match = pattern.exec(text)) !== null) {
    const matchStart =
      match.index ?? (pattern.lastIndex - (match[0]?.length ?? 0));
    if (matchStart > lastIndex) {
      nodes.push(text.slice(lastIndex, matchStart));
    }

    const fullMatch = match[0];
    const label = match[2];
    const url = match[3];
    const boldText = match[5];

    if (fullMatch.startsWith("[")) {
      // Link
      const href = url?.trim() ?? "#";
      const isInternal = href.startsWith("/");

      nodes.push(
        <a
          key={`${matchStart}-${fullMatch}`}
          href={href}
          className="underline underline-offset-4 decoration-hiveDark hover:opacity-80"
          target={isInternal ? undefined : "_blank"}
          rel={isInternal ? undefined : "noopener noreferrer"}
        >
          {label}
        </a>
      );
    } else {
      // Bold
      nodes.push(<strong key={`${matchStart}-${fullMatch}`}>{boldText}</strong>);
    }

    lastIndex = matchStart + fullMatch.length;
  }

  if (lastIndex < text.length) nodes.push(text.slice(lastIndex));
  return nodes;
}

export function ActivitiesSection() {
  const items = activities.length ? activities : [{text: "**Dr. Malak Sadek** and **Dr. Dorian Peters** held a workshop titled ['Aligning Conversational AI with Human Values'](https://www.facebook.com/IPPAnet/videos/can-ai-truly-support-human-flourishing-it-starts-with-embedding-your-values-from/919555910537110/) at [the International Positive Psychology Association](https://ippanetwork.org/)'s ['AI and the Future of Wellbeing' Summit](https://ippasummit.vfairs.com/)."},{ text: "**Dr. Malak Sadek** and **Echo Wan** held an event at [The Cambridge Festival](https://www.festival.cam.ac.uk/) titled ['AI Facilitated Problem Solving'](https://www.festival.cam.ac.uk/events/problem-solving-more-problem-discovery-using-gamified-conversational-ai-support-collaborative) using an LLM facilitator to help members of the general public converge and problem solve together." }, { text: "**Dr. Malak Sadek** was part of a panel titled ['Making AI Sound Human. Should We? And What Happens When We Do?'](https://www.linkedin.com/posts/european-chatbot-summit_edinburgh-activity-7429502405077004288-CJ1L?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAACdPwK4BgYoJpjX_VYdfCWS2hzGr4rozTzI) at [The European Chatbot and Conversational AI Summit](https://theeuropeanchatbot.org/) in Edinburgh." }];

  return (
    <section id="activities" className="bg-white pt-8 pb-16">
      <Container>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight text-hiveDark mb-10 text-center">
          Latest Activities
        </h2>

        <div className="space-y-8 w-full">
          {items.map((item, index) => (
            <div key={index} className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="relative h-16 w-16 mb-2">
                  <Image
                    src="/img/logo-transparent.png"
                    alt="HIVE"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="flex-1 dashed-vertical-light w-px" />
              </div>
              <p className="text-sm md:text-base text-gray-800 pt-1">
                {renderActivityText(item.text)}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 border-t-4 border-hiveGold w-full" />
      </Container>
    </section>
  );
}

