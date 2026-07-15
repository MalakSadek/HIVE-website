"use client";

import { useState, type ReactNode } from "react";

type PastMembersToggleProps = {
  children: ReactNode;
};

export function PastMembersToggle({ children }: PastMembersToggleProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <h3 className="mt-16 mb-10 text-center">
        <button
          type="button"
          aria-expanded={isOpen}
          aria-controls="past-members-and-collaborators"
          onClick={() => setIsOpen((value) => !value)}
          className="inline-flex items-center justify-center gap-2 rounded p-1 text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight text-hiveDark hover:bg-black/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/30"
        >
          <span>Past Members & Collaborators</span>
          <svg
            viewBox="0 0 20 20"
            aria-hidden="true"
            className={`h-4 w-4 transition-transform ${
              isOpen ? "rotate-0" : "-rotate-90"
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
      </h3>

      {isOpen ? children : null}
    </>
  );
}
