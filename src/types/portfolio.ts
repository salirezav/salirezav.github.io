import { LucideIcon } from 'lucide-react';

export interface SocialLink {
  name: string;
  url: string;
  icon: LucideIcon;
}

export interface PersonalInfo {
  name: string;
  email: string;
  phone: string;
  website: string;
  location: string;
  links: SocialLink[];
}

export interface LabeledPoint {
  label: string;
  description: string;
}

export interface ActiveProject {
  title: string;
  points: LabeledPoint[];
}

export interface IndustryOutreach {
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

export interface CurrentRole {
  title: string;
  institution: string;
  location: string;
  date: string;
  leadership: LabeledPoint[];
  principalDuties: LabeledPoint[];
  activeProject: ActiveProject;
  industryOutreach?: IndustryOutreach[];
}

export interface Education {
  degree: string;
  institution: string;
  location: string;
  date: string;
  gpa: string;
  thesis?: string;
  advisor?: string;
}

export type SkillLevel = 'Advanced' | 'Intermediate' | 'Basic';

export interface Skill {
  name: string;
  level: SkillLevel;
}

export interface SkillGroup {
  category: string;
  icon: LucideIcon;
  skills: Skill[];
}

export interface ExperiencePeriod {
  date: string;
  points: string[];
}

export interface RelatedExperience {
  title: string;
  institution: string;
  supervisor?: string;
  location?: string;
  department?: string;
  periods: ExperiencePeriod[];
}

export interface Publication {
  title: string;
  authors: string;
  venue: string;
  link?: string;
  linkText?: string;
}

export interface Project {
  title: string;
  course: string;
  date: string;
  points: string[];
}

export interface Teaching {
  course: string;
  role: string;
  date: string;
}

export interface PortfolioData {
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
