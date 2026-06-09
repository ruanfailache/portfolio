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
}

export interface Post {
  title: string;
  date: string;
  read: string;
  tag: string;
  color: AccentColor;
  summary: string;
  body: BodyBlock[];
  slug?: string;
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
  projects: Project[];
  sideProjects: SideProject[];
  posts: Post[];
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
  projects: [
    {
      title: "BMW Connected Drive and AI Transformation",
      company: "Act Digital, at BMW",
      status: "Active",
      color: "indigo",
      desc: "I support a mainframe modernisation for BMW inside an international team. I built Angular micro frontends and Quarkus microservices, and I led the AI adoption effort. I introduced agent based workflows and Spec Driven Development, moved manual coding over to AI assisted delivery, and mentored the team so the new tools actually stuck.",
      outcome: "Team velocity rose clearly after the move to AI agents and SDD",
      tags: ["Angular 17", "Quarkus", "AI Agents", "SDD", "International"],
      slug: "bmw-connected-drive",
    },
    {
      title: "Bradesco Digital Banking",
      company: "CI&T, at Bradesco",
      status: "Completed",
      color: "sage",
      desc: "I maintained micro frontends and Java 17 microservices for the third largest bank in Brazil. I drove a large drop in rework through proactive QA, consistent code reviews, and better technical alignment across the team.",
      outcome: "Rework fell to almost zero with proactive QA and structured code reviews",
      tags: ["Angular 17", "Java 17", "QA", "Code Reviews"],
      slug: "bradesco-digital-banking",
    },
    {
      title: "Legacy System Overhaul",
      company: "FADESP, at SEFAZ PA",
      status: "Completed",
      color: "rose",
      desc: "I modernised AngularJS and Java 8 government systems, delivering new Angular 17 and Java 17 applications that made internal workflows noticeably faster and brought the number of bugs down.",
      outcome: "A clear drop in bugs through step by step modernisation",
      tags: ["AngularJS to 17", "Java 8 to 17", "System Design"],
      slug: "sefaz-legacy-overhaul",
    },
    {
      title: "AWS Backend Platform",
      company: "Encibra",
      status: "Completed",
      color: "amber",
      desc: "I led the backend architecture with Spring Boot, PostgreSQL, and AWS. I mentored the team through pair programming and knowledge transfer sessions, lifting the delivery rate with consistent code standards.",
      tags: ["Java 17", "Spring Boot", "AWS", "Team Leadership"],
      slug: "encibra-aws-platform",
    },
  ],
  sideProjects: [
    {
      title: "Multi-Agent Blog Generation Engine",
      slug: "blog-agent",
      status: "Shipped",
      color: "amber",
      desc: "A Python-based system using LangChain and LangGraph to orchestrate multi-agent workflows that research, write, and refine blog articles and long-form documents.",
      outcome: "Successfully generated full blog posts with multi-stage research and refinement",
      tags: ["LangChain", "LangGraph", "Python", "Multi-Agent Architecture", "Agent Communication"],
      body: [
        { h: "The problem" },
        { p: "Writing a blog post is not a single task. It is research, drafting, fact-checking, refining for voice, and then reviewing for gaps. I wanted to build a system where I could describe what I wanted written in a few sentences, and let agents handle the entire pipeline." },
        { h: "The architecture" },
        { p: "I structured the system around three collaborating agents: a researcher gathers information and organizes context, a writer drafts the content with that context, and a reviewer checks for completeness and voice consistency. Each agent has clear inputs and outputs, and they communicate through a shared state graph." },
        { h: "The breakthrough" },
        { p: "The real learning came from designing agent communication. At first, each agent worked independently, producing work that did not build on each other. The shift was to explicit handoff points where one agent could read the previous agent output and respond to it directly. That small change made the workflow feel coherent rather than disjointed." },
        { quote: "Good agent communication is not about asking one agent to do everything. It is about small, focused tasks that each agent does well, and explicit handoffs that let one agent understand and improve the previous agent output." },
        { p: "The system is still in active use for generating research-backed content." },
      ],
    },
  ],
  posts: [
    {
      title: "Shipping AI Agents to a Skeptical Enterprise Team",
      slug: "shipping-ai-agents-enterprise",
      date: "May 2026",
      read: "6 min",
      tag: "AI & Agents",
      color: "amber",
      summary: "How I brought agent based workflows and Spec Driven Development to an international BMW team that had never trusted AI with production code, and what actually moved the needle.",
      body: [
        { p: "Most attempts at AI adoption inside enterprise teams fail for the same reason. They arrive as a mandate instead of a workflow people can reach for on a Tuesday afternoon. When I joined the BMW modernisation effort, the team was fast and disciplined, and very skeptical that an agent could touch their code without leaving cleanup behind." },
        { h: "Start with the boring wins" },
        { p: "I did not start with autonomous feature development. I started with the work nobody wanted: scaffolding tests, writing repetitive DTO mappers, drafting migration notes. Agents are reliable there, and one reliable small win buys you the trust to try a bigger one." },
        { h: "The spec is the real product" },
        { p: "The breakthrough was treating the specification, not the generated code, as the thing we reviewed. Once the team wrote specs precise enough for an agent to execute, those same specs made human review faster too. The AI was almost a side effect of writing things down clearly." },
        { quote: "The teams that win with agents are the ones that were already good at writing things down. The agent simply rewards the discipline." },
        { p: "Three months in, throughput was up by a clear margin, and just as important, nobody saw the agents as a threat. They were just part of how the team shipped." },
      ],
    },
    {
      title: "Spec Driven Development: Writing Specs Agents Can Actually Execute",
      slug: "spec-driven-development",
      date: "Apr 2026",
      read: "8 min",
      tag: "SDD",
      color: "indigo",
      summary: "A practical look at how I structure specs so an agent produces code you would actually merge, along with the failure modes that taught me the format.",
      body: [
        { p: "Spec Driven Development is not about prompting better. It is a discipline. You describe intent, constraints, and acceptance criteria precisely enough that a person and an agent can both work from the same document and agree on what done means." },
        { h: "The anatomy of a spec that works" },
        { p: "Every spec I write has four parts: the intent in one sentence, the explicit boundaries of what not to touch, the contract with its inputs, outputs and error cases, and the acceptance checks. The boundaries section is the one most people skip, and it is the one that stops an agent from helpfully refactoring half your module." },
        { h: "Failure modes I learned the hard way" },
        { p: "Vague acceptance criteria produce confidently wrong code. Implicit context, the kind where you assume the agent knows how you handle auth, produces plausible code that breaks your conventions. The fix for both is the same. Write the thing down, even when it feels obvious." },
        { p: "Done well, SDD makes the agent feel like a careful junior engineer who never gets tired. Done badly, it makes a very fast mess. The difference lives entirely in the spec." },
      ],
    },
    {
      title: "Migrating AngularJS to Angular 17 Without a Big Bang Rewrite",
      slug: "angularjs-to-angular-17-migration",
      date: "Feb 2026",
      read: "7 min",
      tag: "Modernisation",
      color: "rose",
      summary: "The step by step strategy I used to modernise a government system from AngularJS and Java 8 to Angular 17 and Java 17, shipping the whole time and never freezing the codebase.",
      body: [
        { p: "Big bang rewrites are tempting and almost always wrong. On the SEFAZ PA systems, a freeze and rewrite would have meant months of zero delivery and a frightening cutover. We modernised step by step instead, and the lights stayed on the entire time." },
        { h: "Strangle, do not replace" },
        { p: "We wrapped the legacy app in a shell that could route between old AngularJS views and new Angular 17 modules. New features shipped in the modern stack from day one, and old screens moved over one at a time, in the order of how often they broke." },
        { h: "The backend moved in lockstep" },
        { p: "Java 8 to Java 17 followed the same logic. Extract a clean module, put a contract around it, then migrate behind that contract. No single change was scary, because no single change was large." },
        { quote: "Step by step migration looks slower on a slide and turns out far faster in real life, because you never stop shipping." },
        { p: "The result was a clear drop in how often bugs appeared, and a team that understood the new stack because they had built it gradually rather than inheriting it overnight." },
      ],
    },
    {
      title: "How I Cut Rework to Almost Zero with Structured Code Reviews",
      slug: "structured-code-reviews-rework",
      date: "Dec 2025",
      read: "5 min",
      tag: "Team Quality",
      color: "sage",
      summary: "At Bradesco, rework was the silent tax on delivery. Here is the lightweight review and QA discipline that took it to almost nothing across a team of twenty to thirty people.",
      body: [
        { p: "Rework almost never shows up on a dashboard, and yet it is the most expensive thing a team does. At Bradesco, work was being redone not because people were careless, but because expectations were implicit and reviews were inconsistent." },
        { h: "Make the review checklist boring and shared" },
        { p: "We agreed on a short explicit checklist covering the contract, the tests, the edge cases, and accessibility, and every pull request met the same standard. The boring part is the point. Consistency removes negotiation from every review." },
        { h: "Catch it before the pull request" },
        { p: "Proactive QA and a quick technical alignment before coding caught the misunderstandings that would show up in review or, worse, in production. A ten minute conversation at the start often saved a day of rework." },
        { p: "None of this is glamorous. It is just the discipline of agreeing on what good looks like and staying true to it, and that is what turned rework from a constant drag into a rounding error." },
      ],
    },
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
    selectedWork: "Selected Work",
    sideProjectsTitle: "Side Projects",
    outcome: "Outcome",
    allocatedAt: "at",
    experienceTitle: "Experience",
    blogKicker: "Blog",
    blogTitle: "Writing.",
    blogSubtitle:
      "Field notes on AI agents, spec driven development, and how to modernise enterprise systems without breaking them.",
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
  projects: [
    {
      title: "BMW Connected Drive e Transformação com IA",
      company: "Act Digital, na BMW",
      status: "Ativo",
      color: "indigo",
      desc: "Eu apoio uma modernização de mainframe da BMW dentro de um time internacional. Construí micro frontends em Angular e microsserviços em Quarkus, e liderei a adoção de IA. Introduzi fluxos baseados em agentes e Desenvolvimento Orientado a Especificação, migrei a codificação manual para uma entrega assistida por IA e orientei o time para que as ferramentas realmente pegassem.",
      outcome: "A velocidade do time subiu de forma clara depois da adoção de agentes de IA e SDD",
      tags: ["Angular 17", "Quarkus", "Agentes de IA", "SDD", "Internacional"],
      slug: "bmw-connected-drive",
    },
    {
      title: "Banco Digital Bradesco",
      company: "CI&T, no Bradesco",
      status: "Concluído",
      color: "sage",
      desc: "Eu mantive micro frontends e microsserviços em Java 17 para o terceiro maior banco do Brasil. Conduzi uma grande queda no retrabalho com QA proativo, revisões de código consistentes e mais alinhamento técnico no time.",
      outcome: "O retrabalho caiu para perto de zero com QA proativo e revisões de código estruturadas",
      tags: ["Angular 17", "Java 17", "QA", "Revisões de Código"],
      slug: "bradesco-digital-banking",
    },
    {
      title: "Reformulação de Sistema Legado",
      company: "FADESP, na SEFAZ PA",
      status: "Concluído",
      color: "rose",
      desc: "Eu modernizei sistemas de governo em AngularJS e Java 8, entregando novas aplicações em Angular 17 e Java 17 que deixaram os fluxos internos bem mais rápidos e reduziram a quantidade de bugs.",
      outcome: "Uma queda clara de bugs com a modernização feita passo a passo",
      tags: ["AngularJS para 17", "Java 8 para 17", "Design de Sistema"],
      slug: "sefaz-legacy-overhaul",
    },
    {
      title: "Plataforma de Backend na AWS",
      company: "Encibra",
      status: "Concluído",
      color: "amber",
      desc: "Eu liderei a arquitetura de backend com Spring Boot, PostgreSQL e AWS. Orientei o time com programação em par e sessões de transferência de conhecimento, elevando a taxa de entrega com padrões de código consistentes.",
      tags: ["Java 17", "Spring Boot", "AWS", "Liderança de Time"],
      slug: "encibra-aws-platform",
    },
  ],
  sideProjects: [
    {
      title: "Motor de Geração de Blog com Multi-Agentes",
      slug: "blog-agent",
      status: "Entregue",
      color: "amber",
      desc: "Um sistema em Python usando LangChain e LangGraph que orquestra fluxos de múltiplos agentes para pesquisar, escrever e refinar artigos de blog e documentos de longa forma.",
      outcome: "Gerou com sucesso posts de blog completos com pesquisa em múltiplos estágios e refinamento",
      tags: ["LangChain", "LangGraph", "Python", "Arquitetura Multi-Agentes", "Comunicação de Agentes"],
      body: [
        { h: "O desafio" },
        { p: "Escrever um artigo de blog não é uma única tarefa. É pesquisa, rascunho, verificação de fatos, refinamento de voz e depois revisão de lacunas. Eu queria construir um sistema onde pudesse descrever o que queria escrito em algumas frases, e deixar agentes cuidarem de todo o pipeline." },
        { h: "A arquitetura" },
        { p: "Estruturei o sistema em torno de três agentes colaboradores: um pesquisador reúne informações e organiza o contexto, um escritor redige o conteúdo com esse contexto, e um revisor verifica completude e consistência de voz. Cada agente tem entradas e saídas claras, e eles se comunicam através de um grafo de estado compartilhado." },
        { h: "A virada" },
        { p: "O aprendizado de verdade veio do desenho da comunicação entre agentes. No começo, cada agente trabalhava independentemente, produzindo trabalhos que não se construíam um em cima do outro. A virada foi estabelecer pontos de handoff explícitos onde um agente pudesse ler a saída do agente anterior e responder diretamente a ela. Essa pequena mudança fez o fluxo parecer coerente em vez de desconexo." },
        { quote: "Boa comunicação entre agentes não é pedir a um agente que faça tudo. É tarefas pequenas e focadas que cada agente faz bem, e handoffs explícitos que deixam um agente entender e melhorar a saída do agente anterior." },
        { p: "O sistema continua em uso ativo para gerar conteúdo com base em pesquisa." },
      ],
    },
  ],
  posts: [
    {
      title: "Levando Agentes de IA para um Time Corporativo Cético",
      slug: "shipping-ai-agents-enterprise",
      date: "Mai 2026",
      read: "6 min",
      tag: "IA e Agentes",
      color: "amber",
      summary: "Como levei fluxos baseados em agentes e Desenvolvimento Orientado a Especificação para um time internacional da BMW que nunca tinha confiado código de produção a uma IA, e o que de fato fez diferença.",
      body: [
        { p: "A maioria das tentativas de adotar IA dentro de times corporativos falha pelo mesmo motivo. Elas chegam como uma ordem, e não como um fluxo que as pessoas usam numa terça à tarde. Quando entrei no esforço de modernização da BMW, o time era rápido e disciplinado, e bem cético de que um agente pudesse mexer no código sem deixar bagunça para limpar." },
        { h: "Comece pelas vitórias chatas" },
        { p: "Eu não comecei pelo desenvolvimento autônomo de funcionalidades. Comecei pelo trabalho que ninguém queria: montar testes, escrever mapeadores de DTO repetitivos, rascunhar notas de migração. Os agentes são confiáveis nisso, e uma pequena vitória confiável te dá a confiança para tentar algo maior." },
        { h: "A especificação é o produto de verdade" },
        { p: "A virada foi tratar a especificação, e não o código gerado, como aquilo que a gente revisava. Quando o time passou a escrever especificações precisas o bastante para um agente executar, essas mesmas especificações também tornaram a revisão humana mais rápida. A IA virou quase um efeito colateral de escrever as coisas com clareza." },
        { quote: "Os times que vencem com agentes são os que já eram bons em registrar as coisas por escrito. O agente só recompensa essa disciplina." },
        { p: "Três meses depois, a produtividade tinha subido de forma clara e, mais importante, ninguém enxergava os agentes como uma ameaça. Eles eram só parte de como o time entregava." },
      ],
    },
    {
      title: "Desenvolvimento Orientado a Especificação: Especificações que o Agente Consegue Executar",
      slug: "spec-driven-development",
      date: "Abr 2026",
      read: "8 min",
      tag: "SDD",
      color: "indigo",
      summary: "Um olhar prático sobre como eu estruturo especificações para que um agente produza código que você realmente daria merge, junto com os erros que me ensinaram esse formato.",
      body: [
        { p: "Desenvolvimento Orientado a Especificação não é sobre escrever prompts melhores. É uma disciplina. Você descreve intenção, restrições e critérios de aceite com precisão suficiente para que uma pessoa e um agente trabalhem a partir do mesmo documento e concordem sobre o que significa pronto." },
        { h: "A anatomia de uma boa especificação" },
        { p: "Toda especificação que eu escrevo tem quatro partes: a intenção em uma frase, os limites explícitos do que não pode ser tocado, o contrato com suas entradas, saídas e casos de erro, e os critérios de aceite. A parte dos limites é a que a maioria pula, e é justamente a que impede o agente de, gentilmente, refatorar metade do seu módulo." },
        { h: "Erros que aprendi na prática" },
        { p: "Critérios de aceite vagos produzem código errado com toda a confiança. O contexto implícito, aquele em que você supõe que o agente sabe como você cuida da autenticação, produz código plausível que quebra as suas convenções. A solução para os dois é a mesma. Escreva, mesmo quando parece óbvio." },
        { p: "Bem feito, o SDD faz o agente parecer um desenvolvedor júnior cuidadoso que nunca cansa. Mal feito, ele cria uma bagunça muito rápida. A diferença está inteira na especificação." },
      ],
    },
    {
      title: "Migrando de AngularJS para Angular 17 sem Reescrita do Zero",
      slug: "angularjs-to-angular-17-migration",
      date: "Fev 2026",
      read: "7 min",
      tag: "Modernização",
      color: "rose",
      summary: "A estratégia passo a passo que usei para modernizar um sistema de governo de AngularJS e Java 8 para Angular 17 e Java 17, entregando o tempo todo e sem nunca congelar o código.",
      body: [
        { p: "Reescritas do zero são tentadoras e quase sempre erradas. Nos sistemas da SEFAZ PA, congelar e reescrever significaria meses de entrega zero e uma virada de chave assustadora. Em vez disso, modernizamos passo a passo, e a luz ficou acesa o tempo todo." },
        { h: "Estrangule, não substitua" },
        { p: "Envolvemos a aplicação legada em uma casca capaz de rotear entre as telas antigas em AngularJS e os novos módulos em Angular 17. As funcionalidades novas já nasciam no stack moderno, e as telas antigas migravam uma de cada vez, na ordem de quanto cada uma quebrava." },
        { h: "O backend andou junto" },
        { p: "De Java 8 para Java 17 a lógica foi a mesma. Extrair um módulo limpo, colocar um contrato em volta dele e migrar por trás desse contrato. Nenhuma mudança era assustadora, porque nenhuma mudança era grande." },
        { quote: "A migração passo a passo parece mais lenta no slide e se mostra bem mais rápida na vida real, porque você nunca para de entregar." },
        { p: "O resultado foi uma queda clara na frequência de bugs, e um time que entendia o novo stack porque o construiu aos poucos, em vez de herdá-lo de uma hora para outra." },
      ],
    },
    {
      title: "Como Reduzi o Retrabalho a Quase Zero com Revisões de Código Estruturadas",
      slug: "structured-code-reviews-rework",
      date: "Dez 2025",
      read: "5 min",
      tag: "Qualidade do Time",
      color: "sage",
      summary: "No Bradesco, o retrabalho era o imposto silencioso da entrega. Aqui está a disciplina leve de revisão e QA que o levou a quase nada em um grupo de vinte a trinta pessoas.",
      body: [
        { p: "O retrabalho quase nunca aparece em um painel, e ainda assim é a coisa mais cara que um time faz. No Bradesco, o trabalho era refeito não por falta de cuidado, mas porque as expectativas eram implícitas e as revisões eram inconsistentes." },
        { h: "Deixe o checklist de revisão chato e compartilhado" },
        { p: "Combinamos um checklist curto e explícito cobrindo o contrato, os testes, os casos de borda e a acessibilidade, e todo pull request atendia ao mesmo padrão. O chato é justamente o ponto. A consistência tira a negociação de cada revisão." },
        { h: "Pegue antes do pull request" },
        { p: "QA proativo e um alinhamento técnico rápido antes de começar a codar pegavam os mal-entendidos que apareceriam na revisão ou, pior, em produção. Uma conversa de dez minutos no começo costumava economizar um dia de retrabalho." },
        { p: "Nada disso é glamuroso. É só a disciplina de combinar o que é bom e se manter fiel a isso, e foi o que transformou o retrabalho de um peso constante em um detalhe sem importância." },
      ],
    },
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
    selectedWork: "Trabalhos Selecionados",
    sideProjectsTitle: "Projetos Pessoais",
    outcome: "Resultado",
    allocatedAt: "na",
    experienceTitle: "Experiência",
    blogKicker: "Blog",
    blogTitle: "Escritos.",
    blogSubtitle:
      "Anotações de campo sobre agentes de IA, desenvolvimento orientado a especificação e como modernizar sistemas corporativos sem quebrá-los.",
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
  projects: [
    {
      title: "BMW Connected Drive とAIトランスフォーメーション",
      company: "Act Digital（BMW常駐）",
      status: "進行中",
      color: "indigo",
      desc: "国際的なチームの中で、BMWのメインフレームのモダナイゼーションを支えています。AngularのマイクロフロントエンドとQuarkusのマイクロサービスを構築し、AI導入の取り組みをリードしました。エージェントを使ったワークフローと仕様駆動開発を導入し、手作業のコーディングをAI支援の開発へ移し、ツールが本当に定着するようチームに伴走しました。",
      outcome: "AIエージェントとSDDの導入後、チームの開発速度がはっきりと向上",
      tags: ["Angular 17", "Quarkus", "AIエージェント", "SDD", "国際"],
      slug: "bmw-connected-drive",
    },
    {
      title: "Bradesco デジタルバンキング",
      company: "CI&T（Bradesco常駐）",
      status: "完了",
      color: "sage",
      desc: "ブラジル第3位の銀行向けに、マイクロフロントエンドとJava 17のマイクロサービスを保守しました。先回りのQA、一貫したコードレビュー、チーム内の技術的な目線合わせによって、手戻りを大きく減らしました。",
      outcome: "先回りのQAと体系立てたコードレビューで手戻りがほぼゼロに",
      tags: ["Angular 17", "Java 17", "QA", "コードレビュー"],
      slug: "bradesco-digital-banking",
    },
    {
      title: "レガシーシステムの刷新",
      company: "FADESP（SEFAZ PA常駐）",
      status: "完了",
      color: "rose",
      desc: "AngularJSとJava 8の行政システムをモダナイズし、Angular 17とJava 17の新しいアプリケーションを提供しました。社内の業務フローは目に見えて速くなり、バグの件数も減りました。",
      outcome: "段階的なモダナイゼーションでバグがはっきりと減少",
      tags: ["AngularJS から 17", "Java 8 から 17", "システム設計"],
      slug: "sefaz-legacy-overhaul",
    },
    {
      title: "AWS バックエンド基盤",
      company: "Encibra",
      status: "完了",
      color: "amber",
      desc: "Spring Boot、PostgreSQL、AWSでバックエンドのアーキテクチャをリードしました。ペアプログラミングとナレッジ移転のセッションでチームに伴走し、一貫したコード規約で提供のペースを引き上げました。",
      tags: ["Java 17", "Spring Boot", "AWS", "チームリード"],
      slug: "encibra-aws-platform",
    },
  ],
  sideProjects: [
    {
      title: "マルチエージェント・ブログ生成エンジン",
      slug: "blog-agent",
      status: "リリース済み",
      color: "amber",
      desc: "LangChainとLangGraphを使ったPythonシステムで、複数のエージェントのワークフローを統制し、ブログ記事や長文の文書を調査、執筆、洗練します。",
      outcome: "複数段階の調査と洗練を含む完全なブログ記事の生成に成功",
      tags: ["LangChain", "LangGraph", "Python", "マルチエージェント・アーキテクチャ", "エージェント通信"],
      body: [
        { h: "向き合った問題" },
        { p: "ブログ記事を書くことは、単一のタスクではありません。調査、下書き、事実確認、文体の調整、そして完全性の確認です。私は、何を書きたいかを数文で説明したら、あとはエージェントにパイプライン全体を任せられるシステムを作りたいと思いました。" },
        { h: "アーキテクチャ" },
        { p: "三つの協働するエージェント周りにシステムを構成しました。リサーチャーが情報を集め文脈を整理し、ライターがその文脈でコンテンツを草稿し、レビュアーが完全性と文体の一貫性をチェックします。各エージェントは明確な入出力を持ち、共有された状態グラフを通じて通信します。" },
        { h: "ブレークスルー" },
        { p: "本物の学びは、エージェント間の通信の設計から来ました。最初は各エージェントが独立して動き、互いに構築されない作業を生成していました。転機は明示的なハンドオフポイントを設けることでした。ある段階のエージェントが前の段階の出力を読み、それに直接応答できるようにしたのです。その小さな変更で、ワークフローがばらばらではなく一貫したものに感じられるようになりました。" },
        { quote: "エージェント間の優れた通信とは、一つのエージェントにすべてをさせることではありません。それぞれのエージェントが得意な小さく焦点の定まったタスクと、前のエージェントの出力を理解して改善できる明示的なハンドオフです。" },
        { p: "このシステムは現在も調査に基づいたコンテンツを生成するために積極的に使用されています。" },
      ],
    },
  ],
  posts: [
    {
      title: "懐疑的なエンタープライズチームにAIエージェントを届ける",
      slug: "shipping-ai-agents-enterprise",
      date: "2026年5月",
      read: "6分",
      tag: "AIとエージェント",
      color: "amber",
      summary: "本番コードをAIに任せたことのない国際的なBMWのチームに、エージェントのワークフローと仕様駆動開発をどう持ち込んだか。そして実際に効いたのは何だったか。",
      body: [
        { p: "エンタープライズのチームでAI導入が失敗するとき、その理由はだいたい同じです。ワークフローとしてではなく、命令として降ってくるからです。火曜の午後に自然と手が伸びるものになっていないのです。BMWのモダナイゼーションに加わったとき、チームは速くて規律正しく、そしてエージェントが後始末を残さずにコードへ触れられるとは、まるで信じていませんでした。" },
        { h: "まずは地味な勝ちから" },
        { p: "私は自律的な機能開発からは始めませんでした。誰もやりたがらない仕事、つまりテストの土台づくり、繰り返しのDTOマッパー、移行メモの下書きから始めました。エージェントはそこでは頼りになります。小さくても確かな勝ちが、次のもう少し大きな挑戦への信頼を買ってくれます。" },
        { h: "本当の成果物は仕様書" },
        { p: "転機は、生成されたコードではなく仕様書こそをレビュー対象として扱ったことでした。エージェントが実行できるほど精密な仕様をチームが書くようになると、その同じ仕様が人間のレビューも速くしてくれました。AIは、物事を明確に書き出すことのほとんど副産物でした。" },
        { quote: "エージェントで成果を出すチームは、もともと物事を書き残すのが得意なチームです。エージェントはその規律に報いるだけなのです。" },
        { p: "3か月後には処理量がはっきりと増え、さらに大事なことに、誰もエージェントを脅威とは見ていませんでした。それは、チームがものを届けるやり方の一部になっていました。" },
      ],
    },
    {
      title: "仕様駆動開発：エージェントが本当に実行できる仕様の書き方",
      slug: "spec-driven-development",
      date: "2026年4月",
      read: "8分",
      tag: "SDD",
      color: "indigo",
      summary: "実際にマージしたくなるコードをエージェントが生み出すように、私が仕様をどう組み立てているか。そして、その形に行き着くまでに教えてくれた失敗の数々を実践的に紹介します。",
      body: [
        { p: "仕様駆動開発は、プロンプトを上手くすることではありません。これは規律です。意図、制約、受け入れ基準を十分に精密に書き、人とエージェントが同じ文書から作業して、完了の意味について合意できるようにします。" },
        { h: "機能する仕様の解剖図" },
        { p: "私が書く仕様にはいつも四つの要素があります。一文での意図、触れてはいけない範囲の明示、入力と出力とエラーケースを含む契約、そして受け入れの確認項目です。範囲の明示は多くの人が飛ばす部分であり、まさにエージェントが親切心であなたのモジュールを半分書き換えてしまうのを防ぐ部分です。" },
        { h: "痛い目で覚えた失敗" },
        { p: "曖昧な受け入れ基準は、自信たっぷりに間違ったコードを生みます。暗黙の文脈、つまり認証の扱い方をエージェントが知っているはずだと思い込むようなものは、もっともらしく見えて規約を壊すコードを生みます。どちらの直し方も同じです。当たり前に思えても、書き出すことです。" },
        { p: "うまくやれば、SDDはエージェントを、決して疲れない丁寧なジュニアエンジニアのように感じさせます。下手にやれば、とても速い散らかりを生みます。その違いは、丸ごと仕様の中にあります。" },
      ],
    },
    {
      title: "一括書き換えなしでAngularJSをAngular 17へ移行する",
      slug: "angularjs-to-angular-17-migration",
      date: "2026年2月",
      read: "7分",
      tag: "モダナイゼーション",
      color: "rose",
      summary: "行政システムをAngularJSとJava 8から、Angular 17とJava 17へ段階的にモダナイズした方法。その間ずっとリリースを続け、コードを一度も凍結しませんでした。",
      body: [
        { p: "一括書き換えは魅力的に見えて、ほとんどの場合は誤りです。SEFAZ PAのシステムで凍結して書き直していたら、数か月のあいだリリースがゼロになり、恐ろしい切り替えが待っていたはずです。代わりに段階的にモダナイズし、その間ずっと明かりは灯ったままでした。" },
        { h: "置き換えではなく、締め上げる" },
        { p: "私たちはレガシーアプリを、古いAngularJSの画面と新しいAngular 17のモジュールの間でルーティングできる外殻で包みました。新しい機能は初日からモダンなスタックで動き、古い画面は壊れる頻度の順に、一つずつ移していきました。" },
        { h: "バックエンドも歩調を合わせて動いた" },
        { p: "Java 8からJava 17への移行も同じ理屈でした。きれいなモジュールを切り出し、その周りに契約を置き、契約の裏側で移行する。一つひとつの変更が大きくなかったので、一つひとつの変更が怖くありませんでした。" },
        { quote: "段階的な移行はスライドの上では遅く見えて、現実でははるかに速い。なぜなら、リリースを止めないからです。" },
        { p: "結果として、バグの出る頻度ははっきりと下がり、チームは新しいスタックを理解していました。ある日いきなり引き継いだのではなく、少しずつ自分たちで作ったからです。" },
      ],
    },
    {
      title: "体系立てたコードレビューで手戻りをほぼゼロにした方法",
      slug: "structured-code-reviews-rework",
      date: "2025年12月",
      read: "5分",
      tag: "チーム品質",
      color: "sage",
      summary: "Bradescoでは、手戻りは提供にかかる見えない税金でした。20名から30名のグループで、それをほぼゼロまで下げた軽量なレビューとQAの規律を紹介します。",
      body: [
        { p: "手戻りはダッシュボードにはほとんど現れませんが、チームがやることの中で最も高くつきます。Bradescoでやり直しが起きていたのは、人が不注意だったからではなく、期待が暗黙のままで、レビューが一貫していなかったからです。" },
        { h: "レビューのチェックリストは退屈に、そして共有する" },
        { p: "契約、テスト、エッジケース、アクセシビリティをカバーする短く明確なチェックリストを合意し、すべてのプルリクエストが同じ基準を満たすようにしました。退屈であることこそが狙いです。一貫性が、毎回のレビューから駆け引きを取り除いてくれます。" },
        { h: "プルリクエストの前に捕まえる" },
        { p: "先回りのQAと、コーディングを始める前の手早い技術的な目線合わせが、そうでなければレビューで、もっと悪ければ本番で表面化していた誤解を捕まえました。最初の10分の会話が、たびたび一日分の手戻りを節約しました。" },
        { p: "どれも華やかではありません。良い状態とは何かを合意し、それを守り続けるという規律にすぎません。それが手戻りを、絶え間ない足かせから、無視できる端数へと変えました。" },
      ],
    },
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
    selectedWork: "主な実績",
    sideProjectsTitle: "サイドプロジェクト",
    outcome: "成果",
    allocatedAt: "常駐",
    experienceTitle: "経歴",
    blogKicker: "ブログ",
    blogTitle: "記事。",
    blogSubtitle:
      "AIエージェント、仕様駆動開発、そしてエンタープライズシステムを壊さずにモダナイズすることについての現場メモ。",
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
