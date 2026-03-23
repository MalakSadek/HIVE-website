import { ReactNode } from "react";
import { Container } from "./Container";

interface SectionTitleProps {
  id?: string;
  title: string;
  children?: ReactNode;
}

export function SectionTitle({ id, title, children }: SectionTitleProps) {
  return (
    <section id={id} className="py-12 md:py-16 bg-white">
      <Container className="text-center">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight text-hiveDark mb-4">
          {title}
        </h2>
        {children && (
          <div className="max-w-3xl mx-auto text-base md:text-lg text-gray-800 space-y-4">
            {children}
          </div>
        )}
      </Container>
    </section>
  );
}

