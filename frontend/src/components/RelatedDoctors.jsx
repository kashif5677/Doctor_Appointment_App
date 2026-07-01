import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/AppContext'
import { useNavigate } from 'react-router-dom';

function RelatedDoctors({ speciality, docId }) {

    const { doctors } = useContext(AppContext)
    const navigate = useNavigate()

    const [relDoc, setRelDoc] = useState([])

    useEffect(() => {
        if (doctors.length > 0 && speciality) {
            const doctorsData = doctors.filter((doc) => doc.speciality === speciality && doc._id !== docId)
            setRelDoc(doctorsData)
        }
    }, [doctors, speciality, docId])

    return (
        <div className='flex flex-col flex-wrap items-center gap-4 my-16 md:mx-10'>
            <h1 className='text-3xl'>Top Doctors to Book </h1>
            <p>Simply browse through our extension list of trusted doctors.</p>
            <div className='flex flex-wrap px-20'>
                {relDoc.slice(0, 5).map((item, index) => (
                    <div onClick={() => { navigate(`/appointment/${item._id}`); scrollTo(0, 0) }} className='flex flex-col rounded-xl border border-blue-200 m-1 w-40 cursor-pointer hover:translate-y-[-10px]  transition-all duration-300'>
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

export default RelatedDoctors
