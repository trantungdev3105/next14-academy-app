import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const CourseItem = () => {
  return (
    <div className="rounded-lg border border-gray-200 bg-white p-5 shadow">
      <Link href="#" className="block h-[200px]">
        <Image
          src="https://i.pinimg.com/736x/dc/e3/cb/dce3cb7b2daeb86ca5bd921ae06f3b2f.jpg"
          alt=""
          width={300}
          height={200}
          className="h-full w-full rounded object-cover"
        />
      </Link>
    </div>
  )
}

export default CourseItem
