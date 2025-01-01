import React from 'react'

function SignIn() {
  return (
    <div className=' flex flex-col p-5 w-[50vw] ml-[25%] mt-20'>
        <div className='w-full flex flex-col ml-20'>
            <h1 className='text-3xl mb-8'>Sign In</h1>
            <div className='flex gap-5'>
                <button>Phone</button>
                <button>Email</button>
            </div>
        </div>
        <div></div>
        <div className='flex items-center ml-20'>
            <div className='border w-[40%]'></div>
            <h1>Or</h1>
            <div className='border w-[40%]'></div>
        </div>
        <div className='flex flex-col items-center justify-center h-[80vh]'>
            <div className='flex border px-28 text-xl font-light py-2  m-2 items-center gap-5 rounded-3xl'>
                <img className='w-10' src="https://img.icons8.com/?size=100&id=17949&format=png&color=000000" alt="" />
                <h1>Continue with Google</h1>
            </div>
            <div className='flex border px-28 text-xl font-light py-2  m-2 items-center gap-5 rounded-3xl'>
                <img className='w-10' src="https://img.icons8.com/?size=100&id=65548&format=png&color=ffffff" alt="" />
                <h1>Create a new Account</h1>
            </div>
        </div>
    </div>
  )
}

export default SignIn