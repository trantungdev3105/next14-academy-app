import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { IconClock, IconEye, IconStar } from '../icons'

const CourseItem = () => {
  const courseInfo = [
    {
      title: 1000,
      icon: (className?: string) => <IconEye className={className} />,
    },
    {
      title: 5,
      icon: (className?: string) => <IconStar className={className} />,
    },
    {
      title: '30h25p',
      icon: (className?: string) => <IconClock className={className} />,
    },
  ]

  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow">
      <Link href="#" className="relative block h-[200px]">
        <Image
          src="https://i.pinimg.com/736x/dc/e3/cb/dce3cb7b2daeb86ca5bd921ae06f3b2f.jpg"
          alt=""
          width={300}
          height={200}
          className="h-full w-full rounded object-cover"
          sizes="@media (min-width: 640px) 300px, 100vw"
          priority
        />
        <span className="absolute right-3 top-3 z-10 inline-block rounded-full bg-green-500 px-3 py-1 text-xs font-semibold text-white">
          New
        </span>
      </Link>
      <div className="pt-4">
        <h3 className="mb-5 text-lg font-bold">
          Khóa học NextJS Pro - Xây dựng E-learning system hoàn chỉnh
        </h3>
        <div className="flex items-center gap-3 text-xs">
          {courseInfo.map((item, index) => (
            <div className="flex items-center gap-2" key={index}>
              {item.icon('size-4')}
              <span>{item.title}</span>
            </div>
          ))}
          <div className="ml-auto text-base font-semibold text-primary">
            799.000
          </div>
        </div>
        <Link
          href="#"
          className="mt-5 flex w-full items-center justify-center rounded-lg bg-primary py-2 font-semibold text-white"
        >
          Xem chi tiết
        </Link>
      </div>
    </div>
  )
}

export default CourseItem
