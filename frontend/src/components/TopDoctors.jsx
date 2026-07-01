import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

function TopDoctors() {
  const navigate = useNavigate()
  const { doctors } = useContext(AppContext)


  return (
    <div className='flex flex-col flex-wrap items-center gap-4 my-16 text-gray md:mx-10'>
      <h1 className='text-3xl font-medium'>Top Doctors to Book </h1>
      <p className='sm:w-1/3 text-center text-sm'>Simply browse through our extension list of trusted doctors.</p>
      <div className='w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-5 gap-1 pt-1 gap-y-1 px-1 sm:px-0'>
        {doctors.slice(0, 10).map((item, index) => (
          <div onClick={() => { navigate(`/appointment/${item._id}`); scrollTo(0, 0) }} className='flex flex-col rounded-xl border border-blue-200 m-1 w-40 cursor-pointer hover:translate-y-[-10px] transition-all duration-300'>
            <img className='gap-2 bg-blue-50 rounded-xl' src={item.image} alt="" />
            <div className=''>
              <div className='flex items-center gap-2 p-2'>
                <p className={`${item.available ? 'bg-green-700' : 'bg-gray-500'} w-2 h-2 rounded-full`}></p><p className={`${item.available ? 'text-green-700' : 'text-gray-500'}`}>{item.available ? 'Available' : 'Unavailable  '}</p>

              </div>
              <p className='text-black text-lg font-medium p-2 '>{item.name}</p>
              <p className='text-gray-600 text-sm p-2'>{item.speciality}</p>
            </div>
          </div>
        ))}
      </div>
      <button onClick={() => { navigate('/doctors'); scrollTo(0, 0) }} className='bg-blue-100  text-gray-600 px-8 py-3 mt-10 rounded-3xl font-medium cursor-pointer hover:scale-107 transition-all duration-300'>More</button>
    </div>
  )
}

export default TopDoctors
