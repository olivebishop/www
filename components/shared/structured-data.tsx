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
      },
      {
        "@type": "Person",
        "@id": personId,
        name: seo.brand,
        url: siteUrl,
        image: `${siteUrl}/opengraph-image.png`,
        jobTitle: "Software Engineer & Freelance Web Developer",
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
          "Web development",
          "Frontend engineering",
          "Client projects",
          "Digital events",
          "Mobile photography",
        ],
        description: seo.defaultDescription,
      },
      {
        "@type": "ProfessionalService",
        "@id": serviceId,
        name: `${seo.brand} — Web development & product engineering`,
        url: `${siteUrl}/contact`,
        provider: { "@id": personId },
        areaServed: "Worldwide",
        serviceType: [
          "Web application development",
          "Next.js development",
          "React development",
          "TypeScript",
          "UI engineering",
        ],
        description: seo.contactDescription,
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
