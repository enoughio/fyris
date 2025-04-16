"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import { ChevronRight, Mail, Phone, MapPin, Clock, ArrowRight } from "lucide-react"
import ContactForm from "@/components/contact-form"
import { useState } from "react"

interface Office {
  name: string;
  address: string;
  phone: string;
  email: string;
  hours: string;
  mapUrl: string;
}

interface Offices {
  [key: string]: Office;
}

// Interactive office location selector
const OfficeLocations = () => {
  const [activeOffice, setActiveOffice] = useState<keyof Offices>("bhopal")

  const offices: Offices = {
    bhopal: {
      name: "Bhopal (Headquarters)",
      address: "254 E-2 Arera, Colony, Bhopal, Madhya Pradesh 462011",
      phone: "+91 9594548313",
      email: "contact@fyris.in",
      hours: "Monday - Friday: 9:00 AM - 6:00 PM",
      mapUrl: "https://maps.google.com/?q=254+E-2+Arera+Bhopal",
    },
    // indore: {
    //   name: "Indore Office",
    //   address: "456 Vijay Nagar, Indore, Madhya Pradesh 452010",
    //   phone: "+91 9594548313",
 
    //   hours: "Monday - Friday: 9:00 AM - 6:00 PM",
    //   mapUrl: "https://maps.google.com/?q=Vijay+Nagar+Indore",
    // },
    // delhi: {
    //   name: "Delhi Office",
    //   address: "789 Connaught Place, New Delhi 110001",
    //   phone: "+91 9594548313",
    //   email: 
    //   hours: "Monday - Friday: 9:30 AM - 6:30 PM",
    //   mapUrl: "https://maps.google.com/?q=Connaught+Place+Delhi",
    // },
  }

  return (
    <div className="glass-card p-6">
      <h3 className="text-xl font-bold text-white mb-6">Our Offices</h3>

      <div className="flex flex-wrap gap-2 mb-6">
        {Object.entries(offices).map(([key, office]) => (
          <Button
            key={key}
            variant={activeOffice === key ? "default" : "outline"}
            onClick={() => setActiveOffice(key as keyof Offices)}
            className={
              activeOffice === key
                ? "bg-gradient-to-r from-purple-600 to-blue-600"
                : "border-purple-500/50 hover:border-purple-500 text-white"
            }
          >
            {office.name}
          </Button>
        ))}
      </div>

      <motion.div
        key={activeOffice}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.3 }}
        className="space-y-4"
      >
        <div className="flex items-start">
          <MapPin className="h-5 w-5 text-purple-500 mr-3 mt-1 flex-shrink-0" />
          <div>
            <p className="text-gray-300">{offices[activeOffice].address}</p>
            <a
              href={offices[activeOffice].mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-400 hover:text-purple-300 inline-flex items-center mt-1 text-sm"
            >
              View on Google Maps
              <ArrowRight className="ml-1 h-3 w-3" />
            </a>
          </div>
        </div>

        <div className="flex items-start">
          <Phone className="h-5 w-5 text-purple-500 mr-3 mt-1 flex-shrink-0" />
          <div>
            <p className="text-gray-300">{offices[activeOffice].phone}</p>
          </div>
        </div>

        <div className="flex items-start">
          <Mail className="h-5 w-5 text-purple-500 mr-3 mt-1 flex-shrink-0" />
          <div>
            <p className="text-gray-300">{offices[activeOffice].email}</p>
          </div>
        </div>

        <div className="flex items-start">
          <Clock className="h-5 w-5 text-purple-500 mr-3 mt-1 flex-shrink-0" />
          <div>
            <p className="text-gray-300">{offices[activeOffice].hours}</p>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

// FAQ Accordion
function FAQ() {
  const [activeQuestion, setActiveQuestion] = useState<number | null>(null)

  const faqs = [
    {
      question: "What services does Fyris offer?",
      answer:
        "Fyris offers a wide range of services including Custom Software, AI & automation solutions, cloud & DevOps consulting, mobile app development, and cybersecurity & blockchain services.",
    },
    {
      question: "How long does a typical project take?",
      answer:
        "Project timelines vary depending on the scope and complexity. A simple website might take 2-4 weeks, while a complex enterprise application could take several months. We'll provide a detailed timeline during our initial consultation.",
    },
    {
      question: "Do you offer maintenance and support after project completion?",
      answer:
        "Yes, we offer ongoing maintenance and support services to ensure your application continues to run smoothly. We have various support packages available to suit different needs and budgets.",
    },
    {
      question: "How do you handle project pricing?",
      answer:
        "We offer flexible pricing models including fixed-price quotes for well-defined projects and time-and-materials billing for projects with evolving requirements. We'll recommend the best approach based on your specific needs.",
    },
  ]

  return (
    <div className="glass-card p-6">
      <h3 className="text-xl font-bold text-white mb-6">Frequently Asked Questions</h3>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border border-gray-800 rounded-lg overflow-hidden">
            <button
              onClick={() => setActiveQuestion(activeQuestion === index ? null : index)}
              className="w-full p-4 text-left flex justify-between items-center hover:bg-gray-800/50 transition-colors"
            >
              <span className="font-medium text-white">{faq.question}</span>
              <ChevronRight
                className={`h-5 w-5 text-purple-500 transition-transform duration-300 ${activeQuestion === index ? "rotate-90" : ""}`}
              />
            </button>

            {activeQuestion === index && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="p-4 pt-0 border-t border-gray-800"
              >
                <p className="text-gray-400">{faq.answer}</p>
              </motion.div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default function ContactPage() {
  const router = useRouter()
  const [contactMethod, setContactMethod] = useState("form")

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
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="gradient-text">Get in Touch</span>
            </h1>
            <p className="text-xl text-gray-300">
              Have a question or want to discuss a project? We'd love to hear from you. Choose how you'd like to connect
              with us.
            </p>
          </motion.div>

          <div className="flex justify-center mb-12">
            <div className="inline-flex rounded-md shadow-sm">
              <button
                onClick={() => setContactMethod("form")}
                className={`px-4 py-2 text-sm font-medium rounded-l-lg ${
                  contactMethod === "form"
                    ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white"
                    : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                }`}
              >
                Contact Form
              </button>
              <button
                onClick={() => setContactMethod("info")}
                className={`px-4 py-2 text-sm font-medium rounded-r-lg ${
                  contactMethod === "info"
                    ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white"
                    : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                }`}
              >
                Contact Information
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              key={contactMethod}
              initial={{ opacity: 0, x: contactMethod === "form" ? -20 : 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              {contactMethod === "form" ? (
                <div className="glass p-6 rounded-lg">
                  <h2 className="text-2xl font-bold text-white mb-6">Send Us a Message</h2>
                  <ContactForm />
                </div>
              ) : (
                <OfficeLocations />
              )}
            </motion.div>

            <div>
              {contactMethod === "form" ? (
                <FAQ />
              ) : (
                <div className="glass p-6 rounded-lg">
                  <h2 className="text-2xl font-bold text-white mb-6">Send Us a Message</h2>
                  <ContactForm />
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
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
              <span className="gradient-text">Visit Our Office</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              We're located in the heart of Bhopal, easily accessible from all major parts of the city.
            </p>
          </motion.div>

          <div className="glass p-4 rounded-lg overflow-hidden">
            <div className="aspect-video w-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14665.460364118285!2d77.41861016977541!3d23.233599499999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c428f8fd68fbd%3A0x2155716d572d4f8!2sMP%20Nagar%2C%20Bhopal%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1649930944120!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Fyris Office Location"
              ></iframe>
            </div>
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
                  <span className="gradient-text">Ready to Transform Your Business?</span>
                </h2>
                <p className="text-xl text-gray-300 mb-8">
                  Let's collaborate to build innovative solutions that drive growth and efficiency for your business.
                </p>

                <Button
                  onClick={() => router.push("/services")}
                  className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-6 text-lg"
                >
                  Explore Our Services
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