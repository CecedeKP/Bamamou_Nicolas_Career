import { Battery } from 'lucide-react';
import type { Project } from './types';

export const energyStorage: Project = {
  id: 4,
  title: 'Smart Home Energy Storage',
  category: 'battery',  image: './images/BESS/bess-overview.jpg',
  images: [
    './images/BESS/bess-overview.jpg',
    './images/BESS/bess-installation.jpg',
    './images/BESS/bess-monitoring.jpg',
    './images/BESS/bess-performance.jpg'
  ],
  description: 'Residential battery system designed for optimal energy management with solar integration.',
  fullDescription: 'Developed an innovative residential energy storage solution that seamlessly integrates with solar power systems. The project focused on maximizing energy efficiency and providing reliable backup power while maintaining user-friendly operation.',
  tags: ['Energy Storage', 'Renewable Energy', 'Smart Home'],
  icon: Battery,
  startDate: 'September 2023',
  duration: '6 months',
  scope: 'Full System Design and Implementation',
  role: 'Energy Systems Engineer',
  responsibilities: [
    'Designed battery storage system architecture',
    'Developed power management algorithms',
    'Implemented smart grid integration features',
    'Created user interface for system monitoring',
    'Conducted efficiency and safety testing'
  ],
  outcomes: [
    'Achieved 95% round-trip efficiency',
    'Reduced household grid dependency by 70%',
    'Successfully deployed in 5 residential installations'
  ]
};
