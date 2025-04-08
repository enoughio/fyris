import type { Metadata } from "next"
import AboutPageClient from "./AboutPageClient"

export const metadata: Metadata = {
  title: "About Fyris - Our Story, Mission & Team | Software Development Agency",
  description:
    "Learn about Fyris, a leading software development agency in Bhopal. Discover our mission, values, team, and journey in creating innovative digital solutions.",
  keywords:
    "about Fyris, software development team Bhopal, Fyris mission, Fyris values, tech company Madhya Pradesh, software agency team",
  openGraph: {
    title: "About Fyris - Our Story, Mission & Team | Software Development Agency",
    description:
      "Learn about Fyris, a leading software development agency in Bhopal. Discover our mission, values, team, and journey in creating innovative digital solutions.",
    url: "https://fyris.in/about",
    siteName: "Fyris",
    images: [
      {
        url: "/og-image-about.jpg",
        width: 1200,
        height: 630,
        alt: "About Fyris - Our Team and Mission",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
}

export default function AboutPage() {
  return <AboutPageClient />
}
