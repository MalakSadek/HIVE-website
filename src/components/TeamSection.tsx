import Image from "next/image";
import { Container } from "./Container";

type Person = {
  name: string;
  role: string;
  imageSrc?: string;
  url?: string;
};

const teamMembers: Person[] = [
  {
    name: "Dr. Malak Sadek",
    role: "Lab Lead",
    imageSrc: "/img/malak.jpg",
    url: "https://www.chia.cam.ac.uk/team/malak-sadek",
  },
  {
    name: "Qian Shu (Helen) Wang",
    role: "Incoming PhD Student",
    imageSrc: "/img/helen.jpg",
    url: "https://www.linkedin.com/in/helen-wang-cambridge/",
  },
  {
    name: "Afifah Kashif",
    role: "MPhil Student",
    imageSrc: "/img/afifah.JPG",
    url: "https://www.linkedin.com/in/afifah-k/",
  },
  {
    name: "Amirat Abdulsalam",
    role: "MPhil Student",
    imageSrc: "/img/amirat.jpg",
    url: "https://www.mastercardfoundation.fund.cam.ac.uk/staff/amirat-abdulsalam",
  },
  {
    name: "Anshul Sinha",
    role: "MPhil Student",
    imageSrc: "/img/anshul.jpg",
    url: "https://www.linkedin.com/in/anshulkks/",
  },
  {
    name: "Isabelle Kohout",
    role: "MPhil Student",
    imageSrc: "/img/isabelle.png",
    url: "https://www.linkedin.com/in/isabellekohout/",
  },
  {
    name: "Qingfeng Huang",
    role: "MPhil Student",
    imageSrc: "/img/qingfeng.jpg",
    url: "https://www.linkedin.com/in/qingfeng-huang/",
  },
  {
    name: "Sydney Nguyen",
    role: "MPhil Student",
    imageSrc: "/img/sydney.jpg",
    url: "https://www.linkedin.com/in/sydney-nguyen-7329441b1/",
  },
];

const collaborators: Person[] = [
  {
    name: "Dr. Céline Mougenot",
    role: "Associate Professor in Human-Centred Design and Innovation, Imperial College London",
    imageSrc: "/img/celine.jpg",
    url: "https://profiles.imperial.ac.uk/c.mougenot",
  },
  {
    name: "Dr. Dorian Peters",
    role: "Assistant Professor in Ethical Design, Leverhulme Centre for the Future of Intelligence",
    imageSrc: "/img/dorian.png",
    url: "https://www.lcfi.ac.uk/people/dorian-peters",
  },
  {
    name: "Dr.-Ing. Edyta Bockuga",
    role: "Research Scientist, Nokia Bell Labs",
    imageSrc: "/img/Edyta.jpg",
    url: "https://www.linkedin.com/in/epbogucka/?originalSubdomain=uk",
  },
  {
    name: "Dr. Emma Kallina",
    role: "Postdoctoral Researcher, Research Center for Trustworthy Data Science and Security",
    imageSrc: "/img/emma.jpg",
    url: "https://www.linkedin.com/in/emma-kallina/?originalSubdomain=uk",
  },
  {
    name: "Echo Wan",
    role: "Doctoral Student, Imperial College London & Patient Engagement Coordinator for Data Science Projects, Royal Marsden",
    imageSrc: "/img/echo.jpg",
    url: "https://www.linkedin.com/in/echowan/",
  },
  {
    name: "Dr. Songbo Hu",
    role: "Research Associate, Language Technology Lab, University of Cambridge",
    imageSrc: "/img/songbo.jpg",
    url: "https://www.linkedin.com/in/songbohu/",
  },
];

const collaboratorInstitutions = [
  { src: "/img/cfi.png", alt: "Leverhulme Centre for the Future of Intelligence", url: "https://www.lcfi.ac.uk/" },
  { src: "/img/imperial.png", alt: "Imperial College London", url: "https://www.imperial.ac.uk/" },
  { src: "/img/nokia.png", alt: "Nokia Bell Labs", url: "https://www.nokia.com/bell-labs/" },
  {
    src: "/img/st-andrews.png",
    alt: "University of St Andrews",
    sizeClass: "w-60 md:w-76 lg:w-84 h-20 md:h-24 lg:h-28",
    url: "https://www.st-andrews.ac.uk/",
  },
  {
    src: "/img/edinburgh.png",
    alt: "The University of Edinburgh",
    sizeClass: "w-60 md:w-76 lg:w-84 h-20 md:h-24 lg:h-28",
    url: "https://www.ed.ac.uk/",
  },
  {
    src: "/img/rm.jpg",
    alt: "The Royal Marsden NHS Foundation Trust",
    sizeClass: "w-60 md:w-76 lg:w-84 h-20 md:h-24 lg:h-28",
    url: "https://www.royalmarsden.nhs.uk/",
  },
  {
    src: "/img/rc.jpg",
    alt: "Research Center Trustworthy Data Science and Security",
    sizeClass: "w-60 md:w-76 lg:w-84 h-20 md:h-24 lg:h-28",
    url: "https://rc-trust.ai/",
  },
  { src: "/img/at.png", alt: "Alan Turing Institute", url: "https://www.turing.ac.uk/" },
];

