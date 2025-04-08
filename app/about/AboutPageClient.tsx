"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import { ChevronRight, Users, Award, Target, Zap, CheckCircle } from "lucide-react"
import { Badge } from "@/components/ui/badge"

// Visual Timeline Component
function VisualTimeline() {
  const timelineEvents = [
    {
      year: "2022",
      quarter: "Q3",
      title: "Foundation",
      description:
        "Fyris was founded with a vision to create innovative digital solutions for businesses in Madhya Pradesh.",
      icon: "🚀",
      color: "from-purple-600 to-blue-600",
    },
    {
      year: "2022",
      quarter: "Q4",
      title: "First Client",
      description: "Secured our first client project - a website for a local restaurant in Bhopal.",
      icon: "🏆",
      color: "from-blue-600 to-cyan-500",
    },
    {
      year: "2023",
      quarter: "Q1",
      title: "Team Growth",
      description: "Expanded our team to 5 members, adding expertise in UI/UX design and backend development.",
      icon: "👥",
      color: "from-cyan-500 to-teal-500",
    },
    {
      year: "2023",
      quarter: "Q2",
      title: "Office Space",
      description: "Moved into our first office space in MP Nagar, Bhopal.",
      icon: "🏢",
      color: "from-teal-500 to-green-500",
    },
    {
      year: "2023",
      quarter: "Q3",
      title: "Service Expansion",
      description: "Added mobile app development and AI solutions to our service offerings.",
      icon: "📱",
      color: "from-green-500 to-yellow-500",
    },
    {
      year: "2023",
      quarter: "Q4",
      title: "Team of 7",
      description: "Grew to a team of 7 talented professionals with diverse skills and expertise.",
      icon: "🌟",
      color: "from-yellow-500 to-orange-500",
    },
    {
      year: "2024",
      quarter: "Q1",
      title: "Future Goals",
      description: "Setting our sights on expanding our client base and enhancing our service offerings.",
      icon: "🔮",
      color: "from-orange-500 to-red-500",
    },
  ]

  return (
    <div className="relative py-10">
      {/* Center line */}
      <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-purple-600 via-blue-500 to-cyan-400"></div>

      {/* Timeline events */}
      <div className="relative">
        {timelineEvents.map((event, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`flex items-center mb-16 ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
          >
            {/* Content */}
            <div className={`w-5/12 ${index % 2 === 0 ? "text-right pr-8" : "text-left pl-8"}`}>
              <div className="glass-card p-6 relative overflow-hidden">
                <Badge className={`bg-gradient-to-r ${event.color} mb-2`}>
                  {event.year} - {event.quarter}
                </Badge>
                <h3 className="text-xl font-bold text-white mb-2">{event.title}</h3>
                <p className="text-gray-300">{event.description}</p>
              </div>
            </div>

            {/* Center icon */}
            <div className="w-2/12 flex justify-center">
              <div
                className={`w-12 h-12 rounded-full bg-gradient-to-r ${event.color} flex items-center justify-center text-xl z-10`}
              >
                {event.icon}
              </div>
            </div>

            {/* Empty space for alternating layout */}
            <div className="w-5/12"></div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

// Team Member Card
function TeamMemberCard({ member, index }: { member: any; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative group"
    >
      {/* Background shape */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg transform rotate-3 group-hover:rotate-0 transition-transform duration-300"></div>

      {/* Content */}
      <div className="relative glass-card p-6 h-full transform group-hover:translate-y-2 transition-transform duration-300">
        <div className="flex flex-col items-center">
          <div className="w-24 h-24 rounded-full overflow-hidden bg-gradient-to-r from-purple-500 to-blue-500 mb-4">
            <div className="w-full h-full flex items-center justify-center text-white text-3xl font-bold">
              {member.name.charAt(0)}
            </div>
          </div>

          <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
          <p className="text-purple-400 mb-4">{member.position}</p>

          <p className="text-gray-300 text-center text-sm mb-4">{member.bio}</p>

          <div className="flex space-x-3">
            {member.skills.map((skill: string, i: number) => (
              <Badge key={i} variant="outline" className="border-purple-500/50">
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

// Values Section with Hexagon Grid
function ValuesHexGrid() {
  const values = [
    {
      icon: <Users className="h-8 w-8 text-white" />,
      title: "Client-Centric",
      description: "We prioritize our clients' needs and goals in everything we do.",
    },
    {
      icon: <Award className="h-8 w-8 text-white" />,
      title: "Excellence",
      description: "We strive for excellence in every project we undertake.",
    },
    {
      icon: <Target className="h-8 w-8 text-white" />,
      title: "Innovation",
      description: "We embrace new technologies and creative solutions.",
    },
    {
      icon: <Zap className="h-8 w-8 text-white" />,
      title: "Agility",
      description: "We adapt quickly to changing requirements and technologies.",
    },
    {
      icon: <CheckCircle className="h-8 w-8 text-white" />,
      title: "Quality",
      description: "We never compromise on the quality of our deliverables.",
    },
    {
      icon: <Users className="h-8 w-8 text-white" />,
      title: "Teamwork",
      description: "We believe in the power of collaboration and shared success.",
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {values.map((value, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="glass-card p-6 relative overflow-hidden"
        >
          {/* Hexagon shape for icon */}
          <div className="relative w-16 h-16 mx-auto mb-4">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 transform rotate-45"></div>
            <div className="absolute inset-0 flex items-center justify-center">{value.icon}</div>
          </div>

          <h3 className="text-xl font-bold text-white text-center mb-2">{value.title}</h3>
          <p className="text-gray-300 text-center">{value.description}</p>
        </motion.div>
      ))}
    </div>
  )
}

// Parallax Stats Section
function ParallaxStats() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -50])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -100])
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -150])
  const y4 = useTransform(scrollYProgress, [0, 1], [0, -200])

  const stats = [
    { number: 7, label: "Team Members", y: y1 },
    { number: 8, label: "Projects Completed", y: y2 },
    { number: 1, label: "Year of Experience", y: y3 },
    { number: 95, label: "Client Satisfaction", suffix: "%", y: y4 },
  ]

  return (
    <div ref={ref} className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-blue-900/20"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div key={index} style={{ y: stat.y }} className="glass-card p-6 text-center">
              <div className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 mb-2">
                {stat.number}
                {stat.suffix || ""}
              </div>
              <p className="text-gray-300 text-lg">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function AboutPageClient() {
  const router = useRouter()

  const teamMembers = [
    {
      name: "Vikram Singh",
      position: "Founder & CEO",
      bio: "Passionate about technology and entrepreneurship with 5 years of experience in software development.",
      skills: ["Leadership", "Strategy", "Development"],
    },
    {
      name: "Ananya Sharma",
      position: "Lead Developer",
      bio: "Full-stack developer with expertise in React, Node.js, and database design.",
      skills: ["React", "Node.js", "MongoDB"],
    },
    {
      name: "Rajat Verma",
      position: "UI/UX Designer",
      bio: "Creative designer focused on creating intuitive and engaging user experiences.",
      skills: ["UI Design", "UX Research", "Figma"],
    },
    {
      name: "Priya Patel",
      position: "Frontend Developer",
      bio: "Frontend specialist with a keen eye for detail and responsive design.",
      skills: ["HTML/CSS", "JavaScript", "React"],
    },
    {
      name: "Arjun Kumar",
      position: "Backend Developer",
      bio: "Backend expert with experience in building scalable and secure APIs.",
      skills: ["Node.js", "Express", "PostgreSQL"],
    },
    {
      name: "Neha Gupta",
      position: "Project Manager",
      bio: "Organized and detail-oriented project manager with excellent communication skills.",
      skills: ["Agile", "Scrum", "Client Relations"],
    },
    {
      name: "Sanjay Mehta",
      position: "Marketing Specialist",
      bio: "Digital marketing professional with expertise in SEO, content strategy, and social media.",
      skills: ["SEO", "Content", "Analytics"],
    },
  ]

  return (
    <div className="pt-20">
      {/* Hero Section with Diagonal Split */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950"></div>

        {/* Diagonal divider */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-br from-purple-900/30 to-blue-900/30 transform -skew-x-12"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }}>
              <Badge className="bg-gradient-to-r from-purple-600 to-blue-600 mb-4">Established 2022</Badge>

              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="text-white">We are </span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-cyan-400 to-blue-400">
                  Fyris
                </span>
              </h1>

              <p className="text-xl text-gray-300 mb-6">
                A young, dynamic team of 7 passionate professionals dedicated to creating innovative digital solutions
                for businesses in Madhya Pradesh and beyond.
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
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative"
            >
              {/* Floating elements */}
              <div className="absolute -top-10 -left-10 w-20 h-20 rounded-full bg-purple-500/20 blur-xl"></div>
              <div className="absolute -bottom-10 -right-10 w-20 h-20 rounded-full bg-blue-500/20 blur-xl"></div>

              {/* Main image */}
              <div className="glass p-2 rounded-lg transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <img
                  src="/placeholder.svg?height=400&width=600"
                  alt="Our team at work"
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section with Tabs */}
      <section className="py-20 bg-gradient-to-b from-gray-950 to-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-cyan-400 to-blue-400">
                Our Mission & Vision
              </span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="glass-card p-8 relative overflow-hidden"
            >
              {/* Decorative element */}
              <div className="absolute -top-10 -left-10 w-40 h-40 rounded-full bg-purple-600/10 blur-xl"></div>

              <div className="relative">
                <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 flex items-center justify-center mr-3">
                    <Target className="h-5 w-5 text-white" />
                  </div>
                  Our Mission
                </h3>

                <p className="text-gray-300 mb-4">
                  Our mission is to empower local businesses in Madhya Pradesh through innovative technology solutions
                  that solve real-world problems and drive growth.
                </p>

                <p className="text-gray-300">
                  We are committed to delivering high-quality, scalable, and secure software that helps our clients
                  achieve their business objectives and establish a strong digital presence.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="glass-card p-8 relative overflow-hidden"
            >
              {/* Decorative element */}
              <div className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full bg-blue-600/10 blur-xl"></div>

              <div className="relative">
                <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 flex items-center justify-center mr-3">
                    <Zap className="h-5 w-5 text-white" />
                  </div>
                  Our Vision
                </h3>

                <p className="text-gray-300 mb-4">
                  We envision becoming the most trusted technology partner for businesses in Central India, known for
                  our technical excellence, innovative solutions, and exceptional client service.
                </p>

                <p className="text-gray-300">
                  Our goal is to grow alongside our clients, helping them navigate the digital landscape and leverage
                  technology to achieve their business goals.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section with Parallax */}
      <ParallaxStats />

      {/* Our Journey Timeline Section */}
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
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-cyan-400 to-blue-400">
                Our Journey
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Though we're just getting started, we've already made significant progress in our mission to deliver
              exceptional technology solutions.
            </p>
          </motion.div>

          <VisualTimeline />
        </div>
      </section>

      {/* Team Section with Staggered Grid */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-gray-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-cyan-400 to-blue-400">
                Meet Our Team
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our team of 7 passionate professionals brings together diverse skills and perspectives to deliver
              exceptional results for our clients.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <TeamMemberCard key={index} member={member} index={index} />
            ))}
          </div>

          <div className="text-center mt-16">
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

      {/* Our Values Section with Hexagon Grid */}
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
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-cyan-400 to-blue-400">
                Our Values
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              These core principles guide everything we do and shape how we work with our clients and each other.
            </p>
          </motion.div>

          <ValuesHexGrid />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-blue-900/20"></div>

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
            <div className="text-center max-w-3xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-cyan-400 to-blue-400">
                    Ready to Work With Us?
                  </span>
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
