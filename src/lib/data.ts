// ============================================================
// Portfolio Data — Single source of truth for all content
// ============================================================

export const siteConfig = {
  name: "Sudesh P",
  title: "Software Engineer",
  description:
    "Software Engineer building production-ready applications with Small Language Models. Creator of OmniSLM. Focused on RAG pipelines, local-first LLM platforms, and privacy-first AI infrastructure.",
  url: "https://sudhii.in",
  email: "mrsudesh17@gmail.com",
  github: "https://github.com/sudeshsudhii",
  linkedin: "https://linkedin.com/in/sudesh-p-8a656b358/",
  location: "Chennai, India",
  education: {
    degree: "M.Tech Computer Science",
    institution: "SRMIST, Chennai",
    undergrad: "B.Tech Information Technology",
  },
  avatar: "https://avatars.githubusercontent.com/u/144050211?v=4",
};

export type ProjectCategory = "ai" | "fullstack" | "blockchain" | "security";
export type ProjectTier = "hero" | "strong" | "supporting";

export interface Project {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  problem: string;
  solution: string;
  impact: string;
  category: ProjectCategory;
  tier: ProjectTier;
  tech: string[];
  github?: string;
  demo?: string;
  features: string[];
  challenges: string[];
  image?: string;
  caseStudy?: {
    overview: string;
    architecture: string;
    decisions: string;
    tradeoffs: string;
    challenges: string;
    results: string;
    futureRoadmap: string;
  };
}

