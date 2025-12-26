import { Calendar, Scissors, Users, BarChart3 } from 'lucide-react'
import type { ReactNode } from 'react'

export interface Feature {
  icon: ReactNode
  title: string
  description: string
}

export const FEATURES_DATA: Feature[] = [
  {
    icon: <Calendar size={28} />,
    title: 'Smart Scheduling',
    description:
      'Online appointments with real-time availability, automatic conflict prevention and flexible time slots.',
  },
  {
    icon: <Scissors size={28} />,
    title: 'Barber Management',
    description:
      'Manage barbers, services, working hours and individual availability with full control.',
  },
  {
    icon: <Users size={28} />,
    title: 'Client Experience',
    description:
      'Give your clients a smooth booking experience with confirmations, history and reminders.',
  },
  {
    icon: <BarChart3 size={28} />,
    title: 'Business Insights',
    description:
      'Track appointments, occupancy rates and revenue to make better business decisions.',
  },
]
