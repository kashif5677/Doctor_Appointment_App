import React, { useState } from 'react'
import {assets} from '../../../admin/src/assets/assets.js'

function Login() {

    const [state,setState]=useState('Admin')


  return (
    <form className='min-h-[80vh] flex items-center'>
      <div className='flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-2xl border-zinc-300 rounded-xl text-zinc-600 text-sm shadow-lg'>
        <p className='text-2xl font-semibold m-auto'>< span className='text-primary'>{state}</span>Login</p>
        <div>
            <p>Email</p>
            <input type="email" required />
        </div>
        <div>
            <p>Password</p>
            <input type="password" required />
        </div>
        <button>Login</button>
      </div>
    </form>
  )
}

export default Login
