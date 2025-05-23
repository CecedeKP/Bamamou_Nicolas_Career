import { Cpu } from 'lucide-react';
import type { Project } from './types';

export const meshNetwork: Project = {
  id: 6,
  title: 'Wireless Mesh Network for Industrial Monitoring',
  category: 'embedded',
  image: './images/System Integration/mesh-network.png',
  description: 'Developed a robust mesh network for monitoring industrial equipment in harsh environments.',
  fullDescription: 'Created a scalable wireless mesh network solution for industrial equipment monitoring in challenging environments. The system provides reliable data transmission and self-healing capabilities to ensure continuous operation.',
  tags: ['IoT', 'Mesh Network', 'ESP32', 'Industrial IoT'],
  icon: Cpu,
  startDate: 'January 2024',
  duration: '4 months',
  scope: 'Network Architecture and Implementation',
  role: 'IoT Systems Engineer',
  responsibilities: [
    'Designed mesh network topology and protocols',
    'Implemented secure data transmission',
    'Developed network management system',
    'Created deployment and maintenance documentation',
    'Conducted field testing in industrial environments'
  ],
  outcomes: [
    'Achieved 99.9% network reliability',
    'Supported up to 100 nodes per network',
    'Successfully deployed in 3 manufacturing facilities'
  ]
};
