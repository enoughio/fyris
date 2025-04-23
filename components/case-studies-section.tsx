"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ArrowRight, ExternalLink } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import { portfolioData } from "@/app/portfolio/portfolio-data"

export default function CaseStudiesSection() {
  const router = useRouter()
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  // Get the first 3 featured projects
  const featuredProjects = portfolioData.filter((project) => project.isFeatured).slice(0, 3)

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-gray-950"></div>

      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(120,50,255,0.1),transparent_40%)]"></div>
          <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_80%,rgba(50,120,255,0.1),transparent_40%)]"></div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <Badge className="bg-gradient-to-r from-purple-600 to-blue-600 mb-4">Our Work</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">Recent Projects</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Explore our latest work and see how we've helped businesses achieve their goals with innovative solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Featured project (larger) */}
          {featuredProjects.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-8 relative group"
              onMouseEnter={() => setHoveredIndex(0)}
              onMouseLeave={() => setHoveredIndex(null)}
              onClick={() => router.push(`/portfolio/${featuredProjects[0].id}`)}
            >
              <div className="relative overflow-hidden rounded-xl aspect-[16/9] cursor-pointer">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-blue-900/20 group-hover:opacity-80 transition-opacity duration-300"></div>
                <img
                  src={featuredProjects[0].image || "/placeholder.svg?height=600&width=800"}
                  alt={featuredProjects[0].title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/80 to-transparent opacity-80"></div>

                <div className="absolute bottom-0 left-0 p-6 w-full">
                  <div className="flex flex-wrap gap-2 mb-3">
                    <Badge className="bg-purple-600 hover:bg-purple-700">{featuredProjects[0].category}</Badge>
                    <Badge className="bg-gray-800 hover:bg-gray-700">Featured</Badge>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
                    {featuredProjects[0].title}
                  </h3>
                  <p className="text-gray-300 mb-4 line-clamp-2">{featuredProjects[0].description}</p>

                  <Button variant="outline" className="border-purple-500/50 hover:border-purple-500 text-white">
                    View Case Study
                    <ArrowRight
                      className={`ml-2 h-4 w-4 transition-transform duration-300 ${
                        hoveredIndex === 0 ? "translate-x-1" : ""
                      }`}
                    />
                  </Button>
                </div>
              </div>
            </motion.div>
          )}

          {/* Secondary projects (smaller) */}
          <div className="lg:col-span-4 grid grid-cols-1 gap-8">
            {featuredProjects.slice(1, 3).map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (index + 1) * 0.1 }}
                className="relative group"
                onMouseEnter={() => setHoveredIndex(index + 1)}
                onMouseLeave={() => setHoveredIndex(null)}
                onClick={() => router.push(`/portfolio/${project.id}`)}
              >
                <div className="relative overflow-hidden rounded-xl aspect-[4/3] cursor-pointer">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-blue-900/20 group-hover:opacity-80 transition-opacity duration-300"></div>
                  <img
                    src={project.image || "/placeholder.svg?height=400&width=600"}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/80 to-transparent opacity-80"></div>

                  <div className="absolute bottom-0 left-0 p-4 w-full">
                    <div className="flex flex-wrap gap-2 mb-2">
                      <Badge className="bg-purple-600 hover:bg-purple-700">{project.category}</Badge>
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-300 text-sm mb-3 line-clamp-2">{project.description}</p>

                    <div className="flex items-center text-purple-400 group">
                      <span className="mr-2 transition-all duration-300 group-hover:mr-3">View Case Study</span>
                      <ArrowRight
                        className={`h-4 w-4 transition-transform duration-300 ${
                          hoveredIndex === index + 1 ? "translate-x-1" : ""
                        }`}
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-12"
        >
          <Button
            variant="outline"
            className="border-purple-500/50 hover:border-purple-500 text-white"
            onClick={() => router.push("/portfolio")}
          >
            View All Projects
            <ExternalLink className="ml-2 h-4 w-4" />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
