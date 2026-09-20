import { Project } from "@/types";

export const projectsData: Project[] = [
  {
    id: "proj-1",
    slug: "ai-farming-query-advice-system",
    title: "AI Farming Query & Advice System",
    domain: "Generative AI & LLMs",
    projectType: "Production AI System",
    tagline: "Multilingual agricultural advisory assistant grounded in verified regional agronomy datasets using RAG.",
    badge: "Featured",
    problemStatement:
      "Smallholder farmers struggle to obtain prompt, location-specific agricultural advice regarding crop diseases, soil fertility amendments, and unpredictable weather shifts. Generic search engines produce ungrounded, hallucinated, or non-localized suggestions that risk crop yield loss.",
    existingSystem: {
      limitations: [
        "Farmer helpline call centers suffer from severe staffing constraints and high call drop rates.",
        "Static government advisory portals feature convoluted navigation and lack multilingual conversational capability.",
        "Commercial generic search engines lack domain-grounded agronomic verification, producing inaccurate pesticide dosage advisories.",
      ],
      gaps: "Absence of real-time conversational retrieval over verified Indian Council of Agricultural Research (ICAR) guidelines and localized meteorological telemetry.",
    },
    proposedSystem: {
      overview:
        "An intelligent Retrieval-Augmented Generation (RAG) assistant designed with FastAPI and LangChain. The system ingests verified agronomic research, agricultural extension manuals, and seasonal weather bulletins into a dense vector index, delivering localized, hallucination-resistant advisories in regional Indian languages.",
      advantages: [
        "Strict retrieval grounding eliminates inaccurate dosage suggestions.",
        "Supports query processing in conversational Hindi, Telugu, Tamil, and English.",
        "Provides source citation back to verified agronomy documentation for university viva defense.",
      ],
      innovations: [
        "Hybrid sparse-dense retrieval (BM25 + Semantic Vector Search) for precise crop pathogen matching.",
        "Dynamic soil-weather context injection before prompt synthesis.",
      ],
    },
    keyFeatures: [
      "Conversational question answering grounded on ICAR agronomy publications",
      "Dynamic weather telemetry integration using OpenWeatherMap API",
      "Multilingual query translation pipeline using open-source models",
      "Confidence-scored source citation display for student viva presentation",
      "Responsive mobile-first web client tailored for low-bandwidth environments",
    ],
    modules: [
      {
        title: "Module 1: Agronomy Knowledge Ingestion & Chunking",
        description:
          "Preprocesses PDF reports, crop calendars, and disease manuals; splits text with recursive character splitting and preserves tabular agronomic metrics.",
        deliverable: "Data ingestion scripts & formatted ChromaDB/FAISS vector collections.",
      },
      {
        title: "Module 2: Hybrid Retrieval & Reranking Engine",
        description:
          "Executes dual-stage retrieval combining dense vector similarity with cross-encoder re-ranking to filter top-k most relevant agronomy passages.",
        deliverable: "Python RAG retriever class with query expansion logic.",
      },
      {
        title: "Module 3: FastAPI Backend & LLM Prompt Orchestration",
        description:
          "Builds asynchronous REST endpoints with input guardrails, chat session memory management, and prompt engineering templates.",
        deliverable: "Production-ready FastAPI service with Swagger documentation.",
      },
      {
        title: "Module 4: Student Demonstration Frontend",
        description:
          "Next.js / React interactive interface allowing real-time chat, source snippet inspections, and audio synthesis preview.",
        deliverable: "Complete frontend codebase with responsive UI components.",
      },
    ],
    technologies: ["Python", "FastAPI", "LangChain", "ChromaDB", "HuggingFace", "React", "Tailwind CSS"],
    systemArchitecture: {
      overview:
        "The architecture decouples knowledge indexing from conversational inference. User queries flow through an intent-detection layer into hybrid vector retrieval before reaching the generative synthesis LLM.",
      pipeline: [
        {
          step: 1,
          phase: "Ingestion & Vectorization",
          description: "Agronomy documentation chunked and converted to 768-dim embeddings via BGE/OpenAI embeddings.",
          technologies: ["Python", "PyPDF2", "LangChain"],
        },
        {
          step: 2,
          phase: "Context Retrieval",
          description: "ChromaDB queries top-3 relevant context chunks matching farmer symptoms and soil parameters.",
          technologies: ["ChromaDB", "Cosine Similarity"],
        },
        {
          step: 3,
          phase: "Prompt Synthesis & Generation",
          description: "FastAPI constructs grounded system prompt and queries LLM with temperature constraints.",
          technologies: ["FastAPI", "OpenAI / Mistral", "Pydantic"],
        },
        {
          step: 4,
          phase: "Client Presentation",
          description: "Interactive React UI renders streaming markdown response and expandable source references.",
          technologies: ["React", "Tailwind CSS", "Server-Sent Events"],
        },
      ],
    },
    expectedWorkflow: [
      "User selects language and enters crop disease symptoms along with location.",
      "FastAPI API validates input and queries current weather conditions for the region.",
      "Retrieval engine fetches matching ICAR disease remedy passages from vector store.",
      "LLM constructs actionable treatment recommendations with verified dosage guidance.",
      "Response renders with clear citation links and recommended preventive practices.",
    ],
    suitableFor: [
      "Computer Science & Engineering (CSE)",
      "Artificial Intelligence & Data Science (AI & DS)",
      "Information Technology (IT)",
      "Agricultural Informatics",
    ],
  },
  {
    id: "proj-2",
    slug: "intelligent-resume-analysis-system",
    title: "Intelligent Resume Analysis & ATS System",
    domain: "Natural Language Processing",
    projectType: "Production AI System",
    tagline: "Automated candidate-job alignment engine with contextual NLP skill extraction and bias-mitigated ranking.",
    badge: "Popular",
    problemStatement:
      "Conventional Applicant Tracking Systems (ATS) rely on crude keyword matching that penalizes qualified applicants who use synonymous terms while failing to evaluate actual candidate competencies, causing high recruiter triage overhead.",
    existingSystem: {
      limitations: [
        "Regex and naive keyword counters discard non-exact semantic matches (e.g. 'Golang' vs 'Go').",
        "Zero capability to assess candidate experience progression or project impact depth.",
        "Prone to keyword-stuffing exploits where invisible white text fools basic parsers.",
      ],
      gaps: "Lack of deep transformer-based semantic cross-attention between resume accomplishment sections and job role prerequisite matrices.",
    },
    proposedSystem: {
      overview:
        "A transformer-driven resume parsing and skill verification platform. Extracts entity structures using named entity recognition (NER), maps competencies against the European ESCO taxonomy, and computes semantic similarity metrics alongside actionable feedback for candidates.",
      advantages: [
        "Understands contextual synonyms and tool equivalencies without strict keyword duplication.",
        "Generates structured JSON profile representation from unstructured multi-column PDF resumes.",
        "Produces transparent viva-ready score rubrics explaining why a match percentage was assigned.",
      ],
      innovations: [
        "Custom fine-tuned SpaCy / RoBERTa NER pipeline specifically targeting technical stacks and project impact.",
        "Candidate optimization advisor detailing specific missing core proficiencies.",
      ],
    },
    keyFeatures: [
      "Multi-format resume parsing (PDF, DOCX, TXT) handling two-column layouts",
      "Automated skill, degree, certification, and tenure extraction using NER",
      "Semantic similarity scoring against detailed Job Description specifications",
      "Recruiter dashboard with batch ranking, candidate filtering, and interview question suggestions",
      "Candidate feedback report highlighting critical gaps and formatting recommendations",
    ],
    modules: [
      {
        title: "Module 1: Layout-Aware Document Ingestion",
        description:
          "Converts multi-column resume PDFs into ordered text blocks using PyMuPDF and pdfplumber, eliminating layout distortion.",
        deliverable: "Document preprocessing pipeline with text sanitization.",
      },
      {
        title: "Module 2: Named Entity Recognition & Skill Taxonomies",
        description:
          "Runs customized SpaCy NER models to classify skills, institutions, degrees, and chronological experience metrics.",
        deliverable: "Trained NER pipeline with custom technical entity labels.",
      },
      {
        title: "Module 3: Semantic Alignment & Scoring Engine",
        description:
          "Computes cosine similarity vectors between extracted experience vectors and target job requirement embeddings.",
        deliverable: "Scoring algorithm with weighted sub-scores (skills, experience, education).",
      },
      {
        title: "Module 4: Analytics & Evaluation Interface",
        description:
          "React dashboard featuring candidate comparison charts, ATS compatibility checks, and exportable PDF summaries.",
        deliverable: "Responsive web UI with candidate ranking table.",
      },
    ],
    technologies: ["Python", "FastAPI", "SpaCy", "Sentence-Transformers", "React", "PostgreSQL", "Tailwind CSS"],
    systemArchitecture: {
      overview:
        "Employs a multi-stage NLP pipeline where raw PDF documents are normalized, passed through an entity extraction pipeline, mapped to standard skills ontologies, and evaluated via dense sentence embeddings.",
      pipeline: [
        {
          step: 1,
          phase: "Layout Extraction",
          description: "Extracts textual content while isolating headers, dates, bullet items, and links.",
          technologies: ["PyMuPDF", "Regex", "Python"],
        },
        {
          step: 2,
          phase: "Entity Recognition",
          description: "Extracts technical proficiencies, roles, and education milestones into structured schema.",
          technologies: ["SpaCy", "HuggingFace Transformers"],
        },
        {
          step: 3,
          phase: "Semantic Scoring",
          description: "Calculates embedding similarity score between candidate capabilities and job criteria.",
          technologies: ["All-MiniLM-L6-v2", "Scikit-learn"],
        },
        {
          step: 4,
          phase: "Interactive Reporting",
          description: "Presents recruiter rankings and candidate feedback via interactive dashboard.",
          technologies: ["React", "Chart.js", "Tailwind CSS"],
        },
      ],
    },
    expectedWorkflow: [
      "Recruiter uploads Job Description and a folder of applicant resumes in PDF format.",
      "System asynchronously parses each document into clean structured candidate entities.",
      "Matching algorithm assigns multidimensional scores across skills, experience, and educational prerequisites.",
      "Recruiter reviews ranked candidate table with highlighted strengths and missing requirements.",
      "Candidates receive automated diagnostic reports detailing areas for resume improvement.",
    ],
    suitableFor: [
      "Computer Science & Engineering (CSE)",
      "Information Technology (IT)",
      "Artificial Intelligence & Machine Learning (AI & ML)",
    ],
  },
  {
    id: "proj-3",
    slug: "medical-document-question-answering",
    title: "Medical Document Question Answering (MedRAG)",
    domain: "Generative AI & LLMs",
    projectType: "Research & Implementation",
    tagline: "Clinical document interpretation platform with biomedical vector search and hallucination mitigation guardrails.",
    badge: "Trending",
    problemStatement:
      "Clinical case studies, clinical trial reports, and pharmacological research contain dense, dense medical terminology spanning hundreds of pages. Physicians and healthcare researchers spend hours parsing complex publications to cross-reference drug contraindications and dosage guidelines.",
    existingSystem: {
      limitations: [
        "Keywords searches fail on medical synonyms, brand names versus generic compounds, and ICD code mappings.",
        "General LLMs suffer from dangerous medical hallucinations when generating diagnostic explanations.",
        "Standard vector search lacks awareness of medical negation (e.g., 'patient denies hypertension').",
      ],
      gaps: "Lack of domain-adapted biomedical embedding models coupled with strict negation-aware clinical retrieval.",
    },
    proposedSystem: {
      overview:
        "A specialized clinical Q&A pipeline engineered with BioLinkBERT / PubMedBERT embeddings and Milvus/ChromaDB. Features a clinical negation detector and an automated citation verification mechanism ensuring answers strictly originate from approved medical literature.",
      advantages: [
        "Zero unsourced claims: Every sentence in the answer is tied to an explicit document paragraph reference.",
        "Understands clinical abbreviations, dosages (mg/kg), and contraindication relationships.",
        "Includes audit trail logging suitable for capstone research defense and IEEE paper presentation.",
      ],
      innovations: [
        "Negation-aware chunking preventing false positive symptom attribution.",
        "Automated faithfullness metric evaluation using Ragas framework.",
      ],
    },
    keyFeatures: [
      "Clinical paper and diagnostic report upload (PDF/DICOM text)",
      "PubMedBERT-powered semantic search with high precision on biochemical terminology",
      "Strict citation-anchored answering with highlightable source view",
      "Drug-to-drug interaction flagger cross-referencing pharmaceutical databases",
      "Comprehensive Ragas evaluation metrics (faithfulness, answer relevancy, context recall)",
    ],
    modules: [
      {
        title: "Module 1: Biomedical Text Ingestion & Negation Tagging",
        description:
          "Splits clinical PDFs into semantic paragraphs; runs negation detection algorithms to tag negated symptoms.",
        deliverable: "Medical document parser and annotated corpus pipeline.",
      },
      {
        title: "Module 2: Domain Vector Indexing",
        description:
          "Indexes literature using medical sentence transformers with hierarchical chunk metadata.",
        deliverable: "Configured vector database collection with similarity threshold filters.",
      },
      {
        title: "Module 3: Guardrailed Inference Pipeline",
        description:
          "Constructs medical query prompts with strict refusal rules if source passages lack direct evidence.",
        deliverable: "FastAPI inference service with Ragas evaluation harness.",
      },
      {
        title: "Module 4: Clinician Investigation Interface",
        description:
          "Split-screen web interface displaying generated synthesis on the left and primary source PDFs on the right.",
        deliverable: "React-based interactive document exploration workspace.",
      },
    ],
    technologies: ["Python", "FastAPI", "PubMedBERT", "LangChain", "ChromaDB", "React", "Tailwind CSS"],
    systemArchitecture: {
      overview:
        "Integrates domain-specific BioBERT embedding models with a dual-stage verification loop that validates LLM outputs against source passage spans before returning them to the user.",
      pipeline: [
        {
          step: 1,
          phase: "Clinical PDF Chunking",
          description: "Extracts sections and tags medical entities with negation flags.",
          technologies: ["Python", "PyPDF2", "ScispaCy"],
        },
        {
          step: 2,
          phase: "Biomedical Embedding",
          description: "Generates high-dimensional clinical embeddings preserving pharmacologic nuance.",
          technologies: ["PubMedBERT", "ChromaDB"],
        },
        {
          step: 3,
          phase: "Grounded Synthesis",
          description: "Generates context-bounded explanations with inline parenthetical citations.",
          technologies: ["LangChain", "FastAPI", "LLM APIs"],
        },
        {
          step: 4,
          phase: "Faithfulness Verification",
          description: "Validates that every claim is entailed by retrieved source sentences.",
          technologies: ["Ragas Framework", "Python"],
        },
      ],
    },
    expectedWorkflow: [
      "User uploads clinical trial publication or pharmacological reference document.",
      "Document is indexed into domain vector collection within seconds.",
      "User queries regarding drug dosages, exclusion criteria, or clinical outcomes.",
      "System retrieves relevant passages, checks for negation, and synthesizes cited response.",
      "Interface highlights exact supporting sentences within original PDF viewer.",
    ],
    suitableFor: [
      "Artificial Intelligence & Data Science (AI & DS)",
      "Computer Science & Engineering (CSE)",
      "Biomedical Engineering & IT",
    ],
  },
  {
    id: "proj-4",
    slug: "smart-student-performance-prediction",
    title: "Smart Student Performance & Dropout Prediction System",
    domain: "Artificial Intelligence & ML",
    projectType: "Applied Data Engineering",
    tagline: "Early academic risk identification platform with interpretable SHAP feature attributions and intervention planning.",
    badge: "High Impact",
    problemStatement:
      "Higher education institutions identify struggling students only after mid-semester examination failures occur. Academic counselors lack proactive, data-driven systems to identify at-risk students early enough to implement tailored academic interventions.",
    existingSystem: {
      limitations: [
        "Retrospective grade reporting occurs after semester deadlines have already lapsed.",
        "Siloed data: Attendance, LMS activity, assignment submissions, and socioeconomic factors are rarely correlated.",
        "Black-box machine learning models fail to explain to educators *why* a particular student is flagged.",
      ],
      gaps: "Lack of interpretable machine learning pipelines capable of handling longitudinal academic telemetry with SHAP explanations.",
    },
    proposedSystem: {
      overview:
        "An end-to-end predictive analytics platform trained on demographic, attendance, and continuous assessment metrics. Combines XGBoost, LightGBM, and Random Forests with SHAP (SHapley Additive exPlanations) to present transparent risk drivers to faculty mentors.",
      advantages: [
        "Predicts semester examination performance within the first 4 weeks of coursework.",
        "Provides individualized feature importance charts showing exactly what needs intervention (e.g. lab attendance vs test scores).",
        "Generates automated intervention recommendation memos for mentor-student counseling.",
      ],
      innovations: [
        "Comprehensive model comparison suite evaluating accuracy, ROC-AUC, precision, and recall.",
        "Interactive What-If simulation slider enabling students to see how improved attendance shifts their grade forecast.",
      ],
    },
    keyFeatures: [
      "Student multi-source data ingestion (attendance, internals, LMS engagement, assignment cadence)",
      "Comparative ML benchmark suite (XGBoost, Random Forest, Logistic Regression, LightGBM)",
      "SHAP-powered visual explainability for individualized risk factors",
      "Interactive 'What-If' simulator for students to forecast academic trajectory improvements",
      "Automated PDF intervention report generation for academic mentors and HoDs",
    ],
    modules: [
      {
        title: "Module 1: Data Preprocessing & Feature Engineering",
        description:
          "Handles missing data imputation, outlier treatment, feature scaling, and creates longitudinal momentum indicators.",
        deliverable: "Jupyter notebooks & clean Python preprocessing pipeline scripts.",
      },
      {
        title: "Module 2: Model Training & Hyperparameter Tuning",
        description:
          "Trains multiple classification & regression architectures using GridSearchCV with stratified k-fold cross-validation.",
        deliverable: "Trained model artifacts (.joblib / .pkl) with evaluation matrices.",
      },
      {
        title: "Module 3: Model Explainability Engine (SHAP & LIME)",
        description:
          "Calculates local and global feature attributions to translate statistical weights into plain English insights.",
        deliverable: "SHAP explanation service with plot generation routines.",
      },
      {
        title: "Module 4: Faculty & Student Web Portal",
        description:
          "Dashboard enabling batch CSV uploads, real-time risk heatmaps, and individualized student intervention logs.",
        deliverable: "React/Next.js dashboard with interactive Chart.js visualizations.",
      },
    ],
    technologies: ["Python", "Scikit-learn", "XGBoost", "LightGBM", "SHAP", "FastAPI", "React", "PostgreSQL"],
    systemArchitecture: {
      overview:
        "A modular data science pipeline spanning data normalization, cross-validated model ensembles, SHAP explanation extraction, and role-based web reporting.",
      pipeline: [
        {
          step: 1,
          phase: "Feature Pipeline",
          description: "Ingests academic parameters and generates cumulative velocity metrics.",
          technologies: ["Pandas", "NumPy", "Scikit-learn"],
        },
        {
          step: 2,
          phase: "Ensemble Prediction",
          description: "Executes tuned XGBoost classifier to compute risk probabilities.",
          technologies: ["XGBoost", "Joblib", "Python"],
        },
        {
          step: 3,
          phase: "SHAP Explanations",
          description: "Extracts individual waterfall explanations for the top 5 risk drivers.",
          technologies: ["SHAP", "Matplotlib", "FastAPI"],
        },
        {
          step: 4,
          phase: "Dashboard Visualization",
          description: "Presents faculty alert tables and interactive student trajectory projections.",
          technologies: ["React", "Tailwind CSS", "Recharts"],
        },
      ],
    },
    expectedWorkflow: [
      "Department administrator uploads anonymized student telemetry CSV file.",
      "Backend preprocesses data and computes classification predictions across multiple models.",
      "Faculty dashboard displays at-risk student cohorts categorized by urgency.",
      "Counselor clicks into a specific student profile to view their SHAP feature breakdown.",
      "System suggests specific interventions (e.g., remedial lab hours, peer tutoring).",
    ],
    suitableFor: [
      "Computer Science & Engineering (CSE)",
      "Information Technology (IT)",
      "Data Science & Artificial Intelligence",
    ],
  },
  {
    id: "proj-5",
    slug: "ai-based-customer-support-assistant",
    title: "AI-Based Enterprise Support & Escalation Agent",
    domain: "Generative AI & LLMs",
    projectType: "Production AI System",
    tagline: "Autonomous customer inquiry triage agent with intent routing, SLA management, and human-in-the-loop escalation.",
    badge: "Popular",
    problemStatement:
      "Enterprise support desks are overwhelmed by repetitive level-1 inquiries, leading to delayed resolution times for critical technical incidents. Traditional rule-based chatbots frustrate users with rigid menus and inability to handle multi-turn conversational nuances.",
    existingSystem: {
      limitations: [
        "Rule-based decision trees fail whenever user phrasing deviates from scripted keywords.",
        "Chatbots lack live state integration to look up order statuses or API token balances.",
        "Zero automated sentiment escalation: Frustrated customers remain trapped in loops with bots.",
      ],
      gaps: "Absence of tool-calling LLM agents equipped with verified organizational knowledge bases and human escalation triggers.",
    },
    proposedSystem: {
      overview:
        "A multi-turn conversational agent built with LangChain and LangGraph. Equipped with function-calling capabilities to query mock ERP/CRM databases, answer policy queries via vector search, and seamlessly trigger human agent handoffs when frustration scores exceed thresholds.",
      advantages: [
        "Resolves up to 70% of standard transactional inquiries automatically.",
        "Performs real-time sentiment analysis on every message to prevent escalation bottlenecks.",
        "Clean architectural design demonstrating state machines, function calling, and asynchronous web sockets.",
      ],
      innovations: [
        "LangGraph state machine enforcing strict transitions between triage, knowledge query, database action, and human escalation.",
        "Comprehensive conversation analytics dashboard tracking CSAT metrics.",
      ],
    },
    keyFeatures: [
      "LangGraph agentic state machine for structured workflow handling",
      "Dynamic function calling (check order status, cancel subscription, reset credentials)",
      "Real-time sentiment tracker with automated manager escalation alerts",
      "Enterprise knowledge base RAG for company policies and return guidelines",
      "Live support agent handover console with full chat transcript preservation",
    ],
    modules: [
      {
        title: "Module 1: Agentic State Machine Architecture",
        description:
          "Defines conversation nodes, conditional edges, and state memory using LangGraph for deterministic execution.",
        deliverable: "LangGraph workflow definition & state checkpointing system.",
      },
      {
        title: "Module 2: Mock Enterprise Database & Tool Calling",
        description:
          "Creates SQLite/PostgreSQL schema for customer records and binds Pydantic tools to the LLM.",
        deliverable: "Tool execution sandbox and database models.",
      },
      {
        title: "Module 3: Sentiment & Escalation Engine",
        description:
          "Analyzes customer sentiment score in streaming real-time; triggers webhook handoffs when negative thresholds hit.",
        deliverable: "FastAPI WebSocket server with escalation triggers.",
      },
      {
        title: "Module 4: Customer & Agent Split Console",
        description:
          "React interface featuring dual views: clean chat widget for customers, live monitoring view for support agents.",
        deliverable: "Full-stack React dashboard with WebSocket chat.",
      },
    ],
    technologies: ["Python", "FastAPI", "LangChain", "LangGraph", "WebSockets", "React", "PostgreSQL"],
    systemArchitecture: {
      overview:
        "Utilizes an event-driven architecture where incoming chat messages pass through a sentiment filter into a LangGraph state coordinator that dynamically selects between internal tools, vector retrieval, or live agent routing.",
      pipeline: [
        {
          step: 1,
          phase: "Message Ingestion",
          description: "Incoming WebSocket packet analyzed for intent and customer sentiment score.",
          technologies: ["FastAPI", "WebSockets", "VADER/Transformers"],
        },
        {
          step: 2,
          phase: "State Machine Evaluation",
          description: "LangGraph evaluates active conversation state and checks required parameters.",
          technologies: ["LangGraph", "Python"],
        },
        {
          step: 3,
          phase: "Tool Calling Execution",
          description: "LLM emits structured tool invocation to query database or documentation.",
          technologies: ["Pydantic", "SQLAlchemy", "ChromaDB"],
        },
        {
          step: 4,
          phase: "Streaming Delivery",
          description: "Answers stream in real-time to user interface with live status notifications.",
          technologies: ["React", "Tailwind CSS"],
        },
      ],
    },
    expectedWorkflow: [
      "Customer opens widget and types inquiry regarding delayed order shipment.",
      "LangGraph agent classifies intent as 'Transactional: Order Status'.",
      "Agent executes `get_order_status(order_id)` tool against backend database.",
      "Agent synthesizes personalized status update with courier tracking link.",
      "If customer expresses frustration, system automatically transfers session to Human Agent queue.",
    ],
    suitableFor: [
      "Computer Science & Engineering (CSE)",
      "Information Technology (IT)",
      "Artificial Intelligence & Machine Learning (AI & ML)",
    ],
  },
  {
    id: "proj-6",
    slug: "full-stack-project-management-platform",
    title: "Full Stack Collaborative Project Workspace",
    domain: "Full Stack Development",
    projectType: "Enterprise Web Platform",
    tagline: "High-performance team workflow platform featuring real-time kanban boards, role-based security, and audit trails.",
    badge: "Featured",
    problemStatement:
      "Modern development teams face fragmented collaboration across disconnected chat apps, issue trackers, and file drives. Existing enterprise platforms (e.g. Jira) are often bloated and costly, while lightweight alternatives lack fine-grained role-based permissioning and auditability.",
    existingSystem: {
      limitations: [
        "Complex legacy enterprise tools suffer from sluggish page reloads and steep learning curves.",
        "Absence of granular audit logging to trace who modified project parameters and milestone dates.",
        "Inadequate real-time synchronization leading to conflicting simultaneous edits on task cards.",
      ],
      gaps: "Lack of modern, lightweight full-stack architectures combining optimistic UI updates with robust relational transactions.",
    },
    proposedSystem: {
      overview:
        "A full-stack collaborative platform built with React, Node.js, Express, and PostgreSQL. Features dynamic drag-and-drop Kanban boards, role-based access control (Admin, Manager, Contributor), activity audit logs, and instant Socket.io synchronization.",
      advantages: [
        "Sub-100ms optimistic UI updates with smooth drag-and-drop animations.",
        "Strict database normalization (3NF) with foreign key integrity and transactional safety.",
        "Demonstrates complete enterprise web engineering patterns suitable for university project reviews.",
      ],
      innovations: [
        "Real-time multiplayer cursor and board presence using WebSockets.",
        "Granular permission matrix with JWT authentication and refresh token rotation.",
      ],
    },
    keyFeatures: [
      "Interactive drag-and-drop Kanban boards with custom swimlanes and priority flags",
      "Granular Role-Based Access Control (RBAC) with JWT & HttpOnly cookie security",
      "Real-time task synchronization across concurrent users via WebSockets",
      "Sprint planning, burndown tracking, and project velocity analytics",
      "Immutable system audit log tracking every status shift, assignment, and comment",
    ],
    modules: [
      {
        title: "Module 1: Authentication & RBAC Authorization",
        description:
          "Implements secure bcrypt password hashing, JWT access/refresh token cycles, and middleware-enforced role gates.",
        deliverable: "Secure authentication subsystem with middleware and tests.",
      },
      {
        title: "Module 2: Relational Schema & PostgreSQL Transactions",
        description:
          "Designs normalized schema for organizations, projects, sprints, tasks, and historical audit entries.",
        deliverable: "SQL migration scripts, Prisma/TypeORM models, and seed data.",
      },
      {
        title: "Module 3: REST API & Real-Time Socket Gateway",
        description:
          "Builds expressive CRUD endpoints with input validation alongside Socket.io event broadcasting for board edits.",
        deliverable: "Express.js REST & WebSocket server with Postman collections.",
      },
      {
        title: "Module 4: React Client & Drag-and-Drop Workspace",
        description:
          "Develops responsive desktop-and-mobile UI with optimistic state updates and accessible keyboard controls.",
        deliverable: "Complete modern React frontend with Tailwind CSS styling.",
      },
    ],
    technologies: ["React", "Node.js", "Express", "PostgreSQL", "Socket.io", "Tailwind CSS", "Prisma"],
    systemArchitecture: {
      overview:
        "Clean layered three-tier architecture: Client Single Page Application -> API / WebSocket Application Layer -> Relational PostgreSQL Database with connection pooling.",
      pipeline: [
        {
          step: 1,
          phase: "User Action & Optimistic Update",
          description: "User drags task card; React immediately updates UI and emits Socket.io event.",
          technologies: ["React", "dnd-kit", "Tailwind CSS"],
        },
        {
          step: 2,
          phase: "API Validation & Gatekeeping",
          description: "Express middleware checks user permissions and validates payload schema.",
          technologies: ["Node.js", "Express", "Zod", "JWT"],
        },
        {
          step: 3,
          phase: "Transactional Persistence",
          description: "PostgreSQL updates task ordering within an ACID database transaction.",
          technologies: ["PostgreSQL", "Prisma ORM"],
        },
        {
          step: 4,
          phase: "Broadcast & Sync",
          description: "Socket server broadcasts change event to all active team member viewports.",
          technologies: ["Socket.io", "Redis Pub/Sub (Optional)"],
        },
      ],
    },
    expectedWorkflow: [
      "Project Manager creates project workspace and invites team members with specific roles.",
      "Developer opens Sprint Kanban board and drags task card to 'In Progress'.",
      "Collaborator on another machine sees card move in real time without refreshing.",
      "Developer logs hours and attaches commit references to task description.",
      "Manager reviews automated burndown velocity report for weekly sprint defense.",
    ],
    suitableFor: [
      "Computer Science & Engineering (CSE)",
      "Information Technology (IT)",
      "Software Engineering",
    ],
  },
];

// Helper functions for easy filtering and extensibility (supports 50+ projects easily)
export function getAllProjects(): Project[] {
  return projectsData;
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projectsData.find((p) => p.slug === slug || p.id === slug);
}

export function getProjectFilterOptions() {
  const domains = Array.from(new Set(projectsData.map((p) => p.domain)));
  const technologies = Array.from(
    new Set(projectsData.flatMap((p) => p.technologies))
  ).sort();
  const projectTypes = Array.from(new Set(projectsData.map((p) => p.projectType)));

  return { domains, technologies, projectTypes };
}
