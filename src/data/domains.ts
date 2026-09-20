import { Domain } from "@/types";

export const domainsData: Domain[] = [
  {
    id: "ai-ml",
    title: "Artificial Intelligence & ML",
    description:
      "Build practical machine learning systems using real-world datasets, statistical modeling, feature pipelines, and modern ML frameworks.",
    icon: "Brain",
    exampleTech: ["Python", "Scikit-learn", "TensorFlow", "PyTorch", "XGBoost"],
    accentColor: "from-blue-500/20 to-cyan-500/20",
    popularTopics: [
      "Predictive Analytics & Forecasting",
      "Anomaly Detection Systems",
      "Healthcare Diagnostic Classification",
      "Automated Fraud Detection",
    ],
  },
  {
    id: "gen-ai",
    title: "Generative AI & LLMs",
    description:
      "Develop end-to-end Large Language Model applications utilizing Retrieval-Augmented Generation (RAG), vector databases, and multi-agent orchestration.",
    icon: "Sparkles",
    exampleTech: ["LangChain", "LlamaIndex", "ChromaDB / Pinecone", "FastAPI", "OpenAI / HuggingFace"],
    accentColor: "from-violet-500/20 to-purple-500/20",
    popularTopics: [
      "Domain-Specific RAG Knowledge Engines",
      "Autonomous Multi-Agent Task Orchestration",
      "Document Intelligence & Synthesis",
      "Context-Aware Code & Query Assistants",
    ],
  },
  {
    id: "full-stack",
    title: "Full Stack Development",
    description:
      "Design scalable modern web applications with decoupled frontend architectures, secure REST/GraphQL APIs, role-based access, and relational persistence.",
    icon: "Layout",
    exampleTech: ["React / Next.js", "Node.js / Express", "FastAPI", "PostgreSQL", "Tailwind CSS"],
    accentColor: "from-emerald-500/20 to-teal-500/20",
    popularTopics: [
      "Enterprise Workflow & Project Management",
      "Real-Time Collaborative Dashboards",
      "Microservices-Based Academic Portals",
      "Role-Based Access Control Platforms",
    ],
  },
  {
    id: "data-science",
    title: "Data Science",
    description:
      "Extract actionable intelligence through deep exploratory data analysis, feature engineering, statistical hypotheses testing, and high-impact visual storytelling.",
    icon: "BarChart3",
    exampleTech: ["Pandas", "NumPy", "Seaborn", "Statsmodels", "Plotly", "Streamlit"],
    accentColor: "from-amber-500/20 to-orange-500/20",
    popularTopics: [
      "Student Academic Trajectory Analysis",
      "Algorithmic Churn Prediction",
      "Market Sentiment & Financial Trends",
      "Urban & Environmental Data Modeling",
    ],
  },
  {
    id: "computer-vision",
    title: "Computer Vision",
    description:
      "Implement real-time visual recognition, object detection, segmentation, and facial classification pipelines with edge optimization.",
    icon: "Scan",
    exampleTech: ["OpenCV", "YOLOv8 / YOLOv10", "PyTorch", "MediaPipe", "FastAPI"],
    accentColor: "from-rose-500/20 to-pink-500/20",
    popularTopics: [
      "Automated Defect & Quality Inspection",
      "Surveillance & Safety Violation Detection",
      "Medical Imaging & X-Ray Segmentation",
      "Gesture & Driver Drowsiness Monitoring",
    ],
  },
  {
    id: "nlp",
    title: "Natural Language Processing",
    description:
      "Build semantic text comprehension engines, transformer-based sentiment analyzers, automated text summarizers, and resume parsing pipelines.",
    icon: "MessageSquareText",
    exampleTech: ["Transformers", "spaCy", "NLTK", "BERT / RoBERTa", "FastAPI"],
    accentColor: "from-sky-500/20 to-indigo-500/20",
    popularTopics: [
      "Automated Resume Matching & Skill Extraction",
      "Multilingual Social Sentiment Analysis",
      "Clinical Notes Named Entity Recognition (NER)",
      "Automated Legal Document Summarization",
    ],
  },
  {
    id: "cloud-backend",
    title: "Cloud & Backend Systems",
    description:
      "Architect high-throughput backend services, asynchronous task queues, caching layers, containerized deployments, and resilient database schemas.",
    icon: "Server",
    exampleTech: ["Docker", "PostgreSQL", "Redis", "Celery", "FastAPI", "AWS / GCP"],
    accentColor: "from-blue-600/20 to-violet-600/20",
    popularTopics: [
      "Distributed Rate-Limited API Gateways",
      "Event-Driven Pub/Sub Notification Pipelines",
      "High-Concurrency Reservation Architectures",
      "Secure Encrypted Document Vaults",
    ],
  },
  {
    id: "emerging-tech",
    title: "Emerging Technologies",
    description:
      "Explore bleeding-edge engineering topics including IoT sensory integration, edge AI inference, blockchain verification mechanisms, and graph neural networks.",
    icon: "Cpu",
    exampleTech: ["MQTT", "Raspberry Pi / ESP32", "NetworkX", "Solidity / Web3.js", "ONNX Runtime"],
    accentColor: "from-teal-500/20 to-cyan-500/20",
    popularTopics: [
      "Smart Agriculture IoT & Edge Telemetry",
      "Decentralized Academic Credential Verification",
      "Graph-Based Fraud Ring Discovery",
      "Lightweight Edge-AI Embedded Monitoring",
    ],
  },
];