export const projects: Project[] = [
  // ── Hero Projects ──────────────────────────────────────────
  {
    slug: "omnislm",
    title: "OmniSLM",
    description: "Universal AI framework for building intelligent applications with Small Language Models.",
    longDescription: "OmniSLM is an extensible Python framework that provides a unified API for building AI applications powered by Small Language Models. It includes RAG pipelines, memory management, agent orchestration, and extensible workflow patterns — all designed to run locally without cloud dependencies.",
    problem: "Developers building AI applications with small, local models face fragmented tooling. Every project requires stitching together RAG, memory, inference, and agent patterns from scratch.",
    solution: "A framework-level abstraction that unifies these concerns into a single, extensible architecture with plugin support, built-in vector storage, and conversation memory.",
    impact: "Reduces AI application development time from weeks to days. Enables privacy-first AI deployments without cloud vendor lock-in.",
    category: "ai",
    tier: "hero",
    tech: ["Python", "RAG", "FAISS", "Ollama", "Qdrant", "FastAPI"],
    github: "https://github.com/sudeshsudhii/OmniSLM",
    features: [
      "Plugin-based architecture for extensible AI workflows",
      "Built-in RAG pipeline with hybrid search",
      "Conversation memory with context management",
      "Multi-model inference through Ollama",
      "Vector store abstraction (FAISS, Qdrant)",
      "REST API with FastAPI",
    ],
    challenges: [
      "Designing a plugin system that doesn't sacrifice performance",
      "Balancing abstraction level — too high loses flexibility, too low adds complexity",
      "Memory management for long conversation contexts with small models",
    ],
    caseStudy: {
      overview: "OmniSLM is an open-source framework designed to streamline the creation of production-ready AI applications powered by small, locally-hosted language models.",
      architecture: "The architecture consists of a pluggable Runtime Layer, a Vector-backed Memory Engine, a built-in RAG Framework using FAISS, and an Agent SDK for autonomous tool execution.",
      decisions: "Chose Python for its rich AI ecosystem. Designed a plugin system to allow developers to swap out underlying vector databases or inference engines without rewriting application logic.",
      tradeoffs: "Abstracting the underlying vector databases meant sacrificing some database-specific optimization features for the sake of a unified API.",
      challenges: "Managing memory contexts effectively when dealing with the strict context window limitations of small models.",
      results: "Created a functional, extensible framework that significantly reduces boilerplate code for local AI applications.",
      futureRoadmap: "Add native support for vLLM, expand the agent tool ecosystem, and implement a visual workflow builder."
    }
  },
  {
    slug: "seedtracking",
    title: "SeedTracking",
    description:
      "Blockchain-based seed supply chain platform with ML fraud detection.",
    longDescription:
      "A full-stack platform that brings transparency to agricultural seed distribution using Ethereum smart contracts, IPFS document storage, and machine learning fraud detection. Every seed batch is tracked from manufacturer to farmer with immutable records.",
    problem:
      "Fraud and opacity in agricultural seed supply chains costs farmers billions annually. Counterfeit seeds reduce crop yields and there's no reliable way to verify authenticity.",
    solution:
      "An end-to-end blockchain platform where every transaction is recorded on Ethereum, documents are stored on IPFS, and an ML model scores fraud risk in real-time.",
    impact:
      "Enables end-to-end traceability of seed batches. ML model flags anomalous distribution patterns that indicate potential fraud.",
    category: "blockchain",
    tier: "hero",
    tech: [
      "Spring Boot",
      "React",
      "Solidity",
      "Ethereum",
      "IPFS",
      "Machine Learning",
    ],
    github: "https://github.com/sudeshsudhii/SeedTracking",
    features: [
      "Smart contract-based seed batch registration",
      "IPFS document storage for certificates and lab reports",
      "ML fraud detection scoring pipeline",
      "QR code verification for farmers",
      "Role-based dashboards for manufacturers, distributors, and regulators",
      "Real-time supply chain visualization",
    ],
    challenges: [
      "Gas optimization for frequent supply chain transactions",
      "Integrating ML inference with blockchain events",
      "Designing for low-connectivity environments (rural India)",
    ],
    caseStudy: {
      overview: "SeedTracking is a blockchain-powered supply chain platform integrating Ethereum, IPFS, and machine learning fraud detection.",
      architecture: "Smart contracts on Ethereum handle state changes, while IPFS is used for decentralized document storage. An ML service scores fraud risk.",
      decisions: "Chosen Ethereum for its robust smart contract ecosystem. Used IPFS to keep large documents off-chain and reduce gas costs.",
      tradeoffs: "High transaction costs on Ethereum Mainnet mean this is better suited for an L2 rollup or consortium chain in production.",
      challenges: "Integrating deterministic blockchain state with probabilistic ML models without compromising decentralization.",
      results: "Demonstrated a viable tracking mechanism that drastically reduces the possibility of counterfeit seeds entering the supply chain.",
      futureRoadmap: "Migrate smart contracts to Polygon for lower fees and integrate zero-knowledge proofs for supplier privacy."
    }
  },
  {
    slug: "rag-system",
    title: "RAG System for Local LLM",
    description:
      "Privacy-preserving Retrieval-Augmented Generation pipeline using FAISS and Ollama.",
    longDescription:
      "A complete RAG pipeline that runs entirely on local hardware. Documents are indexed using FAISS with hybrid search (dense + sparse retrieval), and inference is handled by Ollama-based local models. No data leaves the machine.",
    problem:
      "Organizations with sensitive documents can't use cloud-based AI services due to data privacy and compliance requirements.",
    solution:
      "A fully local RAG system with document ingestion, chunking, embedding, hybrid retrieval, and LLM inference — all running on-premise without internet access.",
    impact:
      "Enables AI-powered document Q&A for privacy-sensitive organizations. Processes documents locally with zero data leakage.",
    category: "ai",
    tier: "hero",
    tech: ["Python", "FAISS", "Ollama", "Sentence Transformers", "FastAPI"],
    github: "https://github.com/sudeshsudhii/RAG-SYSTEM-FOR-LOCAL-LLM",
    features: [
      "Multi-format document ingestion (PDF, DOCX, TXT)",
      "Intelligent document chunking with overlap",
      "FAISS vector indexing with hybrid search",
      "Local embedding generation with Sentence Transformers",
      "Ollama-based inference with context injection",
      "Conversation history and follow-up questions",
    ],
    challenges: [
      "Optimizing retrieval quality with small embedding models",
      "Balancing chunk size for context window limitations",
      "Building hybrid search that combines dense and sparse signals",
    ],
    caseStudy: {
      overview: "A privacy-first Retrieval-Augmented Generation system using FAISS, hybrid retrieval, and local inference models.",
      architecture: "A pipeline that ingests documents, chunks them, embeds them locally using SentenceTransformers, and stores them in FAISS. Ollama handles LLM inference.",
      decisions: "Opted for fully local embedding and inference to guarantee zero data leakage for enterprise clients.",
      tradeoffs: "Local inference requires significant hardware resources (GPUs) on-premise compared to calling a cloud API.",
      challenges: "Tuning the hybrid search weights (dense vs. keyword) to yield the most relevant context for the LLM.",
      results: "Achieved high-accuracy document retrieval and Q&A without any data ever leaving the local network.",
      futureRoadmap: "Implement advanced RAG techniques like re-ranking models and query expansion."
    }
  },

  // ── Strong Projects ────────────────────────────────────────
  {
    slug: "local-llm",
    title: "Local LLM Application",
    description:
      "Privacy-first local LLM platform built with Java 21, Spring AI, and MongoDB.",
    longDescription:
      "A production-grade local LLM platform built with Java 21 and Spring AI. Features reactive document processing, conversational AI with session management, and MongoDB-backed persistence. Uses Ollama for local inference.",
    problem:
      "Java enterprise teams need LLM capabilities but existing tools are Python-only, creating a skills gap.",
    solution:
      "A Spring Boot application that brings LLM capabilities to the Java ecosystem using Spring AI, with reactive programming for high-throughput document processing.",
    impact:
      "Bridges the Java-AI gap. Enterprise teams can integrate LLM features using familiar Spring patterns.",
    category: "ai",
    tier: "strong",
    tech: [
      "Java 21",
      "Spring Boot",
      "Spring AI",
      "Ollama",
      "MongoDB",
      "WebFlux",
    ],
    github: "https://github.com/sudeshsudhii/Local-LLM-Application",
    features: [
      "Spring AI integration with Ollama models",
      "Reactive document processing with WebFlux",
      "Session-based conversation management",
      "MongoDB persistence for chat history",
      "REST API with comprehensive endpoints",
      "Model configuration and switching",
    ],
    challenges: [
      "Integrating non-blocking I/O with synchronous LLM inference",
      "Managing conversation context across reactive streams",
    ],
    caseStudy: {
      overview: "A production-grade local LLM platform built with Java 21, Spring AI, WebFlux, and MongoDB.",
      architecture: "A Spring Boot application using WebFlux for reactive endpoints, MongoDB for session storage, and Spring AI for model orchestration.",
      decisions: "Adopted Spring AI to bridge the gap between Java enterprise ecosystems and modern LLM capabilities.",
      tradeoffs: "Spring AI is still evolving, requiring occasional custom implementations for advanced agentic workflows compared to Python's LangChain.",
      challenges: "Handling streaming responses reactively via WebFlux without blocking the event loop.",
      results: "Delivered an enterprise-ready Java application that allows teams to seamlessly integrate local LLMs.",
      futureRoadmap: "Add comprehensive RBAC (Role-Based Access Control) and multi-tenant capabilities."
    }
  },
  {
    slug: "paathai",
    title: "PaathAI",
    description:
      "AI-driven lecture intelligence platform for transcription, summarization, and progress tracking.",
    longDescription:
      "PaathAI transcribes lecture sessions, extracts syllabus-aware topics, generates summaries, and tracks academic progress using AI. Built for educational institutions to make lectures searchable and analyzable.",
    problem:
      "Students miss key points in lectures, and there's no structured way to search, review, or track coverage of syllabus topics across sessions.",
    solution:
      "An AI platform that processes lecture audio, maps content to syllabus topics, and provides searchable summaries with progress analytics.",
    impact:
      "Transforms passive lecture recordings into structured, searchable knowledge bases with syllabus alignment.",
    category: "ai",
    tier: "strong",
    tech: ["Java", "Spring Boot", "AI/NLP", "Transcription", "PostgreSQL"],
    github: "https://github.com/sudeshsudhii/PaathAI",
    demo: "https://paathai.sudhii.in/",
    features: [
      "Automated lecture transcription",
      "Syllabus-aware topic extraction",
      "AI-generated session summaries",
      "Academic progress tracking dashboard",
      "Topic search across lecture history",
      "Faculty analytics and coverage reports",
    ],
    challenges: [
      "Accurate topic extraction from noisy lecture transcripts",
      "Mapping unstructured content to structured syllabus taxonomy",
    ],
  },
  {
    slug: "college-management",
    title: "College Management System",
    description:
      "Full-stack MERN application for managing students, teachers, attendance, and academic records.",
    longDescription:
      "A comprehensive college management platform with role-based portals for administrators, teachers, and students. Handles attendance tracking, exam management, fee records, notice boards, and academic reporting.",
    problem:
      "Educational institutions rely on fragmented tools and manual processes for student management, attendance, and academic records.",
    solution:
      "A unified MERN-stack platform with three role-based portals that digitize the entire academic workflow from enrollment to graduation.",
    impact:
      "Deployed on Vercel. Covers the full academic lifecycle with real-time attendance and grade tracking.",
    category: "fullstack",
    tier: "strong",
    tech: ["React", "Node.js", "Express", "MongoDB", "Material UI"],
    github:
      "https://github.com/sudeshsudhii/College-Management-System-project",
    demo: "https://cms.sudhii.in/",
    features: [
      "Admin, Teacher, and Student portals",
      "Real-time attendance tracking",
      "Exam and grade management",
      "Fee tracking and payment records",
      "Notice board with role-based visibility",
      "Performance analytics dashboard",
    ],
    challenges: [
      "Designing role-based access control across three user types",
      "Real-time data synchronization for attendance",
    ],
  },
  {
    slug: "securesite-auditor",
    title: "SecureSite Auditor AI",
    description:
      "AI-powered web privacy and security auditing platform.",
    longDescription:
      "SecureSite Auditor scans websites to detect trackers, cookie risks, compliance gaps, and privacy policy issues. Delivers clear risk scores and actionable recommendations using AI analysis.",
    problem:
      "Website owners lack visibility into their privacy and security posture. Manual audits are expensive and infrequent.",
    solution:
      "An automated scanning platform that uses AI to analyze websites for trackers, cookies, compliance issues, and privacy risks, generating actionable audit reports.",
    impact:
      "Deployed on Vercel. Provides instant security audits that would otherwise require expensive consultants.",
    category: "security",
    tier: "strong",
    tech: ["TypeScript", "Next.js", "AI/NLP", "Web Scraping"],
    github: "https://github.com/sudeshsudhii/SecureSite-Auditor-AI",
    demo: "https://siteauditor.sudhii.in/",
    features: [
      "Automated website scanning and analysis",
      "Tracker and cookie detection",
      "Privacy policy analysis with AI",
      "Compliance gap identification (GDPR, CCPA)",
      "Risk scoring and prioritized recommendations",
      "Detailed audit reports",
    ],
    challenges: [
      "Accurate classification of tracker types and risk levels",
      "Keeping up with evolving privacy regulations",
    ],
  },

  // ── Supporting Projects ────────────────────────────────────
  {
    slug: "workflow-automation",
    title: "Workflow Automation App",
    description:
      "Platform for managing business processes, task orchestration, and AI-assisted workflows.",
    longDescription:
      "A workflow automation platform that helps teams manage business processes with visual workflow builders, task orchestration, and AI-assisted decision making.",
    problem: "Small teams struggle with manual, repetitive business processes.",
    solution:
      "A visual workflow automation platform with drag-and-drop process builders and AI-assisted task routing.",
    impact: "Deployed on Vercel. Enables no-code workflow automation for teams.",
    category: "fullstack",
    tier: "supporting",
    tech: ["JavaScript", "React", "Node.js", "MongoDB"],
    github: "https://github.com/sudeshsudhii/Work-Flow-Automation-App",
    demo: "https://automate.sudhii.in/",
    features: [
      "Visual workflow builder",
      "Task orchestration engine",
      "AI-assisted decision routing",
      "Team collaboration features",
    ],
    challenges: [
      "Designing an intuitive workflow builder interface",
    ],
  },
  {
    slug: "public-distribution",
    title: "Public Distribution System",
    description:
      "AI-enabled platform for monitoring public distribution using Blockchain and fraud detection.",
    longDescription:
      "EventChain monitors the Public Distribution System using Blockchain, IPFS, and real-time fraud detection. Records all ration events immutably and enables public verification via QR codes.",
    problem:
      "The public distribution system suffers from corruption and diversion of subsidized goods.",
    solution:
      "A blockchain-based monitoring platform with AI fraud detection and public verification.",
    impact: "Immutable record-keeping with real-time anomaly detection.",
    category: "blockchain",
    tier: "supporting",
    tech: ["JavaScript", "Blockchain", "IPFS", "Machine Learning", "React"],
    github: "https://github.com/sudeshsudhii/Public-Distribution-System",
    features: [
      "Blockchain-based event recording",
      "IPFS document storage",
      "Real-time fraud scoring",
      "QR code verification",
      "Public transparency dashboard",
    ],
    challenges: ["Designing for scale in a national distribution system"],
  },
  {
    slug: "sbce-website",
    title: "SBCEC Official Website",
    description:
      "Official digital portal and website for SBCE, featuring modern UI and responsive design.",
    longDescription:
      "Designed and developed the official web presence for SBCE. The portal focuses on providing a mobile-friendly, accessible, and fast experience for students, faculty, and prospective applicants.",
    problem:
      "The institution needed a modernized digital footprint to improve communication, accessibility, and loading speeds.",
    solution:
      "A fully responsive web application with optimized assets, clean navigation, and modern frontend architecture.",
    impact: "Currently live and serving as the primary digital gateway for the institution.",
    category: "fullstack",
    tier: "supporting",
    tech: ["Web Development", "Frontend", "Responsive Design", "UI/UX"],
    demo: "https://www.sbcecarni.edu.in/",
    features: [
      "Mobile-first responsive architecture",
      "Optimized asset delivery for fast load times",
      "Accessible navigation for faculty and students",
      "Modern and clean user interface",
    ],
    challenges: [
      "Ensuring cross-device compatibility and strict accessibility standards",
    ],
  },
];

