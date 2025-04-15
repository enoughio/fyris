"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
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
      className="glass-card p-6 h-full transition-all duration-300 cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => router.push(href)}
      whileHover={{ y: -10, scale: 1.02 }}
    >
      <div className={`w-16 h-16 rounded-lg flex items-center justify-center mb-6 ${gradient}`}>{icon}</div>

      <h3 className="text-xl font-bold mb-3 text-white">{title}</h3>

      <p className="text-gray-400 mb-6">{description}</p>

      <div className="flex items-center text-purple-400 group">
        <span className="mr-2 transition-all duration-300 group-hover:mr-3">Learn more</span>
        <ArrowRight className={`h-4 w-4 transition-all duration-300 ${isHovered ? "translate-x-1" : ""}`} />
      </div>

      {/* Gradient border effect on hover */}
      <motion.div
        className="absolute inset-0 rounded-lg pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        style={{
          background: `linear-gradient(to right, ${gradient.split("from-")[1].split(" ")[0]}, ${
            gradient.split("to-")[1].split(" ")[0]
          })`,
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

interface ClientServicesSectionProps {
  services: {
    title: string
    description: string
    icon: React.ReactNode
    href: string
    gradient: string
  }[]
}

export default function ClientServicesSection({ services }: ClientServicesSectionProps) {
  return (
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
  )
}
