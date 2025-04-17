"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { motion } from "framer-motion"
import { Send, CheckCircle, Upload } from "lucide-react"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { addCarrer } from "@/lib/actions"

// Google Sheets Web App URL - kept as a constant to protect it


export default function CareerForm({ role = "" }) {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    linkedin: "",
    portfolio: "",
    role: "",
    resumeLink: "",
    message: "",
    coverLetter: "",
    yearsOfExperience: "",
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
      // Send JSON data to Google Sheets

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
                coverLetter: "",
                yearsOfExperience: "",
              })
            }, 5000)



    } catch (error) {
      console.error("Error submitting form:", error)


      // // Fallback method using a hidden iframe
      // try {
      //   // Create a hidden iframe
      //   const iframe = document.createElement("iframe")
      //   iframe.name = "hidden-iframe"
      //   iframe.style.display = "none"
      //   document.body.appendChild(iframe)

      //   // Create a form that will post to the Google Script
      //   const form = document.createElement("form")
      //   form.method = "POST"
      //   form.action = GOOGLE_SHEETS_CAREER_FORM_URL
      //   form.target = "hidden-iframe"

      //   // Add a hidden input with the JSON data
      //   const input = document.createElement("input")
      //   input.type = "hidden"
      //   input.name = "data"
      //   input.value = JSON.stringify(formState)
      //   form.appendChild(input)

      //   // Submit the form
      //   document.body.appendChild(form)
      //   form.submit()

      //   // Clean up
      //   setTimeout(() => {
      //     document.body.removeChild(form)
      //     document.body.removeChild(iframe)
      //   }, 1000)

      //   setIsSubmitting(false)
      //   setIsSubmitted(true)

      //   // Reset form after showing success message
      //   setTimeout(() => {
      //     setIsSubmitted(false)
      //     setFormState({
      //       name: "",
      //       email: "",
      //       phone: "",
      //       location: "",
      //       linkedin: "",
      //       portfolio: "",
      //       role: "",
      //       resumeLink: "",
      //       message: "",
      //       coverLetter: "",
      //       yearsOfExperience: "",
      //     })
      //   }, 5000)
      // } catch (fallbackError) {
      //   console.error("Fallback method also failed:", fallbackError)
      //   setIsSubmitting(false)
      //   setError("There was an error submitting your application. Please try again.")
      // }

        console.error("Fallback method also failed:")
        setIsSubmitting(false)
        setError("There was an error submitting your application. Please try again.")

    }
  }

  const roles = [
    "Design Lead",
    "UI/UX Design",
    "UI/UX Design Intern",
    "Frontend Web Developer Intern",
    "Frontend Web Developer",
    "Backend Web Developer",
    "Full Stack Developer",
    "Other",
  ]

  const experienceOptions = [
    "Less than 1 year",
    "1-2 years",
    "2-3 years",
    "Student/Fresh Graduate",
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
          <h3 className="text-2xl font-bold gradient-text mb-6">
            {role ? `Apply for ${role}` : "Submit Your Application"}
          </h3>

          {error && (
            <Alert variant="destructive" className="mb-6 bg-red-900/20 border-red-600">
              <AlertTitle className="text-red-400">Error</AlertTitle>
              <AlertDescription className="text-gray-300">{error}</AlertDescription>
            </Alert>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-sm font-medium text-gray-300">
                Full Name*
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
                Email Address*
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
                required
                value={formState.phone}
                onChange={handleChange}
                placeholder="+91 9999999999"
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
                required
                placeholder="Full address"
                className="bg-gray-900/50 border-gray-700 focus:border-purple-500"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="yearsOfExperience" className="text-sm font-medium text-gray-300">
                Experience Level
              </Label>
              <Select
                value={formState.yearsOfExperience}
                onValueChange={(value) => handleSelectChange("yearsOfExperience", value)}
              >
                <SelectTrigger className="bg-gray-900/50 border-gray-700 focus:border-purple-500">
                  <SelectValue placeholder="Select experience level" />
                </SelectTrigger>
                <SelectContent>
                  {experienceOptions.map((option) => (
                    <SelectItem key={option} value={option}>
                      {option}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="role" className="text-sm font-medium text-gray-300">
                Position You're Applying For{role ? "*" : ""}
              </Label>
              <Select value={formState.role} onValueChange={(value) => handleSelectChange("role", value)}>
                <SelectTrigger className="bg-gray-900/50 border-gray-700 focus:border-purple-500">
                  <SelectValue placeholder={role || "Select a position"} />
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
              <Label htmlFor="linkedin" className="text-sm font-medium text-gray-300">
                LinkedIn Profile
              </Label>
              <Input
                id="linkedin"
                name="linkedin"
                required
                value={formState.linkedin}
                onChange={handleChange}
                placeholder="https://linkedin.com/in/yourprofile"
                className="bg-gray-900/50 border-gray-700 focus:border-purple-500"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="portfolio" className="text-sm font-medium text-gray-300">
                Portfolio/GitHub/Dribbble
              </Label>
              <Input
                id="portfolio"
                name="portfolio"
                required
                value={formState.portfolio}
                onChange={handleChange}
                placeholder="https://yourportfolio.com"
                className="bg-gray-900/50 border-gray-700 focus:border-purple-500"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="resumeLink" className="text-sm font-medium text-gray-300">
                Resume Link (Google Drive, Dropbox, etc.)
              </Label>
              <Input
                id="resumeLink"
                name="resumeLink"
                required
                value={formState.resumeLink}
                onChange={handleChange}
                placeholder="https://drive.google.com/your-resume (accessible to anyone with the link)"
                className="bg-gray-900/50 border-gray-700 focus:border-purple-500"
              />
            </div>

            {/* <div className="md:col-span-2 bg-gray-900/30 rounded-lg p-4 border border-dashed border-gray-700">
              <Label className="text-sm font-medium text-gray-300 mb-2 block">Upload Resume</Label>
              <div className="flex items-center">
                <Button type="button" variant="outline" className="text-sm mr-2">
                  <Upload className="mr-2 h-4 w-4" /> Choose File
                </Button>
                <p className="text-sm text-gray-400">Or drag and drop a file here (.pdf, .doc, .docx, max 5MB)</p>
              </div>
              <p className="text-xs text-gray-500 mt-2">Alternatively, share your resume via link in the field above</p>
            </div> */}

            <div className="space-y-2 md:col-span-2">
              <Label htmlFor="coverLetter" className="text-sm font-medium text-gray-300">
                Cover Letter
              </Label>
              <Textarea
                id="coverLetter"
                name="coverLetter"
                value={formState.coverLetter}
                onChange={handleChange}
                required
                placeholder="Introduce yourself and explain why you're interested in this position..."
                rows={5}
                className="bg-gray-900/50 border-gray-700 focus:border-purple-500"
              />
            </div>

            <div className="space-y-2 md:col-span-2">
              <Label htmlFor="message" className="text-sm font-medium text-gray-300">
                Additional Information
              </Label>
              <Textarea
                id="message"
                name="message"
                value={formState.message}
                onChange={handleChange}
                placeholder="Any additional information you'd like to share..."
                rows={3}
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
            Thank you for your interest in joining our team at Fyris. We'll review your application and get back to you
            soon.
          </p>
        </div>
      )}
    </motion.div>
  )
}
