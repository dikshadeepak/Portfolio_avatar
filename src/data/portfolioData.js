// ============================================================
// portfolioData.js — Centralized configuration for Md Yusuf's Portfolio
// All external links, personal info, and content in one place.
// Update this file to change any content across the entire site.
// ============================================================

export const personalInfo = {
  name: "Diksha Deepak ",
  firstName: "Diksha",
  brandName: "Diksha",
  title: "Full Stack & Python Developer",
  location: "Greater noida, India",
  phone: "+91 6200909622",
  emails: {
    primary: "dikshadeepak0195@gmail.com",
    secondary: "dikshadeepak03@gmail.com",
  },
  summary:
    "Aspiring software engineer and motivated B.Tech Computer Science student with solid skills in Java, Spring Boot, React, and Python. Passionate about building scalable full-stack applications with clean architecture and modern tech stacks.",
  resumeUrl: "/diksha.pdf",
};

export const socialLinks = {
  github: "https://github.com/dikshadeepak",
  linkedin: "https://linkedin.com/in/diksha-deepak-72bab7391",
  instagram: "https://instagram.com/diksha_0195",
};

export const heroContent = {
  greeting: "Hi, I'm Diksha",
  titleHighlight: "Full Stack &",
  titleHighlight2: "Python Developer",
  subtitle:
    "I build fast, scalable applications using Java, Spring Boot, MERN Stack, and Python.",
  ctaPrimary: { text: "View My Work", href: "#projects" },
  ctaSecondary: {
    text: "Contact Me",
    href: "mailto:dikshadeepak0195@example.com?subject=Hiring Inquiry – Portfolio&body=Hello Diksha,%0D%0A%0D%0AI came across your portfolio and would like to discuss an opportunity with you.%0D%0A%0D%0ALooking forward to hearing from you.%0D%0ABest Regards,",
  },
  ctaResume: { text: "Download Resume", href: "/diksha.pdf" },
};

export const aboutContent = {
  heading: "Hello!",
  bio: `Hi, my name is <span class="text-black text-xl font-black mx-1 tracking-wide uppercase">Diksha</span>, an aspiring software engineer based in Greater Noida, India, dedicated to crafting clean, functional, and highly scalable full-stack applications.`,
  techStack: ["Java", "Spring Boot", "MERN Stack"],
};

export const skillsContent = {
  badge: "My Process",
  heading: "Here's how I turn ideas into real-world applications",
  description:
    "I follow a structured, creative, and highly technical approach to turn ideas into robust full-stack applications.",
  cards: [
    {
      number: "01",
      title: "Research",
      text: "I start by understanding goals, user requirements, and technical constraints to lay a rock-solid foundation for the project.",
    },
    {
      number: "02",
      title: "Design",
      text: "Crafting clean architecture, intuitive interfaces, and pixel-perfect wireframes that guarantee an engaging and accessible user experience.",
    },
    {
      number: "03",
      title: "Develop",
      text: "Building scalable backends and responsive frontends using modern tech stacks and best practices.",
    },
    {
      number: "04",
      title: "Deploy",
      text: "Rigorous testing, performance optimization, and seamless deployment to cloud infrastructure, followed by ongoing support.",
    },
  ],
  endText: "Ready to ship!",
};

// Brand New Technical Skills Data
export const technicalSkills = {
  categories: [
    {
      title: "Programming Languages",
      skills: [
        { name: "Java", level: 75 },
        { name: "C++", level: 85 },
        { name: "Python", level: 90 }
      ]
    },
    {
      title: "Full Stack",
      skills: [
        { name: "MERN Stack", level: 90 },
        { name: "HTML", level: 95 },
        { name: "CSS", level: 90 },
        { name: "JavaScript", level: 92 },
        { name: "React", level: 85 },
        { name: "Node", level: 85 }
      ]
    },
    {
      title: "Backend",
      skills: [
        { name: "Spring Boot", level: 88 },
        { name: "FastAPI", level: 75 },
        { name: "REST APIs", level: 90 }
      ]
    },
    {
      title: "Databases",
      skills: [
        { name: "MongoDB", level: 88 },
        { name: "MySQL", level: 85 },
        { name: "Firebase", level: 80 }
      ]
    },
    {
      title: "Tools & Automation",
      skills: [
        { name: "Git & GitHub", level: 90 },
        { name: "VS Code", level: 95 },
        //{ name: "Postman", level: 88 },
        //{ name: "n8n", level: 82 },
        { name: "MongoDB Compass", level: 85 },
        { name: "Antigravity", level: 80 },
        { name: "Codex", level: 75 }
      ]
    },
    {
      title: "Computer Science Concepts",
      skills: [
        { name: "Data Structures", level: 88 },
        { name: "Algorithms", level: 85 },
        { name: "DBMS", level: 86 },
        { name: "OOP", level: 80 },
        { name: "Software Engineering", level: 84 }
      ]
    }
  ]
};

