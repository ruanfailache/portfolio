export const LOCALES = ["en", "pt", "ja"] as const;
export type Locale = (typeof LOCALES)[number];

export interface BodyBlock {
  h?: string;
  p?: string;
  quote?: string;
}

export interface HeroStat {
  value: string;
  label: string;
}

export interface Capability {
  label: string;
  title: string;
  desc: string;
  color: AccentColor;
}

export interface StackGroup {
  label: string;
  items: string[];
}

export interface ExperienceEntry {
  company: string;
  client?: string;
  role: string;
  period: string;
  tags: string[];
}

export interface Project {
  title: string;
  company: string;
  status: string;
  color: AccentColor;
  desc: string;
  outcome?: string;
  tags: string[];
  slug?: string;
  markdown?: string;
  order?: number;
}

export interface SideProject {
  title: string;
  slug: string;
  status: string;
  color: AccentColor;
  desc: string;
  outcome?: string;
  tags: string[];
  body?: BodyBlock[];
  markdown?: string;
  order?: number;
}

export interface Contact {
  email: string;
  linkedin: string;
  github: string;
  location: string;
}

export interface OpenToItem {
  label: string;
  note: string;
}

export interface UI {
  nav: Record<string, string>;
  hireMe: string;
  viewMyWork: string;
  letsTalk: string;
  deliveredAt: string;
  via: string;
  whatIDo: string;
  whatIDoTitle: string;
  fromTheBlog: string;
  latestWriting: string;
  readAll: string;
  readPost: string;
  workKicker: string;
  workTitle: string;
  workSubtitle: string;
  techStack: string;
  selectedWork: string;
  sideProjectsTitle: string;
  outcome: string;
  allocatedAt: string;
  experienceTitle: string;
  blogKicker: string;
  blogTitle: string;
  blogSubtitle: string;
  noPosts: string;
  noProjects: string;
  backToPosts: string;
  readWord: string;
  workWithMe: string;
  postFooterTagline: string;
  contactKicker: string;
  contactTitle: string;
  contactSubtitle: string;
  openTo: string;
  openToItems: OpenToItem[];
  findMe: string;
  contactLabels: Record<string, string>;
  formAbout: string;
  opportunityTypes: string[];
  nameLabel: string;
  namePlaceholder: string;
  emailLabel: string;
  emailPlaceholder: string;
  subjectLabel: string;
  subjectPlaceholder: string;
  willBeSentAs: string;
  messageLabel: string;
  messagePlaceholder: string;
  sendMessage: string;
  sendTitle: string;
  sentTitle: string;
  sentBody: string;
  sendAnother: string;
  mailName: string;
  mailEmail: string;
  ctaKicker: string;
  ctaTitle: string;
  ctaBody: string;
  getInTouch: string;
  footerOpenToWork: string;
  footerCopyright: string;
  themeToLight: string;
  themeToDark: string;
  language: string;
  resumeNav: string;
  viewCase: string;
  caseStudy: string;
  overview: string;
  theRole: string;
  theTimeline: string;
  theStack: string;
  nextProject: string;
  backToWork: string;
  screenshotHint: string;
  resume: {
    title: string;
    download: string;
    summary: string;
    skills: string;
    experience: string;
    contact: string;
    present: string;
    backHome: string;
  };
}

export interface LocaleContent {
  code: string;
  label: string;
  name: string;
  role: string;
  headline: string;
  subheadline: string;
  tags: string[];
  heroStats: HeroStat[];
  intro: string;
  capabilities: Capability[];
  stack: StackGroup[];
  experience: ExperienceEntry[];
  contact: Contact;
  ui: UI;
}

export type AccentColor = "indigo" | "sage" | "rose" | "amber";

export const ACCENT_PALETTE: AccentColor[] = ["indigo", "sage", "rose", "amber"];

export const CLIENTS = [
  { client: "BMW", via: "Act Digital", color: "var(--indigo)" },
  { client: "Bradesco", via: "CI&T", color: "var(--sage)" },
  { client: "SEFAZ PA", via: "FADESP", color: "var(--rose)" },
  { client: "Encibra", via: null, color: "var(--amber)" },
  { client: "Driven Education", via: null, color: "var(--indigo)" },
  { client: "Mutual", via: null, color: "var(--sage)" },
] as const;

