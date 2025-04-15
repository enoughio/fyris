import type { Metadata } from "next"
import HeroSection from "@/components/home/hero-section"
import ServicesSection from "@/components/home/services-section"
import StatsSection from "@/components/home/stats-section"
import TestimonialsSection from "@/components/home/testimonials-section"
import ProcessSection from "@/components/process-section"
import CTASection from "@/components/home/cta-section"
import CaseStudiesSection from "@/components/case-studies-section"


export const metadata: Metadata = {
  title: "Fyris - Software Development Agency in India",
  description:
  "Top software development agency delivering custom software, mobile apps, cloud solutions, and secure digital products for growing businesses and startups.",
    keywords:
    "software development Bhopal, fyris, fyris bhopal AI solutions Madhya Pradesh, Custom Software Bhopal, mobile app development Madhya Pradesh, cloud consulting Bhopal, cybersecurity Madhya Pradesh, blockchain solutions Bhopal, software agency India, software agency in USA, software agency in India, web development, mobile app development, AI solutions, UI/UX design, SEO services, digital marketing, branding, cloud computing, startup solutions, small business websites, SaaS development, AI-driven applications, IT consulting, tech solutions, custom software development, enterprise software, business automation, marketing agency, best software agency in Bhopal, full-stack development, website maintenance, eCommerce solutions, cross-platform apps, progressive web apps (PWA), cloud migration services, machine learning solutions, chatbot development, fintech software development, healthtech solutions, EdTech software development, blockchain development, DevOps services, cybersecurity solutions, MVP development for startups, NoCode/LowCode development, software testing and QA, social media marketing, PPC advertising, performance marketing, mobile-first web design, CRM and ERP development, B2B and B2C solutions web development USA, mobile app development USA, AI solutions USA, UI/UX design USA, software agency Denver, best software company in California, tech solutions USA, cloud computing USA, SaaS development USA, AI-driven applications USA, IT consulting USA, software agency in UK, web development London, AI solutions UK, custom software development UK, startup solutions UK, enterprise software UK, business automation UK, SEO services UK, digital marketing UK, small business websites UK, software agency Australia, web development Sydney, mobile app development Australia, AI and cloud solutions Australia, branding solutions Australia, tech consulting Australia, machine learning Australia, chatbot development Australia, blockchain development Australia, fintech software development Australia, healthtech software Australia, EdTech software development Australia, DevOps services Australia, MVP development USA, B2B and B2C solutions USA, cross-platform apps USA, NoCode/LowCode development USA, software testing USA, digital transformation services USA, SaaS solutions UK, cloud migration USA, marketing agency Denver, startup marketing USA, website design for startups USA, AI-powered applications USA, CRM development USA, best software agency in Sydney, full-stack development California, SEO and branding for startups USA.",
    openGraph: {
    title: "Fyris - Software Solutions for the Future ",
    description:
      "Leading software development agency in Bhopal, Madhya Pradesh offering AI-powered solutions, Custom Software, mobile apps, cloud services, and cybersecurity solutions.",
    url: "https://fyris.in",
    siteName: "Fyris",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Fyris - AI-Powered Software Solutions",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
}

export default function Home() {
  return (
    <>
    <HeroSection />
    <ServicesSection />
    <StatsSection />
    <CaseStudiesSection />
    <TestimonialsSection />
    <ProcessSection />
    <CTASection />
  </>

  )
}
