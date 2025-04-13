"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import { ChevronLeft, ExternalLink, Calendar } from "lucide-react"
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

function ProjectDetailPageComponent({ id }: { id: string }) {
  const router = useRouter()
  const [project, setProject] = useState<Project | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // In a real application, you would fetch the project data from an API
    // For this demo, we'll use mock data
    const projects: Project[] = [
      {
        id: "e-commerce",
        title: "E-commerce Website",
        category: "Web Development",
        description: "A modern e-commerce website with a user-friendly interface and secure payment processing.",
        fullDescription:
          "We developed a modern e-commerce website for a local retail business in Bhopal. The solution features a user-friendly interface, secure payment processing, and a responsive design that works seamlessly across all devices. The client was looking to expand their business online and reach customers beyond their physical store location. Our solution helped them achieve this goal by providing a platform that showcases their products effectively and makes the purchasing process simple and intuitive for customers. The website includes features such as product categorization, search functionality, user accounts, shopping cart, and secure checkout with multiple payment options.",
        image: "/placeholder.svg?height=600&width=800",
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
          "We built a clinic management system for a healthcare provider in Madhya Pradesh. The system includes appointment scheduling, patient records management, and billing features. We implemented security measures to protect sensitive patient data. The client was struggling with paper-based record keeping and manual appointment scheduling, which was time-consuming and prone to errors. Our solution digitized their operations, making them more efficient and reducing administrative overhead.",
        image: "/placeholder.svg?height=600&width=800",
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
          "We developed an online learning platform for an educational institution in Bhopal. The platform includes course management, video lectures, quizzes, and progress tracking features. The solution has helped the client expand their reach beyond physical classrooms. With the increasing demand for remote learning options, the client needed a way to deliver their educational content online. Our platform provided them with the tools to create, manage, and deliver courses to students regardless of their location.",
        image: "/placeholder.svg?height=600&width=800",
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
          "We created a stunning portfolio website for a photographer in Bhopal. The website showcases their work in a visually appealing way with a focus on image quality and loading speed. The responsive design ensures a great experience on all devices. The client needed a platform to display their photography work to potential clients and establish their online presence. Our solution provided them with a professional-looking website that highlights their skills and makes it easy for visitors to contact them for bookings.",
        image: "/placeholder.svg?height=600&width=800",
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
          "We built a website for a restaurant in Madhya Pradesh that allows customers to view the menu, make reservations, and place orders online. The solution has helped the client increase their online presence and streamline their ordering process. The client was looking to modernize their business and provide customers with more convenient ways to interact with their restaurant. Our solution not only improved the customer experience but also helped the restaurant manage orders more efficiently.",
        image: "/placeholder.svg?height=600&width=800",
        technologies: ["React", "Node.js", "MongoDB"],
        features: ["Online menu", "Reservation system", "Online ordering", "Customer reviews", "Admin dashboard"],
        client: "MP Cuisine",
        year: "2023",
      },
    ]

    const currentProject = projects.find((p) => p.id === id)

    if (currentProject) {
      setProject(currentProject)
    }

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
            <ChevronLeft className="mr-2 h-5 w-5" />
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

      {/* Featured Image */}
      <section className="py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <img
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Project Content */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="glass p-8 rounded-lg">
              <h2 className="text-2xl font-bold text-white mb-4">Project Overview</h2>
              <p className="text-gray-300 mb-8">{project.fullDescription}</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-xl font-bold text-white mb-4">Technologies Used</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <Badge key={index} className="bg-gray-800 hover:bg-gray-700">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white mb-4">Key Features</h3>
                  <ul className="space-y-2">
                    {project.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-purple-500 mr-2">✓</span>
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

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
      <section className="py-20 bg-gradient-to-b from-gray-950 to-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white mb-8">You Might Also Like</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* This would typically be populated with related projects */}
            <div
              className="glass-card overflow-hidden cursor-pointer group"
              onClick={() => router.push("/portfolio/e-commerce")}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src="/placeholder.svg?height=400&width=600"
                  alt="E-commerce Website"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-70" />
                <div className="absolute bottom-4 left-4">
                  <Badge className="bg-purple-600 hover:bg-purple-700">Web Development</Badge>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
                  E-commerce Website
                </h3>
                <p className="text-gray-400 mb-4 line-clamp-2">
                  A modern e-commerce website with a user-friendly interface and secure payment processing.
                </p>
              </div>
            </div>
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

export default ProjectDetailPageComponent
