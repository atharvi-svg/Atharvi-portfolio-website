import profilePhoto from "../atharvi image.jpeg";
export const PROFILE = {
  name: "Atharvi Desurkar",
  role: "CSE · AI & ML — PES University",
  tagline: "Building intelligent software systems.",
  summary:
    "Computer Science (AI & ML) undergraduate with hands-on experience in software engineering, AI/ML, Information Retrieval, Prompt Engineering, Retrieval-Augmented Generation (RAG), and LLM-powered applications. I build full-stack AI solutions, computer vision systems, real-time data pipelines, and cloud-deployed applications.",
  email: "atharvidesurkar@gmail.com",
  phone: "6363217763",
  linkedin: "https://www.linkedin.com/in/atharvi-desurkar-b05226325/",
  github: "https://github.com/atharvi-svg",
  substack: "https://substack.com/@woveninwords",
  resume: "assets/resume.pdf",
  formspree: "https://formspree.io/f/xgoarvdv",

  photo: profilePhoto,
};
export const MANIFESTO = [
  {
    n: "01",
    title: "Who I am",
    body: "A CSE-AIML student at PES University, exploring software development, information retrieval and applied AI — driven by curiosity and a love for well-engineered systems.",
  },
  {
    n: "02",
    title: "What I build",
    body: "Full-stack AI products, RAG & LLM pipelines, computer-vision systems and real-time data pipelines — from research prototypes to cloud-deployed applications.",
  },
  {
    n: "03",
    title: "Where I'm going",
    body: "Toward becoming an engineer who pairs deep technical craft with product thinking, shipping scalable, intelligent software that solves real problems.",
  },
];

export const SKILLS = [
  { group: "Programming", items: ["Python", "C++", "C", "SQL"] },
  { group: "Web", items: ["Flask", "HTML", "CSS", "JavaScript", "REST APIs", "Flexbox"] },
  { group: "AI / ML", items: ["TensorFlow", "Scikit-learn", "XGBoost", "OpenCV", "Pandas", "NumPy", "Data Science"] },
  { group: "LLMs & IR", items: ["Prompt Engineering", "RAG", "LangChain", "Gemini API", "Hugging Face", "FAISS", "ChromaDB", "SentenceTransformers", "PyTerrier", "Lucene", "BM25"] },
  { group: "Cloud & Tools", items: ["Render", "Vercel", "Git", "GitHub", "VS Code", "Jupyter", "SQLite", "Figma"] },
  { group: "Beyond Code", items: ["Leadership", "Communication", "Event Planning", "Problem Solving", "English", "Japanese (N5)"] },
];

export const PROJECTS = [
  {
    title: "MEQE — Neural IR",
    meta: "Research · Information Retrieval",
    desc: "Neural information-retrieval pipeline using PyTerrier, Lucene, BM25 and SentenceTransformers. Built indexing, retrieval, feature extraction and evaluation on MS MARCO, BEIR & Robust04.",
    tags: ["PyTerrier", "Lucene", "BM25", "RAG"],
    link: "https://github.com/atharvi-svg",
  },
  {
    title: "FarmLens AI",
    meta: "Computer Vision · AgriTech",
    desc: "Flask-based smart-agriculture platform using OpenCV and K-Means segmentation to analyze crop health and deliver irrigation, pest-control and farming recommendations.",
    tags: ["Flask", "OpenCV", "K-Means", "Python"],
    link: "https://github.com/atharvi-svg",
  },
  {
    title: "ShiftSafe AI",
    meta: "IEEE AIMPro · Data Pipeline",
    desc: "Real-time data pipeline with SQLite live-sensor simulation, KNN imputation and feature generation. Deployed on Render as Data Pipeline Lead.",
    tags: ["SQLite", "KNN", "Render", "Pipeline"],
    link: "https://github.com/atharvi-svg",
  },
  {
    title: "Poetic Personality Chatbot",
    meta: "AI · Creative NLP",
    desc: "Conversational system that transforms ordinary user messages into emotionally rich, lyrical poems reflecting the user's input.",
    tags: ["Chatbot", "NLP", "Poetry", "AI"],
    link: "https://github.com/atharvi-svg/poetic-chat-bot-",
  },
  {
    title: "EN → FR Translation Chatbot",
    meta: "NLP · Translation",
    desc: "Interactive NLP application that translates English text into French with high accuracy through a clean conversational interface.",
    tags: ["NLP", "Translation", "Chatbot"],
    link: "https://github.com/atharvi-svg/translation-chat-bot-",
  },
  {
    title: "CareerPath",
    meta: "Full Stack · Career Guidance",
    desc: "Full-stack career-development platform helping students explore interests and prepare with structured learning plans. Node.js, Express & MongoDB backend.",
    tags: ["Node.js", "Express", "MongoDB", "Full Stack"],
    link: "https://github.com/atharvi-svg/careerpath",
  },
  {
    title: "Crypto-Next Screener",
    meta: "Ongoing · FinTech",
    desc: "Real-time crypto screener tracking markets, monitoring trends and displaying live updates in a clean dashboard-style UI.",
    tags: ["Next.js", "Crypto", "Real-Time", "FinTech"],
    link: "https://github.com/atharvi-svg/next-crypto",
  },
  {
    title: "WovenInWords",
    meta: "Ongoing · Blog Platform",
    desc: "Personal website and blog platform where tech and poetry meet — publishing articles and reflections in a reader-friendly format.",
    tags: ["Blog", "Writing", "Creative", "Web"],
    link: "https://github.com/atharvi-svg/woveninwords",
  },
  {
    title: "Portfolio Website",
    meta: "Frontend · Personal",
    desc: "Responsive developer portfolio highlighting skills, projects, certifications and contact info. Built with HTML, CSS & JavaScript, deployed on Vercel.",
    tags: ["HTML", "CSS", "JavaScript", "Responsive"],
    link: "https://github.com/atharvi-svg/portfolio-website",
  },
];

