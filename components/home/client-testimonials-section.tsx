"use client"

import { motion } from "framer-motion"

interface TestimonialCardProps {
  name: string
  position: string
  company: string
  testimonial: string
  index: number
}

function TestimonialCard({ name, position, company, testimonial, index }: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="glass-card p-6 relative overflow-hidden"
    >
      <div className="absolute -top-10 -right-10 text-8xl text-gray-800 opacity-20">"</div>

      <p className="text-gray-300 italic mb-6">"{testimonial}"</p>

      <div className="flex items-center">
        <div className="w-12 h-12 rounded-full overflow-hidden bg-gradient-to-r from-purple-500 to-blue-500 mr-4">
          <div className="w-full h-full flex items-center justify-center text-white font-bold">{name.charAt(0)}</div>
        </div>
        <div>
          <h4 className="text-white font-semibold">{name}</h4>
          <p className="text-gray-400 text-sm">
            {position}, {company}
          </p>
        </div>
      </div>
    </motion.div>
  )
}

interface ClientTestimonialsSectionProps {
  testimonials: {
    name: string
    position: string
    company: string
    testimonial: string
  }[]
}

export default function ClientTestimonialsSection({ testimonials }: ClientTestimonialsSectionProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {testimonials.map((testimonial, index) => (
        <TestimonialCard
          key={index}
          name={testimonial.name}
          position={testimonial.position}
          company={testimonial.company}
          testimonial={testimonial.testimonial}
          index={index}
        />
      ))}
    </div>
  )
}
