import React, { useState } from 'react'
import '../../containers/APP/Companies'
import './Footer.css';

function Footer() {
  return (
    <div className='mcontainer'>

        <div className='ftte'>

        <div>
            <div>
            <img src="" alt="" />
            <p className='mo'>JobHuntly</p>
            </div>
            <p className='mm'>Great platform for the job seeker that <br />
            passionate about startups.Find your <br />
             dream job easier
            </p>
        </div>

        <div>
            <ul>
                <li className='mm'><span className='mo'>About</span></li>
                <li className='mm'>Companies</li>
                <li className='mm'>Pricing</li>
                <li className='mm'>Terms</li>
                <li className='mm'>Advice</li>
                <li className='mm'>Privacy Policy</li>
            </ul>
        </div>

        <div>
            <ul>
                <li><span className='mo'>Ressources</span></li>
                <li className='mm'>Help Docs</li>
                <li className='mm'>Guide</li>
                <li className='mm'>Updates</li>
                <li className='mm'>Contact Us</li>
            </ul>
        </div>

        <div>
            <h1 className='mo'>Get job notifications</h1>
            <p className='mm'>The latest job news,articles,sent to <br />
            your inbox weekly
            </p>
            <div>
                <input className='thrc' type="text"  />
                <button>Subscribe</button>
            </div>
        </div>
        
        </div>

        {/* <div className='traitss'></div> */}

        <div>
            <p className='mmi'>2021 @ JobHuntly.All Rights reserved</p>
            <div>
                <img src="" alt="" />
                <img src="" alt="" />
                <img src="" alt="" />
                <img src="" alt="" />
                <img src="" alt="" />
            </div>
        </div>

    </div>
  )
}
export default Footer