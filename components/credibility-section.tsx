"use client"

import { useState, useRef, useEffect } from "react"
import { motion, useAnimation, useInView } from "framer-motion"
import { Star } from "lucide-react"

// Animated counter component
function Counter({
  value,
  duration = 2,
  title,
  icon,
}: { value: number; duration?: number; title: string; icon: string }) {
  const [count, setCount] = useState(0)
  const controls = useAnimation()
  const ref = useRef(null)
  const inView = useInView(ref)

  useEffect(() => {
    if (inView) {
      let start = 0
      const end = value
      const totalFrames = Math.round(duration * 60)
      const increment = end / totalFrames

      const counter = setInterval(() => {
        start += increment
        if (start > end) {
          setCount(end)
          clearInterval(counter)
        } else {
          setCount(Math.floor(start))
        }
      }, 1000 / 60)

      return () => clearInterval(counter)
    }
  }, [inView, value, duration])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="glass-card p-6 text-center"
    >
      <div className="text-4xl mb-4">{icon}</div>
      <div className="text-4xl font-bold text-white mb-2">
        {count}
        {title === "Client Satisfaction" ? "%" : "+"}
      </div>
      <p className="text-gray-400">{title}</p>
    </motion.div>
  )
}

// Testimonial card component
function TestimonialCard({
  name,
  position,
  company,
  testimonial,
  rating,
  image,
  isActive,
}: {
  name: string
  position: string
  company: string
  testimonial: string
  rating: number
  image?: string
  isActive: boolean
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{
        opacity: isActive ? 1 : 0.5,
        scale: isActive ? 1 : 0.9,
        x: isActive ? 0 : isActive ? -100 : 100,
      }}
      transition={{ duration: 0.5 }}
      className={`glass-card p-6 h-full transition-all duration-300 ${isActive ? "z-10" : "z-0"}`}
    >
      <div className="flex items-center mb-4">
        <div className="flex-shrink-0 mr-4">
          <div className="w-16 h-16 rounded-full overflow-hidden bg-gradient-to-br from-purple-500 to-blue-500">
            {image ? (
              <img src={image || "/placeholder.svg"} alt={name} className="w-full h-full object-cover" />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-white text-2xl font-bold">
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
            className={`h-4 w-4 mr-1 ${i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-600"}`}
          />
        ))}
      </div>

      <p className="text-gray-300 italic">"{testimonial}"</p>
    </motion.div>
  )
}

export default function CredibilitySection() {
  const [activeTestimonial, setActiveTestimonial] = useState(0)

  const testimonials = [
    {
      name: "Rajesh Kumar",
      position: "CTO",
      company: "TechSolutions Bhopal",
      testimonial:
        "Ignivox helped us create a modern website that perfectly represents our brand. Despite being a new agency, their team showed exceptional skill and dedication.",
      rating: 5,
    },
    {
      name: "Priya Sharma",
      position: "CEO",
      company: "InnovateMP",
      testimonial:
        "As a startup ourselves, we appreciated Ignivox's fresh perspective and innovative approach. They delivered our mobile app on time and within budget.",
      rating: 5,
    },
    {
      name: "Amit Patel",
      position: "Marketing Director",
      company: "Bhopal Retail Group",
      testimonial:
        "We took a chance on this new agency and were pleasantly surprised. Their attention to detail and responsive communication made the project a success.",
      rating: 4,
    },
  ]

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [testimonials.length])

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
            <span className="gradient-text">Why Choose Ignivox?</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            We may be new, but we're passionate, innovative, and committed to delivering exceptional results for our
            clients.
          </p>
        </motion.div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          <Counter value={7} title="Team Members" icon="👥" />
          <Counter value={1} title="Years of Experience" icon="⏱️" />
          <Counter value={8} title="Successful Projects" icon="🚀" />
          <Counter value={95} title="Client Satisfaction" icon="⭐" />
        </div>

        {/* Team Section */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-white text-center mb-8">Our Small But Mighty Team</h3>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center text-gray-400 max-w-3xl mx-auto mb-8"
          >
            We're a team of 7 passionate professionals with diverse skills in software development, design, and project
            management. Though we're small, our combined expertise allows us to deliver high-quality solutions for our
            clients.
          </motion.p>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {[1, 2, 3, 4, 5, 6, 7].map((i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 flex items-center justify-center text-white font-bold"
              >
                {["D", "R", "S", "A", "P", "M", "V"][i - 1]}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div>
          <h3 className="text-2xl font-bold text-white text-center mb-8">What Our First Clients Say</h3>

          <div className="relative max-w-3xl mx-auto">
            <div className="relative h-[300px] overflow-hidden">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-all duration-500 ${
                    index === activeTestimonial ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full"
                  }`}
                >
                  <TestimonialCard
                    name={testimonial.name}
                    position={testimonial.position}
                    company={testimonial.company}
                    testimonial={testimonial.testimonial}
                    rating={testimonial.rating}
                    isActive={index === activeTestimonial}
                  />
                </div>
              ))}
            </div>

            {/* Testimonial navigation dots */}
            <div className="flex justify-center mt-6 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === activeTestimonial ? "bg-purple-500 scale-125" : "bg-gray-700 hover:bg-gray-600"
                  }`}
                  aria-label={`View testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
