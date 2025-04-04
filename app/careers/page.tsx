"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import { ChevronRight, Briefcase, MapPin, Clock, DollarSign, Check } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import CareerForm from "@/components/career-form"

interface JobListing {
  id: string
  title: string
  department: string
  location: string
  type: string
  experience: string
  salary: string
  description: string
  responsibilities: string[]
  requirements: string[]
  benefits: string[]
  isRemote: boolean
}

function JobCard({ job, onClick }: { job: JobListing; onClick: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="glass-card p-6 cursor-pointer hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-300"
      onClick={onClick}
    >
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

      <Button variant="ghost" className="text-purple-400 hover:text-purple-300 p-0 hover:bg-transparent">
        View Details
        <ChevronRight className="ml-1 h-4 w-4" />
      </Button>
    </motion.div>
  )
}

function JobDetail({ job }: { job: JobListing }) {
  return (
    <div>
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
        <h3 className="text-2xl font-bold text-white mb-2 md:mb-0">{job.title}</h3>
        <Badge className={job.isRemote ? "bg-green-600 hover:bg-green-700" : "bg-purple-600 hover:bg-purple-700"}>
          {job.isRemote ? "Remote" : "On-site"}
        </Badge>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
        <div className="flex items-center">
          <Briefcase className="h-5 w-5 text-purple-500 mr-2" />
          <span className="text-gray-300">{job.department}</span>
        </div>
        <div className="flex items-center">
          <MapPin className="h-5 w-5 text-purple-500 mr-2" />
          <span className="text-gray-300">{job.location}</span>
        </div>
        <div className="flex items-center">
          <Clock className="h-5 w-5 text-purple-500 mr-2" />
          <span className="text-gray-300">{job.type}</span>
        </div>
        <div className="flex items-center">
          <DollarSign className="h-5 w-5 text-purple-500 mr-2" />
          <span className="text-gray-300">{job.salary}</span>
        </div>
      </div>

      <Tabs defaultValue="description" className="w-full">
        <TabsList className="grid grid-cols-4 glass mb-6">
          <TabsTrigger value="description">Description</TabsTrigger>
          <TabsTrigger value="responsibilities">Responsibilities</TabsTrigger>
          <TabsTrigger value="requirements">Requirements</TabsTrigger>
          <TabsTrigger value="benefits">Benefits</TabsTrigger>
        </TabsList>

        <TabsContent value="description" className="mt-0">
          <div className="glass-card p-6">
            <p className="text-gray-300">{job.description}</p>
          </div>
        </TabsContent>

        <TabsContent value="responsibilities" className="mt-0">
          <div className="glass-card p-6">
            <ul className="space-y-2">
              {job.responsibilities.map((item, index) => (
                <li key={index} className="flex items-start">
                  <Check className="h-5 w-5 text-purple-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </TabsContent>

        <TabsContent value="requirements" className="mt-0">
          <div className="glass-card p-6">
            <ul className="space-y-2">
              {job.requirements.map((item, index) => (
                <li key={index} className="flex items-start">
                  <Check className="h-5 w-5 text-purple-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </TabsContent>

        <TabsContent value="benefits" className="mt-0">
          <div className="glass-card p-6">
            <ul className="space-y-2">
              {job.benefits.map((item, index) => (
                <li key={index} className="flex items-start">
                  <Check className="h-5 w-5 text-purple-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </TabsContent>
      </Tabs>

      <div className="mt-8">
        <DialogTrigger asChild>
          <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white py-6">
            Apply for this Position
            <ChevronRight className="ml-2 h-5 w-5" />
          </Button>
        </DialogTrigger>
      </div>
    </div>
  )
}

export default function CareersPage() {
  const router = useRouter()
  const [selectedJob, setSelectedJob] = useState<JobListing | null>(null)
  const [filter, setFilter] = useState("all")

  const jobs: JobListing[] = [
    {
      id: "senior-react-developer",
      title: "Senior React Developer",
      department: "Engineering",
      location: "Bhopal, MP",
      type: "Full-time",
      experience: "3+ years",
      salary: "₹12L - ₹18L per annum",
      description:
        "We are looking for a Senior React Developer to join our team and help build cutting-edge web applications for our clients. The ideal candidate will have strong experience with React, Next.js, and modern frontend development practices.",
      responsibilities: [
        "Design and implement new features and functionality for web applications",
        "Write clean, maintainable, and efficient code",
        "Collaborate with cross-functional teams to define, design, and ship new features",
        "Identify and resolve performance bottlenecks",
        "Mentor junior developers and conduct code reviews",
        "Stay up-to-date with emerging trends and technologies in frontend development",
      ],
      requirements: [
        "3+ years of experience with React.js and its ecosystem",
        "Strong proficiency in JavaScript, HTML, and CSS",
        "Experience with Next.js, TypeScript, and state management libraries",
        "Understanding of RESTful APIs and GraphQL",
        "Knowledge of responsive design and cross-browser compatibility",
        "Familiarity with testing frameworks like Jest and React Testing Library",
        "Good understanding of UI/UX design principles",
        "Excellent problem-solving and communication skills",
      ],
      benefits: [
        "Competitive salary and performance bonuses",
        "Health insurance coverage",
        "Flexible work hours",
        "Remote work options",
        "Professional development opportunities",
        "Modern office space with amenities",
        "Regular team outings and events",
      ],
      isRemote: true,
    },
    {
      id: "ai-engineer",
      title: "AI Engineer",
      department: "AI & Data Science",
      location: "Bhopal, MP",
      type: "Full-time",
      experience: "2+ years",
      salary: "₹10L - ₹16L per annum",
      description:
        "We are seeking an AI Engineer to develop and implement AI models and solutions for our clients. The ideal candidate will have experience with machine learning, natural language processing, and data analysis.",
      responsibilities: [
        "Design, develop, and deploy AI models and algorithms",
        "Process, clean, and verify the integrity of data used for analysis",
        "Implement machine learning algorithms and libraries",
        "Develop and maintain AI systems and applications",
        "Collaborate with data scientists and software engineers",
        "Stay up-to-date with the latest AI research and technologies",
      ],
      requirements: [
        "Bachelor's or Master's degree in Computer Science, AI, or related field",
        "2+ years of experience in AI/ML development",
        "Proficiency in Python and AI/ML libraries (TensorFlow, PyTorch, scikit-learn)",
        "Experience with NLP, computer vision, or predictive modeling",
        "Understanding of data structures, data modeling, and software architecture",
        "Knowledge of cloud platforms (AWS, Azure, GCP)",
        "Strong problem-solving and analytical skills",
      ],
      benefits: [
        "Competitive salary and performance bonuses",
        "Health insurance coverage",
        "Flexible work hours",
        "Remote work options",
        "Professional development opportunities",
        "Modern office space with amenities",
        "Regular team outings and events",
      ],
      isRemote: false,
    },
    {
      id: "devops-engineer",
      title: "DevOps Engineer",
      department: "Infrastructure",
      location: "Bhopal, MP",
      type: "Full-time",
      experience: "2+ years",
      salary: "₹8L - ₹14L per annum",
      description:
        "We are looking for a DevOps Engineer to help us build and maintain our cloud infrastructure and CI/CD pipelines. The ideal candidate will have experience with cloud platforms, containerization, and automation tools.",
      responsibilities: [
        "Design, implement, and manage CI/CD pipelines",
        "Automate infrastructure provisioning and configuration",
        "Monitor system performance and troubleshoot issues",
        "Implement security best practices and ensure compliance",
        "Collaborate with development teams to improve deployment processes",
        "Document infrastructure and processes",
      ],
      requirements: [
        "2+ years of experience in DevOps or similar role",
        "Experience with cloud platforms (AWS, Azure, GCP)",
        "Knowledge of containerization (Docker, Kubernetes)",
        "Experience with infrastructure as code (Terraform, CloudFormation)",
        "Familiarity with CI/CD tools (Jenkins, GitHub Actions, GitLab CI)",
        "Understanding of networking, security, and system administration",
        "Strong scripting skills (Bash, Python)",
      ],
      benefits: [
        "Competitive salary and performance bonuses",
        "Health insurance coverage",
        "Flexible work hours",
        "Remote work options",
        "Professional development opportunities",
        "Modern office space with amenities",
        "Regular team outings and events",
      ],
      isRemote: true,
    },
    {
      id: "ui-ux-designer",
      title: "UI/UX Designer",
      department: "Design",
      location: "Bhopal, MP",
      type: "Full-time",
      experience: "2+ years",
      salary: "₹6L - ₹12L per annum",
      description:
        "We are seeking a talented UI/UX Designer to create amazing user experiences for our web and mobile applications. The ideal candidate will have a strong portfolio demonstrating their design skills and user-centered approach.",
      responsibilities: [
        "Create user flows, wireframes, prototypes, and mockups",
        "Design UI elements and components for web and mobile applications",
        "Conduct user research and usability testing",
        "Collaborate with developers to implement designs",
        "Create and maintain design systems",
        "Stay up-to-date with design trends and best practices",
      ],
      requirements: [
        "2+ years of experience in UI/UX design",
        "Proficiency in design tools (Figma, Adobe XD, Sketch)",
        "Strong portfolio demonstrating UI/UX projects",
        "Understanding of user-centered design principles",
        "Knowledge of responsive design and accessibility standards",
        "Basic understanding of HTML, CSS, and JavaScript",
        "Excellent visual design skills and attention to detail",
      ],
      benefits: [
        "Competitive salary and performance bonuses",
        "Health insurance coverage",
        "Flexible work hours",
        "Remote work options",
        "Professional development opportunities",
        "Modern office space with amenities",
        "Regular team outings and events",
      ],
      isRemote: false,
    },
  ]

  const filteredJobs =
    filter === "all"
      ? jobs
      : filter === "remote"
        ? jobs.filter((job) => job.isRemote)
        : jobs.filter((job) => job.department.toLowerCase().includes(filter.toLowerCase()))

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
              <span className="gradient-text">Why Join Ignivox?</span>
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
                icon: "🚀",
              },
              {
                title: "Growth Opportunities",
                description:
                  "We invest in your professional development with training, mentorship, and opportunities to learn new skills.",
                icon: "📈",
              },
              {
                title: "Work-Life Balance",
                description:
                  "We believe in flexible work arrangements that allow you to do your best work while maintaining a healthy lifestyle.",
                icon: "⚖️",
              },
              {
                title: "Collaborative Culture",
                description:
                  "Join a team of passionate professionals who collaborate, share knowledge, and support each other.",
                icon: "🤝",
              },
              {
                title: "Competitive Benefits",
                description:
                  "Enjoy competitive compensation, health benefits, and perks that recognize your contributions.",
                icon: "💰",
              },
              {
                title: "Make an Impact",
                description:
                  "Your work will directly impact our clients and help businesses in Madhya Pradesh and beyond succeed in the digital age.",
                icon: "💡",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card p-6 text-center"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Listings Section */}
      <section className="py-20" id="openings">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
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
            <p className="text-xl text-gray-400 max-w-3xl">
              Explore our current job opportunities and find the perfect role for your skills and interests
            </p>
          </motion.div>

          <div className="flex flex-wrap gap-4 mb-8">
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
              variant={filter === "ai" ? "default" : "outline"}
              className={
                filter === "ai"
                  ? "bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white"
                  : "border-gray-700 text-gray-300 hover:text-white hover:border-purple-500"
              }
              onClick={() => setFilter("ai")}
            >
              AI & Data Science
            </Button>
            <Button
              variant={filter === "remote" ? "default" : "outline"}
              className={
                filter === "remote"
                  ? "bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white"
                  : "border-gray-700 text-gray-300 hover:text-white hover:border-purple-500"
              }
              onClick={() => setFilter("remote")}
            >
              Remote Jobs
            </Button>
          </div>

          <div className="space-y-6">
            {filteredJobs.map((job) => (
              <Dialog key={job.id}>
                <DialogTrigger asChild>
                  <div>
                    <JobCard job={job} onClick={() => setSelectedJob(job)} />
                  </div>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[900px] bg-gray-900 border-gray-800">
                  <DialogHeader>
                    <DialogTitle className="text-2xl font-bold text-white">Job Details</DialogTitle>
                    <DialogDescription className="text-gray-400">
                      Review the details and apply for this position
                    </DialogDescription>
                  </DialogHeader>
                  <JobDetail job={job} />
                  <div className="mt-6">
                    <CareerForm position={job.title} />
                  </div>
                </DialogContent>
              </Dialog>
            ))}

            {filteredJobs.length === 0 && (
              <div className="text-center py-12 glass-card">
                <p className="text-gray-400 text-lg mb-4">No job openings found in this category at the moment.</p>
                <Button
                  onClick={() => setFilter("all")}
                  className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white"
                >
                  View All Positions
                </Button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Application Form Section */}
      <section className="py-20 bg-gradient-to-b from-gray-950 to-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="gradient-text">Don't See a Perfect Match?</span>
              </h2>
              <p className="text-xl text-gray-300 mb-6">
                We're always looking for talented individuals to join our team. Submit your resume, and we'll keep it on
                file for future opportunities.
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 flex items-center justify-center text-white font-bold">
                      1
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">Submit Your Application</h3>
                    <p className="text-gray-400">Fill out the form with your information and upload your resume.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 flex items-center justify-center text-white font-bold">
                      2
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">Initial Review</h3>
                    <p className="text-gray-400">
                      Our HR team will review your application and reach out if there's a potential fit.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 flex items-center justify-center text-white font-bold">
                      3
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">Interview Process</h3>
                    <p className="text-gray-400">
                      If selected, you'll go through our interview process to assess your skills and cultural fit.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 flex items-center justify-center text-white font-bold">
                      4
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">Welcome to the Team</h3>
                    <p className="text-gray-400">
                      If everything aligns, we'll make you an offer to join our team of innovators!
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <CareerForm />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Culture Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="gradient-text">Our Team Culture</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              At Ignivox, we foster a culture of innovation, collaboration, and continuous learning
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="glass p-6 rounded-lg">
              <img
                src="/placeholder.svg?height=300&width=500"
                alt="Team collaboration"
                className="w-full h-auto rounded-lg mb-6"
              />
              <h3 className="text-xl font-bold text-white mb-2">Collaborative Environment</h3>
              <p className="text-gray-400">
                We believe in the power of teamwork and collaboration. Our open office space and regular team activities
                foster communication and idea sharing across departments.
              </p>
            </div>

            <div className="glass p-6 rounded-lg">
              <img
                src="/placeholder.svg?height=300&width=500"
                alt="Learning session"
                className="w-full h-auto rounded-lg mb-6"
              />
              <h3 className="text-xl font-bold text-white mb-2">Continuous Learning</h3>
              <p className="text-gray-400">
                We encourage continuous learning through regular knowledge sharing sessions, workshops, and access to
                online learning platforms to help you stay at the forefront of technology.
              </p>
            </div>

            <div className="glass p-6 rounded-lg">
              <img
                src="/placeholder.svg?height=300&width=500"
                alt="Team event"
                className="w-full h-auto rounded-lg mb-6"
              />
              <h3 className="text-xl font-bold text-white mb-2">Work-Life Balance</h3>
              <p className="text-gray-400">
                We value work-life balance and offer flexible work arrangements, regular team outings, and fun
                activities to ensure our team members stay motivated and refreshed.
              </p>
            </div>

            <div className="glass p-6 rounded-lg">
              <img
                src="/placeholder.svg?height=300&width=500"
                alt="Innovation workshop"
                className="w-full h-auto rounded-lg mb-6"
              />
              <h3 className="text-xl font-bold text-white mb-2">Innovation First</h3>
              <p className="text-gray-400">
                We encourage creative thinking and innovation. Our team members are empowered to explore new ideas,
                technologies, and approaches to solve complex problems.
              </p>
            </div>
          </div>
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
                  <span className="gradient-text">Ready to Join Our Team?</span>
                </h2>
                <p className="text-xl text-gray-300 mb-8">
                  Explore our current openings and take the next step in your career with Ignivox.
                </p>

                <Button
                  onClick={() => {
                    const element = document.getElementById("openings")
                    element?.scrollIntoView({ behavior: "smooth" })
                  }}
                  className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-6 text-lg"
                >
                  View Open Positions
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

