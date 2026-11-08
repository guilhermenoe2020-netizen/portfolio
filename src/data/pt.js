export const pt = {
  // Navegação
  nav: {
    home: "INÍCIO",
    about: "SOBRE",
    missions: "PROJETOS",
    journey: "JORNADA",
    skills: "TECNOLOGIAS",
    contact: "CONTATO",
  },

  // Boot Screen
  boot: {
    systemInit: "INICIALIZANDO SISTEMA...",
    loadingModules: "CARREGANDO MÓDULOS DE MEMÓRIA...",
    selectLanguage: "SELECIONE O IDIOMA",
    pressStart: "PRESSIONE START PARA INICIAR",
    skip: "PULAR >",
    logs: [
      "VERIFICANDO SISTEMA: OK",
      "MONTANDO AMBIENTE DO PORTFÓLIO...",
      "CARREGANDO MÓDULOS DE TECNOLOGIA...",
      "INICIANDO INTERFACE...",
      "PORTFÓLIO PRONTO.",
    ],
  },

  // HOME — Player Profile
  home: {
    title: "Guilherme Noé",
    subtitle: "Desenvolvedor Full Stack · Estudante de ADS",
    portfolioLabel: "PORTFÓLIO · DESENVOLVIMENTO DE SOFTWARE",
    experienceLabel: "XP",
    experienceValue: "Em busca do 1° estágio",
    locationLabel: "LOCALIZAÇÃO",
    locationValue: "Brasil",
    educationLabel: "FORMAÇÃO",
    educationValue: "Análise e Desenvolvimento de Sistemas",
    statusLabel: "STATUS",
    exploreBtn: "VER PROJETOS",
    coreStackLabel: "TECNOLOGIAS PRINCIPAIS",
    focusLabel: "FOCO ATUAL",
    focusValue: "Backend · Desenvolvimento web",
    goalLabel: "OBJETIVO",
    goalValue: "Desenvolvedor Full Stack",
    internshipLabel: "Buscando estágio",
    mainStackLabel: "ESTUDOS ATUAIS · EM APRENDIZADO",
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
    title: "Sobre mim",
    subtitle: "quem está por trás do código",
    profileLabel: "USUÁRIO · GUILHERME NOÉ",
    age: "19 anos",
    photoAlt: "Foto de Guilherme Noé",
    paragraph1:
      "Sou estudante de Análise e Desenvolvimento de Sistemas e estou em busca de uma oportunidade de estágio. Quero me tornar desenvolvedor Full Stack e construir minha carreira com desenvolvimento web, especialmente no back-end.",
    paragraph2:
      "Aprendo na prática criando projetos pessoais, como aplicações web e integrações com APIs. Também desenvolvo pequenas soluções para necessidades do meu dia a dia e da minha família — ideias que viram uma oportunidade de praticar e transformar problemas em código.",
    paragraph3:
      "Gosto de explorar o Linux e entender como diferentes sistemas funcionam. Estou aprofundando meus estudos em Java, Spring Boot e MySQL, enquanto avanço em React, Node.js e PostgreSQL. Também uso o Copilot no VS Code como assistente de IA para apoiar a criação das minhas aplicações. Minha experiência até aqui vem dos estudos e de projetos próprios.",
  },

  // LEVEL 03 — Missions (Projetos)
  missions: {
    level: "LEVEL 03",
    title: "Projetos",
    titleAccent: "em destaque",
    subtitle: "o que venho construindo",
    inventoryLabel: "PROJETOS EM DESTAQUE",
    itemLabel: "PROJETO",
    viewDemo: "VER DEMONSTRAÇÃO",
    viewCode: "GitHub",
    privateProject: "PROJETO PRIVADO",
    favoriteTag: "PROJETO FAVORITO",
    items: [
      {
        id: "github-profile-search",
        title: "GitHub Profile Search",
        description:
          "Aplicação web interativa para pesquisar perfis do GitHub e exibir informações públicas usando a API da plataforma.",
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
          "Projeto prático com Spring Boot e JPA, explorando a criação de serviços e a persistência de dados em uma aplicação Java.",
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
          "Aplicação interativa que consulta uma API meteorológica e apresenta as condições atuais em uma interface responsiva com atualizações dinâmicas.",
        technologies: ["React", "JavaScript", "HTML5", "CSS3", "API REST"],
        favorite: true,
        demoUrl: "https://react-clima-agora.vercel.app/",
        githubUrl: "https://github.com/guilhermenoe2020-netizen/react-clima-agora",
        isPrivate: false,
      },
      {
        id: "ascii-binary-inspector",
        title: "ASCII Binary Inspector",
        description:
          "Ferramenta feita em C para explorar a representação binária de caracteres ASCII e visualizar a conversão entre texto e código binário.",
        technologies: ["C", "ASCII", "Binário"],
        favorite: false,
        demoUrl: null,
        githubUrl: "https://github.com/guilhermenoe2020-netizen/ascii-binary-inspector",
        isPrivate: false,
      },
      {
        id: "logica-programacao-portugol",
        title: "Lógica de Programação com Portugol",
        description:
          "Exercícios e projetos introdutórios desenvolvidos para praticar lógica de programação com Portugol.",
        technologies: ["Portugol", "Lógica de Programação"],
        favorite: false,
        demoUrl: null,
        githubUrl: "https://github.com/guilhermenoe2020-netizen/logica-programacao-portugol",
        isPrivate: false,
      },
    ],
  },

  // LEVEL 04 — Journey (Linha do Tempo)
  journey: {
    level: "LEVEL 04",
    title: "Jornada",
    subtitle: "trajetória de aprendizado até aqui",
    questLabel: "QUEST",
    learningLabel: "APRENDIZADOS",
    timeline: [
      {
        period: "Fevereiro de 2026",
        title: "Primeiros Passos",
        description:
          "Meu primeiro contato com programação foi estudando Portugol e praticando lógica. Nesse começo, desenvolvi um sistema simples de verificação de notas.",
        skills: "Portugol · lógica · algoritmos",
      },
      {
        period: "2026",
        title: "Lógica e Programação",
        description:
          "Início dos estudos acadêmicos em ADS e prática de fundamentos de programação, lógica e resolução de problemas.",
        skills: "ADS · lógica · fundamentos",
      },
      {
        period: "Primeiros projetos",
        title: "Primeiro commit",
        description:
          "Meu primeiro commit marcou o começo da prática com Git e da publicação de páginas e projetos próprios na web.",
        skills: "Git · HTML · CSS · Vercel",
      },
      {
        period: "Projetos pessoais",
        title: "JavaScript e interações",
        description:
          "Nos projetos GitHub Profile Search e Clima Agora, pratiquei JavaScript criando interações, eventos e atualizações dinâmicas na interface.",
        skills: "JavaScript · APIs · eventos · DOM",
      },
      {
        period: "Projetos pessoais",
        title: "Projetos pessoais",
        description:
          "GitHub Profile Search, Clima Agora, ASCII Binary Inspector em C e projetos de estudo com Java fazem parte do que venho construindo para praticar.",
        skills: "React · JavaScript · C · Java",
      },
      {
        period: "Em andamento",
        title: "Expandindo a stack",
        description:
          "Estou ampliando meus estudos com React, Node.js e PostgreSQL, além de continuar explorando sistemas Linux e novas ferramentas.",
        skills: "React · Node.js · PostgreSQL · Linux Mint",
      },
    ],
  },

  // LEVEL 05 — Skills / Stack
  skills: {
    sectionTitle: "LEVEL 05",
    subtitle: "Stack",
    description: "ferramentas que estudo e uso nos meus projetos",
    inventoryLabel: "MINHA STACK",
    globeTitle: "TECNOLOGIAS QUE JÁ EXPLOREI",
    globeInstruction: "Gire o globo e passe o mouse pelos ícones para ver cada tecnologia.",
    categories: {
      main: "Principal",
      web: "Front-end",
      database: "Banco de dados",
      tools: "Infra & IA",
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
    sectionTitle: "Contato",
    subtitle: "acompanhe meus projetos ou entre em contato",
    statusLabel: "STATUS",
    statusTitle: "Buscando estágio",
    statusDescription: "Aberto a oportunidades de estágio em desenvolvimento web e backend.",
    journeyLabel: "TRAJETÓRIA",
    journeyTitle: "Estudante de ADS",
    journeyDescription: "Desenvolvedor Full Stack em formação, aprendendo e criando projetos pessoais.",
    linksLabel: "MINHAS REDES",
    github: "GitHub",
    linkedin: "LinkedIn",
    youtube: "YouTube",
    email: "E-mail",
  },

  // Rodapé
  footer: {
    rights: "Todos os direitos reservados.",
    builtWith: "Construído com React, Three.js & Vite",
    systemStatus: "BUSCANDO ESTÁGIO",
  },
  terminal: {
    title: "Terminal interativo integrado ao sobre",
    welcome: "Bem-vindo ao terminal do portfólio. Digite help para ver os comandos disponíveis.",
    prompt: "digite um comando",
    help: "Comandos disponíveis: help, about, stack, systems, projects, clear",
    about: "Estudante de ADS buscando estágio e aprendendo desenvolvimento Full Stack com foco em backend e web.",
    stack: "Java · Spring Boot · MySQL · JavaScript · React · HTML · CSS · Copilot no VS Code",
    systems: "Windows · Linux · Linux Mint",
    projects: "GitHub Profile Search · Clima Agora · ASCII Binary Inspector (C)",
    unknown: "Comando não encontrado. Digite help para ver os comandos disponíveis.",
    execute: "Executar comando",
  },
  ui: {
    projects: "PROJETOS EM DESTAQUE",
    timeline: "LINHA DO TEMPO",
    origin: "MINHA ORIGEM",
    toggleNavigation: "Abrir ou fechar navegação",
  },
};