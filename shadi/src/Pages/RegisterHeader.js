import React from 'react'
import LOGO from "../Img/logo.png"
export const RegisterHeader = () => {
  return (
    <div className="register-header">
      <ul className="register-header-ul">
        {/* <li><img src={LOGO} className='logo'></img></li> */}
        <li>Logo</li>
        <li><a href='/'>Home</a></li>
      </ul>
    </div>)
}