export function TeamSection() {
  const mdColumns = 3;
  const lastTeamIndex = teamMembers.length - 1;
  const teamRemainder = teamMembers.length % mdColumns;

  const lastCollaboratorIndex = collaborators.length - 1;
  const collaboratorsRemainder = collaborators.length % mdColumns;

  const renderPerson = (
    person: Person,
    index: number,
    mdPlacementClass?: string
  ) => {
    const hexagon = person.url ? (
      <a
        href={person.url}
        target="_blank"
        rel="noopener noreferrer"
        className="block relative w-40 h-36 md:w-44 md:h-40 lg:w-48 lg:h-44 overflow-hidden bg-hiveGray hexagon mb-3 text-hiveDark hover:text-hiveGold hover:opacity-95"
        aria-label={`Open LinkedIn profile for ${person.name}`}
      >
        {person.imageSrc ? (
          <Image
            src={person.imageSrc}
            alt={person.name}
            fill
            sizes="(max-width: 1024px) 40vw, 192px"
            className="object-cover"
            style={{ objectPosition: "50% 30%" }}
            priority={index < 2}
          />
        ) : null}

        <svg
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          className="absolute inset-0 w-full h-full z-10 pointer-events-none"
        >
          <polygon
            points="25,0 75,0 100,50 75,100 25,100 0,50"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            vectorEffect="non-scaling-stroke"
          />
        </svg>
      </a>
    ) : (
      <div
        className="relative w-40 h-36 md:w-44 md:h-40 lg:w-48 lg:h-44 overflow-hidden bg-hiveGray hexagon mb-3"
        aria-hidden="true"
      >
        {person.imageSrc ? (
          <Image
            src={person.imageSrc}
            alt={person.name}
            fill
            sizes="(max-width: 1024px) 40vw, 192px"
            className="object-cover"
            style={{ objectPosition: "50% 30%" }}
            priority={index < 2}
          />
        ) : null}

        <svg
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          className="absolute inset-0 w-full h-full z-10 pointer-events-none"
        >
          <polygon
            points="25,0 75,0 100,50 75,100 25,100 0,50"
            fill="none"
            stroke="#000"
            strokeWidth="2"
            vectorEffect="non-scaling-stroke"
          />
        </svg>
      </div>
    );

    return (
      <div
        key={index}
        className={`md:col-span-2${mdPlacementClass ? ` ${mdPlacementClass}` : ""}`}
      >
        <div className="flex flex-col items-center text-center">
          {hexagon}

          <div className="text-sm md:text-base font-medium text-hiveDark">
            {person.name}
          </div>

          <div className="text-xs md:text-sm font-normal text-gray-700">
            {person.role}
          </div>
        </div>
      </div>
    );
  };

  return (
    <section id="team" className="bg-white pt-16 pb-8 md:pb-10">
      <Container>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight text-hiveDark mb-10 text-center">
          Team
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-10 mb-16">
          {(teamMembers.length ? teamMembers : new Array(3).fill(null)).map(
            (person, index) =>
              renderPerson(
                (person ?? { name: "", role: "" }),
                index,
                teamRemainder === 1 && index === lastTeamIndex
                  ? "md:col-start-3"
                  : teamRemainder === 2 && index === lastTeamIndex - 1
                    ? "md:col-start-2"
                    : teamRemainder === 2 && index === lastTeamIndex
                      ? "md:col-start-4"
                      : undefined
              )
          )}
        </div>

        <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight text-hiveDark mb-10 text-center">
          Collaborators
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-10 mb-0">
          {(
            collaborators.length ? collaborators : new Array(3).fill(null)
          ).map((person, index) =>
            renderPerson(
              (person ?? { name: "", role: "" }),
              index,
              collaboratorsRemainder === 1 && index === lastCollaboratorIndex
                ? "md:col-start-3"
                : collaboratorsRemainder === 2 && index === lastCollaboratorIndex - 1
                  ? "md:col-start-2"
                  : collaboratorsRemainder === 2 && index === lastCollaboratorIndex
                    ? "md:col-start-4"
                    : undefined
            )
          )}
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
          {collaboratorInstitutions.map((institution) => (
            <a
              key={institution.src}
              href={institution.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`relative block ${institution.sizeClass ?? "h-12 md:h-14 lg:h-16 w-44 md:w-52"} hover:opacity-80 transition-opacity`}
              aria-label={institution.alt}
            >
              <Image
                src={institution.src}
                alt={institution.alt}
                fill
                sizes="(max-width: 768px) 176px, (max-width: 1024px) 208px, 208px"
                className="object-contain"
              />
            </a>
          ))}
        </div>

        <div className="mt-16 border-t-4 border-hiveGold w-full" />
      </Container>
    </section>
  );
}

