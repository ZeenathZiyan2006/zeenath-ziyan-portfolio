/**
 * Portfolio Data Configuration - Light Sage Green Elegance
 * 
 * =========================================================================
 * HOW TO CUSTOMIZE THIS FILE:
 * Simply replace the placeholders marked with [YOUR ...] with your real info!
 * All sections (Hero, About, Skills, Projects, Certifications, Achievements,
 * Education, Contact) read directly from this central file.
 * =========================================================================
 */

export interface SocialLinks {
  github: string;
  linkedin: string;
  email: string;
}

export interface PersonalInfo {
  name: string;
  professionalTitle: string;
  initials: string;
  shortBio: string;
  statusBadge: string;
  resumeUrl: string; // e.g. "/resume.pdf"
  avatarUrl: string | null; // e.g. "/profile-photo.jpg", set to null to use elegant initials placeholder
  socials: SocialLinks;
}

export interface AboutCard {
  title: string;
  description: string;
  iconName: string;
}

export interface AboutData {
  sectionTitle: string;
  sectionSubtitle: string;
  personalIntro: string;
  educationalBackground: string;
  interests: string[];
  careerGoals: string;
  passionForTech: string;
  highlights: AboutCard[];
}

export interface SkillItem {
  name: string;
  level?: string;
  iconName?: string;
  isPlaceholder?: boolean;
}

export interface SkillCategory {
  id: string;
  title: string;
  description: string;
  skills: SkillItem[];
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  featured: boolean;
  imagePlaceholderText: string;
  imagePath?: string;
}

export interface CertificateItem {
  id: string;
  title: string;
  issuer: string;
  date: string;
  year?: string;
  category: string;
  description: string;
  credentialId?: string;
  imagePath: string;
  realDocPath?: string;
  isPdf?: boolean;
}

export interface AchievementItem {
  id: string;
  title: string;
  event: string;
  year: string;
  badgeText: string;
  isTopAward: boolean;
  description: string;
  highlights: string[];
  certificateId?: string;
}

export interface EducationItem {
  id: string;
  institution: string;
  degree: string;
  field: string;
  academicYear: string;
  graduationYear: string;
  status: string;
  description: string;
  coursework: string[];
  score?: string;
}

export interface ContactData {
  heading: string;
  subheading: string;
  email: string;
  linkedin: string;
  github: string;
  location: string;
  availability: string;
}

// ---------------------------------------------------------------------------
// 1. PERSONAL INFORMATION & HERO
// ---------------------------------------------------------------------------
export const personalInfo: PersonalInfo = {
  // Full Name
  name: "Zeenath Ziyan",
  
  // Professional title
  professionalTitle: "Aspiring Technology Professional & AI Enthusiast",
  
  // 2-letter initials
  initials: "ZZ",
  
  // Short introduction for Hero section
  shortBio: "An ambitious and detail-oriented technology student passionate about building elegant, user-centric software, exploring artificial intelligence, and crafting meaningful digital solutions.",
  
  // Status pill displayed in Hero
  statusBadge: "Open to Internships & Collaborative Projects",
  
  // Resume link
  resumeUrl: "/Zeenath_Ziyan_Resume.pdf",
  
  // User Photograph
  avatarUrl: "/zeenath-photo.jpg",
  
  socials: {
    github: "https://github.com/ZeenathZiyan2006",
    linkedin: "https://linkedin.com/in/zeenath-ziyan",
    email: "mailto:zeenathziyan042@gmail.com",
  }
};

