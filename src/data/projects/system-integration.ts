import { Globe } from 'lucide-react';
import ElectricVehicle from "@/assets/images/Engineering EBike.jpg";
import type { Project } from './types';

export const systemIntegration: Project = {
  id: 3,
  title: 'Electric vehicle System Integration',
  category: 'electrical',
  image: ElectricVehicle,
  description: 'Integrated electrical systems for High Speed electric Motorcycles, including ECU, motor controller and battery management system, OBC, DC-DC.',
  fullDescription: 'Led the integration of various electrical systems in high-performance electric motorcycles. The project encompassed the complete electrical architecture, from power distribution to control systems, ensuring optimal performance and reliability.',
  tags: ['MCU', 'ECU/VCU', 'OBC', 'DC-DC', 'Battery'],
  icon: Globe,
  startDate: 'June 2024',
  duration: '12 months',
  scope: 'Full System Integration',
  role: 'Lead Systems Integration Engineer',
  responsibilities: [
    'Designed and implemented complete electrical architecture',
    'Integrated ECU, BMS, and motor controller systems',
    'Developed and tested power distribution systems',
    'Coordinated with mechanical team for packaging solutions',
    'Conducted system validation and performance testing'
  ],
  outcomes: [
    'Successfully integrated all electrical systems in prototype vehicles',
    'Achieved target performance metrics',
    'Reduced system complexity by 30%',
    'Improved overall system efficiency by 15%'
  ]
};
