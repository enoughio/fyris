"use client"

import { motion } from "framer-motion"

interface ProcessStepProps {
  number: string
  title: string
  description: string
  icon: string
  index: number
}

function ProcessStep({ number, title, description, icon, index }: ProcessStepProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="glass-card p-6 relative overflow-hidden"
    >
      {/* Step number */}
      <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 flex items-center justify-center">
        <span className="text-white font-bold">{number}</span>
      </div>

      <div className="text-4xl mb-4 mt-4">{icon}</div>
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </motion.div>
  )
}

export default function ProcessSection() {
  const processSteps = [
    {
      number: "01",
      title: "Discovery",
      description: "We start by understanding your business, goals, and requirements through in-depth discussions.",
      icon: "🔍",
    },
    {
      number: "02",
      title: "Planning",
      description: "We create a detailed project plan, including timelines, milestones, and resource allocation.",
      icon: "📝",
    },
    {
      number: "03",
      title: "Development",
      description: "Our team builds your solution using agile methodologies with regular updates and feedback.",
      icon: "💻",
    },
    {
      number: "04",
      title: "Delivery",
      description: "We deploy your solution and provide ongoing support and maintenance as needed.",
      icon: "🚀",
    },
  ]

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950 to-gray-900"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-cyan-400 to-blue-400">
              Our Process
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            We follow a structured approach to ensure successful project delivery and client satisfaction.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processSteps.map((step, index) => (
            <ProcessStep
              key={index}
              number={step.number}
              title={step.title}
              description={step.description}
              icon={step.icon}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
