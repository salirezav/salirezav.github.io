import React, { useState, useEffect, useRef } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { Mail, Globe, ChevronDown, ChevronUp, ChevronLeft, ChevronRight, Github, Linkedin, FileText, Brain, Briefcase, GraduationCap, Users, Code, Database, Wrench, BookOpen, LucideIcon } from 'lucide-react';
import Stories from './Stories';
import StoryDetail from './StoryDetail';

/*
 * ===================================================================
 * Main Application Component
 * ===================================================================
 * This single file contains the entire React application.
 * It uses functional components, hooks, and Tailwind CSS for styling.
 */

// --- Type Definitions ---

interface SocialLink {
  name: string;
  url: string;
  icon: LucideIcon;
}

interface PersonalInfo {
  name: string;
  email: string;
  phone: string;
  website: string;
  location: string;
  links: SocialLink[];
}

interface LabeledPoint {
  label: string;
  description: string;
}

interface ActiveProject {
  title: string;
  points: LabeledPoint[];
}

interface CurrentRole {
  title: string;
  institution: string;
  location: string;
  date: string;
  leadership: LabeledPoint[];
  principalDuties: LabeledPoint[];
  activeProject: ActiveProject;
  industryOutreach?: IndustryOutreach[];
}

interface Education {
  degree: string;
  institution: string;
  location: string;
  date: string;
  gpa: string;
  thesis?: string;
  advisor?: string;
}

type SkillLevel = 'Advanced' | 'Intermediate' | 'Basic';

interface Skill {
  name: string;
  level: SkillLevel;
}

interface SkillGroup {
  category: string;
  icon: LucideIcon;
  skills: Skill[];
}

interface ExperiencePeriod {
  date: string;
  points: string[];
}

interface RelatedExperience {
  title: string;
  institution: string;
  supervisor?: string;
  location?: string;
  department?: string;
  periods: ExperiencePeriod[];
}

interface Publication {
  title: string;
  authors: string;
  venue: string;
  link?: string;
  linkText?: string;
}

interface Project {
  title: string;
  course: string;
  date: string;
  points: string[];
}

interface Teaching {
  course: string;
  role: string;
  date: string;
}

interface IndustryOutreach {
  title: string;
  organization: string;
  location: string;
  date: string;
  role: string;
  topic: string;
  highlights?: string[];
  links?: { name: string; url: string }[];
  images?: { url: string; alt: string }[];
}

interface PortfolioData {
  personalInfo: PersonalInfo;
  bio: string;
  currentRole: CurrentRole;
  education: Education[];
  technicalSkills: SkillGroup[];
  relatedExperience: RelatedExperience[];
  publications: Publication[];
  projects: Project[];
  teaching: Teaching[];
}

// --- Data based on your resume ---

