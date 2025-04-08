"use client"

import { motion } from "framer-motion"
import ServiceCard from "./service-card"
import { Code, Brain, Cloud, Smartphone, Shield } from "lucide-react"

export default function ServicesOverview() {
  const services = [
    {
      title: "Custom Web Development",
      description:
        "AI-powered, cloud-ready web applications built with cutting-edge technologies for optimal performance and scalability.",
      icon: <Code className="h-6 w-6 text-white" />,
      href: "/services#web-development",
      gradient: "bg-gradient-to-r from-purple-600 to-blue-600",
    },
    {
      title: "AI & Automation Solutions",
      description:
        "Leverage the power of artificial intelligence and machine learning to automate processes and gain valuable insights.",
      icon: <Brain className="h-6 w-6 text-white" />,
      href: "/services#ai-automation",
      gradient: "bg-gradient-to-r from-cyan-500 to-blue-500",
    },
    {
      title: "Cloud & DevOps Consulting",
      description:
        "Expert guidance on AWS, Azure, and Kubernetes to optimize your infrastructure for performance and cost-efficiency.",
      icon: <Cloud className="h-6 w-6 text-white" />,
      href: "/services#cloud-devops",
      gradient: "bg-gradient-to-r from-blue-500 to-indigo-600",
    },
    {
      title: "Mobile App Development",
      description:
        "Cross-platform mobile applications for iOS and Android using React Native with native-like performance.",
      icon: <Smartphone className="h-6 w-6 text-white" />,
      href: "/services#mobile-apps",
      gradient: "bg-gradient-to-r from-indigo-500 to-purple-600",
    },
    {
      title: "Cybersecurity & Blockchain",
      description:
        "Protect your digital assets with advanced security solutions and leverage blockchain for transparency and trust.",
      icon: <Shield className="h-6 w-6 text-white" />,
      href: "/services#cybersecurity",
      gradient: "bg-gradient-to-r from-purple-500 to-pink-500",
    },
  ]

  return (
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
            <span className="gradient-text">Our Services</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            We deliver cutting-edge software solutions tailored to your business needs, leveraging the latest
            technologies and best practices.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              href={service.href}
              gradient={service.gradient}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
