import React, { useState } from 'react'
import '../../containers/APP/Companies'
import './Header.css';


function Header() {
  return (
    <div  className="">
      <header>
        <div className="headfl">
        <div className="imp">
            <div className="im">
        <div className="img1">
            <img src="" alt="" />
        </div>
        <p className="pv">jobHuntly</p>
        </div>
        <div className="ph">
          <p className="fd">Find Jobs</p>
          <p className="bc">Browse Companies</p>
        </div>
        </div>
        <div className="lg">
            <p className="log">Login</p>
            <div className="trt"></div>
            <button className="sup">Sign Up</button>
        </div>
        </div>
</header>
    </div>
  )
}
export default Header