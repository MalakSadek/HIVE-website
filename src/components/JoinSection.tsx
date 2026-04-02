"use client";

import { useState } from "react";
import Image from "next/image";
import { Container } from "./Container";

export function JoinSection() {
  const [isMphilOpen, setIsMphilOpen] = useState(false);
  const [isPhdOpen, setIsPhdOpen] = useState(false);

  return (
    <section id="join" className="bg-white py-16">
      <Container className="text-center">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight text-hiveDark mb-4">
          Join the HIVE
        </h2>
        <p className="max-w-3xl mx-auto text-sm md:text-base text-gray-800 mb-10">
          Interested in working at the intersection of HCI and conversational
          AI to shape user experiences and align with diverse values? Reach out
          to us!
        </p>

        <div className="relative mt-12 w-full flex flex-col items-center">
          <div className="hidden md:block absolute inset-x-0 -top-24 pointer-events-none">
            <svg
              viewBox="0 0 400 180"
              className="w-full h-full text-black"
              preserveAspectRatio="none"
            >
              <line
                x1="200"
                y1="25"
                x2="200"
                y2="70"
                stroke="currentColor"
                strokeWidth="0.6"
                strokeDasharray="4 4"
              />
              <line
                x1="40"
                y1="70"
                x2="360"
                y2="70"
                stroke="currentColor"
                strokeWidth="0.6"
                strokeDasharray="4 4"
              />
              <line
                x1="40"
                y1="70"
                x2="40"
                y2="117"
                stroke="currentColor"
                strokeWidth="0.6"
                strokeDasharray="4 4"
              />
              <line
                x1="360"
                y1="70"
                x2="360"
                y2="85"
                stroke="currentColor"
                strokeWidth="0.6"
                strokeDasharray="4 4"
              />
            </svg>
          </div>

          <div className="mt-32 grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
            <a
              href="mailto:hive@chia.cam.ac.uk"
              className="relative block h-full bg-hiveGray rounded-lg p-6 md:p-7 text-left border border-transparent shadow-sm hover:shadow-none hover:border-black transition-shadow"
            >
              <span
                className="absolute bottom-4 right-4 text-black"
                aria-hidden="true"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.5 4.75L12.75 10L7.5 15.25"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <h3 className="text-lg md:text-xl font-semibold text-hiveDark mb-2">
                Collaborate on Research
              </h3>
              <p className="text-sm md:text-base text-gray-800">
                Get in touch to explore collaborative projects, joint grants, or
                shared initiatives with the HIVE CAI Lab.
              </p>
              <p className="mt-4 text-sm md:text-base text-gray-800">
                Our projects are all focused on real-world applications and impact,
                and have been funded by various sources, including{" "}
                <a
                  href="https://www.turing.ac.uk/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-4 decoration-hiveDark hover:opacity-80"
                >
                  The Alan Turing Institute
                </a>
                , the{" "}
                <a
                  href="https://www.lcfi.ac.uk/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-4 decoration-hiveDark hover:opacity-80"
                >
                  Leverhulme Centre for the Future of Intelligence
                </a>
                , the{" "}
                <a
                  href="https://theihs.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-4 decoration-hiveDark hover:opacity-80"
                >
                  Institute for Humane Studies
                </a>
                , and the{" "}
                <a
                  href="https://www.ahssresearch.group.cam.ac.uk/res-fund-opps/CHRG"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-4 decoration-hiveDark hover:opacity-80"
                >
                  Cambridge Humanities Research Grants Scheme
                </a>
                .
              </p>

              <div className="mt-8 grid grid-cols-2 gap-x-4 gap-y-10 items-center">
                <div className="relative h-12 w-full">
                  <Image src="/img/at.png" alt="The Alan Turing Institute logo" fill className="object-contain -ml-8" />
                </div>
                <div className="relative h-12 w-full">
                  <Image src="/img/cfi.png" alt="Leverhulme Centre for the Future of Intelligence logo" fill className="object-contain -ml-8" />
                </div>
                <div className="relative h-12 w-full">
                  <Image src="/img/ihs.png" alt="Institute for Humane Studies logo" fill className="object-contain" />
                </div>
                <div className="relative h-12 w-full">
                  <Image src="/img/chrg.png" alt="Cambridge Humanities Research Grants Scheme logo" fill className="object-contain" />
                </div>
              </div>
            </a>

            <div className="h-full bg-hiveGray rounded-lg p-6 md:p-7 text-left shadow-sm">
              <h3 className="text-lg md:text-xl font-semibold text-hiveDark mb-2">
                Become a Lab Member
              </h3>
              <p className="text-sm md:text-base text-gray-800">
                We welcome new lab members that want to work on research and projects
                at the intersection of conversational AI, HCI, and human values.
                Experience with empirical human/user research is preferred, as well
                as familiarity with computer science and AI.
                <br />
                <br />
                For visiting researcher and student opportunities, as well as
                postdoctoral positions, please contact Dr. Malak Sadek directly.
              </p>

              <div className="space-y-4 mt-5">
                <div
                  className="relative bg-white/60 border border-gray-300 rounded-md p-4 hover:border-hiveDark transition-colors cursor-pointer"
                  role="button"
                  tabIndex={0}
                  onClick={() => setIsMphilOpen((v) => !v)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      setIsMphilOpen((v) => !v);
                    }
                  }}
                >
                  <button
                    type="button"
                    aria-label={isMphilOpen ? "Collapse section" : "Expand section"}
                    aria-expanded={isMphilOpen}
                    onClick={(e) => {
                      e.stopPropagation();
                      setIsMphilOpen((v) => !v);
                    }}
                    className="absolute right-3 top-3 rounded p-1 text-black hover:bg-black/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/30"
                  >
                    <svg
                      viewBox="0 0 20 20"
                      aria-hidden="true"
                      className={`h-4 w-4 transition-transform ${
                        isMphilOpen ? "rotate-0" : "-rotate-90"
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

                  <div className="flex items-start gap-3 pr-8">
                    <div className="relative h-16 w-16 flex-shrink-0">
                      <Image
                        src="/img/logo-transparent.png"
                        alt="HIVE"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-lg md:text-xl font-semibold text-hiveDark">
                        MPhil in Human-Inspired AI
                      </h3>
                      {!isMphilOpen ? (
                        <p
                          className="text-xs md:text-sm text-gray-700 mt-1 leading-relaxed overflow-hidden"
                          style={{
                            display: "-webkit-box",
                            WebkitLineClamp: 2,
                            WebkitBoxOrient: "vertical",
                          }}
                        >
                          9-month Masters degree combining taught elements and
                          independent research.
                        </p>
                      ) : (
                        <>
                          <p className="text-xs md:text-sm text-gray-700 mt-1 leading-relaxed">
                            9-month Masters degree combining taught elements and
                            independent research.
                            <br />
                            <br />
                            Applications are automatically considered for various
                            scholarships, but the{" "}
                            <a
                              href="https://www.gatescambridge.org/"
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={(e) => e.stopPropagation()}
                              className="underline underline-offset-4 decoration-hiveDark hover:opacity-80"
                            >
                              Gates Cambridge Scholarships
                            </a>{" "}
                            must be applied for separately in advance.
                            <br />
                            <br />
                            Taught modules have included topics such as:
                            Responsible AI, Conversational AI, Designing AI
                            Experiences, AI and Neuroscience, AI for Social Good,
                            AI Ethics, Fundamentals of Data Science, Social
                            Robotics and AI for Sustainability.
                          </p>
                          <a
                            href="https://www.postgraduate.study.cam.ac.uk/courses/directory/iethmphia"
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="mt-3 inline-block text-xs md:text-sm underline underline-offset-4 decoration-hiveDark hover:opacity-80"
                          >
                            Open course page
                          </a>
                        </>
                      )}
                    </div>
                  </div>
                </div>

                <div
                  className="relative bg-white/60 border border-gray-300 rounded-md p-4 hover:border-hiveDark transition-colors cursor-pointer"
                  role="button"
                  tabIndex={0}
                  onClick={() => setIsPhdOpen((v) => !v)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      setIsPhdOpen((v) => !v);
                    }
                  }}
                >
                  <button
                    type="button"
                    aria-label={isPhdOpen ? "Collapse section" : "Expand section"}
                    aria-expanded={isPhdOpen}
                    onClick={(e) => {
                      e.stopPropagation();
                      setIsPhdOpen((v) => !v);
                    }}
                    className="absolute right-3 top-3 rounded p-1 text-black hover:bg-black/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/30"
                  >
                    <svg
                      viewBox="0 0 20 20"
                      aria-hidden="true"
                      className={`h-4 w-4 transition-transform ${
                        isPhdOpen ? "rotate-0" : "-rotate-90"
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

                  <div className="flex items-start gap-3 pr-8">
                    <div className="relative h-16 w-16 flex-shrink-0">
                      <Image
                        src="/img/logo-transparent.png"
                        alt="HIVE"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-lg md:text-xl font-semibold text-hiveDark">
                        PhD in Human-Inspired AI
                      </h3>
                      {!isPhdOpen ? (
                        <p
                          className="text-xs md:text-sm text-gray-700 mt-1 leading-relaxed overflow-hidden"
                          style={{
                            display: "-webkit-box",
                            WebkitLineClamp: 2,
                            WebkitBoxOrient: "vertical",
                          }}
                        >
                          4-year doctoral degree primarily consisting of research
                          into relevant topics.
                        </p>
                      ) : (
                        <>
                          <p className="text-xs md:text-sm text-gray-700 mt-1 leading-relaxed">
                            4-year doctoral degree primarily consisting of research
                            into relevant topics.
                            <br />
                            <br />
                            Applications are automatically considered for various
                            scholarships, but the{" "}
                            <a
                              href="https://www.gatescambridge.org/"
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={(e) => e.stopPropagation()}
                              className="underline underline-offset-4 decoration-hiveDark hover:opacity-80"
                            >
                              Gates Cambridge Scholarships
                            </a>{" "}
                            must be applied for separately in advance.
                            <br />
                            <br />
                            Interdisciplinary co-supervision is available. Please
                            make sure you list Dr. Malak Sadek as a potential
                            supervisor in your application.
                          </p>
                          <a
                            href="https://www.postgraduate.study.cam.ac.uk/courses/directory/iethpdhii"
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="mt-3 inline-block text-xs md:text-sm underline underline-offset-4 decoration-hiveDark hover:opacity-80"
                          >
                            Open course page
                          </a>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

