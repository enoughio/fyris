"use client"

import type React from "react"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Canvas } from "@react-three/fiber"
import { Float, OrbitControls, Sphere, MeshDistortMaterial, RoundedBox, Torus } from "@react-three/drei"
import HeroSection from "@/components/hero-section"
import ServicesSection from "@/components/services-section"
import StatsSection from "@/components/stats-section"
import CaseStudiesSection from "@/components/case-studies-section"
import TestimonialsSection from "@/components/testimonials-section"
import ProcessSection from "@/components/process-section"
import CTASection from "@/components/cta-section"

// Enhanced 3D Scene Component
function EnhancedHero3D() {
  return (
    <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
      <pointLight position={[-10, -10, -10]} intensity={0.5} />

      {/* Main sphere representing digital transformation */}
      <Float speed={1.5} rotationIntensity={1} floatIntensity={2}>
        <Sphere args={[2, 64, 64]} position={[0, 0, 0]}>
          <MeshDistortMaterial
            color="#8b5cf6"
            attach="material"
            distort={0.4}
            speed={1.5}
            roughness={0.2}
            metalness={0.8}
            emissive="#8b5cf6"
            emissiveIntensity={0.4}
          />
        </Sphere>
      </Float>

      {/* Orbiting elements representing different technologies */}
      <Float speed={5} rotationIntensity={2} floatIntensity={1}>
        <RoundedBox args={[0.5, 0.5, 0.5]} radius={0.1} position={[3, 1, 1]}>
          <meshStandardMaterial color="#3b82f6" emissive="#3b82f6" emissiveIntensity={0.5} />
        </RoundedBox>
      </Float>

      <Float speed={4} rotationIntensity={1.5} floatIntensity={1}>
        <Torus args={[0.4, 0.1, 16, 32]} position={[-3, -1, 1]}>
          <meshStandardMaterial color="#06b6d4" emissive="#06b6d4" emissiveIntensity={0.5} />
        </Torus>
      </Float>

      <Float speed={3} rotationIntensity={1} floatIntensity={1}>
        <RoundedBox args={[0.6, 0.6, 0.6]} radius={0.1} position={[2, -2, -1]}>
          <meshStandardMaterial color="#8b5cf6" emissive="#8b5cf6" emissiveIntensity={0.5} />
        </RoundedBox>
      </Float>

      <Float speed={6} rotationIntensity={2} floatIntensity={1}>
        <Torus args={[0.3, 0.1, 16, 32]} position={[-2, 2, -1]}>
          <meshStandardMaterial color="#ec4899" emissive="#ec4899" emissiveIntensity={0.5} />
        </Torus>
      </Float>

      {/* Connection lines */}
      {[
        [3, 1, 1, 0, 0, 0],
        [-3, -1, 1, 0, 0, 0],
        [2, -2, -1, 0, 0, 0],
        [-2, 2, -1, 0, 0, 0],
      ].map((points, i) => (
        <line key={i}>
          <bufferGeometry attach="geometry">
            <float32BufferAttribute
              attach="attributes-position"
              array={new Float32Array(points)}
              count={2}
              itemSize={3}
            />
          </bufferGeometry>
          <lineBasicMaterial attach="material" color="#8b5cf6" opacity={0.5} transparent />
        </line>
      ))}

      {/* Particles */}
      {Array.from({ length: 50 }).map((_, i) => {
        const x = (Math.random() - 0.5) * 10
        const y = (Math.random() - 0.5) * 10
        const z = (Math.random() - 0.5) * 10
        return (
          <mesh key={i} position={[x, y, z]}>
            <sphereGeometry args={[0.05, 8, 8]} />
            <meshBasicMaterial color="#8b5cf6" transparent opacity={0.6} />
          </mesh>
        )
      })}

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.5}
        minPolarAngle={Math.PI / 3}
        maxPolarAngle={Math.PI / 1.5}
      />
    </Canvas>
  )
}

// Service Card Component
function ServiceCard({
  title,
  description,
  icon,
  gradient,
  index,
}: {
  title: string
  description: string
  icon: React.ReactNode
  gradient: string
  index: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -10, scale: 1.02 }}
      className="glass-card p-6 h-full relative overflow-hidden"
    >
      <div className={`w-16 h-16 rounded-lg ${gradient} flex items-center justify-center mb-6`}>{icon}</div>

      <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
      <p className="text-gray-400 mb-6">{description}</p>

      <div className="flex items-center text-purple-400 group">
        <span className="mr-2 transition-all duration-300 group-hover:mr-3">Learn more</span>
        <ArrowRight className="h-4 w-4 transition-all duration-300 group-hover:translate-x-1" />
      </div>

      {/* Gradient border effect on hover */}
      <motion.div
        className="absolute inset-0 rounded-lg pointer-events-none"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        style={{
          background: gradient,
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

// Stats Counter Component
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

// Case Study Card Component
function CaseStudyCard({
  title,
  category,
  description,
  image,
  index,
}: {
  title: string
  category: string
  description: string
  image: string
  index: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -10 }}
      className="glass-card overflow-hidden group cursor-pointer"
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={image || "/placeholder.svg"}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-70" />
        <div className="absolute bottom-4 left-4">
          <Badge className="bg-gradient-to-r from-purple-600 to-blue-600">{category}</Badge>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">{title}</h3>
        <p className="text-gray-400 mb-4 line-clamp-2">{description}</p>

        <div className="flex items-center text-purple-400 group">
          <span className="mr-2 transition-all duration-300 group-hover:mr-3">View Project</span>
          <ArrowRight className="h-4 w-4 transition-all duration-300 group-hover:translate-x-1" />
        </div>
      </div>
    </motion.div>
  )
}

// Process Step Component
function ProcessStep({
  number,
  title,
  description,
  icon,
  index,
}: {
  number: string
  title: string
  description: string
  icon: string
  index: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="glass-card p-6 relative overflow-hidden"
    >
      {/* Step number */}
      <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 flex items-center justify-center">
        <span className="text-white font-bold">{number}</span>
      </div>

      <div className="text-4xl mb-4 mt-4">{icon}</div>
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </motion.div>
  )
}

// Testimonial Card Component
function TestimonialCard({
  name,
  position,
  company,
  testimonial,
  index,
}: {
  name: string
  position: string
  company: string
  testimonial: string
  index: number
}) {
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

export default function ClientPage() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <StatsSection />
      <CaseStudiesSection />
      <TestimonialsSection />
      <ProcessSection />
      <CTASection />
    </>
  )
}
