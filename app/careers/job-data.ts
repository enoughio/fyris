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
    id: "fullstack-intern",
    title: "Full Stack Web Developer Intern",
    department: "Engineering",
    location: "Hybrid (Mostly Remote)",
    type: "Internship",
    experience: "0–1 years",
    salary: "₹2,000–₹3,000/month + performance bonus",
    description:
      "We are looking for a motivated Full Stack Web Developer Intern to support our engineering team in building and maintaining client projects. This role is hybrid but primarily remote, offering hands-on experience with modern web technologies across the stack.",
    fullDescription: `<p>As a Full Stack Web Developer Intern at Fyris, you will contribute to both front-end and back-end development on real-world projects. You will work with technologies like React/Next.js, Node.js, and Prisma while collaborating closely with our engineering team. This internship is performance-based, with opportunities for bonuses and potential long-term collaboration.</p>`,
    responsibilities: [
      "Develop and maintain front-end features using React.js or Next.js",
      "Assist in building and managing backend services using Node.js and TypeScript",
      "Use Prisma ORM for database interactions with SQL databases",
      "Contribute to REST API development and testing",
      "Debug and troubleshoot issues across the stack",
      "Collaborate with team members during check-ins and project reviews",
      "Work with Git for version control and participate in code reviews",
      "Deliver assigned tasks within deadlines while maintaining quality standards"
    ],
    requirements: [
      "Basic knowledge of JavaScript/TypeScript",
      "Experience with React.js or Next.js for front-end development",
      "Understanding of Node.js and server-side logic",
      "Familiarity with databases (SQL/PostgreSQL/MongoDB) and Prisma ORM",
      "Some experience testing APIs with Postman or similar tools",
      "Ability to work independently with reliable internet connectivity",
      "Openness to feedback and willingness to learn"
    ],
    benefits: [
      "Stipend ₹2,000–₹3,000/month plus performance-based bonus",
      "Hybrid work (mostly remote)",
      "Hands-on experience with real-world client projects",
      "Regular mentorship and feedback from senior developers",
      "Opportunity to transition into future projects or full-time roles based on performance"
    ],
    isRemote: true,
    isInternship: true,
  },
];
