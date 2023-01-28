import React, { useState } from 'react'
import Wrapper from '../assets/wrappers/Navbar'
import Logo from './Logo'
import {FaAlignLeft, FaCaretDown,FaUserCircle} from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import {clearStore, toggleSidebar} from '../features/user/userSlice'
const Navbar = () => {
  const [showLogout,setShowLogout]=useState(false)
  const {user} = useSelector((store)=>store.user)
  const dispatch= useDispatch()
  const toggle=()=>{
    dispatch(toggleSidebar())
  }
  return (
    <Wrapper>
      <div className="nav-center">
        <button
          className="toggle-button"
          type="button"
          onClick={toggle}
        >
          <FaAlignLeft />
        </button>
        <div>
          <Logo />
          <h3 className="logo-text">dashboard</h3>
        </div>
        <div className="btn-container">
          <button className="btn" type='button' onClick={()=>setShowLogout(!showLogout)}>
            <FaUserCircle/>
            {user?.name}
            <FaCaretDown/>
          </button>
          <div className={showLogout? "dropdown show-dropdown" :"dropdown"}>
            <button className="dropdown-btn" onClick={() => dispatch(clearStore('Logging Out ...'))}>
              logout
            </button>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default Navbar
