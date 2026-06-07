export const PORTFOLIO_DATA = {
  profile: {
    name: "Amir Masoud Aghaei",
    role: "AI/ML Engineer",
    tagline: "Python · Deep Learning · NLP",
    education: "Masters @ UNIBO",
    mission: "Curious and driven AI Master's student targeting an AI/ML Engineer position.",
    location: "Bologna, Italy",
    status: "Seeking AI/ML Roles",
    coreStack: ["Python", "PyTorch", "TensorFlow", "Transformers", "LangChain"],
    yearsExperience: "2+",
    projectCount: "6+",
  },
  projects: [
    {
      title: "Explainable ECtHR Legal Outcome Prediction",
      description: "Two-stage pipeline fine-tuning LegalBERT for premise extraction. Trained SVM/DT/EBM classifiers for multi-label violation prediction with high explainability via weight vector attribution.",
      tags: ["NLP", "PyTorch", "Transformers", "AWS SageMaker"],
      github: "https://github.com/Aghaei-Amirmasoud/explainable_by_design_ecthr_a"
    },
    {
      title: "Sexism Detection on Social Media",
      description: "4-class sexism classification on English tweets using majority-voting label aggregation. Compared BiLSTM against fine-tuned Transformers (Twitter-RoBERTa, BERTweet) for domain-specific detection.",
      tags: ["Transformers", "TensorFlow", "PyTorch"],
      github: "https://github.com/Aghaei-Amirmasoud/NLP_Sexisim_Detection_Task1"
    },
    {
      title: "Book Instance Detection on Shelves",
      description: "Built a multi-instance book detection pipeline using SIFT keypoints, FLANN matching, and RANSAC homography estimation with iterative masked detection.",
      tags: ["Computer Vision", "OpenCV", "NumPy"],
      github: "https://github.com/Aghaei-Amirmasoud/product_recognition_of_books"
    },
    {
      title: "Pet Breed Classification",
      description: "Designed a custom 4-block CNN (PetNet) from scratch and fine-tuned ResNet-18 with progressive layer unfreezing against a 37-class pet breed classification task.",
      tags: ["Computer Vision", "PyTorch", "ResNet-18"],
      github: "https://github.com/Aghaei-Amirmasoud/pet_classification"
    },
    {
      title: "Sports Tournament Scheduling",
      description: "Modeled NP-complete round-robin tournament scheduling under CP, SAT, SMT, and MIP paradigms with symmetry-breaking and redundant propagation strategies.",
      tags: ["MiniZinc", "Z3", "Combinatorial Opt."],
      github: "https://github.com/Aghaei-Amirmasoud/CDMO_Proj"
    },
    {
      title: "Urban Transit Network Analysis",
      description: "Modeled Milan and Barcelona transit networks to compute SNA metrics, evaluating global efficiency, modularity, and resilience against betweenness attacks.",
      tags: ["NetworkX", "Pandas", "SNA"],
      github: "https://github.com/omiid-n99/barcelona-milan-transit-network-analysis"
    }
  ],
  experience: [
    {
      role: "Web Designer",
      company: "ApplyClub",
      location: "Remote",
      date: "2024 - 2025",
      description: [
        "Built and managed applyclub.com using WordPress, focusing on high performance and scalability.",
        "Developed complex features (Faculty Finder, Fundraising) using JetEngine for dynamic listings and advanced filtering.",
        "Enhanced UI/UX by implementing tailored HTML5, CSS3, and PHP code to extend plugin functionalities.",
        "Designed professional brand assets (Photoshop/Illustrator) and managed video content production."
      ],
      tags: ["WordPress", "HTML5", "CSS3", "PHP", "JetEngine", "Photoshop", "Illustrator"]
    },
    {
      role: "Web Designer & CRM Manager",
      company: "Mehraein Mokhberi Consulting Firm",
      location: "Tehran, Iran",
      date: "2023 - 2024",
      description: [
        "Designed and developed company website utilizing Elementor page builder, CSS, HTML5, and Adobe Photoshop for graphic content.",
        "Successfully designed the drmokhberi.com website, enhancing its user experience and visual appeal.",
        "Managed CRM operations, ensuring effective communication and relationships with clients."
      ],
      tags: ["Elementor", "HTML5", "CSS", "Photoshop", "CRM"]
    }
  ],
  education: [
    {
      degree: "Master in Artificial Intelligence",
      university: "Università di Bologna",
      location: "Bologna, Italy",
      date: "2024 - Present",
      description: [
        "CGPA: 26.9/30 (so far)"
      ],
      tags: ["AI", "Machine Learning", "Deep Learning", "NLP"]
    },
    {
      degree: "B.Sc. in Computer Science",
      university: "University of Tehran",
      location: "Tehran, Iran",
      date: "2018 - 2023",
      description: [
        "CGPA: 3.14/4"
      ],
      tags: ["Computer Science", "Algorithms", "Mathematics"]
    }
  ],
  certificates: [
    {
      title: "The AI Engineer Course: Complete AI Engineer Bootcamp",
      issuer: "Udemy / 365 Careers",
      date: "2026",
      description: [
        "AI principles and practical applications",
        "Natural Language Processing in Python",
        "Large Language Models and Transformers",
        "Developing apps with orchestration tools like LangChain and LangGraph",
        "Retrieval-Augmented Generation Applications",
        "Vector databases using PineCone",
        "Creating AI-driven applications"
      ],
      link: "https://www.udemy.com/certificate/UC-b819a07d-c960-4f8d-9f50-eedb3d375fe3/"
    }
  ],
  skills: [
    {
      category: "Languages",
      items: ["Python", "C++"],
      icon: "variable"
    },
    {
      category: "ML / DL",
      items: ["PyTorch", "TensorFlow", "Scikit-Learn", "HuggingFace", "Transformers", "Tokenizers", "Embedding Models", "Whisper"],
      icon: "brain"
    },
    {
      category: "GenAI / LLMs",
      items: ["LangChain", "LangGraph", "RAG", "OpenAI API", "Vector Databases", "Prompt Engineering"],
      icon: "sparkles"
    },
    {
      category: "MLOps & Tools",
      items: ["Git", "Linux", "Docker", "Streamlit", "LaTeX"],
      icon: "server"
    },
    {
      category: "Web",
      items: ["HTML5", "CSS", "WordPress", "Jet Engine", "Elementor"],
      icon: "layout"
    },
    {
      category: "Human Languages",
      items: ["Persian (Native)", "English (TOEFL 97: R26 L27 W22 S22)", "Italiano (A2.1)"],
      icon: "globe"
    }
  ]
};