const en: LocaleContent = {
  code: "EN",
  label: "English",
  name: "Ruan Failache",
  role: "Senior Full Stack Developer",
  headline:
    "I build high impact systems that scale, and I bring AI to the teams behind them so they move faster.",
  subheadline:
    "Campinas, Brazil · 4 years of experience · Open to contract and full time work",
  tags: ["Angular", "Java", "Spring Boot", "AWS", "TypeScript", "AI Agents", "CI/CD"],
  heroStats: [
    { value: "4+", label: "Years of experience" },
    { value: "150+", label: "Developers mentored" },
    { value: "6+", label: "Production systems shipped" },
    { value: "C1", label: "English ready for global teams" },
  ],
  intro:
    "Senior Full Stack Developer with a strong record of modernising legacy systems, removing rework, and growing engineering teams across banking, the public sector, and fintech. I also keep a hands on AI practice, building agents and Spec Driven Development workflows that speed up delivery without giving up quality.",
  capabilities: [
    {
      label: "AI & Agents",
      title: "AI Agents and SDD Workflows",
      desc: "I design agent systems and Spec Driven Development workflows that take over manual, repetitive work. Then I coach the whole team so they get real value from them.",
      color: "amber",
    },
    {
      label: "Full Stack",
      title: "End to End Delivery",
      desc: "From precise Angular and React micro frontends to resilient Spring Boot and Node.js services, with clean architecture, WCAG AA accessibility, and automated tests.",
      color: "indigo",
    },
    {
      label: "Leadership",
      title: "Architecture and Mentorship",
      desc: "Architecture reviews, structured code reviews, knowledge transfer sessions, and one on one coaching that cut rework and make team delivery more consistent.",
      color: "sage",
    },
  ],
  stack: [
    {
      label: "Frontend",
      items: ["Angular 17+", "React", "TypeScript", "TailwindCSS", "Storybook"],
    },
    {
      label: "Backend",
      items: ["Java 17 + Spring Boot", "Node.js", "NestJS", "Quarkus", "Kotlin"],
    },
    {
      label: "AI & Infra",
      items: ["AI Agents & SDD", "AWS (Lambda / SQS / S3)", "Docker / Kubernetes", "CI/CD pipelines"],
    },
  ],
  experience: [
    { company: "Act Digital", client: "BMW", role: "Senior Full Stack Developer", period: "Dec 2025 to now", tags: ["Angular", "Quarkus", "AI Agents", "SDD"] },
    { company: "CI&T", client: "Bradesco", role: "Senior Full Stack Developer", period: "Sep 2024 to Oct 2025", tags: ["Angular 17", "Java 17", "QA"] },
    { company: "Encibra", role: "Senior Full Stack Developer", period: "May 2024 to Sep 2024", tags: ["Spring Boot", "AWS", "Mentoring"] },
    { company: "FADESP", client: "SEFAZ PA", role: "Full Stack Developer", period: "Oct 2023 to May 2024", tags: ["Angular 17", "Java 17"] },
    { company: "Driven Education", role: "Tutor", period: "May 2022 to May 2023", tags: ["Teaching", "150+ students"] },
    { company: "Mutual", role: "Front End Developer", period: "Oct 2021 to Apr 2022", tags: ["React", "Redux", "Micro-frontend"] },
  ],
  contact: {
    email: "ruanfailache@gmail.com",
    linkedin: "linkedin.com/in/ruanfailache",
    github: "github.com/ruanfailache",
    location: "Campinas, São Paulo, Brazil",
  },
  ui: {
    nav: { Home: "Home", Work: "Work", Blog: "Blog", Contact: "Contact" },
    hireMe: "Hire me",
    viewMyWork: "View my work",
    letsTalk: "Let's talk",
    deliveredAt: "Delivered at",
    via: "via",
    whatIDo: "What I do",
    whatIDoTitle: "Software teams trust, with AI that makes them faster.",
    fromTheBlog: "From the blog",
    latestWriting: "Latest writing",
    readAll: "Read all",
    readPost: "Read post",
    workKicker: "Work",
    workTitle: "Four years delivering systems that matter.",
    workSubtitle:
      "From user-facing micro frontends to cloud infrastructure, with a bias toward clean architecture, quality, and team growth.",
    techStack: "Tech Stack",
    selectedWork: "Client Work",
    sideProjectsTitle: "Side Projects",
    outcome: "Outcome",
    allocatedAt: "at",
    experienceTitle: "Experience",
    blogKicker: "Blog",
    blogTitle: "Writing.",
    blogSubtitle:
      "Field notes on AI agents, spec driven development, and how to modernise enterprise systems without breaking them.",
    noPosts: "No posts yet.",
    noProjects: "No projects yet.",
    backToPosts: "Back to all posts",
    readWord: "read",
    workWithMe: "Work with me",
    postFooterTagline: "Senior Full Stack Developer · AI-assisted delivery",
    contactKicker: "Contact",
    contactTitle: "Let's work together.",
    contactSubtitle:
      "Open to contract work, senior full-time roles, and mentorship including AI adoption and team enablement. I respond within 24 hours.",
    openTo: "Open to",
    openToItems: [
      { label: "Contract & freelance", note: "Scoped deliverables · available now" },
      { label: "Full-time roles", note: "Senior or lead · remote first" },
      { label: "Mentorship", note: "1:1 coaching · mock interviews" },
    ],
    findMe: "Find me",
    contactLabels: { email: "Email", linkedin: "LinkedIn", github: "GitHub", location: "Location" },
    formAbout: "What is this about",
    opportunityTypes: ["Contract & freelance", "Full-time role", "Mentorship", "Something else"],
    nameLabel: "Name",
    namePlaceholder: "Your name",
    emailLabel: "Email",
    emailPlaceholder: "you@company.com",
    subjectLabel: "Subject",
    subjectPlaceholder: "A short subject",
    willBeSentAs: "Will be sent as",
    messageLabel: "Message",
    messagePlaceholder: "Tell me about your project or role",
    sendMessage: "Send message",
    sendTitle: "Send a message",
    sentTitle: "Your email is ready",
    sentBody: "Your message is ready to send. I reply within 24 hours.",
    sendAnother: "Send another",
    mailName: "Name",
    mailEmail: "Email",
    ctaKicker: "Open to work",
    ctaTitle: "Have a project in mind?",
    ctaBody:
      "Open to contract work and senior full-time roles. Angular specialist, backend architect, or tech lead. Let's talk.",
    getInTouch: "Get in touch",
    footerOpenToWork: "Open to work",
    footerCopyright: "© 2026 Ruan Failache · Campinas, Brazil",
    themeToLight: "Switch to light mode",
    themeToDark: "Switch to dark mode",
    language: "Language",
    resumeNav: "Résumé",
    viewCase: "View case study",
    caseStudy: "Case Study",
    overview: "Overview",
    theRole: "Role",
    theTimeline: "Timeline",
    theStack: "Stack",
    nextProject: "Next project",
    backToWork: "Back to work",
    screenshotHint: "Drop a screenshot of this project here",
    resume: {
      title: "Résumé",
      download: "Download PDF",
      summary: "Summary",
      skills: "Skills",
      experience: "Experience",
      contact: "Contact",
      present: "Present",
      backHome: "Back to site",
    },
  },
};