export const categoryLabels: Record<ProjectCategory, string> = {
  ai: "AI & ML",
  fullstack: "Full-Stack",
  blockchain: "Blockchain",
  security: "Security",
};

export interface Certification {
  slug: string;
  title: string;
  issuer: string;
  date?: string;
  domain: string;
  file?: string;
  description?: string;
  skills?: string[];
  credentialId?: string;
}

export const certifications: Certification[] = [
  {
    slug: "geeksforgeeks-mern",
    title: "MERN Full Stack Web Development with AI - Classroom",
    issuer: "GeeksforGeeks",
    domain: "Full-Stack Web",
    file: "/certificates/geeksforgeeks-mern.pdf",
    description: "An intensive 6-month in-person offline program covering the complete MERN stack (MongoDB, Express.js, React, Node.js) along with practical AI integrations for modern web applications.",
    skills: ["MongoDB", "Express.js", "React.js", "Node.js", "AI Integration", "Full-Stack Architecture"],
  },
  {
    slug: "oracle-oci-foundations",
    title: "Oracle Cloud Infrastructure 2023 Certified Foundations Associate",
    issuer: "Oracle",
    domain: "Cloud Infrastructure",
    date: "April 02, 2024",
    credentialId: "100599412OCIF2023CA",
    file: "/certificates/nptel.pdf",
    description: "Validates foundational knowledge of public cloud computing concepts and Oracle Cloud Infrastructure (OCI) core services including compute, storage, networking, and identity management.",
    skills: ["Oracle Cloud Infrastructure", "Cloud Computing", "Identity & Access Management", "Cloud Networking"],
  },
  {
    slug: "nse-blockchain",
    title: "Block Chain Development",
    issuer: "Naan Mudhalvan & NSE Academy",
    domain: "Blockchain",
    date: "May 28, 2025",
    file: "/certificates/nse-academy-blockchain.pdf",
    description: "Comprehensive certification covering distributed ledger technology, consensus mechanisms, smart contract development, and the financial applications of blockchain systems.",
    skills: ["Blockchain", "Distributed Ledgers", "Smart Contracts", "Cryptography"],
  },
  {
    slug: "ibm-skillsbuild",
    title: "Naalayathiran - IBM Skillsbuild",
    issuer: "Naan Mudhalvan & IBM",
    domain: "Cloud / AI",
    date: "October 02, 2025",
    file: "/certificates/ibm.pdf",
    description: "Enterprise-grade certification validating proficiency in modern cloud-native development, AI methodologies, and IBM's enterprise technology ecosystem.",
    skills: ["Cloud Computing", "Artificial Intelligence", "Enterprise Architecture"],
  },
  {
    slug: "oracle-cloud-services",
    title: "Cloud Services Management",
    issuer: "Naan Mudhalvan & Oracle",
    domain: "Cloud Infrastructure",
    date: "November 20, 2024",
    file: "/certificates/oracle-cloud.pdf",
    description: "Certification in Cloud Services Management covering essential cloud operational procedures, service delivery, and infrastructure management.",
    skills: ["Cloud Services", "Service Management", "Infrastructure Operations"],
  },
  {
    slug: "infosys-devops",
    title: "Devops",
    issuer: "Naan Mudhalvan & Infosys Springboard",
    domain: "Technology",
    date: "March 02, 2025",
    file: "/certificates/infosys.pdf",
    description: "Certification covering modern software engineering practices, continuous integration, continuous delivery (CI/CD), and DevOps principles tailored for enterprise IT environments.",
    skills: ["Software Engineering", "DevOps", "CI/CD", "Enterprise IT"],
  },
  {
    slug: "cisco-cybersecurity",
    title: "Introduction to Cybersecurity",
    issuer: "Cisco Networking Academy",
    domain: "Cybersecurity",
    date: "March 31, 2026",
    credentialId: "c3788468-0cc0-4d2b-9720-e363b889f6f5",
    file: "/certificates/cisco-cybersecurity.pdf",
    description: "Validates foundational knowledge of cybersecurity, including the global implications of cyber threats, the ways in which networks are vulnerable to attack, and the mitigation strategies used by industry professionals.",
    skills: ["Cybersecurity Fundamentals", "Network Security", "Threat Mitigation", "Risk Management"],
  },
];

