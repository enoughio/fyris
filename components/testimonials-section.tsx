"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"

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

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Rajesh Kumar",
      position: "CTO",
      company: "TechSolutions Bhopal",
      testimonial:
        "Ignivox helped us create a modern website that perfectly represents our brand. Despite being a new agency, their team showed exceptional skill and dedication.",
    },
    {
      name: "Priya Sharma",
      position: "CEO",
      company: "InnovateMP",
      testimonial:
        "As a startup ourselves, we appreciated Ignivox's fresh perspective and innovative approach. They delivered our mobile app on time and within budget.",
    },
    {
      name: "Amit Patel",
      position: "Marketing Director",
      company: "Bhopal Retail Group",
      testimonial:
        "We took a chance on this new agency and were pleasantly surprised. Their attention to detail and responsive communication made the project a success.",
    },
  ]

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-blue-900/20"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <Badge className="bg-gradient-to-r from-purple-600 to-blue-600 mb-4">Testimonials</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-cyan-400 to-blue-400">
              What Our Clients Say
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say about working with us.
          </p>
        </motion.div>

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
      </div>
    </section>
  )
}
