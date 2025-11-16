import React, { useState } from 'react';
import { Mail, Globe, ChevronDown, ChevronUp, Github, Linkedin, FileText, Brain, Briefcase, GraduationCap, Users, Code, Database, Wrench, BookOpen, LucideIcon } from 'lucide-react';

/*
 * ===================================================================
 * Main Application Component
 * ===================================================================
 * This single file contains the entire React application.
 * It uses functional components, hooks, and Tailwind CSS for styling.
 */

// --- Type Definitions ---

interface Link {
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
  links: Link[];
}

interface ActiveProject {
  title: string;
  description: string;
  points: string[];
}

interface CurrentRole {
  title: string;
  institution: string;
  location: string;
  date: string;
  duties: string[];
  activeProject: ActiveProject;
}

interface Education {
  degree: string;
  institution: string;
  location: string;
  date: string;
  gpa: string;
  thesis?: string;
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

interface RelatedExperience {
  title: string;
  institution: string;
  date: string;
  supervisor?: string;
  location?: string;
  points: string[];
}

interface Publication {
  title: string;
  authors: string;
  venue: string;
  link?: string;
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

interface PortfolioData {
  personalInfo: PersonalInfo;
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
      { name: "GitHub", url: "https://github.com/salirezav", icon: Github },
      { name: "LinkedIn", url: "https://www.linkedin.com/in/seyed-alireza-vaezi/", icon: Linkedin },
      { name: "Resume", url: "https://salirezav.github.io/Seyed%20Alireza%20Vaezi%20-%20Resume.pdf", icon: FileText }
    ]
  },
  currentRole: {
    title: "Post-Doctoral Research Associate, College of Engineering",
    institution: "University of Georgia",
    location: "Athens, Georgia",
    date: "June 2025 - Present",
    duties: [
      "Project Management",
      "Student Mentorship",
      "Proposal Development",
      "Research and Innovation",
      "Collaborating and Networking",
      "Publication and Dissemination"
    ],
    activeProject: {
      title: "Pecan Post-Harvest Control and Optimization - Funded by USDA",
      description: "My role involves developing solutions for incorporating computer vision to analyze the output of pecan processing machinery, enabling real-time quality control and automation.",
      points: [
        "Designed, developed, and deployed a full-stack vision system, including hardware integration and a custom management API.",
        "Spearheaded the collection of a large-scale video dataset for training robust deep learning models.",
        "Architected the framework for a closed-loop automation system to intelligently control and optimize machine parameters.",
        "Engineered a solution that accelerates the research lifecycle by automating data analysis.",
        "Presented 'AI Vision System and Automation Integration' research at the USDA Pecan Workshop 2025."
      ]
    }
  },
  education: [
    {
      degree: "Ph.D., Computer Science",
      institution: "University of Georgia",
      location: "Athens, Georgia",
      date: "Jan. 2019 - May. 2025",
      gpa: "3.74",
      thesis: '"From Specific to Universal: One Biomedical Image Segmentation Model to Rule Them All"'
    },
    {
      degree: "Master of Science., Information Technology Engineering",
      institution: "Iran University of Science and Technology",
      location: "Tehran, Iran",
      date: "Jan. 2013 - Feb. 2016",
      gpa: "3.06",
      thesis: '"Performance Evaluation of Live Migration of Virtual Machines with Secured Data-Plane"'
    },
    {
      degree: "Bachelor of Science., Information Technology Engineering",
      institution: "Azad University of Parand",
      location: "Tehran, Iran",
      date: "Sept. 2007 - Jun. 2012",
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
        { name: "React", level: "Intermediate" },
        { name: "React-Native", level: "Intermediate" },
        { name: "Android Studio", level: "Basic" },
        { name: "AngularJS", level: "Basic" },
      ]
    },
    {
      category: "Cluster, Cloud, Virtualization",
      icon: Users,
      skills: [
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
      category: "Machine Learning, Data Science",
      icon: Brain,
      skills: [
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
      category: "Microcontrollers",
      icon: Code,
      skills: [
        { name: "Arduino", level: "Advanced" },
        { name: "ESP", level: "Advanced" },
      ]
    }
  ],
  relatedExperience: [
    {
      title: "Research Assistant in Quinn Research Group",
      institution: "University of Georgia",
      date: "2024",
      supervisor: "Prof. Shannon Quinn",
      points: [
        "Developed a supervised cilia segmentation model by leveraging an unsupervised method to generate ground-truth labels.",
        "Developed a non-intrusive emotion recognition framework using facial expression recognition (FER) and emotional body posture recognition (EBPR) to assess workers' psychological states in IIoT-enabled manufacturing environments. A collaboration with Dr. Jaime Camelio's lab.",
        "Developed a computational model to analyze changes in mitochondrial morphology induced by infection with Mycobacterium marinum (Mmar)."
      ]
    },
    {
      title: "Research Assistant in Quinn Research Group",
      institution: "University of Georgia",
      date: "2023",
      supervisor: "Prof. Shannon Quinn",
      points: [
        "Configuring and setting up 'JupyterHub' on an on-premise cluster with NFS shared storage and LDAP authenticator.",
        "Configuring and setting up 'BinderHub' allowing students to create sharable, interactive, reproducible environments."
      ]
    },
    {
      title: "Research Assistant in Quinn Research Group",
      institution: "University of Georgia",
      date: "Spring 2022 - Fall 2022",
      supervisor: "Prof. Shannon Quinn",
      points: [
        "Setting up and running GitPod on the Rancher Kubernetes cluster for students.",
        "Setting up and running SeaFile as a shared space for academic work.",
        "Introduced 'TSeg', a Napari plugin that provides a variety of off-the-shelf segmentation algorithms. [GitHub]"
      ]
    },
    {
      title: "Research Assistant in Quinn Research Group",
      institution: "University of Georgia",
      date: "Summer and Fall 2021",
      supervisor: "Prof. Shannon Quinn",
      points: [
        "Set-up and configure Kubernetes on an on-premise cluster of 5 master and worker nodes using Rancher Kubernetes Engine (RKE) in a High Availability fashion.",
        "Set-up and configure Rancher on the on-premise cluster.",
        "Configured Nginx external load balancer for accessing Rancher server nodes.",
        "Set-up a private docker registry for custom made docker images."
      ]
    },
    {
      title: "Full-Stack Web Developer",
      institution: "Tehran Municipality ICT Organization",
      date: "Oct. 2016 - Feb. 2017",
      location: "Tehran, Iran",
      points: [
        "Enhanced and optimized the page-load speed and network utilization of the municipality's portal (http://www.Tehran.ir).",
        "Improved the UI and the UX of the portal for hand-held devices.",
        "Reformed and improved the development tools and code structure by implementing the latest front-end development tools.",
        "Instructed five employees to use the new development environment."
      ]
    }
  ],
  publications: [
    {
      title: "Multi-Layer Multi-Variable Value Stream Mapping: A Comprehensive Framework Across Operational, Environmental, and Social Layers with Integrated KPIs Interrelationships",
      authors: "Heydarzadeh, A; Rezaei, N; Vaezi, Seyed Alireza, et al.",
      venue: "(2024)-53rd SME North American Manufacturing Research Conference (NAMRC 53, 2025)",
      link: "https://www.sciencedirect.com/"
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
      link: "https://arxiv.org/"
    },
    {
      title: "Training a Supervised Cilia Segmentation Model from Self-Supervision",
      authors: "Vaezi, Seyed Alireza, et al.",
      venue: "Proceedings of the 23rd Python in Science Conference (SciPy 2024)",
      link: "https://www.researchgate.net/"
    },
    {
      title: "Decoding the Silent Language: A Framework for Advanced Visual Emotion Recognition to Enhance Worker Well-Being on IIoT-Enabled Manufacturing",
      authors: "Rezaei, Niloofar; Vaezi, Seyed Alireza, Jaime Camelio",
      venue: "(2024)-52nd SME North American Manufacturing Research Conference (NAMRC 52, 2024)",
      link: "https://www.sciencedirect.com/"
    },
    {
      title: "A Novel Pipeline for Cell Instance Segmentation, Tracking and Motility Classification of Toxoplasma Gondii in 3D Space",
      authors: "Vaezi, Seyed Alireza, et al.",
      venue: "Proceedings of the 21st Python in Science Conference (SCIPY 2022)",
      link: "https://www.researchgate.net/"
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


// --- Page-Specific Components ---

interface HeaderProps {
  info: PersonalInfo;
}

const Header: React.FC<HeaderProps> = ({ info }) => (
  <header className="bg-gray-800 text-white p-8 md:p-12 rounded-b-lg shadow-xl mb-12">
    <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between">
      {/* Profile Image - Placeholder */}
      <div className="flex-shrink-0 mb-6 md:mb-0 md:mr-8">
        <div className="w-32 h-32 md:w-40 md:h-40 bg-gray-600 rounded-full flex items-center justify-center border-4 border-gray-500">
          <span className="text-6xl md:text-7xl font-bold text-gray-300">AV</span>
        </div>
      </div>

      {/* Info */}
      <div className="flex-1 text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-bold mb-2">{info.name}</h1>
        <p className="text-xl text-gray-300 mb-6">Post-Doctoral Research Associate at the University of Georgia</p>

        {/* Contact Links */}
        <div className="flex flex-wrap justify-center md:justify-start gap-4">
          {info.links.map((link) => {
            const IconComponent = link.icon;
            return (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center bg-gray-700 hover:bg-blue-500 transition-colors duration-300 text-white font-medium py-2 px-4 rounded-lg shadow"
              >
                <IconComponent size={18} className="mr-2" />
                {link.name}
              </a>
            );
          })}
        </div>
      </div>
    </div>
  </header>
);

interface CurrentRoleProps {
  role: CurrentRole;
}

const CurrentRoleSection: React.FC<CurrentRoleProps> = ({ role }) => (
  <Section title="Current Role" icon={Briefcase}>
    <Card>
      <h3 className="text-2xl font-semibold text-gray-800">{role.title}</h3>
      <p className="text-lg text-gray-600 mb-1">{role.institution}</p>
      <p className="text-md text-gray-500 mb-4">{role.date} | {role.location}</p>

      <div className="mb-6">
        <h4 className="font-semibold text-gray-700 mb-3">Duties:</h4>
        <div className="flex flex-wrap gap-2">
          {role.duties.map(duty => <Tag key={duty} text={duty} colorClass="bg-blue-100 text-blue-800" />)}
        </div>
      </div>

      <div>
        <h4 className="font-semibold text-gray-700 mb-3">Active Project: {role.activeProject.title}</h4>
        <p className="text-gray-700 mb-4">{role.activeProject.description}</p>
        <ul className="list-disc list-inside space-y-2 text-gray-600">
          {role.activeProject.points.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      </div>
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
        {item.thesis && <p className="text-gray-700 italic">Thesis: {item.thesis}</p>}
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
      <Accordion key={index} title={item.title} subtitle={`${item.institution} | ${item.date}`}>
        <div className="p-4">
          {item.supervisor && <p className="text-md text-gray-600 mb-4">Under {item.supervisor}'s supervision</p>}
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            {item.points.map((point, pIndex) => (
              <li key={pIndex}>{point}</li>
            ))}
          </ul>
        </div>
      </Accordion>
    ))}
  </Section>
);

interface PublicationsProps {
  items: Publication[];
}

const Publications: React.FC<PublicationsProps> = ({ items }) => (
  <Section title="Publications" icon={BookOpen}>
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
              Read More &rarr;
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


// --- Main App Component ---

const App: React.FC = () => {
  const data = portfolioData;

  return (
    <div className="bg-gray-50 min-h-screen font-inter">
      <Header info={data.personalInfo} />

      <main className="max-w-5xl mx-auto p-4 md:p-8">
        <CurrentRoleSection role={data.currentRole} />
        <RelatedExperienceSection items={data.relatedExperience} />
        <TechnicalSkills skills={data.technicalSkills} />
        <Publications items={data.publications} />
        <EducationSection items={data.education} />
        <ClassProjects items={data.projects} />
        <TeachingSection items={data.teaching} />
      </main>

      <Footer name={data.personalInfo.name} />
    </div>
  );
};

export default App;
