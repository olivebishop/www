import React from 'react'
import { Metadata } from 'next'
import Image from 'next/image'
import PrivacyPolicy from "@/components/shared/terms"

export const metadata: Metadata = {
  title: "Privacy Policy - Olive Bishop",
  description: "Read our Privacy Policy to understand how Olive Bishop collects, uses, and protects your personal information.",
  openGraph: {
    title: "Privacy Policy - Olive Bishop",
    description: "Read our Privacy Policy to understand how Olive Bishop collects, uses, and protects your personal information.",
    url: "https://olivebishop.com/privacy-policy",
    siteName: "Olive Bishop",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Privacy Policy - Olive Bishop",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy - Olive Bishop",
    description: "Read our Privacy Policy to understand how Olive Bishop collects, uses, and protects your personal information.",
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
          alt="Privacy Policy"
          fill
          priority
          className="object-cover"
          quality={90}
        />
      </div>
      
      {/* Privacy Policy Content - Right Side */}
      <div className="w-full lg:w-1/2 bg-white">
        <PrivacyPolicy />
      </div>
    </div>
  )
}

export default page
