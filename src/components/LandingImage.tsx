import Image from "next/image";

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
        <div className="absolute inset-0 flex items-center justify-center px-4">
          <div className="bg-hiveGold/90 rounded-3xl px-6 py-4 md:px-10 md:py-6 max-w-2xl text-center shadow-lg">
            <p className="text-xl md:text-2xl lg:text-3xl tracking-tight text-hiveDark leading-relaxed">
              The{" "}
              <span className="font-extrabold">
                HIVE
                <sup className="italic font-extrabold align-super text-[0.6em] md:text-[0.65em] lg:text-[0.7em]">
                  CAI
                </sup>
              </span>{" "}
              Lab explores
              <div className="mb-3"></div>
              <span>
                <span className="underline font-extrabold">H</span>uman
              </span>{" "}
              <span>
                <span className="underline font-extrabold">I</span>nteractions,
              </span>{" "}
              <span>
                <span className="underline font-extrabold">V</span>alues
              </span>{" "}
              and{" "}
              <span>
                <span className="underline font-extrabold">E</span>xperiences
              </span>
              <div className="mb-3"></div>
              with{" "}
              <span>
                <span className="underline font-extrabold">C</span>onversational
              </span>{" "}
              <span className="underline font-extrabold">AI</span>
            </p>
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

