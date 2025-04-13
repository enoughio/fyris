"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import { ChevronRight, Briefcase, MapPin, Clock, DollarSign, Search } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import CareerForm from "@/components/career-form"
import { jobListings } from "./job-data"

function JobCard({ job, onClick }: { job: any; onClick: () => void }) {
  const router = useRouter()

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="glass-card p-6 cursor-pointer hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-300 relative overflow-hidden"
      onClick={() => router.push(`/careers/${job.id}`)}
    >
      {job.isInternship && (
        <div className="absolute top-0 right-0">
          <div className="bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-bl-md">INTERNSHIP</div>
        </div>
      )}

      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
        <h3 className="text-xl font-bold text-white mb-2 md:mb-0">{job.title}</h3>
        <Badge className={job.isRemote ? "bg-green-600 hover:bg-green-700" : "bg-purple-600 hover:bg-purple-700"}>
          {job.isRemote ? "Remote" : "On-site"}
        </Badge>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
        <div className="flex items-center">
          <Briefcase className="h-4 w-4 text-purple-500 mr-2" />
          <span className="text-gray-400">{job.department}</span>
        </div>
        <div className="flex items-center">
          <MapPin className="h-4 w-4 text-purple-500 mr-2" />
          <span className="text-gray-400">{job.location}</span>
        </div>
        <div className="flex items-center">
          <Clock className="h-4 w-4 text-purple-500 mr-2" />
          <span className="text-gray-400">{job.type}</span>
        </div>
        <div className="flex items-center">
          <DollarSign className="h-4 w-4 text-purple-500 mr-2" />
          <span className="text-gray-400">{job.salary}</span>
        </div>
      </div>

      <p className="text-gray-400 mb-4 line-clamp-2">{job.description}</p>

      <div className="flex items-center text-purple-400 group">
        <span className="mr-2 transition-all duration-300 group-hover:mr-3">View Details</span>
        <ChevronRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
      </div>
    </motion.div>
  )
}

