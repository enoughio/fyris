import type { Metadata } from "next"
import ServicesClientPage from "./ServicesClientPage"

export const metadata: Metadata = {
  title: "Services - Web, Mobile, AI & Cloud Solutions | Fyris",
  description:
    "Explore our comprehensive range of software development services including web development, mobile apps, AI solutions, cloud services, and cybersecurity solutions.",
  keywords:
    "web development Bhopal, mobile app development, AI solutions, cloud services, cybersecurity, software development services, digital transformation",
  openGraph: {
    title: "Services - Web, Mobile, AI & Cloud Solutions | Fyris",
    description:
      "Explore our comprehensive range of software development services including web development, mobile apps, AI solutions, cloud services, and cybersecurity solutions.",
    url: "https://fyris.in/services",
    siteName: "Fyris",
    images: [
      {
        url: "/og-image-services.jpg",
        width: 1200,
        height: 630,
        alt: "Fyris Software Development Services",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
}

export default function ServicesPage() {
  return <ServicesClientPage />
}
