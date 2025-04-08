"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import { ChevronLeft, Calendar, Clock, Tag, Share2, Facebook, Twitter, Linkedin } from "lucide-react"
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

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const router = useRouter()
  const [post, setPost] = useState<BlogPost | null>(null)
  const [relatedPosts, setRelatedPosts] = useState<BlogPost[]>([])

  useEffect(() => {
    // In a real application, you would fetch the post data from an API
    // For this demo, we'll use mock data
    const blogPosts: BlogPost[] = [
      {
        id: "ai-revolution-in-business",
        title: "The AI Revolution in Business: What Madhya Pradesh Companies Need to Know",
        excerpt:
          "Artificial Intelligence is transforming businesses across India. Learn how companies in Madhya Pradesh can leverage AI to gain a competitive edge.",
        content: `
          <p>Artificial Intelligence (AI) is no longer a futuristic concept—it's here, and it's transforming how businesses operate across the globe. For companies in Madhya Pradesh, embracing AI technologies presents an unprecedented opportunity to innovate, optimize operations, and gain a competitive edge in both local and national markets.</p>
          
          <h2>The Current State of AI Adoption in Madhya Pradesh</h2>
          
          <p>While metropolitan areas like Bangalore, Mumbai, and Delhi lead in AI adoption, Madhya Pradesh is quickly catching up. The state government's initiatives to promote technology parks and digital infrastructure have created a conducive environment for businesses to explore AI solutions.</p>
          
          <p>However, many small and medium enterprises (SMEs) in the region still view AI as either too complex or too expensive to implement. This perception gap is creating a divide between early adopters who are reaping the benefits of AI and those who risk falling behind.</p>
          
          <h2>Practical AI Applications for Local Businesses</h2>
          
          <p>Contrary to popular belief, implementing AI doesn't always require massive investments or specialized teams. Here are some practical applications that businesses in Madhya Pradesh can consider:</p>
          
          <ul>
            <li><strong>Customer Service Automation:</strong> AI-powered chatbots can handle routine customer inquiries, freeing up human agents for more complex issues.</li>
            <li><strong>Predictive Analytics:</strong> AI can analyze historical data to forecast sales trends, helping businesses optimize inventory and staffing.</li>
            <li><strong>Process Automation:</strong> Repetitive tasks like data entry, invoice processing, and report generation can be automated using AI tools.</li>
            <li><strong>Personalized Marketing:</strong> AI algorithms can analyze customer behavior to deliver targeted marketing messages, improving conversion rates.</li>
          </ul>
          
          <h2>Success Stories from the Region</h2>
          
          <p>Several businesses in Madhya Pradesh have already embraced AI with impressive results. A textile manufacturer in Indore implemented AI-powered quality control systems, reducing defects by 30% and cutting inspection costs by 25%. Similarly, a retail chain in Bhopal used AI for inventory management, resulting in a 15% reduction in stockouts and a 20% decrease in excess inventory.</p>
          
          <h2>Getting Started with AI: A Roadmap for MP Businesses</h2>
          
          <p>For businesses looking to embark on their AI journey, here's a practical roadmap:</p>
          
          <ol>
            <li><strong>Identify Pain Points:</strong> Start by identifying specific business challenges that AI could potentially address.</li>
            <li><strong>Start Small:</strong> Begin with a pilot project that has a clear ROI and can demonstrate value quickly.</li>
            <li><strong>Partner with Experts:</strong> Consider partnering with local technology providers who understand both AI and the regional business landscape.</li>
            <li><strong>Invest in Training:</strong> Ensure your team has the skills needed to work alongside AI systems effectively.</li>
            <li><strong>Measure and Iterate:</strong> Continuously evaluate the performance of your AI implementations and refine them based on results.</li>
          </ol>
          
          <h2>Conclusion</h2>
          
          <p>The AI revolution is not just for tech giants or businesses in metropolitan areas. Companies in Madhya Pradesh have a unique opportunity to leverage AI technologies to solve local challenges, improve efficiency, and create new value for customers. By starting small, focusing on specific use cases, and gradually building capabilities, businesses of all sizes can participate in this technological transformation.</p>
          
          <p>The question is no longer whether AI will impact your business, but how quickly you can adapt to stay competitive in this new landscape.</p>
        `,
        author: "Vikram Singh",
        date: "March 15, 2023",
        readTime: "5 min read",
        image: "/placeholder.svg?height=400&width=600",
        category: "Artificial Intelligence",
        tags: ["AI", "Business", "Technology", "Digital Transformation"],
      },
      {
        id: "cloud-migration-strategies",
        title: "Cloud Migration Strategies for Small and Medium Businesses",
        excerpt:
          "Moving to the cloud can be challenging for SMBs. Discover practical strategies to make your cloud migration smooth and successful.",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl sit amet nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl sit amet nisl.",
        author: "Ananya Sharma",
        date: "February 28, 2023",
        readTime: "7 min read",
        image: "/placeholder.svg?height=400&width=600",
        category: "Cloud Computing",
        tags: ["Cloud", "Migration", "SMB", "Infrastructure"],
      },
      {
        id: "mobile-app-development-trends",
        title: "5 Mobile App Development Trends Dominating 2023",
        excerpt:
          "Stay ahead of the curve with these cutting-edge mobile app development trends that are shaping the digital landscape in 2023.",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl sit amet nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl sit amet nisl.",
        author: "Rajat Verma",
        date: "January 12, 2023",
        readTime: "6 min read",
        image: "/placeholder.svg?height=400&width=600",
        category: "Mobile Development",
        tags: ["Mobile", "App Development", "Trends", "Technology"],
      },
    ]

    const currentPost = blogPosts.find((post) => post.id === params.slug)
    setPost(currentPost || null)

    // Find related posts (posts with similar tags)
    if (currentPost) {
      const related = blogPosts
        .filter((p) => p.id !== currentPost.id)
        .filter((p) => p.tags.some((tag) => currentPost.tags.includes(tag)))
        .slice(0, 3)
      setRelatedPosts(related)
    }
  }, [params.slug])

  if (!post) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-4">Post not found</h1>
          <Button
            onClick={() => router.push("/blog")}
            className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white"
          >
            <ChevronLeft className="mr-2 h-5 w-5" />
            Back to Blog
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Button variant="ghost" className="text-gray-400 hover:text-white mb-8" onClick={() => router.push("/blog")}>
            <ChevronLeft className="mr-2 h-5 w-5" />
            Back to Blog
          </Button>

          <div className="max-w-4xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <Badge className="bg-purple-600 hover:bg-purple-700 mb-4">{post.category}</Badge>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">{post.title}</h1>

              <div className="flex flex-wrap items-center text-sm text-gray-400 mb-8">
                <div className="flex items-center mr-6 mb-2">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center text-white font-bold text-sm mr-2">
                    {post.author.charAt(0)}
                  </div>
                  <span>{post.author}</span>
                </div>

                <div className="flex items-center mr-6 mb-2">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>{post.date}</span>
                </div>

                <div className="flex items-center mb-2">
                  <Clock className="h-4 w-4 mr-1" />
                  <span>{post.readTime}</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <img src={post.image || "/placeholder.svg"} alt={post.title} className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="glass p-8 rounded-lg">
              <div
                className="prose prose-lg prose-invert max-w-none"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />

              <div className="mt-12 pt-8 border-t border-gray-800">
                <div className="flex flex-wrap items-center justify-between">
                  <div className="mb-4 md:mb-0">
                    <h4 className="text-white font-semibold mb-2">Tags:</h4>
                    <div className="flex flex-wrap gap-2">
                      {post.tags.map((tag, index) => (
                        <Badge
                          key={index}
                          className="bg-gray-800 hover:bg-gray-700 cursor-pointer"
                          onClick={() => router.push(`/blog?tag=${tag}`)}
                        >
                          <Tag className="h-3 w-3 mr-1" />
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-white font-semibold mb-2">Share:</h4>
                    <div className="flex space-x-3">
                      <Button variant="ghost" size="icon" className="text-gray-400 hover:text-blue-500">
                        <Facebook className="h-5 w-5" />
                      </Button>
                      <Button variant="ghost" size="icon" className="text-gray-400 hover:text-blue-400">
                        <Twitter className="h-5 w-5" />
                      </Button>
                      <Button variant="ghost" size="icon" className="text-gray-400 hover:text-blue-600">
                        <Linkedin className="h-5 w-5" />
                      </Button>
                      <Button variant="ghost" size="icon" className="text-gray-400 hover:text-purple-500">
                        <Share2 className="h-5 w-5" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-20 bg-gradient-to-b from-gray-950 to-gray-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-white mb-8">Related Articles</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost) => (
                <motion.div
                  key={relatedPost.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="glass-card overflow-hidden group cursor-pointer"
                  onClick={() => router.push(`/blog/${relatedPost.id}`)}
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={relatedPost.image || "/placeholder.svg"}
                      alt={relatedPost.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-70" />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-purple-600 hover:bg-purple-700">{relatedPost.category}</Badge>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
                      {relatedPost.title}
                    </h3>
                    <p className="text-gray-400 mb-4 line-clamp-2">{relatedPost.excerpt}</p>

                    <Button variant="ghost" className="text-purple-400 hover:text-purple-300 p-0 hover:bg-transparent">
                      Read Article
                      <ChevronLeft className="ml-1 h-4 w-4 rotate-180" />
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
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
                  <span className="gradient-text">Need Help With Your Project?</span>
                </h2>
                <p className="text-xl text-gray-300 mb-8">
                  Our team of experts is ready to help you implement the latest technologies and best practices in your
                  business.
                </p>

                <Button
                  onClick={() => router.push("/contact")}
                  className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-6 text-lg"
                >
                  Get in Touch
                  <ChevronLeft className="ml-2 h-5 w-5 rotate-180" />
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
