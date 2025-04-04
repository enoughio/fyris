"use client"

import { motion } from "framer-motion"
import TestimonialCard from "./testimonial-card"

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Rajesh Kumar",
      position: "CTO",
      company: "TechSolutions Bhopal",
      testimonial:
        "Ignivox transformed our outdated systems into a cutting-edge digital platform. Their AI-powered solutions have increased our operational efficiency by 40%.",
      rating: 5,
    },
    {
      name: "Priya Sharma",
      position: "CEO",
      company: "InnovateMP",
      testimonial:
        "Working with Ignivox was a game-changer for our startup. Their team delivered a mobile app that exceeded our expectations and helped us secure additional funding.",
      rating: 5,
    },
    {
      name: "Amit Patel",
      position: "Marketing Director",
      company: "Bhopal Retail Group",
      testimonial:
        "The e-commerce platform developed by Ignivox has significantly increased our online sales. Their attention to detail and focus on user experience is unmatched.",
      rating: 4,
    },
    {
      name: "Sunita Jain",
      position: "Operations Manager",
      company: "MP Healthcare",
      testimonial:
        "Ignivox helped us implement a secure patient management system that streamlined our operations. Their cybersecurity expertise was invaluable to our healthcare practice.",
      rating: 5,
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-gray-950 to-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">What Our Clients Say</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our clients from Bhopal and across Madhya Pradesh have to say
            about working with us.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              name={testimonial.name}
              position={testimonial.position}
              company={testimonial.company}
              testimonial={testimonial.testimonial}
              rating={testimonial.rating}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

