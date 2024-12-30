import React from 'react'
import { Link, NavLink } from 'react-router-dom'
function Navbar() {
  return (
    <div className='bg-black text-white text-sm '>
        <nav className=' flex items-center justify-between px-20 py-3'>
            <NavLink to={"/"}>
            <ul className='flex items-center gap-2'>
                <img className='w-7' src="https://ik.imagekit.io/sheryians/Sheryians_logo_EzwgcppnD" alt="" />
                <h1>Sheriyans Coding School</h1>
            </ul>
            </NavLink>
            <ul className='flex items-center gap-16'>
                <NavLink to={"/"}><h1>Home</h1></NavLink>
                {/* <Link><h1>Home</h1></Link> */}
                <NavLink to={"/courses"}><h1>Courses</h1></NavLink>
                {/* <Link><h1>Courses</h1></Link> */}
                <NavLink to={"/kodr"}><h1>BootCamp(Kodr)</h1></NavLink>
                {/* <Link><h1>Kodr</h1></Link> */}
                {/* <Link><h1>BootCamp(Kodr)</h1></Link> */}
                <Link><h1>Request CallBack</h1></Link>
                <Link><button className='bg-[#24CFA6] p-2 px-6 rounded-md text-black font-semibold'>Sign in</button></Link>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar