"use client"

import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import { ChevronRight, Users, Award, Target, Zap, ArrowRight, ArrowLeft } from "lucide-react"

// Interactive timeline component
function InteractiveTimeline() {
  const [activeYear, setActiveYear] = useState("2023")

  const timelineItems = [
    {
      id : 1,
      year: "2023",
      title: "Our Beginning",
      description:
        "Fyris was established with a vision to bring cutting-edge technology solutions to businesses in Madhya Pradesh.",
      highlight: "Started with a team of 3 passionate developers",
    },
    {
      id: 2,
      year: "2024",
      title: "Team Growth",
      description: "Expanded our team to 7 talented developers, designers, and project managers.",
      highlight: "Moved to our first office space",
    },
    {
      id: 3,
      year: "2024",
      title: "First Projects",
      description: "Successfully completed our first client projects, establishing our reputation for quality work.",
      highlight: "Delivered 8 successful projects",
    },
    {
      id: 4,
      year: "2025-26",
      title: "Future Goals",
      description: "Looking ahead to expand our services and client base while maintaining our commitment to quality.",
      highlight: "Aiming to double our project portfolio",
    },
  ]

  const activeIndex = timelineItems.findIndex((item) => item.year === activeYear)

  const handlePrevious = () => {
    if (activeIndex > 0) {
      setActiveYear(timelineItems[activeIndex - 1].year)
    }
  }

  const handleNext = () => {
    if (activeIndex < timelineItems.length - 1) {
      setActiveYear(timelineItems[activeIndex + 1].year)
    }
  }

  return (
    <div className="relative">
      {/* Timeline navigation */}
      <div className="flex justify-between items-center mb-8">
        <Button
          variant="outline"
          size="sm"
          onClick={handlePrevious}
          disabled={activeIndex === 0}
          className="border-purple-500/50 hover:border-purple-500 text-white"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Previous
        </Button>

        <div className="flex space-x-2">
          {timelineItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveYear(item.year)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                item.year === activeYear ? "bg-purple-500 scale-125" : "bg-gray-700 hover:bg-gray-600"
              }`}
              aria-label={`View year ${item.year}`}
            />
          ))}
        </div>

        <Button
          variant="outline"
          size="sm"
          onClick={handleNext}
          disabled={activeIndex === timelineItems.length - 1}
          className="border-purple-500/50 hover:border-purple-500 text-white"
        >
          Next
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>

      {/* Active timeline item */}
      <div className="glass-card p-6 relative overflow-hidden">
        {/* Year indicator */}
        <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 flex items-center justify-center transform rotate-12">
          <span className="text-white text-2xl font-bold transform -rotate-12">{activeYear}</span>
        </div>

        {timelineItems.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, x: 20 }}
            animate={{
              opacity: item.year === activeYear ? 1 : 0,
              x: item.year === activeYear ? 0 : 20,
              position: item.year === activeYear ? "relative" : "absolute",
            }}
            transition={{ duration: 0.5 }}
            className={item.year === activeYear ? "block" : "hidden"}
          >
            <h3 className="text-2xl font-bold text-white mb-3">{item.title}</h3>
            <p className="text-gray-300 mb-4">{item.description}</p>
            <div className="bg-gray-800/50 p-3 rounded-lg border-l-4 border-purple-500">
              <p className="text-purple-300 font-medium">{item.highlight}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

function TeamMember({
  name,
  position,
  image,
  index,
}: {
  name: string
  position: string
  image?: string
  index: number
}) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="glass-card p-6 text-center relative overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden bg-gradient-to-r from-purple-500 to-blue-500">
        {image ? (
          <img src={image || "/placeholder.svg"} alt={name} className="w-full h-full object-cover" />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-white text-4xl font-bold">
            {name.charAt(0)}
          </div>
        )}
      </div>

      <h3 className="text-xl font-bold text-white mb-1">{name}</h3>
      <p className="text-gray-400">{position}</p>

      <motion.div
        className="mt-4 flex justify-center space-x-3"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 10 }}
        transition={{ duration: 0.3 }}
      >
        <a href="#" className="text-gray-400 hover:text-white transition-colors">
          <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
          </svg>
        </a>
        <a href="#" className="text-gray-400 hover:text-white transition-colors">
          <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path
              fillRule="evenodd"
              d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
              clipRule="evenodd"
            />
          </svg>
        </a>
        <a href="#" className="text-gray-400 hover:text-white transition-colors">
          <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path
              fillRule="evenodd"
              d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"
              clipRule="evenodd"
            />
          </svg>
        </a>
        <a href="#" className="text-gray-400 hover:text-white transition-colors">
          <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
          </svg>
        </a>
      </motion.div>
    </motion.div>
  )
}

function ValueCard({
  icon,
  title,
  description,
  index,
}: {
  icon: React.ReactNode
  title: string
  description: string
  index: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="glass-card p-6"
    >
      <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 flex items-center justify-center mb-4">
        {icon}
      </div>

      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </motion.div>
  )
}

export default function AboutPage() {
  const router = useRouter()
  const [activeSection, setActiveSection] = useState("company")

  const teamMembers = [
    {
      name: "Vikram Singh",
      position: "Founder & CEO",
    },
    {
      name: "Ananya Sharma",
      position: "Lead Developer",
    },
    {
      name: "Rajat Verma",
      position: "UI/UX Designer",
    },
    {
      name: "Priya Patel",
      position: "Frontend Developer",
    },
    {
      name: "Arjun Kumar",
      position: "Backend Developer",
    },
    {
      name: "Neha Gupta",
      position: "Project Manager",
    },
    {
      name: "Sanjay Mehta",
      position: "Marketing Specialist",
    },
  ]

  const values = [
    {
      icon: <Users className="h-6 w-6 text-white" />,
      title: "Client-Centric Approach",
      description:
        "We prioritize our clients' needs and goals, ensuring that every solution we deliver adds real value to their business.",
    },
    {
      icon: <Award className="h-6 w-6 text-white" />,
      title: "Excellence in Execution",
      description:
        "We strive for excellence in everything we do, from code quality to user experience and project management.",
    },
    {
      icon: <Target className="h-6 w-6 text-white" />,
      title: "Innovation at Core",
      description:
        "We constantly explore new technologies and methodologies to deliver innovative solutions that give our clients a competitive edge.",
    },
    {
      icon: <Zap className="h-6 w-6 text-white" />,
      title: "Agility & Adaptability",
      description:
        "We embrace change and adapt quickly to evolving requirements and technologies, ensuring our solutions remain relevant.",
    },
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="gradient-text">Who We Are</span>
              </h1>

              {/* Interactive tabs */}
              <div className="flex space-x-2 mb-6">
                <Button
                  variant={activeSection === "company" ? "default" : "outline"}
                  onClick={() => setActiveSection("company")}
                  className={
                    activeSection === "company"
                      ? "bg-gradient-to-r from-purple-600 to-blue-600"
                      : "border-purple-500/50 hover:border-purple-500 text-white"
                  }
                >
                  Our Company
                </Button>
                <Button
                  variant={activeSection === "mission" ? "default" : "outline"}
                  onClick={() => setActiveSection("mission")}
                  className={
                    activeSection === "mission"
                      ? "bg-gradient-to-r from-purple-600 to-blue-600"
                      : "border-purple-500/50 hover:border-purple-500 text-white"
                  }
                >
                  Our Mission
                </Button>
                <Button
                  variant={activeSection === "vision" ? "default" : "outline"}
                  onClick={() => setActiveSection("vision")}
                  className={
                    activeSection === "vision"
                      ? "bg-gradient-to-r from-purple-600 to-blue-600"
                      : "border-purple-500/50 hover:border-purple-500 text-white"
                  }
                >
                  Our Vision
                </Button>
              </div>

              {/* Content based on active section */}
              <motion.div
                key={activeSection}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
              >
                {activeSection === "company" && (
                  <>
                    <p className="text-xl text-gray-300 mb-4">
                      Fyris is a young and dynamic software development agency based in Bhopal, Madhya Pradesh,
                      specializing in creating innovative digital solutions for businesses of all sizes.
                    </p>
                    <p className="text-gray-400 mb-8">
                      Founded in 2022, we've quickly grown to a team of 7 passionate professionals with expertise in web
                      development, mobile applications, UI/UX design, and digital marketing. Though we're new to the
                      industry, we bring fresh perspectives and cutting-edge approaches to every project we undertake.
                    </p>
                  </>
                )}

                {activeSection === "mission" && (
                  <>
                    <p className="text-xl text-gray-300 mb-4">
                      Our mission is to empower local businesses in Madhya Pradesh through innovative technology
                      solutions that solve real-world problems.
                    </p>
                    <p className="text-gray-400 mb-8">
                      We are committed to delivering high-quality, scalable, and secure software that helps our clients
                      achieve their business objectives and establish a strong digital presence. We believe that
                      technology should be accessible to businesses of all sizes, and we work to make that a reality.
                    </p>
                  </>
                )}

                {activeSection === "vision" && (
                  <>
                    <p className="text-xl text-gray-300 mb-4">
                      We envision becoming the most trusted technology partner for businesses in Central India, known
                      for our technical excellence, innovative solutions, and exceptional client service.
                    </p>
                    <p className="text-gray-400 mb-8">
                      Our goal is to grow alongside our clients, helping them navigate the digital landscape and
                      leverage technology to achieve their business goals. We aim to build long-term relationships based
                      on trust, transparency, and mutual success.
                    </p>
                  </>
                )}
              </motion.div>

              <Button
                onClick={() => router.push("/contact")}
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white"
              >
                Get in Touch
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="glass p-4 rounded-lg overflow-hidden"
            >
              <img
                src="/placeholder.svg?height=400&width=600"
                alt="Our team at work"
                className="w-full h-auto rounded-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Journey Timeline */}
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
              <span className="gradient-text">Our Journey</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Though we're just getting started, we've already made significant progress in our mission to deliver
              exceptional technology solutions to businesses in Madhya Pradesh.
            </p>
          </motion.div>

          <InteractiveTimeline />
        </div>
      </section>

      {/* Our Team */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="gradient-text">Meet Our Team</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our team of 7 passionate professionals brings together diverse skills and perspectives to deliver
              exceptional results for our clients.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <TeamMember key={index} name={member.name} position={member.position} index={index} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              onClick={() => router.push("/careers")}
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white"
            >
              Join Our Team
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Our Values */}
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
              <span className="gradient-text">Our Values</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              These core principles guide everything we do and shape how we work with our clients and each other.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <ValueCard
                key={index}
                icon={value.icon}
                title={value.title}
                description={value.description}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-blue-900/20" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="glass p-8 md:p-12 rounded-2xl">
            <div className="text-center max-w-3xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  <span className="gradient-text">Ready to Work With Us?</span>
                </h2>
                <p className="text-xl text-gray-300 mb-8">
                  Let's collaborate to build innovative solutions that drive growth and efficiency for your business in
                  Bhopal and beyond.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    onClick={() => router.push("/contact")}
                    className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-6 text-lg"
                  >
                    Contact Us
                    <ChevronRight className="ml-2 h-5 w-5" />
                  </Button>
                  <Button
                    onClick={() => router.push("/services")}
                    variant="outline"
                    className="border-purple-500/50 hover:border-purple-500 text-white px-8 py-6 text-lg"
                  >
                    Explore Our Services
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

