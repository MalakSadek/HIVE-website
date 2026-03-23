import { SectionTitle } from "./SectionTitle";

export function IntroSection() {
  return (
    <SectionTitle id="research" title="Many Voices, Shared Intelligence">
      <div className="border-l-4 border-r-4 border-hiveGold px-10 md:px-10">
        <p>
          <strong>The HIVE CAI Lab</strong> is full of busy bees working on
          advancing Human-Computer Interaction (HCI), AI, and design research to
          improve how conversational AI systems represent and support diverse
          human values.
        </p>
        <br/>
        <p>
          We use interdisciplinary research methods to explore a wide range of
          questions, leading to new insights about conversational AI
          practitioners and users, participatory design frameworks and practical
          tools, and a better understanding of what is really at stake with
          these highly social and interactive technologies.
        </p>
        <br/>
        <p>
          Our work supports the creation of conversational AI systems that are
          human-centred, value-sensitive, understandable, and customisable. We
          do this through two pathways.
        </p>
      </div>
    </SectionTitle>
  );
}

