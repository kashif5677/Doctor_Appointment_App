import React from 'react'
import Navbar from './components/Navbar'
import AppRoutes from './routes/AppRoutes'
import Footer from './components/Footer'

function App() {
  return (
    <div className='mx-4 sm:mx-[10%]'>

  <Navbar/>
  <AppRoutes/>
  <Footer/>
    </div>
  )
}

export default App
