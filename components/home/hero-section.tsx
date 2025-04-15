import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ChevronRight, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center pt-16 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950"></div>

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

        {/* Gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-purple-600/10 blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-blue-600/10 blur-3xl"></div>

        {/* Animated lines */}
        <div className="absolute top-1/3 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent"></div>
        <div className="absolute top-2/3 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"></div>

        {/* Particles */}
        <div className="absolute inset-0">
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                opacity: Math.random() * 0.5 + 0.2,
                animation: `pulse ${Math.random() * 5 + 3}s infinite alternate`,
              }}
            ></div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Text Content */}
          <div>
            <Badge className="bg-gradient-to-r from-purple-600 to-blue-600 mb-3 py-1/2 px-3 text-sm ">
              Software Development Agency
            </Badge>

            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="text-white">We Build </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-cyan-400 to-blue-400">
                Digital Solutions
              </span>
              <span className="text-white"> That Drive Growth</span>
            </h1>

            <div className="h-1 w-32 bg-gradient-to-r from-purple-500 to-blue-500 mb-8"></div>

            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              FYRIS delivers AI-powered, scalable, and future-ready digital solutions for businesses. Our expertise
              spans web development, mobile apps, AI integration, and cloud services.
            </p>

            {/* <div className="grid grid-cols-2 gap-4 mb-8">
              {[
                { label: "Web Development", color: "bg-purple-500" },
                { label: "Mobile Apps", color: "bg-blue-500" },
                { label: "AI Solutions", color: "bg-cyan-500" },
                { label: "Cloud Services", color: "bg-teal-500" },
              ].map((item, index) => (
                <div key={index} className="flex items-center">
                  <div className={`w-3 h-3 rounded-full ${item.color} mr-3`}></div>
                  <span className="text-gray-300">{item.label}</span>
                </div>
              ))}
            </div> */}

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-6 text-lg"
                asChild
              >
                <Link href="/contact">
                  Get a Free Consultation
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                variant="outline"
                className="border-purple-500/50 hover:border-purple-500 text-white px-8 py-6 text-lg"
                asChild
              >
                <Link href="/portfolio">
                  View Our Work
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Right Column - Visual Element */}
          <div className="hidden lg:block relative">
            {/* Abstract geometric shapes */}
            <div className="relative h-[600px] w-full">
              {/* Large circle */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full border-2 border-purple-500/20 animate-pulse-slow"></div>

              {/* Medium circle */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full border-2 border-blue-500/30 animate-reverse-spin"></div>

              {/* Small circle */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full border-2 border-cyan-500/40 animate-spin-slow"></div>

              {/* Center element */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-xl rotate-45 backdrop-blur-sm border border-white/10"></div>

              {/* Floating elements */}
              {[
                {
                  size: "w-12 h-12",
                  color: "bg-purple-500/20",
                  position: "top-20 left-20",
                  animation: "animate-float-slow",
                },
                {
                  size: "w-8 h-8",
                  color: "bg-blue-500/20",
                  position: "bottom-40 right-20",
                  animation: "animate-float-medium",
                },
                {
                  size: "w-10 h-10",
                  color: "bg-cyan-500/20",
                  position: "top-40 right-40",
                  animation: "animate-float-fast",
                },
                {
                  size: "w-6 h-6",
                  color: "bg-teal-500/20",
                  position: "bottom-20 left-40",
                  animation: "animate-float-slow",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className={`absolute ${item.position} ${item.size} ${item.color} rounded-lg backdrop-blur-sm border border-white/10 ${item.animation}`}
                ></div>
              ))}

              {/* Connecting lines */}
              <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <line x1="20%" y1="20%" x2="50%" y2="50%" stroke="url(#purple-gradient)" strokeWidth="1" />
                <line x1="80%" y1="20%" x2="50%" y2="50%" stroke="url(#blue-gradient)" strokeWidth="1" />
                <line x1="80%" y1="80%" x2="50%" y2="50%" stroke="url(#cyan-gradient)" strokeWidth="1" />
                <line x1="20%" y1="80%" x2="50%" y2="50%" stroke="url(#teal-gradient)" strokeWidth="1" />

                <defs>
                  <linearGradient id="purple-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="rgba(147, 51, 234, 0.1)" />
                    <stop offset="100%" stopColor="rgba(147, 51, 234, 0.4)" />
                  </linearGradient>
                  <linearGradient id="blue-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="rgba(59, 130, 246, 0.1)" />
                    <stop offset="100%" stopColor="rgba(59, 130, 246, 0.4)" />
                  </linearGradient>
                  <linearGradient id="cyan-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="rgba(6, 182, 212, 0.1)" />
                    <stop offset="100%" stopColor="rgba(6, 182, 212, 0.4)" />
                  </linearGradient>
                  <linearGradient id="teal-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="rgba(20, 184, 166, 0.1)" />
                    <stop offset="100%" stopColor="rgba(20, 184, 166, 0.4)" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
