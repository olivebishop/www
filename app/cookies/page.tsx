import React from 'react'
import { Metadata } from 'next'
import Image from 'next/image'
import CookiesPolicy from "@/components/shared/cookies"
import { buildPageMetadata } from "@/lib/seo"

export const metadata: Metadata = buildPageMetadata({
  title: "Cookie Policy - Olive Bishop",
  description:
    "Learn about how Olive Bishop uses cookies and similar technologies on our website.",
  path: "/cookies",
  imageAlt: "Cookie Policy - Olive Bishop",
})

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
