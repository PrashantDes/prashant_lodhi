import { CopyEmailButton } from "@/components/copy-email-button";
import { Icons } from "@/components/icons";
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { ProjectCard } from "@/components/project-card";
import { ResumeCard } from "@/components/resume-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { DATA } from "@/data/resume";
import {
  ArrowUpRight,
  FileText,
  MapPin,
  Sparkles,
} from "lucide-react";
import Link from "next/link";
import Markdown from "react-markdown";

const BLUR_FADE_DELAY = 0.04;

export default async function Page() {
  return (
    <main className="flex flex-col min-h-[100dvh] space-y-12 sm:space-y-16">
      {/* HERO SECTION */}
      <section id="hero" className="pt-2 sm:pt-4">
        <div className="mx-auto w-full space-y-6">
          <div className="flex flex-col-reverse sm:flex-row gap-6 sm:gap-4 sm:items-center sm:justify-between">
            <div className="flex flex-col flex-1 space-y-2">
              <BlurFade delay={BLUR_FADE_DELAY}>
                <div className="inline-flex w-fit items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-700 dark:text-emerald-300">
                  <span className="relative flex size-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
                  </span>
                  Open to Data Analyst & BI Roles
                </div>
              </BlurFade>

              <BlurFadeText
                delay={BLUR_FADE_DELAY}
                className="text-3xl font-extrabold tracking-tight sm:text-5xl xl:text-6xl/none text-foreground"
                yOffset={8}
                text={DATA.headline}
              />

              <BlurFadeText
                className="max-w-[620px] text-muted-foreground text-sm sm:text-lg leading-relaxed pt-1"
                delay={BLUR_FADE_DELAY * 1.5}
                text={DATA.description}
              />

              <BlurFade delay={BLUR_FADE_DELAY * 2}>
                <div className="flex flex-wrap items-center gap-2 pt-3">
                  <Link
                    href="/resume"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg bg-foreground text-background px-4 py-2 text-sm font-semibold hover:opacity-90 transition-all shadow-sm"
                  >
                    <FileText className="size-4" />
                    Resume
                  </Link>

                  <CopyEmailButton email={DATA.contact.email} variant="pill" />

                  <Link
                    href={DATA.contact.social.GitHub.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    className="inline-flex size-9 items-center justify-center rounded-lg border border-border/80 text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
                  >
                    <Icons.github className="size-4" />
                  </Link>

                  <Link
                    href={DATA.contact.social.LinkedIn.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="inline-flex size-9 items-center justify-center rounded-lg border border-border/80 text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
                  >
                    <Icons.linkedin className="size-4" />
                  </Link>
                </div>
              </BlurFade>
            </div>

            <BlurFade delay={BLUR_FADE_DELAY}>
              <div className="relative group self-start sm:self-center">
                <div className="absolute -inset-0.5 rounded-full bg-gradient-to-tr from-cyan-500 to-emerald-500 opacity-40 blur-md group-hover:opacity-75 transition duration-500" />
                <Avatar className="size-28 sm:size-32 border-2 border-background relative shadow-md">
                  <AvatarImage
                    alt={DATA.name}
                    src={DATA.avatarUrl}
                    className="object-cover object-top"
                  />
                  <AvatarFallback>{DATA.initials}</AvatarFallback>
                </Avatar>
              </div>
            </BlurFade>
          </div>

          {/* 2026 QUANTITATIVE METRICS BAR */}
          <BlurFade delay={BLUR_FADE_DELAY * 2.5}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 rounded-2xl border border-border/70 bg-card/40 p-4 sm:p-5 backdrop-blur-md shadow-sm">
              {DATA.metrics.map((metric, idx) => (
                <div
                  key={idx}
                  className="flex flex-col space-y-1 border-r last:border-r-0 border-border/40 pr-2"
                >
                  <span className="font-mono text-xl sm:text-2xl font-bold tracking-tight text-foreground">
                    {metric.value}
                  </span>
                  <span className="text-xs font-semibold text-foreground/90">
                    {metric.label}
                  </span>
                  <span className="text-[11px] text-muted-foreground line-clamp-1">
                    {metric.subtext}
                  </span>
                </div>
              ))}
            </div>
          </BlurFade>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about">
        <div className="space-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 3}>
            <h2 className="text-xl font-bold tracking-tight">About</h2>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 4}>
            <div className="rounded-xl border border-border/60 bg-card/30 p-5 backdrop-blur-sm">
              <Markdown className="prose max-w-full text-pretty font-sans text-sm sm:text-base text-muted-foreground dark:prose-invert leading-relaxed">
                {DATA.summary}
              </Markdown>
            </div>
          </BlurFade>
        </div>
      </section>

      {/* SKILLS SECTION - 2026 CAPABILITY CARDS */}
      <section id="skills">
        <div className="flex min-h-0 flex-col gap-y-4">
          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold tracking-tight">Technical Arsenal</h2>
              <span className="text-xs font-mono text-muted-foreground">
                Core Competencies
              </span>
            </div>
          </BlurFade>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {DATA.skills.map((skillGroup, id) => {
              const Icon = skillGroup.icon;
              return (
                <BlurFade
                  key={skillGroup.category}
                  delay={BLUR_FADE_DELAY * 6 + id * 0.05}
                >
                  <div className="group flex flex-col justify-between h-full rounded-xl border border-border/70 bg-card/50 p-4 sm:p-5 backdrop-blur-sm transition-all duration-300 hover:border-foreground/20 hover:shadow-md">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <div className="rounded-lg bg-primary/10 p-2 text-primary">
                          <Icon className="size-4" />
                        </div>
                        <h3 className="font-semibold text-sm sm:text-base">
                          {skillGroup.category}
                        </h3>
                      </div>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        {skillGroup.description}
                      </p>
                    </div>

                    <div className="mt-4 flex flex-wrap gap-1.5 pt-2 border-t border-border/40">
                      {skillGroup.items.map((skill) => (
                        <Badge
                          key={skill}
                          variant="secondary"
                          className="px-2 py-0.5 text-[11px] font-normal rounded-md border-border/60 bg-muted/60 text-muted-foreground group-hover:text-foreground transition-colors"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </BlurFade>
              );
            })}
          </div>
        </div>
      </section>

      {/* FEATURED PROJECTS - BENTO GRID */}
      <section id="projects">
        <div className="space-y-6 w-full">
          <BlurFade delay={BLUR_FADE_DELAY * 8}>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b border-border/60 pb-3">
              <div>
                <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary mb-1">
                  <Sparkles className="size-3" />
                  Portfolio Showcase
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                  Featured Projects
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-muted-foreground max-w-sm">
                Real-world analytics pipelines, BI dashboards, and reproducible Python analysis.
              </p>
            </div>
          </BlurFade>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {DATA.projects.map((project, id) => (
              <BlurFade
                key={project.title}
                delay={BLUR_FADE_DELAY * 9 + id * 0.05}
                className={project.featured ? "sm:col-span-2" : "col-span-1"}
              >
                <ProjectCard
                  href={project.href}
                  title={project.title}
                  description={project.description}
                  dates={project.dates}
                  tags={project.technologies}
                  image={project.image}
                  video={project.video}
                  impact={project.impact}
                  featured={project.featured}
                  links={project.links}
                />
              </BlurFade>
            ))}
          </div>

          <BlurFade delay={BLUR_FADE_DELAY * 11}>
            <div className="flex justify-center pt-2">
              <Link
                href="https://github.com/PrashantDes"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-border/80 bg-card/60 px-5 py-2.5 text-sm font-semibold hover:bg-accent hover:border-foreground/20 transition-all shadow-sm"
              >
                <Icons.github className="size-4" />
                <span>Explore More on GitHub</span>
                <ArrowUpRight className="size-4 text-muted-foreground" />
              </Link>
            </div>
          </BlurFade>
        </div>
      </section>

      {/* THE JOURNEY - BIOTECH TO DATA ANALYTICS */}
      <section id="journey">
        <div className="flex min-h-0 flex-col gap-y-4">
          <BlurFade delay={BLUR_FADE_DELAY * 12}>
            <div className="space-y-1">
              <h2 className="text-xl font-bold tracking-tight">The Analytical Journey</h2>
              <p className="text-xs sm:text-sm text-muted-foreground">
                How scientific inquiry and empirical methodology shaped my approach to data.
              </p>
            </div>
          </BlurFade>

          <div className="relative pl-2 sm:pl-4 space-y-6 pt-2">
            <div className="absolute left-[17px] sm:left-[25px] top-4 bottom-4 w-px bg-gradient-to-b from-cyan-500 via-emerald-500 to-border" />
            {DATA.journey.map((step, id) => (
              <BlurFade
                key={step.title}
                delay={BLUR_FADE_DELAY * 13 + id * 0.06}
              >
                <div className="relative flex items-start gap-4">
                  <div className="flex size-7 sm:size-8 shrink-0 items-center justify-center rounded-full bg-background border-2 border-emerald-500 text-[10px] sm:text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400 shadow-sm z-10">
                    {step.stage}
                  </div>
                  <div className="flex-1 rounded-xl border border-border/60 bg-card/40 p-4 sm:p-5 backdrop-blur-sm space-y-1.5">
                    <div className="flex flex-wrap items-center justify-between gap-1.5">
                      <h3 className="text-base font-bold text-foreground">
                        {step.title}
                      </h3>
                      <Badge
                        variant="outline"
                        className="text-[10px] font-mono border-emerald-500/30 text-emerald-600 dark:text-emerald-400 bg-emerald-500/5"
                      >
                        {step.tag}
                      </Badge>
                    </div>
                    <p className="text-xs font-medium text-primary/80">
                      {step.subtitle}
                    </p>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed pt-1">
                      {step.description}
                    </p>
                  </div>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* EDUCATION SECTION */}
      <section id="education">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 14}>
            <h2 className="text-xl font-bold tracking-tight">Education</h2>
          </BlurFade>
          {DATA.education.map((education, id) => (
            <BlurFade
              key={education.school}
              delay={BLUR_FADE_DELAY * 14.5 + id * 0.05}
            >
              <ResumeCard
                key={education.school}
                logoUrl={education.logoUrl}
                altText={education.school}
                title={education.school}
                subtitle={education.degree}
                href={education.href}
                period={`${education.start} - ${education.end}`}
                cgpa={education.cgpa}
              />
            </BlurFade>
          ))}
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact">
        <BlurFade delay={BLUR_FADE_DELAY * 15}>
          <div className="rounded-2xl border border-border/70 bg-gradient-to-b from-card/60 to-card/30 p-6 sm:p-10 backdrop-blur-md text-center space-y-5">
            <div className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background px-3 py-1 text-xs text-muted-foreground">
              <MapPin className="size-3 text-cyan-500" />
              <span>{DATA.location}</span>
            </div>

            <div className="space-y-2 max-w-lg mx-auto">
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                Let&apos;s Build Data Solutions Together
              </h2>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Whether you need exploratory data analysis, KPI dashboard design, or database optimization, I&apos;m ready to turn your data into insights.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <CopyEmailButton email={DATA.contact.email} variant="pill" />

              <Link
                href={DATA.contact.social.LinkedIn.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm font-medium hover:bg-accent transition-colors"
              >
                <Icons.linkedin className="size-4" />
                <span>LinkedIn</span>
              </Link>

              <Link
                href={DATA.contact.social.WhatsApp.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm font-medium hover:bg-accent transition-colors"
              >
                <Icons.whatsapp className="size-4" />
                <span>WhatsApp</span>
              </Link>
            </div>
          </div>
        </BlurFade>
      </section>

      {/* FOOTER */}
      <footer className="pb-16 text-center text-xs text-muted-foreground border-t border-border/40 pt-6">
        <p>© {new Date().getFullYear()} {DATA.name}. Built with Next.js & Tailwind CSS.</p>
      </footer>
    </main>
  );
}
