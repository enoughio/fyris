export interface Project {
    id: string
    title: string
    category: string
    description: string
    client: string
    year: string
    image: string
    liveUrl?: string
    technologies: string[]
    challenge: string
    solution: string
    results: string[]
    testimonial?: {
      quote: string
      author: string
      position: string
    }
    gallery: string[]
    features: string[]
    process: {
      title: string
      description: string
    }[]
    nextSteps?: string
    link?: string
    isFeatured?: boolean
  }
  
  export const portfolioProjects: Project[] = [
    {
      id: "e-commerce-platform",
      title: "E-commerce Platform",
      category: "Web Development",
      description: "A modern e-commerce platform with advanced product filtering, secure payments, and admin dashboard.",
      client: "Bhopal Retail Group",
      liveUrl: "https://example.com/ecommerce",
      year: "2023",
      image: "/placeholder.svg?height=600&width=800",
      technologies: ["React", "Next.js", "Node.js", "MongoDB", "Stripe", "AWS"],
      challenge:
        "Bhopal Retail Group needed a modern e-commerce platform to expand their business online. They were facing challenges with their existing solution, which was slow, difficult to manage, and lacked modern features like real-time inventory updates and mobile responsiveness.",
      solution:
        "We developed a custom e-commerce platform using Next.js for the frontend and Node.js for the backend. The solution includes a responsive design, advanced product filtering, secure payment processing with Stripe, and a comprehensive admin dashboard for inventory and order management.",
      results: [
        "30% increase in online sales within the first 3 months",
        "50% reduction in cart abandonment rate",
        "Improved inventory management efficiency by 40%",
        "Mobile conversion rates increased by 25%",
      ],
      testimonial: {
        quote:
          "The team at Fyris delivered beyond our expectations. Our new e-commerce platform has significantly improved our online presence and sales. The admin dashboard makes managing products and orders so much easier.",
        author: "Rajesh Kumar",
        position: "CEO, Bhopal Retail Group",
      },
      gallery: [
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
      ],
      features: [
        "Responsive design for all devices",
        "Advanced product filtering and search",
        "Secure payment processing with Stripe",
        "Real-time inventory management",
        "Order tracking and management",
        "Customer accounts and wishlist",
        "Admin dashboard with analytics",
      ],
      process: [
        {
          title: "Discovery & Planning",
          description:
            "We conducted in-depth interviews with stakeholders and analyzed the existing system to identify pain points and opportunities for improvement.",
        },
        {
          title: "Design & Prototyping",
          description:
            "Our design team created wireframes and high-fidelity mockups, which were refined through multiple feedback sessions with the client.",
        },
        {
          title: "Development",
          description:
            "Using an agile approach, we developed the platform in sprints, with regular demos and feedback sessions to ensure alignment with client expectations.",
        },
        {
          title: "Testing & Quality Assurance",
          description:
            "Rigorous testing was conducted to ensure the platform was secure, performant, and user-friendly across all devices.",
        },
        {
          title: "Deployment & Training",
          description:
            "We deployed the platform to AWS and provided comprehensive training to the client's team on how to use the admin dashboard effectively.",
        },
      ],
      nextSteps:
        "We're currently working on phase 2 of the project, which includes implementing an AI-powered recommendation engine and expanding the platform to support multiple languages and currencies.",
      isFeatured: true,
    },
    {
      id: "clinic-management-system",
      title: "Clinic Management System",
      category: "Web Application",
      description: "A comprehensive clinic management system for a healthcare provider in Madhya Pradesh.",
      client: "MP Healthcare",
      liveUrl: "https://example.com/clinic",
      year: "2023",
      image: "/placeholder.svg?height=600&width=800",
      technologies: ["React", "Node.js", "PostgreSQL", "Docker", "AWS"],
      challenge:
        "MP Healthcare was struggling with paper-based record keeping and manual appointment scheduling, which was time-consuming and prone to errors. They needed a digital solution to streamline their operations and improve patient experience.",
      solution:
        "We developed a comprehensive clinic management system that includes appointment scheduling, patient records management, billing, and reporting features. The system is designed to be user-friendly for both staff and patients, with a focus on data security and privacy.",
      results: [
        "Reduced appointment scheduling time by 70%",
        "Improved patient record accuracy by 90%",
        "Decreased billing errors by 60%",
        "Increased staff productivity by 40%",
      ],
      testimonial: {
        quote:
          "The clinic management system has transformed our operations. We're now able to serve more patients with fewer administrative errors, and our staff can focus more on patient care rather than paperwork.",
        author: "Dr. Priya Sharma",
        position: "Medical Director, MP Healthcare",
      },
      gallery: [
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
      ],
      features: [
        "Appointment scheduling and reminders",
        "Electronic patient records",
        "Prescription management",
        "Billing and invoicing",
        "Inventory management",
        "Reporting and analytics",
        "Patient portal",
      ],
      process: [
        {
          title: "Requirements Gathering",
          description:
            "We conducted extensive interviews with doctors, nurses, and administrative staff to understand their workflows and pain points.",
        },
        {
          title: "System Design",
          description:
            "Based on the requirements, we designed a system architecture that prioritized security, performance, and ease of use.",
        },
        {
          title: "Iterative Development",
          description:
            "We developed the system in modules, with each module being tested and refined before moving on to the next.",
        },
        {
          title: "User Testing",
          description:
            "We conducted usability testing with actual staff members to ensure the system was intuitive and met their needs.",
        },
        {
          title: "Deployment & Training",
          description:
            "We deployed the system and provided comprehensive training to all staff members, with ongoing support during the transition period.",
        },
      ],
      nextSteps:
        "We're planning to enhance the system with telemedicine capabilities and integration with medical devices for real-time patient monitoring.",
      isFeatured: true,
    },
    {
      id: "restaurant-ordering-system",
      title: "Restaurant Ordering System",
      category: "Web & Mobile Application",
      description:
        "A digital ordering system for a restaurant chain with mobile app, QR code ordering, and kitchen display system.",
      client: "MP Cuisine",
      liveUrl: "https://example.com/restaurant",
      year: "2023",
      image: "/placeholder.svg?height=600&width=800",
      technologies: ["React Native", "Next.js", "Node.js", "MongoDB", "Socket.io", "Firebase"],
      challenge:
        "MP Cuisine, a growing restaurant chain in Madhya Pradesh, was facing challenges with their order management process. Long wait times, order errors, and inefficient kitchen operations were affecting customer satisfaction and staff morale.",
      solution:
        "We developed an integrated ordering system that includes a customer-facing mobile app, QR code-based table ordering, a kitchen display system, and a management dashboard. The system uses real-time communication to ensure orders are processed efficiently and accurately.",
      results: [
        "Reduced order processing time by 50%",
        "Decreased order errors by 80%",
        "Increased average order value by 15%",
        "Improved customer satisfaction scores by 30%",
      ],
      testimonial: {
        quote:
          "The ordering system has revolutionized our operations. Our customers love the convenience of ordering through the app or QR codes, and our kitchen staff can now work more efficiently with the digital display system.",
        author: "Amit Patel",
        position: "Owner, MP Cuisine",
      },
      gallery: [
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
      ],
      features: [
        "Mobile app for customers (iOS & Android)",
        "QR code-based table ordering",
        "Real-time order tracking",
        "Kitchen display system",
        "Inventory management",
        "Sales and performance analytics",
        "Customer loyalty program",
      ],
      process: [
        {
          title: "Research & Analysis",
          description:
            "We observed the restaurant operations and interviewed staff and customers to identify pain points and opportunities for improvement.",
        },
        {
          title: "Solution Design",
          description:
            "We designed an integrated solution that addressed all aspects of the ordering process, from customer to kitchen to management.",
        },
        {
          title: "Agile Development",
          description:
            "We developed the different components of the system in parallel, with regular integration testing to ensure seamless communication between them.",
        },
        {
          title: "Pilot Testing",
          description:
            "We conducted a pilot test in one restaurant location, gathering feedback and making refinements before rolling out to all locations.",
        },
        {
          title: "Full Deployment",
          description:
            "We deployed the system across all restaurant locations, with on-site support during the initial period to ensure a smooth transition.",
        },
      ],
      nextSteps:
        "We're working on enhancing the system with AI-powered demand forecasting to optimize inventory management and reduce food waste.",
      isFeatured: false,
    },
    {
      id: "portfolio-website",
      title: "Portfolio Website",
      category: "Web Development",
      description:
        "A professional portfolio website for a photographer in Bhopal with advanced image gallery and client proofing system.",
      client: "Bhopal Photography",
      liveUrl: "https://example.com/photography",
      year: "2023",
      image: "/placeholder.svg?height=600&width=800",
      technologies: ["React", "Next.js", "Tailwind CSS", "Framer Motion", "Cloudinary", "Vercel"],
      challenge:
        "Bhopal Photography needed a professional website to showcase their work and attract new clients. They wanted a visually stunning platform that would highlight their photography while also providing practical features like client galleries and booking.",
      solution:
        "We designed and developed a modern portfolio website with a focus on visual impact and performance. The site features a responsive design, advanced image galleries with filtering, client proofing system, and an integrated booking system.",
      results: [
        "Increased inquiries by 40% within the first month",
        "Improved client satisfaction with the proofing system",
        "Reduced time spent on administrative tasks by 30%",
        "Expanded client base beyond Bhopal to other cities",
      ],
      testimonial: {
        quote:
          "My new website perfectly captures my aesthetic and has made a huge difference in my business. The client proofing system has saved me countless hours and my clients love how easy it is to use.",
        author: "Vikram Mehta",
        position: "Owner, Bhopal Photography",
      },
      gallery: [
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
      ],
      features: [
        "Responsive design optimized for all devices",
        "Advanced image galleries with filtering",
        "Client proofing system with password protection",
        "Integrated booking and inquiry system",
        "Blog section for photography tips and updates",
        "SEO optimization for local search",
        "Fast loading times with image optimization",
      ],
      process: [
        {
          title: "Discovery",
          description:
            "We analyzed the photographer's work and target audience to understand the visual direction and functional requirements for the website.",
        },
        {
          title: "Design",
          description:
            "We created wireframes and visual designs that emphasized the photography while ensuring a clean, intuitive user experience.",
        },
        {
          title: "Development",
          description:
            "We built the website using Next.js and Tailwind CSS, with special attention to image optimization and loading performance.",
        },
        {
          title: "Client Proofing System",
          description:
            "We developed a custom client proofing system that allows clients to view, select, and comment on their photos.",
        },
        {
          title: "Launch & Optimization",
          description: "We launched the website and conducted post-launch optimization for SEO and performance.",
        },
      ],
      nextSteps:
        "We're planning to add an e-commerce component to allow direct print sales and digital downloads from the website.",
      isFeatured: false,
    },
    {
      id: "ai-content-generator",
      title: "AI Content Generator",
      category: "AI Application",
      description: "An AI-powered content generation tool for a digital marketing agency to streamline content creation.",
      client: "Digital Marketers India",
      liveUrl: "https://example.com/ai",
      year: "2023",
      image: "/placeholder.svg?height=600&width=800",
      technologies: ["React", "Node.js", "OpenAI API", "MongoDB", "Express", "AWS"],
      challenge:
        "Digital Marketers India was struggling to keep up with the demand for high-quality content across multiple platforms and industries. Their content team was overwhelmed, and they needed a solution to increase productivity without sacrificing quality.",
      solution:
        "We developed an AI-powered content generation tool that uses OpenAI's GPT models to assist in creating various types of content, from social media posts to blog articles. The tool includes industry-specific templates, tone adjustment, and a collaborative editing interface.",
      results: [
        "Increased content production by 200%",
        "Reduced content creation time by 60%",
        "Maintained consistent quality across all content",
        "Enabled expansion into new industry verticals",
      ],
      testimonial: {
        quote:
          "This tool has been a game-changer for our agency. We can now produce high-quality content at scale, allowing us to take on more clients and deliver better results. The AI suggestions are remarkably good and save our writers hours of work.",
        author: "Neha Gupta",
        position: "Content Director, Digital Marketers India",
      },
      gallery: [
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
      ],
      features: [
        "AI-powered content generation",
        "Industry-specific templates and prompts",
        "Tone and style adjustment",
        "Collaborative editing interface",
        "Content calendar and scheduling",
        "Performance analytics",
        "Integration with popular CMS platforms",
      ],
      process: [
        {
          title: "Needs Assessment",
          description:
            "We worked closely with the content team to understand their workflow, pain points, and quality standards.",
        },
        {
          title: "AI Model Selection & Training",
          description:
            "We selected and fine-tuned AI models to generate content that matched the agency's style and quality requirements.",
        },
        {
          title: "Tool Development",
          description:
            "We developed a user-friendly interface that allows content creators to generate, edit, and refine AI-generated content.",
        },
        {
          title: "Integration & Testing",
          description:
            "We integrated the tool with the agency's existing systems and conducted extensive testing with actual content creators.",
        },
        {
          title: "Deployment & Training",
          description:
            "We deployed the tool and provided training to the content team, with ongoing support and refinement based on feedback.",
        },
      ],
      nextSteps:
        "We're working on enhancing the tool with multilingual support and more advanced customization options for different content types and platforms.",
      isFeatured: false,
    },
  ]
