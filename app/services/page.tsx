"use client"

import type React from "react"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import { ChevronRight, Code, Brain, Cloud, Smartphone, Shield, Check, ArrowRight } from "lucide-react"
import { useState } from "react"

function ServiceIcon({ service }: { service: string }) {
  switch (service) {
    case "web-development":
      return <Code className="h-8 w-8 text-white" />
    case "ai-automation":
      return <Brain className="h-8 w-8 text-white" />
    case "cloud-devops":
      return <Cloud className="h-8 w-8 text-white" />
    case "mobile-apps":
      return <Smartphone className="h-8 w-8 text-white" />
    case "cybersecurity":
      return <Shield className="h-8 w-8 text-white" />
    default:
      return <Code className="h-8 w-8 text-white" />
  }
}

function ServiceCard({
  id,
  title,
  description,
  icon,
  index,
  isActive,
  onClick,
}: {
  id: string
  title: string
  description: string
  icon: React.ReactNode
  index: number
  isActive: boolean
  onClick: () => void
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className={`glass-card p-6 cursor-pointer transition-all duration-300 ${isActive ? "border-2 border-purple-500 shadow-lg shadow-purple-500/20" : "border border-gray-800"}`}
      onClick={onClick}
    >
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 flex items-center justify-center mr-4">
          {icon}
        </div>
        <h3 className="text-xl font-bold text-white">{title}</h3>
      </div>
      <p className="text-gray-400 mb-4">{description}</p>
      <div className="flex justify-end">
        <ArrowRight
          className={`h-5 w-5 transition-all duration-300 ${isActive ? "text-purple-500" : "text-gray-600"}`}
        />
      </div>
    </motion.div>
  )
}

