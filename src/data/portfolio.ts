import {
  Brain,
  Sparkles,
  Cloud,
  Code2,
  type LucideIcon,
} from 'lucide-react';

export const personal = {
  name: 'Maryam Milad Wahib',
  location: 'Cairo, Egypt',
  email: 'maryammilad41@gmail.com',
  phone: '+20 1063786863',
  github: 'https://github.com/maryam-milad',
  linkedin: 'https://linkedin.com/in/maryam-milad-wahib',
  tagline: 'AI Engineer | Machine Learning | Generative AI | Cloud',
  summary:
    'Computer Science graduate with a strong foundation in Python, Deep Learning, Cloud Computing, and Generative AI. Experienced through internships and hands-on projects in machine learning, NLP, Android development, Linux, virtualization, and cloud infrastructure. Passionate about building practical AI systems and learning how to deploy intelligent solutions into production.',
  heroSubtext:
    'Building intelligent systems, exploring Generative AI, and developing practical solutions across machine learning and cloud infrastructure.',
  availability: 'Open to AI & Cloud Engineering Opportunities',
};

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
];

export const journey = [
  { label: 'Computer Science', icon: Code2 },
  { label: 'Machine Learning', icon: Brain },
  { label: 'Deep Learning', icon: Brain },
  { label: 'Generative AI', icon: Sparkles },
  { label: 'Cloud / MLOps', icon: Cloud },
];

export const aboutPoints = [
  "Bachelor's degree in Computer Science from Arab Open University",
  'Strong Python foundation for ML and AI development',
  'Machine Learning and Deep Learning model development',
  'Generative AI — prompt engineering, RAG, and fine-tuning',
  'Natural Language Processing and Computer Vision',
  'Cloud Computing with Azure, virtualization, and networking',
  'Linux and VMware for infrastructure management',
  'MLOps concepts for deploying ML systems to production',
];

export interface ExperienceItem {
  company: string;
  role: string;
  dates: string;
  bullets: string[];
}

export const experiences: ExperienceItem[] = [
  {
    company: 'Raya RTU',
    role: 'Cloud Intern',
    dates: '09/2025 – Present',
    bullets: [
      'Practical experience with cloud infrastructure fundamentals',
      'Network configuration and virtualization',
      'Applied Cisco CCNA concepts to understand network protocols and security',
      'Managed and maintained virtualized environments using VMware',
      'Worked with resource allocation and system monitoring',
      'Developed proficiency in Linux / Red Hat operating systems for server management and scripting',
    ],
  },
  {
    company: 'EVA Pharma',
    role: 'Android Developer Intern',
    dates: '08/2023 – 10/2023',
    bullets: [
      'Developed and enhanced features for the Medsulto platform using Kotlin',
      'Improved user engagement by 15%',
      'Integrated APIs supporting continuous medical education resources',
      'Worked on application functionality and data flow',
    ],
  },
  {
    company: 'Orascom Construction',
    role: 'IT Intern',
    dates: '09/2022 – 10/2022',
    bullets: [
      'Supported IT infrastructure',
      'Gained exposure to enterprise-level hardware and software systems',
    ],
  },
  {
    company: 'Attijariwafa Bank',
    role: 'IT Intern',
    dates: '08/2022 – 09/2022',
    bullets: [
      'Assisted with IT infrastructure maintenance and troubleshooting',
      'Contributed to system stability and reliability',
    ],
  },
];

export interface Project {
  name: string;
  description: string;
  technologies: string[];
  achievement?: string;
  githubUrl?: string;
  visual: 'music' | 'chatbot' | 'parkinsons' | 'linux';
}

export const projects: Project[] = [
  {
    name: 'Music Generation with LSTM',
    description:
      'Implemented a music generation model using Python and LSTM networks to compose original music.',
    technologies: ['Python', 'LSTM', 'Deep Learning'],
    achievement: '85% stylistic consistency',
    visual: 'music',
  },
  {
    name: 'Medical AI Chatbot',
    description:
      'Created a medical chatbot using NLP techniques to provide preliminary health information and support, demonstrating conversational AI and data-handling capabilities.',
    technologies: ['Python', 'NLP', 'Conversational AI'],
    visual: 'chatbot',
  },
  {
    name: "Parkinson's Disease Prediction",
    description:
      'Built a machine learning model for the prediction and analysis of Parkinson\u2019s disease, demonstrating data preprocessing and classification techniques.',
    technologies: ['Python', 'Machine Learning', 'Data Preprocessing', 'Classification'],
    visual: 'parkinsons',
  },
  {
    name: 'Linux Automation & Administration',
    description:
      'A collection of shell scripts and configurations demonstrating practical Linux system administration and automation experience supporting Cloud Engineering workflows.',
    technologies: ['Linux', 'Shell Scripting', 'System Administration', 'Automation'],
    visual: 'linux',
  },
];

