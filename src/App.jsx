import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Cursor from './ui/Home/Cursor'

const App = () => {
  return (
    <div className=' w-screen min-h-screen  px-3'>
    <Navbar/>
    <Cursor />
    <Routes>
    <Route path='/' element={<Home />} />
    </Routes>
    </div>
  )
}

export default App
