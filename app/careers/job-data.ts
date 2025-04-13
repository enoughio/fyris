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
      id: "design-lead",
      title: "Design Lead",
      department: "Design",
      location: "Remote",
      type: "Full-time",
      experience: "3-5+ years",
      salary: "₹6,000–₹9,000 (based on experience and skill level)",
      description:
        "Lead our design team in creating intuitive, beautiful user interfaces and experiences for our clients.",
      fullDescription: `<p>FYRIS is seeking a talented and driven UI/UX Designer to join our remote team. This role is ideal for designers who are passionate about crafting intuitive, aesthetically pleasing user interfaces and delivering thoughtful user experiences across digital products.</p>`,
      responsibilities: [
        "Design engaging, user-centric web and mobile interfaces",
        "Create wireframes, prototypes, and high-fidelity mockups using Figma",
        "Collaborate with developers to ensure accurate implementation of designs",
        "Understand client requirements and translate them into effective design solutions",
        "Iterate based on feedback and user insights to improve usability and visual impact",
      ],
      requirements: [
        "Proficiency in Figma and other modern design tools",
        "Strong understanding of UI/UX principles, responsive design, and accessibility",
        "A well-curated portfolio demonstrating your design process and final UI outcomes",
        "Dribbble profile or equivalent design showcase (required)",
        "Attention to detail, consistency, and clean visual hierarchy",
        "Ability to work independently and communicate effectively in a remote setting",
      ],
      benefits: [
        "Remote work flexibility",
        "Project-based, with potential for longer-term engagement",
        "Opportunity to work on diverse client projects",
        "Collaborative team environment",
        "Growth potential within a fast-growing company",
      ],
      isRemote: true,
    },
    {
      id: "ui-ux-intern",
      title: "UI/UX Design Intern",
      department: "Design",
      location: "Remote",
      type: "Internship",
      experience: "Entry level",
      salary: "₹1,000–₹2,000 (performance-based)",
      description: "Gain valuable experience designing user interfaces and experiences for real-world projects.",
      fullDescription: `<p>FYRIS is offering a short-term, fully remote UI/UX Design Internship for creative individuals who are eager to gain real-world experience designing user-friendly digital interfaces. This is an excellent opportunity to work closely with developers, contribute to active projects, and strengthen your design portfolio.</p>`,
      responsibilities: [
        "Assist in designing user interfaces for web and mobile platforms using Figma",
        "Create wireframes, mockups, and high-fidelity UI designs",
        "Translate user needs and business goals into intuitive design solutions",
        "Work closely with the development team to ensure design accuracy",
        "Iterate designs based on feedback and usability testing insights",
      ],
      requirements: [
        "Strong grasp of UI/UX fundamentals and visual design principles",
        "Proficiency in Figma (must-have)",
        "Ability to design clean, responsive, and user-friendly interfaces",
        "Attention to typography, color, layout, and consistency",
        "A portfolio showcasing UI/UX work is required",
        "Dribbble profile or equivalent design showcase is highly appreciated",
        "Bonus: Familiarity with design systems or prototyping tools",
      ],
      benefits: [
        "Remote work flexibility",
        "Duration: 1–2 months",
        "Real-world project experience",
        "Portfolio-building opportunities",
        "Mentorship from experienced designers",
        "Potential for future opportunities",
      ],
      isRemote: true,
      isInternship: true,
    },
    {
      id: "frontend-dev-intern",
      title: "Frontend Web Developer Intern",
      department: "Engineering",
      location: "Remote",
      type: "Internship",
      experience: "Entry level",
      salary: "₹1,000–₹2,000 (performance-based)",
      description:
        "Help build beautiful, responsive web interfaces for our client projects using React and modern frontend technologies.",
      fullDescription: `<p>We at FYRIS are on the lookout for passionate Frontend Interns to join us for a 1-2 month remote internship!</p>
      <p>If you live and breathe clean UI, love building with React, and want to work on real-world projects with a creative dev team — we'd love to hear from you.</p>`,
      responsibilities: [
        "Develop responsive web interfaces using React and modern frontend technologies",
        "Implement designs from Figma into functional, interactive web pages",
        "Collaborate with designers and backend developers to build complete solutions",
        "Debug issues and optimize performance of web applications",
        "Stay up-to-date with frontend trends and best practices",
      ],
      requirements: [
        "React.js, HTML, CSS, JavaScript",
        "Responsive Web Development",
        "Basic Figma knowledge (optional, but brownie points!)",
        "Web animations - framer motion",
        "Shadcn UI or other UI library",
        "Good at Git/GitHub",
        "A good eye for UI/UX",
        "Bonus: Knowledge of frontend frameworks or tools like TailwindCSS, Next.js, or animation libraries",
      ],
      benefits: [
        "Remote work flexibility",
        "Duration: 1-2 months",
        "Real project exposure, mentorship, and the chance to grow your dev muscles",
        "Portfolio-building opportunities",
        "Potential future opportunities with us",
      ],
      isRemote: true,
      isInternship: true,
    },
  ]
  