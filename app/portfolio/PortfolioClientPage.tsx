"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import {
  ChevronRight,
  ArrowRight,
  Search,
  Filter,
  X,
  ExternalLink,
  Code,
  Layers,
  Zap,
  CheckCircle,
  ArrowUpRight,
  Clock,
  Tag,
} from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { portfolioData } from "@/app/portfolio/portfolio-data"
import type { Project } from "./portfolio-data"

function ProjectCard({ project, index, priority = false }: { project: Project; index: number; priority?: boolean }) {
  const [isHovered, setIsHovered] = useState(false)
  const router = useRouter()
  const cardRef = useRef<HTMLDivElement>(null)

  // Staggered animation for cards
  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  }

  return (
    <motion.div
      ref={cardRef}
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={variants}
      className={`group cursor-pointer overflow-hidden rounded-xl bg-gradient-to-br from-gray-900 to-gray-950 border border-gray-800 hover:border-purple-500/50 transition-all duration-300 ${
        priority ? "md:col-span-2" : ""
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => router.push(`/portfolio/${project.id}`)}
    >
      <div className="relative">
        {/* Project Image */}
        <div className="relative h-56 overflow-hidden">
          <img
            src={project.image || "/placeholder.svg?height=400&width=600"}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/70 to-transparent" />

          {/* Category Badge */}
          <div className="absolute top-4 left-4">
            <Badge className="bg-purple-600/90 hover:bg-purple-700 backdrop-blur-sm text-white">
              {project.category}
            </Badge>
          </div>

          {/* Featured Badge */}
          {project.isFeatured && (
            <div className="absolute top-4 right-4">
              <Badge className="bg-amber-500/90 hover:bg-amber-600 backdrop-blur-sm text-white">
                <Zap className="h-3 w-3 mr-1" />
                Featured
              </Badge>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
            {project.title}
          </h3>

          <p className="text-gray-400 mb-4 line-clamp-2">{project.description}</p>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2 mb-5">
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

          {/* Footer */}
          <div className="flex justify-between items-center pt-2 border-t border-gray-800">
            <span className="text-gray-500 flex items-center text-sm">
              <Clock className="h-3 w-3 mr-1" />
              {project.year || "2023"}
            </span>

            <Button
              variant="ghost"
              size="sm"
              className="text-purple-400 hover:text-purple-300 hover:bg-purple-950/30 p-0 h-8 w-8 rounded-full"
              onClick={(e) => {
                e.stopPropagation()
                router.push(`/portfolio/${project.id}`)
              }}
            >
              <ArrowUpRight
                className={`h-4 w-4 transition-all duration-300 ${isHovered ? "translate-x-0.5 -translate-y-0.5" : ""}`}
              />
              <span className="sr-only">View Project</span>
            </Button>
          </div>
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
      className="rounded-xl overflow-hidden bg-gradient-to-br from-gray-900 to-gray-950 border border-gray-800 hover:border-purple-500/30 transition-all duration-300"
    >
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-0">
        {/* Image Section - 2/5 width on large screens */}
        <div className="lg:col-span-2 relative h-64 lg:h-full overflow-hidden">
          <img
            src={project.image || "/placeholder.svg?height=600&width=800"}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-gray-900 opacity-50 lg:block hidden" />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-70 lg:hidden block" />

          {/* Category Badge */}
          <div className="absolute top-4 left-4">
            <Badge className="bg-purple-600/90 hover:bg-purple-700 backdrop-blur-sm text-white">
              {project.category}
            </Badge>
          </div>

          {/* Featured Badge */}
          <div className="absolute top-4 right-4">
            <Badge className="bg-amber-500/90 hover:bg-amber-600 backdrop-blur-sm text-white">
              <Zap className="h-3 w-3 mr-1" />
              Featured
            </Badge>
          </div>
        </div>

        {/* Content Section - 3/5 width on large screens */}
        <div className="lg:col-span-3 p-8 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-gray-400 text-sm flex items-center">
                <Clock className="h-3 w-3 mr-1" />
                {project.year || "2023"}
              </span>
              <span className="text-gray-600">•</span>
              <span className="text-gray-400 text-sm">{project.client}</span>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 hover:text-purple-400 transition-colors">
              {project.title}
            </h2>

            <p className="text-gray-300 mb-6 line-clamp-3 lg:line-clamp-4">{project.description}</p>

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
          </div>

          <div className="flex gap-4">
            <Button
              onClick={() => router.push(`/portfolio/${project.id}`)}
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white"
            >
              View Case Study
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>

            {project.liveUrl && (
              <Button
                variant="outline"
                className="border-gray-700 hover:border-purple-500 text-gray-300"
                onClick={(e) => {
                  e.stopPropagation()
                  window.open(project.liveUrl, "_blank")
                }}
              >
                Live Preview
                <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            )}
          </div>
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
  const [activeFilters, setActiveFilters] = useState<string[]>([])
  const filterRef = useRef<HTMLDivElement>(null)
  const [filteredProjects, setFilteredProjects] = useState(portfolioData)

  // Handle clicks outside the filter menu
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (filterRef.current && !filterRef.current.contains(event.target as Node)) {
        setIsFilterMenuOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  useEffect(() => {
    setFilteredProjects(portfolioData)
  }, [])

  // Filter projects based on search query and category filter
  const filterProjects = (category: string) => {
    if (category === "All") {
      setFilteredProjects(portfolioData)
    } else {
      setFilteredProjects(portfolioData.filter((project) => project.category === category))
    }
  }

  const displayedProjects = filteredProjects.filter((project) => {
    // Apply search filter
    if (searchQuery) {
      const searchLower = searchQuery.toLowerCase()
      return (
        project.title.toLowerCase().includes(searchLower) ||
        project.description.toLowerCase().includes(searchLower) ||
        project.technologies.some((tech) => tech.toLowerCase().includes(searchLower)) ||
        project.category.toLowerCase().includes(searchLower) ||
        (project.client && project.client.toLowerCase().includes(searchLower))
      )
    }

    // Apply category filter
    if (filter !== "all") {
      return project.category.toLowerCase() === filter.toLowerCase()
    }

    // Apply tag filters
    if (activeFilters.length > 0) {
      return project.technologies.some((tech) => activeFilters.includes(tech.toLowerCase()))
    }

    return true
  })

  // Get featured projects
  const featuredProjects = portfolioData.filter((project) => project.isFeatured)

  // Get non-featured projects
  const nonFeaturedProjects = displayedProjects.filter((project) => !project.isFeatured)

  // Get unique categories for filter
  const categories = ["all", ...new Set(portfolioData.map((project) => project.category.toLowerCase()))]

  // Get unique technologies for tag filtering
  const allTechnologies = Array.from(
    new Set(portfolioData.flatMap((project) => project.technologies.map((tech) => tech.toLowerCase()))),
  ).sort()

  // Toggle tag filter
  const toggleTagFilter = (tag: string) => {
    setActiveFilters((prev) => (prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]))
  }

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950" />

        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(120,50,255,0.15),transparent_40%)]"></div>
            <div className="absolute bottom-0 left-0 w-full h-full bg-[radial-gradient(circle_at_70%_80%,rgba(50,120,255,0.15),transparent_40%)]"></div>
          </div>

          {/* Grid pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-4xl mx-auto"
          >
            <Badge className="bg-gradient-to-r from-purple-600 to-blue-600 mb-4">Our Work</Badge>

            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="gradient-text">Showcasing Our Digital Craftsmanship</span>
            </h1>

            <p className="text-xl text-gray-300 mb-10">
              Explore our portfolio of innovative solutions that have helped businesses transform their digital presence
              and achieve their goals.
            </p>

            <div className="flex flex-col md:flex-row justify-center gap-4 mb-12">
              <div className="relative flex-1 max-w-md mx-auto md:mx-0">
                <Input
                  type="text"
                  placeholder="Search projects..."
                  className="bg-gray-900/50 border-gray-700 focus:border-purple-500 pl-10 py-6 rounded-xl"
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

              <div className="relative" ref={filterRef}>
                <Button
                  variant="outline"
                  className="border-gray-700 text-gray-300 hover:text-white hover:border-purple-500 py-6 px-4 rounded-xl w-full md:w-auto"
                  onClick={() => setIsFilterMenuOpen(!isFilterMenuOpen)}
                >
                  <Filter className="mr-2 h-5 w-5" />
                  Filter Projects
                  {(filter !== "all" || activeFilters.length > 0) && (
                    <Badge className="ml-2 bg-purple-600 hover:bg-purple-700">
                      {filter !== "all" ? 1 : 0 + activeFilters.length}
                    </Badge>
                  )}
                </Button>

                <AnimatePresence>
                  {isFilterMenuOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute right-0 mt-2 w-72 bg-gray-900 border border-gray-800 rounded-lg shadow-lg z-50"
                    >
                      <div className="p-4">
                        <div className="mb-4">
                          <h3 className="text-white font-medium mb-2 flex items-center">
                            <Tag className="h-4 w-4 mr-2" />
                            Categories
                          </h3>
                          <div className="space-y-1">
                            {categories.map((category) => (
                              <button
                                key={category}
                                className={`w-full text-left px-3 py-2 rounded-md transition-colors text-sm ${
                                  filter === category ? "bg-purple-600 text-white" : "text-gray-300 hover:bg-gray-800"
                                }`}
                                onClick={() => {
                                  setFilter(category)
                                }}
                              >
                                {category.charAt(0).toUpperCase() + category.slice(1)}
                              </button>
                            ))}
                          </div>
                        </div>

                        <div>
                          <h3 className="text-white font-medium mb-2 flex items-center">
                            <Code className="h-4 w-4 mr-2" />
                            Technologies
                          </h3>
                          <div className="flex flex-wrap gap-2 max-h-40 overflow-y-auto pr-2">
                            {allTechnologies.map((tech) => (
                              <button
                                key={tech}
                                className={`px-2 py-1 rounded-full text-xs transition-colors ${
                                  activeFilters.includes(tech)
                                    ? "bg-purple-600 text-white"
                                    : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                                }`}
                                onClick={() => toggleTagFilter(tech)}
                              >
                                {tech}
                              </button>
                            ))}
                          </div>
                        </div>

                        {(filter !== "all" || activeFilters.length > 0) && (
                          <Button
                            variant="ghost"
                            size="sm"
                            className="w-full mt-4 text-gray-400 hover:text-white"
                            onClick={() => {
                              setFilter("all")
                              setActiveFilters([])
                            }}
                          >
                            <X className="h-4 w-4 mr-2" />
                            Clear All Filters
                          </Button>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Active Filters Display */}
      {(filter !== "all" || activeFilters.length > 0 || searchQuery) && (
        <section className="py-4">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-gray-400">Active filters:</span>

              {filter !== "all" && (
                <Badge className="bg-purple-600 hover:bg-purple-700 flex items-center gap-1">
                  Category: {filter}
                  <button onClick={() => setFilter("all")}>
                    <X className="h-3 w-3 ml-1" />
                  </button>
                </Badge>
              )}

              {activeFilters.map((tag) => (
                <Badge key={tag} className="bg-blue-600 hover:bg-blue-700 flex items-center gap-1">
                  {tag}
                  <button onClick={() => toggleTagFilter(tag)}>
                    <X className="h-3 w-3 ml-1" />
                  </button>
                </Badge>
              ))}

              {searchQuery && (
                <Badge className="bg-teal-600 hover:bg-teal-700 flex items-center gap-1">
                  Search: {searchQuery}
                  <button onClick={() => setSearchQuery("")}>
                    <X className="h-3 w-3 ml-1" />
                  </button>
                </Badge>
              )}

              <Button
                variant="ghost"
                size="sm"
                className="text-gray-400 hover:text-white p-0 h-7"
                onClick={() => {
                  setFilter("all")
                  setActiveFilters([])
                  setSearchQuery("")
                }}
              >
                Clear all
              </Button>
            </div>
          </div>
        </section>
      )}

      {/* Featured Projects */}
      {featuredProjects.length > 0 && !searchQuery && filter === "all" && activeFilters.length === 0 && (
        <section className="py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-white mb-8 flex items-center">
              <Zap className="mr-2 h-5 w-5 text-amber-500" />
              Featured Projects
            </h2>
            <div className="space-y-8">
              {featuredProjects.map((project) => (
                <FeaturedProject key={project.id} project={project} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Projects Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
            <h2 className="text-2xl font-bold text-white mb-4 md:mb-0 flex items-center">
              <Code className="mr-2 h-5 w-5 text-purple-500" />
              {searchQuery || filter !== "all" || activeFilters.length > 0 ? "Filtered Projects" : "All Projects"}
              <Badge className="ml-3 bg-gray-700">{displayedProjects.length}</Badge>
            </h2>
          </div>

          {displayedProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {nonFeaturedProjects.map((project, index) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  index={index}
                  priority={index === 0 || index % 7 === 0} // Make some cards span 2 columns for visual interest
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-16 rounded-xl bg-gray-900/50 border border-gray-800">
              <div className="max-w-md mx-auto">
                <Search className="h-12 w-12 text-gray-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">No projects found</h3>
                <p className="text-gray-400 mb-6">
                  We couldn't find any projects matching your current filters. Try adjusting your search criteria.
                </p>
                <Button
                  onClick={() => {
                    setSearchQuery("")
                    setFilter("all")
                    setActiveFilters([])
                  }}
                  className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white"
                >
                  View All Projects
                </Button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-gradient-to-b from-gray-950 to-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <Badge className="bg-gradient-to-r from-purple-600 to-blue-600 mb-4">Our Approach</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="gradient-text">How We Bring Ideas to Life</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our proven process ensures successful project delivery and exceeds client expectations at every stage.
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
                color: "from-purple-600 to-indigo-600",
              },
              {
                number: "02",
                title: "Planning",
                description:
                  "We create a detailed project plan, including timelines, milestones, and resource allocation.",
                icon: <Layers className="h-8 w-8 text-white" />,
                color: "from-indigo-600 to-blue-600",
              },
              {
                number: "03",
                title: "Development",
                description:
                  "Our team builds your solution using agile methodologies with regular updates and feedback.",
                icon: <Code className="h-8 w-8 text-white" />,
                color: "from-blue-600 to-cyan-600",
              },
              {
                number: "04",
                title: "Delivery",
                description: "We deploy your solution and provide ongoing support and maintenance as needed.",
                icon: <CheckCircle className="h-8 w-8 text-white" />,
                color: "from-cyan-600 to-teal-600",
              },
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="rounded-xl bg-gray-900/50 border border-gray-800 p-6 relative overflow-hidden group hover:border-gray-700 transition-all duration-300"
              >
                {/* Step number */}
                <div
                  className={`absolute -top-4 -left-4 w-16 h-16 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center`}
                >
                  <span className="text-white font-bold">{step.number}</span>
                </div>

                {/* Gradient line connecting steps */}
                {index < 3 && (
                  <div className="absolute top-8 -right-4 w-8 h-0.5 bg-gradient-to-r from-gray-600 to-gray-800 hidden lg:block"></div>
                )}

                <div className="text-center pt-8">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gray-800/50 flex items-center justify-center group-hover:bg-gray-800 transition-colors duration-300">
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
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-blue-900/20" />

        {/* Animated background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(120,50,255,0.15),transparent_40%)]"></div>
            <div className="absolute bottom-0 left-0 w-full h-full bg-[radial-gradient(circle_at_70%_80%,rgba(50,120,255,0.15),transparent_40%)]"></div>
          </div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="rounded-2xl bg-gradient-to-br from-gray-900 to-gray-950 border border-gray-800 p-8 md:p-12 shadow-xl">
            <div className="text-center max-w-3xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <Badge className="bg-gradient-to-r from-purple-600 to-blue-600 mb-4">Start Your Project</Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  <span className="gradient-text">Ready to Transform Your Digital Presence?</span>
                </h2>
                <p className="text-xl text-gray-300 mb-8">
                  Let's collaborate to create innovative solutions that drive your business forward and help you achieve
                  your goals.
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
