"use client"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import { ChevronRight } from "lucide-react"

interface ProcessStep {
  step: string
  title: string
  description: string
  icon: string
}

function ProcessStepCard({ step, index }: { step: ProcessStep; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -10, scale: 1.02 }}
      className="glass-card p-6 relative h-full"
    >
      <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 flex items-center justify-center">
        <span className="text-white font-bold">{step.step}</span>
      </div>

      <div className="text-4xl mb-4 mt-4">{step.icon}</div>
      <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
      <p className="text-gray-400">{step.description}</p>

      {/* Connector line (only for non-last items) */}
      {index < 3 && (
        <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-purple-500 to-transparent"></div>
      )}
    </motion.div>
  )
}

export default function ProcessSection() {
  const router = useRouter()

  const processSteps: ProcessStep[] = [
    {
      step: "01",
      title: "Discovery & Consultation",
      description:
        "We start by understanding your business, goals, and requirements through in-depth discussions to create a tailored solution.",
      icon: "🔍",
    },
    {
      step: "02",
      title: "Wireframing & UI/UX Design",
      description:
        "Our designers create intuitive and visually appealing interfaces that enhance user experience and align with your brand.",
      icon: "🎨",
    },
    {
      step: "03",
      title: "Development & Testing",
      description:
        "Our expert developers build your solution using agile methodologies with regular updates and comprehensive testing.",
      icon: "💻",
    },
    {
      step: "04",
      title: "Deployment & Maintenance",
      description:
        "We deploy your solution and provide ongoing support and maintenance to ensure optimal performance and security.",
      icon: "🚀",
    },
  ]

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-gray-950" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">Our Process</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            We follow a structured approach to ensure successful project delivery and client satisfaction.
          </p>
        </motion.div>

        {/* Process Steps - Desktop View */}
        <div className="hidden md:grid grid-cols-4 gap-8 mb-12">
          {processSteps.map((step, index) => (
            <ProcessStepCard key={index} step={step} index={index} />
          ))}
        </div>

        {/* Process Steps - Mobile View (Vertical Timeline) */}
        <div className="md:hidden space-y-12 mb-12">
          {processSteps.map((step, index) => (
            <div key={index} className="relative">
              {/* Vertical connector line */}
              {index < processSteps.length - 1 && (
                <div className="absolute top-full left-6 w-0.5 h-12 bg-gradient-to-b from-purple-500 to-transparent"></div>
              )}
              <ProcessStepCard step={step} index={index} />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button
            onClick={() => router.push("/contact")}
            className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-6 text-lg"
          >
            Start Your Project
            <ChevronRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  )
}

