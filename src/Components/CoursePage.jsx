import React from 'react'
import CourseCard from './CourseCard';

function CoursePage(props) {
  
  return (
    <div>
        <div className='px-16 py-28'>
            <h1 className='text-7xl'>We're not a <span className='text-[#24CFA6]'>course</span></h1>
            <h1 className='text-7xl text-[#24CFA6]'>factory.</h1>
            <h2 className='text-3xl mt-10'>We focus on course that really helps</h2>
        </div>
        <div>
            <h1 className='pl-16'>Our Courses</h1>
            <div className='flex flex-wrap gap-8 m-auto p-10 px-16 ' >
                {props.courses.map((course) => {
                    return (
                      <div key={course.id} >
                        <CourseCard  course={course} />
                      </div>
                    )
                })}
            </div>          
        </div>
    </div>
  )
}

export default CoursePage;