"use client"

import type React from "react"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import {
  ChevronRight,
  Brain,
  Cloud,
  Smartphone,
  Check,
  X,
  ArrowRight,
  Globe,
  ShoppingCart,
  BarChart,
} from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Service Card Component
function ServiceCard({
  title,
  description,
  icon,
  features,
  index,
}: {
  title: string
  description: string
  icon: React.ReactNode
  features: string[]
  index: number
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="glass-card p-6 h-full relative overflow-hidden"
    >
      {/* Icon with gradient background */}
      <div className="w-16 h-16 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 flex items-center justify-center mb-6">
        {icon}
      </div>

      <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
      <p className="text-gray-400 mb-6">{description}</p>

      <div className="space-y-2 mb-6">
        {features.map((feature, i) => (
          <div key={i} className="flex items-start">
            <Check className="h-5 w-5 text-purple-500 mr-2 flex-shrink-0 mt-0.5" />
            <span className="text-gray-300">{feature}</span>
          </div>
        ))}
      </div>

      <div className="absolute bottom-6 right-6">
        <ArrowRight className="h-5 w-5 text-purple-500" />
      </div>
    </motion.div>
  )
}

// Pricing Card Component
function PricingCard({
  tier,
  price,
  description,
  features,
  recommended = false,
  index,
}: {
  tier: string
  price: number
  description: string
  features: { included: boolean; text: string }[]
  recommended?: boolean
  index: number
}) {
  const router = useRouter()

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`glass-card p-8 relative overflow-hidden ${
        recommended ? "border-2 border-purple-500" : "border border-gray-800"
      }`}
    >
      {recommended && (
        <div className="absolute top-0 right-0">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white text-xs font-bold px-4 py-1 transform rotate-45 translate-x-5 translate-y-3">
            POPULAR
          </div>
        </div>
      )}

      <h3 className="text-2xl font-bold text-white mb-2">{tier}</h3>
      <div className="flex items-baseline mb-4">
        <span className="text-4xl font-bold text-white">${price}</span>
        <span className="text-gray-400 ml-2">one-time</span>
      </div>

      <p className="text-gray-300 mb-6">{description}</p>

      <div className="space-y-3 mb-8">
        {features.map((feature, i) => (
          <div key={i} className="flex items-start">
            {feature.included ? (
              <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
            ) : (
              <X className="h-5 w-5 text-gray-600 mr-2 flex-shrink-0 mt-0.5" />
            )}
            <span className={feature.included ? "text-gray-300" : "text-gray-500"}>{feature.text}</span>
          </div>
        ))}
      </div>

      <Button
        onClick={() => router.push("/contact")}
        className={
          recommended
            ? "w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white"
            : "w-full bg-gray-800 hover:bg-gray-700 text-white"
        }
      >
        Get Started
        <ChevronRight className="ml-2 h-5 w-5" />
      </Button>
    </motion.div>
  )
}

// Process Step Component
function ProcessStep({
  number,
  title,
  description,
  index,
}: {
  number: string
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
      className="flex"
    >
      {/* Step number */}
      <div className="flex-shrink-0 mr-6">
        <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 flex items-center justify-center text-white font-bold text-xl">
          {number}
        </div>
        {index < 3 && <div className="w-0.5 h-16 bg-gradient-to-b from-purple-600 to-blue-600/0 mx-auto my-2"></div>}
      </div>

      {/* Step content */}
      <div className="pt-2">
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-gray-400">{description}</p>
      </div>
    </motion.div>
  )
}

