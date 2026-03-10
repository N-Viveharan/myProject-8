import React from 'react'
import { assets } from '../assets/assets'

function Header() {
  return (
    <div className='flex items-center justify-between max-sm:flex-col-reverse gap-y-10 px-4 mt-10 lg:px-44 sm:mt-20'>
      <div >
        <h1 className='text-4xl xl:text-6xl font-bold text-neutral-700 leading-tight'>
          Remove the <br /><span className='bg-gradient-to-r from-violet-600 to-fuchsia-500 bg-clip-text text-transparent'>from</span> <br />images for free</h1>
        <p>lorem Ipsum is simply dum scem lesum has been the
          out of the printing and typesetting industry: stry's standard dummy text</p>
          <div>
            <input type="file" name="" id="" hidden />
            <label htmlFor="upload1">
              <img src={assets.upload_btn_icon} alt="" />
              <p>Update your image</p>

            </label>
          </div>
      </div>
    </div>
  )
}

export default Header


