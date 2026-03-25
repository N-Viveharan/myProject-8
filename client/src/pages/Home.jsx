import React from 'react'
import Header from '../context/Header'
import Steps from '../context/Steps'
import BgSlider from '../context/BgSlider'
import Testimonials from '../context/Testimonials'
import Upload from '../context/Upload'

function Home() {
  return (
    <div>
      <Header/>
      
      <Steps/>
      <BgSlider/>
      
      <Testimonials/>
      <Upload/>
    </div>
  )
}

export default Home