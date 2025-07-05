import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Cursor from './ui/Cursor'
import Footer from './ui/Footer'

const App = () => {
  return (
    <div  className=' w-screen min-h-screen  '>
    <Navbar/>
    <Cursor />
    <Routes className="px-3">
    <Route path='/' element={<Home />} />
    </Routes>
  <Footer />
    </div>
  )
}

export default App
