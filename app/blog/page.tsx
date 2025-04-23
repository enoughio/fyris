"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import { ChevronRight, Search, Calendar, User, Clock } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"

interface BlogPost {
  id: string
  title: string
  excerpt: string
  content: string
  author: string
  date: string
  readTime: string
  image: string
  category: string
  tags: string[]
}

function BlogCard({ post }: { post: BlogPost }) {
  const router = useRouter()

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="glass-card overflow-hidden group cursor-pointer"
      onClick={() => router.push(`/blog/${post.id}`)}
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={post.image || "/placeholder.svg"}
          alt={post.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-70" />
        <div className="absolute top-4 left-4">
          <Badge className="bg-purple-600 hover:bg-purple-700">{post.category}</Badge>
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-center text-sm text-gray-400 mb-3">
          <div className="flex items-center mr-4">
            <Calendar className="h-4 w-4 mr-1" />
            <span>{post.date}</span>
          </div>
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-1" />
            <span>{post.readTime}</span>
          </div>
        </div>

        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
          {post.title}
        </h3>
        <p className="text-gray-400 mb-4 line-clamp-2">{post.excerpt}</p>

        <div className="flex items-center">
          <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center text-white font-bold text-sm mr-2">
            {post.author.charAt(0)}
          </div>
          <span className="text-gray-400 text-sm">{post.author}</span>
        </div>
      </div>
    </motion.div>
  )
}

function FeaturedPost({ post }: { post: BlogPost }) {
  const router = useRouter()

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="glass p-6 rounded-lg overflow-hidden cursor-pointer"
      onClick={() => router.push(`/blog/${post.id}`)}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div className="relative h-64 lg:h-full overflow-hidden rounded-lg">
          <img
            src={post.image || "/placeholder.svg"}
            alt={post.title}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
          />
        </div>

        <div>
          <Badge className="bg-purple-600 hover:bg-purple-700 mb-4">{post.category}</Badge>

          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 hover:text-purple-400 transition-colors">
            {post.title}
          </h2>

          <div className="flex items-center text-sm text-gray-400 mb-4">
            <div className="flex items-center mr-4">
              <User className="h-4 w-4 mr-1" />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center mr-4">
              <Calendar className="h-4 w-4 mr-1" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-1" />
              <span>{post.readTime}</span>
            </div>
          </div>

          <p className="text-gray-300 mb-6">{post.excerpt}</p>

          <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white">
            Read Article
            <ChevronRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </motion.div>
  )
}

