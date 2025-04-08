import type { Metadata } from "next"
import CareersPage from "./clientPage";

export const metadata: Metadata = {
  title: "Careers - Join Our Team at Fyris | Software Development Agency",
  description:
    "Explore career opportunities at Fyris. Join our team of passionate developers, designers, and tech enthusiasts in Bhopal. View current openings and apply online.",
  keywords:
    "careers at Fyris, software development jobs, tech jobs Bhopal, developer positions, IT careers Madhya Pradesh, join tech team",
  openGraph: {
    title: "Careers - Join Our Team at Fyris | Software Development Agency",
    description:
      "Explore career opportunities at Fyris. Join our team of passionate developers, designers, and tech enthusiasts in Bhopal. View current openings and apply online.",
    url: "https://fyris.in/careers",
    siteName: "Fyris",
    images: [
      {
        url: "/og-image-careers.jpg",
        width: 1200,
        height: 630,
        alt: "Careers at Fyris Software Development Agency",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
}
;


export default function (){
  <div>
    <CareersPage />
  </div>
}
  