const portfolioData: PortfolioData = {
  personalInfo: {
    name: "Seyed Alireza Vaezi, PhD",
    email: "s.alireza.v@gmail.com",
    phone: "(470) 819-1137",
    website: "AlirezaVaezi.com",
    location: "Athens, Georgia",
    links: [
      { name: "Website", url: "https://AlirezaVaezi.com", icon: Globe },
      { name: "Email", url: "mailto:s.alireza.v@gmail.com", icon: Mail },
      { name: "UGA Email", url: "mailto:SeyedAlireza.Vaezi@uga.edu", icon: Mail },
      { name: "GitHub", url: "https://github.com/salirezav", icon: Github },
      { name: "LinkedIn", url: "https://www.linkedin.com/in/salirezav/", icon: Linkedin },
      { name: "Google Scholar", url: "https://scholar.google.com/citations?user=XT5XWLMAAAAJ&hl=en", icon: BookOpen }, // TODO: Replace YOUR_USER_ID with your actual Google Scholar user ID
      { name: "Resume", url: "https://salirezav.github.io/Seyed%20Alireza%20Vaezi%20-%20Resume.pdf", icon: FileText }
    ]
  },
  bio: "Dr. Seyed Alireza Vaezi is a Post-Doctoral Research Associate in the College of Engineering at the University of Georgia, where he also earned his Ph.D. in Computer Science. While his foundational research focused on applying computer vision and deep learning to multidimensional biomedical images and videos, his current work bridges the gap between theoretical AI and practical implementation for smart manufacturing and agricultural automation. He serves as the team coordinator and lead of the computer vision team for a USDA-funded pecan post-harvest optimization project, designing closed-loop automation systems for real-time quality control. In addition to his research, Dr. Vaezi mentors graduate students and actively partners with industry leaders to translate complex AI concepts into actionable corporate solutions.",
  currentRole: {
    title: "Post-Doctoral Research Associate",
    institution: "College of Engineering, University of Georgia",
    location: "Athens, Georgia",
    date: "June 2025 - Present",
    leadership: [
      {
        label: "Project Coordination",
        description: "Directed interdisciplinary research efforts and managed weekly meetings for the federally funded USDA Pecan Project ensuring technical milestones are met."
      },
      {
        label: "Industry Training & Knowledge Transfer",
        description: "Designed and delivered a specialized Computer Vision course for industry partners, translating complex AI concepts into actionable applications. Additionally, presented technical findings at the Annual USDA Pecan Workshop and the Southeastern Pecan Growers Association (SEPGA) Convention."
      },
      {
        label: "Outreach & Industry Engagement",
        description: "Bridged the gap between theoretical research and real-world deployment by conducting strategic site visits to corporate partners, including Southwire, Boehringer Ingelheim, and Label Source."
      }
    ],
    principalDuties: [
      {
        label: "Student Mentorship",
        description: "Guiding graduate students through complex research methodologies, experiment design, and academic writing, specifically supporting PhD candidates in robotics, computer vision, and AI."
      },
      {
        label: "Proposal Development",
        description: "Leading the drafting and strategic planning of competitive federal grant proposals, as well as collaborative initiatives with industry partners, to secure ongoing research funding."
      },
      {
        label: "Research and Innovation",
        description: "Developing novel computer vision and deep learning frameworks to advance smart manufacturing and agricultural automation, alongside building robust technical infrastructure to support researchers and students."
      },
      {
        label: "Publication and Dissemination",
        description: "Authoring high-impact papers and presenting technical findings at national conferences and academic workshops."
      }
    ],
    activeProject: {
      title: "Pecan Post-Harvest Control and Optimization – Funded by United States Department of Agriculture (USDA)",
      points: [
        {
          label: "System Architecture",
          description: "Architected a full-stack, closed-loop automation system featuring a custom REST API for seamless data acquisition and real-time hardware control."
        },
        {
          label: "Computer Vision Integration",
          description: "Developed and deployed automated computer vision solutions directly into pecan processing machinery to enable real-time quality control and defect detection."
        },
        {
          label: "Data Engineering & Deep Learning",
          description: "Spearheaded the collection of a large-scale video dataset and engineered automated analysis pipelines, laying the groundwork for robust deep learning models and significantly accelerating the research lifecycle."
        }
      ]
    },
    industryOutreach: [
      {
        title: "UGA Manufacturing Living Lab Pop-Up Course",
        organization: "University of Georgia",
        location: "Athens, GA",
        date: "November 18, 2025",
        role: "Lead Instructor",
        topic: "Computer Vision: From Pixels to Practical Applications",
        highlights: [
          "Led a 2.5-hour technical upskilling course for 21 manufacturing employees and STEM educators",
          "Hosted at the Price Industries Innovation Factory within the UGA I-STEM complex",
          "Provided hands-on training on computer vision fundamentals, deep learning, and embedded vision systems",
          "Participants included employees from Price Industries, Boehringer Ingelheim, King's Hawaiian, KUBOTA, Georgia Power, Southwire, and MP Equipment",
          "Educators from Clarke County, Gwinnett County, Monroe Area High School, and Barrow County Schools attended",
          "Each participant received a take-home embedded vision kit to continue exploring the technology"
        ],
        links: [
          {
            name: "LinkedIn Post",
            url: "https://www.linkedin.com/posts/uga-mll_computervision-objectdetection-digitalimaging-activity-7397752873926696960-zb-C?utm_source=share&utm_medium=member_desktop&rcm=ACoAAAo67RUBYMrFl-pthRl_Qs3nQnSFBcy76NQ"
          },
          {
            name: "Georgia AIM Article",
            url: "https://georgiaaim.org/manufacturers-educators-attend-uga-pop-up-class-on-computer-vision/"
          }
        ],
        images: [
          { url: "/images/cv_pop_up_course/1763761393608.jpg", alt: "Computer Vision Pop-Up Course - Workshop participants" },
          { url: "/images/cv_pop_up_course/1763761417741.jpg", alt: "Computer Vision Pop-Up Course - Training session" },
          { url: "/images/cv_pop_up_course/1763761438590.jpg", alt: "Computer Vision Pop-Up Course - Hands-on learning" },
          { url: "/images/cv_pop_up_course/1763761465666.jpg", alt: "Computer Vision Pop-Up Course - Participants working with embedded vision kits" },
          { url: "/images/cv_pop_up_course/1763761490523.jpg", alt: "Computer Vision Pop-Up Course - Interactive demonstration" },
          { url: "/images/cv_pop_up_course/1763761518808.jpg", alt: "Computer Vision Pop-Up Course - Workshop activities" },
          { url: "/images/cv_pop_up_course/1763761550998.jpg", alt: "Computer Vision Pop-Up Course - Training at Price Industries Innovation Factory" },
          { url: "/images/cv_pop_up_course/1763761580166.jpg", alt: "Computer Vision Pop-Up Course - Participants engaged in learning" },
          { url: "/images/cv_pop_up_course/1763761611686.jpg", alt: "Computer Vision Pop-Up Course - Embedded vision kit demonstration" },
          { url: "/images/cv_pop_up_course/1763761640518.jpg", alt: "Computer Vision Pop-Up Course - Workshop session" },
          { url: "/images/cv_pop_up_course/1763761668799.jpg", alt: "Computer Vision Pop-Up Course - Course conclusion and kit distribution" }
        ]
      }
    ]
  },
  education: [
    {
      degree: "Ph.D. in Computer Science",
      institution: "School of Computing, University of Georgia",
      location: "Athens, Georgia",
      date: "January 2019 – May 2025",
      gpa: "3.74",
      thesis: '"From Specific to Universal: One Biomedical Image Segmentation Model to Rule Them All"'
    },
    {
      degree: "Master of Science in Information Technology Engineering – Computer Networks",
      institution: "Iran University of Science and Technology",
      location: "Tehran, Iran",
      date: "January 2013 – February 2016",
      gpa: "3.06",
      thesis: '"Performance Evaluation of Live Migration of Virtual Machines with Secured Data-Plane"'
    },
    {
      degree: "Bachelor of Science in Information Technology Engineering",
      institution: "Azad University of Parand",
      location: "Tehran, Iran",
      date: "September 2007 – June 2012",
      gpa: "3.00"
    }
  ],
  technicalSkills: [
    {
      category: "Languages",
      icon: Code,
      skills: [
        { name: "Python", level: "Advanced" },
        { name: "Java", level: "Advanced" },
        { name: "C#", level: "Advanced" },
        { name: "JavaScript", level: "Advanced" },
        { name: "TypeScript", level: "Advanced" },
        { name: "HTML", level: "Advanced" },
        { name: "CSS", level: "Advanced" },
        { name: "Bash", level: "Advanced" },
        { name: "PowerShell", level: "Advanced" },
        { name: "Micro Python", level: "Intermediate" },
        { name: "C/C++", level: "Intermediate" },
        { name: "MATLAB", level: "Intermediate" },
        { name: "GoLang", level: "Basic" },
        { name: "Rust", level: "Basic" },
        { name: "Julia", level: "Basic" },
      ]
    },
    {
      category: "Databases",
      icon: Database,
      skills: [
        { name: "MS SQL Server", level: "Advanced" },
        { name: "MySQL", level: "Intermediate" },
        { name: "Arango DB", level: "Basic" },
        { name: "Raven DB", level: "Basic" },
      ]
    },
    {
      category: "Tools/Frameworks",
      icon: Wrench,
      skills: [
        { name: "Git", level: "Advanced" },
        { name: "ASP.NET MVC", level: "Advanced" },
        { name: "Spring MVC", level: "Advanced" },
        { name: "Napari", level: "Advanced" },
        { name: "REST API", level: "Advanced" },
        { name: "React", level: "Intermediate" },
        { name: "React-Native", level: "Intermediate" },
        { name: "Unit Testing", level: "Intermediate" },
        { name: "Android Studio", level: "Basic" },
        { name: "AngularJS", level: "Basic" },
      ]
    },
    {
      category: "Cluster, Cloud, Virtualization",
      icon: Users,
      skills: [
        { name: "Linux", level: "Advanced" },
        { name: "Kubernetes (K8S & K3S)", level: "Advanced" },
        { name: "JupyterHub", level: "Advanced" },
        { name: "BinderHub", level: "Advanced" },
        { name: "Docker", level: "Advanced" },
        { name: "RKE", level: "Intermediate" },
        { name: "K3Sup", level: "Intermediate" },
        { name: "DC/OS", level: "Basic" },
        { name: "Rancher", level: "Basic" },
        { name: "SeaFile", level: "Basic" },
      ]
    },
    {
      category: "Artificial Intelligence & Machine Learning",
      icon: Brain,
      skills: [
        { name: "AI/ML Pipelines", level: "Advanced" },
        { name: "(Self/Un) Supervised Learning", level: "Advanced" },
        { name: "NumPy", level: "Advanced" },
        { name: "Pandas", level: "Advanced" },
        { name: "SciPy", level: "Advanced" },
        { name: "Matplotlib", level: "Advanced" },
        { name: "TensorFlow", level: "Intermediate" },
        { name: "Keras", level: "Intermediate" },
        { name: "Pytorch (Lightning)", level: "Intermediate" },
        { name: "PyQT", level: "Intermediate" },
        { name: "U-Net", level: "Intermediate" },
      ]
    },
    {
      category: "Microcontrollers & Robotics",
      icon: Code,
      skills: [
        { name: "Arduino", level: "Advanced" },
        { name: "ESP32", level: "Advanced" },
        { name: "ROS", level: "Basic" },
      ]
    },
    {
      category: "Methodologies & Practices",
      icon: Wrench,
      skills: [
        { name: "Software Engineering", level: "Advanced" },
        { name: "Software Development", level: "Advanced" },
        { name: "Agile Methodologies", level: "Advanced" },
        { name: "Secure Communication", level: "Advanced" },
        { name: "CI/CD", level: "Advanced" },
        { name: "ML Frameworks", level: "Advanced" },
      ]
    }
  ],
  relatedExperience: [
    {
      title: "Graduate Research Assistant in Quinn Research Group",
      institution: "University of Georgia",
      location: "Athens, Georgia",
      supervisor: "Dr. Shannon Quinn",
      periods: [
        {
          date: "2021 - 2025",
          points: [
            "Developed a supervised cilia segmentation model by leveraging an unsupervised method to generate ground-truth labels. This work focused on automating segmentation tasks, particularly for microscopic cilia images.",
            "Developed a non-intrusive emotion recognition framework using facial expression recognition (FER) and Emotional Body Posture Recognition (EBPR) to assess workers' psychological states in Industrial IoT-enabled manufacturing environments. This research enhances worker well-being by identifying stress, fatigue, and cognitive load. A collaboration with Dr. Jaime Camelio's lab in the Department of Engineering, UGA.",
            "Developed a computational model to analyze changes in mitochondrial morphology induced by infection with Mycobacterium marinum (Mmar), a less virulent relative of Mycobacterium tuberculosis (Mtb)."
          ]
        },
        {
          date: "2024 & Spring 2025",
          points: [
            "Configuring and setting up \"JupyterHub\" on an on-premise cluster with NFS shared storage and LDAP authenticator allowing students at the University of Georgia to easily access a Jupyter environment for their projects and assignments.",
            "Configuring and setting up \"BinderHub\" allowing students at the University of Georgia to create sharable, interactive, reproducible environments from code repositories.",
            "Research and analysis on deep learning assisted detection of fusion and fission of mitochondria in microscopic images."
          ]
        },
        {
          date: "2023",
          points: [
            "Setting up and running GitPod on the Rancher Kubernetes cluster for students allowing them to spin up their desired development environment.",
            "Setting up and running SeaFile as a shared space for academic work and projects.",
            "Developed \"TSeg\", a Napari plugin that provides a variety of off-the-shelf segmentation algorithms allowing inexperienced users to perform analysis on microscopic cell images. [GitHub]"
          ]
        },
        {
          date: "Spring 2022 & Fall 2022",
          points: [
            "Set up and configured Kubernetes on an on-premise cluster of 5 master and worker nodes using Rancher Kubernetes Engine (RKE) in a High Availability fashion.",
            "Set up and configured Rancher on the on-premise cluster.",
            "Configured Nginx external load balancer for accessing Rancher server nodes for administrators.",
            "Set up a private docker registry for custom made docker images.",
            "The goal of this project was to allow students to request their desired pods equipped with machine learning or development."
          ]
        }
      ]
    },
    {
      title: "Full-Stack Web Developer",
      institution: "Tehran Municipality ICT Organization",
      location: "Tehran, Iran",
      department: "IT Department – Portal Section",
      periods: [
        {
          date: "October 2016 – February 2017",
          points: [
            "Enhanced and optimized the page-load speed and network utilization of the municipality's portal (http://www.Tehran.ir) by creating one custom lightweight JavaScript plugin encompassing all UI functionalities, reducing http requests from 60 to 14.",
            "Improved the UI and the UX of the portal for hand-held devices.",
            "Reformed and improved the development tools and code structure of the portal by implementing the latest front-end development tools and techniques in JavaScript.",
            "Instructed five employees to use the new development environment."
          ]
        }
      ]
    }
  ],
  publications: [
    {
      title: "Multi-Layer Multi-Variable Value Stream Mapping: A Comprehensive Framework Across Operational, Environmental, and Social Layers with Integrated KPIs Interrelationships",
      authors: "Heydarzadeh, A; Rezaei, N; Vaezi, Seyed Alireza, et al.",
      venue: "(2024)-53rd SME North American Manufacturing Research Conference (NAMRC 53, 2025)",
      link: "https://www.sciencedirect.com/",
      linkText: "ScienceDirect"
    },
    {
      title: "Smart Sensors, Smarter Workplaces: Multi-Modal Cognitive Load Assessment in Industry 4.0",
      authors: "Rezaei Niloofar; Vaezi, Seyed Alireza, et al.",
      venue: "(2025) IISE Annual Conference - [Publication Pending]"
    },
    {
      title: "Identifying Virulence Determinants in Pathogenic Mycobacteria Via Changes in Host Cell Mitochondrial Morphology",
      authors: "S. Quinn; A. Abbadi; Vaezi, Seyed Alireza",
      venue: "[arXiv]",
      link: "https://arxiv.org/",
      linkText: "arXiv"
    },
    {
      title: "Training a Supervised Cilia Segmentation Model from Self-Supervision",
      authors: "Vaezi, Seyed Alireza, et al.",
      venue: "Proceedings of the 23rd Python in Science Conference (SciPy 2024)",
      link: "https://www.researchgate.net/",
      linkText: "ResearchGate | SciPy"
    },
    {
      title: "Decoding the Silent Language: A Framework for Advanced Visual Emotion Recognition to Enhance Worker Well-Being on IIoT-Enabled Manufacturing",
      authors: "Rezaei, Niloofar; Vaezi, Seyed Alireza, Jaime Camelio",
      venue: "(2024)-52nd SME North American Manufacturing Research Conference (NAMRC 52, 2024)",
      link: "https://www.sciencedirect.com/",
      linkText: "ScienceDirect"
    },
    {
      title: "A Novel Pipeline for Cell Instance Segmentation, Tracking and Motility Classification of Toxoplasma Gondii in 3D Space",
      authors: "Vaezi, Seyed Alireza, et al.",
      venue: "Proceedings of the 21st Python in Science Conference (SCIPY 2022)",
      link: "https://www.researchgate.net/",
      linkText: "ResearchGate | SciPy"
    }
  ],
  projects: [
    {
      title: "HomeSense - Human Activity Patterns and Air Quality",
      course: "CPS8300 Principals of Cyber-Physical Systems (Collaboration with Niloofar Rezaei)",
      date: "Fall 2021",
      points: [
        "Set up ESP32 microcontrollers with sensors (temperature, humidity, light, infrared motion, air quality).",
        "Used MicroPython to program the microcontrollers."
      ]
    },
    {
      title: "Sartorius Cell Instance Segmentation - Kaggle Competition",
      course: "CSCI 6360 Data Science II",
      date: "Fall 2021",
      points: [
        "Cell instance segmentation of three neuronal cells using neural networks.",
        "Generated ground truth for model training from annotation using Julia.",
        "Used U-Net architecture with PyTorch."
      ]
    }
  ],
  teaching: [
    { course: "CSCI 4250/6250 Cybersecurity - Dr. Le Guan", role: "Grading projects and assignments on system security (stack/buffer overflow, AES, RSA) and helping students.", date: "Spring 2019, Summer 2020" },
    { course: "CSCI 1302 Software Development - Prof. Krzysztof J. Kochut", role: "Grading projects and assignments, and helping students in developing programs in Java.", date: "Summer 2019, Spring 2020" },
    { course: "CSCI 2720 Data Structures - Dr. Sachin Meena", role: "Grading and helping students with abstract data types, algorithm analysis, sorting, recursion.", date: "Fall 2019" },
    { course: "CSCI 4250/6250 Cybersecurity - Dr. Mustakimar Khandaker", role: "Grading projects and assignments on system security (stack/buffer overflow, return to libc attack, format string attack).", date: "Fall 2020" }
  ]
};

