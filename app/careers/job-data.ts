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
      title: "Associate Full-stack Developer",
      department: "Engineering",
      location: "Remote",
      type: "Project-based",
      experience: "0–1 years",
      salary: "(based on complexity and performance)",
      description:
        "This is an assistant role for someone with good backend and frontend development skills who wants to gain experience by working on actual client projects involving APIs, databases, and server-side logic.",
      fullDescription: `<p>We are hiring an Associate Full-stack Developer to assist with backend and frontend development on active client projects. The role is suited for someone who is still learning but has a solid foundation in backend programming using Node.js and TypeScript. You will work with our engineering team to build, debug, and maintain backend systems that support real applications. The work is fully remote and task-oriented, with guidance and support provided by senior team members.</p>`,
      responsibilities: [
        "Write and maintain backend code using Node.js and TypeScript",
        "Use Prisma ORM to manage data models and interact with SQL databases",
        "Build and maintain RESTful APIs",
        "nextJs and React for frontend development",
        "Collaborate with the engineering team to understand project requirements",
        "Test and debug backend features using Postman or similar tools",
        "Work with Git to commit code and manage pull requests",
        "Follow clear instructions and ask questions when unsure",
        "Attend check-ins and share progress regularly with the team"
      ],
      requirements: [
        "Basic knowledge of Node.js and TypeScript",
        "good at writing typesafe code",
        "good hold with Next.js and React",
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
  