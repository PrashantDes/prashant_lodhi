import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { ArrowUpRight, BarChart3, Database, LineChart, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Markdown from "react-markdown";

interface Props {
  title: string;
  href?: string;
  description: string;
  dates: string;
  tags: readonly string[];
  link?: string;
  image?: string;
  video?: string;
  impact?: string;
  featured?: boolean;
  links?: readonly {
    icon: React.ReactNode;
    type: string;
    href: string;
  }[];
  className?: string;
}

function ProjectGraphicFallback({ title }: { title: string }) {
  if (title.toLowerCase().includes("business insight") || title.toLowerCase().includes("power bi")) {
    return (
      <div className="relative h-44 w-full overflow-hidden bg-gradient-to-br from-neutral-900 via-neutral-950 to-neutral-900 p-4 text-white flex flex-col justify-between border-b border-border/40 select-none">
        <div className="absolute inset-0 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:16px_16px] opacity-15" />
        <div className="relative flex items-center justify-between">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 px-2.5 py-0.5 text-[11px] font-medium text-cyan-400">
            <BarChart3 className="size-3" />
            <span>Power BI Executive Dashboard</span>
          </div>
          <span className="text-[10px] font-mono text-neutral-400">DAX & Data Modeling</span>
        </div>

        <div className="relative grid grid-cols-3 gap-2">
          <div className="rounded-lg bg-neutral-800/80 border border-neutral-700/60 p-2">
            <p className="text-[10px] text-neutral-400">Gross Margin</p>
            <p className="text-sm font-bold text-white">41.8%</p>
            <span className="text-[9px] text-emerald-400">▲ +3.2% vs target</span>
          </div>
          <div className="rounded-lg bg-neutral-800/80 border border-neutral-700/60 p-2">
            <p className="text-[10px] text-neutral-400">Forecast Acc.</p>
            <p className="text-sm font-bold text-white">88.4%</p>
            <span className="text-[9px] text-cyan-400">● Supply Chain</span>
          </div>
          <div className="rounded-lg bg-neutral-800/80 border border-neutral-700/60 p-2">
            <p className="text-[10px] text-neutral-400">Departments</p>
            <p className="text-sm font-bold text-white">5 Unified</p>
            <span className="text-[9px] text-neutral-300">Sales/Finance</span>
          </div>
        </div>

        <div className="relative flex items-end gap-1.5 h-7 pt-1">
          {[35, 55, 45, 70, 60, 85, 90, 75, 95, 80, 100].map((h, i) => (
            <div
              key={i}
              style={{ height: `${h}%` }}
              className="flex-1 rounded-t bg-gradient-to-t from-cyan-600/40 to-cyan-400/90 transition-all hover:to-cyan-300"
            />
          ))}
        </div>
      </div>
    );
  }

  if (title.toLowerCase().includes("hotel") || title.toLowerCase().includes("hospitality")) {
    return (
      <div className="relative h-44 w-full overflow-hidden bg-gradient-to-br from-neutral-900 via-neutral-950 to-neutral-900 p-4 text-white flex flex-col justify-between border-b border-border/40 select-none">
        <div className="absolute inset-0 bg-[radial-gradient(#34d399_1px,transparent_1px)] [background-size:16px_16px] opacity-15" />
        <div className="relative flex items-center justify-between">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 px-2.5 py-0.5 text-[11px] font-medium text-emerald-400">
            <LineChart className="size-3" />
            <span>Exploratory Data Analysis</span>
          </div>
          <span className="text-[10px] font-mono text-neutral-400">Pandas · Matplotlib</span>
        </div>

        <div className="relative grid grid-cols-3 gap-2">
          <div className="rounded-lg bg-neutral-800/80 border border-neutral-700/60 p-2">
            <p className="text-[10px] text-neutral-400">Dataset Size</p>
            <p className="text-sm font-bold text-white">134,500</p>
            <span className="text-[9px] text-neutral-300">Total Bookings</span>
          </div>
          <div className="rounded-lg bg-neutral-800/80 border border-neutral-700/60 p-2">
            <p className="text-[10px] text-neutral-400">Avg Occupancy</p>
            <p className="text-sm font-bold text-white">57.8%</p>
            <span className="text-[9px] text-emerald-400">Weekend Surge</span>
          </div>
          <div className="rounded-lg bg-neutral-800/80 border border-neutral-700/60 p-2">
            <p className="text-[10px] text-neutral-400">Channels</p>
            <p className="text-sm font-bold text-white">7 Platforms</p>
            <span className="text-[9px] text-neutral-300">RevPAR Analysis</span>
          </div>
        </div>

        <div className="relative h-6 flex items-center">
          <svg className="w-full h-full overflow-visible" viewBox="0 0 100 20" preserveAspectRatio="none">
            <path
              d="M0,15 Q20,2 40,12 T80,5 T100,10"
              fill="none"
              stroke="#10b981"
              strokeWidth="2.5"
            />
            <path
              d="M0,15 Q20,2 40,12 T80,5 T100,10 L100,20 L0,20 Z"
              fill="rgba(16, 185, 129, 0.15)"
            />
          </svg>
        </div>
      </div>
    );
  }

  // Fallback for Expense Tracking System or general data app
  return (
    <div className="relative h-44 w-full overflow-hidden bg-gradient-to-br from-neutral-900 via-neutral-950 to-neutral-900 p-4 text-white flex flex-col justify-between border-b border-border/40 select-none">
      <div className="absolute inset-0 bg-[radial-gradient(#818cf8_1px,transparent_1px)] [background-size:16px_16px] opacity-15" />
      <div className="relative flex items-center justify-between">
        <div className="inline-flex items-center gap-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 px-2.5 py-0.5 text-[11px] font-medium text-indigo-400">
          <Database className="size-3" />
          <span>FastAPI + Streamlit + MySQL</span>
        </div>
        <span className="text-[10px] font-mono text-emerald-400">● 200 OK API</span>
      </div>

      <div className="relative grid grid-cols-3 gap-2">
        <div className="rounded-lg bg-neutral-800/80 border border-neutral-700/60 p-2">
          <p className="text-[10px] text-neutral-400">Architecture</p>
          <p className="text-sm font-bold text-white">Full-Stack</p>
          <span className="text-[9px] text-indigo-300">REST Client/Server</span>
        </div>
        <div className="rounded-lg bg-neutral-800/80 border border-neutral-700/60 p-2">
          <p className="text-[10px] text-neutral-400">Database</p>
          <p className="text-sm font-bold text-white">MySQL</p>
          <span className="text-[9px] text-neutral-300">Expense Tables</span>
        </div>
        <div className="rounded-lg bg-neutral-800/80 border border-neutral-700/60 p-2">
          <p className="text-[10px] text-neutral-400">Analytics UI</p>
          <p className="text-sm font-bold text-white">Streamlit</p>
          <span className="text-[9px] text-emerald-400">Live Filters</span>
        </div>
      </div>

      <div className="relative flex items-center justify-between text-[11px] font-mono text-neutral-400 bg-neutral-900/80 px-2.5 py-1 rounded border border-neutral-800">
        <span>GET /expenses/summary</span>
        <span className="text-emerald-400">Latency: 18ms</span>
      </div>
    </div>
  );
}

export function ProjectCard({
  title,
  href,
  description,
  dates,
  tags,
  link,
  image,
  video,
  impact,
  featured,
  links,
  className,
}: Props) {
  const hasMedia = Boolean(video || (image && image.trim().length > 0));

  return (
    <Card
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-xl border border-border/70 bg-card/50 backdrop-blur-sm transition-all duration-300 hover:border-foreground/20 hover:shadow-xl hover:-translate-y-1 h-full",
        featured && "sm:col-span-2",
        className
      )}
    >
      <Link
        href={href || "#"}
        className="block cursor-pointer overflow-hidden"
        target="_blank"
        rel="noopener noreferrer"
      >
        {video && (
          <video
            src={video}
            autoPlay
            loop
            muted
            playsInline
            className="pointer-events-none mx-auto h-48 w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
          />
        )}
        {image && image.trim().length > 0 && (
          <Image
            src={image}
            alt={title}
            width={700}
            height={400}
            className="h-48 w-full overflow-hidden object-cover object-top transition-transform duration-500 group-hover:scale-105"
          />
        )}
        {!hasMedia && <ProjectGraphicFallback title={title} />}
      </Link>

      <CardHeader className="px-4 pt-4 pb-2">
        <div className="space-y-1.5">
          <div className="flex items-center justify-between gap-2">
            <Link
              href={href || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 group/title"
            >
              <CardTitle className="text-base sm:text-lg font-bold tracking-tight group-hover/title:text-primary transition-colors">
                {title}
              </CardTitle>
              <ArrowUpRight className="size-4 opacity-0 -translate-y-0.5 translate-x-0.5 transition-all group-hover/title:opacity-100" />
            </Link>
            <span className="font-mono text-[11px] text-muted-foreground shrink-0 rounded-md bg-muted px-2 py-0.5">
              {dates}
            </span>
          </div>

          {impact && (
            <div className="inline-flex items-center gap-1.5 text-xs font-medium text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-md w-fit">
              <Sparkles className="size-3" />
              <span>{impact}</span>
            </div>
          )}

          <div className="hidden font-sans text-xs underline print:visible">
            {link?.replace("https://", "").replace("www.", "").replace("/", "")}
          </div>

          <Markdown className="prose max-w-full text-pretty font-sans text-xs sm:text-sm text-muted-foreground dark:prose-invert leading-relaxed pt-1">
            {description}
          </Markdown>
        </div>
      </CardHeader>

      <CardContent className="mt-auto flex flex-col px-4 pt-2 pb-3">
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            {tags.map((tag) => (
              <Badge
                className="px-2 py-0.5 text-[11px] font-normal rounded-md border-border/60 bg-muted/60 text-muted-foreground hover:text-foreground transition-colors"
                variant="secondary"
                key={tag}
              >
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </CardContent>

      <CardFooter className="px-4 pb-4 pt-1 border-t border-border/40 mt-1 flex items-center justify-between">
        {links && links.length > 0 && (
          <div className="flex flex-row flex-wrap items-center gap-2">
            {links.map((item, idx) => (
              <Link
                href={item.href}
                key={idx}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-lg border border-border/80 px-2.5 py-1 text-xs font-medium text-muted-foreground hover:text-foreground hover:bg-accent hover:border-foreground/20 transition-all duration-200"
              >
                {item.icon}
                <span>{item.type}</span>
              </Link>
            ))}
          </div>
        )}
      </CardFooter>
    </Card>
  );
}