function ServiceDetail({
  id,
  title,
  description,
  features,
  technologies,
}: {
  id: string
  title: string
  description: string
  features: string[]
  technologies: string[]
}) {
  const router = useRouter()

  return (
    <div id={id} className="scroll-mt-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 flex items-center justify-center mr-4">
              <ServiceIcon service={id} />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-white">{title}</h3>
          </div>

          <p className="text-gray-300 mb-6">{description}</p>

          <div className="mb-6">
            <h4 className="text-xl font-semibold text-white mb-3">Key Features</h4>
            <ul className="space-y-2">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <Check className="h-5 w-5 text-purple-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-400">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mb-8">
            <h4 className="text-xl font-semibold text-white mb-3">Technologies We Use</h4>
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-3 py-1 rounded-full text-sm bg-gray-800 text-gray-300 border border-gray-700"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <Button
            onClick={() => router.push("/contact")}
            className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white"
          >
            Discuss Your Project
            <ChevronRight className="ml-2 h-5 w-5" />
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="glass p-6 rounded-lg"
        >
          <div className="relative h-[300px] w-full overflow-hidden rounded-lg">
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center">
              <div className="relative">
                <div className="absolute inset-0 blur-3xl opacity-30 bg-purple-600"></div>
                <ServiceIcon service={id} />
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-gray-900 to-transparent">
              <h4 className="text-xl font-bold text-white">{title}</h4>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default function ServicesPage() {
  const router = useRouter()
  const [activeService, setActiveService] = useState("web-development")

  const services = [
    {
      id: "web-development",
      title: "Custom Web Development",
      description:
        "We build high-performance, scalable web applications tailored to your specific business needs. Our solutions are designed with the latest technologies to ensure optimal performance, security, and user experience.",
      features: [
        "Responsive and mobile-first design",
        "Progressive Web Applications (PWAs)",
        "Custom CMS development",
        "E-commerce solutions",
        "AI-powered web applications",
        "API development and integration",
      ],
      technologies: ["React", "Next.js", "Node.js", "TypeScript", "GraphQL", "MongoDB", "PostgreSQL"],
    },
    {
      id: "ai-automation",
      title: "AI & Automation Solutions",
      description:
        "Leverage the power of artificial intelligence and machine learning to automate processes, gain valuable insights, and make data-driven decisions that drive your business forward.",
      features: [
        "Natural Language Processing (NLP)",
        "Computer Vision solutions",
        "Predictive analytics",
        "Chatbots and virtual assistants",
        "Process automation",
        "Recommendation systems",
      ],
      technologies: ["TensorFlow", "PyTorch", "OpenAI", "Python", "Scikit-learn", "Hugging Face", "NLTK"],
    },
    {
      id: "cloud-devops",
      title: "Cloud & DevOps Consulting",
      description:
        "Optimize your infrastructure for performance, scalability, and cost-efficiency with our cloud and DevOps consulting services. We help you leverage the full potential of cloud platforms.",
      features: [
        "Cloud migration and optimization",
        "Infrastructure as Code (IaC)",
        "CI/CD pipeline setup",
        "Containerization and orchestration",
        "Microservices architecture",
        "Serverless applications",
      ],
      technologies: ["AWS", "Azure", "Google Cloud", "Docker", "Kubernetes", "Terraform", "GitHub Actions"],
    },
    {
      id: "mobile-apps",
      title: "Mobile App Development",
      description:
        "We develop cross-platform and native mobile applications that provide seamless user experiences across devices while maintaining native-like performance and functionality.",
      features: [
        "Cross-platform development",
        "Native iOS and Android apps",
        "Offline-first functionality",
        "Push notifications",
        "In-app purchases",
        "Location-based services",
      ],
      technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase", "Redux", "MobX"],
    },
    {
      id: "cybersecurity",
      title: "Cybersecurity & Blockchain",
      description:
        "Protect your digital assets with our advanced security solutions and leverage blockchain technology for transparency, trust, and secure transactions in your applications.",
      features: [
        "Security audits and penetration testing",
        "Secure authentication systems",
        "Data encryption",
        "Smart contract development",
        "Decentralized applications (dApps)",
        "Blockchain integration",
      ],
      technologies: ["Ethereum", "Solidity", "Web3.js", "OWASP", "OAuth", "JWT", "Hyperledger"],
    },
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-4xl mx-auto mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="gradient-text">Our Services</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              We deliver cutting-edge software solutions tailored to your business needs, leveraging the latest
              technologies and best practices.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {services.map((service, index) => (
              <ServiceCard
                key={service.id}
                id={service.id}
                title={service.title}
                description={service.description.substring(0, 100) + "..."}
                icon={<ServiceIcon service={service.id} />}
                index={index}
                isActive={activeService === service.id}
                onClick={() => setActiveService(service.id)}
              />
            ))}
          </div>

          <div className="glass p-6 rounded-lg">
            {services.map(
              (service) =>
                service.id === activeService && (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                  >
                    <ServiceDetail
                      id={service.id}
                      title={service.title}
                      description={service.description}
                      features={service.features}
                      technologies={service.technologies}
                    />
                  </motion.div>
                ),
            )}
          </div>
        </div>
      </section>

      {/* Process Section */}
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
              <span className="gradient-text">Our Process</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              We follow a structured approach to ensure successful project delivery and client satisfaction.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Discovery",
                description:
                  "We start by understanding your business, goals, and requirements through in-depth discussions.",
              },
              {
                step: "02",
                title: "Planning",
                description:
                  "We create a detailed project plan, including timelines, milestones, and resource allocation.",
              },
              {
                step: "03",
                title: "Development",
                description:
                  "Our team builds your solution using agile methodologies with regular updates and feedback.",
              },
              {
                step: "04",
                title: "Delivery & Support",
                description: "We deploy your solution and provide ongoing support and maintenance as needed.",
              },
            ].map((process, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="glass-card p-6 relative"
              >
                <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 flex items-center justify-center">
                  <span className="text-white font-bold">{process.step}</span>
                </div>

                <h3 className="text-xl font-bold text-white mb-2 mt-4">{process.title}</h3>
                <p className="text-gray-400">{process.description}</p>
              </motion.div>
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
                  <span className="gradient-text">Ready to Start Your Project?</span>
                </h2>
                <p className="text-xl text-gray-300 mb-8">
                  Let's discuss how our services can help you achieve your business goals. Contact us for a free
                  consultation.
                </p>

                <Button
                  onClick={() => router.push("/contact")}
                  className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-6 text-lg"
                >
                  Get a Free Consultation
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

