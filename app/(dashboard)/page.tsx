import CourseItem from '@/components/common/course-item'
import Header from '@/components/typography/header'
import React from 'react'

const HomePage = () => {
  return (
    <div>
      <Header>Khám phá</Header>
      <div className="grid grid-cols-3 gap-5">
        <CourseItem />
        <CourseItem />
        <CourseItem />
      </div>
    </div>
  )
}

export default HomePage