export const EXPERIENCE = [
  {
    role: "Research Intern",
    org: "PES University Research Foundation",
    period: "Research",
    points: [
      "Contributed to MEQE neural information-retrieval research.",
      "Built Lucene indexing, BM25 retrieval, feature extraction and evaluation workflows.",
      "Ran experiments on MS MARCO, BEIR and Robust04; explored RAG & prompt engineering.",
    ],
  },
  {
    role: "AI Research Intern — Data Pipeline Lead",
    org: "IEEE AIMPro 2026 · ShiftSafe AI",
    period: "2026",
    points: [
      "Implemented SQLite live-sensor simulation, KNN imputation and get_latest_features().",
      "Built the real-time data pipeline and assisted deployment using Render.",
    ],
  },
  {
    role: "Business Operations Intern",
    org: "A4 Tooling Solutions",
    period: "May – June 2024",
    points: [
      "Assisted inventory tracking and stock checking for supply-chain efficiency.",
      "Learned accounting & billing using Zoho Books and Tally.",
      "Improved negotiation, customer interaction and relationship-management skills.",
    ],
  },
  {
    role: "Social Media & Marketing Head",
    org: "Entrepreneurship Club, PES ECC",
    period: "Leadership",
    points: [
      "Led a data-driven social-media strategy using performance insights.",
      "Built a scalable content workflow + calendar for consistent campaigns.",
      "Executed event-marketing campaigns with cross-team coordination.",
    ],
  },
  {
    role: "Japanese Course (N5)",
    org: "Let's Talk Academy, Pune",
    period: "Certification",
    points: [
      "Built foundational grammar, vocabulary and conversational ability.",
      "Improved communication and adaptability through group discussions.",
    ],
  },
];

export const CERTIFICATIONS = [
  { title: "Applications of Generative AI with RAG & LangChain", org: "IBM", icon: "Link2" },
  { title: "Large Language Models (Ongoing)", org: "NPTEL", icon: "Brain" },
  { title: "Introduction to Data Science", org: "Cisco", icon: "BarChart3" },
  { title: "Python", org: "HackerRank", icon: "Code2" },
  { title: "GenAI Basics", org: "Finlatics", icon: "Sparkles" },
  { title: "Full Stack Development", org: "Udemy", icon: "Layers" },
  { title: "CSS & HTML", org: "Udemy", icon: "Palette" },
];

export const ACHIEVEMENTS = [
  "Selected — PES University Research Foundation Internship",
  "Selected — IEEE AIMPro 2026",
  "Participated — CodeFusion Hackathon",
  "Participated — IEEE Kalpana Hackathon",
  "Volunteered — PES Capstone Mela",
  "Active learner — IBM SkillsBuild Community",
  "Student Member — IEEE Computer Society, Bangalore Chapter",
];

export const BEYOND = [
  { title: "Reading", body: "I read widely to improve how I think, communicate and understand people.", icon: "BookOpen" },
  { title: "Writing & Blogging", body: "I publish reflections and learnings through storytelling on my Substack, WovenInWords.", icon: "PenLine", link: "https://substack.com/@woveninwords" },
  { title: "Classical Music & Flute", body: "Passionate about classical music and currently learning the flute — it keeps me calm and disciplined.", icon: "Music" },
  { title: "Animal Welfare (PAWS Club)", body: "Head of Social Media & Marketing for the college Animal Welfare Club — contributing to a cause I love.", icon: "PawPrint" },
];

export const MARQUEE = [
  "Python",
  "RAG",
  "LangChain",
  "Computer Vision",
  "Information Retrieval",
  "LLMs",
  "Flask",
  "TensorFlow",
  "Prompt Engineering",
  "FAISS",
];
