"use client";

import Image from "next/image";
import type { KeyboardEvent, MouseEvent, ReactNode } from "react";
import { Container } from "./Container";

type Activity = {
  text: string;
  href?: string;
};

const activities: Activity[] = [];

const DEFAULT_ACTIVITIES: Activity[] = [
  {
    text: "**HIVE CAI Lab's** publication with the **Collective Innovation Lab** at Imperial College London 'KNIT: Computational Boundary Objects for Real-Time Convergence in Interdisciplinary Teams ' at CHI 2026 has earned an **Honourable Mention**.",
    href: "https://programs.sigchi.org/chi/2026/program/content/223274",
  },
  {
    text: "**Afifah Kashif** presented her work ['Governance as Methodology: Toward Anticipatory, Design-Embedded Governance for HRI'](https://sites.google.com/view/interaiworkshophri2026/accepted-papers?authuser=0) at the InterAI Workshop at the [IEEE/ACM International Conference on Human-Robot Interaction (HRI 2026)](https://humanrobotinteraction.org/2026/) in Edinburgh.",
    href: "https://sites.google.com/view/interaiworkshophri2026/accepted-papers?authuser=0",
  },
  {
    text: "**Dr. Malak Sadek** and **Dr. Dorian Peters** held a workshop titled ['Aligning Conversational AI with Human Values'](https://www.facebook.com/IPPAnet/videos/can-ai-truly-support-human-flourishing-it-starts-with-embedding-your-values-from/919555910537110/) at [the International Positive Psychology Association](https://ippanetwork.org/)'s ['AI and the Future of Wellbeing' Summit](https://ippasummit.vfairs.com/).",
    href: "https://www.linkedin.com/posts/dorian-peters_ai-and-the-future-of-wellbeing-navigating-share-7425463313771311104-ItVN?utm_source=share&utm_medium=member_desktop&rcm=ACoAACdPwK4BgYoJpjX_VYdfCWS2hzGr4rozTzI",
  },
  {
    text: "**Dr. Malak Sadek** and **Echo Wan** held an event at [The Cambridge Festival](https://www.festival.cam.ac.uk/) titled ['AI Facilitated Problem Solving'](https://www.festival.cam.ac.uk/events/problem-solving-more-problem-discovery-using-gamified-conversational-ai-support-collaborative) using an LLM facilitator to help members of the general public converge and problem solve together.",
    href: "https://www.linkedin.com/posts/malaksadek_yesterday-was-very-a-fulfilling-day-activity-7442605391819132928-NSO5?utm_source=share&utm_medium=member_desktop&rcm=ACoAACdPwK4BgYoJpjX_VYdfCWS2hzGr4rozTzI",
  },
  {
    text: "**Dr. Malak Sadek** was part of a panel titled ['Making AI Sound Human. Should We? And What Happens When We Do?'](https://www.linkedin.com/posts/european-chatbot-summit_edinburgh-activity-7429502405077004288-CJ1L?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAACdPwK4BgYoJpjX_VYdfCWS2hzGr4rozTzI) at [The European Chatbot and Conversational AI Summit](https://theeuropeanchatbot.org/) in Edinburgh.",
    href: "https://www.linkedin.com/posts/malaksadek_europeanchatbotsummit-ai-chatbots-activity-7441776598904819713-IcmB?utm_source=share&utm_medium=member_desktop&rcm=ACoAACdPwK4BgYoJpjX_VYdfCWS2hzGr4rozTzI",
  },
];

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

function openActivityUrl(href: string) {
  window.open(href, "_blank", "noopener,noreferrer");
}

function isNestedAnchorClick(target: EventTarget | null) {
  return target instanceof Element && target.closest("a") !== null;
}

export function ActivitiesSection() {
  const items = activities.length ? activities : DEFAULT_ACTIVITIES;

  return (
    <section id="activities" className="bg-white pt-8 pb-16">
      <Container>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight text-hiveDark mb-10 text-center">
          Latest Activities
        </h2>

        <div className="w-full max-h-[33rem] overflow-y-auto pr-4 [scrollbar-gutter:stable]">
          <div className="space-y-8 w-full">
            {items.map((item, index) => {
              const rowClassName = [
                "flex items-start gap-4 rounded-sm p-2 border-[1pt] border-transparent transition-colors",
                item.href
                  ? "cursor-pointer hover:border-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                  : "",
              ].join(" ");

              const handleRowClick = (e: MouseEvent<HTMLDivElement>) => {
                if (!item.href || isNestedAnchorClick(e.target)) return;
                openActivityUrl(item.href);
              };

              const handleRowKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
                if (!item.href) return;
                if (e.key !== "Enter" && e.key !== " ") return;
                if (isNestedAnchorClick(e.target)) return;
                e.preventDefault();
                openActivityUrl(item.href);
              };

              return (
                <div
                  key={index}
                  className={rowClassName}
                  role={item.href ? "link" : undefined}
                  tabIndex={item.href ? 0 : undefined}
                  aria-label={item.href ? "Open activity in new tab" : undefined}
                  onClick={handleRowClick}
                  onKeyDown={handleRowKeyDown}
                >
                  <div className="relative h-16 w-16 shrink-0 -mt-1">
                    <Image
                      src="/img/logo-transparent.png"
                      alt=""
                      fill
                      className="object-contain"
                    />
                  </div>
                  <p className="text-sm md:text-base text-gray-800 leading-snug">
                    {renderActivityText(item.text)}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-16 border-t-4 border-hiveGold w-full" />
      </Container>
    </section>
  );
}