// --- Reusable Components ---

/**
 * A container for a major section of the portfolio.
 */
interface SectionProps {
  title: string;
  icon: LucideIcon;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ title, icon: Icon, children }) => (
  <section className="mb-12">
    <div className="flex items-center mb-6">
      <span className="text-blue-500 mr-3"><Icon size={28} strokeWidth={2} /></span>
      <h2 className="text-3xl font-bold text-gray-800">{title}</h2>
    </div>
    <div className="pl-10 border-l-4 border-blue-100">
      {children}
    </div>
  </section>
);

/**
 * A card component with a shadow and rounded corners.
 */
interface CardProps {
  children: React.ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = ({ children, className = '' }) => (
  <div className={`bg-white rounded-lg shadow-md p-6 mb-6 ${className}`}>
    {children}
  </div>
);

/**
 * An accordion component to toggle visibility of content.
 */
interface AccordionProps {
  title: string;
  subtitle: string;
  children: React.ReactNode;
}

const Accordion: React.FC<AccordionProps> = ({ title, subtitle, children }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="border border-gray-200 rounded-lg mb-4 shadow-sm overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center p-4 bg-gray-50 hover:bg-gray-100 transition-colors duration-200"
      >
        <span className="font-semibold text-lg text-gray-700">{title}</span>
        <div className="flex items-center">
          <span className="text-sm text-gray-500 mr-4">{subtitle}</span>
          {isOpen ? <ChevronUp size={20} className="text-gray-600" /> : <ChevronDown size={20} className="text-gray-600" />}
        </div>
      </button>
      {isOpen && (
        <div className="p-4 border-t border-gray-200 bg-white">
          {children}
        </div>
      )}
    </div>
  );
};

