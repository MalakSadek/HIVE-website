import Image from "next/image";
import type { CSSProperties } from "react";
import { Container } from "./Container";
import { PastMembersToggle } from "./PastMembersToggle";

type Person = {
  name: string;
  role: string;
  imageSrc?: string;
  url?: string;
};

type Institution = {
  src: string;
  alt: string;
  url: string;
  sizeClass?: string;
  imageStyle?: CSSProperties;
  imageClassName?: string;
};

const teamMembers: Person[] = [
  {
    name: "Dr. Malak Sadek",
    role: "Lab Director & PI",
    imageSrc: "/img/malak.jpg",
    url: "https://www.chia.cam.ac.uk/team/malak-sadek",
  },
  {
    name: "Dr. Imane Chafi",
    role: "Postdoctoral Researcher",
    imageSrc: "/img/imane-chafi.jpg",
    url: "https://www.imanechafi.com/",
  },
  {
    name: "Eshan Varma",
    role: "Visiting Researcher (Cornell University)",
    imageSrc: "/img/eshan-varma.jpeg",
    url: "https://www.linkedin.com/in/eshanv/",
  },
  {
    name: "Ziwen Zhu",
    role: "Visiting Researcher (Northumbria University)",
    imageSrc: "/img/ziwen-zhu.jpg",
    url: "https://www.ziwendesign.com/",
  },
  {
    name: "Sara Singergy",
    role: "Visiting Researcher (American University of Cairo)",
    imageSrc: "/img/sara-singergy.jpeg",
    url: "https://www.linkedin.com/in/sara-elsingergy/",
  },
  {
    name: "Isabelle Kohout",
    role: "Research Assistant",
    imageSrc: "/img/isabelle.png",
    url: "https://www.linkedin.com/in/isabellekohout/",
  },
  {
    name: "Anshul Sinha",
    role: "Research Assistant",
    imageSrc: "/img/anshul.jpg",
    url: "https://www.linkedin.com/in/anshulkks/",
  },
  {
    name: "Qian Shu (Helen) Wang",
    role: "MPhil Student",
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
    name: "Prof. Rafael A. Calvo",
    role: "Professor in Design Engineering, Imperial College London",
    imageSrc: "/img/rafa.jpg",
    url: "https://www.linkedin.com/in/rafael-a-calvo/",
  },
  {
    name: "Dr. Dorian Peters",
    role: "Assistant Professor in Ethical Design, Leverhulme Centre for the Future of Intelligence",
    imageSrc: "/img/dorian.png",
    url: "https://www.lcfi.ac.uk/people/dorian-peters",
  },
  {
    name: "Dr.-Ing. Edyta Bogucka",
    role: "Senior Research Scientist, Nokia Bell Labs",
    imageSrc: "/img/Edyta.jpg",
    url: "https://www.linkedin.com/in/epbogucka/?originalSubdomain=uk",
  },
  {
    name: "Dr. Willem van der Maden",
    role: "Postdoctoral Researcher in Human-Centered AI Evaluation & Design, ITU Copenhagen",
    imageSrc: "/img/willem.jpg",
    url: "https://www.linkedin.com/in/wlavandermaden/",
  },
  {
    name: "Dr. Smit Desai",
    role: "Assistant Professor at the College of Arts, Media and Design, Northeastern University",
    imageSrc: "/img/smit.jpg",
    url: "https://www.linkedin.com/in/smit-desai-6b54bb83/",
  },
  {
    name: "Dr. Emma Kallina",
    role: "Postdoctoral Researcher, Research Center for Trustworthy Data Science and Security",
    imageSrc: "/img/emma.jpg",
    url: "https://www.linkedin.com/in/emma-kallina/?originalSubdomain=uk",
  },
  {
    name: "Dr. Minja Axelsson",
    role: "Postdoctoral Research & Teaching Fellow, University of Cambridge",
    imageSrc: "/img/minja.jpg",
    url: "https://www.linkedin.com/in/minjaaxelsson/",
  },
  {
    name: "Echo Wan",
    role: "Doctoral Student, Imperial College London & Patient Engagement Coordinator for Data Science Projects, Royal Marsden",
    imageSrc: "/img/echo.jpg",
    url: "https://www.linkedin.com/in/echowan/",
  },
];

const pastMembersAndCollaborators: Person[] = [
  {
    name: "Dr. Uta Hinrichs",
    role: "Associate Professor in Data Visualisation, Institute of Language, Cognition and Computation, University of Edinburgh",
    imageSrc: "/img/Uta.jpg",
    url: "https://www.research.ed.ac.uk/en/persons/uta-hinrichs/",
  },
  {
    name: "Dr. Loraine Clarke",
    role: "Design Researcher & Lecturer, University of St Andrews",
    imageSrc: "/img/loraine.jpg",
    url: "https://www.st-andrews.ac.uk/computer-science/people/lec24/",
  },
];

