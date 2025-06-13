import { menuItems } from '@/constants'
import { TMenuItem } from '@/types'
import ActiveLink from '../common/active-link'

const SideBar = () => {
  return (
    <aside className="p-5 border-r border-r-gray">
      <a href="/" className="inline-block mb-5 text-3xl font-semibold">
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

const MenuItem = ({ url = '/', title = '', icon }: TMenuItem) => {
  return (
    <li>
      <ActiveLink url={url}>
        {icon} {title}
      </ActiveLink>
    </li>
  )
}

export default SideBar
