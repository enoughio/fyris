"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import { ChevronLeft, Briefcase, MapPin, Clock, DollarSign, ArrowLeft } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import CareerForm from "@/components/career-form"
import { jobListings } from "../job-data"
import type { JobListing } from "../job-data"

export default function JobDetailPage({ id }: { id: string }) {
  const router = useRouter()
  const [job, setJob] = useState<JobListing | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Find the job by ID
    const foundJob = jobListings.find((j) => j.id === id)
    setJob(foundJob || null)
    setIsLoading(false)
  }, [id])

  if (isLoading) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-t-purple-500 border-r-transparent border-b-transparent border-l-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-400">Loading job details...</p>
        </div>
      </div>
    )
  }

  if (!job) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-4">Position not found</h1>
          <Button
            onClick={() => router.push("/careers")}
            className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white"
          >
            <ChevronLeft className="mr-2 h-5 w-5" />
            Back to Careers
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Button
            variant="ghost"
            className="text-gray-400 hover:text-white mb-8"
            onClick={() => router.push("/careers")}
          >
            <ArrowLeft className="mr-2 h-5 w-5" />
            Back to All Positions
          </Button>

          <div className="max-w-4xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <Badge
                className={
                  job.isRemote ? "bg-green-600 hover:bg-green-700 mb-4" : "bg-purple-600 hover:bg-purple-700 mb-4"
                }
              >
                {job.isRemote ? "Remote" : "On-site"}
              </Badge>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">{job.title}</h1>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="flex items-center">
                  <Briefcase className="h-5 w-5 text-purple-500 mr-2" />
                  <span className="text-gray-300">{job.department}</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 text-purple-500 mr-2" />
                  <span className="text-gray-300">{job.location}</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-5 w-5 text-purple-500 mr-2" />
                  <span className="text-gray-300">{job.type}</span>
                </div>
                <div className="flex items-center">
                  <DollarSign className="h-5 w-5 text-purple-500 mr-2" />
                  <span className="text-gray-300">{job.salary}</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Job Description */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="glass p-8 rounded-lg">
              <h2 className="text-2xl font-bold text-white mb-6">About This Position</h2>
              <div className="prose prose-invert max-w-none text-gray-300">
                <div dangerouslySetInnerHTML={{ __html: job.fullDescription }} />
              </div>

              {job.responsibilities && job.responsibilities.length > 0 && (
                <div className="mt-8">
                  <h3 className="text-xl font-bold text-white mb-4">Key Responsibilities</h3>
                  <ul className="space-y-2">
                    {job.responsibilities.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-purple-500 mr-2">•</span>
                        <span className="text-gray-300">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {job.requirements && job.requirements.length > 0 && (
                <div className="mt-8">
                  <h3 className="text-xl font-bold text-white mb-4">Required Skills & Qualifications</h3>
                  <ul className="space-y-2">
                    {job.requirements.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-purple-500 mr-2">•</span>
                        <span className="text-gray-300">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {job.benefits && job.benefits.length > 0 && (
                <div className="mt-8">
                  <h3 className="text-xl font-bold text-white mb-4">What We Offer</h3>
                  <ul className="space-y-2">
                    {job.benefits.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-purple-500 mr-2">•</span>
                        <span className="text-gray-300">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-16 bg-gradient-to-b from-gray-950 to-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4">
                <span className="gradient-text">Apply for this Position</span>
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Submit your application below and we'll get back to you soon about the next steps.
              </p>
            </motion.div>

            <CareerForm role={job.title} />
          </div>
        </div>
      </section>

      {/* Similar Jobs */}
      {jobListings.filter((j) => j.id !== job.id && j.department === job.department).length > 0 && (
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold text-white mb-8">Similar Positions</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {jobListings
                  .filter((j) => j.id !== job.id && j.department === job.department)
                  .slice(0, 2)
                  .map((similarJob, index) => (
                    <motion.div
                      key={similarJob.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="glass-card p-6 cursor-pointer hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-300"
                      onClick={() => router.push(`/careers/${similarJob.id}`)}
                    >
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                        <h3 className="text-xl font-bold text-white mb-2 md:mb-0">{similarJob.title}</h3>
                        <Badge
                          className={
                            similarJob.isRemote
                              ? "bg-green-600 hover:bg-green-700"
                              : "bg-purple-600 hover:bg-purple-700"
                          }
                        >
                          {similarJob.isRemote ? "Remote" : "On-site"}
                        </Badge>
                      </div>
                      <p className="text-gray-400 mb-4 line-clamp-2">{similarJob.description}</p>
                      <div className="flex items-center text-purple-400 group">
                        <span className="mr-2 transition-all duration-300 group-hover:mr-3">View Details</span>
                        <ChevronLeft className="h-4 w-4 rotate-180" />
                      </div>
                    </motion.div>
                  ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-blue-900/20" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="glass p-8 md:p-12 rounded-2xl max-w-4xl mx-auto">
            <div className="text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  <span className="gradient-text">Not the right position for you?</span>
                </h2>
                <p className="text-lg text-gray-300 mb-8">
                  Check out our other open positions or submit a general application.
                </p>
                <Button
                  onClick={() => router.push("/careers")}
                  className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-6 text-lg"
                >
                  View All Positions
                  <ChevronLeft className="ml-2 h-5 w-5 rotate-180" />
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