const pt: LocaleContent = {
  code: "PT",
  label: "Português",
  name: "Ruan Failache",
  role: "Desenvolvedor Full Stack Sênior",
  headline:
    "Eu construo sistemas de alto impacto que escalam, e levo a IA para os times por trás deles para que entreguem mais rápido.",
  subheadline:
    "Campinas, Brasil · 4 anos de experiência · Aberto a projetos por contrato e vagas efetivas",
  tags: ["Angular", "Java", "Spring Boot", "AWS", "TypeScript", "Agentes de IA", "CI/CD"],
  heroStats: [
    { value: "4+", label: "Anos de experiência" },
    { value: "150+", label: "Pessoas desenvolvedoras mentoradas" },
    { value: "6+", label: "Sistemas em produção entregues" },
    { value: "C1", label: "Inglês pronto para times globais" },
  ],
  intro:
    "Desenvolvedor Full Stack Sênior com um histórico sólido em modernizar sistemas legados, eliminar retrabalho e fazer times de engenharia crescerem em bancos, setor público e fintech. Também mantenho uma prática de IA na prática, criando agentes e fluxos de Desenvolvimento Orientado a Especificação que aceleram a entrega sem abrir mão da qualidade.",
  capabilities: [
    {
      label: "IA e Agentes",
      title: "Agentes de IA e Fluxos SDD",
      desc: "Eu desenho sistemas de agentes e fluxos de Desenvolvimento Orientado a Especificação que assumem o trabalho manual e repetitivo. Depois oriento o time inteiro para que tirem valor real deles.",
      color: "amber",
    },
    {
      label: "Full Stack",
      title: "Entrega de Ponta a Ponta",
      desc: "De micro frontends precisos em Angular e React a serviços resilientes em Spring Boot e Node.js, com arquitetura limpa, acessibilidade WCAG AA e testes automatizados.",
      color: "indigo",
    },
    {
      label: "Liderança",
      title: "Arquitetura e Mentoria",
      desc: "Revisões de arquitetura, revisões de código estruturadas, sessões de transferência de conhecimento e mentoria individual que reduzem retrabalho e deixam a entrega do time mais consistente.",
      color: "sage",
    },
  ],
  stack: [
    { label: "Frontend", items: ["Angular 17+", "React", "TypeScript", "TailwindCSS", "Storybook"] },
    { label: "Backend", items: ["Java 17 + Spring Boot", "Node.js", "NestJS", "Quarkus", "Kotlin"] },
    { label: "IA e Infra", items: ["Agentes de IA e SDD", "AWS (Lambda / SQS / S3)", "Docker / Kubernetes", "Pipelines CI/CD"] },
  ],
  experience: [
    { company: "Act Digital", client: "BMW", role: "Desenvolvedor Full Stack Sênior", period: "Dez 2025 até hoje", tags: ["Angular", "Quarkus", "Agentes de IA", "SDD"] },
    { company: "CI&T", client: "Bradesco", role: "Desenvolvedor Full Stack Sênior", period: "Set 2024 a Out 2025", tags: ["Angular 17", "Java 17", "QA"] },
    { company: "Encibra", role: "Desenvolvedor Full Stack Sênior", period: "Mai 2024 a Set 2024", tags: ["Spring Boot", "AWS", "Mentoria"] },
    { company: "FADESP", client: "SEFAZ PA", role: "Desenvolvedor Full Stack", period: "Out 2023 a Mai 2024", tags: ["Angular 17", "Java 17"] },
    { company: "Driven Education", role: "Tutor", period: "Mai 2022 a Mai 2023", tags: ["Ensino", "150+ alunos"] },
    { company: "Mutual", role: "Desenvolvedor Front End", period: "Out 2021 a Abr 2022", tags: ["React", "Redux", "Micro-frontend"] },
  ],
  contact: {
    email: "ruanfailache@gmail.com",
    linkedin: "linkedin.com/in/ruanfailache",
    github: "github.com/ruanfailache",
    location: "Campinas, São Paulo, Brasil",
  },
  ui: {
    nav: { Home: "Início", Work: "Trabalho", Blog: "Blog", Contact: "Contato" },
    hireMe: "Contratar",
    viewMyWork: "Ver meu trabalho",
    letsTalk: "Vamos conversar",
    deliveredAt: "Entregue em",
    via: "via",
    whatIDo: "O que eu faço",
    whatIDoTitle: "Software em que os times confiam, com IA que os deixa mais rápidos.",
    fromTheBlog: "Do blog",
    latestWriting: "Escritos recentes",
    readAll: "Ver todos",
    readPost: "Ler post",
    workKicker: "Trabalho",
    workTitle: "Quatro anos entregando sistemas que importam.",
    workSubtitle:
      "De micro frontends voltados ao usuário a infraestrutura em nuvem, com uma preferência por arquitetura limpa, qualidade e crescimento do time.",
    techStack: "Stack Técnica",
    selectedWork: "Projetos de Cliente",
    sideProjectsTitle: "Projetos Pessoais",
    outcome: "Resultado",
    allocatedAt: "na",
    experienceTitle: "Experiência",
    blogKicker: "Blog",
    blogTitle: "Escritos.",
    blogSubtitle:
      "Anotações de campo sobre agentes de IA, desenvolvimento orientado a especificação e como modernizar sistemas corporativos sem quebrá-los.",
    noPosts: "Ainda não há posts.",
    noProjects: "Ainda não há projetos.",
    backToPosts: "Voltar para todos os posts",
    readWord: "de leitura",
    workWithMe: "Trabalhe comigo",
    postFooterTagline: "Desenvolvedor Full Stack Sênior · Entrega assistida por IA",
    contactKicker: "Contato",
    contactTitle: "Vamos trabalhar juntos.",
    contactSubtitle:
      "Aberto a projetos por contrato, vagas efetivas sênior e mentoria, incluindo adoção de IA e capacitação de times. Respondo em até 24 horas.",
    openTo: "Aberto a",
    openToItems: [
      { label: "Contrato e freelance", note: "Entregas com escopo · disponível agora" },
      { label: "Vagas efetivas", note: "Sênior ou líder · remoto primeiro" },
      { label: "Mentoria", note: "Mentoria individual · simulações de entrevista" },
    ],
    findMe: "Onde me encontrar",
    contactLabels: { email: "Email", linkedin: "LinkedIn", github: "GitHub", location: "Local" },
    formAbout: "Sobre o que é o contato",
    opportunityTypes: ["Contrato e freelance", "Vaga efetiva", "Mentoria", "Outro assunto"],
    nameLabel: "Nome",
    namePlaceholder: "Seu nome",
    emailLabel: "Email",
    emailPlaceholder: "voce@empresa.com",
    subjectLabel: "Assunto",
    subjectPlaceholder: "Um assunto curto",
    willBeSentAs: "Será enviado como",
    messageLabel: "Mensagem",
    messagePlaceholder: "Conte sobre o seu projeto ou a vaga",
    sendMessage: "Enviar mensagem",
    sendTitle: "Enviar uma mensagem",
    sentTitle: "Seu email está pronto",
    sentBody: "Sua mensagem está pronta para envio. Retorno em até 24 horas.",
    sendAnother: "Enviar outra",
    mailName: "Nome",
    mailEmail: "Email",
    ctaKicker: "Aberto a trabalho",
    ctaTitle: "Tem um projeto em mente?",
    ctaBody:
      "Aberto a projetos por contrato e vagas efetivas sênior. Especialista em Angular, arquiteto de backend ou tech lead. Vamos conversar.",
    getInTouch: "Entrar em contato",
    footerOpenToWork: "Aberto a trabalho",
    footerCopyright: "© 2026 Ruan Failache · Campinas, Brasil",
    themeToLight: "Mudar para o tema claro",
    themeToDark: "Mudar para o tema escuro",
    language: "Idioma",
    resumeNav: "Currículo",
    viewCase: "Ver estudo de caso",
    caseStudy: "Estudo de caso",
    overview: "O que eu fiz",
    theRole: "Função",
    theTimeline: "Período",
    theStack: "Stack usada",
    nextProject: "Próximo projeto",
    backToWork: "Voltar para o trabalho",
    screenshotHint: "Solte aqui uma captura de tela deste projeto",
    resume: {
      title: "Currículo",
      download: "Baixar PDF",
      summary: "Resumo",
      skills: "Habilidades",
      experience: "Experiência",
      contact: "Contato",
      present: "Atual",
      backHome: "Voltar ao site",
    },
  },
};

