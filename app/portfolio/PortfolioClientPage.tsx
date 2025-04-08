"use client"

import { useState, useRef, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import { ChevronRight, ArrowRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"

interface Project {
  id: string
  title: string
  category: string
  description: string
  fullDescription: string
  image: string
  technologies: string[]
  features: string[]
  client: string
  year: string
  link?: string
}

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
            View Project
            <ChevronRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </motion.div>
  )
}

interface Project {
  id: string
  title: string
  category: string
  description: string
  fullDescription: string
  image: string
  technologies: string[]
  features: string[]
  client: string
  year: string
  link?: string
}

export default function PortfolioClientPage() {
  const router = useRouter()
  const [filter, setFilter] = useState("all")
  const horizontalRef = useRef<HTMLDivElement>(null)

  const projects: Project[] = [
    {
      id: "e-commerce",
      title: "E-commerce Website",
      category: "Web Development",
      description: "A modern e-commerce website with a user-friendly interface and secure payment processing.",
      fullDescription:
        "We developed a modern e-commerce website for a local retail business in Bhopal. The solution features a user-friendly interface, secure payment processing, and a responsive design that works seamlessly across all devices.",
      image: "/placeholder.svg?height=400&width=600",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      features: [
        "Product catalog with search and filtering",
        "User accounts and order history",
        "Secure payment processing",
        "Admin dashboard for inventory management",
        "Responsive design for all devices",
      ],
      client: "Bhopal Retail Group",
      year: "2023",
    },
    {
      id: "clinic-management",
      title: "Clinic Management System",
      category: "Web Application",
      description: "A simple but effective clinic management system for a local healthcare provider.",
      fullDescription:
        "We built a clinic management system for a healthcare provider in Madhya Pradesh. The system includes appointment scheduling, patient records management, and billing features. We implemented security measures to protect sensitive patient data.",
      image: "/placeholder.svg?height=400&width=600",
      technologies: ["React", "Node.js", "PostgreSQL"],
      features: [
        "Appointment scheduling",
        "Patient records management",
        "Billing and invoicing",
        "Prescription management",
        "Reporting and analytics",
      ],
      client: "MP Healthcare",
      year: "2023",
    },
    {
      id: "learning-platform",
      title: "Educational Learning Platform",
      category: "Web Development",
      description: "An online learning platform for a local educational institution.",
      fullDescription:
        "We developed an online learning platform for an educational institution in Bhopal. The platform includes course management, video lectures, quizzes, and progress tracking features. The solution has helped the client expand their reach beyond physical classrooms.",
      image: "/placeholder.svg?height=400&width=600",
      technologies: ["React", "Node.js", "MongoDB"],
      features: [
        "Course management",
        "Video lectures",
        "Interactive quizzes",
        "Progress tracking",
        "Discussion forums",
      ],
      client: "Bhopal Educational Institute",
      year: "2023",
    },
    {
      id: "portfolio-website",
      title: "Portfolio Website",
      category: "Web Development",
      description: "A professional portfolio website for a local photographer.",
      fullDescription:
        "We created a stunning portfolio website for a photographer in Bhopal. The website showcases their work in a visually appealing way with a focus on image quality and loading speed. The responsive design ensures a great experience on all devices.",
      image: "/placeholder.svg?height=400&width=600",
      technologies: ["React", "Next.js", "Tailwind CSS"],
      features: [
        "Image gallery with filtering",
        "Contact form",
        "Blog section",
        "SEO optimization",
        "Fast loading times",
      ],
      client: "Bhopal Photography",
      year: "2023",
    },
    {
      id: "restaurant-website",
      title: "Restaurant Website",
      category: "Web Development",
      description: "A website for a local restaurant with online ordering capabilities.",
      fullDescription:
        "We built a website for a restaurant in Madhya Pradesh that allows customers to view the menu, make reservations, and place orders online. The solution has helped the client increase their online presence and streamline their ordering process.",
      image: "/placeholder.svg?height=400&width=600",
      technologies: ["React", "Node.js", "MongoDB"],
      features: ["Online menu", "Reservation system", "Online ordering", "Customer reviews", "Admin dashboard"],
      client: "MP Cuisine",
      year: "2023",
    },
  ]

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) => project.category.toLowerCase().includes(filter.toLowerCase()))

  const categories = [
    { value: "all", label: "All Projects" },
    { value: "web", label: "Web Development" },
    { value: "application", label: "Web Application" },
    { value: "mobile", label: "Mobile Apps" },
  ]

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
              Though we're a new agency, we've already delivered some impressive results for our clients. Here are a few
              of our recent projects.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Project */}
      <section className="py-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white mb-6">Featured Project</h2>
          <FeaturedProject project={projects[0]} />
        </div>
      </section>

      {/* Horizontal Scroll Portfolio */}
      <section className="py-20 bg-gradient-to-b from-gray-950 to-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
            <h2 className="text-2xl font-bold text-white mb-4 md:mb-0">Our Projects</h2>
            <p className="text-gray-400 flex items-center">
              <span>Scroll horizontally to explore</span>
              <ArrowRight className="ml-2 h-4 w-4" />
            </p>
          </div>

          <div ref={horizontalRef} className="horizontal-scroll pb-8 -mx-4 px-4 cursor-grab active:cursor-grabbing">
            {projects.map((project, index) => (
              <div key={project.id} className="min-w-[300px] sm:min-w-[350px] md:min-w-[400px] mr-6">
                <ProjectCard project={project} index={index} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Projects */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
            <h2 className="text-2xl font-bold text-white mb-4 md:mb-0">All Projects</h2>

            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category.value}
                  variant={filter === category.value ? "default" : "outline"}
                  className={
                    filter === category.value
                      ? "bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white"
                      : "border-gray-700 text-gray-300 hover:text-white hover:border-purple-500"
                  }
                  onClick={() => setFilter(category.value)}
                >
                  {category.label}
                </Button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-12 glass-card">
              <p className="text-gray-400 text-lg mb-4">No projects found in this category at the moment.</p>
              <Button
                onClick={() => setFilter("all")}
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white"
              >
                View All Projects
              </Button>
            </div>
          )}
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
                  We may be new, but we're passionate, innovative, and ready to bring your ideas to life.
                </p>

                <Button
                  onClick={() => router.push("/contact")}
                  className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-6 text-lg"
                >
                  Start a Project
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
