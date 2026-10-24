import {
  Mail, Globe, Github, Linkedin, FileText, Brain, Code, Database, Wrench, BookOpen, Users,
  GraduationCap,
} from 'lucide-react';
import { PortfolioData } from '../types/portfolio';

export const portfolioData: PortfolioData = {
  personalInfo: {
    name: 'Seyed Alireza Vaezi, PhD',
    email: 's.alireza.v@gmail.com',
    phone: '(929) 356-5315',
    website: 'AlirezaVaezi.com',
    location: 'Athens, Georgia',
    links: [
      { name: 'Website', url: 'https://AlirezaVaezi.com', icon: Globe },
      { name: 'Email', url: 'mailto:s.alireza.v@gmail.com', icon: Mail },
      { name: 'UGA Email', url: 'mailto:SeyedAlireza.Vaezi@uga.edu', icon: GraduationCap },
      { name: 'GitHub', url: 'https://github.com/salirezav', icon: Github },
      { name: 'LinkedIn', url: 'https://www.linkedin.com/in/salirezav/', icon: Linkedin },
      { name: 'Google Scholar', url: 'https://scholar.google.com/citations?user=XT5XWLMAAAAJ&hl=en', icon: BookOpen },
      { name: 'Resume', url: '/Seyed-Alireza-Vaezi-Resume.pdf', icon: FileText },
    ],
  },
  bio: 'Dr. Seyed Alireza Vaezi is a Computer Vision & Machine Learning Scientist and a Postdoctoral Research Associate in the College of Engineering at the University of Georgia. He coordinates a USDA-funded pecan post-harvest project, where he added automated, event-triggered video acquisition to an existing IIoT line and supplied the camera and data pipeline for the team\'s YOLO model. This work lays the groundwork for closed-loop automated process control. Where labeled data is scarce, he trains segmentation models on pseudo-labels from unsupervised and self-supervised methods, and he built TSeg, a Napari plugin that offers off-the-shelf segmentation algorithms for microscopic images. He also delivers computer vision training for industry partners.',
  currentRole: {
    title: 'Postdoctoral Research Associate',
    institution: 'College of Engineering, University of Georgia',
    location: 'Athens, Georgia',
    date: 'June 2025 - Present',
    leadership: [
      {
        label: 'Project Coordination',
        description: 'Coordinates the interdisciplinary USDA pecan project team of 10 graduate students, leading weekly meetings and tracking technical milestones.',
      },
      {
        label: 'Industry Training & Knowledge Transfer',
        description: 'Designed and delivered a specialized Computer Vision course for industry partners, translating complex AI concepts into actionable applications. Presented technical findings at the Pecan Post-Harvest Research Workshop and the Southeastern Pecan Growers Association (SEPGA) Convention.',
      },
      {
        label: 'Outreach & Industry Engagement',
        description: 'Bridged the gap between theoretical research and real-world deployment by conducting strategic site visits to corporate partners, including Southwire, Boehringer Ingelheim, and Label Source.',
      },
    ],
    principalDuties: [
      {
        label: 'Student Mentorship',
        description: 'Mentoring 5 Ph.D. students and 2 master\'s students across robotic navigation, generative CAD, 3D vision, and engineering experiment design.',
      },
      {
        label: 'Proposal Development',
        description: 'Leading the drafting and strategic planning of competitive federal grant proposals, as well as collaborative initiatives with industry partners, to secure ongoing research funding.',
      },
      {
        label: 'Research and Innovation',
        description: 'Developing novel computer vision and deep learning frameworks to advance smart manufacturing and agricultural automation, alongside building robust technical infrastructure to support researchers and students.',
      },
      {
        label: 'Publication and Dissemination',
        description: 'Authoring high-impact papers and presenting technical findings at national conferences and academic workshops.',
      },
    ],
    activeProject: {
      title: 'Pecan Post-Harvest Control and Optimization – Funded by United States Department of Agriculture (USDA)',
      points: [
        {
          label: 'Automated Data Acquisition',
          description: 'Integrated event-triggered video acquisition into an existing IIoT-instrumented processing line. A FastAPI service records camera streams from MQTT machine-state events during cracking and shelling.',
        },
        {
          label: 'Computer Vision Integration',
          description: 'Integrated cameras and lighting for in-line inspection of pecan cracking and shelling, supplying the camera and data pipeline for the team\'s YOLO model. Live overlays reach over 90% per-class accuracy at 8–12 FPS. The in-line vision integration, live yield estimation, and crack segmentation and classification methods are the subject of an invention disclosure submitted to UGA.',
        },
        {
          label: 'Data & Annotation',
          description: 'Built a dataset of about 200 processing-run videos and an in-house annotation and pseudo-labeling tool. On a set of about 1,500 videos, that workflow cut estimated annotation from about 15,000 hours to about 30 minutes. The resulting models monitor output quality, laying the groundwork for closed-loop automated process control.',
        },
      ],
    },
    industryOutreach: [
      {
        title: 'Pecan Post-Harvest Research Workshop 2026',
        organization: 'University of Georgia College of Engineering',
        location: 'Athens, GA',
        date: 'August 19–20, 2026',
        role: 'Presenter & Live Demo Lead',
        topic: 'Computer Vision for Pecan Cracking and Shelling',
        highlights: [
          'Presented our USDA-funded computer vision work for pecan cracking and shelling to nearly 120 growers, shellers, equipment makers, and researchers',
          'Covered automated video capture on an instrumented processing line, plus annotation and pseudo-labeling tooling that sharply reduces labeling time',
          "Showed how the team's detection model tracks the half-to-full yield ratio as a live process metric",
          'Ran live, real-time segmentation demos on a benchtop camera rig during the lab tour',
        ],
        links: [
          {
            name: 'Pecan South Article',
            url: 'https://www.pecansouthmagazine.com/magazine/article/innovation-at-the-pecan-post-harvest-research-workshop/',
          },
          {
            name: 'Workshop Page',
            url: 'https://pecanresearch.uga.edu/2026-workshop/',
          },
        ],
        images: [
          { url: '/images/pecan_workshop_2026/pecan-workshop-2026-1.jpg', alt: 'Pecan Post-Harvest Research Workshop 2026 - Presenting the motivation and roadmap' },
          { url: '/images/pecan_workshop_2026/pecan-workshop-2026-2.jpg', alt: 'Pecan Post-Harvest Research Workshop 2026 - Presenting live pecan detection results' },
          { url: '/images/pecan_workshop_2026/pecan-workshop-2026-3.jpg', alt: 'Pecan Post-Harvest Research Workshop 2026 - Live real-time segmentation demo' },
          { url: '/images/pecan_workshop_2026/pecan-workshop-2026-4.jpg', alt: 'Pecan Post-Harvest Research Workshop 2026 - Explaining the live demo output' },
          { url: '/images/pecan_workshop_2026/pecan-workshop-2026-5.jpg', alt: 'Pecan Post-Harvest Research Workshop 2026 - Lab tour attendees at the benchtop camera rig' },
          { url: '/images/pecan_workshop_2026/pecan-workshop-2026-6.jpg', alt: 'Pecan Post-Harvest Research Workshop 2026 - Annotation and pseudo-labeling workflow' },
        ],
      },
      {
        title: 'UGA Manufacturing Living Lab Pop-Up Course',
        organization: 'University of Georgia',
        location: 'Athens, GA',
        date: 'November 18, 2025',
        role: 'Lead Instructor',
        topic: 'Computer Vision: From Pixels to Practical Applications',
        highlights: [
          'Led a 2.5-hour technical upskilling course for 21 manufacturing employees and STEM educators',
          'Hosted at the Price Industries Innovation Factory within the UGA I-STEM complex',
          'Provided hands-on training on computer vision fundamentals, deep learning, and embedded vision systems',
          "Participants included employees from Price Industries, Boehringer Ingelheim, King's Hawaiian, KUBOTA, Georgia Power, Southwire, and MP Equipment",
          'Educators from Clarke County, Gwinnett County, Monroe Area High School, and Barrow County Schools attended',
          'Each participant received a take-home embedded vision kit to continue exploring the technology',
        ],
        links: [
          {
            name: 'LinkedIn Post',
            url: 'https://www.linkedin.com/posts/uga-mll_computervision-objectdetection-digitalimaging-activity-7397752873926696960-zb-C?utm_source=share&utm_medium=member_desktop&rcm=ACoAAAo67RUBYMrFl-pthRl_Qs3nQnSFBcy76NQ',
          },
          {
            name: 'Georgia AIM Article',
            url: 'https://georgiaaim.org/manufacturers-educators-attend-uga-pop-up-class-on-computer-vision/',
          },
        ],
        images: [
          { url: '/images/cv_pop_up_course/1763761393608.jpg', alt: 'Computer Vision Pop-Up Course - Workshop participants' },
          { url: '/images/cv_pop_up_course/1763761417741.jpg', alt: 'Computer Vision Pop-Up Course - Training session' },
          { url: '/images/cv_pop_up_course/1763761438590.jpg', alt: 'Computer Vision Pop-Up Course - Hands-on learning' },
          { url: '/images/cv_pop_up_course/1763761465666.jpg', alt: 'Computer Vision Pop-Up Course - Participants working with embedded vision kits' },
          { url: '/images/cv_pop_up_course/1763761490523.jpg', alt: 'Computer Vision Pop-Up Course - Interactive demonstration' },
          { url: '/images/cv_pop_up_course/1763761518808.jpg', alt: 'Computer Vision Pop-Up Course - Workshop activities' },
          { url: '/images/cv_pop_up_course/1763761550998.jpg', alt: 'Computer Vision Pop-Up Course - Training at Price Industries Innovation Factory' },
          { url: '/images/cv_pop_up_course/1763761580166.jpg', alt: 'Computer Vision Pop-Up Course - Participants engaged in learning' },
          { url: '/images/cv_pop_up_course/1763761611686.jpg', alt: 'Computer Vision Pop-Up Course - Embedded vision kit demonstration' },
          { url: '/images/cv_pop_up_course/1763761640518.jpg', alt: 'Computer Vision Pop-Up Course - Workshop session' },
          { url: '/images/cv_pop_up_course/1763761668799.jpg', alt: 'Computer Vision Pop-Up Course - Course conclusion and kit distribution' },
        ],
      },
    ],
  },
  education: [
    {
      degree: 'Ph.D. in Computer Science',
      institution: 'School of Computing, University of Georgia',
      location: 'Athens, Georgia',
      date: 'January 2019 – May 2025',
      gpa: '3.74',
      thesis: '"From Specific to Universal: One Biomedical Image Segmentation Model to Rule Them All"',
    },
    {
      degree: 'Master of Science in Information Technology Engineering – Computer Networks',
      institution: 'Iran University of Science and Technology',
      location: 'Tehran, Iran',
      date: 'January 2013 – February 2016',
      gpa: '3.06',
      thesis: '"Performance Evaluation of Live Migration of Virtual Machines with Secured Data-Plane"',
    },
    {
      degree: 'Bachelor of Science in Information Technology Engineering',
      institution: 'Azad University of Parand',
      location: 'Tehran, Iran',
      date: 'September 2007 – June 2012',
      gpa: '3.00',
    },
  ],
  technicalSkills: [
    {
      category: 'Languages',
      icon: Code,
      skills: [
        { name: 'Python', level: 'Advanced' },
        { name: 'Java', level: 'Advanced' },
        { name: 'C#', level: 'Advanced' },
        { name: 'JavaScript', level: 'Advanced' },
        { name: 'TypeScript', level: 'Advanced' },
        { name: 'HTML', level: 'Advanced' },
        { name: 'CSS', level: 'Advanced' },
        { name: 'Bash', level: 'Advanced' },
        { name: 'PowerShell', level: 'Advanced' },
        { name: 'Micro Python', level: 'Intermediate' },
        { name: 'C/C++', level: 'Intermediate' },
        { name: 'MATLAB', level: 'Intermediate' },
        { name: 'GoLang', level: 'Basic' },
        { name: 'Rust', level: 'Basic' },
        { name: 'Julia', level: 'Basic' },
      ],
    },
    {
      category: 'Databases',
      icon: Database,
      skills: [
        { name: 'MS SQL Server', level: 'Advanced' },
        { name: 'MySQL', level: 'Intermediate' },
        { name: 'Arango DB', level: 'Basic' },
        { name: 'Raven DB', level: 'Basic' },
      ],
    },
    {
      category: 'Tools/Frameworks',
      icon: Wrench,
      skills: [
        { name: 'Git', level: 'Advanced' },
        { name: 'ASP.NET MVC', level: 'Advanced' },
        { name: 'Spring MVC', level: 'Advanced' },
        { name: 'Napari', level: 'Advanced' },
        { name: 'REST API', level: 'Advanced' },
        { name: 'React', level: 'Intermediate' },
        { name: 'React-Native', level: 'Intermediate' },
        { name: 'Unit Testing', level: 'Intermediate' },
        { name: 'Android Studio', level: 'Basic' },
        { name: 'AngularJS', level: 'Basic' },
      ],
    },
    {
      category: 'Cluster, Cloud, Virtualization',
      icon: Users,
      skills: [
        { name: 'Linux', level: 'Advanced' },
        { name: 'Kubernetes (K8S & K3S)', level: 'Advanced' },
        { name: 'JupyterHub', level: 'Advanced' },
        { name: 'BinderHub', level: 'Advanced' },
        { name: 'Docker', level: 'Advanced' },
        { name: 'RKE', level: 'Intermediate' },
        { name: 'K3Sup', level: 'Intermediate' },
        { name: 'DC/OS', level: 'Basic' },
        { name: 'Rancher', level: 'Basic' },
        { name: 'SeaFile', level: 'Basic' },
      ],
    },
    {
      category: 'Artificial Intelligence & Machine Learning',
      icon: Brain,
      skills: [
        { name: 'AI/ML Pipelines', level: 'Advanced' },
        { name: '(Self/Un) Supervised Learning', level: 'Advanced' },
        { name: 'NumPy', level: 'Advanced' },
        { name: 'Pandas', level: 'Advanced' },
        { name: 'SciPy', level: 'Advanced' },
        { name: 'Matplotlib', level: 'Advanced' },
        { name: 'TensorFlow', level: 'Intermediate' },
        { name: 'Keras', level: 'Intermediate' },
        { name: 'Pytorch (Lightning)', level: 'Intermediate' },
        { name: 'PyQT', level: 'Intermediate' },
        { name: 'U-Net', level: 'Intermediate' },
      ],
    },
    {
      category: 'Microcontrollers & Robotics',
      icon: Code,
      skills: [
        { name: 'Arduino', level: 'Advanced' },
        { name: 'ESP32', level: 'Advanced' },
        { name: 'ROS', level: 'Basic' },
      ],
    },
    {
      category: 'Methodologies & Practices',
      icon: Wrench,
      skills: [
        { name: 'Software Engineering', level: 'Advanced' },
        { name: 'Software Development', level: 'Advanced' },
        { name: 'Agile Methodologies', level: 'Advanced' },
        { name: 'Secure Communication', level: 'Advanced' },
        { name: 'CI/CD', level: 'Advanced' },
        { name: 'ML Frameworks', level: 'Advanced' },
      ],
    },
  ],
  relatedExperience: [
    {
      title: 'Graduate Research Assistant in Quinn Research Group',
      institution: 'University of Georgia',
      location: 'Athens, Georgia',
      supervisor: 'Dr. Shannon Quinn',
      periods: [
        {
          date: '2021 - 2025',
          points: [
            'Trained a supervised cilia segmentation model on self-supervised pseudo-labels instead of manual annotation.',
            "Developed a non-intrusive emotion recognition framework using facial expression recognition (FER) and Emotional Body Posture Recognition (EBPR) to assess workers' psychological states in Industrial IoT-enabled manufacturing environments. This research enhances worker well-being by identifying stress, fatigue, and cognitive load. A collaboration with Dr. Jaime Camelio's lab in the Department of Engineering, UGA.",
            'Developed a computational model to analyze changes in mitochondrial morphology induced by infection with Mycobacterium marinum (Mmar), a less virulent relative of Mycobacterium tuberculosis (Mtb).',
          ],
        },
        {
          date: '2024 & Spring 2025',
          points: [
            'Configuring and setting up "JupyterHub" on an on-premise cluster with NFS shared storage and LDAP authenticator allowing students at the University of Georgia to easily access a Jupyter environment for their projects and assignments.',
            'Configuring and setting up "BinderHub" allowing students at the University of Georgia to create sharable, interactive, reproducible environments from code repositories.',
            'Research and analysis on deep learning assisted detection of fusion and fission of mitochondria in microscopic images.',
          ],
        },
        {
          date: '2023',
          points: [
            'Setting up and running GitPod on the Rancher Kubernetes cluster for students allowing them to spin up their desired development environment.',
            'Setting up and running SeaFile as a shared space for academic work and projects.',
            'Developed "TSeg", a Napari plugin that provides a variety of off-the-shelf segmentation algorithms allowing inexperienced users to perform analysis on microscopic cell images. [GitHub]',
          ],
        },
        {
          date: 'Spring 2022 & Fall 2022',
          points: [
            'Set up and configured Kubernetes on an on-premise cluster of 5 master and worker nodes using Rancher Kubernetes Engine (RKE) in a High Availability fashion.',
            'Set up and configured Rancher on the on-premise cluster.',
            'Configured Nginx external load balancer for accessing Rancher server nodes for administrators.',
            'Set up a private docker registry for custom made docker images.',
            'The goal of this project was to allow students to request their desired pods equipped with machine learning or development.',
          ],
        },
      ],
    },
    {
      title: 'Graduate Teaching Assistant',
      institution: 'University of Georgia',
      location: 'Athens, Georgia',
      periods: [
        {
          date: '2019 - 2021',
          points: [
            'Supported computer science courses prior to the Graduate Research Assistant role in the Quinn Research Group.',
          ],
        },
      ],
    },
    {
      title: 'Full-Stack Web Developer',
      institution: 'Tehran Municipality ICT Organization',
      location: 'Tehran, Iran',
      department: 'IT Department – Portal Section',
      periods: [
        {
          date: 'October 2016 – February 2017',
          points: [
            "Enhanced and optimized the page-load speed and network utilization of the municipality's portal (http://www.Tehran.ir) by creating one custom lightweight JavaScript plugin encompassing all UI functionalities, reducing http requests from 60 to 14.",
            'Improved the UI and the UX of the portal for hand-held devices.',
            'Reformed and improved the development tools and code structure of the portal by implementing the latest front-end development tools and techniques in JavaScript.',
            'Instructed five employees to use the new development environment.',
          ],
        },
      ],
    },
  ],
  publications: [
    {
      title: 'Multi-Layer Multi-Variable Value Stream Mapping: A Comprehensive Framework Across Operational, Environmental, and Social Layers with Integrated KPIs Interrelationships',
      authors: 'Heydarzadeh, A; Rezaei, N; Vaezi, Seyed Alireza, et al.',
      venue: '(2024)-53rd SME North American Manufacturing Research Conference (NAMRC 53, 2025)',
      link: 'https://www.sciencedirect.com/',
      linkText: 'ScienceDirect',
    },
    {
      title: 'Smart Sensors, Smarter Workplaces: Multi-Modal Cognitive Load Assessment in Industry 4.0',
      authors: 'Rezaei Niloofar; Vaezi, Seyed Alireza, et al.',
      venue: '(2025) IISE Annual Conference',
      link: 'https://www.researchgate.net/publication/398587855_Smart_Sensors_Smarter_Workplaces_Multi-Modal_Cognitive_Load_Assessment_in_Industry_40',
      linkText: 'ResearchGate',
    },
    {
      title: 'Identifying Virulence Determinants in Pathogenic Mycobacteria Via Changes in Host Cell Mitochondrial Morphology',
      authors: 'S. Quinn; A. Abbadi; Vaezi, Seyed Alireza',
      venue: '[arXiv]',
      link: 'https://arxiv.org/',
      linkText: 'arXiv',
    },
    {
      title: 'Training a Supervised Cilia Segmentation Model from Self-Supervision',
      authors: 'Vaezi, Seyed Alireza, et al.',
      venue: 'Proceedings of the 23rd Python in Science Conference (SciPy 2024)',
      link: 'https://www.researchgate.net/',
      linkText: 'ResearchGate | SciPy',
    },
    {
      title: 'Decoding the Silent Language: A Framework for Advanced Visual Emotion Recognition to Enhance Worker Well-Being on IIoT-Enabled Manufacturing',
      authors: 'Rezaei, Niloofar; Vaezi, Seyed Alireza, Jaime Camelio',
      venue: '(2024)-52nd SME North American Manufacturing Research Conference (NAMRC 52, 2024)',
      link: 'https://www.sciencedirect.com/',
      linkText: 'ScienceDirect',
    },
    {
      title: 'A Novel Pipeline for Cell Instance Segmentation, Tracking and Motility Classification of Toxoplasma Gondii in 3D Space',
      authors: 'Vaezi, Seyed Alireza, et al.',
      venue: 'Proceedings of the 21st Python in Science Conference (SCIPY 2022)',
      link: 'https://www.researchgate.net/',
      linkText: 'ResearchGate | SciPy',
    },
  ],
  projects: [
    {
      title: 'HomeSense - Human Activity Patterns and Air Quality',
      course: 'CPS8300 Principals of Cyber-Physical Systems (Collaboration with Niloofar Rezaei)',
      date: 'Fall 2021',
      points: [
        'Set up ESP32 microcontrollers with sensors (temperature, humidity, light, infrared motion, air quality).',
        'Used MicroPython to program the microcontrollers.',
      ],
    },
    {
      title: 'Sartorius Cell Instance Segmentation - Kaggle Competition',
      course: 'CSCI 6360 Data Science II',
      date: 'Fall 2021',
      points: [
        'Cell instance segmentation of three neuronal cells using neural networks.',
        'Generated ground truth for model training from annotation using Julia.',
        'Used U-Net architecture with PyTorch.',
      ],
    },
  ],
  teaching: [
    { course: 'CSCI 4250/6250 Cybersecurity - Dr. Le Guan', role: 'Grading projects and assignments on system security (stack/buffer overflow, AES, RSA) and helping students.', date: 'Spring 2019, Summer 2020' },
    { course: 'CSCI 1302 Software Development - Prof. Krzysztof J. Kochut', role: 'Grading projects and assignments, and helping students in developing programs in Java.', date: 'Summer 2019, Spring 2020' },
    { course: 'CSCI 2720 Data Structures - Dr. Sachin Meena', role: 'Grading and helping students with abstract data types, algorithm analysis, sorting, recursion.', date: 'Fall 2019' },
    { course: 'CSCI 4250/6250 Cybersecurity - Dr. Mustakimar Khandaker', role: 'Grading projects and assignments on system security (stack/buffer overflow, return to libc attack, format string attack).', date: 'Fall 2020' },
  ],
};
