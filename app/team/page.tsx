import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";

const teamMembers = [
  {
    name: "Ms. Socheata Phallim",
    role: "Project Leader",
    initials: "SP",
    image: "/team/socheata.jpg",
    focus: "Project coordination, report direction, and academic quality control.",
    contribution:
      "Led the overall report structure, assigned responsibilities, reviewed section completeness, and ensured the final website followed BUS430 Professional Business Writing expectations.",
  },
  {
    name: "Mr. Soponloe Sovann",
    role: "Technical Lead",
    initials: "SS",
    image: "/team/soponloe-sovann.jpg",
    focus: "Next.js implementation, responsive layout, and website presentation.",
    contribution:
      "Built the static App Router website, organized reusable components, refined visual hierarchy, and verified that the site works cleanly across desktop, tablet, and mobile screens.",
  },
  {
    name: "Mr. Lykuoyhay Sout",
    role: "Logistics Manager",
    initials: "LS",
    image: "/team/lykuoyhay-sout.jpg",
    focus: "Trip planning, destination details, schedules, and location accuracy.",
    contribution:
      "Prepared the trip route information, confirmed the business purpose of each destination, and supported realistic planning details for transportation, accommodation, and site visits.",
  },
  {
    name: "Mr. Meanhout Son",
    role: "Finance & Marketing Specialist",
    initials: "MS",
    image: "/team/meanhout.jpg",
    focus: "Expense estimates, marketing insights, and business recommendations.",
    contribution:
      "Developed the expense tables, reviewed cost reasonableness, and contributed analysis for investor interest, social media strategy, customer engagement, and market expansion decisions.",
  },
  {
    name: "Mr. Chanpirun Srorn",
    role: "Group Secretary",
    initials: "CS",
    image: "/team/chanpirun-srorn.jpg",
    focus: "Documentation, meeting notes, proofreading, and final organization.",
    contribution:
      "Recorded key information, checked grammar and formatting consistency, organized supporting details, and helped prepare the final report for formal academic submission.",
  },
];

export const metadata = {
  title: "Team | Business Trip Reports 2026",
  description:
    "Team members and responsibilities for the Angkor Verde Foods BUS430 business trip report website.",
};

export default function TeamPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="team-hero section-fade">
          <div>
            <p className="eyebrow">Prepared By</p>
            <h1>Report Team</h1>
            <p>
              This page identifies the five members responsible for planning,
              writing, organizing, and presenting the Angkor Verde Foods Co.,
              Ltd. Business Trip Reports 2026 website for BUS430 Professional
              Business Writing.
            </p>
          </div>
          <Link className="secondary-report-link" href="/#reports">
            Return to Reports
          </Link>
        </section>

        <section className="section team-section">
          <div className="section-heading split-heading">
            <div>
              <p className="eyebrow">Roles & Responsibilities</p>
              <h2>Clear team ownership for a professional submission</h2>
            </div>
            <p>
              Each role supports a specific part of the report process, from
              leadership and technical design to logistics, finance, marketing,
              and documentation.
            </p>
          </div>

          <div className="team-grid">
            {teamMembers.map((member) => (
              <article className="team-card section-fade" key={member.name}>
                <div className="avatar" aria-hidden={!member.image}>
                  {member.image ? (
                    <Image
                      src={member.image}
                      alt={`${member.name} headshot`}
                      fill
                      sizes="(max-width: 640px) 100vw, 148px"
                    />
                  ) : (
                    <span>{member.initials}</span>
                  )}
                </div>
                <div>
                  <span className="tag">{member.role}</span>
                  <h3>{member.name}</h3>
                  <p className="team-focus">{member.focus}</p>
                  <p>{member.contribution}</p>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
