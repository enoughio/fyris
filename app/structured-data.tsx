import Script from "next/script"

export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "FYRIS",
    url: "https://fyris.in",
    logo: "https://fyris.in/logo.png",
    description:
      "Leading software development agency in Bhopal, Madhya Pradesh offering AI-powered solutions, custom web development, mobile apps, cloud services, and cybersecurity solutions.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "254 E-2 Arera Colony, Bhopal, Madhya Pradesh, India",
      addressLocality: "Bhopal",
      addressRegion: "Madhya Pradesh",
      postalCode: "462011",
      addressCountry: "IN",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+91 95945 48313",
      contactType: "customer service",
      email: "contact@fyris.in",
    },
    sameAs: [
      "https://www.facebook.com/fyris",
      "https://www.twitter.com/fyris",
      "https://www.linkedin.com/company/fyris",
      "https://www.instagram.com/fyris",
    ],
    serviceArea: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: 23.2599,
        longitude: 77.4126,
      },
      geoRadius: "50000",
    },
    services: [
      {
        "@type": "Service",
        name: "Web Development",
        description: "Custom websites and web applications tailored to your business needs.",
      },
      {
        "@type": "Service",
        name: "Mobile App Development",
        description: "Native and cross-platform mobile applications for iOS and Android.",
      },
      {
        "@type": "Service",
        name: "AI Solutions",
        description: "Intelligent solutions to automate processes and gain insights from data.",
      },
      {
        "@type": "Service",
        name: "Cloud Services",
        description: "Cloud infrastructure setup, migration, and management.",
      },
    ],
  }

  return (
    <Script id="structured-data" type="application/ld+json">
      {JSON.stringify(structuredData)}
    </Script>
  )
}
