// import React from "react";
// import logo from '../images/logo.png'

// function NavBar()
// {
//     return (
//         <div className=" w-100 mborder-bottom">
//               <header className='mcontainer d-flex align-items-center justify-content-between'>
//         <div className=' menu-div'>
//         <div className=" d-flex justify-content-between  ">
//           <div className=' h-100 d-flex align-items-center gap-2'>
//             <img src={logo} alt="logo" className='mshadow' />
//             <h2 className='logo mt-2 mshadow'>JobHuntly</h2>
//           </div>
//           <div className=" d-flex gap-3 menu mt-1">
//                 <div><a className='menu-link mshadow' href="#">Find Jobs</a></div>
//                 <div><a className='menu-link mshadow' href="#">Discover Companies</a></div>
//           </div>
//         </div>
//         </div>
//         <div className='buttons d-flex justify-content-between  align-items-center '>
//             <a href='#' className='btn-login menu-link mshadow '>Login</a> 
//             <div className='mshadow pipe'></div>
//             <button className='btn-signup'>Sign Up</button>
//         </div>
//         </header>
//         </div>
//     );
// }
// export default NavBar

import React from "react";
import { NavLink } from 'react-router-dom';
import logo from '../images/logo.png';

function NavBar() {
  return (
    <div className="w-100 mborder-bottom">
      <header className='mcontainer d-flex align-items-center justify-content-between '>
        <div className='menu-div'>
          <div className="d-flex justify-content-between ">
            <NavLink to="/" className=' d-flex align-items-center gap-2 text-decoration-none '>
              <img src={logo} alt="logo" className='mshadow' />
              <h2 className='logo mt-2 mshadow'>JobHuntly</h2>
            </NavLink>
            <div className="d-flex gap-3 menu mt-1">
              <div><NavLink to="/jobs" activeClassName="mactive" className='menu-link mshadow '>Find Jobs</NavLink></div>
              <div><NavLink to="/companies" activeClassName="mactive" className='menu-link mshadow'>Discover Companies</NavLink></div>
            </div>
          </div>
        </div>
        <div className='buttons d-flex justify-content-between align-items-center'>
          <a href="#" className='btn-login menu-link mshadow'>Login</a> 
          <div className='mshadow pipe'></div>
          <button className='btn-signup'>Sign Up</button>        </div>
      </header>
    </div>
  );
}

export default NavBar;
