import React, { useState, useContext } from 'react'
import { assets } from './../assets/assets_admin/assets';
import { assets_frontend } from '../assets/assets_frontend/assets';
import { NavLink, useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

function Navbar() {

  const navigate = useNavigate()

  const { token, setToken } = useContext(AppContext)

  const [showMenu, setShowMenu] = useState(false)

  const logout = () => {
    localStorage.removeItem('token')
    setToken(false)
    navigate('/login')
  }


  return (
    <div className='flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400'>
      <img onClick={() => navigate('/')} className='w-44 cursor-pointer' src={assets.admin_logo} alt="" />
      <ul className='hidden md:flex items-start gap-5 font-medium'>
        <NavLink to='/'>
          <li className=''>Home</li>
          <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
        </NavLink>
        <NavLink to='/doctors'>
          <li >All Doctors</li>
          <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
        </NavLink>
        <NavLink to='/About'>
          <li>About</li>
          <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
        </NavLink>
        <NavLink to="Contact">
          <li>Contact</li>
          <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
        </NavLink>
      </ul>
      <div className='flex items-center gap-4 '>
        {
          token
            ?
            (
              <div className='flex items-center gap-2 cursor-pointer group relative'>
                <img className='w-8 rounded-full' src={assets_frontend.profile_pic} alt="" />
                <img className='w-2.5' src={assets_frontend.dropdown_icon} alt="" />
                <div className='absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block'>
                  <div className='min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4'>
                    <p onClick={() => navigate('myprofile')} className='hover:text-black cursor-pointer'>My profile</p>
                    <p onClick={() => navigate('myappointment')} className='hover:text-black cursor-pointer'>My Appointment</p>
                    <p onClick={logout} className='hover:text-black cursor-pointer'>Logout</p>
                  </div>
                </div>
              </div>)
            : (<button onClick={() => navigate('/login')} className='bg-primary text-white px-8 py-3 rounded-full font-light hidden md:block cursor-pointer'>create account</button>)
        }
        <img onClick={() => setShowMenu(true)} className='w-6 md:hidden' src={assets_frontend.menu_icon} alt="" />
        {/* ------------------mobile menu----------------- */}
        <div className={` ${showMenu ? 'fixed w-full' : 'h-0 w-0'} md:hidden right-0 top-0 bottom-0 z-20 overflow-hidden bg-white transition-all`}>
          <div className='flex items-center justify-between px-5 py-4'>
            <img className='w-36' src={assets_frontend.logo} alt="" />
            <img className='w-7' onClick={() => setShowMenu(false)} src={assets_frontend.cross_icon} alt="" />
          </div>
          <ul className='flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium'>
            <NavLink onClick={() => setShowMenu(false)} to='/'> <p className='px-4 py-2 rounded inline-block'>Home</p></NavLink>
            <NavLink onClick={() => setShowMenu(false)} to='/doctors'><p className='px-4 py-2 rounded inline-block'>All DOCTORS</p></NavLink>
            <NavLink onClick={() => setShowMenu(false)} to='/about'><p className='px-4 py-2 rounded inline-block'>ABOUT</p></NavLink>
            <NavLink onClick={() => setShowMenu(false)} to='/contact'><p className='px-4 py-2 rounded inline-block'>CONTACT</p></NavLink>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar
