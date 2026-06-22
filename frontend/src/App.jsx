import React from 'react'
import Navbar from './components/Navbar'
import AppRoutes from './routes/AppRoutes'
import Footer from './components/Footer'
import { ToastContainer, toast } from 'react-toastify';

function App() {
  return (
    <div className='mx-4 sm:mx-[10%]'>
      <ToastContainer />
      <Navbar />
      <AppRoutes />
      <Footer />
    </div>
  )
}

export default App
