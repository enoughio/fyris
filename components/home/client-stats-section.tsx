"use client"

import type React from "react"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

function StatsCounter({
  value,
  suffix = "+",
  title,
  icon,
  index,
}: { value: number; suffix?: string; title: string; icon: string; index: number }) {
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

export default function ClientStatsSection() {
  return (
    <ParallaxSection>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <StatsCounter value={7} title="Team Members" icon="👥" index={0} />
        <StatsCounter value={8} title="Projects Completed" icon="🚀" index={1} />
        <StatsCounter value={1} title="Year of Experience" icon="⏱️" index={2} />
        <StatsCounter value={95} suffix="%" title="Client Satisfaction" icon="⭐" index={3} />
      </div>
    </ParallaxSection>
  )
}
