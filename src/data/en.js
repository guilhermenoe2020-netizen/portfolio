export const en = {
  // Navigation
  nav: {
    home: "HOME",
    about: "ABOUT",
    missions: "PROJECTS",
    journey: "JOURNEY",
    skills: "STACK",
    contact: "CONTACT",
  },

  // Boot Screen
  boot: {
    systemInit: "INITIALIZING SYSTEM...",
    loadingModules: "LOADING MEMORY MODULES...",
    selectLanguage: "SELECT LANGUAGE",
    pressStart: "PRESS START TO BEGIN",
    skip: "SKIP >",
    logs: [
      "SYSTEM CHECK: OK",
      "MOUNTING PORTFOLIO ENVIRONMENT...",
      "LOADING TECHNOLOGY MODULES...",
      "STARTING INTERFACE...",
      "PORTFOLIO READY.",
    ],
  },

  // HOME — Player Profile
  home: {
    title: "Guilherme Noé",
    subtitle: "Full Stack Developer · Systems Analysis student",
    portfolioLabel: "PORTFOLIO · SOFTWARE DEVELOPMENT",
    experienceLabel: "XP",
    experienceValue: "Seeking my first internship",
    locationLabel: "LOCATION",
    locationValue: "Brazil",
    educationLabel: "EDUCATION",
    educationValue: "Systems Analysis and Development",
    statusLabel: "STATUS",
    exploreBtn: "VIEW PROJECTS",
    coreStackLabel: "CORE TECHNOLOGIES",
    focusLabel: "CURRENT FOCUS",
    focusValue: "Backend · Web development",
    goalLabel: "GOAL",
    goalValue: "Full Stack Developer",
    internshipLabel: "Seeking an internship",
    mainStackLabel: "CURRENT STUDIES · IN PROGRESS",
    mainStack: [
      { name: "Java", level: 3 },
      { name: "Spring Boot", level: 3 },
      { name: "MySQL", level: 2 },
      { name: "JavaScript", level: 2 },
    ],
  },

  // LEVEL 01 — About Me
  about: {
    level: "LEVEL 01",
    title: "About me",
    subtitle: "the person behind the code",
    profileLabel: "USER PROFILE",
    age: "19 years old",
    photoAlt: "Photo of Guilherme Noé",
    paragraph1:
      "I am a Systems Analysis and Development student looking for an internship. I want to become a Full Stack developer and build my career in web development, especially on the backend.",
    paragraph2:
      "I learn by building personal projects, including web applications and API integrations. I also create small solutions for everyday needs in my own life and for my family—ideas that become opportunities to practice and turn problems into code.",
    paragraph3:
      "I enjoy exploring Linux and learning how different systems work. I am deepening my studies in Java, Spring Boot, and MySQL while progressing with React, Node.js, and PostgreSQL. I also use Copilot in VS Code as an AI assistant to support building my applications. My experience so far comes from studying and personal projects.",
  },

  // LEVEL 03 — Missions (Projects)
  missions: {
    level: "LEVEL 03",
    title: "Featured",
    titleAccent: "projects",
    subtitle: "what I have been building",
    inventoryLabel: "FEATURED PROJECTS",
    itemLabel: "PROJECT",
    viewDemo: "Live Demo",
    viewCode: "GitHub",
    privateProject: "PRIVATE PROJECT",
    favoriteTag: "FAVORITE PROJECT",
    items: [
      {
        id: "github-profile-search",
        title: "GitHub Profile Search",
        description:
          "Interactive web app for searching GitHub profiles and displaying public information through the platform's API.",
        technologies: ["React", "JavaScript", "GitHub API", "CSS3"],
        favorite: false,
        demoUrl: "https://react-github-profile.vercel.app/",
        githubUrl: "https://github.com/guilhermenoe2020-netizen/react-github-profile",
        isPrivate: false,
      },
      {
        id: "workshop-springboot4-jpa",
        title: "Workshop Spring Boot 4 JPA",
        description:
          "Hands-on Spring Boot and JPA project exploring service development and data persistence in a Java application.",
        technologies: ["Java", "Spring Boot", "JPA", "Maven"],
        favorite: false,
        demoUrl: null,
        githubUrl: "https://github.com/guilhermenoe2020-netizen/workshop-springboot4-jpa",
        isPrivate: false,
      },
      {
        id: "clima-agora",
        title: "Clima Agora",
        description:
          "Interactive weather app that queries a weather API and displays current conditions with dynamic updates in a responsive interface.",
        technologies: ["React", "JavaScript", "HTML5", "CSS3", "REST API"],
        favorite: true,
        demoUrl: "https://react-clima-agora.vercel.app/",
        githubUrl: "https://github.com/guilhermenoe2020-netizen/react-clima-agora",
        isPrivate: false,
      },
      {
        id: "ascii-binary-inspector",
        title: "ASCII Binary Inspector",
        description:
          "A C program for exploring the binary representation of ASCII characters and converting between text and binary code.",
        technologies: ["C", "ASCII", "Binary"],
        favorite: false,
        demoUrl: null,
        githubUrl: "https://github.com/guilhermenoe2020-netizen/ascii-binary-inspector",
        isPrivate: false,
      },
      {
        id: "logica-programacao-portugol",
        title: "Programming Logic with Portugol",
        description:
          "Introductory exercises and projects created to practice programming logic with Portugol.",
        technologies: ["Portugol", "Programming Logic"],
        favorite: false,
        demoUrl: null,
        githubUrl: "https://github.com/guilhermenoe2020-netizen/logica-programacao-portugol",
        isPrivate: false,
      },
    ],
  },

  // LEVEL 04 — Journey (Timeline)
  journey: {
    level: "LEVEL 04",
    title: "Journey",
    subtitle: "my learning path so far",
    questLabel: "QUEST",
    learningLabel: "LEARNED",
    timeline: [
      {
        period: "February 2026",
        title: "First Steps",
        description:
          "My first contact with programming was studying Portugol and practicing logic. I built a simple grade-checking program during this first step.",
        skills: "Portugol · logic · algorithms",
      },
      {
        period: "2026",
        title: "Logic & Programming",
        description:
          "Started my Systems Analysis and Development studies and practiced programming fundamentals, logic, and problem-solving.",
        skills: "Systems Analysis · logic · fundamentals",
      },
      {
        period: "First projects",
        title: "First commit",
        description:
          "My first commit marked the beginning of hands-on Git practice and publishing personal pages and projects on the web.",
        skills: "Git · HTML · CSS · Vercel",
      },
      {
        period: "Personal projects",
        title: "JavaScript and interactions",
        description:
          "In GitHub Profile Search and Clima Agora, I practiced JavaScript by building interactions, event handling, and dynamic interface updates.",
        skills: "JavaScript · APIs · events · DOM",
      },
      {
        period: "Personal projects",
        title: "Personal projects",
        description:
          "GitHub Profile Search, Clima Agora, ASCII Binary Inspector in C, and Java study projects are part of what I have been building to practice.",
        skills: "React · JavaScript · C · Java",
      },
      {
        period: "In progress",
        title: "Expanding the stack",
        description:
          "I am broadening my studies with React, Node.js, and PostgreSQL while continuing to explore Linux systems and new tools.",
        skills: "React · Node.js · PostgreSQL · Linux Mint",
      },
    ],
  },

  // LEVEL 05 — Skills / Stack
  skills: {
    sectionTitle: "LEVEL 05",
    subtitle: "My stack",
    description: "tools I am learning and using in my projects",
    inventoryLabel: "MY STACK",
    globeTitle: "TECHNOLOGIES I HAVE EXPLORED",
    globeInstruction: "Rotate the globe and hover over the icons to see each technology.",
    categories: {
      main: "Core",
      web: "Front-end",
      database: "Database",
      tools: "Infra & AI",
    },
    items: [
      { name: "Java", category: "main" },
      { name: "Spring Boot", category: "main" },
      { name: "MySQL", category: "main" },
      { name: "JavaScript", category: "web" },
      { name: "React", category: "web" },
      { name: "HTML", category: "web" },
      { name: "CSS", category: "web" },
      { name: "PostgreSQL", category: "database" },
      { name: "Git", category: "tools" },
      { name: "Claude AI", category: "tools" },
      { name: "Copilot", category: "tools" },
      { name: "Vercel", category: "tools" },
      { name: "Supabase", category: "tools" },
    ],
    globeItems: [
      { name: "Java" },
      { name: "Spring Boot" },
      { name: "MySQL" },
      { name: "JavaScript" },
      { name: "React" },
      { name: "HTML" },
      { name: "CSS" },
      { name: "PostgreSQL" },
      { name: "Git" },
      { name: "GitHub" },
      { name: "Copilot" },
      { name: "Vercel" },
      { name: "Supabase" },
      { name: "Vite" },
      { name: "Google Cloud" },
      { name: "Node.js" },
      { name: "Claude AI" },
      { name: "Linux" },
      { name: "Linux Mint" },
      { name: "Windows" },
    ],
  },

  // LEVEL 06 — Contact
  contact: {
    level: "LEVEL 06",
    sectionTitle: "Contact",
    subtitle: "explore my projects or get in touch",
    statusLabel: "STATUS",
    statusTitle: "Seeking an internship",
    statusDescription: "Open to internship opportunities in web development and backend.",
    journeyLabel: "MY PATH",
    journeyTitle: "Systems Analysis student",
    journeyDescription: "Full Stack developer in training, learning and building personal projects.",
    linksLabel: "MY LINKS",
    github: "GitHub",
    linkedin: "LinkedIn",
    youtube: "YouTube",
    email: "Email",
  },

  // Footer
  footer: {
    rights: "All rights reserved.",
    builtWith: "Built with React, Three.js & Vite",
    systemStatus: "SEEKING INTERNSHIP",
  },
  terminal: {
    title: "Interactive terminal integrated into about",
    welcome: "Welcome to the portfolio terminal. Type help to see the available commands.",
    prompt: "type a command",
    help: "Available commands: help, about, stack, systems, projects, clear",
    about: "Systems Analysis student seeking an internship and learning Full Stack development with a backend and web focus.",
    stack: "Java · Spring Boot · MySQL · JavaScript · React · HTML · CSS · Copilot in VS Code",
    systems: "Windows · Linux · Linux Mint",
    projects: "GitHub Profile Search · Clima Agora · ASCII Binary Inspector (C)",
    unknown: "Command not found. Type help to see available commands.",
    execute: "Run command",
  },
  ui: {
    projects: "FEATURED PROJECTS",
    timeline: "TIMELINE",
    origin: "MY BACKGROUND",
    toggleNavigation: "Toggle navigation",
  },
};