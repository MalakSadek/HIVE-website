import Image from "next/image";
import { Container } from "./Container";

export function PrinciplesSection() {
  return (
    <section id="principles" className="bg-white pt-8 pb-8 md:pt-10">
      <Container className="text-center">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight text-hiveDark mb-8">
          Lab Ethos and Principles
        </h2>
        <div className="relative w-full max-w-2xl mx-auto">
          <Image
            src="/img/principles.jpg"
            alt="HIVE CAI Lab principles: Technology, Humans, Impact, and Lab values"
            width={1024}
            height={1024}
            className="w-full h-auto"
          />
        </div>

        <div className="mt-16 border-t-4 border-hiveGold w-full" />
      </Container>
    </section>
  );
}

