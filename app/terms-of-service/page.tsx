import React from 'react'
import { Metadata } from 'next'
import Image from 'next/image'
import TermsOfService from "@/components/shared/terms-of-service"
import { buildPageMetadata } from "@/lib/seo"

export const metadata: Metadata = buildPageMetadata({
  title: "Terms of Service - Olive Bishop",
  description:
    "Read our Terms of Service to understand the rules and guidelines for using Olive Bishop's website and services.",
  path: "/terms-of-service",
  imageAlt: "Terms of Service - Olive Bishop",
})

function page() {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      {/* Image Section - Left Side - Hidden on small devices */}
      <div className="hidden lg:block lg:w-1/2 lg:sticky lg:top-0 lg:h-screen relative">
        <Image
          src="/images/privacy.png"
          alt="Terms of Service"
          fill
          priority
          className="object-cover"
          quality={90}
        />
      </div>
      
      {/* Terms of Service Content - Right Side */}
      <div className="w-full lg:w-1/2 bg-white">
        <TermsOfService />
      </div>
    </div>
  )
}

export default page
