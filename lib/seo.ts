/** Base site copy for SEO — single place to keep titles/descriptions aligned. */
export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://olivebishop.com";

export const seo = {
  brand: "Olive Bishop",
  /** Default when a page does not set `title` (full string; root layout has no template segment) */
  defaultTitle: "Next.js & React Developer for Hire — Web Apps & Client Work",
  defaultDescription:
    "Hire a software engineer for fast, accessible web apps. Next.js, React, and TypeScript — from MVPs to production. View work and book a project.",
  /** Page `title` segments — combined with template `%s | Olive Bishop` in layout */
  homeTitle: "Hire a Next.js & React Developer",
  homeDescription:
    "Freelance software engineer building fast web products for clients. Next.js, React, TypeScript, and modern UX. Explore the portfolio and start your project.",
  aboutTitle: "About — Software Engineer & Web Developer",
  aboutDescription:
    "Background, stack, and how Olive works with clients: Next.js, React, TypeScript, cloud, and product-minded delivery.",
  workTitle: "Portfolio & Client Work",
  workDescription:
    "Selected projects: web apps, platforms, and products — Event Parlour, client work, and more. Real shipping experience you can hire for.",
  contactTitle: "Contact — Book a Project",
  contactDescription:
    "Tell Olive about your product, timeline, and budget. Quick responses for new projects, collaborations, and freelance engagements.",
  workflowTitle: "Design & Build Process",
  workflowDescription:
    "How projects run: discovery, UX, build, and launch — a clear, repeatable workflow for client work.",
  bookmarksTitle: "Bookmarks — Tools & Design Inspiration",
  bookmarksDescription:
    "Curated tools, UI inspiration, and dev resources Olive uses — ecommerce UI, galleries, Mobbin, and more.",
  feedbackTitle: "Share feedback — Client testimonial",
  feedbackDescription:
    "Add your testimonial in the same spirit as the homepage quotes: your role, company, star rating, and how the work improved your vision, brand, or digital presence.",
} as const;
