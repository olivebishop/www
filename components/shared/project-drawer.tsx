"use client"

import { motion } from "motion/react"
import { useState } from "react"
import { toast } from "sonner"

export default function ProjectDrawer({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    project: "",
    services: [],
    projectType: "",
    budget: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const projectTypes = ["Business Website", "Personal Portfolio", "Business Mobile Development", "Web App Development"]

  const budgetRanges = [
    "$500 - $1,000",
    "$1,000 - $1,500",
    "$1,500 - $2,500",
    "$2,500 - $5,000",
    "$5,000+",
  ]

  const handleSubmit = async () => {
    // Validate required fields
    if (!formData.name || !formData.email || !formData.project) {
      toast.error("Please fill in all required fields", {
        duration: 4000,
        position: "top-right",
      })
      return
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      toast.error("Please enter a valid email address", {
        duration: 4000,
        position: "top-right",
      })
      return
    }

    setIsSubmitting(true)

    try {
      const response = await fetch("/api/enquire", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        toast.success("Thank you! Your project request has been submitted.", {
          duration: 4000,
          position: "top-right",
        })

        // Reset form
        setFormData({
          name: "",
          email: "",
          project: "",
          services: [],
          projectType: "",
          budget: "",
        })

        onClose()
      } else {
        const errorData = await response.json()
        toast.error(errorData.error || "Failed to send message. Please try again.", {
          duration: 4000,
          position: "top-right",
        })
      }
    } catch (error) {
      console.error("Error submitting form:", error)
      toast.error("Network error. Please check your connection and try again.", {
        duration: 4000,
        position: "top-right",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  if (!isOpen) return null

  return (
    <>
      {/* Backdrop with blur */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[60]"
        onClick={onClose}
      />

      {/* Drawer */}
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ type: "spring", damping: 25, stiffness: 200 }}
        className="fixed right-3 sm:right-4 top-3 sm:top-4 h-[calc(100%-1.5rem)] sm:h-[calc(100%-2rem)] w-[calc(100%-1.5rem)] sm:w-[calc(100%-2rem)] md:w-[680px] bg-white z-[70] overflow-y-auto font-body rounded-2xl border border-black/10 shadow-2xl"
      >
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-gray-100 px-7 py-5 sm:px-10 sm:py-6 md:px-12 md:py-7 flex items-center justify-between gap-4">
          <div>
            <h2 className="font-display text-2xl font-semibold text-gray-900">Request a Quote</h2>
            <p className="text-sm text-gray-500 mt-1">Build a purposeful web presence that grows your business.</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full text-black hover:bg-gray-100 transition-colors"
            disabled={isSubmitting}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Form Content */}
        <div className="px-7 py-6 sm:px-10 sm:py-7 md:px-12 md:py-8 space-y-5 sm:space-y-6 md:space-y-7">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Name *</label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-black transition-all duration-200 text-gray-900 placeholder:text-gray-400 bg-white"
              placeholder="Your full name"
              disabled={isSubmitting}
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-black transition-all duration-200 text-gray-900 placeholder:text-gray-400 bg-white"
              placeholder="your@email.com"
              disabled={isSubmitting}
            />
          </div>

          {/* Project Description */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Tell me about your project *</label>
            <textarea
              rows={4}
              value={formData.project}
              onChange={(e) => setFormData((prev) => ({ ...prev, project: e.target.value }))}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-black transition-all duration-200 resize-none text-gray-900 placeholder:text-gray-400 bg-white"
              placeholder="Describe your project goals, requirements, and vision..."
              disabled={isSubmitting}
            />
          </div>

          {/* How can I help you? */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">How can I help you?</label>
            <div className="space-y-2">
              {projectTypes.map((type) => (
                <label key={type} className="flex items-center cursor-pointer group">
                  <input
                    type="radio"
                    name="projectType"
                    value={type}
                    checked={formData.projectType === type}
                    onChange={(e) => setFormData((prev) => ({ ...prev, projectType: e.target.value }))}
                    className="mr-3 w-4 h-4 text-black border-gray-300 focus:ring-black focus:ring-2 checked:bg-white checked:border-white hover:border-black transition-colors"
                    style={{
                      accentColor: "#000000",
                    }}
                    disabled={isSubmitting}
                  />
                  <span className="text-gray-700 group-hover:text-gray-900 transition-colors">{type}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Budget */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Your Budget</label>
            <select
              value={formData.budget}
              onChange={(e) => setFormData((prev) => ({ ...prev, budget: e.target.value }))}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-black transition-all duration-200 bg-white text-gray-900 hover:border-black [&>option]:bg-white [&>option]:text-black [&>option:hover]:bg-black [&>option:hover]:text-white [&>option:checked]:bg-black [&>option:checked]:text-white"
              style={{
                appearance: "none",
                backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' strokeLinecap='round' strokeLinejoin='round' strokeWidth='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`,
                backgroundPosition: "right 0.5rem center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "1.5em 1.5em",
                paddingRight: "2.5rem",
              }}
              disabled={isSubmitting}
            >
              <option value="" className="bg-white text-black hover:bg-black hover:text-white">
                Select your budget range
              </option>
              {budgetRanges.map((range) => (
                <option key={range} value={range} className="bg-white text-black hover:bg-black hover:text-white">
                  {range}
                </option>
              ))}
            </select>
          </div>

          {/* Submit Button */}
          <button
            onClick={handleSubmit}
            disabled={isSubmitting}
            className="w-full bg-black text-white py-4 rounded-lg font-medium hover:bg-gray-900 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
          >
            {isSubmitting ? (
              <>
                <svg
                  className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Sending...
              </>
            ) : (
              "Send Message"
            )}
          </button>

          {/* Privacy Policy */}
          <p className="text-sm text-gray-500 text-center">
            By clicking &quot;Send message&quot;, you agree to our{" "}
            <a href="/privacy" className="underline hover:text-gray-700">
              Privacy Policy
            </a>
            .
          </p>
        </div>
      </motion.div>
    </>
  )
}
