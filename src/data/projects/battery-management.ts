import { Battery } from 'lucide-react';
import type { Project } from './types';

export const batteryManagement: Project = {
  id: 2,
  title: 'Electric Vehicle Battery Management System',
  category: 'battery',
  image: './images/BMS/BMS.jpg',
  description: 'Designed and implemented a sophisticated BMS for electric vehicles, focusing on safety and efficiency.',
  fullDescription: 'Development of a comprehensive Battery Management System (BMS) for electric vehicles, with a focus on maximizing battery life while ensuring safety and reliability. The system includes real-time monitoring, cell balancing, and advanced protection features.',
  tags: ['BMS', 'EV', 'SolidWorks'],
  icon: Battery,
  startDate: 'January 2023',
  duration: '8 months',
  scope: 'Full BMS Development',
  role: 'Senior Battery Systems Engineer',
  responsibilities: [
    'Designed BMS architecture and specifications',
    'Implemented cell balancing algorithms',
    'Developed safety protocols and protection features',
    'Conducted extensive testing and validation'
  ],
  outcomes: [
    'Increased battery life by 25%',
    'Reduced charging time by 30%',
    'Successfully implemented in 3 EV prototypes'
  ]
};
