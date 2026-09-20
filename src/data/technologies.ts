import { TechItem } from "@/types";

export const technologiesData: TechItem[] = [
  // Languages & Core Frameworks
  {
    name: "Python",
    category: "Languages & Frameworks",
    role: "Primary language for AI/ML pipelines, numerical computation, and backend services.",
    tag: "Core",
  },
  {
    name: "FastAPI",
    category: "Languages & Frameworks",
    role: "High-performance asynchronous Python REST API framework with native OpenAPI schema.",
    tag: "Backend",
  },
  {
    name: "React",
    category: "Languages & Frameworks",
    role: "Modern component-driven UI library for interactive, stateful client dashboards.",
    tag: "Frontend",
  },
  {
    name: "Node.js",
    category: "Languages & Frameworks",
    role: "Non-blocking JavaScript runtime for real-time WebSocket servers and web microservices.",
    tag: "Runtime",
  },

  // AI & ML Engines
  {
    name: "LangChain",
    category: "AI & ML Engines",
    role: "Framework for developing context-aware applications powered by language models.",
    tag: "GenAI",
  },
  {
    name: "LangGraph",
    category: "AI & ML Engines",
    role: "Cyclic multi-agent workflow orchestration library for complex agentic state machines.",
    tag: "Agents",
  },
  {
    name: "RAG",
    category: "AI & ML Engines",
    role: "Retrieval-Augmented Generation architectures grounding LLMs on private enterprise datasets.",
    tag: "Architecture",
  },
  {
    name: "LLMs",
    category: "AI & ML Engines",
    role: "State-of-the-art foundation models (OpenAI GPT-4o, Mistral, Llama-3, DeepSeek).",
    tag: "Foundation",
  },
  {
    name: "PyTorch",
    category: "AI & ML Engines",
    role: "Deep learning framework for custom neural network architectures and tensor processing.",
    tag: "Deep Learning",
  },
  {
    name: "TensorFlow",
    category: "AI & ML Engines",
    role: "End-to-end open source platform for machine learning and edge model deployment.",
    tag: "Deep Learning",
  },
  {
    name: "Scikit-learn",
    category: "AI & ML Engines",
    role: "Standard library for classical machine learning algorithms, classification, and regression.",
    tag: "Machine Learning",
  },
  {
    name: "OpenAI APIs",
    category: "AI & ML Engines",
    role: "Inference endpoints for embedding generation, structured outputs, and vision comprehension.",
    tag: "APIs",
  },

  // Databases & Vector Storage
  {
    name: "PostgreSQL",
    category: "Databases & Storage",
    role: "Robust relational database with ACID compliance, relational constraints, and pgvector.",
    tag: "Relational",
  },
  {
    name: "MongoDB",
    category: "Databases & Storage",
    role: "Document-oriented NoSQL database for flexible schemas and unstructured telemetry.",
    tag: "NoSQL",
  },
  {
    name: "Vector Databases",
    category: "Databases & Storage",
    role: "High-dimensional similarity indexing using ChromaDB, FAISS, Milvus, and Pinecone.",
    tag: "Vector Search",
  },

  // DevOps & Cloud
  {
    name: "Docker",
    category: "DevOps & Cloud",
    role: "Containerization tool guaranteeing deterministic environments across development and defense.",
    tag: "DevOps",
  },
  {
    name: "GitHub",
    category: "DevOps & Cloud",
    role: "Git version control, collaborative branch management, and annotated project repositories.",
    tag: "Version Control",
  },
];
