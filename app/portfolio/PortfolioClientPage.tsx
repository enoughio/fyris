"use client"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import { ChevronRight, ArrowRight, Search, Filter, X, ExternalLink, Code, Layers, Zap, CheckCircle } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { portfolioProjects } from "./portfolio-data"
import type { Project } from "./portfolio-data"

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [isHovered, setIsHovered] = useState(false)
  const router = useRouter()

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="glass-card overflow-hidden cursor-pointer group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => router.push(`/portfolio/${project.id}`)}
      whileHover={{ y: -10 }}
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-70" />
        <div className="absolute bottom-4 left-4">
          <Badge className="bg-purple-600 hover:bg-purple-700">{project.category}</Badge>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
          {project.title}
        </h3>
        <p className="text-gray-400 mb-4 line-clamp-2">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.slice(0, 3).map((tech, i) => (
            <span key={i} className="px-2 py-1 text-xs rounded-full bg-gray-800 text-gray-300">
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="px-2 py-1 text-xs rounded-full bg-gray-800 text-gray-300">
              +{project.technologies.length - 3}
            </span>
          )}
        </div>

        <div className="flex justify-between items-center">
          <span className="text-gray-500">{project.client}</span>
          <ArrowRight
            className={`h-5 w-5 transition-all duration-300 ${isHovered ? "text-purple-500 translate-x-1" : "text-gray-600"}`}
          />
        </div>
      </div>
    </motion.div>
  )
}

function FeaturedProject({ project }: { project: Project }) {
  const router = useRouter()

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="glass p-6 rounded-lg overflow-hidden cursor-pointer"
      onClick={() => router.push(`/portfolio/${project.id}`)}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div className="relative h-64 lg:h-full overflow-hidden rounded-lg">
          <img
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
          />
        </div>

        <div>
          <Badge className="bg-purple-600 hover:bg-purple-700 mb-4">{project.category}</Badge>

          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 hover:text-purple-400 transition-colors">
            {project.title}
          </h2>

          <p className="text-gray-300 mb-6">{project.description}</p>

          <div className="flex flex-wrap gap-2 mb-6">
            {project.technologies.map((tech, index) => (
              <span
                key={index}
                className="px-3 py-1 rounded-full text-sm bg-gray-800 text-gray-300 border border-gray-700"
              >
                {tech}
              </span>
            ))}
          </div>

          <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white">
            View Case Study
            <ChevronRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </motion.div>
  )
}

