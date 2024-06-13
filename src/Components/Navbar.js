import React from 'react'
import '../Css/Navbar.css'
export const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="site-name"><h2>FreeCode</h2></div>
        <div className="problemlist"> <b>&lt;</b> <span className='problem'>Probem List </span><b>&gt;</b></div>
        <div className="user-profile">
          {/* <div className="us-feilds"> */}
          <span className="streak">streak</span>
           <span>
            <a href="./Compiler">Compiler</a></span>
           <span>user</span>
            </div>
            </div>
    // </div>
  )
}