export default function BlogPage() {
  const router = useRouter()
  const [searchQuery, setSearchQuery] = useState("")

  const blogPosts: BlogPost[] = [
    {
      id: "mobile-app-development-trends",
      title: "5 Mobile App Development Trends Dominating 2023",
      excerpt:
        "Stay ahead of the curve with these cutting-edge mobile app development trends that are shaping the digital landscape in 2023.",
      content:
      "5 Mobile App Development Trends Dominating 2024. The mobile app industry continues to evolve rapidly, and 2024 has brought forward innovative trends that are transforming the way users interact with technology. Businesses looking to stay ahead must understand and adapt to these developments to deliver seamless, engaging, and future-proof experiences. One of the top trends dominating 2024 is the rise of AI-powered personalization. Apps now integrate machine learning algorithms to provide users with dynamic content recommendations, predictive text, behavior-based notifications, and intelligent chatbots—boosting engagement and retention rates. The second major trend is the increased adoption of 5G technology, which is enabling faster data transfer, improved app performance, and the ability to support high-definition streaming, real-time AR/VR applications, and complex multiplayer mobile games. The third trend is the focus on super apps—platforms that combine multiple services like payments, messaging, shopping, and bookings within a single application. These apps are gaining traction as users prefer an all-in-one solution that reduces the need for multiple downloads. The fourth trend centers around cross-platform development. Frameworks like Flutter and React Native are becoming increasingly popular, allowing developers to build apps for both iOS and Android using a single codebase. This significantly reduces development costs and time-to-market while maintaining native performance and aesthetics. The fifth major trend is privacy and data security. With users becoming more concerned about how their data is used, apps in 2024 are prioritizing secure logins, encrypted communications, transparent permissions, and compliance with global privacy regulations like GDPR and CCPA. In conclusion, mobile app development in 2024 is being driven by personalization, speed, multifunctionality, cross-platform compatibility, and data protection. Companies that embrace these trends will not only enhance user satisfaction but also gain a competitive edge in the crowded app marketplace.",
      author: "Rajat Verma",
      date: "November 12, 2024",
      readTime: "6 min read",
      image: "/mobile-app-development-trends.png",
      category: "Mobile Development",
      tags: ["Mobile", "App Development", "Trends", "Technology"],
    },
    {
      id: "cybersecurity-for-businesses",
      title: "Essential Cybersecurity Measures for Businesses in 2023",
      excerpt:
        "Protect your business from cyber threats with these essential security measures that every company should implement.",
      content:"Essential Cybersecurity Measures for Businesses in 2025. As businesses become increasingly digital in 2025, cybersecurity is no longer optional—it is a critical necessity. With growing threats like ransomware, phishing, supply chain attacks, and insider breaches, companies must take proactive steps to protect their digital infrastructure and customer data. Cybercriminals are using AI-powered tools and sophisticated attack vectors, making it vital for organizations to stay ahead with modern security protocols. One of the foundational cybersecurity measures for businesses is the implementation of a zero-trust architecture. This model assumes no device or user is trustworthy by default and continuously verifies access, dramatically reducing the risk of lateral movement in the event of a breach. Companies should also enforce multi-factor authentication (MFA) across all systems to ensure secure access and prevent unauthorized logins. Regular patch management and software updates are crucial to close known vulnerabilities that attackers often exploit. Businesses must adopt endpoint detection and response (EDR) systems, which provide real-time visibility and rapid incident response capabilities. Firewalls, intrusion detection systems (IDS), and secure network configurations act as the first line of defense against external threats. Employee training remains one of the most effective cybersecurity strategies. In 2025, social engineering attacks are more deceptive than ever, making it essential for organizations to educate staff on recognizing phishing emails, suspicious links, and proper data handling. Data encryption—both at rest and in transit—ensures that even if data is intercepted, it remains unreadable. Companies must also invest in secure cloud solutions with compliance certifications to protect sensitive data stored and processed online. Developing a business continuity and disaster recovery plan is imperative to ensure quick restoration of services and minimal data loss during cyber incidents. Regular security audits, penetration testing, and vulnerability assessments help identify and fix gaps in the security posture. Moreover, businesses should align with cybersecurity frameworks like ISO/IEC 27001, NIST, or GDPR compliance, depending on their region and industry. In conclusion, 2025 demands a forward-thinking and layered approach to cybersecurity. By integrating advanced technologies, enforcing strict access controls, training employees, and continuously monitoring their IT environments, businesses can significantly reduce their risk and build trust with customers and partners. Cybersecurity is no longer just an IT issue—it's a business priority and a cornerstone of long-term resilience and success.",
      author: "Neha Gupta",
      date: "April 5, 2025",
      readTime: "8 min read",
      image: "/cybersecurity-for-businesses.png",
      category: "Cybersecurity",
      tags: ["Security", "Cyber Threats", "Data Protection", "Privacy"],
    },
    {
      id: "web-development-frameworks",
      title: "Comparing Modern Web Development Frameworks: React vs. Vue vs. Angular",
      excerpt:
        "Confused about which framework to choose for your next web project? This comprehensive comparison will help you make an informed decision.",
      content:"Comparing Modern Web Development Frameworks: React vs. Vue vs. Angular. In the fast-paced world of web development, choosing the right framework can significantly influence the performance, scalability, and maintainability of a project. Among the most popular choices today are React, Vue, and Angular. Each framework brings its unique strengths, community support, and ecosystem, making it crucial for developers and businesses to understand their differences before making a decision. React, developed by Facebook, is a JavaScript library focused on building user interfaces. It uses a component-based architecture, which allows developers to create reusable UI components, enhancing code maintainability and scalability. React’s virtual DOM enables fast and efficient updates, making it a top choice for dynamic, high-performance applications. The large developer community and ecosystem of libraries and tools also make React an attractive option for startups and enterprises alike. Vue.js, on the other hand, is a progressive JavaScript framework created by Evan You. Vue is praised for its simplicity and ease of integration, especially for projects that need to be scaled gradually. Its core library focuses on the view layer, but it offers additional packages for routing and state management when needed. Vue’s gentle learning curve, two-way data binding, and detailed documentation make it a favorite among beginner and intermediate developers. It strikes a balance between the structure of Angular and the flexibility of React. Angular, developed and maintained by Google, is a comprehensive framework for building large-scale, enterprise-grade applications. Unlike React and Vue, Angular is a full-fledged MVC framework that includes everything from data binding and routing to form validation and HTTP services. It uses TypeScript, a statically typed superset of JavaScript, which adds an additional layer of security and maintainability. Angular’s robust CLI tools, dependency injection, and strong community support make it a powerful option for complex applications with strict architectural requirements. When comparing performance, React tends to be the most lightweight and flexible, especially for single-page applications (SPAs). Vue offers a balanced approach with performance close to React and a more opinionated structure. Angular, while heavier, excels in managing large applications with many moving parts. The choice between these frameworks ultimately depends on the project requirements, team expertise, and future scalability needs. For quick prototypes or progressive enhancement, Vue might be the most efficient. React is ideal for interactive UIs and large user bases, while Angular is suited for enterprise-level applications that demand a complete solution. In conclusion, React, Vue, and Angular each serve specific use cases and offer distinct development philosophies. By carefully evaluating their features, performance, and ecosystem, developers can select the most suitable framework to deliver modern, scalable, and high-performing web applications.",
      author: "Arjun Kumar",
      date: "March 22, 2023",
      readTime: "10 min read",
      image: "/web-development-frameworks.png",
      category: "Web Development",
      tags: ["React", "Vue", "Angular", "Frameworks", "Frontend"],
    },
    {
      id: "blockchain-in-supply-chain",
      title: "How Blockchain is Revolutionizing Supply Chain Management",
      excerpt:
        "Discover how blockchain technology is bringing transparency, efficiency, and security to supply chain operations across industries.",
      content:
      "How Blockchain is Revolutionizing Supply Chain Management. In today’s increasingly globalized and complex economy, supply chain management has become a critical function for businesses across industries. As companies strive for more efficiency, transparency, and security in their supply chains, blockchain technology is emerging as a transformative force. Originally known as the foundation of cryptocurrencies like Bitcoin, blockchain is now disrupting supply chain operations by offering traceability, security, and real-time data sharing. At its core, blockchain is a decentralized, immutable ledger that records transactions across multiple computers. This distributed structure ensures that no single party controls the data, making it highly secure and tamper-proof. In supply chain management, this means stakeholders — from manufacturers and suppliers to logistics providers and retailers — can access a shared, real-time view of the flow of goods and information. One of the most significant benefits of blockchain in the supply chain is enhanced transparency and traceability. With blockchain, each step in the product journey — from raw materials to final delivery — is recorded in a chronological, verifiable, and immutable way. This helps reduce fraud, counterfeiting, and gray market activities, which are particularly common in industries such as pharmaceuticals, food, and luxury goods. Consumers, too, can gain confidence by verifying product origin and authenticity. Another major advantage is improved efficiency and reduced paperwork. Smart contracts — self-executing agreements with terms written into code — can automate transactions and trigger actions when certain conditions are met. This eliminates the need for intermediaries, minimizes human error, and reduces delays. For example, a smart contract could automatically release payment once goods are delivered and verified. Real-time data sharing is another game-changer. In traditional supply chains, data silos and lack of trust between parties often hinder decision-making. With blockchain, every participant has access to a single source of truth. This leads to faster dispute resolution, better inventory management, and improved collaboration between partners. Moreover, blockchain strengthens supply chain security. Since data on a blockchain cannot be altered without consensus from the network, it significantly reduces the risk of cyberattacks and data manipulation. This level of data integrity is crucial for industries dealing with sensitive information or compliance-heavy environments. Several leading companies and industries have already started integrating blockchain into their supply chain systems. For instance, IBM and Maersk’s TradeLens platform is digitizing global trade, while Walmart is using blockchain to track food products from farm to shelf in seconds, rather than days. While blockchain offers immense potential, it’s essential to address challenges such as scalability, standardization, and regulatory hurdles. Nonetheless, as technology continues to evolve, the adoption of blockchain in supply chain management is expected to grow, bringing with it a new era of accountability, efficiency, and innovation.",
      author: "Priya Patel",
      date: "April 18, 2023",
      readTime: "7 min read",
      image: "/blockchain-in-supply-chain.png",
      category: "Blockchain",
      tags: ["Blockchain", "Supply Chain", "Transparency", "Innovation"],
    },
  ]

  const filteredPosts = searchQuery
    ? blogPosts.filter(
        (post) =>
          post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
          post.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase())),
      )
    : blogPosts

  const featuredPost = blogPosts[0]
  const categories = [
    "All",
    "Artificial Intelligence",
    "Cloud Computing",
    "Web Development",
    "Mobile Development",
    "Cybersecurity",
    "Blockchain",
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="gradient-text">Blog & Insights</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Stay updated with the latest trends, insights, and news in technology and software development.
            </p>

            <div className="relative max-w-xl mx-auto">
              <Input
                type="text"
                placeholder="Search articles..."
                className="bg-gray-900/50 border-gray-700 focus:border-purple-500 pl-10 py-6"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white mb-6">Featured Article</h2>
          <FeaturedPost post={featuredPost} />
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20 bg-gradient-to-b from-gray-950 to-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
            <h2 className="text-2xl font-bold text-white mb-4 md:mb-0">Latest Articles</h2>

            <div className="flex flex-wrap gap-2">
              {categories.map((category, index) => (
                <Badge
                  key={index}
                  className={`cursor-pointer ${
                    searchQuery === category || (searchQuery === "" && category === "All")
                      ? "bg-purple-600 hover:bg-purple-700"
                      : "bg-gray-800 hover:bg-gray-700"
                  }`}
                  onClick={() => setSearchQuery(category === "All" ? "" : category)}
                >
                  {category}
                </Badge>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.slice(1).map((post, index) => (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card overflow-hidden group cursor-pointer"
                onClick={() => router.push(`/blog/${post.id}`)}
                key={post.id}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-70" />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-purple-600 hover:bg-purple-700">{post.category}</Badge>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-400 mb-3">
                    <div className="flex items-center mr-4">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-400 mb-4 line-clamp-2">{post.excerpt}</p>

                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center text-white font-bold text-sm mr-2">
                      {post.author.charAt(0)}
                    </div>
                    <span className="text-gray-400 text-sm">{post.author}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredPosts.length <= 1 && (
            <div className="text-center py-12">
              <p className="text-gray-400 text-lg">No articles found matching your search criteria.</p>
            </div>
          )}

          {filteredPosts.length > 4 && (
            <div className="text-center mt-12">
              <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white">
                Load More Articles
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-blue-900/20" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="glass p-8 md:p-12 rounded-2xl">
            <div className="text-center max-w-3xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  <span className="gradient-text">Subscribe to Our Newsletter</span>
                </h2>
                <p className="text-xl text-gray-300 mb-8">
                  Get the latest articles, insights, and updates delivered directly to your inbox.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    className="bg-gray-900/50 border-gray-700 focus:border-purple-500 py-6"
                  />
                  <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white whitespace-nowrap">
                    Subscribe
                    <ChevronRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>

                <p className="text-gray-400 text-sm mt-4">We respect your privacy. Unsubscribe at any time.</p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

