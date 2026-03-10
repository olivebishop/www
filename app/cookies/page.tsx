import React from 'react'
import { Metadata } from 'next'
import Image from 'next/image'
import CookiesPolicy from "@/components/shared/cookies"

export const metadata: Metadata = {
  title: "Cookie Policy - Olive Bishop",
  description: "Learn about how Olive Bishop uses cookies and similar technologies on our website.",
  openGraph: {
    title: "Cookie Policy - Olive Bishop",
    description: "Learn about how Olive Bishop uses cookies and similar technologies on our website.",
    url: "https://olivebishop.com/cookies",
    siteName: "Olive Bishop",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Cookie Policy - Olive Bishop",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cookie Policy - Olive Bishop",
    description: "Learn about how Olive Bishop uses cookies and similar technologies on our website.",
    images: ["/opengraph-image.png"],
    creator: "@olivebishop_dev",
  },
}

function page() {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      {/* Image Section - Left Side - Hidden on small devices */}
      <div className="hidden lg:block lg:w-1/2 lg:sticky lg:top-0 lg:h-screen relative">
        <Image
          src="/images/privacy.png"
          alt="Cookie Policy"
          fill
          priority
          className="object-cover"
          quality={90}
        />
      </div>
      
      {/* Cookie Policy Content - Right Side */}
      <div className="w-full lg:w-1/2 bg-white">
        <CookiesPolicy />
      </div>
    </div>
  )
}

export default page
