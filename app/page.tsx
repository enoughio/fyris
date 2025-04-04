import HeroSection from "@/components/hero-section"
import ServicesSection from "@/components/services-section"
import CredibilitySection from "@/components/credibility-section"
import CaseStudiesSection from "@/components/case-studies-section"
import ProcessSection from "@/components/process-section"
import ContactSection from "@/components/contact-section"
import { Metadata } from "next"


export const metadata: Metadata = {
  title: "Fyris 🔥 - Software Solutions | Bhopal, Madhya Pradesh, India",
  description:
    "Leading software development agency in India offering AI-powered solutions, custom web development, mobile apps, cloud services, and cybersecurity solutions.",
  keywords:
    "software development Bhopal, AI solutions Madhya Pradesh, custom web development Bhopal, mobile app development Madhya Pradesh, cloud consulting Bhopal, cybersecurity Madhya Pradesh, blockchain solutions Bhopal, software agency India, software agency in USA, software agency in India, web development, mobile app development, AI solutions, UI/UX design, SEO services, digital marketing, branding, cloud computing, startup solutions, small business websites, SaaS development, AI-driven applications, IT consulting, tech solutions, custom software development, enterprise software, business automation, marketing agency, best software agency in Bhopal, full-stack development, website maintenance, eCommerce solutions, cross-platform apps, progressive web apps (PWA), cloud migration services, machine learning solutions, chatbot development, fintech software development, healthtech solutions, EdTech software development, blockchain development, DevOps services, cybersecurity solutions, MVP development for startups, NoCode/LowCode development, software testing and QA, social media marketing, PPC advertising, performance marketing, mobile-first web design, CRM and ERP development, B2B and B2C solutions web development USA, mobile app development USA, AI solutions USA, UI/UX design USA, software agency Denver, best software company in California, tech solutions USA, cloud computing USA, SaaS development USA, AI-driven applications USA, IT consulting USA, software agency in UK, web development London, AI solutions UK, custom software development UK, startup solutions UK, enterprise software UK, business automation UK, SEO services UK, digital marketing UK, small business websites UK, software agency Australia, web development Sydney, mobile app development Australia, AI and cloud solutions Australia, branding solutions Australia, tech consulting Australia, machine learning Australia, chatbot development Australia, blockchain development Australia, fintech software development Australia, healthtech software Australia, EdTech software development Australia, DevOps services Australia, MVP development USA, B2B and B2C solutions USA, cross-platform apps USA, NoCode/LowCode development USA, software testing USA, digital transformation services USA, SaaS solutions UK, cloud migration USA, marketing agency Denver, startup marketing USA, website design for startups USA, AI-powered applications USA, CRM development USA, best software agency in Sydney, full-stack development California, SEO and branding for startups USA.",
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

