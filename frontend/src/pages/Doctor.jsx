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
      <div>
        <div>
          <p>General Physician</p>
          <p>Gynecologist</p>
          <p>Dermatologist</p>
          <p>Pediatricians</p>
          <p>Neurologist</p>
          <p>Gastroenterologist</p>
        </div>
        <div className='w-full grid grid-cols-auto gap-y-6'>
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
