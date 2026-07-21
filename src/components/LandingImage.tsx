import Image from "next/image";

const RESEARCH_AGENDA_PDF = encodeURI("/Research Agenda [July 2026].pdf");

export function LandingImage() {
  return (
    <section id="home" className="pt-20 -mt-20">
      <div className="relative w-full h-[70vh] md:h-[80vh] lg:h-[90vh]">
        <Image
          src="/img/landing-image.jpg"
          alt="HIVE Lab"
          fill
          priority
          className="object-cover blur-[2px]"
        />
        <div className="absolute inset-0 flex flex-col px-4">
          <div className="flex-1" />
          <div className="flex justify-center">
            <div className="bg-hiveGold/90 rounded-3xl px-6 py-4 md:px-10 md:py-6 max-w-2xl text-center shadow-lg">
              <h1 className="flex flex-col gap-3 text-xl md:text-2xl lg:text-3xl tracking-tight text-hiveDark leading-relaxed">
                <span>
                  The{" "}
                  <span className="font-extrabold">
                    HIVE
                    <sup className="italic font-extrabold align-super text-[0.6em] md:text-[0.65em] lg:text-[0.7em]">
                      CAI
                    </sup>
                  </span>{" "}
                  Lab explores
                </span>
                <span>
                  <span>
                    <span className="underline font-extrabold">H</span>uman
                  </span>{" "}
                  <span>
                    <span className="underline font-extrabold">I</span>nteractions,
                  </span>{" "}
                  <span>
                    <span className="underline font-extrabold">V</span>alues
                  </span>{" "}
                  and
                </span>
                <span>
                  <span>
                    <span className="underline font-extrabold">E</span>xperiences
                  </span>{" "}
                  with{" "}
                  <span>
                    <span className="underline font-extrabold">C</span>onversational
                  </span>{" "}
                  <span className="underline font-extrabold">AI</span>
                </span>
              </h1>
            </div>
          </div>
          <div className="flex flex-1 items-center justify-center">
            <a
              href={RESEARCH_AGENDA_PDF}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 bg-transparent font-extrabold text-base md:text-lg lg:text-xl text-white drop-shadow-md transition-opacity hover:opacity-80"
            >
              Read Our Research Agenda
              <svg
                width="16"
                height="16"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                className="translate-y-0.5"
              >
                <path
                  d="M7.5 4.75L12.75 10L7.5 15.25"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>
        </div>
        <div className="absolute bottom-2 right-3 md:bottom-3 md:right-4 text-[6px] md:text-[7px] text-white/80 drop-shadow-sm">
          <span>Photo by </span>
          <a
            href="https://unsplash.com/@claybanks?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
            target="_blank"
            rel="noreferrer"
            className="underline hover:text-white"
          >
            Clay Banks
          </a>
          <span> on </span>
          <a
            href="https://unsplash.com/photos/brown-and-white-concrete-building-E4bn9ScilAA?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
            target="_blank"
            rel="noreferrer"
            className="underline hover:text-white"
          >
            Unsplash
          </a>
        </div>
      </div>
    </section>
  );
}

