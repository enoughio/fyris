import { Code, Brain, Cloud, Smartphone, Shield } from "lucide-react"
import ClientServicesSection from "./client-services-section"

export default function ServicesSection() {
  const services = [
    {
      title: "Software Development",
      description:
        "Scalable & AI-driven custom software solutions tailored to your business needs with cutting-edge technologies.",
      icon: <Code className="h-8 w-8 text-white" />,
      href: "/services#web-development",
      gradient: "bg-gradient-to-r from-purple-600 to-blue-600",
    },
    {
      title: "Mobile App Development",
      description:
        "Cross-platform mobile applications for iOS and Android with native-like performance and stunning UI/UX.",
      icon: <Smartphone className="h-8 w-8 text-white" />,
      href: "/services#mobile-apps",
      gradient: "bg-gradient-to-r from-indigo-500 to-purple-600",
    },
    {
      title: "Cloud & DevOps",
      description:
        "Expert guidance on AWS, Azure, and Kubernetes to optimize your infrastructure for performance and cost-efficiency.",
      icon: <Cloud className="h-8 w-8 text-white" />,
      href: "/services#cloud-devops",
      gradient: "bg-gradient-to-r from-blue-500 to-indigo-600",
    },
    {
      title: "Cybersecurity & Blockchain",
      description:
        "Protect your digital assets with advanced security solutions and leverage blockchain for transparency and trust.",
      icon: <Shield className="h-8 w-8 text-white" />,
      href: "/services#cybersecurity",
      gradient: "bg-gradient-to-r from-purple-500 to-pink-500",
    },
    {
      title: "AI & Automation",
      description:
        "Leverage the power of artificial intelligence and machine learning to automate processes and gain valuable insights.",
      icon: <Brain className="h-8 w-8 text-white" />,
      href: "/services#ai-automation",
      gradient: "bg-gradient-to-r from-cyan-500 to-blue-500",
    },
  ]

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950 to-gray-900" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">What We Do</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            We deliver cutting-edge software solutions tailored to your business needs, leveraging the latest
            technologies and best practices.
          </p>
        </div>

        <ClientServicesSection services={services} />
      </div>
    </section>
  )
}
