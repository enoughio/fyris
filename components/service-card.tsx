"use client"

import type React from "react"

import { useState, useRef } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { ChevronRight } from "lucide-react"

interface ServiceCardProps {
  title: string
  description: string
  icon: React.ReactNode
  href: string
  gradient: string
}

export default function ServiceCard({ title, description, icon, href, gradient }: ServiceCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)

  // Calculate tilt effect based on mouse position
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return

    const card = cardRef.current
    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    const centerX = rect.width / 2
    const centerY = rect.height / 2

    const rotateX = (y - centerY) / 20
    const rotateY = (centerX - x) / 20

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
  }

  const handleMouseLeave = () => {
    if (!cardRef.current) return
    cardRef.current.style.transform = "perspective(1000px) rotateX(0) rotateY(0)"
    setIsHovered(false)
  }

  return (
    <motion.div
      ref={cardRef}
      className={cn(
        "glass-card p-6 h-full transition-all duration-300",
        isHovered ? "shadow-lg shadow-purple-500/20" : "",
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className={cn("w-12 h-12 rounded-lg flex items-center justify-center mb-4", gradient)}>{icon}</div>

      <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>

      <p className="text-gray-400 mb-4">{description}</p>

      <Link href={href} className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors">
        Learn more
        <ChevronRight className="ml-1 h-4 w-4" />
      </Link>

      {/* Gradient border effect on hover */}
      <motion.div
        className="absolute inset-0 rounded-lg pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        style={{
          background: `linear-gradient(to right, ${gradient.split("from-")[1].split(" ")[0]}, ${gradient.split("to-")[1].split(" ")[0]})`,
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
