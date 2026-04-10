"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const NAV_ITEMS = [
  { label: "Research", href: "#research" },
  { label: "Projects", href: "#projects" },
  { label: "Team", href: "#team" },
  { label: "Principles", href: "#principles" },
  { label: "Activities", href: "#activities" },
  { label: "Join the HIVE", href: "#join" },
];

export function Header() {
  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const currentY = window.scrollY;

      if (currentY <= 0) {
        setHidden(false);
        setLastScrollY(0);
        return;
      }

      const threshold = 80;

      if (currentY > lastScrollY && currentY > threshold) {
        setHidden(true);
      } else if (currentY < lastScrollY) {
        setHidden(false);
      }

      setLastScrollY(currentY);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [lastScrollY]);

  const handleNavClick = (href: string) => {
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 bg-white border-b border-gray-200 transition-transform duration-300 ${
        hidden ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <div className="relative w-full mx-auto px-3 sm:px-4 md:px-6 py-3 flex items-center justify-between gap-4">
        <button
          type="button"
          onClick={handleScrollToTop}
          className="flex items-center gap-0 cursor-pointer"
          aria-label="Back to top"
        >
          <div className="relative h-11 w-11 md:h-12 md:w-12">
            <Image
              src="/img/logo-transparent.png"
              alt="HIVE Lab logo"
              fill
              className="object-contain"
            />
          </div>
          <div className="relative h-7 w-36 md:h-9 md:w-48 -ml-8">
            <Image
              src="/img/text-transparent.png"
              alt="HIVE Lab"
              fill
              className="object-contain"
            />
          </div>
        </button>

        <nav
          aria-label="Primary navigation"
          className="hidden xl:flex absolute left-1/2 -translate-x-1/2"
        >
          <ul className="flex items-center gap-4 lg:gap-6 text-sm md:text-base">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <button
                  type="button"
                  onClick={() => handleNavClick(item.href)}
                  className="text-gray-800 hover:text-hiveGold transition-colors whitespace-nowrap"
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-0">
          <a
            href="https://www.chia.cam.ac.uk/"
            target="_blank"
            rel="noreferrer"
            className="relative h-10 w-16 sm:w-32 md:h-11 md:w-36"
            aria-label="Visit CHIA website"
          >
            <Image
              src="/img/chia-logo-transparent.png"
              alt="CHIA logo"
              fill
              className="object-contain scale-125"
            />
          </a>
          <a
            href="https://www.cam.ac.uk/"
            target="_blank"
            rel="noreferrer"
            className="relative h-8 w-20 sm:w-32 md:h-9 md:w-40"
            aria-label="Visit University of Cambridge website"
          >
            <Image
              src="/img/university-logo-transparent.png"
              alt="University logo"
              fill
              className="object-contain"
            />
          </a>
        </div>
      </div>
    </header>
  );
}