export interface SkillCategory {
  title: string;
  icon: LucideIcon;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: 'Machine Learning & AI',
    icon: Brain,
    skills: [
      'Python',
      'TensorFlow',
      'PyTorch',
      'Keras',
      'Computer Vision',
      'NLP',
      'Regression',
      'Classification',
      'Data Preprocessing',
      'Deep Learning',
    ],
  },
  {
    title: 'Generative AI',
    icon: Sparkles,
    skills: [
      'Prompt Engineering',
      'RAG',
      'Fine-Tuning',
      'LangChain',
      'Hugging Face',
      'LLMs',
      'Diffusion Models',
      'Gemini',
      'Google Vertex AI',
    ],
  },
  {
    title: 'Cloud & Infrastructure',
    icon: Cloud,
    skills: [
      'VMware',
      'Linux / Red Hat',
      'Azure',
      'Cloud Computing Fundamentals',
      'Virtualization',
      'Network Configuration',
      'CCNA Fundamentals',
      'System Monitoring',
    ],
  },
  {
    title: 'Data & Programming',
    icon: Code2,
    skills: [
      'Python',
      'Pandas',
      'NumPy',
      'Scikit-learn',
      'SQL',
      'Data Mining',
      'Data Visualization',
    ],
  },
];

export const education = {
  institution: 'Arab Open University',
  degree: "Bachelor's Degree in Computer Science",
  dates: '2019 – 2023',
  keyProject: 'AI Music Generation',
  keyProjectDesc:
    'Trained an LSTM model to compose original music, achieving 85% stylistic consistency.',
};

export interface Certification {
  title: string;
  issuer: string;
  level?: string;
  topics: string[];
}

export const certifications: Certification[] = [
  {
    title: 'AI',
    issuer: 'NTI-Huawei Egyptian Talents Academy',
    topics: [
      'LLMs',
      'GPT',
      'PaLM',
      'Diffusion Models',
      'Prompt Engineering',
      'Google Vertex AI',
      'Gemini API',
    ],
  },
  {
    title: 'AI & Machine Learning Foundations',
    issuer: 'SprintUp',
    topics: [
      'Scikit-learn',
      'TensorFlow',
      'Feature Engineering',
      'Capstone project addressing local industry challenges including Arabic NLP and agri-tech',
    ],
  },
  {
    title: 'Artificial Intelligence Fundamentals',
    issuer: 'IBM SkillsBuild',
    level: 'Intermediate Level',
    topics: [
      'AI fundamentals',
      'AI ethics',
      'Supervised learning',
      'Unsupervised learning',
      'Classification',
      'Clustering',
      'Healthcare applications',
    ],
  },
  {
    title: 'Microsoft Azure AI Fundamentals',
    issuer: 'Microsoft',
    topics: ['Azure AI services and concepts'],
  },
  {
    title: 'Machine Learning Engineering',
    issuer: 'Digital Egypt Pioneers Initiative',
    topics: [
      'Supervised learning',
      'Unsupervised learning',
      'Feature engineering',
      'Model evaluation',
      'CNNs',
      'RNNs',
      'TensorFlow',
      'PyTorch',
    ],
  },
  {
    title: '5-Day Generative AI Intensive Course',
    issuer: 'Google & Kaggle',
    topics: ['Generative AI', 'Ethical AI practices', 'Bias mitigation in generative models'],
  },
];

export const additionalExperience = {
  title: 'Beyond Technology',
  role: 'Art Guide',
  company: "Art D'egypte",
  dates: '09/2025 – 11/2025 | 2024',
  description:
    'Guided visitors through artworks and explained artistic concepts at Downtown Cairo and the Pyramids in both English and Arabic.',
  skills: ['Communication', 'Adaptability', 'Public speaking', 'English/Arabic communication', 'Cultural knowledge'],
};

export const softSkills = [
  'Critical Thinking',
  'Fast Learner',
  'Adaptability',
  'Emotional Intelligence',
  'Team Collaboration',
  'Problem Solving',
  'Flexibility',
];

export const languages = ['Arabic', 'English'];
