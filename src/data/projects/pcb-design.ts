import { Zap } from 'lucide-react';
import type { Project } from './types';

export const pcbDesign: Project = {
  id: 1,
  title: 'Advanced PCB Design for IoT Sensors',
  category: 'electrical',
  image: './images/PCB design/ESP32-CAN.png',
  description: 'Multi-layer PCB designed for low-power IoT environmental sensors with integrated wireless communication.',
  fullDescription: 'This project involved the development of a sophisticated multi-layer PCB for IoT environmental sensors. The design focused on achieving ultra-low power consumption while maintaining reliable wireless communication capabilities. The PCB incorporated various environmental sensors and was optimized for mass production.',
  tags: ['PCB Design', 'IoT', 'Low Power'],
  icon: Zap,
  startDate: 'March 2023',
  duration: '4 months',
  scope: 'Full PCB Design and Prototyping',
  role: 'Lead PCB Designer',
  responsibilities: [
    'Designed multi-layer PCB using Altium Designer',
    'Implemented power management system for extended battery life',
    'Conducted EMC/EMI analysis and optimization',
    'Coordinated with manufacturers for prototype production'
  ],
  outcomes: [
    'Achieved 60% reduction in power consumption',
    'Successfully produced and tested 10 prototype units',
    'Design approved for mass production'
  ]
};
