const links = [
  {
    label: "Accessibility",
    href: "https://www.cam.ac.uk/about-this-site/accessibility?ucam-ref=global-footer",
  },
  {
    label: "Freedom of Information",
    href: "https://www.information-compliance.admin.cam.ac.uk/foi?ucam-ref=global-footer",
  },
  {
    label: "Privacy Policy",
    href: "https://www.cam.ac.uk/about-this-site/privacy-policy?ucam-ref=global-footer",
  },
  {
    label: "Statement on Modern Slavery",
    href: "https://www.governanceandcompliance.admin.cam.ac.uk/policies-and-guidance/anti-slavery-and-anti-trafficking?ucam-ref=global-footer",
  },
  {
    label: "Terms and Conditions",
    href: "https://www.cam.ac.uk/about-this-site/terms-and-conditions?ucam-ref=global-footer",
  },
];

export function Footer() {
  return (
    <footer className="bg-white text-black py-10">
      <div className="max-w-7xl mx-auto px-4 text-center text-base">
        <p>
          Human Interactions, Values, and Experiences with Conversational AI
          (HIVE CAI) Lab, Centre for Human Inspired AI (CHIA).
          <br />
          16 Mill Lane,
          Cambridge, CB2 1SB, United Kingdom, Email:{" "}
          <a
            href="mailto:mfzas2@chia.cam.ac.uk"
            className="underline hover:text-hiveGold"
          >
            Coming Soon!
          </a>
        </p>

        <div className="mt-6 flex flex-wrap justify-evenly gap-y-3">
          {links.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-hiveGold"
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
