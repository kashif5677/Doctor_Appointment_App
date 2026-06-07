import React,{useContext,useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import {AppContext} from '../context/AppContext'
import { Navigate,useNavigate } from 'react-router-dom'

function Doctor() {
  const {speciality}=useParams()
  const {doctors}=useContext(AppContext)
  const [filteredDoc,setFilteredDoc]=useState([])
  const navigate=useNavigate()


  const applyFilter=()=>{
    if(speciality){
      setFilteredDoc(doctors.filter((item)=>item.speciality===speciality))
    }else{
      setFilteredDoc(doctors)
    }
  }
  useEffect(()=>{
    applyFilter()
  },[speciality])

  return (
    <div>
    <p>Browse through our extension list of trusted doctors</p>
      <div className='flex flex-col sm:flex-row items-start gap-2 mt-5'>
        <div className='flex flex-col gap-4 text-sm text-gray-600'>
          <p onClick={()=>speciality === 'General Physician' ? navigate('/doctors'):navigate('/doctors/General Physician')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "General Physician" ?'bg-indigo-100 text-black':''}`}>General Physician</p>
          <p onClick={()=>speciality === 'Gynecologist' ? navigate('/doctors'):navigate('/doctors/Gynecologist')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "Gynecologist" ?'bg-indigo-100 text-black':''}`}>Gynecologist</p>
          <p onClick={()=>speciality === 'Dermatologist' ? navigate('/doctors'):navigate('/doctors/Dermatologist')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "Dermatologist" ?'bg-indigo-100 text-black':''}`}>Dermatologist</p>
          <p onClick={()=>speciality === 'Pediatricians' ? navigate('/doctors'):navigate('/doctors/Pediatricians')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "Pediatricians" ?'bg-indigo-100 text-black':''}`}>Pediatricians</p>
          <p onClick={()=>speciality === 'Neurologist' ? navigate('/doctors'):navigate('/doctors/Neurologist')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "Neurologist" ?'bg-indigo-100 text-black':''}`}>Neurologist</p>
          <p onClick={()=>speciality === '' ? navigate('/doctors'):navigate('/doctors/Gastroenterologist')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "Gastroenterologist" ?'bg-indigo-100 text-black':''}`}>Gastroenterologist</p>
        </div>
        <div className='w-full grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-2 gap-y-6'>
          {
            filteredDoc.map((item,index)=>(
         <div onClick={()=>navigate(`/appointment/${item._id}`)} className='flex flex-col rounded-xl border border-blue-200 m-1 w-60 cursor-pointer hover:translate-y-[-10px]  transition-all duration-300'>
            <img className='gap-2 bg-blue-50 rounded-xl' src={item.image} alt="" />
            <div className=''>
                <div className='flex items-center gap-2 p-2'>
                    <p className='bg-green-700 w-2 h-2 rounded-full'></p><p className='text-green-700'>Available</p>
                </div>
                <p className='text-black text-lg font-medium p-2 '>{item.name}</p>
                <p className='text-gray-600 text-sm p-2'>{item.speciality}</p>
            </div>
         </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Doctor
