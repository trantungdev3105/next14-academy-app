import { menuItems } from '@/constants'
import { TMenuItem } from '@/types'
import ActiveLink from '../common/active-link'

const SideBar = () => {
  return (
    <aside className="border-r-gray border-r bg-white p-5">
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