export interface SkillGroup {
  category: string;
  skills: { name: string; context: string }[];
}

export const skillGroups: SkillGroup[] = [
  {
    category: "Languages",
    skills: [
      { name: "Python", context: "AI/ML, RAG pipelines, backend services" },
      { name: "Java 21", context: "Spring Boot, Spring AI, enterprise backends" },
      { name: "TypeScript", context: "Next.js, React, full-stack web apps" },
      { name: "JavaScript", context: "MERN stack, Node.js services" },
      { name: "Solidity", context: "Ethereum smart contracts, dApps" },
    ],
  },
  {
    category: "AI & Machine Learning",
    skills: [
      { name: "RAG Pipelines", context: "FAISS, hybrid search, document retrieval" },
      { name: "Local LLMs", context: "Ollama, Sentence Transformers, on-premise AI" },
      { name: "Spring AI", context: "Java-native AI integration, model abstraction" },
      { name: "NLP", context: "Transcription, summarization, topic extraction" },
      { name: "Vector Databases", context: "FAISS, Qdrant, embedding storage" },
    ],
  },
  {
    category: "Backend & Systems",
    skills: [
      { name: "Spring Boot", context: "REST APIs, microservices, reactive programming" },
      { name: "Node.js / Express", context: "API servers, middleware, MERN backends" },
      { name: "FastAPI", context: "High-performance Python APIs" },
      { name: "WebFlux", context: "Reactive programming, non-blocking I/O" },
      { name: "MongoDB", context: "Document storage, aggregation pipelines" },
      { name: "PostgreSQL", context: "Relational data, complex queries" },
    ],
  },
  {
    category: "Frontend",
    skills: [
      { name: "React", context: "Component architecture, state management, hooks" },
      { name: "Next.js", context: "SSR, SSG, App Router, full-stack React" },
      { name: "Tailwind CSS", context: "Utility-first styling, responsive design" },
      { name: "Material UI", context: "Component library, theming" },
    ],
  },
  {
    category: "Blockchain & Web3",
    skills: [
      { name: "Ethereum", context: "Smart contract deployment, dApp development" },
      { name: "Solidity", context: "Contract logic, gas optimization" },
      { name: "IPFS", context: "Decentralized document storage" },
      { name: "Web3.js", context: "Blockchain interaction, wallet integration" },
    ],
  },
  {
    category: "DevOps & Tools",
    skills: [
      { name: "Docker", context: "Containerization, development environments" },
      { name: "Git & GitHub", context: "Version control, collaboration" },
      { name: "Vercel", context: "Deployment, CI/CD, analytics" },
      { name: "GitHub Actions", context: "CI/CD pipelines, automation" },
    ],
  },
];

