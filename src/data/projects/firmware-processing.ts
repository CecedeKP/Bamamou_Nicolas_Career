import { Cpu } from 'lucide-react';
import type { Project } from './types';

export const firmwareProcessing: Project = {
  id: 5,
  title: 'Real-time Data Processing Firmware',
  category: 'embedded',
  image: './images/FirmwareDev/firmware-overview.png',
  description: 'Firmware for STM32 microcontrollers enabling real-time processing of sensor data for industrial applications.',
  fullDescription: 'Developed sophisticated firmware for STM32 microcontrollers to handle real-time processing of multiple sensor inputs in industrial monitoring applications. The system provides accurate, low-latency data processing with robust error handling.',
  tags: ['STM32', 'Firmware', 'Sensors', 'RTOS'],
  icon: Cpu,
  startDate: 'May 2023',
  duration: '5 months',
  scope: 'Firmware Development',
  role: 'Embedded Systems Engineer',
  responsibilities: [
    'Designed and implemented RTOS-based firmware architecture',
    'Optimized sensor data processing algorithms',
    'Implemented communication protocols (I2C, SPI, UART)',
    'Developed error handling and system recovery mechanisms',
    'Created comprehensive documentation'
  ],
  outcomes: [
    'Reduced processing latency by 40%',
    'Improved system reliability with 99.99% uptime',
    'Successfully deployed in 20+ industrial units'
  ]
};
