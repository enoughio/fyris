"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { Star } from "lucide-react"

interface TestimonialCardProps {
  name: string
  position: string
  company: string
  testimonial: string
  rating: number
  image?: string
}

export default function TestimonialCard({ name, position, company, testimonial, rating, image }: TestimonialCardProps) {
  return (
    <motion.div
      className="glass-card p-6 h-full"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center mb-4">
        <div className="flex-shrink-0 mr-4">
          <div className="w-12 h-12 rounded-full overflow-hidden bg-gradient-to-br from-purple-500 to-blue-500">
            {image ? (
              <img src={image || "/placeholder.svg"} alt={name} className="w-full h-full object-cover" />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-white font-bold">
                {name.charAt(0)}
              </div>
            )}
          </div>
        </div>
        <div>
          <h4 className="text-white font-semibold">{name}</h4>
          <p className="text-gray-400 text-sm">
            {position}, {company}
          </p>
        </div>
      </div>

      <div className="flex mb-3">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={cn("h-4 w-4 mr-1", i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-600")}
          />
        ))}
      </div>

      <p className="text-gray-300 italic">"{testimonial}"</p>

      {/* Gradient border */}
      <div
        className="absolute inset-0 rounded-lg pointer-events-none"
        style={{
          background: "linear-gradient(to right, #8b5cf6, #3b82f6)",
          mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          maskComposite: "exclude",
          WebkitMaskComposite: "xor",
          maskClip: "padding-box, border-box",
          padding: "1px",
          borderRadius: "0.5rem",
          opacity: 0.5,
        }}
      />
    </motion.div>
  )
}
