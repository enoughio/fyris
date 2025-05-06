export interface JobListing {
    id: string
    title: string
    department: string
    location: string
    type: string
    experience: string
    salary: string
    description: string
    fullDescription: string
    responsibilities: string[]
    requirements: string[]
    benefits: string[]
    isRemote: boolean
    isInternship?: boolean
  }
  
  export const jobListings: JobListing[] = [
    {
      id: "backend-associate",
      title: "Associate Backend Developer",
      department: "Engineering",
      location: "Remote",
      type: "Project-based",
      experience: "0–1 years",
      salary: "₹3,000–₹4,000 per project (based on complexity and performance)",
      description:
        "This is a project-based role for someone with basic backend development skills who wants to gain experience by working on actual client projects involving APIs, databases, and server-side logic.",
      fullDescription: `<p>We are hiring an Associate Backend Developer to assist with backend development on active client projects. The role is suited for someone who is still learning but has a solid foundation in backend programming using Node.js and TypeScript. You will work with our engineering team to build, debug, and maintain backend systems that support real applications. The work is fully remote and task-oriented, with guidance and support provided by senior team members.</p>`,
      responsibilities: [
        "Write and maintain backend code using Node.js and TypeScript",
        "Use Prisma ORM to manage data models and interact with SQL databases",
        "Build and maintain RESTful APIs",
        "Test and debug backend features using Postman or similar tools",
        "Work with Git to commit code and manage pull requests",
        "Follow clear instructions and ask questions when unsure",
        "Attend check-ins and share progress regularly with the team"
      ],
      requirements: [
        "Basic knowledge of Node.js and TypeScript",
        "Familiarity with Prisma ORM and how it connects to SQL databases",
        "Ability to build and understand RESTful API endpoints",
        "Working knowledge of Git and version control processes",
        "Some experience using tools like Postman or Insomnia to test APIs",
        "Reliable internet connection and ability to work independently",
        "Willingness to receive feedback and make corrections as needed"
      ],
      benefits: [
        "Paid work based on project tasks",
        "Work from anywhere",
        "Experience with real-world client projects",
        "Regular code reviews and feedback",
        "Opportunity to continue on future projects based on reliability and skill"
      ],
      isRemote: true,
      isInternship: false,
    },
  ]
  