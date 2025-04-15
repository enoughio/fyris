"use client"

import type React from "react"

import { useState, useRef } from "react"
import { motion } from "framer-motion"
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
import ServiceDetailModal from "@/components/service-detail-modal"

// Service Card Component
function ServiceCard({
  title,
  description,
  icon,
  features,
  index,
  onViewDetails,
}: {
  title: string
  description: string
  icon: React.ReactNode
  features: string[]
  index: number
  onViewDetails: () => void
}) {
  const ref = useRef(null)

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
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
        {features.slice(0, 3).map((feature, i) => (
          <div key={i} className="flex items-start">
            <Check className="h-5 w-5 text-purple-500 mr-2 flex-shrink-0 mt-0.5" />
            <span className="text-gray-300">{feature}</span>
          </div>
        ))}
        {features.length > 3 && (
          <div className="flex items-start">
            <span className="text-gray-300">+{features.length - 3} more features</span>
          </div>
        )}
      </div>

      <Button
        variant="outline"
        className="w-full border-purple-500/50 hover:border-purple-500 text-white"
        onClick={onViewDetails}
      >
        More Details
        <ArrowRight className="ml-2 h-5 w-5" />
      </Button>
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

export default function ServicesClientPage() {
  const router = useRouter()
  const [activeService, setActiveService] = useState<string | null>(null)

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
        "Progressive Web Apps (PWAs)",
        "API integration",
        "Accessibility compliance",
      ],
      longDescription:
        "Our web development services focus on creating custom, high-performance websites and web applications that align with your business goals. We use modern technologies and best practices to ensure your website is fast, secure, and user-friendly across all devices. From simple informational sites to complex web applications, we have the expertise to bring your vision to life.",
      benefits: [
        "Increased online visibility and brand awareness",
        "Improved user engagement and conversion rates",
        "Enhanced customer experience and satisfaction",
        "Streamlined business processes and operations",
        "Scalable solutions that grow with your business",
      ],
      technologies: ["React", "Next.js", "Node.js", "WordPress", "Shopify", "Laravel", "MongoDB", "PostgreSQL"],
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
        "Push notifications",
        "Offline functionality",
        "Analytics integration",
      ],
      longDescription:
        "We develop high-quality mobile applications for iOS and Android platforms that provide seamless user experiences and drive business growth. Whether you need a native app for maximum performance or a cross-platform solution for broader reach, our team has the expertise to deliver mobile solutions that meet your specific requirements.",
      benefits: [
        "Reach users on their preferred devices",
        "Enhance customer engagement and loyalty",
        "Create new revenue streams",
        "Improve business processes and efficiency",
        "Gather valuable user data and insights",
      ],
      technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase", "AWS Amplify", "GraphQL", "Redux"],
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
        "Discount and promotion tools",
        "Multi-currency support",
        "Shipping integration",
      ],
      longDescription:
        "Our e-commerce solutions enable businesses to sell products and services online with confidence. We build secure, scalable online stores that provide excellent shopping experiences for your customers and powerful management tools for your team. From product catalog management to secure checkout processes, we handle all aspects of e-commerce development.",
      benefits: [
        "Expand your market reach beyond physical locations",
        "Sell products 24/7 without staffing limitations",
        "Reduce operational costs compared to physical stores",
        "Gather customer data for personalized marketing",
        "Scale your business more efficiently",
      ],
      technologies: [
        "Shopify",
        "WooCommerce",
        "Magento",
        "Stripe",
        "PayPal",
        "Square",
        "BigCommerce",
        "Custom solutions",
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
        "Natural language processing",
        "Computer vision solutions",
        "Recommendation systems",
      ],
      longDescription:
        "Our AI and automation services help businesses leverage artificial intelligence to streamline operations, gain valuable insights from data, and enhance customer experiences. We develop custom AI solutions that address specific business challenges, from intelligent chatbots that improve customer service to predictive analytics that inform strategic decisions.",
      benefits: [
        "Automate repetitive tasks to free up human resources",
        "Gain deeper insights from your business data",
        "Improve decision-making with predictive analytics",
        "Enhance customer experiences with personalization",
        "Stay ahead of competitors with cutting-edge technology",
      ],
      technologies: [
        "TensorFlow",
        "PyTorch",
        "OpenAI API",
        "Google Cloud AI",
        "Azure Cognitive Services",
        "AWS SageMaker",
        "Scikit-learn",
        "NLTK",
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
        "Disaster recovery",
        "Security implementation",
        "Performance monitoring",
      ],
      longDescription:
        "Our cloud services help businesses leverage the power of cloud computing to improve scalability, reliability, and cost-efficiency. We assist with cloud migration, infrastructure setup, and ongoing management to ensure your applications and data are secure, accessible, and optimized for performance. Our expertise spans major cloud platforms including AWS, Azure, and Google Cloud.",
      benefits: [
        "Reduce infrastructure costs with pay-as-you-go models",
        "Scale resources up or down based on demand",
        "Improve reliability and uptime for critical applications",
        "Enhance security with modern cloud security practices",
        "Enable remote work and collaboration",
      ],
      technologies: ["AWS", "Azure", "Google Cloud", "Docker", "Kubernetes", "Terraform", "CloudFormation", "Ansible"],
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
        "PPC advertising",
        "Content creation",
        "Brand development",
      ],
      longDescription:
        "Our digital marketing services help businesses increase their online visibility, attract qualified leads, and convert them into customers. We develop comprehensive digital marketing strategies that include search engine optimization, content marketing, social media management, email campaigns, and paid advertising. Our data-driven approach ensures measurable results and continuous improvement.",
      benefits: [
        "Increase website traffic and online visibility",
        "Generate more qualified leads for your business",
        "Improve conversion rates and ROI on marketing spend",
        "Build brand awareness and customer loyalty",
        "Gain insights into customer behavior and preferences",
      ],
      technologies: [
        "Google Analytics",
        "SEMrush",
        "Ahrefs",
        "Mailchimp",
        "HubSpot",
        "Google Ads",
        "Facebook Ads",
        "LinkedIn Ads",
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
                onViewDetails={() => setActiveService(service.id)}
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

      {/* Our Process Section */}
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

      {/* Service Detail Modal */}
      {activeService && (
        <ServiceDetailModal
          service={services.find((s) => s.id === activeService)!}
          onClose={() => setActiveService(null)}
        />
      )}
    </div>
  )
}
