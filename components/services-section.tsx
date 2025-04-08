"use client"

import type React from "react"
import { motion } from "framer-motion"
import { ArrowRight, Code, Brain, Cloud, Smartphone, Shield } from "lucide-react"

interface ServiceCardProps {
  title: string
  description: string
  icon: React.ReactNode
  gradient: string
  index: number
}

function ServiceCard({ title, description, icon, gradient, index }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -10, scale: 1.02 }}
      className="glass-card p-6 h-full relative overflow-hidden"
    >
      <div className={`w-16 h-16 rounded-lg ${gradient} flex items-center justify-center mb-6`}>{icon}</div>

      <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
      <p className="text-gray-400 mb-6">{description}</p>

      <div className="flex items-center text-purple-400 group">
        <span className="mr-2 transition-all duration-300 group-hover:mr-3">Learn more</span>
        <ArrowRight className="h-4 w-4 transition-all duration-300 group-hover:translate-x-1" />
      </div>

      {/* Gradient border effect on hover */}
      <motion.div
        className="absolute inset-0 rounded-lg pointer-events-none"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        style={{
          background: gradient,
          mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          maskComposite: "exclude",
          WebkitMaskComposite: "xor",
          maskClip: "padding-box, border-box",
          padding: "1px",
          borderRadius: "0.5rem",
        }}
      />
    </motion.div>
  )
}

export default function ServicesSection() {
  const services = [
    {
      title: "Web Development",
      description:
        "Custom websites and web applications built with cutting-edge technologies for optimal performance and user experience.",
      icon: <Code className="h-8 w-8 text-white" />,
      gradient: "bg-gradient-to-r from-purple-600 to-blue-600",
    },
    {
      title: "Mobile App Development",
      description:
        "Cross-platform mobile applications for iOS and Android with native-like performance and stunning UI/UX.",
      icon: <Smartphone className="h-8 w-8 text-white" />,
      gradient: "bg-gradient-to-r from-indigo-500 to-purple-600",
    },
    {
      title: "AI & Automation",
      description:
        "Leverage the power of artificial intelligence and machine learning to automate processes and gain valuable insights.",
      icon: <Brain className="h-8 w-8 text-white" />,
      gradient: "bg-gradient-to-r from-cyan-500 to-blue-500",
    },
    {
      title: "Cloud & DevOps",
      description:
        "Expert guidance on AWS, Azure, and Kubernetes to optimize your infrastructure for performance and cost-efficiency.",
      icon: <Cloud className="h-8 w-8 text-white" />,
      gradient: "bg-gradient-to-r from-blue-500 to-indigo-600",
    },
    {
      title: "Cybersecurity",
      description:
        "Protect your digital assets with advanced security solutions and leverage blockchain for transparency and trust.",
      icon: <Shield className="h-8 w-8 text-white" />,
      gradient: "bg-gradient-to-r from-purple-500 to-pink-500",
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
              What We Do
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            We deliver cutting-edge software solutions tailored to your business needs, leveraging the latest
            technologies and best practices.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              gradient={service.gradient}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
