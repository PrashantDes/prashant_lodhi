import { Icons } from "@/components/icons";
import { HomeIcon } from "lucide-react";

export const DATA = {
  name: "Prashant Lodhi",
  initials: "PL",
  url: "https://iamsurajchahar.vercel.app/",
  location: "Gurgaon, Haryana",
  locationLink: "https://www.google.com/maps/place/Gurgaon",
  headline: "Hi, I'm Prashant Lodhi",
  description:
    "Data Analyst with a scientist's curiosity for patterns. I turn raw data into clear insights, dashboards, and decisions.",
  summary:
    "I studied Biotechnology, then shifted my focus toward data analytics — the parts of science I liked most were always the numbers and the patterns they revealed. Since then I've been building a practical toolkit: Python for data cleaning and analysis, SQL for pulling and shaping data, and Power BI and Excel for turning it into dashboards people actually use.\n\nI'm early in my career and learning in public — building real projects, working through statistics fundamentals properly, and getting comfortable with the tools analysts use day to day, rather than collecting certificates for their own sake.",
  avatarUrl: "/avatar.avif",
  skills: {
    "Data Analysis": [
      "Database Queries",
      "Data Cleaning",
      "Data Storytelling",
      "Problem Solving",
      "Statistics",
    ],
    "Databases & ETL": ["RDBMS", "MySQL", "Extract, Transform, Load (ETL)"],
    "Python & Libraries": [
      "Python (Programming Language)",
      "Pandas (Software)",
      "NumPy",
      "Matplotlib",
      "Seaborn",
      "Jupyter",
    ],
    "Visualization & Reporting": [
      "Dashboard Building",
      "Data Visualization",
      "Microsoft Power BI",
      "Microsoft Excel",
    ],
  },
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
  ],
  contact: {
    email: "prashantlodhi1920@gmail.com",
    tel: "+91 9068891028",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/PrashantDes",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/prashant-lodhi-527412417/",
        icon: Icons.linkedin,
        navbar: true,
      },
      Instagram: {
        name: "Instagram",
        url: "https://www.instagram.com/pra_zent?stkn=MWJyNTkwMXpicXc3Yg==",
        icon: Icons.instagram,
        navbar: true,
      },
      X: {
        name: "X",
        url: "",
        icon: Icons.x,
        navbar: false,
      },
      WhatsApp: {
        name: "WhatsApp",
        url: "https://wa.me/918171851402",
        icon: Icons.whatsapp,
        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "",
        icon: Icons.youtube,
        navbar: false,
      },
      email: {
        name: "Send Email",
        url: "https://mail.google.com/mail/u/0/#inbox",
        icon: Icons.email,
        navbar: false,
      },
    },
  },
  education: [
    {
      school: "Dr. Bhim Rao Ambedkar University, Agra",
      href: "https://dbrau.ac.in",
      degree: "B.Tech in Computer Science and Engineering (Specialization in Gaming Technology)",
      cgpa: "7.12/10",
      logoUrl: "",
      start: "2022",
      end: "2024",
    },
  ],
  projects: [
    {
      title: "Expense Tracking System",
      href: "https://github.com/PrashantDes/expense-tracking-system",
      dates: "2026",
      active: true,
      legacyDescription:
        "A dependency health monitoring dashboard that scores 1000+ packages from npm, PyPI, and crates.io on a 0–100 scale across security, maintenance, end-of-life, community, and licensing using OSV and GitHub Advisory data. An Express + MongoDB backend with Redis/BullMQ queues processes concurrent scans, cutting repeat analysis time by 60% via cached results and webhook-triggered re-scans, while React dashboards add trend analysis, dependency-tree visualization, PDF/CSV export, and weekly digest emails.",
      description:
        "A full-stack personal-finance application for recording, updating, and categorizing expenses, filtering spending by date, and reviewing monthly summaries through a Streamlit interface and FastAPI REST API.",
      technologies: ["Python", "FastAPI", "Streamlit", "MySQL", "REST API", "Pytest"],
      legacyTechnologies: [
        "React",
        "TypeScript",
        "Vite",
        "Tailwind CSS",
        "Node.js",
        "Express",
        "MongoDB",
        "Redis",
        "BullMQ",
        "TanStack Query",
        "Recharts",
        "Socket.io",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/PrashantDes/expense-tracking-system",
          icon: <Icons.github className="size-3" />,
        },
      ],
      legacyLinks: [
        {
          type: "Website",
          href: "https://stack-decay.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/PrashantDes/stack-delay",
          icon: <Icons.github className="size-3" />,
        },
      ],
      legacyImage: "/stack-delay-logo.png",
      image: "",
      video: "",
    },
    {
      title: "Business Insight 360",
      href: "https://github.com/PrashantDes/business-insight-360",
      dates: "2026",
      active: true,
      legacyDescription:
        "Know everything about an npm package before you install it: health score, security, bundle size, dependency tree, and side-by-side comparison. Published on npm with 300+ weekly downloads.",
      description:
        "An interactive Power BI dashboard that unifies finance, sales, marketing, supply-chain, and executive reporting. It supports KPI monitoring, product and customer analysis, regional performance analysis, and forecast accuracy tracking.",
      technologies: ["Microsoft Power BI", "Power Query", "DAX", "Data Modeling", "Data Visualization", "Business Intelligence"],
      legacyTechnologies: [
        "TypeScript",
        "Node.js",
        "Commander",
        "Chalk",
        "Ora",
        "cli-table3",
        "semver",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/PrashantDes/business-insight-360",
          icon: <Icons.github className="size-3" />,
        },
      ],
      legacyLinks: [
        {
          type: "npm",
          href: "https://www.npmjs.com/package/npmlens",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/PrashantDes/npmlens",
          icon: <Icons.github className="size-3" />,
        },
      ],
      legacyImage: "/npmlens-logo.png",
      image: "",
      video: "",
    },
    {
      title: "AtliQ Hotels Data Analysis",
      href: "https://github.com/PrashantDes/hotel-hospitality-analysis",
      dates: "2026",
      active: true,
      legacyDescription:
        "An AI-powered inventory platform for kirana stores that forecasts demand from historical sales using Google Gemini AI and recommends reorder quantities and restock deadlines. Built on a secure MongoDB + Express backend with JWT authentication, Razorpay payments, CSV bulk import, and Node-cron low-stock alerts, supporting multi-store management from a single dashboard. Piloted across 10+ kirana stores in real-world testing with full Hindi support to improve accessibility and adoption.",
      description:
        "Exploratory analysis of approximately 134,500 hotel bookings. The notebook cleans and transforms booking data, then examines occupancy, revenue, guest satisfaction, room classes, cities, and booking channels to surface business recommendations.",
      technologies: ["Python", "Pandas", "Matplotlib", "Jupyter Notebook", "Data Cleaning", "Exploratory Data Analysis"],
      legacyTechnologies: [
        "Next.js",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "TanStack Query",
        "Node.js",
        "Express",
        "MongoDB",
        "Gemini AI",
        "Razorpay",
        "Node-cron",
        "Turborepo",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/PrashantDes/hotel-hospitality-analysis",
          icon: <Icons.github className="size-3" />,
        },
      ],
      legacyLinks: [
        {
          type: "Website",
          href: "https://dukaan-saathi-client.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/PrashantDes/dukaan_saathi",
          icon: <Icons.github className="size-3" />,
        },
      ],
      legacyImage: "/dukaan-saathi.png",
      image: "",
      video: "",
    },
    {
      title: "Json Tree",
      href: "https://jsontreeviewer.vercel.app/",
      dates: "May 2025 - July 2025",
      active: true,
      description:
        "Visualize JSON data in graph and tree forms. Simplify, explore, and customize effortlessly. Lightning-fast rendering, browser-friendly, and developer-ready.",
      technologies: [
        "Next.js",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Zustand",
        "Monaco Editor",
        "Reaflow",
      ],
      links: [
        {
          type: "Website",
          href: "https://jsontreeviewer.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/PrashantDes/Json_Tree",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/json-tree-logo.png",
      video: "",
    },
    {
      title: "Kanban",
      href: "https://kanban-sooty-mu.vercel.app/",
      dates: "March 2025",
      active: true,
      description:
        "A modern task management website designed to streamline your workflow. It provides an intuitive and visually appealing way to organize and track tasks efficiently, helping you stay productive and focused.",
      technologies: [
        "React",
        "TypeScript",
        "Vite",
        "Tailwind CSS",
        "react-beautiful-dnd",
        "Headless UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://kanban-sooty-mu.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/PrashantDes/kanban",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/kanban-logo.png",
      video: "",
    },
    {
      title: "Time Series Data Visualizer",
      href: "https://drive.google.com/file/d/1KwMKR4Y3sOWZCbTjFZt9o4W-q62Ne3Nh/view",
      dates: "December 2024 - February 2025",
      active: true,
      description:
        "A desktop application built using Next.js and Tauri that allows users to visualize time series data from CSV files.",
      technologies: [
        "Next.js",
        "React",
        "TypeScript",
        "Tauri",
        "Chart.js",
        "Tailwind CSS",
        "PapaParse",
      ],
      links: [
        {
          type: "Demo",
          href: "https://drive.google.com/file/d/1KwMKR4Y3sOWZCbTjFZt9o4W-q62Ne3Nh/view",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/PrashantDes/Time-series-data-visualizer",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/time-series-logo.jpg",
      video: "",
    },
  ],
} as const;
