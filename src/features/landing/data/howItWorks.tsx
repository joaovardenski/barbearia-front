import { Store, Scissors, CalendarCheck } from 'lucide-react'
import type { ReactNode } from 'react'

export interface HowItWorks {
    step: string,
    icon: ReactNode,
    title: string,
    description: string,
}

export const HOW_IT_WORKS_DATA: HowItWorks[] = [
    {
        step: '1',
        icon: <Store size={24} />,
        title: 'Book an Appointment',
        description: 'Create your barbershop, define services, prices and working hours in minutes.'
    },
    {
        step: '2',
        icon: <Scissors size={24} />,
        title: 'Manage your team',
        description: 'Add barbers, assign services and control individual availability with ease.'
    },
    {
        step: '3',
        icon: <CalendarCheck size={24} />,
        title: 'Start receiving bookings',
        description: 'Clients book online, barbers manage their agenda and everything stays organized.'
    },
]