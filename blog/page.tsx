"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import { ChevronRight, Search, Calendar, User, Clock } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Blog - Insights on Technology & Software Development | Fyris",
  description:
    "Read our latest articles and insights on web development, mobile apps, AI, cloud computing, and technology trends. Stay updated with Fyris's expert perspectives.",
  keywords:
    "tech blog, software development articles, web development insights, AI trends, cloud computing blog, technology news Bhopal",
  openGraph: {
    title: "Blog - Insights on Technology & Software Development | Fyris",
    description:
      "Read our latest articles and insights on web development, mobile apps, AI, cloud computing, and technology trends. Stay updated with Fyris's expert perspectives.",
    url: "https://fyris.in/blog",
    siteName: "Fyris",
    images: [
      {
        url: "/og-image-blog.jpg",
        width: 1200,
        height: 630,
        alt: "Fyris Software Development Blog",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
}

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
      id: "ai-revolution-in-business",
      title: "The AI Revolution in Business: What Madhya Pradesh Companies Need to Know",
      excerpt:
        "Artificial Intelligence is transforming businesses across India. Learn how companies in Madhya Pradesh can leverage AI to gain a competitive edge.",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl sit amet nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl sit amet nisl.",
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
    {
      id: "cybersecurity-for-businesses",
      title: "Essential Cybersecurity Measures for Businesses in 2023",
      excerpt:
        "Protect your business from cyber threats with these essential security measures that every company should implement.",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl sit amet nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl sit amet nisl.",
      author: "Neha Gupta",
      date: "April 5, 2023",
      readTime: "8 min read",
      image: "/placeholder.svg?height=400&width=600",
      category: "Cybersecurity",
      tags: ["Security", "Cyber Threats", "Data Protection", "Privacy"],
    },
    {
      id: "web-development-frameworks",
      title: "Comparing Modern Web Development Frameworks: React vs. Vue vs. Angular",
      excerpt:
        "Confused about which framework to choose for your next web project? This comprehensive comparison will help you make an informed decision.",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl sit amet nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl sit amet nisl.",
      author: "Arjun Kumar",
      date: "March 22, 2023",
      readTime: "10 min read",
      image: "/placeholder.svg?height=400&width=600",
      category: "Web Development",
      tags: ["React", "Vue", "Angular", "Frameworks", "Frontend"],
    },
    {
      id: "blockchain-in-supply-chain",
      title: "How Blockchain is Revolutionizing Supply Chain Management",
      excerpt:
        "Discover how blockchain technology is bringing transparency, efficiency, and security to supply chain operations across industries.",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl sit amet nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl sit amet nisl.",
      author: "Priya Patel",
      date: "April 18, 2023",
      readTime: "7 min read",
      image: "/placeholder.svg?height=400&width=600",
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
\