export default function PortfolioClientPage() {
  const router = useRouter()
  const [filter, setFilter] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")
  const [isFilterMenuOpen, setIsFilterMenuOpen] = useState(false)
  const horizontalRef = useRef<HTMLDivElement>(null)

  // Filter projects based on search query and category filter
  const filteredProjects = portfolioProjects.filter((project) => {
    // Apply search filter
    if (searchQuery) {
      const searchLower = searchQuery.toLowerCase()
      return (
        project.title.toLowerCase().includes(searchLower) ||
        project.description.toLowerCase().includes(searchLower) ||
        project.technologies.some((tech) => tech.toLowerCase().includes(searchLower)) ||
        project.category.toLowerCase().includes(searchLower)
      )
    }

    // Apply category filter
    if (filter === "all") return true
    return project.category.toLowerCase().includes(filter.toLowerCase())
  })

  // Get featured projects
  const featuredProjects = portfolioProjects.filter((project) => project.isFeatured)

  // Get unique categories for filter
  const categories = ["all", ...new Set(portfolioProjects.map((project) => project.category.toLowerCase()))]

  // Horizontal scroll with mouse wheel
  useEffect(() => {
    const element = horizontalRef.current
    if (element) {
      const onWheel = (e: WheelEvent) => {
        if (e.deltaY === 0) return
        e.preventDefault()
        element.scrollTo({
          left: element.scrollLeft + e.deltaY,
          behavior: "smooth",
        })
      }
      element.addEventListener("wheel", onWheel)
      return () => element.removeEventListener("wheel", onWheel)
    }
  }, [])

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950" />

        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          {Array.from({ length: 30 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-20 bg-gradient-to-b from-purple-500/20 to-transparent"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                rotate: `${Math.random() * 45}deg`,
              }}
              animate={{
                opacity: [0.2, 0.5, 0.2],
                height: [80, 120, 80],
              }}
              transition={{
                duration: 3 + Math.random() * 5,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="gradient-text">Our Portfolio</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Explore our case studies and discover how we've helped businesses transform their digital presence with
              innovative solutions.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
              <div className="relative flex-1 max-w-md mx-auto sm:mx-0">
                <Input
                  type="text"
                  placeholder="Search projects..."
                  className="bg-gray-900/50 border-gray-700 focus:border-purple-500 pl-10 py-6"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                {searchQuery && (
                  <button
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
                    onClick={() => setSearchQuery("")}
                  >
                    <X className="h-5 w-5" />
                  </button>
                )}
              </div>

              <div className="relative">
                <Button
                  variant="outline"
                  className="border-gray-700 text-gray-300 hover:text-white hover:border-purple-500 py-6 px-4"
                  onClick={() => setIsFilterMenuOpen(!isFilterMenuOpen)}
                >
                  <Filter className="mr-2 h-5 w-5" />
                  Filter by Category
                </Button>

                <AnimatePresence>
                  {isFilterMenuOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute right-0 mt-2 w-64 bg-gray-900 border border-gray-800 rounded-lg shadow-lg z-50"
                    >
                      <div className="p-2">
                        {categories.map((category) => (
                          <button
                            key={category}
                            className={`w-full text-left px-4 py-2 rounded-md transition-colors ${
                              filter === category ? "bg-purple-600 text-white" : "text-gray-300 hover:bg-gray-800"
                            }`}
                            onClick={() => {
                              setFilter(category)
                              setIsFilterMenuOpen(false)
                            }}
                          >
                            {category.charAt(0).toUpperCase() + category.slice(1)}
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects */}
      {featuredProjects.length > 0 && !searchQuery && filter === "all" && (
        <section className="py-10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
              <Zap className="mr-2 h-5 w-5 text-purple-500" />
              Featured Projects
            </h2>
            <div className="space-y-8">
              {featuredProjects.map((project, index) => (
                <FeaturedProject key={project.id} project={project} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Horizontal Scroll Portfolio */}
      {!searchQuery && filter === "all" && (
        <section className="py-20 bg-gradient-to-b from-gray-950 to-gray-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
              <h2 className="text-2xl font-bold text-white mb-4 md:mb-0 flex items-center">
                <Layers className="mr-2 h-5 w-5 text-purple-500" />
                Recent Projects
              </h2>
              <p className="text-gray-400 flex items-center">
                <span>Scroll horizontally to explore</span>
                <ArrowRight className="ml-2 h-4 w-4" />
              </p>
            </div>

            <div ref={horizontalRef} className="horizontal-scroll pb-8 -mx-4 px-4 cursor-grab active:cursor-grabbing">
              {portfolioProjects
                .filter((p) => !p.isFeatured)
                .map((project, index) => (
                  <div key={project.id} className="min-w-[300px] sm:min-w-[350px] md:min-w-[400px] mr-6">
                    <ProjectCard project={project} index={index} />
                  </div>
                ))}
            </div>
          </div>
        </section>
      )}

      {/* All Projects Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
            <h2 className="text-2xl font-bold text-white mb-4 md:mb-0 flex items-center">
              <Code className="mr-2 h-5 w-5 text-purple-500" />
              {searchQuery || filter !== "all" ? "Filtered Projects" : "All Projects"}
            </h2>

            {(searchQuery || filter !== "all") && (
              <Button
                variant="outline"
                className="border-gray-700 text-gray-300 hover:text-white hover:border-purple-500"
                onClick={() => {
                  setSearchQuery("")
                  setFilter("all")
                }}
              >
                <X className="mr-2 h-5 w-5" />
                Clear Filters
              </Button>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-12 glass-card">
              <p className="text-gray-400 text-lg mb-4">No projects found matching your criteria.</p>
              <Button
                onClick={() => {
                  setSearchQuery("")
                  setFilter("all")
                }}
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white"
              >
                View All Projects
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-b from-gray-950 to-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="gradient-text">Our Project Process</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              We follow a structured approach to ensure successful project delivery and client satisfaction.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                number: "01",
                title: "Discovery",
                description:
                  "We start by understanding your business, goals, and requirements through in-depth discussions.",
                icon: <Search className="h-8 w-8 text-white" />,
              },
              {
                number: "02",
                title: "Planning",
                description:
                  "We create a detailed project plan, including timelines, milestones, and resource allocation.",
                icon: <Layers className="h-8 w-8 text-white" />,
              },
              {
                number: "03",
                title: "Development",
                description:
                  "Our team builds your solution using agile methodologies with regular updates and feedback.",
                icon: <Code className="h-8 w-8 text-white" />,
              },
              {
                number: "04",
                title: "Delivery",
                description: "We deploy your solution and provide ongoing support and maintenance as needed.",
                icon: <CheckCircle className="h-8 w-8 text-white" />,
              },
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card p-6 relative overflow-hidden"
              >
                {/* Step number */}
                <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 flex items-center justify-center">
                  <span className="text-white font-bold">{step.number}</span>
                </div>

                <div className="text-center pt-4">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gray-800/50 flex items-center justify-center">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-gray-400">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

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
                  <span className="gradient-text">Ready to Build Your Next Project?</span>
                </h2>
                <p className="text-xl text-gray-300 mb-8">
                  Let's collaborate to create innovative solutions that drive your business forward.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    onClick={() => router.push("/contact")}
                    className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-6 text-lg"
                  >
                    Start a Project
                    <ChevronRight className="ml-2 h-5 w-5" />
                  </Button>
                  <Button
                    onClick={() => router.push("/services")}
                    variant="outline"
                    className="border-purple-500/50 hover:border-purple-500 text-white px-8 py-6 text-lg"
                  >
                    Explore Our Services
                    <ExternalLink className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