export default function ServicesPage() {
  const router = useRouter()

  // Services data
  const services = [
    {
      id: "web-development",
      title: "Web Development",
      description: "Custom websites and web applications tailored to your business needs.",
      icon: <Globe className="h-8 w-8 text-white" />,
      features: [
        "Responsive design for all devices",
        "SEO optimization",
        "Content management systems",
        "E-commerce functionality",
        "Performance optimization",
      ],
    },
    {
      id: "mobile-apps",
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications for iOS and Android.",
      icon: <Smartphone className="h-8 w-8 text-white" />,
      features: [
        "iOS and Android development",
        "Cross-platform solutions",
        "UI/UX design",
        "App Store submission",
        "Maintenance and updates",
      ],
    },
    {
      id: "e-commerce",
      title: "E-Commerce Solutions",
      description: "Online stores and marketplaces with secure payment processing.",
      icon: <ShoppingCart className="h-8 w-8 text-white" />,
      features: [
        "Product catalog management",
        "Secure payment gateways",
        "Inventory management",
        "Order processing",
        "Customer accounts",
      ],
    },
    {
      id: "ai-solutions",
      title: "AI & Automation",
      description: "Intelligent solutions to automate processes and gain insights from data.",
      icon: <Brain className="h-8 w-8 text-white" />,
      features: [
        "Chatbots and virtual assistants",
        "Data analysis and visualization",
        "Process automation",
        "Predictive analytics",
        "Machine learning integration",
      ],
    },
    {
      id: "cloud-services",
      title: "Cloud Services",
      description: "Cloud infrastructure setup, migration, and management.",
      icon: <Cloud className="h-8 w-8 text-white" />,
      features: [
        "Cloud migration",
        "Infrastructure as Code",
        "Serverless applications",
        "Scalability optimization",
        "Cost management",
      ],
    },
    {
      id: "digital-marketing",
      title: "Digital Marketing",
      description: "Strategies to increase your online presence and drive traffic.",
      icon: <BarChart className="h-8 w-8 text-white" />,
      features: [
        "SEO and content strategy",
        "Social media marketing",
        "Email campaigns",
        "Analytics and reporting",
        "Conversion optimization",
      ],
    },
  ]

  // Website building pricing tiers
  const pricingTiers = [
    {
      tier: "Basic",
      price: 100,
      description: "Perfect for small businesses just getting started with their online presence.",
      features: [
        { included: true, text: "5 pages website" },
        { included: true, text: "Mobile responsive design" },
        { included: true, text: "Contact form" },
        { included: true, text: "Social media integration" },
        { included: false, text: "E-commerce functionality" },
        { included: false, text: "Custom animations" },
        { included: false, text: "SEO optimization" },
        { included: false, text: "Content management system" },
        { included: false, text: "Premium support" },
      ],
    },
    {
      tier: "Pro",
      price: 250,
      description: "Ideal for growing businesses that need more features and customization.",
      features: [
        { included: true, text: "10 pages website" },
        { included: true, text: "Mobile responsive design" },
        { included: true, text: "Contact form" },
        { included: true, text: "Social media integration" },
        { included: true, text: "Basic SEO optimization" },
        { included: true, text: "Content management system" },
        { included: true, text: "Basic animations" },
        { included: false, text: "E-commerce functionality" },
        { included: false, text: "Premium support" },
      ],
      recommended: true,
    },
    {
      tier: "Premium",
      price: 500,
      description: "For businesses that need a comprehensive online solution with all features.",
      features: [
        { included: true, text: "Unlimited pages" },
        { included: true, text: "Mobile responsive design" },
        { included: true, text: "Advanced contact forms" },
        { included: true, text: "Social media integration" },
        { included: true, text: "Advanced SEO optimization" },
        { included: true, text: "Content management system" },
        { included: true, text: "Custom animations" },
        { included: true, text: "E-commerce functionality" },
        { included: true, text: "Premium support (6 months)" },
      ],
    },
  ]

  // Process steps
  const processSteps = [
    {
      number: "01",
      title: "Discovery",
      description: "We start by understanding your business, goals, and requirements through in-depth discussions.",
    },
    {
      number: "02",
      title: "Planning",
      description: "We create a detailed project plan, including timelines, milestones, and resource allocation.",
    },
    {
      number: "03",
      title: "Development",
      description: "Our team builds your solution using agile methodologies with regular updates and feedback.",
    },
    {
      number: "04",
      title: "Delivery & Support",
      description: "We deploy your solution and provide ongoing support and maintenance as needed.",
    },
  ]

  return (
    <div className="pt-20">
      {/* Hero Section with Animated Background */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950"></div>

        {/* Animated background elements */}
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
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-4xl mx-auto"
          >
            <Badge className="bg-gradient-to-r from-purple-600 to-blue-600 mb-4">Our Services</Badge>

            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-cyan-400 to-blue-400">
                Innovative Solutions
              </span>
              <span className="text-white"> for Your Business</span>
            </h1>

            <p className="text-xl text-gray-300 mb-8">
              We offer a wide range of digital services to help your business thrive in the digital age. From web
              development to AI solutions, we've got you covered.
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
      </section>

      {/* Services Grid Section */}
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
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-cyan-400 to-blue-400">
                What We Offer
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Comprehensive digital solutions tailored to your business needs, leveraging the latest technologies and
              best practices.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={service.id}
                title={service.title}
                description={service.description}
                icon={service.icon}
                features={service.features}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Website Building Pricing Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <Badge className="bg-gradient-to-r from-purple-600 to-blue-600 mb-4">Website Building Packages</Badge>

            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-cyan-400 to-blue-400">
                Choose Your Perfect Plan
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              We offer flexible website building packages to suit businesses of all sizes and budgets.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <PricingCard
                key={tier.tier}
                tier={tier.tier}
                price={tier.price}
                description={tier.description}
                features={tier.features}
                recommended={tier.recommended}
                index={index}
              />
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-400 mb-6">
              Need a custom solution? We can create a tailored package to meet your specific requirements.
            </p>
            <Button
              onClick={() => router.push("/contact")}
              variant="outline"
              className="border-purple-500/50 hover:border-purple-500 text-white"
            >
              Contact Us for Custom Pricing
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Service Details Tabs Section */}
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
                Our Expertise
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Explore our services in detail and discover how we can help your business grow.
            </p>
          </motion.div>

          <Tabs defaultValue="web" className="w-full">
            <TabsList className="grid grid-cols-3 lg:grid-cols-6 mb-8">
              <TabsTrigger value="web" className="data-[state=active]:bg-gradient-to-r from-purple-600 to-blue-600">
                <Globe className="h-5 w-5 mr-2" />
                Web
              </TabsTrigger>
              <TabsTrigger value="mobile" className="data-[state=active]:bg-gradient-to-r from-purple-600 to-blue-600">
                <Smartphone className="h-5 w-5 mr-2" />
                Mobile
              </TabsTrigger>
              <TabsTrigger
                value="ecommerce"
                className="data-[state=active]:bg-gradient-to-r from-purple-600 to-blue-600"
              >
                <ShoppingCart className="h-5 w-5 mr-2" />
                E-Commerce
              </TabsTrigger>
              <TabsTrigger value="ai" className="data-[state=active]:bg-gradient-to-r from-purple-600 to-blue-600">
                <Brain className="h-5 w-5 mr-2" />
                AI
              </TabsTrigger>
              <TabsTrigger value="cloud" className="data-[state=active]:bg-gradient-to-r from-purple-600 to-blue-600">
                <Cloud className="h-5 w-5 mr-2" />
                Cloud
              </TabsTrigger>
              <TabsTrigger
                value="marketing"
                className="data-[state=active]:bg-gradient-to-r from-purple-600 to-blue-600"
              >
                <BarChart className="h-5 w-5 mr-2" />
                Marketing
              </TabsTrigger>
            </TabsList>

            <div className="glass-card p-8 rounded-lg">
              <TabsContent value="web">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-4">Web Development</h3>
                    <p className="text-gray-300 mb-6">
                      We create stunning, responsive websites and web applications that deliver exceptional user
                      experiences and drive business growth. Our web development services are tailored to meet your
                      specific needs and goals.
                    </p>

                    <div className="space-y-3 mb-6">
                      <div className="flex items-start">
                        <Check className="h-5 w-5 text-purple-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-300">Custom website design and development</span>
                      </div>
                      <div className="flex items-start">
                        <Check className="h-5 w-5 text-purple-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-300">Responsive design for all devices</span>
                      </div>
                      <div className="flex items-start">
                        <Check className="h-5 w-5 text-purple-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-300">Content management systems (WordPress, etc.)</span>
                      </div>
                      <div className="flex items-start">
                        <Check className="h-5 w-5 text-purple-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-300">Web application development</span>
                      </div>
                      <div className="flex items-start">
                        <Check className="h-5 w-5 text-purple-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-300">Performance optimization</span>
                      </div>
                    </div>

                    <Button
                      onClick={() => router.push("/contact")}
                      className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white"
                    >
                      Discuss Your Project
                      <ChevronRight className="ml-2 h-5 w-5" />
                    </Button>
                  </div>

                  <div className="hidden lg:block">
                    <img
                      src="/placeholder.svg?height=400&width=600"
                      alt="Web Development"
                      className="rounded-lg shadow-lg"
                    />
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="mobile">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-4">Mobile App Development</h3>
                    <p className="text-gray-300 mb-6">
                      We develop high-performance, feature-rich mobile applications for iOS and Android platforms that
                      engage users and drive business growth. Our mobile apps are designed with user experience and
                      performance in mind.
                    </p>

                    <div className="space-y-3 mb-6">
                      <div className="flex items-start">
                        <Check className="h-5 w-5 text-purple-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-300">Native iOS and Android development</span>
                      </div>
                      <div className="flex items-start">
                        <Check className="h-5 w-5 text-purple-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-300">Cross-platform development (React Native)</span>
                      </div>
                      <div className="flex items-start">
                        <Check className="h-5 w-5 text-purple-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-300">UI/UX design for mobile</span>
                      </div>
                      <div className="flex items-start">
                        <Check className="h-5 w-5 text-purple-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-300">App Store and Google Play submission</span>
                      </div>
                      <div className="flex items-start">
                        <Check className="h-5 w-5 text-purple-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-300">App maintenance and updates</span>
                      </div>
                    </div>

                    <Button
                      onClick={() => router.push("/contact")}
                      className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white"
                    >
                      Discuss Your Project
                      <ChevronRight className="ml-2 h-5 w-5" />
                    </Button>
                  </div>

                  <div className="hidden lg:block">
                    <img
                      src="/placeholder.svg?height=400&width=600"
                      alt="Mobile App Development"
                      className="rounded-lg shadow-lg"
                    />
                  </div>
                </div>
              </TabsContent>

              {/* Add similar TabsContent for other tabs */}
              <TabsContent value="ecommerce">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-4">E-Commerce Solutions</h3>
                    <p className="text-gray-300 mb-6">
                      We build powerful e-commerce platforms that help businesses sell products and services online. Our
                      solutions are designed to provide a seamless shopping experience and maximize conversions.
                    </p>

                    <div className="space-y-3 mb-6">
                      <div className="flex items-start">
                        <Check className="h-5 w-5 text-purple-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-300">Custom e-commerce website development</span>
                      </div>
                      <div className="flex items-start">
                        <Check className="h-5 w-5 text-purple-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-300">Shopping cart and checkout optimization</span>
                      </div>
                      <div className="flex items-start">
                        <Check className="h-5 w-5 text-purple-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-300">Payment gateway integration</span>
                      </div>
                      <div className="flex items-start">
                        <Check className="h-5 w-5 text-purple-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-300">Inventory and order management</span>
                      </div>
                      <div className="flex items-start">
                        <Check className="h-5 w-5 text-purple-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-300">Product catalog management</span>
                      </div>
                    </div>

                    <Button
                      onClick={() => router.push("/contact")}
                      className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white"
                    >
                      Discuss Your Project
                      <ChevronRight className="ml-2 h-5 w-5" />
                    </Button>
                  </div>

                  <div className="hidden lg:block">
                    <img
                      src="/placeholder.svg?height=400&width=600"
                      alt="E-Commerce Solutions"
                      className="rounded-lg shadow-lg"
                    />
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="ai">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-4">AI & Automation</h3>
                    <p className="text-gray-300 mb-6">
                      We leverage artificial intelligence and automation to help businesses streamline processes, gain
                      insights from data, and enhance customer experiences. Our AI solutions are designed to solve real
                      business problems.
                    </p>

                    <div className="space-y-3 mb-6">
                      <div className="flex items-start">
                        <Check className="h-5 w-5 text-purple-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-300">Chatbots and virtual assistants</span>
                      </div>
                      <div className="flex items-start">
                        <Check className="h-5 w-5 text-purple-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-300">Data analysis and visualization</span>
                      </div>
                      <div className="flex items-start">
                        <Check className="h-5 w-5 text-purple-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-300">Business process automation</span>
                      </div>
                      <div className="flex items-start">
                        <Check className="h-5 w-5 text-purple-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-300">Predictive analytics</span>
                      </div>
                      <div className="flex items-start">
                        <Check className="h-5 w-5 text-purple-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-300">Machine learning integration</span>
                      </div>
                    </div>

                    <Button
                      onClick={() => router.push("/contact")}
                      className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white"
                    >
                      Discuss Your Project
                      <ChevronRight className="ml-2 h-5 w-5" />
                    </Button>
                  </div>

                  <div className="hidden lg:block">
                    <img
                      src="/placeholder.svg?height=400&width=600"
                      alt="AI & Automation"
                      className="rounded-lg shadow-lg"
                    />
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="cloud">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-4">Cloud Services</h3>
                    <p className="text-gray-300 mb-6">
                      We help businesses leverage the power of cloud computing to improve scalability, reliability, and
                      cost-efficiency. Our cloud services are designed to optimize your infrastructure and applications.
                    </p>

                    <div className="space-y-3 mb-6">
                      <div className="flex items-start">
                        <Check className="h-5 w-5 text-purple-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-300">Cloud migration and strategy</span>
                      </div>
                      <div className="flex items-start">
                        <Check className="h-5 w-5 text-purple-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-300">Infrastructure as Code (IaC)</span>
                      </div>
                      <div className="flex items-start">
                        <Check className="h-5 w-5 text-purple-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-300">Serverless application development</span>
                      </div>
                      <div className="flex items-start">
                        <Check className="h-5 w-5 text-purple-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-300">Cloud cost optimization</span>
                      </div>
                      <div className="flex items-start">
                        <Check className="h-5 w-5 text-purple-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-300">DevOps implementation</span>
                      </div>
                    </div>

                    <Button
                      onClick={() => router.push("/contact")}
                      className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white"
                    >
                      Discuss Your Project
                      <ChevronRight className="ml-2 h-5 w-5" />
                    </Button>
                  </div>

                  <div className="hidden lg:block">
                    <img
                      src="/placeholder.svg?height=400&width=600"
                      alt="Cloud Services"
                      className="rounded-lg shadow-lg"
                    />
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="marketing">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-4">Digital Marketing</h3>
                    <p className="text-gray-300 mb-6">
                      We help businesses increase their online visibility, attract more customers, and grow their
                      revenue through effective digital marketing strategies. Our approach is data-driven and
                      results-focused.
                    </p>

                    <div className="space-y-3 mb-6">
                      <div className="flex items-start">
                        <Check className="h-5 w-5 text-purple-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-300">Search Engine Optimization (SEO)</span>
                      </div>
                      <div className="flex items-start">
                        <Check className="h-5 w-5 text-purple-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-300">Social media marketing</span>
                      </div>
                      <div className="flex items-start">
                        <Check className="h-5 w-5 text-purple-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-300">Content marketing strategy</span>
                      </div>
                      <div className="flex items-start">
                        <Check className="h-5 w-5 text-purple-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-300">Email marketing campaigns</span>
                      </div>
                      <div className="flex items-start">
                        <Check className="h-5 w-5 text-purple-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-300">Analytics and performance tracking</span>
                      </div>
                    </div>

                    <Button
                      onClick={() => router.push("/contact")}
                      className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white"
                    >
                      Discuss Your Project
                      <ChevronRight className="ml-2 h-5 w-5" />
                    </Button>
                  </div>

                  <div className="hidden lg:block">
                    <img
                      src="/placeholder.svg?height=400&width=600"
                      alt="Digital Marketing"
                      className="rounded-lg shadow-lg"
                    />
                  </div>
                </div>
              </TabsContent>
            </div>
          </Tabs>
        </div>
      </section>

      {/* Our Process Section */}
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
                Our Process
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              We follow a structured approach to ensure successful project delivery and client satisfaction.
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            {processSteps.map((step, index) => (
              <ProcessStep
                key={index}
                number={step.number}
                title={step.title}
                description={step.description}
                index={index}
              />
            ))}
          </div>
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
                    Ready to Start Your Project?
                  </span>
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