export interface TimelineEntry {
  year: string;
  title: string;
  subtitle: string;
  description: string;
}

export const educationTimeline: TimelineEntry[] = [
  {
    year: "2025–2027",
    title: "M.Tech Computer Science",
    subtitle: "SRM Institute of Science and Technology (SRMIST), Chennai",
    description: "Specializing in Artificial Intelligence, Machine Learning, RAG systems, AI infrastructure, intelligent applications, and distributed systems.",
  },
  {
    year: "December 2025",
    title: "CYSTAR Winter School",
    subtitle: "Indian Institute of Technology Madras (IIT Madras)",
    description: "Participated in the CYSTAR Winter School program focused on cybersecurity, secure systems, emerging technologies, research methodologies, and advanced engineering practices.",
  },
  {
    year: "2024",
    title: "MERN Full-Stack Development Program",
    subtitle: "GeeksforGeeks, Bengaluru",
    description: "Completed an intensive 6-month offline training program covering MongoDB, Express.js, React, Node.js, REST APIs, authentication, deployment, and production-grade application development.",
  },
  {
    year: "2021–2025",
    title: "B.Tech Information Technology",
    subtitle: "Undergraduate Studies",
    description: "Built strong foundations in software engineering, algorithms, databases, networking, system design, and application development.",
  },
];

