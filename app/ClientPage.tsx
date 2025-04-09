"use client"

import type React from "react"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import { ChevronRight, Check, ExternalLink } from "lucide-react"

// Import all the sections
import HeroSection from "@/components/hero-section"
import ServicesSection from "@/components/services-section"
import CaseStudiesSection from "@/components/case-studies-section"
import TestimonialsSection from "@/components/testimonials-section"
import ProcessSection from "@/components/process-section"

// Parallax Section
function ParallaxSection({ children }: { children: React.ReactNode }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, -100])

  return (
    <motion.div ref={ref} style={{ y }} className="relative">
      {children}
    </motion.div>
  )
}

// Stats Counter Component
function StatsCounter({
  value,
  suffix = "+",
  title,
  icon,
  index,
}: {
  value: number
  suffix?: string
  title: string
  icon: string
  index: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="glass-card p-6 text-center"
    >
      <div className="text-4xl mb-4">{icon}</div>
      <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 mb-2">
        {value}
        {suffix}
      </div>
      <p className="text-gray-300">{title}</p>
    </motion.div>
  )
}

export default function ClientPage() {
  const router = useRouter()

  return (
    <>
      {/* Hero Section */}
      <HeroSection />

      {/* Services Section */}
      <ServicesSection />

      {/* Stats Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-blue-900/20"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ParallaxSection>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <StatsCounter value={7} title="Team Members" icon="👥" index={0} />
              <StatsCounter value={8} title="Projects Completed" icon="🚀" index={1} />
              <StatsCounter value={1} title="Year of Experience" icon="⏱️" index={2} />
              <StatsCounter value={95} suffix="%" title="Client Satisfaction" icon="⭐" index={3} />
            </div>
          </ParallaxSection>
        </div>
      </section>

      {/* Case Studies Section */}
      <CaseStudiesSection />

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* Process Section */}
      <ProcessSection />

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-gray-950"></div>

        {/* Animated background shapes */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-0 left-0 w-64 h-64 rounded-full bg-purple-600/10 blur-3xl"
            animate={{
              x: [0, 100, 0],
              y: [0, 50, 0],
            }}
            transition={{
              duration: 20,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
          />
          <motion.div
            className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-blue-600/10 blur-3xl"
            animate={{
              x: [0, -100, 0],
              y: [0, -50, 0],
            }}
            transition={{
              duration: 25,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
          />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="glass p-8 md:p-12 rounded-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-cyan-400 to-blue-400">
                    Ready to Transform Your Business?
                  </span>
                </h2>
                <p className="text-xl text-gray-300 mb-6">
                  Let's collaborate to build innovative solutions that drive growth and efficiency for your business in
                  Bhopal and beyond.
                </p>
                <ul className="space-y-3 mb-8">
                  {[
                    "Custom solutions tailored to your specific needs",
                    "Expert team with deep technical expertise",
                    "Transparent communication throughout the project",
                    "Ongoing support and maintenance",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="h-5 w-5 text-purple-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex flex-col items-center justify-center"
              >
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">Start Your Digital Journey Today</h3>
                  <p className="text-gray-400">Schedule a free consultation with our experts</p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md">
                  <Button
                    onClick={() => router.push("/contact")}
                    className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-6 text-lg flex-1"
                  >
                    Contact Us
                    <ChevronRight className="ml-2 h-5 w-5" />
                  </Button>
                  <Button
                    onClick={() => router.push("/portfolio")}
                    variant="outline"
                    className="border-purple-500/50 hover:border-purple-500 text-white px-8 py-6 text-lg flex-1"
                  >
                    View Our Work
                    <ExternalLink className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
