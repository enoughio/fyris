"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import { ChevronRight, ArrowRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import Hero3D from "./hero-3d"

export default function HeroSection() {
  const router = useRouter()

  return (
    <section className="min-h-screen flex items-center pt-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950"></div>

      {/* Diagonal divider */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-br from-purple-900/30 to-blue-900/30 transform -skew-x-12"></div>
      </div>

      {/* Animated background shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-20 w-64 h-64 rounded-full bg-purple-600/10 blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 15,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-80 h-80 rounded-full bg-blue-600/10 blur-3xl"
          animate={{
            x: [0, -50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 18,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }}>
            <Badge className="bg-gradient-to-r from-purple-600 to-blue-600 mb-4">Software Development Agency</Badge>

            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-white">Transforming Ideas into </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-cyan-400 to-blue-400">
                Cutting-Edge Software
              </span>
            </h1>

            <p className="text-xl text-gray-300 mb-6">
              We build AI-powered, scalable, and futuristic digital solutions for businesses in Bhopal and beyond.
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <div className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-purple-500 mr-2"></div>
                <span className="text-gray-300">Web Development</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-blue-500 mr-2"></div>
                <span className="text-gray-300">Mobile Apps</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-cyan-500 mr-2"></div>
                <span className="text-gray-300">AI Solutions</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-teal-500 mr-2"></div>
                <span className="text-gray-300">Cloud Services</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={() => router.push("/contact")}
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-6 text-lg"
              >
                Get a Free Consultation
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                onClick={() => router.push("/portfolio")}
                variant="outline"
                className="border-purple-500/50 hover:border-purple-500 text-white px-8 py-6 text-lg"
              >
                View Our Work
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="hidden lg:block h-[500px]"
          >
            <Hero3D />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
