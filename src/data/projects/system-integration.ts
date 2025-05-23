import { Globe } from 'lucide-react';
import type { Project } from './types';

export const systemIntegration: Project = {
  id: 3,
  title: 'Electric vehicle System Integration',
  category: 'electrical',  image: './images/System Integration/Vehicle flashing.jpg',
  images: [
   '../images/System Integration/Addembly.jpg',
    '../images/System Integration/vehicle assembly line.jpg',
    '../images/System Integration/vehicle integration.jpg',
    '../images/System Integration/vehicles.jpg'
  ],
  description: 'Integrated electrical systems for High Speed electric Motorcycles, including ECU, motor controller (MCU) and battery management system, OBC, DC-DC, and other components all connected with a sophisticated wire harness.',
  fullDescription: 'Led the integration of various electrical systems in high-performance electric motorcycles. The project encompassed the complete electrical architecture, from power train to control systems, ensuring optimal performance and reliability.',
  tags: ['MCU', 'ECU/VCU', 'OBC', 'DC-DC', 'BMS', 'HV-Battery', 'EBS/ABS', 'HV-LV Wire Harness', 'Cooling system','Integration', 'Testing'],
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
  ],
  technologies: ['FreeRTOS-Embedded C/C++', 'BMS-VCU-OBC-DC_DC tester', 'CAN-RS485-UART-I2C-SPI'],
};
