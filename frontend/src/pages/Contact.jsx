import React from 'react'
import { assets_frontend } from '../assets/assets_frontend/assets'

function Contact() {
  return (
    <div>
      <div className='text-center text-2xl pt-10 text-gray-500'>
        <p>CONTACT<span className='text-gray-700 font-semibold'>US</span></p>
      </div>
      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28 text-sm'>
        <img className='w-full md:max-w-[360px]' src={assets_frontend.contact_image} alt="" />
        <div className='flex flex-col justify-center items-start gap-6'>
          <p className='font-semibold text-lg text-gray-600'>OUR OFFICE</p>
          <p className='text-gray-500 '>gorabazar <br />ghazipur, Uttar Pradesh</p>
          <p className='text-gray-500'>Phone: +91 8303124056 <br />Email:mdkashif5500@gmail.com</p>
          <p className='font-semibold text-lg text-gray-600'>Carrer at Prescripto</p>
          <p className='text-gray-500'>Learn more about our career opportunities</p>
          <button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500'>Explore Jobs</button>
        </div>
      </div>

    </div>
  )
}

export default Contact