// Brand New Content Creation Data
export const contentCreation = {
  badge: "Creative Skills",
  heading: "Design, Creativity & Digital Content",
  description:
    "Alongside software development, I enjoy creating visually engaging designs, presentations, and digital content that simplify complex ideas and communicate them effectively.",

  categories: [
    {
      title: "UI/UX Design",
      description:
        "Designing clean, modern, and user-friendly interfaces for web applications and personal projects with attention to usability and aesthetics.",
      stats: "Portfolio & Personal Projects",
      icon: "🎨"
    },
    {
      title: "Presentation Design",
      description:
        "Creating professional presentations, project reports, and pitch decks for hackathons, academic projects, and technical demonstrations.",
     // stats: "10+ Presentations",
      icon: "📊"
    },
    {
      title: "Creative Graphics",
      description:
        "Designing posters, social media graphics, certificates, and promotional visuals using Canva and modern design principles.",
      stats: "Canva Designs",
      icon: "🖌️"
    },
    {
      title: "Video Editing",
      description:
        "Editing project demonstrations, portfolio showcases, and short educational videos with smooth transitions, motion graphics, and clean storytelling.",
      stats: "Project Showcases",
      icon: "🎬"
    }
  ]
};
// Brand New Leadership Data
export const leadershipList = [
  {
    title: "Academic Projects",
    description:
      "Led the development of AI and full-stack projects by planning features, coordinating implementation, and ensuring timely completion with a focus on clean architecture.",
    role: "Project Lead",
    badge: "Leadership"
  },
  {
    title: "Hackathons & Innovation",
    description:
      "Participated in hackathons and collaborated with teammates to brainstorm innovative solutions, develop prototypes, and present project ideas effectively.",
    role: "Team Member",
    badge: "Innovation"
  },
  {
    title: "Technical Learning",
    description:
      "Consistently improving problem-solving skills through Data Structures & Algorithms, Full Stack Development, Artificial Intelligence, and Machine Learning.",
    role: "Self-Learner",
    badge: "Growth"
  },
  {
    title: "Portfolio & Open Source",
    description:
      "Designed and developed personal portfolio projects while continuously enhancing UI/UX, responsiveness, animations, and code quality using modern web technologies.",
    role: "Developer",
    badge: "Development"
  },
  {
    title: "Continuous Improvement",
    description:
      "Actively exploring new technologies, building real-world applications, and documenting my learning journey to strengthen technical expertise.",
    role: "Tech Enthusiast",
    badge: "Learning"
  }
];
// Brand New Internships Data
export const internshipsList = [
  {
    organization: "Eduskills (AICTE Virtual Internship)",
    role: "AI & Machine Learning Virtual Intern",
    duration: "8 Weeks",
    skills: [
      "Machine Learning",
      "Data Preprocessing",
      "Model Training",
      "Python Programming"
    ],
    tech: [
      "Python",
      "NumPy",
      "Pandas",
      "Scikit-learn"
    ]
  },
  {
    organization: "Eduskills (AICTE Virtual Internship)",
    role: "Full Stack Web Development Virtual Intern",
    duration: "8 Weeks",
    skills: [
      "Frontend Development",
      "Backend Development",
      "REST APIs",
      "Database Management"
    ],
    tech: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Node.js",
      "MongoDB"
    ]
  },
  {
    organization: "AWS Academy",
    role: "Cloud Foundations Virtual Intern",
    duration: "8 Weeks",
    skills: [
      "Cloud Computing",
      "AWS Services",
      "Cloud Security",
      "Deployment"
    ],
    tech: [
      "AWS EC2",
      "S3",
      "IAM",
      "CloudWatch"
    ]
  },
  {
    organization: "Eduskills (AICTE Virtual Internship)",
    role: "Data Analytics Virtual Intern",
    duration: "8 Weeks",
    skills: [
      "Data Analysis",
      "Data Visualization",
      "Dashboard Creation",
      "Business Intelligence"
    ],
    tech: [
      "Python",
      "Excel",
      "Power BI",
      "SQL"
    ]
  }
];

