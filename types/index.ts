import { GitHub, Linkedin, Twitter, Figma } from "../components/icons";

export interface SocialItem {
  id: number;
  Icon: typeof GitHub | typeof Linkedin | typeof Twitter | typeof Figma;
  value: string;
  key: 'github' | 'linkedin' | 'twitter' | 'figma';
  setValue: (value: string) => void;
}

export interface FormState {
  title: string;
  author: string;
  job: string;
  github: string;
  figma: string;
  twitter: string;
  linkedin: string;
}