import React from 'react'

function KodrPage() {
  return (
    <div className='w-full bg-black'>
        <div className='  bg-black flex w-full justify-center gap-32   py-5'>
            <div className='h-[59vh] bg-black flex flex-col justify-between '>
                <div >
                    <div>
                    <h1 className='text-5xl font-semibold'>6 months in-House</h1>
                    <h1 className='text-5xl font-semibold'>BootCamp</h1>
                    <h1 className='text-5xl font-semibold'>programme - Kodr</h1>
                    </div>
                    <div className='flex gap-5 mt-5'>
                        <p className='bg-gray-700 p-2 px-5 rounded-md text-sm'>Starts on : 11 Nov 2024</p>
                        <p className='bg-gray-700 p-2 px-5 rounded-md text-sm'>Placement Assistance</p>
                    </div>
                </div>
                <div>
                    <h1 className='text-4xl font-semibold'>Price <span className='text-3xl font-bold text-[#24CFA6] '>$ 59000</span> <span className='text-base text-white'>[ 50,000 + 18% GST]</span></h1>
                </div>
                <div>
                    <button className='bg-[#065136] font-bold p-3 rounded-lg px-4 text-[#868686] text-2xl'>Seats are full</button>
                </div>
            </div>
            <div>
            <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/watch?v=pOGLAlGCKFE" // Replace with your YouTube link
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
            </div>
        </div>
        <div>
            <div className='p-12 pr-6 pl-20 font-semibold tracking-[0.001em]'>
                <h1 className='text-8xl'>we believe in,</h1>
                <h1 className='text-8xl'><span className='text-[#34A47C]'>Consistency.</span>No shortcuts.</h1>
            </div>
            <div className='text-5xl p-10 pl-16 flex flex-wrap'>
                <div className='m-2 flex items-center justify-center'>
                    <h1 className='p-2 rounded-xl bg-gray-800 m-2 '>Mern Stack <span className='text-2xl'>⚡</span></h1>
                </div>
                <div className='m-2 flex items-center justify-center'>
                    <h1 className='p-2 rounded-xl bg-gray-800 m-2 '>Data Structures and algorithms <span className='text-2xl'>🗿</span></h1>
                </div>
                <div className='m-2 flex items-center justify-center'>
                    <h1 className='p-2 rounded-xl bg-gray-800 m-2 '>DBMS - Sql <span className='text-2xl'>✌️</span> </h1>
                </div>
                <div className='m-2 flex items-center justify-center'>
                    <h1 className='p-2 rounded-xl bg-gray-800 m-2 '>Core Cs Subjects <span className='text-2xl'>🛞</span> </h1>
                </div>
                <div className='m-2 flex items-center justify-center'>
                    <h1 className='p-2 rounded-xl bg-gray-800 m-2 '>Placement Assistance <span className='text-2xl'>💰</span></h1>
                </div>
            </div>
        </div>
        <div></div>
        <div></div>
        <div></div>
    </div>
  )
}

export default KodrPage