// ---------------------------------------------------------------------------
// 2. ABOUT ME
// ---------------------------------------------------------------------------
export const aboutData: AboutData = {
  sectionTitle: "About Me",
  sectionSubtitle: "Get to know my journey, academic passions, and future aspirations in technology.",
  
  personalIntro: "Hello! I am Zeenath Ziyan, a dedicated student with a deep fascination for software engineering, modern web technologies, and computational intelligence. I thrive in environments that challenge me to solve real-world problems and collaborate with forward-thinking teams.",
  
  educationalBackground: "Currently pursuing Bachelor of Engineering (B.E.) in Artificial Intelligence and Data Science at Shri Madhwa Vadiraja Institute of Technology and Management (SMVITM), I combine solid theoretical foundations with continuous hands-on learning through workshops, hackathons, and independent technical projects.",
  
  interests: [
    "Artificial Intelligence & LLM Application Workflows",
    "Modern Web Architecture & Responsive UX",
    "Algorithmic Problem Solving & Data Structures",
    "Open Source Collaboration & Tech Communities",
  ],
  
  careerGoals: "My goal is to engineer high-impact software systems, contribute to innovative engineering teams, and continuously expand my expertise in emerging technologies.",
  
  passionForTech: "I believe technology is at its best when it seamlessly empowers people. From participating in hackathons to exploring AI-driven workflows, I find joy in turning creative concepts into elegant, functional realities.",
  
  highlights: [
    {
      title: "Continuous Learner",
      description: "Dedicated to mastering new frameworks, development tools, and engineering best practices.",
      iconName: "Sparkles"
    },
    {
      title: "Problem Solver",
      description: "Driven by logical analysis, clean code principles, and finding effective solutions to complex challenges.",
      iconName: "Cpu"
    },
    {
      title: "Collaborative Spirit",
      description: "Active participant in hackathons and student organizations with a team-first mindset.",
      iconName: "Users"
    }
  ]
};

// ---------------------------------------------------------------------------
// 3. SKILLS (Organized into the 5 requested categories)
// ---------------------------------------------------------------------------
export const skillsData: SkillCategory[] = [
  {
    id: "programming-languages",
    title: "Programming Languages",
    description: "Core languages used for problem solving and software development.",
    skills: [
      { name: "C / C++", level: "Academic & Practice", iconName: "Code2" },
      { name: "Python", level: "Core & Scripting", iconName: "Terminal" },
      { name: "Java", level: "Object Oriented Programming", iconName: "Coffee" },
      { name: "JavaScript / TypeScript", level: "Web & Logic", iconName: "FileCode2" },
      { name: "SQL", level: "Relational Queries", iconName: "Database" },
    ]
  },
  {
    id: "web-development",
    title: "Web Development",
    description: "Frontend and full-stack building blocks for modern responsive applications.",
    skills: [
      { name: "React", level: "Component Architecture", iconName: "Layers" },
      { name: "HTML5 & CSS3", level: "Semantic Markup & Styling", iconName: "Layout" },
      { name: "Tailwind CSS", level: "Modern Utility Styling", iconName: "Palette" },
      { name: "RESTful APIs", level: "Data Integration", iconName: "Network" },
      { name: "Responsive Design", level: "Mobile-First UX", iconName: "Smartphone" },
    ]
  },
  {
    id: "tools-and-technologies",
    title: "Tools & Technologies",
    description: "Essential development tools, version control, and environments.",
    skills: [
      { name: "Git & GitHub", level: "Version Control & Collaboration", iconName: "GitBranch" },
      { name: "VS Code", level: "Primary Development IDE", iconName: "Code" },
      { name: "Vite", level: "Modern Frontend Tooling", iconName: "Zap" },
      { name: "Command Line / Bash", level: "Terminal Navigation", iconName: "TerminalSquare" },
    ]
  },
  {
    id: "other-technical-skills",
    title: "Other Technical Skills",
    description: "Specialized knowledge gained through certified workshops and coursework.",
    skills: [
      { name: "AI Tools & ChatGPT Workflows", level: "be10x Certified Workshop", iconName: "Bot" },
      { name: "Project Management Fundamentals", level: "LearnTube.ai Assessed", iconName: "CheckSquare" },
      { name: "Prompt Engineering Techniques", level: "Applied Proficiency", iconName: "Sparkles" },
      { name: "Data Structures & Algorithms", level: "Academic Coursework", iconName: "Binary" },
    ]
  },
  {
    id: "soft-skills",
    title: "Soft Skills",
    description: "Interpersonal attributes enabling effective collaboration and leadership.",
    skills: [
      { name: "Team Collaboration", level: "Demonstrated in Hackathons", iconName: "Users2" },
      { name: "Problem Solving & Analytical Thinking", level: "Core Competency", iconName: "Brain" },
      { name: "Adaptability & Fast Learning", level: "Proven Track Record", iconName: "Flame" },
      { name: "Technical Communication", level: "Presentations & Reports", iconName: "MessageSquareQuote" },
      { name: "Time Management", level: "Academic & Project Delivery", iconName: "Clock" },
    ]
  }
];

