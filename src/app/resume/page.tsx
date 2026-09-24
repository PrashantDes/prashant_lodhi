import { DATA } from "@/data/resume";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resume",
  description: `${DATA.name}'s resume`,
};

export default function ResumePage() {
  return (
    <main className="mx-auto max-w-3xl rounded-2xl border bg-background/95 p-6 shadow-sm sm:p-10">
      <div className="flex flex-col gap-4 border-b pb-8 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
            Resume
          </p>
          <h1 className="mt-2 text-4xl font-bold tracking-tight">{DATA.name}</h1>
          <p className="mt-2 text-lg text-muted-foreground">
            Data Analyst & Business Intelligence Specialist
          </p>
          <p className="mt-1 text-sm text-muted-foreground">{DATA.location}</p>
        </div>
        <a
          href="/Prashant_Lodhi_Resume.pdf"
          download
          className="inline-flex w-fit rounded-lg border px-4 py-2 text-sm font-semibold transition-colors hover:bg-muted"
        >
          Download PDF
        </a>
      </div>

      <section className="border-b py-8">
        <h2 className="text-xl font-semibold">Profile</h2>
        <p className="mt-3 whitespace-pre-line leading-7 text-muted-foreground">
          {DATA.summary}
        </p>
      </section>

      <section className="border-b py-8">
        <h2 className="text-xl font-semibold">Core skills</h2>
        <div className="mt-5 grid gap-6 sm:grid-cols-2">
          {DATA.skills.map((skill) => (
            <div key={skill.category}>
              <h3 className="font-medium">{skill.category}</h3>
              <p className="mt-1 text-sm leading-6 text-muted-foreground">
                {skill.items.join(" · ")}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-b py-8">
        <h2 className="text-xl font-semibold">Education</h2>
        {DATA.education.map((education) => (
          <div key={education.school} className="mt-4">
            <h3 className="font-medium">{education.degree}</h3>
            <p className="text-muted-foreground">{education.school}</p>
            <p className="mt-1 text-sm text-muted-foreground">
              {education.start} – {education.end} · CGPA {education.cgpa}
            </p>
          </div>
        ))}
      </section>

      <section className="pt-8">
        <h2 className="text-xl font-semibold">Contact</h2>
        <div className="mt-4 flex flex-col gap-2 text-sm text-muted-foreground sm:flex-row sm:gap-6">
          <a className="hover:text-foreground" href={`mailto:${DATA.contact.email}`}>
            {DATA.contact.email}
          </a>
          <a className="hover:text-foreground" href={DATA.contact.social.LinkedIn.url}>
            LinkedIn
          </a>
          <a className="hover:text-foreground" href={DATA.contact.social.GitHub.url}>
            GitHub
          </a>
        </div>
      </section>
    </main>
  );
}
