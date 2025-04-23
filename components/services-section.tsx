"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { MonitorSmartphone, BrainCircuit, CloudCog, ShieldCheck, Database, ArrowRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"

interface ServiceCardProps {
  title: string
  description: string
  icon: React.ReactNode
  href: string
  gradient: string
  index: number
}

function ServiceCard({ title, description, icon, href, gradient, index }: ServiceCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const router = useRouter()

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="rounded-xl bg-gradient-to-br from-gray-900 to-gray-950 border border-gray-800 p-6 h-full transition-all duration-300 cursor-pointer relative overflow-hidden group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => router.push(href)}
      whileHover={{ y: -10 }}
    >
      {/* Background gradient that appears on hover */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300"
        style={{ background: gradient.replace("bg-gradient-to-r", "linear-gradient(to right") }}
      ></div>

      <div className={`w-16 h-16 rounded-xl flex items-center justify-center mb-6 ${gradient}`}>{icon}</div>

      <h3 className="text-xl font-bold mb-3 text-white group-hover:text-purple-300 transition-colors">{title}</h3>

      <p className="text-gray-400 mb-6">{description}</p>

      <div className="flex items-center text-purple-400 group mt-auto">
        <span className="mr-2 transition-all duration-300 group-hover:mr-3">Learn more</span>
        <ArrowRight className={`h-4 w-4 transition-all duration-300 ${isHovered ? "translate-x-1" : ""}`} />
      </div>

      {/* Gradient border effect on hover */}
      <motion.div
        className="absolute inset-0 rounded-xl pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        style={{
          background: gradient.replace("bg-gradient-to-r", "linear-gradient(to right"),
          mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          maskComposite: "exclude",
          WebkitMaskComposite: "xor",
          maskClip: "padding-box, border-box",
          padding: "1px",
          borderRadius: "0.75rem",
        }}
      />
    </motion.div>
  )
}

// If this component uses portfolioProjects, update it to use portfolioData
import { portfolioData } from "@/app/portfolio/portfolio-data"

// Replace any instances of portfolioProjects with portfolioData in the component
const featuredProjects = portfolioData.filter((project) => project.isFeatured).slice(0, 3)

export default function ServicesSection() {
  const router = useRouter()

  const services = [
    {
      title: "Software Development",
      description:
        "Scalable & AI-driven custom software solutions tailored to your business needs with cutting-edge technologies.",
      icon: <MonitorSmartphone className="h-8 w-8 text-white" />,
      href: "/services#web-development",
      gradient: "bg-gradient-to-r from-purple-600 to-blue-600",
    },
    {
      title: "Mobile App Development",
      description:
        "Cross-platform mobile applications for iOS and Android with native-like performance and stunning UI/UX.",
      icon: <Database className="h-8 w-8 text-white" />,
      href: "/services#mobile-apps",
      gradient: "bg-gradient-to-r from-indigo-500 to-purple-600",
    },
    {
      title: "Cloud & DevOps",
      description:
        "Expert guidance on AWS, Azure, and Kubernetes to optimize your infrastructure for performance and cost-efficiency.",
      icon: <CloudCog className="h-8 w-8 text-white" />,
      href: "/services#cloud-devops",
      gradient: "bg-gradient-to-r from-blue-500 to-indigo-600",
    },
    {
      title: "Cybersecurity & Blockchain",
      description:
        "Protect your digital assets with advanced security solutions and leverage blockchain for transparency and trust.",
      icon: <ShieldCheck className="h-8 w-8 text-white" />,
      href: "/services#cybersecurity",
      gradient: "bg-gradient-to-r from-purple-500 to-pink-500",
    },
    {
      title: "AI & Automation",
      description:
        "Leverage the power of artificial intelligence and machine learning to automate processes and gain valuable insights.",
      icon: <BrainCircuit className="h-8 w-8 text-white" />,
      href: "/services#ai-automation",
      gradient: "bg-gradient-to-r from-cyan-500 to-blue-500",
    },
  ]

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950 to-gray-900" />

      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(120,50,255,0.15),transparent_40%)]"></div>
          <div className="absolute bottom-0 left-0 w-full h-full bg-[radial-gradient(circle_at_70%_80%,rgba(50,120,255,0.15),transparent_40%)]"></div>
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
          <Badge className="bg-gradient-to-r from-purple-600 to-blue-600 mb-4">Our Services</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">What We Do</span>
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
              href={service.href}
              gradient={service.gradient}
              index={index}
            />
          ))}
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
            onClick={() => router.push("/services")}
          >
            View All Services
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
