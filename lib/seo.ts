/** Base site copy for SEO — single place to keep titles/descriptions aligned. */
export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://olivebishop.com";

export const seo = {
  brand: "Olive Bishop",

  defaultTitle:
    "Olive Bishop — Freelance Next.js & React Developer | Fast Web Apps & SaaS",
  defaultDescription:
    "Olive Bishop is a freelance software engineer who builds fast, accessible web applications with Next.js, React, and TypeScript. Serving startups and businesses worldwide — from MVPs to production-grade SaaS. View projects and book a call.",

  homeTitle: "Freelance Next.js & React Developer for Hire",
  homeDescription:
    "Hire Olive Bishop — a freelance software engineer specializing in Next.js, React, and TypeScript. High-performance web apps, startup MVPs, and SaaS frontends shipped on time. Explore the portfolio and start your project today.",

  aboutTitle: "About Olive Bishop — Software Engineer & Web Developer",
  aboutDescription:
    "Olive Bishop is a software engineer based in Kenya working with clients globally. Stack: Next.js, React, TypeScript, Tailwind CSS, PostgreSQL, Cloudflare, and AWS. Product-minded delivery from concept to launch.",

  workTitle: "Portfolio — Web Apps, SaaS & Client Projects",
  workDescription:
    "Real projects shipped for real businesses: Event Parlour (events SaaS), Brinex Tech, Navejo (bookmark workspace), and more. Next.js, React, TypeScript — see the code, the results, and the business impact.",

  contactTitle: "Hire Olive Bishop — Book a Project or Consultation",
  contactDescription:
    "Ready to build? Tell Olive about your product, timeline, and budget. Fast responses for freelance web development, SaaS builds, MVP sprints, and ongoing collaborations.",

  workflowTitle: "How I Work — Discovery, Design, Build & Launch",
  workflowDescription:
    "Olive Bishop's project workflow: from discovery and UX research to design, development, testing, and deployment. A clear, repeatable process for client web projects.",

  bookmarksTitle: "Developer Bookmarks — Tools, UI Inspiration & Resources",
  bookmarksDescription:
    "Curated developer tools, UI inspiration, and frontend resources Olive Bishop uses daily — Mobbin, design galleries, component libraries, performance tools, and more.",

  feedbackTitle: "Client Reviews — Verified Google Feedback",
  feedbackDescription:
    "Read verified Google reviews from Olive Bishop's clients. Real ratings, honest feedback, and social proof from businesses who hired a Next.js developer.",
} as const;
