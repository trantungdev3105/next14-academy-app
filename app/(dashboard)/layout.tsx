import SideBar from '@/components/layout/sidebar'
import React from 'react'

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="wrapper grid h-screen grid-cols-[300px,minmax(0,1fr)]">
      <SideBar />
      <main>{children}</main>
    </div>
  )
}

export default Layout
