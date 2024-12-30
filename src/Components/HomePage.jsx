import React from 'react'
import CourseCard from './CourseCard'
import { NavLink } from 'react-router-dom'

function HomePage(props) {
  return (
    <div className=''>
        <div>
            <div>
                <div className='text-[5rem] font-ibm leading-none text-center mt-20 tracking-wide space-x-20'>
                    <h1>We only <span className='text-[#24CFA6]'>teach</span> <br />what we are really <br />really good at.</h1>
                </div>
                <div className='w-full flex justify-center mt-16'>
                    <NavLink to='/courses'>
                    
                    <button className='bg-[#24CFA6] text-black m-auto p-2 px-6 rounded-lg text-xl font-semibold `'>Check Courses-Make an Impact</button>
                    </NavLink>
                </div>
            </div>
            <div className='flex justify-center gap-32 py-5 text-3xl mt-24'>
                <div className='flex flex-col items-center'>
                    <h1 className='font-bold'>25k+</h1>
                    <p className='text-xl'>Student Taught</p>
                </div>
                <div className='flex flex-col items-center'>
                    <h1 className='font-bold'>20+</h1>
                    <p className='text-xl'>Instructors</p>
                </div>
                <div className='flex flex-col items-center'>
                    <h1 className='font-bold'>493k+</h1>
                    <p className='text-xl'>Youtube Subs</p>
                </div>
            </div>
        </div>
        <div className='h-screen flex mt-10 flex-col justify-between'>
            <div className='text-5xl text-center'>
                <h1>we do whatever it takes to help you <br /><span className='text-[#24CFA6]'>understand the concepts.</span></h1>
            </div>
            <div className='w-full flex items-center justify-center'>
                <img className='w-[65vw]' src="https://ik.imagekit.io/sheryians/courses_gif/undefined-backend_0.5x_Medium_wgHDU-5rPt.png" alt="" />
            </div>
            <div className='w-full flex justify-center'>
                <button className='bg-[#24CFA6] p-2 px-8 font-semibold text-xl rounded-lg text-black '>Explore free learning</button>
            </div>
        </div>
        <div>
        <h1 className='pl-16 text-4xl my-6'>Course Offered</h1>
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
        <div></div>
    </div>
  )
}

export default HomePage