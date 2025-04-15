import { Check } from "lucide-react"
import ClientCTASection from "./client-cta-section"

export default function CTASection() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-gray-950"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="glass p-8 md:p-12 rounded-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-cyan-400 to-blue-400">
                  Ready to Transform Your Business?
                </span>
              </h2>
              <p className="text-xl text-gray-300 mb-6">
                Let's collaborate to build innovative solutions that drive growth and efficiency for your business in
                Bhopal and beyond.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Custom solutions tailored to your specific needs",
                  "Expert team with deep technical expertise",
                  "Transparent communication throughout the project",
                  "Ongoing support and maintenance",
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="h-5 w-5 text-purple-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <ClientCTASection />
          </div>
        </div>
      </div>
    </section>
  )
}