function RecruitmentProcess() {
  const steps = [
    {
      title: "Application Review",
      description: "We review your application, resume, and portfolio to assess your skills and experience.",
    },
    {
      title: "Initial Screening",
      description: "Qualified candidates receive a brief screening call or assignment to evaluate relevant skills.",
    },
    {
      title: "Interview",
      description: "Selected candidates move forward to an in-depth interview with our team leads.",
    },
    {
      title: "Final Assessment",
      description: "For technical roles, we may ask for a small practical assignment or portfolio review.",
    },
    {
      title: "Offer",
      description: "Successful candidates receive an offer letter with role details and compensation.",
    },
  ]

  return (
    <div className="space-y-8">
      <h3 className="text-2xl font-bold text-white mb-6">Our Recruitment Process</h3>

      <div className="relative">
        {/* Center line */}
        <div className="absolute left-[22px] top-2 bottom-10 w-1 bg-gradient-to-b from-purple-600 via-blue-500 to-cyan-400"></div>

        <div className="space-y-10">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex"
            >
              <div className="flex-shrink-0 mr-6">
                <div className="w-11 h-11 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 flex items-center justify-center text-white font-bold text-lg z-10 relative">
                  {index + 1}
                </div>
              </div>

              <div className="glass-card p-5 flex-1">
                <h4 className="text-lg font-semibold text-white mb-2">{step.title}</h4>
                <p className="text-gray-400">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function CareersClientPage() {
  const router = useRouter()
  const [filter, setFilter] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")
  const [activeTab, setActiveTab] = useState("openings")

  const filteredJobs = jobListings.filter((job) => {
    // Apply search filter
    if (searchQuery) {
      const searchLower = searchQuery.toLowerCase()
      return (
        job.title.toLowerCase().includes(searchLower) ||
        job.department.toLowerCase().includes(searchLower) ||
        job.description.toLowerCase().includes(searchLower)
      )
    }

    // Apply category filter
    if (filter === "all") return true
    if (filter === "remote") return job.isRemote
    if (filter === "internship") return job.isInternship
    return job.department.toLowerCase().includes(filter.toLowerCase())
  })

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
              <span className="gradient-text">Join Our Team</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              We're looking for talented individuals to help us build innovative solutions for our clients. Explore our
              current openings and find your next opportunity.
            </p>

            <div className="flex justify-center mb-8">
              <Button
                onClick={() => {
                  const element = document.getElementById("openings")
                  element?.scrollIntoView({ behavior: "smooth" })
                  setActiveTab("openings")
                }}
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white mr-4"
              >
                View Openings
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                className="border-purple-500/50 hover:border-purple-500 text-white"
                onClick={() => {
                  const element = document.getElementById("application")
                  element?.scrollIntoView({ behavior: "smooth" })
                  setActiveTab("application")
                }}
              >
                General Application
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Join Us Section */}
      <section className="py-20 bg-gradient-to-b from-gray-950 to-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="gradient-text">Why Join Fyris?</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              We offer a dynamic work environment where you can grow your skills and make an impact
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Innovative Projects",
                description:
                  "Work on cutting-edge technologies and challenging projects that push the boundaries of what's possible.",
                icon: <Briefcase className="h-8 w-8 text-purple-400" />,
              },
              {
                title: "Growth Opportunities",
                description:
                  "We invest in your professional development with training, mentorship, and opportunities to learn new skills.",
                icon: <ChevronRight className="h-8 w-8 text-purple-400 rotate-90" />,
              },
              {
                title: "Work-Life Balance",
                description:
                  "We believe in flexible work arrangements that allow you to do your best work while maintaining a healthy lifestyle.",
                icon: <MapPin className="h-8 w-8 text-purple-400" />,
              },
              {
                title: "Collaborative Culture",
                description:
                  "Join a team of passionate professionals who collaborate, share knowledge, and support each other.",
                icon: <DollarSign className="h-8 w-8 text-purple-400" />,
              },
              {
                title: "Competitive Benefits",
                description:
                  "Enjoy competitive compensation, health benefits, and perks that recognize your contributions.",
                icon: <Clock className="h-8 w-8 text-purple-400" />,
              },
              {
                title: "Make an Impact",
                description:
                  "Your work will directly impact our clients and help businesses succeed in the digital age.",
                icon: <Search className="h-8 w-8 text-purple-400" />,
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card p-6"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-purple-600/20 to-blue-600/20 flex items-center justify-center mr-4">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white">{item.title}</h3>
                </div>
                <p className="text-gray-400">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Tabs Section */}
      <section className="py-20" id="openings">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue={activeTab} value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid grid-cols-2 w-full max-w-md mx-auto mb-10">
              <TabsTrigger
                value="openings"
                className="data-[state=active]:bg-gradient-to-r from-purple-600 to-blue-600"
              >
                Current Openings
              </TabsTrigger>
              <TabsTrigger
                value="application"
                className="data-[state=active]:bg-gradient-to-r from-purple-600 to-blue-600"
              >
                General Application
              </TabsTrigger>
            </TabsList>

            <TabsContent value="openings">
              <div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="mb-12"
                >
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    <span className="gradient-text">Current Openings</span>
                  </h2>
                  <p className="text-xl text-gray-400 max-w-3xl mb-8">
                    Explore our current job opportunities and find the perfect role for your skills and interests
                  </p>

                  <div className="flex justify-between items-center flex-wrap gap-4 mb-8">
                    <div className="flex flex-wrap gap-3">
                      <Button
                        variant={filter === "all" ? "default" : "outline"}
                        className={
                          filter === "all"
                            ? "bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white"
                            : "border-gray-700 text-gray-300 hover:text-white hover:border-purple-500"
                        }
                        onClick={() => setFilter("all")}
                      >
                        All Positions
                      </Button>
                      <Button
                        variant={filter === "internship" ? "default" : "outline"}
                        className={
                          filter === "internship"
                            ? "bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white"
                            : "border-gray-700 text-gray-300 hover:text-white hover:border-purple-500"
                        }
                        onClick={() => setFilter("internship")}
                      >
                        Internships
                      </Button>
                      <Button
                        variant={filter === "design" ? "default" : "outline"}
                        className={
                          filter === "design"
                            ? "bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white"
                            : "border-gray-700 text-gray-300 hover:text-white hover:border-purple-500"
                        }
                        onClick={() => setFilter("design")}
                      >
                        Design
                      </Button>
                      <Button
                        variant={filter === "engineering" ? "default" : "outline"}
                        className={
                          filter === "engineering"
                            ? "bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white"
                            : "border-gray-700 text-gray-300 hover:text-white hover:border-purple-500"
                        }
                        onClick={() => setFilter("engineering")}
                      >
                        Engineering
                      </Button>
                    </div>

                    <div className="relative min-w-[200px]">
                      <Input
                        type="text"
                        placeholder="Search positions..."
                        className="bg-gray-900/50 border-gray-700 focus:border-purple-500 pl-10"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                      />
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    </div>
                  </div>
                </motion.div>

                <div className="space-y-6">
                  {filteredJobs.map((job) => (
                    <JobCard key={job.id} job={job} onClick={() => {}} />
                  ))}

                  {filteredJobs.length === 0 && (
                    <div className="text-center py-12 glass-card">
                      <p className="text-gray-400 text-lg mb-4">No job openings found that match your criteria.</p>
                      <Button
                        onClick={() => {
                          setFilter("all")
                          setSearchQuery("")
                        }}
                        className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white"
                      >
                        View All Positions
                      </Button>
                    </div>
                  )}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="application" id="application">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <h2 className="text-3xl font-bold mb-4">
                    <span className="gradient-text">Don't See a Perfect Match?</span>
                  </h2>
                  <p className="text-xl text-gray-300 mb-8">
                    We're always looking for talented individuals to join our team. Submit your resume, and we'll keep
                    it on file for future opportunities.
                  </p>

                  <RecruitmentProcess />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <h2 className="text-3xl font-bold mb-6">
                    <span className="gradient-text">General Application</span>
                  </h2>
                  <CareerForm />
                </motion.div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

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
                  <span className="gradient-text">Ready to Grow with Us?</span>
                </h2>
                <p className="text-xl text-gray-300 mb-8">
                  Join our team of innovative professionals and build the future of digital experiences together.
                </p>

                <Button
                  onClick={() => {
                    const element = document.getElementById("openings")
                    element?.scrollIntoView({ behavior: "smooth" })
                    setActiveTab("openings")
                  }}
                  className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-6 text-lg"
                >
                  Explore Opportunities
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
