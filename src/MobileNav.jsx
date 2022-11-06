import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import PermPhoneMsgIcon from '@mui/icons-material/PermPhoneMsg';
import ContactsIcon from '@mui/icons-material/Contacts';

import CloseIcon from '@mui/icons-material/Close';
import { NavLink } from 'react-router-dom';


function MobileNav() {
  return (
    <>
    
        <div className="mobile-nav">
        <div className="mobile-navbar-link-fade-in ">
                <NavLink  className="mobile-nav-link" exact to="/"> <CloseIcon style={{
                    color:"black",
                    fontSize:"2rem",
                    padding:"0rem 0rem 0rem 1.5rem",
                }} /> </NavLink>
                <NavLink className="mobile-nav-link" exact to="/" > <HomeIcon style={{
                    color:"black",
                    fontSize:"2.4rem",
                    padding:"0rem .7rem 0rem",
                }} /> Home</NavLink>
                <NavLink className="mobile-nav-link" exact to="/about"> <ContactsIcon style={{
                    color:"black",
                    fontSize:"2rem",
                    padding:"0rem .7rem 0rem",
                }} /> About</NavLink>
                <NavLink className="mobile-nav-link" exact to="/contact"> <PermPhoneMsgIcon style={{
                    color:"black",
                    fontSize:"2rem",
                    padding:"0rem .7rem 0rem 2rem",
                }} /> Contact</NavLink>


            </div>
        </div>
    </>
  )
}

export default MobileNav
