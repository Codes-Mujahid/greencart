import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import AllProducts from './pages/AllProducts'
import Navbar from './components/Navbar'
import Contact from './pages/Contact'
const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/products' element={<AllProducts/>} />
        <Route path='/contact' element={<Contact/>} />
      </Routes>
    </div>
  )
}

export default App