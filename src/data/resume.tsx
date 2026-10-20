import { Icons } from "@/components/icons";
import {
  BarChart3,
  Code2,
  Compass,
  Database,
  Home,
  Layers,
  LineChart,
  Mail,
} from "lucide-react";

export const DATA = {
  name: "Prashant Lodhi",
  initials: "PL",
  location: "Gurgaon, Haryana",
  locationLink: "https://www.google.com/maps/place/Gurgaon",
  headline: "Hi, I'm Prashant Lodhi",
  description:
    "Data Analyst with a scientist's curiosity for patterns. I turn raw transactional data into clean insights, interactive dashboards, and business decisions.",
  summary:
    "I studied Biotechnology, then shifted my focus toward **data analytics** - the parts of science I liked most were always **the numbers and the patterns they revealed.** Since then I've been building a practical toolkit: **Python** for data cleaning and analysis, **SQL** for pulling and shaping data, and **Power BI and Excel** for turning it into dashboards people actually use.\n\nI'm early in my career and **learning in public - building real projects,** working through statistics fundamentals properly, and getting comfortable with the tools analysts use day to day, rather than collecting certificates for their own sake.",
  avatarUrl: "/avatar.avif",

  metrics: [
    {
      value: "289K+",
      label: "Records Analyzed",
      subtext: "Clinical trials & booking trends in Python",
    },
    {
      value: "5",
      label: "Domains Modeled",
      subtext: "Finance, Sales, Supply Chain & Healthcare",
    },
    {
      value: "6",
      label: "End-to-End Projects",
      subtext: "Full-stack apps, BI suites & ML notebooks",
    },
    {
      value: "100%",
      label: "Reproducible Code",
      subtext: "Python & SQL repositories",
    },
  ],

  skills: [
    {
      category: "Visualization & BI",
      icon: BarChart3,
      description:
        "Translating complex datasets into executive dashboards and clear decision metrics.",
      items: [
        "Microsoft Power BI",
        "DAX",
        "Power Query",
        "Microsoft Fabric",
        "Microsoft Excel (Advanced)",
        "Executive Dashboards",
        "Data Storytelling",
        "Stakeholder Reporting",
      ],
    },
    {
      category: "Databases & SQL Engineering",
      icon: Database,
      description:
        "Querying relational data, optimizing complex joins, and modeling schemas.",
      items: [
        "SQL (Queries & Joins)",
        "MySQL",
        "RDBMS Modeling",
        "Data Normalization",
        "ETL Pipelines",
      ],
    },
    {
      category: "Python & Analytics Stack",
      icon: Code2,
      description:
        "Data manipulation, automated statistical analysis, and lightweight backend APIs.",
      items: [
        "Python",
        "Pandas",
        "NumPy",
        "Matplotlib",
        "Seaborn",
        "Jupyter Notebook",
        "FastAPI",
        "Streamlit",
      ],
    },
    {
      category: "Statistical & Analytical Rigor",
      icon: LineChart,
      description:
        "Applying hypothesis-driven inquiry and data quality controls from scientific research.",
      items: [
        "Exploratory Data Analysis (EDA)",
        "Descriptive Statistics",
        "Hypothesis Testing",
        "Data Cleaning & Audits",
        "Root Cause Analysis",
        "Churn & Retention Analysis",
        "Market Share Analysis",
      ],
    },
  ],

  navbar: [
    { href: "#hero", icon: Home, label: "Home" },
    { href: "#projects", icon: BarChart3, label: "Projects" },
    { href: "#skills", icon: Layers, label: "Skills" },
    { href: "#journey", icon: Compass, label: "Journey" },
    { href: "#contact", icon: Mail, label: "Contact" },
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
        url: "https://www.linkedin.com/in/itsprashantlodhi",
        icon: Icons.linkedin,
        navbar: true,
      },
      Instagram: {
        name: "Instagram",
        url: "https://www.instagram.com/pra_zent?stkn=MWJyNTkwMXpicXc3Yg==",
        icon: Icons.instagram,
        navbar: true,
      },
      WhatsApp: {
        name: "WhatsApp",
        url: "https://wa.me/918171851402",
        icon: Icons.whatsapp,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:prashantlodhi1920@gmail.com",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  education: [
    {
      school: "Dr. Bhim Rao Ambedkar University, Agra",
      href: "https://dbrau.ac.in",
      degree: "M.Sc. in Biotechnology",
      cgpa: "7.12/10",
      logoUrl: "",
      start: "2022",
      end: "2024",
    },
  ],

  journey: [
    {
      stage: "01",
      title: "MSc Biotechnology",
      subtitle: "Academic Foundation",
      tag: "Scientific Method & Empirical Rigor",
      description:
        "Trained in experimental controls, structured hypothesis testing, quantitative biology, and rigorous methodology - developing a habit of questioning assumptions and validating patterns before concluding.",
    },
    {
      stage: "02",
      title: "Applied Data Analytics",
      subtitle: "Dedicated Self-Directed Upskilling",
      tag: "Python, SQL, Power BI & Statistics",
      description:
        "Mastered the core data analyst stack through real, hands-on projects: querying relational databases in MySQL, conducting EDA with Pandas/NumPy, and building executive dashboards with Power BI, Power Query, and DAX.",
    },
    {
      stage: "03",
      title: "Data Analyst / BI Specialist",
      subtitle: "Current Focus & Target Role",
      tag: "Decision Intelligence & Business Impact",
      description:
        "Ready to step into an analytics team to bridge raw transactional tables and high-level decision makers - turning numbers into actionable growth, cost savings, and operational clarity.",
    },
  ],

  projects: [
    {
      title: "Business Insight 360",
      href: "https://github.com/PrashantDes/business-insight-360",
      dates: "2026",
      active: true,
      featured: true,
      impact: "Enterprise BI Suite · Power BI · 5 Business Domains",
      description:
        "An interactive Power BI dashboard that unifies finance, sales, marketing, supply-chain, and executive reporting. Supports KPI monitoring, customer/product contribution matrix, regional performance analysis, and forecast accuracy tracking.",
      technologies: [
        "Microsoft Power BI",
        "Power Query",
        "DAX",
        "Data Modeling",
        "Data Visualization",
        "Business Intelligence",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/PrashantDes/business-insight-360",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/projects/business-insight-360.png",
      video: "",
    },
    {
      title: "WaveCon 5G Impact Analysis",
      href: "https://github.com/PrashantDes/WaveCon_5G_Impact_Analysis",
      dates: "2026",
      active: true,
      featured: false,
      impact: "Telecom BI Case Study · Power BI + PowerPoint Presentation",
      description:
        "A Power BI business analysis and PowerPoint presentation of WaveCon's 5G launch, comparing revenue, ARPU, active users, unsubscribes, market share, and prepaid-plan performance before and after the rollout. The analysis turns city- and plan-level findings into retention, win-back, and product recommendations.",
      technologies: [
        "Microsoft Power BI",
        "Power Query",
        "DAX",
        "PowerPoint",
        "KPI Analysis",
        "Churn & Retention",
        "Market Share",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/PrashantDes/WaveCon_5G_Impact_Analysis",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/projects/wavecon-5g-impact.png",
      video: "",
    },
    {
      title: "Expense Tracking System",
      href: "https://github.com/PrashantDes/expense-tracking-system",
      dates: "2026",
      active: true,
      featured: false,
      impact: "Full-Stack Finance App · Streamlit + FastAPI + MySQL",
      description:
        "A full-stack personal-finance application for recording, updating, and categorizing expenses, filtering spending by date, and reviewing monthly summaries through an interactive Streamlit interface and high-performance FastAPI REST backend.",
      technologies: [
        "Python",
        "FastAPI",
        "Streamlit",
        "MySQL",
        "REST API",
        "Pytest",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/PrashantDes/expense-tracking-system",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/projects/expense-tracking-system.png",
      video: "",
    },
    {
      title: "Insurance-Performance-Analysis",
      href: "https://github.com/PrashantDes/Insurance-Performance-Analysis",
      dates: "2026",
      active: true,
      featured: false,
      impact: "Insurance BI Dashboard · Policies, Premiums & Settlements",
      description:
        "An interactive Power BI dashboard analyzing insurance performance across policies, premiums, settlements, customer segments, and key business insights.",
      technologies: [
        "Microsoft Power BI",
        "DAX",
        "Power Query",
        "Data Modeling",
        "Insurance Analytics",
        "KPI Analysis",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/PrashantDes/Insurance-Performance-Analysis",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/projects/insurance-performance-analysis.png",
      video: "",
    },
    {
      title: "Clinical Trial Termination Analysis",
      href: "https://github.com/PrashantDes/clinical_trial_termination_analysis",
      dates: "2026",
      active: true,
      featured: false,
      impact: "Healthcare Analytics · 289K+ Trials · Live Power BI Dashboard",
      description:
        "Statistical analysis and interactive Power BI dashboard examining 289,595 finished clinical trials from ClinicalTrials.gov (via AACT). Explores early termination drivers across phases, sponsors, and stop reasons using logistic regression and DAX measures.",
      technologies: [
        "Power BI",
        "Python",
        "DAX",
        "Logistic Regression",
        "Statistical Analysis",
        "Pandas",
        "Data Modeling",
      ],
      links: [
        {
          type: "Live Dashboard",
          href: "https://app.powerbi.com/view?r=eyJrIjoiMzUyZTljOTYtYTA5ZS00M2Q3LWJmY2ItMjUyMGUyNzEzZTFhIiwidCI6ImM2ZTU0OWIzLTVmNDUtNDAzMi1hYWU5LWQ0MjQ0ZGM1YjJjNCJ9",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/PrashantDes/clinical_trial_termination_analysis",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/projects/clinical-trial-termination-analysis.png",
      video: "",
    },
    {
      title: "Hotel Hospitality Analysis",
      href: "https://github.com/PrashantDes/hotel-hospitality-analysis",
      dates: "2026",
      active: true,
      featured: false,
      impact: "Revenue & Occupancy EDA · Python & Pandas · 134.5K Bookings",
      description:
        "Exploratory data analysis of 134,500+ luxury hotel bookings across four major cities using Python and Pandas. Uncovered room-class occupancy patterns, weekend vs. weekday surges, revenue leakage across booking platforms, and guest rating disparities.",
      technologies: [
        "Python",
        "Pandas",
        "Matplotlib",
        "EDA",
        "Data Cleaning",
        "Jupyter Notebook",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/PrashantDes/hotel-hospitality-analysis",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/projects/hotel-hospitality-analysis.png",
      video: "",
    },
  ],
};
