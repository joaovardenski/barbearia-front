import { Store, Scissors, User } from 'lucide-react'
import type { ReactNode } from 'react'

export interface ForWho {
    icon: ReactNode,
    title: string,
    description: string,
}

export const FOR_WHO_DATA: ForWho[] = [
    {
        icon: <Store size={28} />,
        title: "Barbershop Owners",
        description: "Gain full control over schedules, services, staff and business performance in one centralized platform."
    },
    {
        icon: <Scissors size={28} />,
        title: "Barbers",
        description: "Manage your agenda, services and availability with clarity, focus and no more manual scheduling."
    },
    {
        icon: <User size={28} />,
        title: "Clients",
        description: "Book appointments online, choose services and barbers, and enjoy a smooth, hassle-free experience."
    },
]


