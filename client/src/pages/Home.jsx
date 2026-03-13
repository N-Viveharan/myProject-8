import React from 'react'
import Header from '../context/Header'
import Steps from '../context/Steps'
import BgSlider from '../context/BgSlider'

function Home() {
  return (
    <div>
      <Header/>
      <Steps/>
      <BgSlider/>
    </div>
  )
}

export default Home