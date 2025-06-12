import { menuItems } from '@/constants'
import React from 'react'

const SideBar = () => {
  return (
    <aside className="border-r-gray border-r p-5">
      <a href="/" className="mb-5 inline-block text-3xl font-semibold">
        Academy
      </a>
      <ul className="flex flex-col gap-2">
        {menuItems.map((item, index) => (
          <MenuItem
            key={index}
            url={item.url}
            title={item.title}
            icon={item.icon}
          />
        ))}
      </ul>
    </aside>
  )
}

const MenuItem = ({
  url = '/',
  title = '',
  icon,
}: {
  url: string
  title: string
  icon?: React.ReactNode
}) => {
  return (
    <li>
      <a
        href={url}
        className="hover:text-primary hover:bg-primary flex items-center gap-3 rounded-md p-3 transition-all hover:bg-opacity-10"
      >
        {icon} {title}
      </a>
    </li>
  )
}

export default SideBar
