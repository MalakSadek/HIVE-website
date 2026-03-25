"use client";

import { useLayoutEffect, useRef, useState } from "react";
import Image from "next/image";
import { Container } from "./Container";

export function ResearchPathways() {
  const [isValueVizOpen, setIsValueVizOpen] = useState(false);
  const [isCoDesignOpen, setIsCoDesignOpen] = useState(false);
  const [isLivingValuesBox1Open, setIsLivingValuesBox1Open] = useState(false);
  const [isLivingValuesBox2Open, setIsLivingValuesBox2Open] = useState(false);
  const [isLivingValuesBox3Open, setIsLivingValuesBox3Open] = useState(false);

  const layoutRef = useRef<HTMLDivElement | null>(null);
  const leftCardRef = useRef<HTMLDivElement | null>(null);
  const rightCardRef = useRef<HTMLDivElement | null>(null);
  const spotlightRef = useRef<HTMLDivElement | null>(null);

  const [connectorSvg, setConnectorSvg] = useState<{
    width: number;
    height: number;
    leftX: number;
    rightX: number;
    leftBottomY: number;
    rightBottomY: number;
    joinY: number;
    tailY: number;
    midX: number;
    spotlightTopY: number;
  } | null>(null);

  useLayoutEffect(() => {
    const recalc = () => {
      const root = layoutRef.current;
      const left = leftCardRef.current;
      const right = rightCardRef.current;
      const spot = spotlightRef.current;
      if (!root || !left || !right || !spot) return;

      const rootRect = root.getBoundingClientRect();
      const leftRect = left.getBoundingClientRect();
      const rightRect = right.getBoundingClientRect();
      const spotRect = spot.getBoundingClientRect();

      const width = rootRect.width;
      const height = rootRect.height;

      const leftX = leftRect.left + leftRect.width / 2 - rootRect.left;
      const rightX = rightRect.left + rightRect.width / 2 - rootRect.left;
      const leftBottomY = leftRect.bottom - rootRect.top;
      const rightBottomY = rightRect.bottom - rootRect.top;
      const spotlightTopY = spotRect.top - rootRect.top;

      const maxBottom = Math.max(leftBottomY, rightBottomY);
      // Preserve the original geometry offsets: horizontal at 38, vertical tail at 40.
      const joinY = Math.min(maxBottom + 38, spotlightTopY - 20);
      const tailY = Math.min(maxBottom + 40, spotlightTopY - 18);

      setConnectorSvg({
        width,
        height,
        leftX,
        rightX,
        leftBottomY,
        rightBottomY,
        joinY,
        tailY,
        midX: (leftX + rightX) / 2,
        spotlightTopY,
      });
    };

    recalc();
    window.addEventListener("resize", recalc);
    return () => window.removeEventListener("resize", recalc);
  }, [
    isValueVizOpen,
    isCoDesignOpen,
    isLivingValuesBox1Open,
    isLivingValuesBox2Open,
    isLivingValuesBox3Open,
  ]);

  return (
    <section className="bg-white pb-16">
      <Container className="relative px-2 md:px-4 lg:px-6">
        <div ref={layoutRef} className="relative">
          {connectorSvg ? (
            <svg
              className="hidden md:block absolute inset-0 pointer-events-none text-black"
              viewBox={`0 0 ${connectorSvg.width} ${connectorSvg.height}`}
              preserveAspectRatio="none"
            >
              {/* Bottom verticals: start at each card bottom (dynamic) */}
              <line
                x1={connectorSvg.leftX}
                y1={connectorSvg.leftBottomY}
                x2={connectorSvg.leftX}
                y2={connectorSvg.tailY}
                stroke="currentColor"
                strokeWidth="1.5"
                strokeDasharray="6 6"
              />
              <line
                x1={connectorSvg.rightX}
                y1={connectorSvg.rightBottomY}
                x2={connectorSvg.rightX}
                y2={connectorSvg.tailY}
                stroke="currentColor"
                strokeWidth="1.5"
                strokeDasharray="6 6"
              />
              {/* Horizontal connector */}
              <line
                x1={connectorSvg.leftX}
                y1={connectorSvg.joinY+3}
                x2={connectorSvg.rightX}
                y2={connectorSvg.joinY+1}
                stroke="currentColor"
                strokeWidth="1.5"
                strokeDasharray="6 6"
              />
              {/* Central vertical down toward spotlight */}
              <line
                x1={connectorSvg.midX}
                y1={connectorSvg.joinY+3}
                x2={connectorSvg.midX}
                y2={Math.max(connectorSvg.joinY, connectorSvg.spotlightTopY - 16)}
                stroke="currentColor"
                strokeWidth="1.5"
                strokeDasharray="6 6"
              />
            </svg>
          ) : null}
        <div className="relative mt-20 flex flex-col md:flex-row md:items-start md:justify-between gap-8 md:gap-10">
          <div className="absolute left-1/2 -top-32 -translate-x-1/2 w-full max-w-xl hidden md:block pointer-events-none">
            <svg
              viewBox="0 0 400 160"
              className="w-full h-full text-black"
              preserveAspectRatio="none"
            >
              <line
                x1="200"
                y1="0"
                x2="200"
                y2="160"
                stroke="currentColor"
                strokeWidth="1"
                strokeDasharray="4 4"
              />
              <line
                x1="200"
                y1="160"
                x2="40"
                y2="160"
                stroke="currentColor"
                strokeWidth="2"
                strokeDasharray="4 4"
              />
              <line
                x1="200"
                y1="160"
                x2="360"
                y2="160"
                stroke="currentColor"
                strokeWidth="2"
                strokeDasharray="4 4"
              />
              <line
                x1="40"
                y1="160"
                x2="40"
                y2="220"
                stroke="currentColor"
                strokeWidth="1"
                strokeDasharray="4 4"
              />
              <line
                x1="360"
                y1="160"
                x2="360"
                y2="220"
                stroke="currentColor"
                strokeWidth="1"
                strokeDasharray="4 4"
              />
            </svg>
          </div>

          <div
            ref={leftCardRef}
            className="relative z-10 flex-1 bg-hiveGray rounded-lg p-6 md:p-7 shadow-sm"
          >
            <div className="flex items-start gap-3 mb-3">
              <div className="relative h-16 w-16 flex-shrink-0">
                <Image
                  src="/img/logo-transparent.png"
                  alt="HIVE"
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-semibold text-hiveDark">
                  Living With Conversational AI Values
                </h3>
                <p className="text-sm md:text-base italic text-gray-700">
                  How people perceive, interpret, experience, and are influenced
                  by conversational AI value expressions.
                </p>
              </div>
            </div>
            <div className="mt-4 space-y-4">
              <div className="relative border border-gray-300 rounded-md bg-white/60 p-4">
                <button
                  type="button"
                  aria-label={isLivingValuesBox1Open ? "Collapse section" : "Expand section"}
                  aria-expanded={isLivingValuesBox1Open}
                  onClick={() => setIsLivingValuesBox1Open((v) => !v)}
                  className="absolute right-3 top-3 rounded p-1 text-black hover:bg-black/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/30"
                >
                  <svg
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                    className={`h-4 w-4 transition-transform ${
                      isLivingValuesBox1Open ? "rotate-0" : "-rotate-90"
                    }`}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 7l5 6 5-6" />
                  </svg>
                </button>

                <div className="pr-8">
                  <h4 className="text-sm md:text-base font-semibold text-hiveDark">
                    1. Practitioners’ Work with Values
                  </h4>
                  <p className="mt-1 text-xs md:text-sm text-gray-700">
                  Understanding how AI practitioners conceptualise and operationalise values in their work.
                  </p>
                </div>

                {isLivingValuesBox1Open ? (
                  <div className="mt-3 space-y-3">
                    <p className="text-[11px] md:text-xs font-semibold uppercase tracking-wide text-gray-700">
                      Selected Work
                    </p>

                    <a
                    href="https://pure.itu.dk/da/publications/results-actionability-gap-understanding-how-practitioners-evaluat/"
                    target="_blank"
                    rel="noreferrer"
                    className="block rounded-md border border-gray-200 bg-white/90 p-3 hover:border-hiveDark hover:bg-white transition-colors"
                  >
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <p className="text-sm font-semibold uppercase tracking-wide text-gray-600">
                      CHI (2026)
                      </p>
                    </div>
                    <p className="mt-2 text-sm md:text-base font-semibold text-hiveDark">
                    Results-Actionability Gap: Understanding How Practitioners Evaluate LLM Products in the Wild
                    </p>
                    <p className="mt-2 text-xs md:text-sm italic text-gray-700">
                    van der Maden, W., Sadek, M., Xiao, Z., Mottelson, A., Liao, Q.V. & Zhu, J.
                    </p>
                    <p className="mt-2 text-xs md:text-sm text-gray-700">
                    An interview study with practitioners to understand how they evaluate LLM products in the wild and the challenges they face.
                    </p>
                  </a>

                    <a
                      href="https://www.tandfonline.com/doi/full/10.1080/10447318.2024.2439021"
                      target="_blank"
                      rel="noreferrer"
                      className="block rounded-md border border-gray-200 bg-white/90 p-3 hover:border-hiveDark hover:bg-white transition-colors"
                    >
                      <div className="flex flex-wrap items-baseline justify-between gap-2">
                        <p className="text-sm font-semibold uppercase tracking-wide text-gray-600">
                        International Journal of Human–Computer Interaction (2025)
                        </p>
                      </div>
                      <p className="mt-2 text-sm md:text-base font-semibold text-hiveDark">
                      Challenges in Value-Sensitive AI Design: Insights from AI Practitioner Interviews
                      </p>
                      <p className="mt-2 text-xs md:text-sm italic text-gray-700">
                        Sadek, M. & Mougenot, C.
                      </p>
                      <p className="mt-2 text-xs md:text-sm text-gray-700">
                        An interview study with AI practitioners to understand how they conceptualise and operationalise values in their work.
                      </p>
                    </a>

                    <a
                      href="https://link.springer.com/article/10.1007/s00146-024-01880-9"
                      target="_blank"
                      rel="noreferrer"
                      className="block rounded-md border border-gray-200 bg-white/90 p-3 hover:border-hiveDark hover:bg-white transition-colors"
                    >
                      <div className="flex flex-wrap items-baseline justify-between gap-2">
                        <p className="text-sm font-semibold uppercase tracking-wide text-gray-600">
                          AI & Society (2024)
                        </p>
                      </div>
                      <p className="mt-2 text-sm md:text-base font-semibold text-hiveDark">
                      Challenges of responsible AI in practice: scoping review and recommended actions
                      </p>
                      <p className="mt-2 text-xs md:text-sm italic text-gray-700">
                        Sadek, M., Kallina, E., Bohné, T., Mougenot, C., Calvo, R.A. & Cave, S.
                      </p>
                      <p className="mt-2 text-xs md:text-sm text-gray-700">
                        A review of how responsible AI struggles to operationalise its principles in practice with recommendations for best practices.
                      </p>
                    </a>

                    <a
                      href="https://ieeexplore.ieee.org/abstract/document/10532140"
                      target="_blank"
                      rel="noreferrer"
                      className="block rounded-md border border-gray-200 bg-white/90 p-3 hover:border-hiveDark hover:bg-white transition-colors"
                    >
                      <div className="flex flex-wrap items-baseline justify-between gap-2">
                        <p className="text-sm font-semibold uppercase tracking-wide text-gray-600">
                          IEEE Technology and Society (2024)
                        </p>
                      </div>
                      <p className="mt-2 text-sm md:text-base font-semibold text-hiveDark">
                      Closing the Socio–Technical Gap in AI: The Need for Measuring Practitioners’ Attitudes and Perceptions
                      </p>
                      <p className="mt-2 text-xs md:text-sm italic text-gray-700">
                        Sadek, M., Calvo, R.A. & Mougenot, C.
                      </p>
                      <p className="mt-2 text-xs md:text-sm text-gray-700">
                        A call for more empirical research on the attitudes and perceptions of AI practitioners towards responsible AI.
                      </p>
                    </a>

                    <a
                      href="https://dl.acm.org/doi/abs/10.1145/3571884.3597143"
                      target="_blank"
                      rel="noreferrer"
                      className="block rounded-md border border-gray-200 bg-white/90 p-3 hover:border-hiveDark hover:bg-white transition-colors"
                    >
                      <div className="flex flex-wrap items-baseline justify-between gap-2">
                        <p className="text-sm font-semibold uppercase tracking-wide text-gray-600">
                          CUI (2023)
                        </p>
                      </div>
                      <p className="mt-2 text-sm md:text-base font-semibold text-hiveDark">
                      Trends, Challenges and Processes in Conversational Agent Design: Exploring Practitioners’ Views through Semi-Structured Interviews
                      </p>
                      <p className="mt-2 text-xs md:text-sm italic text-gray-700">
                        Sadek, M., Calvo, R.A. & Mougenot, C.
                      </p>
                      <p className="mt-2 text-xs md:text-sm text-gray-700">
                        An interview study with conversational AI practitioners to understand their thoughts and experiences with the latest developments in the field.
                      </p>
                    </a>

                    <div className="block rounded-md border border-gray-200 bg-white/90 p-3">
                      <div className="flex flex-wrap items-baseline justify-between gap-2">
                        <p className="text-sm font-semibold text-orange-600">In Progress</p>
                      </div>
                      <p className="mt-1 text-sm md:text-base font-semibold text-hiveDark">
                        What values are embedded in AI systems?
                      </p>
                      <p className="mt-2 text-xs md:text-sm italic text-gray-700">
                        Sinha, K., van der Maden, W., Axelsson, M. & Sadek, M.
                      </p>
                      <p className="mt-1 text-xs md:text-sm text-gray-700">
                        A systematic review of work done to align AI systems with different human values to understand what those values are and how this was achieved.
                      </p>
                    </div>
                  </div>
                ) : null}
              </div>

              <div className="relative border border-gray-300 rounded-md bg-white/60 p-4">
                <button
                  type="button"
                  aria-label={isLivingValuesBox3Open ? "Collapse section" : "Expand section"}
                  aria-expanded={isLivingValuesBox3Open}
                  onClick={() => setIsLivingValuesBox3Open((v) => !v)}
                  className="absolute right-3 top-3 rounded p-1 text-black hover:bg-black/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/30"
                >
                  <svg
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                    className={`h-4 w-4 transition-transform ${
                      isLivingValuesBox3Open ? "rotate-0" : "-rotate-90"
                    }`}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 7l5 6 5-6" />
                  </svg>
                </button>

                <div className="pr-8">
                  <h4 className="text-sm md:text-base font-semibold text-hiveDark">
                    2. Conversational AI Literacy & User Agency
                  </h4>
                  <p className="mt-1 text-xs md:text-sm text-gray-700">
                  Helping people understand, evaluate, and steer conversational AI behaviours.
                  </p>
                </div>

                {isLivingValuesBox3Open ? (
                  <div className="mt-3 space-y-3">
                    <p className="text-[11px] md:text-xs font-semibold uppercase tracking-wide text-gray-700">
                      Selected Work
                    </p>

                    <a
                      href="https://academic.oup.com/iwc/article/37/5/444/7717778"
                      target="_blank"
                      rel="noreferrer"
                      className="block rounded-md border border-gray-200 bg-white/90 p-3 hover:border-hiveDark hover:bg-white transition-colors"
                    >
                      <div className="flex flex-wrap items-baseline justify-between gap-2">
                        <p className="text-sm font-semibold uppercase tracking-wide text-gray-600">
                          Interacting with Computers (2025)
                        </p>
                      </div>
                      <p className="mt-2 text-sm md:text-base font-semibold text-hiveDark">
                      Codesigning AI with End-Users: An AI Literacy Toolkit for Nontechnical Audiences
                      </p>
                      <p className="mt-2 text-xs md:text-sm italic text-gray-700">
                        Smith, F., Sadek, M., Wan, E., Ito, A., & Mougenot, C.
                      </p>
                      <p className="mt-2 text-xs md:text-sm text-gray-700">
                        Understanding the impact of an AI literacy toolkit on end-users&apos; participation in co-designing AI systems.
                        </p>
                    </a>

                     <a
                      href="https://www.scienceopen.com/hosted-document?doi=10.14236/ewic/BCSHCI2023.2"
                      target="_blank"
                      rel="noreferrer"
                      className="block rounded-md border border-gray-200 bg-white/90 p-3 hover:border-hiveDark hover:bg-white transition-colors"
                    >
                      <div className="flex flex-wrap items-baseline justify-between gap-2">
                        <p className="text-sm font-semibold uppercase tracking-wide text-gray-600">
                          BCS HCI (2023)
                        </p>
                        <p className="text-sm font-semibold uppercase tracking-wide text-green-600">
                          Best Paper Award
                        </p>
                      </div>
                      <p className="mt-2 text-sm md:text-base font-semibold text-hiveDark">
                      Empowering End-users in Co-Designing AI: An AI Literacy Card-Based Toolkit for Non-Technical Audiences
                      </p>
                      <p className="mt-2 text-xs md:text-sm italic text-gray-700">
                        Smith, F., Sadek, M. & Mougenot, C.
                      </p>
                      <p className="mt-2 text-xs md:text-sm text-gray-700">
                      Creating a toolkit to be used by AI practitioners when collaborating with users to design AI systems that can improve users&apos; AI literacy and help them participate meaningfully.
                      </p>
                    </a>

                    <div className="block rounded-md border border-gray-200 bg-white/90 p-3">
                      <div className="flex flex-wrap items-baseline justify-between gap-2">
                        <p className="text-sm font-semibold text-orange-600">In Progress</p>
                      </div>
                      <p className="mt-1 text-sm md:text-base font-semibold text-hiveDark">
                        Developing an LLM literacy toolkit for the general public
                      </p>
                      <p className="mt-2 text-xs md:text-sm italic text-gray-700">
                        Abdulsalam, A., Petti, U. & Sadek, M.
                      </p>
                      <p className="mt-1 text-xs md:text-sm text-gray-700">
                       Exploring the development of a digital card-based toolkit to help people understand and prompt LLMs for better outcomes.
                      </p>
                    </div> 
                  </div>
                ) : null}
              </div>


              <div className="relative border border-gray-300 rounded-md bg-white/60 p-4">
                <button
                  type="button"
                  aria-label={isLivingValuesBox2Open ? "Collapse section" : "Expand section"}
                  aria-expanded={isLivingValuesBox2Open}
                  onClick={() => setIsLivingValuesBox2Open((v) => !v)}
                  className="absolute right-3 top-3 rounded p-1 text-black hover:bg-black/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/30"
                >
                  <svg
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                    className={`h-4 w-4 transition-transform ${
                      isLivingValuesBox2Open ? "rotate-0" : "-rotate-90"
                    }`}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 7l5 6 5-6" />
                  </svg>
                </button>

                <div className="pr-8">
                  <h4 className="text-sm md:text-base font-semibold text-hiveDark">
                    3. The Impacts of Conversational AI Values on Users
                  </h4>
                  <p className="mt-1 text-xs md:text-sm text-gray-700">
                  Understanding how diverse users perceive, interact with, and are impacted by the values in conversational AI systems.
                  </p>
                </div>

                {isLivingValuesBox2Open ? (
                  <div className="mt-3 space-y-3">
                    <p className="text-[11px] md:text-xs font-semibold uppercase tracking-wide text-gray-700">
                      Selected Work
                    </p>

                    <a
                      href="https://aiequalitytoolbox.com/wp-content/uploads/2023/12/Chapter-1_-Who-Defines-AIs-Future_-The-Role-of-Harmful-AI-Narratives-.docx.pdf"
                      target="_blank"
                      rel="noreferrer"
                      className="block rounded-md border border-gray-200 bg-white/90 p-3 hover:border-hiveDark hover:bg-white transition-colors"
                    >
                      <div className="flex flex-wrap items-baseline justify-between gap-2">
                        <p className="text-sm font-semibold uppercase tracking-wide text-gray-600">
                          AI & Equality (2024)
                        </p>
                      </div>
                      <p className="mt-2 text-sm md:text-base font-semibold text-hiveDark">
                      Who Defines AI’s Future? The Role of Harmful AI Narratives
                      </p>
                      <p className="mt-2 text-xs md:text-sm italic text-gray-700">
                        Kallina, E. & Sadek, M.
                      </p>
                      <p className="mt-2 text-xs md:text-sm text-gray-700">
                        Exploring how prevalent AI narratives shape public perceptions of AI, as well as the AI industry itself.
                        </p>
                    </a>

                    <div className="block rounded-md border border-gray-200 bg-white/90 p-3">
                      <div className="flex flex-wrap items-baseline justify-between gap-2">
                        <p className="text-sm font-semibold text-orange-600">In Progress</p>
                      </div>
                      <p className="mt-1 text-sm md:text-base font-semibold text-hiveDark">
                        Do value-sensitive design frameworks scale globally?
                      </p>
                      <p className="mt-2 text-xs md:text-sm italic text-gray-700">
                        Sadek, M., van der Maden, W., Wan, E., & Mougenot, C.
                      </p>
                      <p className="mt-1 text-xs md:text-sm text-gray-700">
                       A cross-national study examining the applicability and generalisability of popular value-sensitive design frameworks across national contexts and scenarios.</p>
                    </div> 

                    <div className="block rounded-md border border-gray-200 bg-white/90 p-3">
                      <div className="flex flex-wrap items-baseline justify-between gap-2">
                        <p className="text-sm font-semibold text-orange-600">In Progress</p>
                      </div>
                      <p className="mt-1 text-sm md:text-base font-semibold text-hiveDark">
                        Which users and whose values?
                      </p>
                      <p className="mt-2 text-xs md:text-sm italic text-gray-700">
                        Sadek, M. & Mougenot, C.
                      </p>
                      <p className="mt-1 text-xs md:text-sm text-gray-700">
                       An analysis of how demographic factors shape users&apos; perceptions of AI chatbots&apos; value alignment.</p>
                    </div> 

                    <div className="block rounded-md border border-gray-200 bg-white/90 p-3">
                      <div className="flex flex-wrap items-baseline justify-between gap-2">
                        <p className="text-sm font-semibold text-orange-600">In Progress</p>
                      </div>
                      <p className="mt-1 text-sm md:text-base font-semibold text-hiveDark">
                        Towards a perceived AI value alignment scale
                      </p>
                      <p className="mt-2 text-xs md:text-sm italic text-gray-700">
                        Sinha, A.K., van der Maden, W., Axelsson, M., & Sadek, M.
                      </p>
                      <p className="mt-1 text-xs md:text-sm text-gray-700">
                    Developing a standardised scale to quantitatively measure perceived AI value alignment with relevant human values. </p>
                    </div> 

                  </div>
                ) : null}
              </div>

            </div>
          </div>

          <div
            ref={rightCardRef}
            className="relative z-10 flex-1 bg-hiveGray rounded-lg p-6 md:p-7 shadow-sm"
          >
            <div className="flex items-start gap-3 mb-3">
              <div className="relative h-16 w-16 flex-shrink-0">
                <Image
                  src="/img/logo-transparent.png"
                  alt="HIVE"
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-semibold text-hiveDark">
                  Shaping Conversational AI Values
                </h3>
                <p className="text-sm mt-2 md:text-base italic text-gray-700">
                  How human values get embedded, configured, and operationalised
                  in conversational AI systems.
                </p>
              </div>
            </div>
            <div className="mt-4 space-y-4">
              <div className="relative border border-gray-300 rounded-md bg-white/60 p-4">
                <button
                  type="button"
                  aria-label={isValueVizOpen ? "Collapse section" : "Expand section"}
                  aria-expanded={isValueVizOpen}
                  onClick={() => setIsValueVizOpen((v) => !v)}
                  className="absolute right-3 top-3 rounded p-1 text-black hover:bg-black/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/30"
                >
                  <svg
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                    className={`h-4 w-4 transition-transform ${
                      isValueVizOpen ? "rotate-0" : "-rotate-90"
                    }`}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 7l5 6 5-6" />
                  </svg>
                </button>

                <div className="pr-8">
                  <h4 className="text-sm md:text-base font-semibold text-hiveDark">
                    1. Value Visualisation &amp; Customisation
                  </h4>
                  <p className="mt-1 text-xs md:text-sm text-gray-700">
                    Toolkits and interfaces for designing and building more value-sensitive conversational AI systems.
                  </p>
                </div>

                {isValueVizOpen ? (
                  <div className="mt-3 space-y-3">
                    <p className="text-[11px] md:text-xs font-semibold uppercase tracking-wide text-gray-700">
                      Selected Work
                    </p>
                  <a
                    href="https://dl.acm.org/doi/full/10.1145/3613904.3642810"
                    target="_blank"
                    rel="noreferrer"
                    className="block rounded-md border border-gray-200 bg-white/90 p-3 hover:border-hiveDark hover:bg-white transition-colors"
                  >
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <p className="text-sm font-semibold uppercase tracking-wide text-gray-600">
                      CHI (2024)
                      </p>
                    </div>
                    <p className="mt-2 text-sm md:text-base font-semibold text-hiveDark">
                    Guidelines for integrating value-sensitive design in responsible AI toolkits
                    </p>
                    <p className="mt-2 text-xs md:text-sm italic text-gray-700">
                      Sadek, M., Constantinides, M., Quercia, D. & Mougenot, C.
                    </p>
                    <p className="mt-2 text-xs md:text-sm text-gray-700">
                      Understanding how responsible AI toolkits can better support designing with human values in mind.
                    </p>
                  </a>

                  <div className="block rounded-md border border-gray-200 bg-white/90 p-3">
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <p className="text-sm font-semibold text-orange-600">In Progress</p>
                    </div>
                    <p className="mt-1 text-sm md:text-base font-semibold text-hiveDark">
                      How have HCI/Conversational AI frameworks adapted to the LLM era?
                    </p>
                    <p className="mt-2 text-xs md:text-sm italic text-gray-700">
                      Sadek, M. & Peters, D.
                    </p>
                    <p className="mt-1 text-xs md:text-sm text-gray-700">
                      A case study on how existing HCI/conversational AI frameworks need adaptation to survive the shifts brought on by LLMs.
                    </p>
                  </div>

                  <div className="block rounded-md border border-gray-200 bg-white/90 p-3">
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <p className="text-sm font-semibold text-orange-600">In Progress</p>
                    </div>
                    <p className="mt-1 text-sm md:text-base font-semibold text-hiveDark">
                      Visualising Human Values Embedded in LLM Chatbots
                    </p>
                    <p className="mt-2 text-xs md:text-sm italic text-gray-700">
                      Huang, Q.F, Bogucka, E. & Sadek, M.
                    </p>
                    <p className="mt-1 text-xs md:text-sm text-gray-700">
                      Exploring ways we can visualise the human values embedded in LLM chatbots, understand the impacts on users, and allow users to edit visualisations themselves.
                    </p>
                  </div>

                  <div className="block rounded-md border border-gray-200 bg-white/90 p-3">
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <p className="text-sm font-semibold text-orange-600">In Progress</p>
                    </div>
                    <p className="mt-1 text-sm md:text-base font-semibold text-hiveDark">
                      Prompting Strategies for Improving LLM Value-Sensitivity
                    </p>
                    <p className="mt-2 text-xs md:text-sm italic text-gray-700">
                      Sadek, M., Hu, S. & Kohout, I.
                    </p>
                    <p className="mt-1 text-xs md:text-sm text-gray-700">
                      Positioning system prompting as a method for democratising value-sensitive LLM design for users and understanding the impacts of different prompting approaches on perceived LLM value alignment.
                    </p>
                  </div>

                </div>
                ) : null}
              </div>

          

              <div className="relative border border-gray-300 rounded-md bg-white/60 p-4">
                <button
                  type="button"
                  aria-label={isCoDesignOpen ? "Collapse section" : "Expand section"}
                  aria-expanded={isCoDesignOpen}
                  onClick={() => setIsCoDesignOpen((v) => !v)}
                  className="absolute right-3 top-3 rounded p-1 text-black hover:bg-black/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/30"
                >
                  <svg
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                    className={`h-4 w-4 transition-transform ${
                      isCoDesignOpen ? "rotate-0" : "-rotate-90"
                    }`}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 7l5 6 5-6" />
                  </svg>
                </button>

                <div className="pr-8">
                  <h4 className="text-sm md:text-base font-semibold text-hiveDark">
                    2. Co-Design for Human-Centred Applications of Conversational AI
                  </h4>
                  <p className="mt-1 text-xs md:text-sm text-gray-700">
                    Designing with others to build and evaluate human-centred conversational AI systems.
                  </p>
                </div>

                {isCoDesignOpen ? (
                  <div className="mt-3 space-y-3">
                    <p className="text-[11px] md:text-xs font-semibold uppercase tracking-wide text-gray-700">
                      Selected Work
                    </p>
                  
                    <a
                      href=""
                      target="_blank"
                      rel="noreferrer"
                      className="block rounded-md border border-gray-200 bg-white/90 p-3 hover:border-hiveDark hover:bg-white transition-colors"
                    >
                      <div className="flex flex-wrap items-baseline justify-between gap-2">
                        <p className="text-sm font-semibold uppercase tracking-wide text-gray-600">
                          CHI (2026)
                        </p>
                        <p className="text-sm font-semibold uppercase tracking-wide text-green-600">
                          Honourable Mention
                        </p>
                      </div>
                      <p className="mt-2 text-sm md:text-base font-semibold text-hiveDark">
                      KNIT: Computational Boundary Objects for Real-Time Convergence in Interdisciplinary Teams
                      </p>
                      <p className="mt-2 text-xs md:text-sm italic text-gray-700">
                        Wan, E., Yin, C., Ito, A., Gao, Z., Jia, J., Taoka, Y., Saito, S., Sadek, M., & Mougenot, C.
                      </p>
                      <p className="mt-2 text-xs md:text-sm text-gray-700">
                      Developing an LLM-enhanced system that transforms AI-generated value proposition statements into boundary objects to help interdisciplinary teams converge during problem solving.
                      </p>
                    </a>

                  <a
                    href="https://www.sciencedirect.com/science/article/pii/S0142694X23000716"
                    target="_blank"
                    rel="noreferrer"
                    className="block rounded-md border border-gray-200 bg-white/90 p-3 hover:border-hiveDark hover:bg-white transition-colors"
                  >
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <p className="text-sm font-semibold uppercase tracking-wide text-gray-600">
                      Design Studies (2023)
                      </p>
                    </div>
                    <p className="mt-2 text-sm md:text-base font-semibold text-hiveDark">
                    Co-designing conversational agents: A comprehensive review and recommendations for best practices
                    </p>
                    <p className="mt-2 text-xs md:text-sm italic text-gray-700">
                      Sadek, M., Calvo, R.A. & Mougenot, C.
                    </p>
                    <p className="mt-2 text-xs md:text-sm text-gray-700">
                    A systematic review and best practices for how to collaboratively design conversational AI systems with stakeholders.
                    </p>
                  </a>

                  <a
                    href="https://link.springer.com/article/10.1007/s43681-023-00373-7"
                    target="_blank"
                    rel="noreferrer"
                    className="block rounded-md border border-gray-200 bg-white/90 p-3 hover:border-hiveDark hover:bg-white transition-colors"
                  >
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <p className="text-sm font-semibold uppercase tracking-wide text-gray-600">
                      AI and Ethics (2023)
                      </p>
                    </div>
                    <p className="mt-2 text-sm md:text-base font-semibold text-hiveDark">
                    Designing value-sensitive AI: a critical review and recommendations for socio-technical design processes
                    </p>
                    <p className="mt-2 text-xs md:text-sm italic text-gray-700">
                      Sadek, M., Calvo, R.A. & Mougenot, C.
                    </p>
                    <p className="mt-2 text-xs md:text-sm text-gray-700">
                    Reviewing how existing academic and industry-based design processes for AI systems support value-sensitive practices.
                    </p>
                  </a>

                  <div className="block rounded-md border border-gray-200 bg-white/90 p-3">
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <p className="text-sm font-semibold text-orange-600">In Progress</p>
                    </div>
                    <p className="mt-1 text-sm md:text-base font-semibold text-hiveDark">
                      The impacts of LLM facilitators on collaborative learning
                    </p>
                    <p className="mt-2 text-xs md:text-sm italic text-gray-700">
                      Wang, Q.S., Axelsson, M., Wan, E. & Sadek, M.
                    </p>
                    <p className="mt-1 text-xs md:text-sm text-gray-700">
                      Exploring the impact of LLM facilitators on participation and empowerment in collaborative learning and problem solving environments.
                    </p>
                  </div>

                  <div className="block rounded-md border border-gray-200 bg-white/90 p-3">
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <p className="text-sm font-semibold text-orange-600">In Progress</p>
                    </div>
                    <p className="mt-1 text-sm md:text-base font-semibold text-hiveDark">
                      Conceptualising anti-values as conversational AI design constraints
                    </p>
                    <p className="mt-2 text-xs md:text-sm italic text-gray-700">
                      Sadek, M. & Mougenot, C.
                    </p>
                    <p className="mt-1 text-xs md:text-sm text-gray-700">
                      Using empirical research and interdisciplinary perspectives to provocatively frame anti-values as useful design constraints for conversational AI.
                    </p>
                  </div>

                </div>
                ) : null}
              </div>
            </div>
          </div>
        </div>

        <div className="relative mt-8 md:mt-20 flex flex-col items-center">
          <div className="mt-14 w-full md:w-auto flex justify-center">
            <div
              id="projects"
              ref={spotlightRef}
              className="relative bg-hiveGray rounded-lg p-6 md:p-7 shadow-sm max-w-md w-full border border-transparent hover:border-black transition-colors cursor-pointer"
            >
              <a
                href="https://www.vsca-framework.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="Open VSCA Framework website"
                className="absolute inset-0 z-10 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/30"
              />
              <h3 className="text-lg md:text-xl font-semibold text-hiveDark mb-2 text-center">
                Spotlight Project
              </h3>
              <p className="text-sm md:text-base text-gray-700 text-center min-h-[60px]">
                The Value-Sensitive Conversational Agent (VSCA) Framework and Toolkit
              </p>

              <Image
                src="/img/toolkit-3.jpg"
                alt="VSCA toolkit cover"
                width={600}
                height={400}
                className="mt-4 w-full h-auto rounded-md shadow-sm"
              />
            </div>
          </div>
        </div>

        <div className="mt-16 border-t-4 border-hiveGold w-full" />
        </div>
      </Container>
    </section>
  );
}

