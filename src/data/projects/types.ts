import { LucideIcon } from 'lucide-react';

export interface Project {
  id: number;
  title: string;
  category: 'electrical' | 'battery' | 'embedded' | 'web';
  image: string;
  description: string;
  fullDescription: string;
  tags: string[];
  icon: LucideIcon;
  startDate: string;
  duration: string;
  scope: string;
  role: string;
  responsibilities: string[];
  outcomes: string[];
}
