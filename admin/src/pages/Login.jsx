import React, { useState } from 'react'
import {assets} from '../../../admin/src/assets/assets.js'

function Login() {

    const [state,setState]=useState('Admin')


  return (
    <form className='min-h-[80vh] flex items-center'>
      <div className='flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-2xl border-zinc-300 rounded-xl text-zinc-600 text-sm shadow-lg'>
        <p className='text-2xl font-semibold m-auto'>< span className='text-primary'>{state}</span>Login</p>
        <div className='w-full'>
            <p>Email</p>
            <input className='w-full border border-[#DADADA] rounded p-2 mt-1' type="email" required />
        </div>
        <div className='w-full'>
            <p>Password</p>
            <input className='w-full border border-[#DADADA] rounded p-2 mt-1' type="password" required />
        </div>
        <button className='w-full bg-primary text-white p-2 rounded-md mt-3'>Login</button>
        {
            state=='Admin'
            ? <p>Doctor Login? <span  onClick={()=>setState('Doctor')} className='text-primary underline cursor-pointer'>click here</span></p>
            : <p>Admin Login? <span onClick={()=>setState('Admin')} className='text-primary underline cursor-pointer' >click here</span></p>
        }
      </div>
    </form>
  )
}

export default Login
