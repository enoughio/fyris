import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Fyris - AI-Powered Software Solutions for the Future | Bhopal",
  description:
    "Leading software development agency in Bhopal, Madhya Pradesh offering AI-powered solutions, custom web development, mobile apps, cloud services, and cybersecurity solutions.",
  keywords:
    "software development Bhopal, AI solutions Madhya Pradesh, custom web development Bhopal, mobile app development Madhya Pradesh, cloud consulting Bhopal, cybersecurity Madhya Pradesh, blockchain solutions Bhopal, software agency India",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="geo.region" content="IN-MP" />
        <meta name="geo.placename" content="Bhopal" />
        <meta name="geo.position" content="23.2599;77.4126" />
        <meta name="ICBM" content="23.2599, 77.4126" />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950">
            <Navbar />
            <main>{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'