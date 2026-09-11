"use client";

import { useState, type ReactNode } from "react";

type PastMembersToggleProps = {
  children: ReactNode;
  title: string;
  controlsId: string;
  headingLevel?: "h3" | "h4";
  className?: string;
  buttonClassName: string;
};

export function PastMembersToggle({
  children,
  title,
  controlsId,
  headingLevel = "h3",
  className,
  buttonClassName,
}: PastMembersToggleProps) {
  const [isOpen, setIsOpen] = useState(false);
  const Heading = headingLevel;

  return (
    <div className={className}>
      <Heading className="mb-10 text-center">
        <button
          type="button"
          aria-expanded={isOpen}
          aria-controls={controlsId}
          onClick={() => setIsOpen((value) => !value)}
          className={`inline-flex items-center justify-center gap-2 rounded p-1 text-hiveDark hover:bg-black/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/30 ${buttonClassName}`}
        >
          <span>{title}</span>
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
      </Heading>

      {isOpen ? children : null}
    </div>
  );
}
