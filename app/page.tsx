import HeroSection from "@/components/hero-section"
import ServicesSection from "@/components/services-section"
import CredibilitySection from "@/components/credibility-section"
import CaseStudiesSection from "@/components/case-studies-section"
import ProcessSection from "@/components/process-section"
import ContactSection from "@/components/contact-section"
import { Metadata } from "next"


export const metadata: Metadata = {
  title: "Fyris 🔥 - Software Solutions | Bhopal, Madhya Pradesh",
  description:
    "Leading software development agency in Bhopal offering AI-powered solutions, custom web development, mobile apps, cloud services, and cybersecurity solutions.",
  keywords:
    "software development Bhopal, AI solutions Madhya Pradesh, custom web development Bhopal, mobile app development Madhya Pradesh, cloud consulting Bhopal, cybersecurity Madhya Pradesh, blockchain solutions Bhopal, software agency India",
}

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <CredibilitySection />
      <CaseStudiesSection />
      <ProcessSection />
      <ContactSection />
    </>
  )
}