// ---------------------------------------------------------------------------
// 4. PROJECTS (All 6 Repositories from GitHub: ZeenathZiyan2006)
// ---------------------------------------------------------------------------
export const projectsData: ProjectItem[] = [
  {
    id: "border-ai-surveillance",
    title: "Border AI Surveillance & Threat Detection",
    category: "Computer Vision & AI",
    description: "AI-driven CCTV video analytics and perimeter intrusion surveillance system developed for smart border security (PS ID: 26187). Features real-time multi-object tracking, border breach alerting, and automated risk scoring.",
    technologies: ["Python", "OpenCV", "YOLO", "PyTorch", "Video Analytics"],
    githubUrl: "https://github.com/ZeenathZiyan2006/border-ai-surveillance",
    liveUrl: "https://github.com/ZeenathZiyan2006/border-ai-surveillance",
    featured: true,
    imagePlaceholderText: "AI Border Security & Video Analytics",
    imagePath: "/projects/border-ai.svg"
  },
  {
    id: "foodbridge-ai",
    title: "FoodBridge — AI Surplus Food Redistribution Platform",
    category: "AI & Social Impact",
    description: "An intelligent logistics platform connecting food donors, community NGOs, and volunteers to eradicate food wastage. Integrates an automated matching engine, route prioritization algorithms, and real-time dispatch tracking.",
    technologies: ["React", "FastAPI", "Python", "SQLite", "Tailwind CSS", "Redux"],
    githubUrl: "https://github.com/ZeenathZiyan2006/FoodBridge-AI",
    liveUrl: "https://github.com/ZeenathZiyan2006/FoodBridge-AI",
    featured: true,
    imagePlaceholderText: "FoodBridge Platform Showcase",
    imagePath: "/projects/foodbridge.jpg"
  },
  {
    id: "inventory-management-system",
    title: "Campus Lab Inventory & Equipment Management System",
    category: "Enterprise Full Stack",
    description: "Comprehensive laboratory asset and consumable management system developed for college departments. Features barcode auditing, role-based requisition approvals, maintenance scheduling, and automated PDF report compilation.",
    technologies: ["React", "TypeScript", "Node.js", "Express", "MySQL", "Tailwind CSS"],
    githubUrl: "https://github.com/ZeenathZiyan2006/Inventory-Management-System",
    liveUrl: "https://github.com/ZeenathZiyan2006/Inventory-Management-System",
    featured: true,
    imagePlaceholderText: "Lab Inventory Management Architecture",
    imagePath: "/projects/inventory-management.png"
  },
  {
    id: "smart-wearable-health-monitor",
    title: "Smart Wearable Health Monitor & Vital Telemetry",
    category: "IoT & Embedded Systems",
    description: "Connected wearable biometric telemetry device monitoring patient vital signs in real-time. Streams cardiac pulse, body temperature, and motion telemetry with automated emergency alert dispatch.",
    technologies: ["C++", "IoT", "Embedded Systems", "Sensors", "MQTT", "Python"],
    githubUrl: "https://github.com/ZeenathZiyan2006/Smart-Wearable-Health-Monitor",
    liveUrl: "https://github.com/ZeenathZiyan2006/Smart-Wearable-Health-Monitor",
    featured: false,
    imagePlaceholderText: "Wearable Health Telemetry System",
    imagePath: "/projects/smart-health.svg"
  },
  {
    id: "student-attendance-analytics",
    title: "Student Attendance Analytics & Academic Insights",
    category: "Data Analytics & Python",
    description: "Exploratory data analysis pipeline engineered with Pandas, NumPy, and Matplotlib. Aggregates multi-semester attendance records, pinpoints absenteeism anomalies, and correlates attendance rates with student academic performance.",
    technologies: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Jupyter"],
    githubUrl: "https://github.com/ZeenathZiyan2006/Project_Student-Attendence-Analytics-with-Pandas",
    liveUrl: "https://github.com/ZeenathZiyan2006/Project_Student-Attendence-Analytics-with-Pandas",
    featured: false,
    imagePlaceholderText: "Attendance Data Analytics Pipeline",
    imagePath: "/projects/attendance-analytics.svg"
  },
  {
    id: "titanic-workshop",
    title: "Titanic Survival Prediction & ML Workshop",
    category: "Machine Learning",
    description: "Predictive classification model developed during hands-on machine learning workshop. Conducts feature engineering, missing value imputation, and trains Random Forest and Logistic Regression classifiers evaluated with ROC-AUC metrics.",
    technologies: ["Python", "Scikit-Learn", "Pandas", "Classification", "Jupyter"],
    githubUrl: "https://github.com/ZeenathZiyan2006/TITANIC-WORKSHOP",
    liveUrl: "https://github.com/ZeenathZiyan2006/TITANIC-WORKSHOP",
    featured: false,
    imagePlaceholderText: "Titanic ML Classification Analysis",
    imagePath: "/projects/titanic-ml.svg"
  }
];

