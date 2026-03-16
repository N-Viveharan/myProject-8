import React from 'react'
import { assets } from '../assets/assets'

function Upload() {
  return (
    <div className='pb-16' >

      
        <h1 className="text-center text-2xl md:text-3xl lg:text-4xl mt-4 font-semibold from-gray-900 to-gray-400 bg-clip-text bg-gradient-to-r ">See the magic.try now</h1>

        <div className='text-center m-13' >
                    <input type="file" name="" id="upload2" hidden />
                    <label htmlFor="upload1" className=' inline-flex gap-3 px-8 py-3.5 rounded-full cursor-pointer bg-gradient-to-tr from-violet-500 m-auto to-fuchsia-500 hover:scale-105 transition-all duration-700'  htmlFor="upload1">
                      <img width={20} src={assets.upload_btn_icon} alt="" />
                      <p className='text-white text-sm'>Update your image</p>
        
                    </label>
                  </div>
    </div>
  )
}

export default Upload