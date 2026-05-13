import { seo, siteUrl } from "@/lib/seo";

export function StructuredData() {
  const personId = `${siteUrl}/#person`;
  const websiteId = `${siteUrl}/#website`;
  const serviceId = `${siteUrl}/#professional-service`;

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": websiteId,
        url: siteUrl,
        name: seo.brand,
        description: seo.defaultDescription,
        inLanguage: "en-US",
        publisher: { "@id": personId },
        potentialAction: {
          "@type": "SearchAction",
          target: `${siteUrl}/work?q={search_term_string}`,
          "query-input": "required name=search_term_string",
        },
      },

      {
        "@type": "Person",
        "@id": personId,
        name: seo.brand,
        url: siteUrl,
        image: `${siteUrl}/opengraph-image.png`,
        jobTitle: "Freelance Software Engineer & Next.js Developer",
        worksFor: { "@type": "Organization", name: "Self-employed (Freelance)" },
        alumniOf: { "@type": "Organization", name: "Crow Studios" },
        nationality: { "@type": "Country", name: "Kenya" },
        sameAs: [
          "https://github.com/olivebishop",
          "https://www.instagram.com/rhymer_ke/",
          "https://x.com/olivebishop_dev",
          "https://www.linkedin.com/in/olivebishop/",
        ],
        knowsAbout: [
          "Next.js",
          "React",
          "TypeScript",
          "JavaScript",
          "Tailwind CSS",
          "PostgreSQL",
          "Supabase",
          "Cloudflare Workers",
          "AWS",
          "Docker",
          "UI/UX engineering",
          "SaaS development",
          "Web performance optimization",
          "Accessibility (WCAG)",
          "REST APIs",
          "Headless CMS",
        ],
        description: seo.aboutDescription,
      },

      {
        "@type": "ProfessionalService",
        "@id": serviceId,
        name: `${seo.brand} — Freelance Web Development`,
        url: `${siteUrl}/contact`,
        provider: { "@id": personId },
        areaServed: { "@type": "GeoShape", name: "Worldwide" },
        serviceType: [
          "Custom web application development",
          "Next.js & React development",
          "SaaS frontend engineering",
          "Startup MVP development",
          "UI/UX design & implementation",
          "Web performance consulting",
          "API integration & headless CMS",
          "Cloudflare & AWS deployment",
        ],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Web Development Services",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Full Web App Build (MVP to Production)",
                description:
                  "End-to-end web application development: discovery, UX, Next.js build, testing, and cloud deployment.",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Frontend & UI Engineering",
                description:
                  "Pixel-perfect, accessible interfaces with React, TypeScript, Tailwind CSS, and motion design.",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Performance & Infrastructure Consulting",
                description:
                  "Core Web Vitals audits, Cloudflare/AWS optimization, and scalability consulting for existing apps.",
              },
            },
          ],
        },
        description: seo.contactDescription,
      },

      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "What technologies does Olive Bishop use?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Olive builds with Next.js, React, TypeScript, Tailwind CSS, PostgreSQL, Supabase, and deploys to Cloudflare and AWS. Motion and accessibility are priorities on every project.",
            },
          },
          {
            "@type": "Question",
            name: "How much does it cost to hire Olive Bishop?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Project pricing depends on scope and timeline. Olive offers fixed-price sprints for MVPs and monthly retainers for ongoing product work. Get a quote at olivebishop.com/contact.",
            },
          },
          {
            "@type": "Question",
            name: "Does Olive work with international clients?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. Olive is based in Kenya and works remotely with startups and businesses across the US, Europe, Middle East, and Africa. Communication is async-friendly with overlap hours available.",
            },
          },
          {
            "@type": "Question",
            name: "What kind of projects does Olive Bishop take on?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Olive specializes in web applications, SaaS platforms, business websites, and startup MVPs. Past work includes Event Parlour (events SaaS), Brinex Tech, Navejo (bookmark workspace), and personal portfolio sites.",
            },
          },
        ],
      },

      {
        "@type": "ItemList",
        name: "Selected Projects by Olive Bishop",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Event Parlour", url: "https://eventparlour.com/" },
          { "@type": "ListItem", position: 2, name: "Brinex Tech", url: "https://brinex-tech.com/" },
          { "@type": "ListItem", position: 3, name: "Navejo", url: "https://navejo.crowstudios.tech/" },
          { "@type": "ListItem", position: 4, name: "Sol of African", url: "https://www.thesolofafrican.com/" },
          { "@type": "ListItem", position: 5, name: "Crow Studios", url: "https://www.crowstudios.tech/" },
        ],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
