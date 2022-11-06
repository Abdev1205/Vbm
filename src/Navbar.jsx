import React from 'react'
import Logo from "./images/vbm.png"
import HomeIcon from '@mui/icons-material/Home';
import PermPhoneMsgIcon from '@mui/icons-material/PermPhoneMsg';
import ContactsIcon from '@mui/icons-material/Contacts';
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink } from 'react-router-dom';
function Navbar() {
  return (
    <>
        <div className="navbar">
            <div className="navbar-brand">
            <img src={Logo} alt="" srcset="" />
                <h1> VBM</h1>
            </div>
            <div className="navbar-link">
                <NavLink className="nav-link" exact to="/" > <HomeIcon style={{
                    color:"black",
                    fontSize:"2.4rem",
                    padding:"0rem .5rem 0rem",
                }} /> Home</NavLink>
                <NavLink className="nav-link" exact to="/about"> <ContactsIcon style={{
                    color:"black",
                    fontSize:"2rem",
                    padding:"0rem .5rem 0rem",
                }} /> About</NavLink>
                <NavLink className="nav-link" exact to="/contact"> <PermPhoneMsgIcon style={{
                    color:"black",
                    fontSize:"2rem",
                    padding:"0rem .5rem 0rem",
                }} /> Contact</NavLink>
                <NavLink className="nav-link-mobile" exact to="/mobileNav"> <MenuIcon style={{
                    color:"black",
                    fontSize:"2rem",
                    padding:"0rem .5rem 0rem",
                }} /> </NavLink>


            </div>
        </div>
    </>
  )
}

export default Navbar
