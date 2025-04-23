export interface Project {
  id: string
  title: string
  category: string
  description: string
  fullDescription: string
  image: string
  technologies: string[]
  features: string[]
  client: string
  year: string
  link?: string
  isFeatured?: boolean
  challenge: string
  solution: string
  results: string[]
  testimonial?: {
    quote: string
    author: string
    position: string
  }
  process: {
    title: string
    description: string
  }[]
  gallery: string[]
  liveUrl?: string
  nextSteps?: string
}

export const portfolioData: Project[] = [
  {
    id: "costavida",
    title: "Costa Vida Restaurant Platform",
    category: "Web Development",
    description: "A comprehensive restaurant website with online ordering system and customer loyalty program.",
    fullDescription:
      "We developed a complete digital solution for Costa Vida, a popular restaurant chain. The platform includes a responsive website, online ordering system, and customer loyalty program that has significantly increased their online presence and streamlined their operations.",
    image: "/costavida.png?height=400&width=600",
    technologies: ["React", "Node.js", "MongoDB", "Stripe", "Redux", "Express", "Socket.io"],
    features: [
      "Online menu with real-time updates",
      "Secure payment processing",
      "Order tracking system",
      "Customer loyalty program",
      "Nutritional information calculator",
      "Location finder with Google Maps integration",
      "Mobile-responsive design",
      "Admin dashboard for menu and order management",
    ],
    client: "Costa Vida",
    year: "2023",
    isFeatured: true,
    challenge:
      "Costa Vida was facing challenges with their outdated website and inefficient ordering system. They needed a modern digital solution that could handle their complex menu options, provide a seamless ordering experience, and integrate with their existing POS system. Additionally, they wanted to implement a loyalty program to increase customer retention.",
    solution:
      "We built a comprehensive platform using React for the frontend and Node.js with MongoDB for the backend. The solution included a visually appealing website showcasing their menu items with high-quality images, an intuitive online ordering system with real-time updates, and a customer loyalty program that rewards repeat customers. We implemented Stripe for secure payment processing and integrated the system with their existing POS to ensure smooth operations.",
    results: [
      "58% increase in online orders within the first two months",
      "42% reduction in order processing time",
      "35% increase in customer return rate through the loyalty program",
      "25% growth in average order value",
      "Significant reduction in order errors and customer complaints",
      "Expanded customer base through improved online visibility",
    ],
    testimonial: {
      quote:
        "The digital platform developed by Fyris has transformed our business. The online ordering system is intuitive for our customers and seamlessly integrates with our kitchen operations. The loyalty program has been a game-changer for customer retention.",
      author: "Maria Rodriguez",
      position: "Operations Director, Costa Vida",
    },
    process: [
      {
        title: "Discovery",
        description:
          "We conducted in-depth interviews with staff and customers to understand pain points and requirements for both the ordering process and website experience.",
      },
      {
        title: "Strategy",
        description:
          "We developed a comprehensive digital strategy that addressed both customer-facing features and back-end operational needs.",
      },
      {
        title: "Design",
        description:
          "Our design team created wireframes and high-fidelity mockups that showcased the restaurant's vibrant brand identity while ensuring intuitive navigation.",
      },
      {
        title: "Development",
        description:
          "We built the platform using modern technologies, implementing the online ordering system, loyalty program, and admin dashboard.",
      },
      {
        title: "Testing",
        description:
          "We conducted extensive testing with actual restaurant staff and customers to ensure the system was intuitive and reliable under various conditions.",
      },
      {
        title: "Deployment",
        description:
          "We launched the platform with a phased approach, starting with the website, then adding online ordering, and finally implementing the loyalty program.",
      },
      {
        title: "Optimization",
        description:
          "Based on user feedback and performance data, we continuously refined the platform to improve user experience and operational efficiency.",
      },
    ],
    gallery: [
      
      "/costavida.png?height=600&width=800",
      "/costavida1.png?height=600&width=800",
      "/costavidaAbout.png?height=600&width=800",
      "/costavida2.png?height=600&width=800",
      "/costavidaorder.png?height=600&width=800",
    ],
    liveUrl: "https://costavida.com",
    nextSteps:
      "We're currently working on enhancing the platform with AI-powered recommendation features based on customer preferences and order history, as well as expanding the loyalty program with tiered rewards.",
  },
  {
    id: "bharatstorytellers",
    title: "Bharat Storytellers Franchise Portal",
    category: "Custom Software Solution",
    description: "A comprehensive franchise management portal and website for a storytelling education company.",
    fullDescription:
      "We developed a franchise management portal and public website for Bharat Storytellers, an educational company that teaches storytelling across India. The solution helps them manage their growing network of franchisees while providing a compelling online presence to attract new students and partners.",
    image: "/bharatstorytellersHero.png?height=400&width=600",
    technologies: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "AWS"],
    features: [
      "Franchise application and onboarding system",
      "Curriculum management and distribution",
      "Performance analytics dashboard",
      "Royalty payment tracking",
      "Marketing resource library",
      "Internal communication platform",
      "Public website with location finder",
      "Student enrollment portal",
    ],
    client: "Bharat Storytellers",
    year: "2025",
    isFeatured: true,
    challenge:
      "Bharat Storytellers was experiencing rapid growth across India but struggled to maintain consistent quality and brand standards across locations. They needed a centralized system to manage franchisee operations, distribute curriculum updates, track performance, and process royalty payments. Additionally, they wanted a compelling public website to attract new students and potential franchisees.",
    solution:
      "We created a comprehensive franchise management portal using React, Next.js, and TypeScript for the frontend with Node.js and PostgreSQL for the backend. The system includes separate interfaces for headquarters staff, franchisees, and potential students/franchisees. We implemented a curriculum management system that allows headquarters to distribute standardized teaching materials while giving franchisees the ability to adapt to local needs. The performance analytics dashboard provides real-time insights into each location's metrics, and the royalty payment system automates financial transactions.",
    results: [
      "Reduced franchisee onboarding time by 65%",
      "Increased curriculum consistency across locations by 85%",
      "Improved franchisee satisfaction scores by 42%",
      "Streamlined royalty payment processing, reducing administrative time by 75%",
      "Attracted 15 new franchise applications within three months of launch",
      "Increased student enrollment by 28% through the new website",
    ],
    testimonial: {
      quote:
        "The franchise management portal has revolutionized how we operate our growing network. We now have visibility into performance across all locations, can distribute curriculum updates instantly, and have dramatically simplified our administrative processes. The public website has also been instrumental in attracting new students and franchise partners.",
      author: "Avril Pawar",
      position: "Founder & CEO, Bharat Storytellers",
    },
    process: [
      {
        title: "Research",
        description:
          "We conducted extensive interviews with headquarters staff, franchisees, and students to understand the unique needs of each stakeholder group.",
      },
      {
        title: "Architecture Planning",
        description:
          "We designed a scalable system architecture that could accommodate the company's rapid growth while ensuring data security and performance.",
      },
      {
        title: "UX Design",
        description:
          "We created distinct user experiences for each stakeholder group, ensuring intuitive navigation and access to relevant features.",
      },
      {
        title: "Development",
        description:
          "Our team built both the internal management portal and public-facing website using modern technologies and best practices.",
      },
      {
        title: "Data Migration",
        description:
          "We carefully migrated existing franchise and curriculum data from their previous systems to ensure continuity of operations.",
      },
      {
        title: "Training",
        description:
          "We provided comprehensive training sessions for headquarters staff and franchisees to ensure smooth adoption of the new system.",
      },
      {
        title: "Ongoing Support",
        description:
          "We continue to provide technical support and implement new features based on user feedback and evolving business needs.",
      },
    ],
    gallery: [
      "/bharatstorytellersHero.png?height=600&width=800",
      "/bharatstorytellers.png?height=600&width=800",
      "/bharatstorytellersContact.png?height=600&width=800",
      "/bharatstorytellers1.png/?height=600&width=800",
    ],
    liveUrl: "https://bharatstorytellers.com",
    nextSteps:
      "We're currently developing a mobile app for franchisees to manage their operations on the go, as well as enhancing the analytics capabilities with predictive insights to help identify growth opportunities.",
  },
  {
    id: "studentadda-lms",
    title: "StudentAdda - Library Management & Productivity Platform",
    category: "Education",
    description:
    "A complete digital platform for managing libraries, student productivity, and community engagement.",
    fullDescription:
    "We developed a comprehensive, cloud-based library management system for StudentAdda that modernizes traditional library experiences. The platform supports digital seat booking, membership management, book allocation, and e-library access. It also includes integrated student productivity tools and a public community forum, creating a one-stop ecosystem for academic growth and resource management.",
    image: "/sadda.png",
    technologies: ["React", "Node.js", "PostgreSQL", "Firebase Auth", "Razorpay API", "TailwindCSS", "TypeScript"],
    features: [
    "Seat booking with payment gateway integration",
    "Membership plan management (daily, monthly, quarterly)",
    "Book borrowing and inventory system",
    "Digital e-library for members",
    "Productivity tools: Pomodoro Timer, Habit Tracker, Streak System",
    "Community forum for Q&A and discussions",
    "Practice quizzes by topic",
    "Admin and Super Admin dashboards",
    "Daily/commission-based settlement system"
    ],
    client: "StudentAdda",
    year: "2025",
    challenge:
    "StudentAdda needed a digital platform to help libraries run efficiently while engaging students through modern tools. The goal was to build a unified system where students could reserve seats, access digital books, participate in forums, and track their study habits, all while offering admins detailed control and analytics.",
    solution:
    "We built a multi-role web application using React and TypeScript on the frontend, with a Node.js backend connected to PostgreSQL. Razorpay was integrated for handling payments, while Firebase Auth ensured secure logins for different user types. Admins can manage bookings, users, and books through a clean dashboard. Users have access to a personalized dashboard that includes productivity tools, digital books, and a Q&A community. The system supports real-time booking updates and flexible membership plans.",
    results: [
    "Over 3,000 users onboarded in the first 6 months",
    "85% booking efficiency improvement compared to manual processes",
    "Increased library memberships with flexible pricing plans",
    "Boosted user engagement with community forums and tools",
    "Streamlined admin workflow through unified dashboards",
    "Real-time book availability and allocation reduced manual errors"
    ],
    testimonial: {
    quote:
    "The LMS we got from FYRIS has completely changed the way our libraries operate. From user booking to digital resources and forum participation, everything is seamless and intuitive. It's exactly what we needed to modernize our student services.",
    author: "Anurag Sharma",
    position: "Founder, StudentAdda"
    },
    process: [
    {
    title: "Requirement Discovery",
    description:
    "We held collaborative workshops with StudentAdda’s team to understand library operations, student needs, and platform expectations."
    },
    {
    title: "System Architecture & UX Planning",
    description:
    "We designed a modular, scalable architecture and wireframed interfaces for users, admins, and super admins."
    },
    {
    title: "Full Stack Development",
    description:
    "Frontend and backend were developed in parallel with CI/CD pipelines and modular component libraries for rapid iteration."
    },
    {
    title: "Payment & Auth Integration",
    description:
    "Integrated Razorpay for smooth payments and Firebase Auth for role-based login access."
    },
    {
    title: "Testing & Optimization",
    description:
    "QA was performed across devices, and UX feedback loops were used to polish user flows and speed."
    },
    {
    title: "Launch & Onboarding",
    description:
    "The system was rolled out with admin and student training along with live support for the initial weeks."
    }
    ],
    gallery: [
    "/sadda.png",
    "/salisting.png?height=600&width=800",
    "/sablogs.png?height=600&width=800",
    "/samore.png?height=600&width=800"
    ],
    liveUrl: "https://studentadda.in",
    nextSteps:
    "We're planning to enhance analytics dashboards, add gamified learning features, and explore mobile app support for the next release."
    },


  {
    id: "beachandbartolo",
    title: "Beach & Bartolo Hotel Booking Platform",
    category: "Hospitality",
    description:
      "A comprehensive hotel booking website with virtual tours, personalized recommendations, and seamless reservation management.",
    fullDescription:
      "We developed a sophisticated hotel booking platform for Beach & Bartolo, a boutique hotel chain. The website showcases their unique properties through immersive virtual tours and provides a seamless booking experience with personalized recommendations based on guest preferences.",
    image: "/hotel.png?height=400&width=600",
    technologies: ["React", "Node.js", "MongoDB", "Express", "AWS", "Stripe", "Matterport API", "TailwindCSS"],
    features: [
      "Immersive virtual property tours",
      "Real-time availability calendar",
      "Personalized room recommendations",
      "Secure payment processing",
      "Special package bundling",
      "Guest account management",
      "Multilingual support",
      "Integration with property management system",
    ],
    client: "Beach & Bartolo Hotels",
    year: "2022",
    isFeatured: true,
    challenge:
      "Beach & Bartolo Hotels wanted to reduce their dependency on third-party booking platforms that charged high commission fees. They needed a direct booking website that could showcase their unique properties effectively, provide a seamless reservation experience, and integrate with their existing property management system. Additionally, they wanted to increase direct bookings and build stronger relationships with their guests.",
    solution:
      "We created a comprehensive hotel booking platform using React for the frontend and Node.js with MongoDB for the backend. The site features immersive virtual tours using the Matterport API, allowing potential guests to explore rooms and facilities in detail before booking. We implemented a sophisticated recommendation engine that suggests appropriate rooms and packages based on guest preferences and past stays. The booking system integrates directly with their property management system to ensure real-time availability and streamlined operations. We also implemented a secure payment system using Stripe and developed a guest portal for managing reservations and preferences.",
    results: [
      "Increased direct bookings by 72% within six months",
      "Reduced commission costs by €120,000 annually",
      "Improved conversion rate from website visitor to booking by 38%",
      "Increased average booking value by 25% through package recommendations",
      "Reduced booking abandonment rate by 45%",
      "Enhanced guest satisfaction with personalized digital experience",
    ],
    testimonial: {
      quote:
        "The booking platform has transformed our business model by significantly increasing our direct bookings. The virtual tours give our potential guests confidence in their choice, and the seamless booking process has dramatically reduced abandonment rates. The integration with our property management system has also streamlined our operations and reduced manual errors.",
      author: "Elena Bartolo",
      position: "Managing Director, Beach & Bartolo Hotels",
    },
    process: [
      {
        title: "Requirements Analysis",
        description:
          "We conducted detailed interviews with hotel management, staff, and guests to understand the unique requirements and pain points in the booking process.",
      },
      {
        title: "Competitive Analysis",
        description:
          "We analyzed leading hotel booking platforms to identify best practices and opportunities for differentiation.",
      },
      {
        title: "UX/UI Design",
        description:
          "Our design team created an intuitive, visually appealing interface that showcases the hotel's unique aesthetic while ensuring a seamless booking experience.",
      },
      {
        title: "Development",
        description:
          "We built the platform using modern technologies, implementing the virtual tours, recommendation engine, and integration with the property management system.",
      },
      {
        title: "Content Creation",
        description:
          "We coordinated professional photography and 3D scanning of all properties to create compelling visual content for the platform.",
      },
      {
        title: "Testing",
        description:
          "We conducted extensive testing across different devices and scenarios to ensure the booking process was flawless and user-friendly.",
      },
      {
        title: "Training & Handover",
        description:
          "We provided comprehensive training for hotel staff on managing the platform and leveraging its analytics capabilities.",
      },
    ],
    gallery: [
      "/hotel.png?height=600&width=800",
      "/hotel-about.png?height=600&width=800",
      "/hotel-listing.png?height=600&width=800",
      // "/placeholder.svg?height=600&width=800",
    ],
    liveUrl: "https://www.beachandbartolo.com",
    nextSteps:
      "We're currently developing an AI-powered chatbot to assist with booking inquiries and implementing a loyalty program to further increase direct bookings and guest retention.",
  },
  {
    id: "platinijeans-ecommerce",
    title: "Platini Jeans E-Commerce Platform",
    category: "Fashion & Retail",
    description:
      "A modern e-commerce website for a premium denim and fashion brand, enhancing online shopping and brand storytelling.",
    fullDescription:
      "We designed and developed a high-performance e-commerce platform for Platini Jeans, a contemporary fashion brand specializing in premium denim and apparel. The new site not only modernized their digital presence but also improved the shopping experience across devices, increased conversions, and reinforced the brand’s image through clean design and strong storytelling.",
    image: "/mansfashion.png?height=400&width=600",
    technologies: ["Shopify", "Liquid", "JavaScript", "HTML5", "CSS3", "Klaviyo", "Google Analytics", "Figma"],
    features: [
      "Responsive design for mobile and desktop",
      "Custom Shopify theme development",
      "Enhanced product filtering and categorization",
      "Integrated email marketing with Klaviyo",
      "SEO optimization and speed performance improvements",
      "Lookbook and lifestyle image galleries",
      "Streamlined checkout process",
      "Back-office integration for inventory and order management",
    ],
    client: "Platini Jeans",
    year: "2024",
    challenge:
      "Platini Jeans wanted to revamp their outdated website to better reflect their brand identity, improve site usability, and boost online sales. The previous platform had limited customization options and lacked mobile responsiveness, affecting conversion rates and customer engagement.",
    solution:
      "We developed a fully custom Shopify storefront with a clean and fashion-forward design. Leveraging Liquid and JavaScript, we enhanced the site’s interactivity and UX. We integrated Klaviyo for targeted email campaigns and optimized site speed and SEO to improve visibility. Product pages were designed to tell a visual story and encourage exploration, while the backend was streamlined to support the team’s day-to-day operations efficiently.",
    results: [
      "Mobile conversions increased by 54%",
      "Average session duration improved by 39%",
      "Bounce rate decreased by 28%",
      "Email marketing click-through rate increased by 67%",
      "Inventory syncing errors reduced by 90%",
      "Overall online revenue up by 46% within 3 months",
    ],
    testimonial: {
      quote:
        "The new website perfectly captures the essence of our brand while making it easier for customers to browse and buy. We've seen a major lift in engagement and sales. The team was responsive, creative, and deeply invested in getting every detail right.",
      author: "Carlos Platini",
      position: "Founder & Creative Director, Platini Jeans",
    },
    process: [
      {
        title: "Discovery & Brand Audit",
        description:
          "We began by auditing the existing site and conducting stakeholder interviews to align on brand goals and pain points.",
      },
      {
        title: "Design & Prototyping",
        description:
          "Using Figma, we created wireframes and high-fidelity designs focused on clean aesthetics, easy navigation, and strong visuals.",
      },
      {
        title: "Development",
        description:
          "We built a custom Shopify theme using Liquid, optimized JavaScript, and modern CSS, ensuring fast load times and flexible content management.",
      },
      {
        title: "Integrations",
        description:
          "We integrated Klaviyo for email marketing, Google Analytics for tracking, and improved backend tools for smoother operations.",
      },
      {
        title: "Testing & Launch",
        description:
          "The site underwent rigorous QA across devices and browsers. We staged the launch and ensured a smooth transition with zero downtime.",
      },
      {
        title: "Post-Launch Support",
        description:
          "Ongoing support includes analytics reporting, performance tuning, and campaign-specific landing page development.",
      },
    ],
    gallery: [
      "/mansfashion.png?height=600&width=800",
      "/mens-fashion-apparel-dynamic-banners.webp?height=600&width=800",
      "/mens-fashion-apparel-dynamic-banners.webp?height=600&width=800",
      "/mens-fashion-apparel-dynamic-banners.webp?height=600&width=800",
    ],
    liveUrl: "https://www.platinijeans.com/",
    nextSteps:
      "We’re currently working on an influencer-focused lookbook experience and exploring AI-driven product recommendations to further enhance engagement and personalization.",
  },  

  
  // {
  //   id: "fintech-dashboard",
  //   title: "FinTech Investment Dashboard",
  //   category: "Finance",
  //   description:
  //     "A sophisticated investment analytics platform with real-time data visualization and portfolio management tools.",
  //   fullDescription:
  //     "We developed a comprehensive investment analytics platform for a leading fintech company. The dashboard provides investors with real-time data visualization, advanced portfolio management tools, and personalized investment insights, helping them make more informed financial decisions.",
  //   image: "/placeholder.svg?height=400&width=600",
  //   technologies: ["React", "D3.js", "Node.js", "MongoDB", "WebSockets", "AWS", "TensorFlow.js", "TypeScript"],
  //   features: [
  //     "Real-time market data visualization",
  //     "Portfolio performance tracking",
  //     "Risk assessment tools",
  //     "Scenario analysis simulator",
  //     "Personalized investment recommendations",
  //     "Document management for financial records",
  //     "Tax optimization suggestions",
  //     "Multi-device synchronization",
  //   ],
  //   client: "FinTech Innovations",
  //   year: "2022",
  //   challenge:
  //     "FinTech Innovations wanted to create a next-generation investment platform that could democratize sophisticated financial analysis tools previously available only to institutional investors. They needed a solution that could process and visualize complex financial data in real-time, provide personalized insights, and remain accessible to individual investors with varying levels of financial literacy.",
  //   solution:
  //     "We built a powerful investment dashboard using React and TypeScript for the frontend with D3.js for advanced data visualizations. The backend uses Node.js with MongoDB for data storage and WebSockets for real-time updates. We implemented machine learning algorithms using TensorFlow.js to provide personalized investment recommendations based on user goals, risk tolerance, and market conditions. The platform includes interactive tools for portfolio analysis, risk assessment, and scenario planning, all presented through an intuitive interface that makes complex financial concepts accessible.",
  //   results: [
  //     "Attracted 50,000+ users within the first six months",
  //     "Users reported 28% better investment returns on average",
  //     "Increased user engagement, with average session duration of 18 minutes",
  //     "Reduced portfolio analysis time from hours to minutes",
  //     "95% user satisfaction rating based on feedback surveys",
  //     "Featured in several financial publications as an innovative fintech solution",
  //   ],
  //   testimonial: {
  //     quote:
  //       "The investment dashboard has completely transformed how our clients interact with their portfolios. The real-time visualizations and personalized insights have democratized sophisticated investment analysis, giving our users capabilities that were previously available only to professional fund managers. The platform has become our key competitive advantage in the crowded fintech market.",
  //     author: "Michael Zhang",
  //     position: "CEO, FinTech Innovations",
  //   },
  //   process: [
  //     {
  //       title: "Financial Domain Research",
  //       description:
  //         "We conducted extensive research into investment analysis methodologies and worked with financial experts to understand key metrics and visualization needs.",
  //     },
  //     {
  //       title: "Data Architecture",
  //       description:
  //         "We designed a scalable data architecture capable of processing large volumes of financial data in real-time while maintaining high performance.",
  //     },
  //     {
  //       title: "UX/UI Design",
  //       description:
  //         "Our design team created an intuitive interface that makes complex financial data accessible, with careful attention to information hierarchy and visual clarity.",
  //     },
  //     {
  //       title: "Frontend Development",
  //       description:
  //         "We built the dashboard using React and TypeScript, implementing sophisticated data visualizations with D3.js and ensuring responsive design across devices.",
  //     },
  //     {
  //       title: "Backend Development",
  //       description:
  //         "We developed a robust backend using Node.js and MongoDB, implementing WebSockets for real-time data updates and secure API integrations with financial data providers.",
  //     },
  //     {
  //       title: "Machine Learning Implementation",
  //       description:
  //         "We integrated machine learning algorithms using TensorFlow.js to provide personalized investment recommendations and risk assessments.",
  //     },
  //     {
  //       title: "User Testing & Optimization",
  //       description:
  //         "We conducted extensive user testing with both financial experts and everyday investors to refine the platform's usability and effectiveness.",
  //     },
  //   ],
  //   gallery: [
  //     "/placeholder.svg?height=600&width=800",
  //     "/placeholder.svg?height=600&width=800",
  //     "/placeholder.svg?height=600&width=800",
  //     "/placeholder.svg?height=600&width=800",
  //   ],
  //   liveUrl: "https://example.com/fintech",
  //   nextSteps:
  //     "We're currently enhancing the platform with advanced predictive analytics capabilities and developing a mobile app to provide investors with on-the-go access to their portfolio insights.",
  // },
]
