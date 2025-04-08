"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { motion } from "framer-motion"
import { Send, CheckCircle } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

// Google Sheets Web App URL - kept as a constant to protect it
const GOOGLE_SHEETS_CONTACT_FORM_URL =
  "https://script.google.com/macros/s/AKfycbxNmlUr857QCh7u39p7HPyRUeu8p1iaGkxxhv1S-qFYIINqyfVd2pJPWZbbInFQ83vt/exec"

export default function ContactForm() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (value: string) => {
    setFormState((prev) => ({ ...prev, service: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)

    try {
      // Create form data for submission
      const formData = new FormData()
      Object.entries(formState).forEach(([key, value]) => {
        formData.append(key, value as string)
      })

      // Submit to Google Sheets
      const response = await fetch(GOOGLE_SHEETS_CONTACT_FORM_URL, {
        method: "POST",
        body: formData,
        mode: "no-cors", // This is important for Google Sheets Web App
      })

      // Since we're using no-cors, we can't actually check the response status
      // So we'll assume success if no error is thrown
      setIsSubmitting(false)
      setIsSubmitted(true)

      // Reset form after showing success message
      setTimeout(() => {
        setIsSubmitted(false)
        setFormState({
          name: "",
          email: "",
          phone: "",
          company: "",
          service: "",
          message: "",
        })
      }, 5000)
    } catch (error) {
      console.error("Error submitting form:", error)
      setIsSubmitting(false)
      setError(
        "There was an error submitting your message. Please try again or contact us directly at thebagaboo@gmail.com",
      )
    }
  }

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
          <h3 className="text-2xl font-bold gradient-text mb-6">Let's Build Something Extraordinary Together!</h3>

          {error && (
            <Alert variant="destructive" className="mb-6 bg-red-900/20 border-red-600">
              <AlertTitle className="text-red-400">Error</AlertTitle>
              <AlertDescription className="text-gray-300">{error}</AlertDescription>
            </Alert>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium text-gray-300">
                Full Name
              </label>
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
              <label htmlFor="email" className="text-sm font-medium text-gray-300">
                Email Address
              </label>
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
              <label htmlFor="phone" className="text-sm font-medium text-gray-300">
                Phone Number
              </label>
              <Input
                id="phone"
                name="phone"
                value={formState.phone}
                onChange={handleChange}
                placeholder="+91 9993553513"
                className="bg-gray-900/50 border-gray-700 focus:border-purple-500"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="company" className="text-sm font-medium text-gray-300">
                Company Name
              </label>
              <Input
                id="company"
                name="company"
                value={formState.company}
                onChange={handleChange}
                placeholder="Your Company"
                className="bg-gray-900/50 border-gray-700 focus:border-purple-500"
              />
            </div>

            <div className="space-y-2 md:col-span-2">
              <label htmlFor="service" className="text-sm font-medium text-gray-300">
                Service You're Interested In
              </label>
              <Select value={formState.service} onValueChange={handleSelectChange}>
                <SelectTrigger className="bg-gray-900/50 border-gray-700 focus:border-purple-500">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="web-development">Custom Web Development</SelectItem>
                  <SelectItem value="ai-automation">AI & Automation Solutions</SelectItem>
                  <SelectItem value="cloud-devops">Cloud & DevOps Consulting</SelectItem>
                  <SelectItem value="mobile-apps">Mobile App Development</SelectItem>
                  <SelectItem value="cybersecurity">Cybersecurity & Blockchain</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2 md:col-span-2">
              <label htmlFor="message" className="text-sm font-medium text-gray-300">
                Your Message
              </label>
              <Textarea
                id="message"
                name="message"
                value={formState.message}
                onChange={handleChange}
                placeholder="Tell us about your project or requirements..."
                rows={5}
                required
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
                Send Message
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
          <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
          <p className="text-gray-400 text-center">
            Thank you for reaching out. We'll get back to you within 24 hours.
          </p>
        </div>
      )}
    </motion.div>
  )
}
