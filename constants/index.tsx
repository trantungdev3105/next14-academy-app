import { IconBoth, IconDashboard } from '@/components/icons'
import { TMenuItem } from '@/types'

export const menuItems: TMenuItem[] = [
  {
    url: '/',
    title: 'Dashboard',
    icon: <IconDashboard className="size-5" />,
  },
  {
    url: '/explore',
    title: 'Admin',
    icon: <IconBoth className="size-5" />,
  },
]