// ---------------------------------------------------------------------------
// 5. CERTIFICATIONS (Official Original Credentials from Verified PDF)
// ---------------------------------------------------------------------------
export const certificationsData: CertificateItem[] = [
  {
    id: "learntube-pm",
    title: "Project Management Assessment",
    issuer: "LearnTube.ai",
    date: "September 12, 2025",
    category: "Management & Professional Skills",
    description: "Credential ID: DJA-B-1-1692351-0. Successfully completed comprehensive competency assessment in Project Management Frameworks, Agile Lifecycles, and Task Planning. Certified by Shronit Ladhani & Gargi Ruparelia (Co-Founders, LearnTube).",
    imagePath: "/certificates/learntube-pm-original.jpg",
    realDocPath: "/certificates/learntube-project-management.svg"
  },
  {
    id: "be10x-ai",
    title: "AI Tools and ChatGPT Workshop",
    issuer: "be10x",
    date: "September 14th, 2025",
    category: "Artificial Intelligence",
    description: "Certified by Co-Founders Aditya Goenka & Aditya Kachave. Acquired high-efficiency capabilities: generating presentations with AI in <5 min, analysing complex data queries in <30 min, and AI-assisted coding & debugging in <10 min.",
    imagePath: "/certificates/be10x-ai-original.jpg",
    realDocPath: "/certificates/be10x-ai-tools-workshop.svg"
  },
  {
    id: "hpl-runner-up-cert",
    title: "Hackathon Premier League — 2nd Runner-Up Award",
    issuer: "Shri Madhwa Vadiraja Institute of Technology and Management (SMVITM)",
    date: "16th September to 1st October 2026",
    year: "2026",
    category: "Competitive Hackathon Award",
    description: "Secured the prestigious 2nd Runner-Up position in Hackathon Premier League organized by SMVITM in association with CodeTroopers, IAHV, IGNITE, and Shirva Police. Evaluated by an esteemed jury for problem solving, code architecture, and social impact.",
    imagePath: "/certificates/hpl-runner-up-original.jpg",
    realDocPath: "/certificates/hackathon-premier-league-2nd-runner-up.svg"
  },
  {
    id: "hpl-participation",
    title: "Hackathon Premier League — Certificate of Participation",
    issuer: "Shri Madhwa Vadiraja Institute of Technology and Management (SMVITM)",
    date: "16th September to 1st October 2026",
    year: "2026",
    category: "Competitive Hackathon",
    description: "Recognized for active participation, technical ideation, and collaborative software engineering in the multi-stage Hackathon Premier League held from 16th September to 1st of October 2026 at SMVITM.",
    imagePath: "/certificates/hpl-participation-original.jpg",
    realDocPath: "/certificates/hackathon-premier-league-participation.svg"
  },
  {
    id: "ieee-membership",
    title: "Certificate of IEEE Membership",
    issuer: "IEEE (Institute of Electrical and Electronics Engineers)",
    date: "Valid through 31 December 2026",
    year: "2026",
    category: "Professional Organization",
    description: "IEEE Member # 101696933. Recognized as an active Student Member in good standing through December 2026, denoting personal and professional commitment to advancing technology. Signed by Mary Ellen Randall, 2026 IEEE President.",
    imagePath: "/certificates/ieee-certificate-original.jpg",
    realDocPath: "/certificates/ieee-student-membership.svg"
  },
  {
    id: "ieee-membership-card",
    title: "IEEE Student Membership Kit & Subsection Welcome",
    issuer: "IEEE Mangalore Subsection (Region 10)",
    date: "Valid through 31 December 2026",
    year: "2026",
    category: "Professional Standing & Benefits",
    description: "Official digital membership kit and student credential card for the Mangalore Subsection. Provides access to IEEE technical publications, conferences, and student branch activities.",
    imagePath: "/certificates/ieee-card-original.jpg",
    realDocPath: "/certificates/ieee-student-membership.svg"
  },
  {
    id: "smvitm-web-dev",
    title: "Web Development — Value Added Course",
    issuer: "Shri Madhwa Vadiraja Institute of Technology and Management (SMVITM)",
    date: "22-01-2026",
    year: "2026",
    category: "Web Development & Engineering",
    description: "USN: 4MW24AD058 (III Sem, B.E. in AI & DS). Successfully completed the specialized Value Added Course on Web Development focused on All Round Personality Development (conducted across 6 sessions from 27-09-2025 to 27-12-2025). Certified by Coordinator Ms. Vidya Bhat and Principal Dr. Nagaraj Bhat.",
    imagePath: "/certificates/smvitm-web-development-original.jpg",
    realDocPath: "/certificates/smvitm-web-development.svg"
  },
  {
    id: "csc-academy-bcc",
    title: "Basic Computer Course (BCC)",
    issuer: "CSC Academy",
    date: "06-09-2025",
    year: "2025",
    category: "Computer Fundamentals & IT",
    description: "Certificate No: CSC6472142272. Successfully completed comprehensive training in Computer Fundamentals, Operating Systems, Word Processing, Spreadsheets, and Internet Digital Services. Certified by Naveen Sharma (COO, CSC Academy, New Delhi).",
    imagePath: "/certificates/csc-academy-computer-course-original.jpg",
    realDocPath: "/certificates/csc-academy-computer-course.svg"
  },
  {
    id: "kam-national-rank-2018",
    title: "National Level Maths Talent Search — National Rank Winner",
    issuer: "Karnataka Academy of Mathematics",
    date: "Year 2018",
    year: "2018",
    category: "National Mathematics Award",
    description: "Honored with the National Rank Winner distinction, securing the IXth Rank in National Level in the prestigious National Level Maths Talent Search Examination 2018 as a student of M.E.T. Public School. Certified by Convener Manjunatha H.",
    imagePath: "/certificates/maths-talent-search-2018-national-rank-original.jpg",
    realDocPath: "/certificates/maths-talent-search-2018-national-rank.svg"
  },
  {
    id: "kam-international-first-class-2016",
    title: "17th International Maths Talent Search — 1st Class Honor",
    issuer: "Karnataka Academy of Mathematics",
    date: "Year 2016",
    year: "2016",
    category: "International Mathematics Competition",
    description: "Awarded 1st Class at the School/College Level in the 17th International Maths Talent Search Examination 2016 for outstanding mathematical proficiency and analytical problem solving. Certified by Convener Manjunatha H.",
    imagePath: "/certificates/maths-talent-search-2016-first-class-original.jpg",
    realDocPath: "/certificates/maths-talent-search-2016-first-class.svg"
  },
  {
    id: "kam-national-pass-2018",
    title: "National Level Maths Talent Search Examination 2018",
    issuer: "Karnataka Academy of Mathematics",
    date: "Year 2018",
    year: "2018",
    category: "Mathematics & Academics",
    description: "Participated and secured Pass Class at School/College Level in the National Level Maths Talent Search Examination 2018 as a student of VII Standard at M.E.T. Public School. Certified by Convener Manjunatha H.",
    imagePath: "/certificates/maths-talent-search-2018-pass-original.jpg",
    realDocPath: "/certificates/maths-talent-search-2018-pass.svg"
  },
  {
    id: "gnels-abacus-2018",
    title: "State Level Abacus Competition (IV Level)",
    issuer: "Gurukula Neo Educational Learning Systems (GNELS)",
    date: "21st January 2018",
    year: "2018",
    category: "Cognitive Skills & Abacus",
    description: "Demonstrated advanced mental arithmetic speed and calculation agility at the State Level Abacus Competition (IV Level) held at Alva's English Medium High School, Moodabidri. Certified by Director Lakshmi G Hegde.",
    imagePath: "/certificates/gnels-abacus-competition-original.jpg",
    realDocPath: "/certificates/gnels-abacus-competition.svg"
  }
];

