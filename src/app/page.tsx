import { Icons } from "@/components/icons";
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { ProjectCard } from "@/components/project-card";
import { ResumeCard } from "@/components/resume-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { getBlogPosts } from "@/data/blog";
import { PINNED, resourceLogoUrl } from "@/data/resources";
import { DATA } from "@/data/resume";
import Link from "next/link";
import Markdown from "react-markdown";

const BLUR_FADE_DELAY = 0.04;

export default async function Page() {
  const posts = (await getBlogPosts())
    .sort(
      (a, b) =>
        new Date(b.metadata.publishedAt).getTime() -
        new Date(a.metadata.publishedAt).getTime()
    )
    .slice(0, 3);

  return (
    <main className="flex flex-col min-h-[100dvh] space-y-10">
      <section id="hero">
        <div className="mx-auto w-full max-w-4xl space-y-8">
          <div className="gap-2 flex justify-between">
            <div className="flex-col flex flex-1 space-y-1.5">
              <BlurFade delay={BLUR_FADE_DELAY}>
                <div className="inline-flex w-fit items-center gap-2 rounded-full border px-3 py-1 text-xs text-muted-foreground mb-2">
                  <span className="relative flex size-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                    <span className="relative inline-flex size-2 rounded-full bg-green-500" />
                  </span>
                  Open to new opportunities
                </div>
              </BlurFade>
              <BlurFadeText
                delay={BLUR_FADE_DELAY}
                className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
                yOffset={8}
                text={DATA.headline}
              />
              <BlurFadeText
                className="max-w-[600px] md:text-xl"
                delay={BLUR_FADE_DELAY}
                text={DATA.description}
              />
              <BlurFade delay={BLUR_FADE_DELAY * 2}>
                <div className="flex items-center gap-2 pt-3">
                  <Link
                    href="/resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg bg-foreground text-background px-4 py-2 text-sm font-semibold hover:opacity-80 transition-opacity"
                  >
                    Resume
                  </Link>
                  <Link
                    href={DATA.contact.social.GitHub.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    className="inline-flex size-9 items-center justify-center rounded-lg border text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Icons.github className="size-4" />
                  </Link>
                  <Link
                    href={DATA.contact.social.LinkedIn.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="inline-flex size-9 items-center justify-center rounded-lg border text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Icons.linkedin className="size-4" />
                  </Link>
                  <Link
                    href="https://mail.google.com/mail/u/0/#inbox"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Email"
                    className="inline-flex size-9 items-center justify-center rounded-lg border text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Icons.email className="size-4" />
                  </Link>
                </div>
              </BlurFade>
            </div>
            <BlurFade delay={BLUR_FADE_DELAY}>
              <Avatar className="size-28 border">
                <AvatarImage alt={DATA.name} src={DATA.avatarUrl} className="object-cover object-top" />
                <AvatarFallback>{DATA.initials}</AvatarFallback>
              </Avatar>
            </BlurFade>
          </div>
        </div>
      </section>
      <section id="about">
        <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <h2 className="text-xl font-bold">About</h2>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 4}>
          <Markdown className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
            {DATA.summary}
          </Markdown>
        </BlurFade>
      </section>
      <section id="education">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 7}>
            <h2 className="text-xl font-bold">Education</h2>
          </BlurFade>
          {DATA.education.map((education, id) => (
            <BlurFade
              key={education.school}
              delay={BLUR_FADE_DELAY * 8 + id * 0.05}
            >
              <ResumeCard
                key={education.school}
                href={education.href}
                logoUrl={education.logoUrl}
                altText={education.school}
                title={education.school}
                subtitle={education.degree}
                period={`${education.start} - ${education.end}`}
                cgpa={education.cgpa}
              />
            </BlurFade>
          ))}
        </div>
      </section>
      {false && <section id="journey">
        <div className="flex min-h-0 flex-col gap-y-4">
          <BlurFade delay={BLUR_FADE_DELAY * 8.5}>
            <h2 className="text-xl font-bold">Journey</h2>
          </BlurFade>
          <div className="space-y-8">
            {[
              {
                title: "MSc Biotechnology",
                description:
                  "Built a foundation in scientific method, structured thinking and working with data.",
              },
              {
                title: "Data Analytics",
                description:
                  "Self-directed learning in Python, SQL, Excel, Power BI and statistics — building real projects along the way.",
              },
              {
                title: "Data Analyst",
                description:
                  "Working toward my first role — turning data into insight for a team that needs it.",
              },
            ].map((stage, id) => (
              <BlurFade key={stage.title} delay={BLUR_FADE_DELAY * 8.75 + id * 0.05}>
                <div className="relative flex gap-5">
                  <div className="flex w-4 shrink-0 flex-col items-center">
                    <span className="mt-1.5 size-3 shrink-0 rounded-full bg-cyan-400" />
                    {id < 2 && <span className="mt-1 w-px flex-1 bg-border" />}
                  </div>
                  <div className="space-y-2 pb-1">
                    <h3 className="text-base font-semibold">{stage.title}</h3>
                    <p className="max-w-2xl text-sm text-muted-foreground">{stage.description}</p>
                  </div>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>}
      <section id="skills">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 9}>
            <h2 className="text-xl font-bold">Skills</h2>
          </BlurFade>
          <div className="flex flex-col gap-3">
            {Object.entries(DATA.skills).map(([category, skills], id) => (
              <BlurFade key={category} delay={BLUR_FADE_DELAY * 10 + id * 0.05}>
                <div className="flex flex-wrap items-center gap-1">
                  <span className="mr-1 text-sm font-semibold">
                    {category}:
                  </span>
                  {skills.map((skill) => (
                    <Badge key={skill}>{skill}</Badge>
                  ))}
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
      <section id="projects">
        <div className="space-y-12 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 11}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                  My Projects
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Check out my latest work
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  A selection of data-analysis and business-intelligence
                  projects that turn raw information into useful insights.
                </p>
              </div>
            </div>
          </BlurFade>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto">
            {DATA.projects.slice(0, 3).map((project, id) => (
              <BlurFade
                key={project.title}
                delay={BLUR_FADE_DELAY * 12 + id * 0.05}
              >
                <ProjectCard
                  href={project.href}
                  key={project.title}
                  title={project.title}
                  description={project.description}
                  dates={project.dates}
                  tags={project.technologies}
                  image={project.image}
                  video={project.video}
                  links={project.links}
                />
              </BlurFade>
            ))}
          </div>
          <BlurFade delay={BLUR_FADE_DELAY * 14}>
            <div className="flex justify-center">
              <Link
                href="https://github.com/PrashantDes"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-foreground text-background px-4 py-2 text-sm font-semibold hover:opacity-80 transition-opacity"
              >
                <Icons.github className="size-4" />
                More Projects
              </Link>
            </div>
          </BlurFade>
        </div>
      </section>
      <section id="journey">
        <div className="flex min-h-0 flex-col gap-y-4 py-8">
          <BlurFade delay={BLUR_FADE_DELAY * 15}>
            <h2 className="text-xl font-bold">Journey</h2>
          </BlurFade>
          <div className="space-y-8">
            {[
              ["MSc Biotechnology", "Built a foundation in scientific method, structured thinking and working with data."],
              ["Data Analytics", "Self-directed learning in Python, SQL, Excel, Power BI and statistics — building real projects along the way."],
              ["Data Analyst", "Working toward my first role — turning data into insight for a team that needs it."],
            ].map(([title, description], id) => (
              <BlurFade key={title} delay={BLUR_FADE_DELAY * 15.25 + id * 0.05}>
                <div className="relative flex gap-5">
                  <div className="flex w-4 shrink-0 flex-col items-center">
                    <span className="mt-1.5 size-3 shrink-0 rounded-full bg-cyan-400" />
                    {id < 2 && <span className="mt-1 w-px flex-1 bg-border" />}
                  </div>
                  <div className="space-y-2 pb-1">
                    <h3 className="text-base font-semibold">{title}</h3>
                    <p className="max-w-2xl text-sm text-muted-foreground">{description}</p>
                  </div>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
      {false && <>
      <section id="writing">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 15}>
            <h2 className="text-xl font-bold">Recent Writing</h2>
          </BlurFade>
          {posts.map((post, id) => (
            <BlurFade
              key={post.slug}
              delay={BLUR_FADE_DELAY * 15.5 + id * 0.05}
            >
              <Link
                className="flex flex-col space-y-1"
                href={`/blog/${post.slug}`}
              >
                <p className="tracking-tight">{post.metadata.title}</p>
                <p className="text-xs text-muted-foreground">
                  {new Date(post.metadata.publishedAt).toLocaleDateString(
                    "en-US",
                    { month: "long", day: "numeric", year: "numeric" }
                  )}
                </p>
              </Link>
            </BlurFade>
          ))}
          <BlurFade delay={BLUR_FADE_DELAY * 15.5 + posts.length * 0.05}>
            <Link
              href="/blog"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              View all posts →
            </Link>
          </BlurFade>
        </div>
      </section>
      <section id="pinned-reads">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 16}>
            <h2 className="text-xl font-bold">Pinned Reads</h2>
          </BlurFade>
          {PINNED.map((item, id) => (
            <BlurFade key={item.title} delay={BLUR_FADE_DELAY * 16.5 + id * 0.05}>
              <Link
                className="flex items-center gap-3"
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={resourceLogoUrl(item.href)}
                  alt={`${item.title} logo`}
                  className="size-8 shrink-0 rounded-md border bg-white object-contain p-1"
                />
                <div className="flex flex-col space-y-1">
                  <p className="tracking-tight">{item.title}</p>
                  <p className="text-xs text-muted-foreground">
                    {new URL(item.href).hostname.replace("www.", "")}
                  </p>
                </div>
              </Link>
            </BlurFade>
          ))}
          <BlurFade delay={BLUR_FADE_DELAY * 16.5 + PINNED.length * 0.05}>
            <Link
              href="/resources"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              View all resources →
            </Link>
          </BlurFade>
        </div>
      </section>
      </>}
      <section id="contact">
        <div className="grid items-center justify-center gap-4 px-4 text-center md:px-6 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 16}>
            <div className="space-y-3">
              <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                Contact
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Get in Touch
              </h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Want to chat? Just shoot me a dm{" "}
                <Link
                  href={DATA.contact.social.WhatsApp.url}
                  className="text-blue-500 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  with a direct question on WhatsApp
                </Link>{" "}
                and I&apos;ll respond whenever I can.
              </p>
            </div>
          </BlurFade>
        </div>
      </section>
      <footer className="border-t py-6">
        <BlurFade delay={BLUR_FADE_DELAY * 17}>
          <div className="flex flex-col items-center gap-1 text-center text-sm text-muted-foreground sm:flex-row sm:justify-between">
            <p>© {new Date().getFullYear()} {DATA.name}</p>
            <div className="flex items-center gap-4">
              <Link
                href={DATA.contact.social.GitHub.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-foreground transition-colors"
              >
                GitHub
              </Link>
              <Link
                href={DATA.contact.social.LinkedIn.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-foreground transition-colors"
              >
                LinkedIn
              </Link>
            </div>
          </div>
        </BlurFade>
      </footer>
    </main>
  );
}
