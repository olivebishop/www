import React from 'react'
import { Metadata } from 'next'
import Image from 'next/image'
import PrivacyPolicy from "@/components/shared/terms"
import { buildPageMetadata } from "@/lib/seo"

export const metadata: Metadata = buildPageMetadata({
  title: "Privacy Policy - Olive Bishop",
  description:
    "Read our Privacy Policy to understand how Olive Bishop collects, uses, and protects your personal information.",
  path: "/privacy-policy",
  imageAlt: "Privacy Policy - Olive Bishop",
})

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
