"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import { Badge } from "@/components/ui/badge"

interface CaseStudyCardProps {
  title: string
  category: string
  description: string
  image: string
  index: number
}

function CaseStudyCard({ title, category, description, image, index }: CaseStudyCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -10 }}
      className="glass-card overflow-hidden group cursor-pointer"
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={image || "/placeholder.svg"}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-70" />
        <div className="absolute bottom-4 left-4">
          <Badge className="bg-gradient-to-r from-purple-600 to-blue-600">{category}</Badge>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">{title}</h3>
        <p className="text-gray-400 mb-4 line-clamp-2">{description}</p>

        <div className="flex items-center text-purple-400 group">
          <span className="mr-2 transition-all duration-300 group-hover:mr-3">View Project</span>
          <ArrowRight className="h-4 w-4 transition-all duration-300 group-hover:translate-x-1" />
        </div>
      </div>
    </motion.div>
  )
}

export default function CaseStudiesSection() {
  const router = useRouter()

  const caseStudies = [
    {
      title: "E-commerce Website",
      category: "Web Development",
      description: "A modern e-commerce website with a user-friendly interface and secure payment processing.",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      title: "Clinic Management System",
      category: "Web Application",
      description: "A simple but effective clinic management system for a local healthcare provider.",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      title: "Educational Learning Platform",
      category: "Web Development",
      description: "An online learning platform for a local educational institution.",
      image: "/placeholder.svg?height=400&width=600",
    },
  ]

  return (
    <section id="case-studies" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-gray-950"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <Badge className="bg-gradient-to-r from-purple-600 to-blue-600 mb-4">Our Portfolio</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-cyan-400 to-blue-400">
              Recent Projects
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Though we're a new agency, we've already delivered some impressive results for our clients. Here are a few
            of our recent projects.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {caseStudies.map((study, index) => (
            <CaseStudyCard
              key={index}
              title={study.title}
              category={study.category}
              description={study.description}
              image={study.image}
              index={index}
            />
          ))}
        </div>

        <div className="text-center">
          <Button
            onClick={() => router.push("/portfolio")}
            className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white"
          >
            View All Projects
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  )
}
