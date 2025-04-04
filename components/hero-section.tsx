"use client"

import { useRef, useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { useRouter } from "next/navigation"
import { ChevronRight, ArrowRight } from "lucide-react"
import * as THREE from "three"
import { Canvas, useFrame, useThree } from "@react-three/fiber"
import { Float, OrbitControls, Environment, Sphere, MeshDistortMaterial } from "@react-three/drei"

// Digital Globe Component
function DigitalGlobe({ scale = 1.5 }) {
  const meshRef = useRef()
  const [hovered, setHovered] = useState(false)
  const [active, setActive] = useState(false)

  // Mouse position for interactive rotation
  const { viewport, mouse } = useThree()

  useEffect(() => {
    document.body.style.cursor = hovered ? "pointer" : "auto"
  }, [hovered])

  useFrame((state) => {
    if (meshRef.current) {
      // Base rotation
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.1

      // Interactive rotation based on mouse position
      meshRef.current.rotation.x = THREE.MathUtils.lerp(meshRef.current.rotation.x, mouse.y * 0.2, 0.05)
      meshRef.current.rotation.y = THREE.MathUtils.lerp(
        meshRef.current.rotation.y,
        mouse.x * 0.2 + state.clock.getElapsedTime() * 0.1,
        0.05,
      )
    }
  })

  return (
    <group scale={scale}>
      {/* Main globe */}
      <Sphere args={[1, 64, 64]} ref={meshRef} position={[0, 0, 0]}>
        <MeshDistortMaterial
          color="#8b5cf6"
          attach="material"
          distort={0.3}
          speed={2}
          roughness={0.4}
          metalness={0.8}
          emissive="#8b5cf6"
          emissiveIntensity={0.5}
        />
      </Sphere>

      {/* Connection nodes */}
      {[...Array(12)].map((_, i) => {
        const theta = Math.random() * Math.PI * 2
        const phi = Math.acos(2 * Math.random() - 1)
        const x = 1.2 * Math.sin(phi) * Math.cos(theta)
        const y = 1.2 * Math.sin(phi) * Math.sin(theta)
        const z = 1.2 * Math.cos(phi)

        return (
          <group key={i} position={[x, y, z]}>
            <mesh>
              <sphereGeometry args={[0.05, 16, 16]} />
              <meshStandardMaterial color="#6366f1" emissive="#6366f1" emissiveIntensity={1} />
            </mesh>

            {/* Connection line to center */}
            <line>
              <bufferGeometry attach="geometry">
                <float32BufferAttribute
                  attach="attributes-position"
                  array={new Float32Array([0, 0, 0, -x, -y, -z])}
                  count={2}
                  itemSize={3}
                />
              </bufferGeometry>
              <lineBasicMaterial attach="material" color="#6366f1" opacity={0.5} transparent />
            </line>
          </group>
        )
      })}

      {/* Orbiting data cubes */}
      {[...Array(5)].map((_, i) => {
        const angle = (i / 5) * Math.PI * 2
        const radius = 1.8

        return (
          <Float
            key={i}
            position={[radius * Math.cos(angle), (Math.random() - 0.5) * 0.5, radius * Math.sin(angle)]}
            rotation={[Math.random() * Math.PI, Math.random() * Math.PI, Math.random() * Math.PI]}
            rotationIntensity={0.6}
            floatIntensity={0.6}
            speed={2}
          >
            <mesh>
              <boxGeometry args={[0.1, 0.1, 0.1]} />
              <meshStandardMaterial
                color="#6366f1"
                emissive="#6366f1"
                emissiveIntensity={1}
                transparent
                opacity={0.8}
              />
            </mesh>
          </Float>
        )
      })}
    </group>
  )
}

// Particles background
function Particles() {
  const particlesRef = useRef()
  const count = 300

  // Create particles
  const particlesPosition = new Float32Array(count * 3)
  for (let i = 0; i < count; i++) {
    const i3 = i * 3
    particlesPosition[i3] = (Math.random() - 0.5) * 10
    particlesPosition[i3 + 1] = (Math.random() - 0.5) * 10
    particlesPosition[i3 + 2] = (Math.random() - 0.5) * 10
  }

  useFrame((state) => {
    const t = state.clock.getElapsedTime() * 0.05
    particlesRef.current.rotation.y = t
  })

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={count} array={particlesPosition} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial size={0.03} color="#8b5cf6" sizeAttenuation transparent opacity={0.6} />
    </points>
  )
}

export default function HeroSection() {
  const router = useRouter()

  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 z-0" />

      {/* Animated Digital Globe */}
      <div className="absolute inset-0 z-10 opacity-70">
        <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
          <Particles />
          <DigitalGlobe />
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            rotateSpeed={0.5}
            minPolarAngle={Math.PI / 3}
            maxPolarAngle={Math.PI / 1.5}
          />
          <Environment preset="night" />
        </Canvas>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                <span className="gradient-text">Transforming Ideas into Cutting-Edge Software.</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-6">
                We build AI-powered, scalable, and futuristic digital solutions for businesses worldwide.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  onClick={() => router.push("/contact")}
                  className="glass-card bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-6 text-lg"
                >
                  Get a Free Consultation
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  onClick={() => {
                    // Scroll to case studies section
                    document.getElementById("case-studies")?.scrollIntoView({ behavior: "smooth" })
                  }}
                  variant="outline"
                  className="glass-card border-purple-500/50 hover:border-purple-500 text-white px-8 py-6 text-lg"
                >
                  View Our Work
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </motion.div>
          </div>

          <div className="hidden lg:block">
            {/* This space is intentionally left empty as the 3D animation covers this area */}
          </div>
        </div>
      </div>
    </section>
  )
}

