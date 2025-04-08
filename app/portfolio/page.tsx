import type { Metadata } from "next"
import PortfolioClientPage from "./PortfolioClientPage"

export const metadata: Metadata = {
  title: "Portfolio - Our Projects & Case Studies | Fyris",
  description:
    "Browse our portfolio of successful software development projects including web applications, mobile apps, and AI solutions for businesses in Bhopal and beyond.",
  keywords:
    "software portfolio, web development projects, mobile app case studies, AI solutions portfolio, Bhopal software projects, Fyris case studies",
  openGraph: {
    title: "Portfolio - Our Projects & Case Studies | Fyris",
    description:
      "Browse our portfolio of successful software development projects including web applications, mobile apps, and AI solutions for businesses in Bhopal and beyond.",
    url: "https://fyris.in/portfolio",
    siteName: "Fyris",
    images: [
      {
        url: "/og-image-portfolio.jpg",
        width: 1200,
        height: 630,
        alt: "Fyris Software Development Portfolio",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
}

export default function PortfolioPage() {
  return <PortfolioClientPage />
}