/**
 * A pill-shaped tag component.
 */
interface TagProps {
  text: string;
  colorClass?: string;
}

const Tag: React.FC<TagProps> = ({ text, colorClass = 'bg-gray-100 text-gray-700' }) => (
  <span className={`inline-block rounded-full px-3 py-1 text-sm font-medium ${colorClass} mr-2 mb-2`}>
    {text}
  </span>
);

/**
 * A skill bar component to visually represent skill level.
 */
interface SkillBarProps {
  name: string;
  level: SkillLevel;
}

const SkillBar: React.FC<SkillBarProps> = ({ name, level }) => {
  const levelMap: Record<SkillLevel, { width: string; color: string }> = {
    'Advanced': { width: 'w-full', color: 'bg-blue-500' },
    'Intermediate': { width: 'w-2/3', color: 'bg-blue-400' },
    'Basic': { width: 'w-1/3', color: 'bg-blue-300' }
  };
  const { width, color } = levelMap[level] || levelMap['Basic'];

  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-base font-medium text-gray-700">{name}</span>
        <span className="text-sm font-medium text-gray-500">{level}</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5">
        <div className={`h-2.5 rounded-full ${color} ${width}`} style={{ transition: 'width 0.5s ease-in-out' }}></div>
      </div>
    </div>
  );
};

