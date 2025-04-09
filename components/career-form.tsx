"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { motion } from "framer-motion"
import { Send, CheckCircle } from "lucide-react"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { addCarrer } from "@/lib/actions"

// Google Sheets Web App URL - kept as a constant to protect it
// const GOOGLE_SHEETS_CAREER_FORM_URL =
//   "https://script.google.com/macros/s/AKfycbw1fryFvJ6p1n_MRb8hc7pkNRow0oGulSpFetpQzPxa8TydzIPIdu781qCvPn9T-3do/exec"

export default function CareerForm({ role = "" }) {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    linkedin: "",
    portfolio: "",
    role: role,
    resumeLink: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)

    try {


      const formData = new FormData(e.target as HTMLFormElement)
      const response = await addCarrer(formData)

      if (!response.successMessage) {
        throw new Error("Failed to submit form")
      }


      setIsSubmitting(false)
      setIsSubmitted(true)

      // Reset form after showing success message
      setTimeout(() => {
        setIsSubmitted(false)
        setFormState({
          name: "",
          email: "",
          phone: "",
          location: "",
          linkedin: "",
          portfolio: "",
          role: "",
          resumeLink: "",
          message: "",
        })
      }, 5000)
    } catch (error) {
      console.error("Error submitting form:", error)

      setIsSubmitting(false)
      setError("Failed to submit your application. Please try again later.")
      setTimeout(() => {
        setError(null)
      }
      , 15000)
      // Reset form state if needed
      // setFormState({
      //   name: "",
      //   email: "",
      //   phone: "",

    }
  }

  const roles = [
    "Senior React Developer",
    "AI Engineer",
    "DevOps Engineer",
    "UI/UX Designer",
    "Project Manager",
    "QA Engineer",
    "Other",
  ]

  return (
    <motion.div
      className="glass p-8 rounded-lg"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {!isSubmitted ? (
        <form onSubmit={handleSubmit} className="space-y-6">
          <h3 className="text-2xl font-bold gradient-text mb-6">Apply for a Position</h3>

          {error && (
            <Alert variant="destructive" className="mb-6 bg-red-900/20 border-red-600">
              <AlertTitle className="text-red-400">Error</AlertTitle>
              <AlertDescription className="text-gray-300">{error}</AlertDescription>
            </Alert>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-sm font-medium text-gray-300">
                Full Name
              </Label>
              <Input
                id="name"
                name="name"
                value={formState.name}
                onChange={handleChange}
                placeholder="John Doe"
                required
                className="bg-gray-900/50 border-gray-700 focus:border-purple-500"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm font-medium text-gray-300">
                Email Address
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formState.email}
                onChange={handleChange}
                placeholder="john@example.com"
                required
                className="bg-gray-900/50 border-gray-700 focus:border-purple-500"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone" className="text-sm font-medium text-gray-300">
                Phone Number
              </Label>
              <Input
                id="phone"
                name="phone"
                value={formState.phone}
                onChange={handleChange}
                placeholder="+1 (123) 456-7890"
                className="bg-gray-900/50 border-gray-700 focus:border-purple-500"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="location" className="text-sm font-medium text-gray-300">
                Your Location
              </Label>
              <Input
                id="location"
                name="location"
                value={formState.location}
                onChange={handleChange}
                placeholder="City, Country"
                className="bg-gray-900/50 border-gray-700 focus:border-purple-500"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="linkedin" className="text-sm font-medium text-gray-300">
                LinkedIn Profile
              </Label>
              <Input
                id="linkedin"
                name="linkedin"
                value={formState.linkedin}
                onChange={handleChange}
                placeholder="https://linkedin.com/in/yourprofile"
                className="bg-gray-900/50 border-gray-700 focus:border-purple-500"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="portfolio" className="text-sm font-medium text-gray-300">
                Portfolio Website
              </Label>
              <Input
                id="portfolio"
                name="portfolio"
                value={formState.portfolio}
                onChange={handleChange}
                placeholder="https://yourportfolio.com"
                className="bg-gray-900/50 border-gray-700 focus:border-purple-500"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="role" className="text-sm font-medium text-gray-300">
                Position You're Applying For
              </Label>
              <Select value={formState.role} name="role" onValueChange={(value) => handleSelectChange("role", value)}>
                <SelectTrigger className="bg-gray-900/50 border-gray-700 focus:border-purple-500">
                  <SelectValue placeholder="Select a position" />
                </SelectTrigger>
                <SelectContent>
                  {roles.map((role) => (
                    <SelectItem key={role} value={role}>
                      {role}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="resumeLink" className="text-sm font-medium text-gray-300">
                Resume Link (Google Drive, Dropbox, etc.)
              </Label>
              <Input
                id="resumeLink"
                name="resumeLink"
                value={formState.resumeLink}
                onChange={handleChange}
                placeholder="https://drive.google.com/your-resume"
                className="bg-gray-900/50 border-gray-700 focus:border-purple-500"
              />
            </div>

            <div className="space-y-2 md:col-span-2">
              <Label htmlFor="message" className="text-sm font-medium text-gray-300">
                Cover Letter / Additional Information
              </Label>
              <Textarea
                id="message"
                name="message"
                value={formState.message}
                onChange={handleChange}
                placeholder="Tell us about yourself, your experience, and why you want to join our team..."
                rows={5}
                className="bg-gray-900/50 border-gray-700 focus:border-purple-500"
              />
            </div>
          </div>

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white py-6"
          >
            {isSubmitting ? (
              <span className="flex items-center">
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
                Processing...
              </span>
            ) : (
              <span className="flex items-center">
                Submit Application
                <Send className="ml-2 h-5 w-5" />
              </span>
            )}
          </Button>
        </form>
      ) : (
        <div className="flex flex-col items-center justify-center py-12">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mb-4"
          >
            <CheckCircle className="h-10 w-10 text-green-500" />
          </motion.div>
          <h3 className="text-2xl font-bold text-white mb-2">Application Submitted!</h3>
          <p className="text-gray-400 text-center">
            Thank you for your interest in joining our team. We'll review your application and get back to you soon.
          </p>
        </div>
      )}
    </motion.div>
  )
}