const ja: LocaleContent = {
  code: "JA",
  label: "日本語",
  name: "Ruan Failache",
  role: "シニア・フルスタック開発者",
  headline:
    "スケールするインパクトの大きいシステムを作り、その裏側のチームにAIを届けて、開発のスピードを上げます。",
  subheadline: "ブラジル・カンピーナス在住 · 経験4年 · 業務委託および正社員のお仕事を募集中",
  tags: ["Angular", "Java", "Spring Boot", "AWS", "TypeScript", "AIエージェント", "CI/CD"],
  heroStats: [
    { value: "4+", label: "実務経験の年数" },
    { value: "150+", label: "メンタリングした開発者" },
    { value: "6+", label: "本番リリースしたシステム" },
    { value: "C1", label: "グローバルチームで通用する英語力" },
  ],
  intro:
    "シニア・フルスタック開発者として、レガシーシステムのモダナイゼーション、手戻りの削減、エンジニアチームの成長を、銀行・公共・フィンテックの各領域で実現してきました。あわせて実践的なAIにも取り組み、品質を落とさずに開発を速くするエージェントや仕様駆動開発のワークフローを構築しています。",
  capabilities: [
    {
      label: "AIとエージェント",
      title: "AIエージェントとSDDワークフロー",
      desc: "手作業で繰り返される仕事を引き受けるエージェントと、仕様駆動開発のワークフローを設計します。そのうえでチーム全員が本当の価値を引き出せるように伴走します。",
      color: "amber",
    },
    {
      label: "フルスタック",
      title: "エンドツーエンドの実装",
      desc: "精緻なAngularとReactのマイクロフロントエンドから、堅牢なSpring BootとNode.jsのサービスまで。クリーンアーキテクチャ、WCAG AAのアクセシビリティ、自動テストを伴います。",
      color: "indigo",
    },
    {
      label: "リード",
      title: "アーキテクチャとメンタリング",
      desc: "アーキテクチャレビュー、体系立てたコードレビュー、ナレッジ移転のセッション、一対一のコーチングで、手戻りを減らしチームの提供品質を安定させます。",
      color: "sage",
    },
  ],
  stack: [
    { label: "フロントエンド", items: ["Angular 17+", "React", "TypeScript", "TailwindCSS", "Storybook"] },
    { label: "バックエンド", items: ["Java 17 + Spring Boot", "Node.js", "NestJS", "Quarkus", "Kotlin"] },
    { label: "AIとインフラ", items: ["AIエージェントとSDD", "AWS (Lambda / SQS / S3)", "Docker / Kubernetes", "CI/CDパイプライン"] },
  ],
  experience: [
    { company: "Act Digital", client: "BMW", role: "シニア・フルスタック開発者", period: "2025年12月 〜 現在", tags: ["Angular", "Quarkus", "AIエージェント", "SDD"] },
    { company: "CI&T", client: "Bradesco", role: "シニア・フルスタック開発者", period: "2024年9月 〜 2025年10月", tags: ["Angular 17", "Java 17", "QA"] },
    { company: "Encibra", role: "シニア・フルスタック開発者", period: "2024年5月 〜 2024年9月", tags: ["Spring Boot", "AWS", "メンタリング"] },
    { company: "FADESP", client: "SEFAZ PA", role: "フルスタック開発者", period: "2023年10月 〜 2024年5月", tags: ["Angular 17", "Java 17"] },
    { company: "Driven Education", role: "チューター", period: "2022年5月 〜 2023年5月", tags: ["指導", "150名以上の受講者"] },
    { company: "Mutual", role: "フロントエンド開発者", period: "2021年10月 〜 2022年4月", tags: ["React", "Redux", "マイクロフロントエンド"] },
  ],
  contact: {
    email: "ruanfailache@gmail.com",
    linkedin: "linkedin.com/in/ruanfailache",
    github: "github.com/ruanfailache",
    location: "ブラジル、サンパウロ州カンピーナス",
  },
  ui: {
    nav: { Home: "ホーム", Work: "実績", Blog: "ブログ", Contact: "お問い合わせ" },
    hireMe: "依頼する",
    viewMyWork: "実績を見る",
    letsTalk: "話しましょう",
    deliveredAt: "関わった現場",
    via: "経由",
    whatIDo: "できること",
    whatIDoTitle: "チームが信頼できるソフトウェアを、速さを生むAIとともに。",
    fromTheBlog: "ブログから",
    latestWriting: "最近の記事",
    readAll: "すべて読む",
    readPost: "記事を読む",
    workKicker: "実績",
    workTitle: "意味のあるシステムを届けてきた4年間。",
    workSubtitle:
      "ユーザー向けのマイクロフロントエンドからクラウド基盤まで。クリーンアーキテクチャ、品質、チームの成長を大切にしています。",
    techStack: "技術スタック",
    selectedWork: "クライアント案件",
    sideProjectsTitle: "サイドプロジェクト",
    outcome: "成果",
    allocatedAt: "常駐",
    experienceTitle: "経歴",
    blogKicker: "ブログ",
    blogTitle: "記事。",
    blogSubtitle:
      "AIエージェント、仕様駆動開発、そしてエンタープライズシステムを壊さずにモダナイズすることについての現場メモ。",
    noPosts: "まだ記事がありません。",
    noProjects: "まだプロジェクトがありません。",
    backToPosts: "記事一覧へ戻る",
    readWord: "",
    workWithMe: "一緒に働く",
    postFooterTagline: "シニア・フルスタック開発者 · AI支援の開発",
    contactKicker: "お問い合わせ",
    contactTitle: "一緒に取り組みましょう。",
    contactSubtitle:
      "業務委託、シニアの正社員、そしてAI導入やチームの立ち上げを含むメンタリングを募集しています。24時間以内に返信します。",
    openTo: "募集中",
    openToItems: [
      { label: "業務委託・フリーランス", note: "範囲を区切った成果物 · すぐ対応可能" },
      { label: "正社員", note: "シニア・リード · リモート優先" },
      { label: "メンタリング", note: "一対一のコーチング · 模擬面接" },
    ],
    findMe: "連絡先",
    contactLabels: { email: "メール", linkedin: "LinkedIn", github: "GitHub", location: "所在地" },
    formAbout: "お問い合わせの内容",
    opportunityTypes: ["業務委託・フリーランス", "正社員", "メンタリング", "その他"],
    nameLabel: "お名前",
    namePlaceholder: "お名前",
    emailLabel: "メール",
    emailPlaceholder: "you@company.com",
    subjectLabel: "件名",
    subjectPlaceholder: "短い件名",
    willBeSentAs: "次の件名で送信されます",
    messageLabel: "メッセージ",
    messagePlaceholder: "プロジェクトや募集について教えてください",
    sendMessage: "メッセージを送る",
    sendTitle: "メッセージを送る",
    sentTitle: "メールの準備ができました",
    sentBody: "メッセージは送信できる状態です。24時間以内にお返事します。",
    sendAnother: "もう一通送る",
    mailName: "お名前",
    mailEmail: "メール",
    ctaKicker: "お仕事募集中",
    ctaTitle: "進めたいプロジェクトはありますか。",
    ctaBody:
      "業務委託とシニアの正社員を募集中です。Angularのスペシャリスト、バックエンドのアーキテクト、テックリードとして。話しましょう。",
    getInTouch: "連絡する",
    footerOpenToWork: "お仕事募集中",
    footerCopyright: "© 2026 Ruan Failache · ブラジル、カンピーナス",
    themeToLight: "ライトモードに切り替え",
    themeToDark: "ダークモードに切り替え",
    language: "言語",
    resumeNav: "履歴書",
    viewCase: "ケーススタディを見る",
    caseStudy: "ケーススタディ",
    overview: "取り組んだこと",
    theRole: "役割",
    theTimeline: "期間",
    theStack: "使用した技術",
    nextProject: "次のプロジェクト",
    backToWork: "実績へ戻る",
    screenshotHint: "このプロジェクトのスクリーンショットをここにドロップ",
    resume: {
      title: "履歴書",
      download: "PDFをダウンロード",
      summary: "概要",
      skills: "スキル",
      experience: "経歴",
      contact: "連絡先",
      present: "現在",
      backHome: "サイトへ戻る",
    },
  },
};

export const strings: Record<Locale, LocaleContent> = { en, pt, ja };

export function getContent(locale: Locale): LocaleContent {
  return strings[locale] ?? strings.en;
}
