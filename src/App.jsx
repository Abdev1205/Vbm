import React from 'react'
import Home from './Home'
import About from './About';
import Contact from './Contact'
import MobileNav from './MobileNav';
import { Route, Routes } from 'react-router-dom';
function App() {
  return (
    <>
      <Routes>
      <Route  path='/' element={<Home/>} />
      <Route  path='/about' element={<About/>} />
      <Route  path='/contact' element={<Contact/>} />
      <Route  path='/mobileNav' element={<MobileNav/>} />
    </Routes>
    </>
  )
}

export default App
