import IconBoth from '@/components/icons/IconBoth'
import IconDashboard from '@/components/icons/IconDashboard'
import React from 'react'

export const menuItems: {
  url: string
  title: string
  icon?: React.ReactNode
}[] = [
  {
    url: '/',
    title: 'Dashboard',
    icon: <IconDashboard className="size-5" />,
  },
  {
    url: '/admin',
    title: 'Admin',
    icon: <IconBoth className="size-5" />,
  },
]
