import React from 'react'

const SideBar = () => {
  return (
    <aside className="border-r-gray border-r p-5">
      <a href="/" className="mb-5 inline-block text-3xl font-semibold">
        Academy
      </a>
      <ul className="">
        <MenuItem url="/" title="Dashboard" />
        <MenuItem url="/admin" title="Admin" />
      </ul>
    </aside>
  )
}

const MenuItem = ({
  url = '/',
  title = '',
}: {
  url: string
  title: string
}) => {
  return (
    <li className="flex items-center rounded-md p-3">
      <a href={url}>{title}</a>
    </li>
  )
}

export default SideBar