export const engineeringMilestones: TimelineEntry[] = [
  {
    year: "2026–Present",
    title: "Building OmniSLM",
    subtitle: "AI Infrastructure",
    description: "Developing an open-source framework for building production-ready AI applications with Small Language Models.",
  },
  {
    year: "2026",
    title: "SeedTracking",
    subtitle: "Blockchain + ML Platform",
    description: "Blockchain-powered supply chain platform integrating Ethereum, IPFS, and machine learning fraud detection.",
  },
  {
    year: "2026",
    title: "PaathAI",
    subtitle: "AI Academic Intelligence",
    description: "AI-powered academic intelligence platform for lecture transcription, syllabus mapping, and academic analytics.",
  },
  {
    year: "2026",
    title: "RAG System for Local LLMs",
    subtitle: "Privacy-First AI",
    description: "Privacy-first Retrieval-Augmented Generation system using FAISS, hybrid retrieval, and local inference models.",
  },
  {
    year: "2025–2026",
    title: "Local LLM Platform",
    subtitle: "Java + Spring AI",
    description: "Java-based AI platform using Spring AI, WebFlux, MongoDB, and Ollama.",
  },
  {
    year: "2024",
    title: "College Management System",
    subtitle: "Full-Stack Web App",
    description: "Full-stack MERN application with role-based portals and academic administration workflows.",
  },
];
