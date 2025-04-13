"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import {
  ChevronLeft,
  ExternalLink,
  Calendar,
  CheckCircle,
  ArrowLeft,
  ArrowRight,
  Code,
  Layers,
  Zap,
  Users,
} from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { portfolioProjects } from "../portfolio-data"
import type { Project } from "../portfolio-data"

export default function ProjectDetailPage({ id }: { id: string }) {
  const router = useRouter()
  const [project, setProject] = useState<Project | null>(null)
  const [loading, setLoading] = useState(true)
  const [activeImage, setActiveImage] = useState(0)

  useEffect(() => {
    // Find the project by ID
    const foundProject = portfolioProjects.find((p) => p.id === id)
    setProject(foundProject || null)
    setLoading(false)
  }, [id])

  if (loading) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-t-purple-500 border-r-transparent border-b-transparent border-l-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-400">Loading project details...</p>
        </div>
      </div>
    )
  }

  if (!project) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-4">Project not found</h1>
          <Button
            onClick={() => router.push("/portfolio")}
            className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white"
          >
            <ChevronLeft className="mr-2 h-5 w-5" />
            Back to Portfolio
          </Button>
        </div>
      </div>
    )
  }

  // Find related projects (projects with similar category)
  const relatedProjects = portfolioProjects
    .filter((p) => p.id !== project.id && p.category === project.category)
    .slice(0, 2)

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Button
            variant="ghost"
            className="text-gray-400 hover:text-white mb-8"
            onClick={() => router.push("/portfolio")}
          >
            <ArrowLeft className="mr-2 h-5 w-5" />
            Back to Portfolio
          </Button>

          <div className="max-w-4xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <Badge className="bg-purple-600 hover:bg-purple-700 mb-4">{project.category}</Badge>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">{project.title}</h1>

              <div className="flex flex-wrap items-center text-sm text-gray-400 mb-8">
                <div className="flex items-center mr-6 mb-2">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>Year: {project.year}</span>
                </div>

                <div className="flex items-center mb-2">
                  <span>Client: {project.client}</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Image & Gallery */}
      <section className="py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="relative h-[400px] rounded-lg overflow-hidden mb-4">
              <img
                src={project.gallery[activeImage] || project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>

            {project.gallery.length > 1 && (
              <div className="flex space-x-2 overflow-x-auto pb-2">
                {project.gallery.map((image, index) => (
                  <button
                    key={index}
                    className={`relative h-20 w-32 flex-shrink-0 rounded-md overflow-hidden transition-all ${
                      activeImage === index ? "ring-2 ring-purple-500" : "opacity-70 hover:opacity-100"
                    }`}
                    onClick={() => setActiveImage(index)}
                  >
                    <img
                      src={image || "/placeholder.svg"}
                      alt={`${project.title} - view ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="glass p-8 rounded-lg">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Layers className="mr-2 h-6 w-6 text-purple-500" />
                Project Overview
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                <div className="col-span-2">
                  <h3 className="text-xl font-bold text-white mb-4">The Challenge</h3>
                  <p className="text-gray-300 mb-6">{project.challenge}</p>

                  <h3 className="text-xl font-bold text-white mb-4">Our Solution</h3>
                  <p className="text-gray-300">{project.solution}</p>
                </div>

                <div>
                  <div className="glass-card p-6">
                    <h3 className="text-lg font-bold text-white mb-4">Technologies Used</h3>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, index) => (
                        <Badge key={index} className="bg-gray-800 hover:bg-gray-700">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Results Section */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                  <Zap className="mr-2 h-5 w-5 text-purple-500" />
                  Results & Impact
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {project.results.map((result, index) => (
                    <div key={index} className="flex items-start">
                      <div className="flex-shrink-0 mr-3">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-600/20 to-blue-600/20 flex items-center justify-center">
                          <CheckCircle className="h-4 w-4 text-purple-500" />
                        </div>
                      </div>
                      <p className="text-gray-300">{result}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Testimonial Section */}
              {project.testimonial && (
                <div className="mb-8">
                  <div className="glass-card p-6 border-l-4 border-purple-500">
                    <p className="text-gray-300 italic mb-4">"{project.testimonial.quote}"</p>
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 flex items-center justify-center text-white font-bold mr-3">
                        {project.testimonial.author.charAt(0)}
                      </div>
                      <div>
                        <p className="text-white font-semibold">{project.testimonial.author}</p>
                        <p className="text-gray-400 text-sm">{project.testimonial.position}</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Features Section */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                  <Code className="mr-2 h-5 w-5 text-purple-500" />
                  Key Features
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {project.features.map((feature, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-purple-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Process Section */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                  <Users className="mr-2 h-5 w-5 text-purple-500" />
                  Our Process
                </h3>
                <div className="relative">
                  {/* Center line */}
                  <div className="absolute left-[22px] top-2 bottom-10 w-1 bg-gradient-to-b from-purple-600 via-blue-500 to-cyan-400"></div>

                  <div className="space-y-6">
                    {project.process.map((step, index) => (
                      <div key={index} className="flex">
                        <div className="flex-shrink-0 mr-6">
                          <div className="w-11 h-11 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 flex items-center justify-center text-white font-bold text-lg z-10 relative">
                            {index + 1}
                          </div>
                        </div>

                        <div className="pt-2">
                          <h4 className="text-lg font-semibold text-white mb-2">{step.title}</h4>
                          <p className="text-gray-400">{step.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Next Steps Section */}
              {project.nextSteps && (
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-white mb-4">Next Steps</h3>
                  <p className="text-gray-300">{project.nextSteps}</p>
                </div>
              )}

              {/* Project Links */}
              <div className="flex justify-between items-center pt-6 border-t border-gray-800">
                <Button
                  onClick={() => router.push("/portfolio")}
                  variant="outline"
                  className="border-purple-500/50 hover:border-purple-500 text-white"
                >
                  <ChevronLeft className="mr-2 h-5 w-5" />
                  Back to Portfolio
                </Button>

                {project.link && (
                  <Button
                    onClick={() => window.open(project.link, "_blank")}
                    className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white"
                  >
                    Visit Project
                    <ExternalLink className="ml-2 h-5 w-5" />
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Projects Section */}
      {relatedProjects.length > 0 && (
        <section className="py-20 bg-gradient-to-b from-gray-950 to-gray-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-white mb-8">Similar Projects</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {relatedProjects.map((relatedProject, index) => (
                <motion.div
                  key={relatedProject.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="glass-card overflow-hidden group cursor-pointer"
                  onClick={() => router.push(`/portfolio/${relatedProject.id}`)}
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={relatedProject.image || "/placeholder.svg"}
                      alt={relatedProject.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-70" />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-purple-600 hover:bg-purple-700">{relatedProject.category}</Badge>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
                      {relatedProject.title}
                    </h3>
                    <p className="text-gray-400 mb-4 line-clamp-2">{relatedProject.description}</p>

                    <div className="flex items-center text-purple-400 group">
                      <span className="mr-2 transition-all duration-300 group-hover:mr-3">View Case Study</span>
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-blue-900/20" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="glass p-8 md:p-12 rounded-2xl">
            <div className="text-center max-w-3xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  <span className="gradient-text">Ready to Start Your Project?</span>
                </h2>
                <p className="text-xl text-gray-300 mb-8">
                  Let's collaborate to create innovative solutions that drive your business forward. Our team is ready
                  to bring your ideas to life.
                </p>

                <Button
                  onClick={() => router.push("/contact")}
                  className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-6 text-lg"
                >
                  Get in Touch
                  <ExternalLink className="ml-2 h-5 w-5" />
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
