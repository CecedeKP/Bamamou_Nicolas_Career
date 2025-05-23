import { Globe } from 'lucide-react';
import type { Project } from './types';

export const portfolioWebsite: Project = {
  id: 7,
  title: 'Engineering Portfolio Website',
  category: 'web',
  image: './images/System Integration/portfolio.png',
  description: 'Responsive personal portfolio website showcasing engineering projects and technical skills.',
  fullDescription: 'Designed and developed a modern, responsive portfolio website using React and TypeScript. The site features a clean, professional design with smooth animations and optimal performance.',
  tags: ['React', 'TypeScript', 'Tailwind CSS', 'Responsive Design'],
  icon: Globe,
  startDate: 'March 2024',
  duration: '2 months',
  scope: 'Full-stack Development',
  role: 'Full-stack Developer',
  responsibilities: [
    'Designed and implemented responsive UI components',
    'Developed dynamic project showcase features',
    'Implemented performance optimizations',
    'Created animated transitions and interactions',
    'Deployed and maintained website infrastructure'
  ],
  outcomes: [
    'Achieved 95+ Lighthouse performance score',
    'Reduced load time by 40%',
    'Increased portfolio visibility and engagement'
  ]
};
