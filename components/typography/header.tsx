import React from 'react'

const Header = ({ children }: { children: React.ReactNode }) => {
  return <div className="mb-5 text-3xl font-semibold">{children}</div>
}

export default Header