// Brand New Soft Skills Data
export const softSkillsList = [
  { name: "Leadership", icon: "👑", desc: "Guiding teams, managing tasks, and driving project completion with shared vision." },
  { name: "Public Speaking", icon: "🎤", desc: "Confident stage presence, anchoring summits, and delivering articulate technical ideas." },
  { name: "Team Collaboration", icon: "🤝", desc: "Collaborating across fields, building racing carts, and engineering code in sync." },
  { name: "Communication", icon: "💬", desc: "Clear, concise, and structured interactions in both business and technical contexts." },
  { name: "Problem Solving", icon: "🧩", desc: "Breaking down complex engineering tasks into clean, logical, and modular pieces." },
  { name: "Adaptability", icon: "🌟", desc: "Quick to pick up new frameworks like FastAPI, Spring Boot, or automation tools like n8n." },
  { name: "Creativity", icon: "🎨", desc: "Blending cinematic aesthetics with software structure to build premium experiences." },
  { name: "Time Management", icon: "⏰", desc: "Balancing B.Tech studies, event hosting, and developing robust software platforms." }
];

export const projects = [
  {
    id: "resume-ai",
    number: "01",
    badge: "🚀 Featured Project",
    title: "AI Resume Analyzer",
    description:
      "An AI-powered resume analysis platform that evaluates resumes for ATS compatibility, extracts skills and education, provides job matching, and generates personalized improvement suggestions using Generative AI. Built with a modern full-stack architecture and responsive UI.",
    techTags: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Gemini API",
      "Tailwind CSS"
    ],
    links: {
      github: "#",
      demo: "#",
    },
    isFlagship: true,
  },
  {
    id: "healthcare-iot",
    number: "02",
    badge: "💡 Innovation Project",
    title: "Smart Healthcare Monitoring System",
    description:
      "An IoT-based healthcare monitoring system that tracks body temperature, heart rate, SpO₂, and environmental conditions using ESP32 and multiple sensors. The system integrates with a web dashboard to provide real-time monitoring, health insights, and emergency alerts.",
    techTags: [
      "ESP32",
      "Arduino",
      "IoT",
      "React",
      "Node.js",
      "MongoDB"
    ],
    links: {
      github: "#",
      demo: "#",
    },
    isFlagship: false,
  },
  {
    id: "portfolio",
    number: "03",
    badge: null,
    title: "3D Developer Portfolio",
    description:
      "A modern interactive portfolio featuring smooth animations, responsive layouts, immersive UI, project showcases, skills visualization, and creative sections built with React and modern frontend technologies.",
    techTags: [
      "React",
      "Next.js",
      "Tailwind CSS",
      "Framer Motion",
      "JavaScript"
    ],
    links: {
      github: "#",
      demo: "#",
    },
    isFlagship: false,
  }
];

export const certificates = {
  featured: [
    {
      name: "Oracle Cloud Infrastructure 2025 Generative AI",
      issuer: "Oracle",
      icon: "☁️",
    },
    {
      name: "Data Structures & Algorithms",
      issuer: "Udemy",
      icon: "💻",
    },
    {
      name: "Full Stack Web Development",
      issuer: "Udemy",
      icon: "🌐",
    },
    {
      name: "AI & Machine Learning",
      issuer: "AICTE / EduSkills",
      icon: "🤖",
    }
  ],
  viewAllUrl: "#",
};

export const education = {
  degree: "B.Tech – Computer Science & Engineering (AI & ML)",
  institution: "GL Bajaj Institute of Technology & Management",
  cgpa: "SGPA: 9.0",
  graduation: "2028",
  twelfth: "CBSE – 89%",
  tenth: "CBSE – 94%",
};

export const footerContent = {
  taglines: [
    "Full Stack Developer",
    "AI & Machine Learning Enthusiast",
    "Building Scalable Web Applications",
  ],
  credential: "B.Tech CSE (AI & ML) · SGPA 9.0",
  copyright: `© ${new Date().getFullYear()} Diksha Deepak | Built with React & Next.js`,
};

// EmailJS Configuration
// Will read directly from environment variables in Vite (starting with VITE_)
export const emailjsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || "YOUR_EMAILJS_SERVICE_ID",
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "YOUR_EMAILJS_TEMPLATE_ID",
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "YOUR_EMAILJS_PUBLIC_KEY",
};