// ---------------------------------------------------------------------------
// 6. ACHIEVEMENTS (Highlighting Hackathon 2nd Runner-Up)
// ---------------------------------------------------------------------------
export const achievementsData: AchievementItem[] = [
  {
    id: "hpl-runner-up",
    title: "2nd Runner-Up — Hackathon Premier League",
    event: "Shri Madhwa Vadiraja Institute of Technology & Management (SMVITM)",
    year: "2026",
    badgeText: "Podium Finish • Top 3",
    isTopAward: true,
    description: "Secured 2nd Runner-Up position in an intensive, competitive multi-day hackathon (16 Sept – 1 Oct 2026), building an innovative technical solution evaluated on creativity, execution quality, and social impact.",
    highlights: [
      "Distinguished podium finish among numerous competitive student engineering teams",
      "Organized by SMVITM in collaboration with CodeTroopers, IAHV, IGNITE & Shirva Police",
      "Demonstrated rapid prototyping, collaborative team synergy, and technical problem-solving",
      "Presented live project demonstration and pitch to an esteemed panel of judges"
    ],
    certificateId: "hpl-runner-up-cert"
  },
  {
    id: "hpl-participant",
    title: "Hackathon Premier League Finalist & Participant",
    event: "Hackathon Premier League (SMVITM)",
    year: "2026",
    badgeText: "Hackathon Participant",
    isTopAward: false,
    description: "Completed rigorous problem-solving rounds, architecting innovative code under strict deadlines, and refining digital solution architectures.",
    highlights: [
      "Engaged in intensive collaborative ideation and sprint programming",
      "Strengthened practical Git/GitHub workflows and team delivery under time constraints"
    ],
    certificateId: "hpl-participation"
  }
];

