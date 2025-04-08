
import type { Metadata } from "next"
import ContactPage from "./clientPage"

export const metadata: Metadata = {
  title: "Contact Us - Get in Touch with Fyris | Software Development Agency",
  description:
    "Contact Fyris for your software development needs. Get a free consultation for web development, mobile apps, AI solutions, and more. Based in Bhopal, serving globally.",
  keywords:
    "contact Fyris, software development consultation, hire developers Bhopal, software agency contact, get in touch, free consultation",
  openGraph: {
    title: "Contact Us - Get in Touch with Fyris | Software Development Agency",
    description:
      "Contact Fyris for your software development needs. Get a free consultation for web development, mobile apps, AI solutions, and more. Based in Bhopal, serving globally.",
    url: "https://fyris.in/contact",
    siteName: "Fyris",
    images: [
      {
        url: "/og-image-contact.jpg",
        width: 1200,
        height: 630,
        alt: "Contact Fyris Software Development Agency",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
}

export default function Home() {
  return <ContactPage />
}