/**
 * An image carousel component for displaying multiple images.
 */
interface ImageCarouselProps {
  images: { url: string; alt: string }[];
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  if (images.length === 0) return null;

  return (
    <div className="mt-4 mb-4">
      <h6 className="text-sm font-semibold text-gray-700 mb-3">Gallery:</h6>
      <div className="relative w-full">
        {/* Main Image Container */}
        <div className="relative w-full h-64 md:h-80 rounded-lg overflow-hidden bg-gray-100 shadow-md flex items-center justify-center">
          <img
            src={images[currentIndex].url}
            alt={images[currentIndex].alt}
            className="max-w-full max-h-full object-contain"
          />

          {/* Navigation Buttons */}
          {images.length > 1 && (
            <>
              <button
                onClick={goToPrevious}
                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg transition-all duration-200 hover:scale-110"
                aria-label="Previous image"
              >
                <ChevronLeft size={20} className="text-gray-700" />
              </button>
              <button
                onClick={goToNext}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg transition-all duration-200 hover:scale-110"
                aria-label="Next image"
              >
                <ChevronRight size={20} className="text-gray-700" />
              </button>
            </>
          )}

          {/* Image Counter */}
          {images.length > 1 && (
            <div className="absolute bottom-2 right-2 bg-black/60 text-white text-xs px-2 py-1 rounded">
              {currentIndex + 1} / {images.length}
            </div>
          )}
        </div>

        {/* Thumbnail Navigation */}
        {images.length > 1 && (
          <div className="flex gap-2 mt-3 overflow-x-auto pb-2">
            {images.map((image, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all duration-200 ${index === currentIndex
                  ? 'border-green-500 shadow-md scale-105'
                  : 'border-gray-200 hover:border-green-300 opacity-70 hover:opacity-100'
                  }`}
                aria-label={`Go to image ${index + 1}`}
              >
                <img
                  src={image.url}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

// --- Page-Specific Components ---

const PROFILE_HEADLINE = 'Post-Doctoral Research Associate at the University of Georgia';

interface ContactLinksProps {
  links: SocialLink[];
  compact?: boolean;
}

const ContactLinks: React.FC<ContactLinksProps> = ({ links, compact = false }) => (
  <div className={`flex flex-wrap ${compact ? 'gap-1.5' : 'justify-center md:justify-start gap-4'}`}>
    {links.map((link) => {
      const IconComponent = link.icon;
      return (
        <a
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`flex items-center bg-gray-700 hover:bg-blue-500 transition-colors duration-300 text-white font-medium rounded-lg shadow whitespace-nowrap ${
            compact ? 'text-xs py-1.5 px-2.5' : 'py-2 px-4'
          }`}
        >
          <IconComponent size={compact ? 14 : 18} className={compact ? 'mr-1' : 'mr-2'} />
          {link.name}
        </a>
      );
    })}
  </div>
);

interface StickyNavbarProps {
  info: PersonalInfo;
  visible: boolean;
}

const StickyNavbar: React.FC<StickyNavbarProps> = ({ info, visible }) => (
  <nav
    aria-hidden={!visible}
    className={`fixed top-0 left-0 right-0 z-50 bg-gray-800 text-white shadow-xl border-b border-gray-700 transition-transform duration-300 ease-in-out ${
      visible ? 'translate-y-0' : '-translate-y-full pointer-events-none'
    }`}
  >
    <div className="w-full px-4 md:px-8 lg:px-12 py-2.5">
      <div className="flex items-center gap-3 md:gap-4 mb-2">
        <img
          src="/me22.png"
          alt=""
          className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover border-2 border-gray-500 flex-shrink-0"
        />
        <div className="min-w-0 flex-1">
          <p className="font-bold text-xs sm:text-sm md:text-base leading-tight">{info.name}</p>
          <p className="text-[10px] sm:text-xs text-gray-300 leading-snug">{PROFILE_HEADLINE}</p>
        </div>
      </div>
      <ContactLinks links={info.links} compact />
    </div>
  </nav>
);

interface HeaderProps {
  info: PersonalInfo;
}

const Header: React.FC<HeaderProps> = ({ info }) => {
  const location = useLocation();
  const isStoriesPage = location.pathname.startsWith('/stories');
  const headerRef = useRef<HTMLDivElement>(null);
  const [showStickyNav, setShowStickyNav] = useState(false);

  useEffect(() => {
    const header = headerRef.current;
    if (!header) return;

    const observer = new IntersectionObserver(
      ([entry]) => setShowStickyNav(!entry.isIntersecting),
      { threshold: 0 }
    );

    observer.observe(header);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <StickyNavbar info={info} visible={showStickyNav} />
      <div ref={headerRef}>
        <header className="bg-gray-800 text-white p-8 md:p-12 rounded-b-lg shadow-xl mb-12">
          <div className="max-w-5xl mx-auto">
            {/* Navigation */}
            <nav className="mb-6 flex justify-center md:justify-between items-center">
              <div className="flex gap-4">
                <Link
                  to="/"
                  className={`px-4 py-2 rounded-lg transition-colors duration-300 ${!isStoriesPage
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-700 hover:bg-gray-600 text-white'
                    }`}
                >
                  Portfolio
                </Link>
                <Link
                  to="/stories"
                  className={`px-4 py-2 rounded-lg transition-colors duration-300 ${isStoriesPage
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-700 hover:bg-gray-600 text-white'
                    }`}
                >
                  <BookOpen size={18} className="inline mr-2" />
                  Stories
                </Link>
              </div>
              <a
                href="https://alirezavaezi.com/USDA-360-virtual-tour"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-lg transition-colors duration-300 bg-gray-700 hover:bg-gray-600 text-white"
              >
                USDA 360° Tour
              </a>
            </nav>

            <div className="flex flex-col md:flex-row items-center justify-between">
              {/* Profile Image */}
              <div className="flex-shrink-0 mb-6 md:mb-0 md:mr-8">
                <img
                  src="/me22.png"
                  alt="Profile"
                  className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-gray-500"
                />
              </div>

              {/* Info */}
              <div className="flex-1 text-center md:text-left">
                <h1 className="text-4xl md:text-5xl font-bold mb-2">{info.name}</h1>
                <p className="text-xl text-gray-300 mb-6">{PROFILE_HEADLINE}</p>
                <ContactLinks links={info.links} />
              </div>
            </div>
          </div>
        </header>
      </div>
    </>
  );
};

interface CurrentRoleProps {
  role: CurrentRole;
}

interface BioSectionProps {
  bio: string;
}

const BioSection: React.FC<BioSectionProps> = ({ bio }) => (
  <Section title="Bio" icon={BookOpen}>
    <Card>
      <p className="text-gray-700 leading-relaxed">{bio}</p>
    </Card>
  </Section>
);

const LabeledBulletList: React.FC<{ items: LabeledPoint[] }> = ({ items }) => (
  <ul className="list-disc list-inside space-y-2 text-gray-600">
    {items.map((item, index) => (
      <li key={index}>
        <span className="font-semibold text-gray-700">{item.label}:</span> {item.description}
      </li>
    ))}
  </ul>
);

const CurrentRoleSection: React.FC<CurrentRoleProps> = ({ role }) => (
  <Section title="Current Role" icon={Briefcase}>
    <Card>
      <h3 className="text-2xl font-semibold text-gray-800">{role.title}</h3>
      <p className="text-lg text-gray-600 mb-1">{role.institution}</p>
      <p className="text-md text-gray-500 mb-6">{role.date} | {role.location}</p>

      <div className="mb-6">
        <h4 className="font-semibold text-gray-700 mb-3">Leadership & Project Management:</h4>
        <LabeledBulletList items={role.leadership} />
      </div>

      <div className="mb-6">
        <h4 className="font-semibold text-gray-700 mb-3">Principal Duties & Strategic Impact:</h4>
        <LabeledBulletList items={role.principalDuties} />
      </div>

      <div>
        <h4 className="font-semibold text-gray-700 mb-3">Active Projects:</h4>
        <p className="text-gray-800 font-medium mb-3">{role.activeProject.title}</p>
        <LabeledBulletList items={role.activeProject.points} />
      </div>

      {/* Industry Outreach — kept in data for possible restore; not on resume
      {role.industryOutreach && role.industryOutreach.length > 0 && (
        ...
      )}
      */}
    </Card>
  </Section>
);

interface EducationProps {
  items: Education[];
}

const EducationSection: React.FC<EducationProps> = ({ items }) => (
  <Section title="Education" icon={GraduationCap}>
    {items.map((item, index) => (
      <Card key={index} className="border-l-4 border-blue-500">
        <h3 className="text-xl font-semibold text-gray-800">{item.degree}</h3>
        <p className="text-lg text-gray-600">{item.institution}</p>
        <p className="text-sm text-gray-500 mb-2">{item.date} | {item.location} | GPA: {item.gpa}</p>
        {item.thesis && <p className="text-gray-700 italic">Thesis title: {item.thesis}</p>}
      </Card>
    ))}
  </Section>
);

interface TechnicalSkillsProps {
  skills: SkillGroup[];
}

const TechnicalSkills: React.FC<TechnicalSkillsProps> = ({ skills }) => (
  <Section title="Technical Skills" icon={Brain}>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {skills.map((group) => {
        const IconComponent = group.icon;
        return (
          <Card key={group.category} className="flex-1">
            <div className="flex items-center mb-4">
              <span className="text-blue-500 mr-2"><IconComponent size={20} /></span>
              <h3 className="text-xl font-semibold text-gray-800">{group.category}</h3>
            </div>
            <div>
              {group.skills.map(skill => (
                <SkillBar key={skill.name} name={skill.name} level={skill.level} />
              ))}
            </div>
          </Card>
        );
      })}
    </div>
  </Section>
);

interface RelatedExperienceProps {
  items: RelatedExperience[];
}

const RelatedExperienceSection: React.FC<RelatedExperienceProps> = ({ items }) => (
  <Section title="Related Experience" icon={Briefcase}>
    {items.map((item, index) => (
      <Accordion
        key={index}
        title={item.title}
        subtitle={`${item.institution}${item.location ? `, ${item.location}` : ''}`}
      >
        <div className="p-4">
          {item.supervisor && <p className="text-md text-gray-600 mb-4">Under the Direction of {item.supervisor}</p>}
          {item.department && <p className="text-md text-gray-600 mb-4">{item.department}</p>}
          {item.periods.map((period, pIndex) => (
            <div key={pIndex} className={pIndex > 0 ? 'mt-6 pt-4 border-t border-gray-200' : ''}>
              <p className="text-sm font-semibold text-gray-500 mb-3">{period.date}</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                {period.points.map((point, pointIndex) => (
                  <li key={pointIndex}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Accordion>
    ))}
  </Section>
);

interface PublicationsProps {
  items: Publication[];
}

const Publications: React.FC<PublicationsProps> = ({ items }) => (
  <Section title="Academic Publications" icon={BookOpen}>
    <div className="space-y-6">
      {items.map((item, index) => (
        <Card key={index}>
          <h3 className="text-lg font-semibold text-gray-800 mb-1">{item.title}</h3>
          <p className="text-sm text-gray-600 mb-2">{item.authors}</p>
          <p className="text-sm text-gray-500 mb-3 italic">{item.venue}</p>
          {item.link && (
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 hover:underline font-medium text-sm transition-colors"
            >
              {item.linkText || "Read More"} &rarr;
            </a>
          )}
        </Card>
      ))}
    </div>
  </Section>
);

interface ClassProjectsProps {
  items: Project[];
}

const ClassProjects: React.FC<ClassProjectsProps> = ({ items }) => (
  <Section title="Class Projects" icon={Code}>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {items.map((item, index) => (
        <Card key={index}>
          <h3 className="text-xl font-semibold text-gray-800">{item.title}</h3>
          <p className="text-md text-gray-500 mb-3">{item.course} ({item.date})</p>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            {item.points.map((point, pIndex) => (
              <li key={pIndex}>{point}</li>
            ))}
          </ul>
        </Card>
      ))}
    </div>
  </Section>
);

interface TeachingProps {
  items: Teaching[];
}

const TeachingSection: React.FC<TeachingProps> = ({ items }) => (
  <Section title="Teaching Assistantship" icon={Users}>
    <div className="space-y-4">
      {items.map((item, index) => (
        <Card key={index} className="border-l-4 border-gray-300">
          <h3 className="font-semibold text-gray-800">{item.course}</h3>
          <p className="text-sm text-gray-500 mb-2">{item.date}</p>
          <p className="text-gray-700">{item.role}</p>
        </Card>
      ))}
    </div>
  </Section>
);

interface FooterProps {
  name: string;
}

const Footer: React.FC<FooterProps> = ({ name }) => (
  <footer className="bg-gray-800 text-gray-300 p-8 mt-12 rounded-t-lg">
    <div className="max-w-5xl mx-auto text-center">
      <p>&copy; {new Date().getFullYear()} {name}. All rights reserved.</p>
      <p className="text-sm text-gray-400 mt-2">Built with React & Tailwind CSS.</p>
    </div>
  </footer>
);


// --- Home Page Component ---

const Home: React.FC = () => {
  const data = portfolioData;

  return (
    <>
      <main className="max-w-5xl mx-auto p-4 md:p-8">
        <BioSection bio={data.bio} />
        <EducationSection items={data.education} />
        <CurrentRoleSection role={data.currentRole} />
        <TechnicalSkills skills={data.technicalSkills} />
        <RelatedExperienceSection items={data.relatedExperience} />
        <Publications items={data.publications} />
        {/* <ClassProjects items={data.projects} /> */}
        {/* <TeachingSection items={data.teaching} /> */}
      </main>
      <Footer name={data.personalInfo.name} />
    </>
  );
};

// --- Main App Component ---

const App: React.FC = () => {
  const data = portfolioData;

  return (
    <div className="bg-gray-50 min-h-screen font-inter">
      <Header info={data.personalInfo} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/stories" element={<Stories />} />
        <Route path="/stories/:id" element={<StoryDetail />} />
      </Routes>
    </div>
  );
};

export default App;
