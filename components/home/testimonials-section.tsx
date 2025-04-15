import { Badge } from "@/components/ui/badge"
import ClientTestimonialsSection from "./client-testimonials-section"

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Rajesh Kumar",
      position: "CTO",
      company: "TechSolutions Bhopal",
      testimonial:
        "Fyris helped us create a modern website that perfectly represents our brand. Despite being a new agency, their team showed exceptional skill and dedication.",
    },
    {
      name: "Priya Sharma",
      position: "CEO",
      company: "InnovateMP",
      testimonial:
        "As a startup ourselves, we appreciated Fyris's fresh perspective and innovative approach. They delivered our mobile app on time and within budget.",
    },
    {
      name: "Amit Patel",
      position: "Marketing Director",
      company: "Bhopal Retail Group",
      testimonial:
        "We took a chance on this new agency and were pleasantly surprised. Their attention to detail and responsive communication made the project a success.",
    },
  ]

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-blue-900/20"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <Badge className="bg-gradient-to-r from-purple-600 to-blue-600 mb-4">Testimonials</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-cyan-400 to-blue-400">
              What Our Clients Say
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say about working with us.
          </p>
        </div>

        <ClientTestimonialsSection testimonials={testimonials} />
      </div>
    </section>
  )
}
