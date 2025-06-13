'use client'

import { TActiveLinkProps } from '@/types'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const ActiveLink = ({ url, children }: TActiveLinkProps) => {
  const pathname = usePathname()
  const isActive = url === pathname ? true : false

  return (
    <Link
      href={url}
      className={`${isActive ? 'svg-animate bg-primary text-white' : 'hover:bg-primary hover:bg-opacity-10 hover:text-primary'} flex items-center gap-3 rounded-md p-3 transition-all`}
    >
      {children}
    </Link>
  )
}

export default ActiveLink
