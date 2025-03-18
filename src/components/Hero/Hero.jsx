import React from 'react'
import './Hero.css'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer'
function Hero() {
  return (
    <div className='hero-main'>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default Hero