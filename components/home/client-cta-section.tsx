"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import { ChevronRight, ExternalLink } from "lucide-react"

export default function ClientCTASection() {
  const router = useRouter()

  return (
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
  )
}