// ---------------------------------------------------------------------------
// 7. EDUCATION (Academic Journey: Engineering, 2nd PUC, and 10th School)
// ---------------------------------------------------------------------------
export const educationData: EducationItem[] = [
  {
    id: "smvitm-be-aids",
    institution: "Shri Madhwa Vadiraja Institute of Technology and Management",
    degree: "B.E. (Bachelor of Engineering)",
    field: "Artificial Intelligence and Data Science",
    academicYear: "2024 - 2028",
    graduationYear: "2028",
    status: "Currently Pursuing / Enrolled",
    score: "Undergraduate Degree",
    description: "Currently pursuing Bachelor of Engineering in Artificial Intelligence and Data Science at Shri Madhwa Vadiraja Institute of Technology and Management (SMVITM). Building robust competencies in machine learning, deep neural architectures, data analysis pipelines, algorithms, and modern software engineering.",
    coursework: [
      "Artificial Intelligence & Machine Learning",
      "Data Science & Predictive Analytics",
      "Data Structures & Algorithms",
      "Database Management Systems",
      "Object-Oriented Programming (Java/Python)",
      "Web Technologies & Full Stack Development",
      "Operating Systems & Computer Networks"
    ]
  },
  {
    id: "govt-girls-pu-college",
    institution: "Govt. Girls P.U College Udupi",
    degree: "Pre-University Course (2nd PUC / 12th Standard)",
    field: "Science Stream (PCMB / PCMC)",
    academicYear: "2021 - 2023",
    graduationYear: "2023",
    status: "Completed",
    score: "Secured 79% in Boards",
    description: "Completed Pre-University course in the Science stream at Govt. Girls P.U College Udupi, securing 79% in the Karnataka State Board Examinations. Established solid mastery over analytical mathematics, physical sciences, and logical reasoning.",
    coursework: [
      "Physics",
      "Chemistry",
      "Mathematics",
      "Biology / Computer Science",
      "English Language",
      "Scientific Analysis"
    ]
  },
  {
    id: "met-english-medium-school",
    institution: "M.E.T English Medium Public School",
    degree: "Secondary School Leaving Certificate (SSLC / 10th Standard)",
    field: "General High School Academic Curriculum",
    academicYear: "2020 - 2021",
    graduationYear: "2021",
    status: "Completed",
    score: "Secured 86% in Boards",
    description: "Completed secondary education at M.E.T English Medium Public School with academic distinction, securing 86% in the Karnataka State Board Examinations. Built strong fundamentals in mathematical problem-solving, science, and communication.",
    coursework: [
      "Mathematics",
      "General Science",
      "Social Science",
      "English Language & Literature",
      "Foundational Computing"
    ]
  }
];

// ---------------------------------------------------------------------------
// 8. CONTACT SECTION
// ---------------------------------------------------------------------------
export const contactData: ContactData = {
  heading: "Get In Touch",
  subheading: "Have an exciting project, internship opportunity, or question? Feel free to reach out — my inbox is always open.",
  email: "zeenathziyan042@gmail.com",
  linkedin: "https://linkedin.com/in/zeenath-ziyan",
  github: "https://github.com/ZeenathZiyan2006",
  location: "Udupi, Karnataka, India (SMVITM)",
  availability: "Open to internships, AI/Data Science projects, and technical collaborations."
};
