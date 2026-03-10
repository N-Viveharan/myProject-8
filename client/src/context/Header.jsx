import React from 'react'
import { assets } from '../assets/assets'

function Header() {
  return (
    <div>
      <div>
        <h1>Remove the <br /><span>from</span> <br />images for free</h1>
        <p>lorem Ipsum is simply dum scem lesum has been the
          out of the printing and typesetting industry: stry's standard dummy text</p>
          <div>
            <input type="file" name="" id="" />
            <label htmlFor="">
              <img src={assets.upload_btn_icon} alt="" />

            </label>
          </div>
      </div>
    </div>
  )
}

export default Header


