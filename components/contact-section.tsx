"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import { ChevronRight, Mail, Phone, MapPin } from "lucide-react"

export default function ContactSection() {
  const router = useRouter()

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950 to-gray-900" />

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
                <span className="gradient-text">Ready to Transform Your Business?</span>
              </h2>
              <p className="text-xl text-gray-300 mb-6">
                Let's collaborate to build innovative solutions that drive growth and efficiency for your business in
                Bhopal and beyond.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <Mail className="h-5 w-5 text-purple-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-gray-300">thebagaboo@gmail.com</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Phone className="h-5 w-5 text-purple-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-gray-300">+91 9993553513</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <MapPin className="h-5 w-5 text-purple-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-gray-300">MP Nagar, Zone 1, Bhopal, Madhya Pradesh, 462011, India</p>
                  </div>
                </li>
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
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
