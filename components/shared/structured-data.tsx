export function StructuredData() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://olivebishop.com';
  
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Olive Bishop",
    "jobTitle": "Software Engineer",
    "url": baseUrl,
    "sameAs": [
      "https://github.com/olivebishop",
      "https://www.instagram.com/rhymer_ke/",
      "https://x.com/olivebishop_dev",
      "https://www.linkedin.com/in/olivebishop/"
    ],
    "knowsAbout": [
      "Next.js",
      "React",
      "TypeScript",
      "JavaScript",
      "Web Development",
      "Software Engineering",
      "Digital Events",
      "Mobile Photography"
    ],
    "description": "Software Engineer, Digital Events Curator, and Mobile Photographer specializing in Next.js, React, TypeScript, and modern web development."
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
