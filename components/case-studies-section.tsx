"use client"

import { useState, useRef } from "react"
import { motion } from "framer-motion"
import { ArrowRight, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import { Badge } from "@/components/ui/badge"

interface CaseStudy {
  id: string
  title: string
  client: string
  category: string
  description: string
  image: string
  technologies: string[]
  results: string[]
  link?: string
}

function CaseStudyCard({
  caseStudy,
  index,
  isActive,
  onClick,
}: {
  caseStudy: CaseStudy
  index: number
  isActive: boolean
  onClick: () => void
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -10 }}
      className={`glass-card overflow-hidden cursor-pointer transition-all duration-300 h-full ${
        isActive ? "border-2 border-purple-500" : "border border-gray-800"
      }`}
      onClick={onClick}
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={caseStudy.image || "/placeholder.svg"}
          alt={caseStudy.title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-70" />
        <div className="absolute bottom-4 left-4">
          <Badge className="bg-purple-600 hover:bg-purple-700">{caseStudy.category}</Badge>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
          {caseStudy.title}
        </h3>
        <p className="text-gray-400 mb-4 line-clamp-2">{caseStudy.description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {caseStudy.technologies.slice(0, 3).map((tech, i) => (
            <span key={i} className="px-2 py-1 text-xs rounded-full bg-gray-800 text-gray-300">
              {tech}
            </span>
          ))}
          {caseStudy.technologies.length > 3 && (
            <span className="px-2 py-1 text-xs rounded-full bg-gray-800 text-gray-300">
              +{caseStudy.technologies.length - 3}
            </span>
          )}
        </div>

        <div className="flex justify-between items-center">
          <span className="text-gray-500">{caseStudy.client}</span>
          <ArrowRight
            className={`h-5 w-5 transition-all duration-300 ${isActive ? "text-purple-500" : "text-gray-600"}`}
          />
        </div>
      </div>
    </motion.div>
  )
}

function CaseStudyDetail({ caseStudy }: { caseStudy: CaseStudy }) {
  const router = useRouter()

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 glass p-8 rounded-lg">
      <div>
        <div className="relative h-[300px] overflow-hidden rounded-lg">
          <img
            src={caseStudy.image || "/placeholder.svg"}
            alt={caseStudy.title}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div>
        <Badge className="bg-purple-600 hover:bg-purple-700 mb-4">{caseStudy.category}</Badge>
        <h3 className="text-2xl font-bold text-white mb-2">{caseStudy.title}</h3>
        <p className="text-gray-300 mb-6">{caseStudy.description}</p>

        <div className="mb-6">
          <h4 className="text-lg font-semibold text-white mb-2">Technologies Used</h4>
          <div className="flex flex-wrap gap-2">
            {caseStudy.technologies.map((tech, index) => (
              <span
                key={index}
                className="px-3 py-1 rounded-full text-sm bg-gray-800 text-gray-300 border border-gray-700"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="mb-6">
          <h4 className="text-lg font-semibold text-white mb-2">Results</h4>
          <ul className="space-y-1">
            {caseStudy.results.map((result, index) => (
              <li key={index} className="flex items-start">
                <span className="text-purple-500 mr-2">✓</span>
                <span className="text-gray-400">{result}</span>
              </li>
            ))}
          </ul>
        </div>

        {caseStudy.link && (
          <Button
            className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white"
            onClick={() => window.open(caseStudy.link, "_blank")}
          >
            Visit Project
            <ExternalLink className="ml-2 h-5 w-5" />
          </Button>
        )}
      </div>
    </div>
  )
}

export default function CaseStudiesSection() {
  const [activeCaseStudy, setActiveCaseStudy] = useState(0)
  const scrollRef = useRef(null)
  const router = useRouter()

  const caseStudies: CaseStudy[] = [
    {
      id: "ai-ecommerce",
      title: "E-commerce Website",
      client: "Bhopal Retail Group",
      category: "Web Development",
      description: "A modern e-commerce website with a user-friendly interface and secure payment processing.",
      image: "/placeholder.svg?height=400&width=600",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      results: ["Increased online sales by 30%", "Improved user engagement", "Mobile-responsive design"],
      link: "/portfolio/ai-ecommerce",
    },
    {
      id: "healthcare-system",
      title: "Clinic Management System",
      client: "MP Healthcare",
      category: "Web Application",
      description: "A simple but effective clinic management system for a local healthcare provider.",
      image: "/placeholder.svg?height=400&width=600",
      technologies: ["React", "Node.js", "PostgreSQL"],
      results: [
        "Streamlined appointment booking",
        "Improved patient record management",
        "Reduced administrative workload",
      ],
      link: "/portfolio/healthcare-system",
    },
    {
      id: "education-platform",
      title: "Educational Learning Platform",
      client: "Bhopal Educational Institute",
      category: "Web Development",
      description: "An online learning platform for a local educational institution.",
      image: "/placeholder.svg?height=400&width=600",
      technologies: ["React", "Node.js", "MongoDB"],
      results: [
        "Enabled remote learning capabilities",
        "Increased student engagement",
        "Simplified content management for teachers",
      ],
      link: "/portfolio/education-platform",
    },
  ]

  return (
    <section id="case-studies" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950 to-gray-900" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">Our Recent Projects</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Though we're a new agency, we've already delivered some impressive results for our clients. Here are a few
            of our recent projects.
          </p>
        </motion.div>

        {/* Case Study Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {caseStudies.map((caseStudy, index) => (
            <CaseStudyCard
              key={caseStudy.id}
              caseStudy={caseStudy}
              index={index}
              isActive={activeCaseStudy === index}
              onClick={() => setActiveCaseStudy(index)}
            />
          ))}
        </div>

        {/* Case Study Detail */}
        <CaseStudyDetail caseStudy={caseStudies[activeCaseStudy]} />

        {/* CTA */}
        <div className="text-center mt-12">
          <Button
            onClick={() => router.push("/portfolio")}
            className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-6 py-3"
          >
            View All Projects
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  )
}
