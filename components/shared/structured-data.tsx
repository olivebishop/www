import { geoEntity as entity, geoLocation as location, geoServiceAreas as areas } from "@/lib/geo";
import { getOgImageUrl, seo, siteUrl } from "@/lib/seo";

export function StructuredData() {
  const personId = `${siteUrl}/#person`;
  const websiteId = `${siteUrl}/#website`;
  const serviceId = `${siteUrl}/#professional-service`;
  const profilePageId = `${siteUrl}/about#profilepage`;
  const homePageId = `${siteUrl}/#webpage`;

  const postalAddress = {
    "@type": "PostalAddress" as const,
    addressCountry: location.countryCode,
    addressLocality: location.locality,
    addressRegion: location.region,
  };

  const areaServed = areas.map((name) => ({
    "@type":
      name === "Europe" || name === "Africa" ? ("AdministrativeArea" as const) : ("Country" as const),
    name,
  }));

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
        about: { "@id": personId },
        potentialAction: {
          "@type": "SearchAction",
          target: `${siteUrl}/work?q={search_term_string}`,
          "query-input": "required name=search_term_string",
        },
      },

      {
        "@type": "WebPage",
        "@id": homePageId,
        url: siteUrl,
        name: seo.defaultTitle,
        description: seo.defaultDescription,
        isPartOf: { "@id": websiteId },
        about: { "@id": personId },
        inLanguage: "en-US",
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: getOgImageUrl(),
        },
      },

      {
        "@type": "ProfilePage",
        "@id": profilePageId,
        url: `${siteUrl}/about`,
        name: seo.aboutTitle,
        description: seo.aboutDescription,
        mainEntity: { "@id": personId },
        isPartOf: { "@id": websiteId },
        inLanguage: "en-US",
      },

      {
        "@type": "Person",
        "@id": personId,
        name: seo.brand,
        url: siteUrl,
        image: getOgImageUrl(),
        email: `mailto:${entity.contactEmail}`,
        jobTitle: "Freelance Software Engineer & Next.js Developer",
        worksFor: { "@type": "Organization", name: "Self-employed (Freelance)" },
        alumniOf: { "@type": "Organization", name: "Crow Studios" },
        nationality: { "@type": "Country", name: location.country },
        homeLocation: {
          "@type": "Place",
          name: `${location.locality}, ${location.country}`,
          geo: {
            "@type": "GeoCoordinates",
            latitude: location.latitude,
            longitude: location.longitude,
          },
          address: postalAddress,
        },
        workLocation: {
          "@type": "Place",
          name: "Remote — worldwide",
        },
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
        description: entity.summary,
      },

      {
        "@type": "ProfessionalService",
        "@id": serviceId,
        name: `${seo.brand} — Freelance Web Development`,
        url: `${siteUrl}/contact`,
        provider: { "@id": personId },
        areaServed,
        availableLanguage: ["English"],
        address: postalAddress,
        geo: {
          "@type": "GeoCoordinates",
          latitude: location.latitude,
          longitude: location.longitude,
        },
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
        "@id": `${siteUrl}/#faq`,
        mainEntity: [
          {
            "@type": "Question",
            name: "Who is Olive Bishop?",
            acceptedAnswer: {
              "@type": "Answer",
              text: entity.summary,
            },
          },
          {
            "@type": "Question",
            name: "Where is Olive Bishop based?",
            acceptedAnswer: {
              "@type": "Answer",
              text: `Olive Bishop is based in ${entity.baseLocation} and works remotely with clients worldwide, with strong overlap for US and European time zones.`,
            },
          },
          {
            "@type": "Question",
            name: "What technologies does Olive Bishop use?",
            acceptedAnswer: {
              "@type": "Answer",
              text: `Olive builds with ${entity.primaryStack}. Motion and accessibility are priorities on every project.`,
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
              text: `Yes. Olive is based in ${location.country} and works remotely with startups and businesses across ${areas.slice(0, 5).join(", ")}, and more. Communication is async-friendly with overlap hours available.`,
            },
          },
          {
            "@type": "Question",
            name: "What kind of projects does Olive Bishop take on?",
            acceptedAnswer: {
              "@type": "Answer",
              text: `Olive specializes in web applications, SaaS platforms, business websites, and startup MVPs. Notable work includes ${entity.notableWork}.`,
            },
          },
          {
            "@type": "Question",
            name: "How do I hire Olive Bishop for a web project?",
            acceptedAnswer: {
              "@type": "Answer",
              text: `Email ${entity.contactEmail} or use the contact form at ${siteUrl}/contact to share your product, timeline, and budget. Olive typically takes 1–2 new client projects per month.`,
            },
          },
        ],
      },

      {
        "@type": "ItemList",
        name: "Selected Projects by Olive Bishop",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Palpluss", url: "https://www.palpluss.com/" },
          { "@type": "ListItem", position: 2, name: "Event Parlour", url: "https://eventparlour.com/" },
          { "@type": "ListItem", position: 3, name: "Brinex Tech", url: "https://brinex-tech.com/" },
          { "@type": "ListItem", position: 4, name: "Navejo", url: "https://navejo.crowstudios.tech/" },
          { "@type": "ListItem", position: 5, name: "Sol of African", url: "https://www.thesolofafrican.com/" },
          { "@type": "ListItem", position: 6, name: "Crow Studios", url: "https://www.crowstudios.tech/" },
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