const collaboratorInstitutions: Institution[] = [
  { src: "/img/imperial.png", alt: "Imperial College London", url: "https://www.imperial.ac.uk/" },
  { src: "/img/cfi.png", alt: "Leverhulme Centre for the Future of Intelligence", url: "https://www.lcfi.ac.uk/" },
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
    src: "/img/delft.png",
    alt: "Delft University of Technology (TU Delft)",
    url: "https://www.tudelft.nl/en/",
    imageClassName: "-translate-y-3",
  },
  { src: "/img/copenhagen.jpg", alt: "IT University of Copenhagen (ITU)", url: "https://en.itu.dk/" },
  {
    src: "/img/chai.jpg",
    alt: "Conversational Human-AI Interactions Lab, Northeastern University",
    sizeClass: "w-56 md:w-64 lg:w-72 h-24 md:h-28 lg:h-32",
    url: "https://chai-nu.notion.site/home-site",
  },
  {
    src: "/img/at.png",
    alt: "Alan Turing Institute",
    url: "https://www.turing.ac.uk/",
    sizeClass: "w-44 md:w-52 h-16 md:h-20 lg:h-24",
  },
  {
    src: "/img/northumbria-logo.png",
    alt: "Northumbria University Newcastle",
    url: "https://www.northumbria.ac.uk/",
  },
  {
    src: "/img/auc-logo.png",
    alt: "The American University in Cairo",
    url: "https://www.aucegypt.edu/",
  },
];

export function TeamSection() {
  const mdColumns = 3;
  const lastTeamIndex = teamMembers.length - 1;
  const teamRemainder = teamMembers.length % mdColumns;

  const lastCollaboratorIndex = collaborators.length - 1;
  const collaboratorsRemainder = collaborators.length % mdColumns;

  const lastPastMemberIndex = pastMembersAndCollaborators.length - 1;
  const pastMembersRemainder = pastMembersAndCollaborators.length % mdColumns;

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
    <section id="team" className="bg-white pt-8 pb-8 md:pb-10">
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

        <div className="mt-12">
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8 xl:hidden">
            {collaboratorInstitutions.map((institution) => (
              <a
                key={institution.src}
                href={institution.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`relative block shrink-0 max-w-full ${institution.sizeClass ?? "h-12 md:h-14 lg:h-16 w-44 md:w-52"} hover:opacity-80 transition-opacity`}
                aria-label={institution.alt}
              >
                <Image
                  src={institution.src}
                  alt={institution.alt}
                  fill
                  sizes="(max-width: 768px) 176px, 208px"
                  className={`object-contain ${institution.imageClassName ?? ""}`}
                  style={institution.imageStyle}
                />
              </a>
            ))}
          </div>

          <div className="hidden xl:flex flex-col gap-y-10">
            {[
              { items: collaboratorInstitutions.slice(0, 4), width: "w-full", columns: "grid-cols-4" },
              { items: collaboratorInstitutions.slice(4, 8), width: "w-full", columns: "grid-cols-4" },
              { items: collaboratorInstitutions.slice(8, 11), width: "w-3/4", columns: "grid-cols-3" },
            ].map((row, rowIndex) => (
              <div
                key={rowIndex}
                className={`${row.width} mx-auto grid ${row.columns} items-center gap-x-16 gap-y-8`}
              >
                {row.items.map((institution) => (
                  <div
                    key={institution.src}
                    className="min-w-0 flex justify-center items-center"
                  >
                    <a
                      href={institution.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`relative block max-w-full ${institution.sizeClass ?? "h-14 lg:h-16 w-52"} hover:opacity-80 transition-opacity`}
                      aria-label={institution.alt}
                    >
                      <Image
                        src={institution.src}
                        alt={institution.alt}
                        fill
                        sizes="(max-width: 1024px) 208px, 208px"
                        className={`object-contain ${institution.imageClassName ?? ""}`}
                        style={institution.imageStyle}
                      />
                    </a>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        <PastMembersToggle>
          <div
            id="past-members-and-collaborators"
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-10 mb-0"
          >
            {(
              pastMembersAndCollaborators.length
                ? pastMembersAndCollaborators
                : new Array(3).fill(null)
            ).map((person, index) =>
              renderPerson(
                (person ?? { name: "", role: "" }),
                index,
                pastMembersRemainder === 1 && index === lastPastMemberIndex
                  ? "md:col-start-3"
                  : pastMembersRemainder === 2 && index === lastPastMemberIndex - 1
                    ? "md:col-start-2"
                    : pastMembersRemainder === 2 && index === lastPastMemberIndex
                      ? "md:col-start-4"
                      : undefined
              )
            )}
          </div>
        </PastMembersToggle>

        <div className="mt-16 border-t-4 border-hiveGold w-full" />
      </Container>
    </section>
  );
}
