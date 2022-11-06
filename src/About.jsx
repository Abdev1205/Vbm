import React from 'react'
import Navbar from './Navbar'
import Logo from "./images/vbm.png"
import Footer from './Footer';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import LunchDiningIcon from '@mui/icons-material/LunchDining';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import RiceBowlIcon from '@mui/icons-material/RiceBowl';
import frustated from "./images/enginners.png"
function About() {
  return (
    <>
      <Navbar />
      <div className="about-heading">
        <div className="heading-content1">
          <img src={frustated} alt="" srcset="" />
        </div>
        <div className="heading-content2">
          <h2>We <span>Engineers</span>  have many thing to rememeber </h2>
          <h2>Remembering Daily Meals of Mess increases our <span>Burden</span></h2>
          <h3>So to <span>Overcome</span>  this problem we came with </h3>
        </div>

      </div>
      <div className="about-main">
        <div className="about-row">

          <div className="about-content-1">
            <img src={Logo} alt="" />
          </div>

          <div className="about-content-2">
            {/* <div className="about-head">
              <h1>We</h1>

            </div> */}
            <div className="left">

              <div className="main-hero-para2">
                <span className='main-hero-letter2' >V </span>  <p>  it</p>
                <span className='main-hero-letter2'>B </span>   <p>  hopal</p>
                <span className='main-hero-letter2'>M </span>   <p>  ess</p>

              </div>
            </div>
            <div className="about-points">
              <div className="points">
                <h1  > <span><RestaurantMenuIcon className='points-icon'  /></span> VBM displays daily meals of mess </h1>

              </div>


              <div className="points">
                <h1  > <span><LunchDiningIcon className='points-icon'  /></span> VBM reduces burden to rememeber all meals</h1>
              </div>

              <div className="points">
                <h1  > <span><FastfoodIcon className='points-icon'  /></span> User can search meal of any day using day picker</h1>
              </div>

              <div className="points">
                <h1  > <span><RiceBowlIcon className='points-icon'  /></span> User can search meal of any date using date picker</h1>
              </div>

             
            </div>

          </div>
        </div>


      </div>

      <div className="about-main2">
        <div className="about-row2">
<div className="upcoming-changes">

          <div className="about-content-12">
            <h1>Upcoming Changes <br /> </h1>
            <p>In <br /></p>
            <div className="main-hero-para2">
                <span className='main-hero-letter22' >V </span>  <p>  it</p>
                <span className='main-hero-letter22'>B </span>   <p>  hopal</p>
                <span className='main-hero-letter22'>M </span>   <p>  ess</p>

              </div>
          </div>
</div>

          <div className="about-content-22">
            
            
            <div className="about-points2">
              <div className="points2">
                <h1  > <span><RestaurantMenuIcon className='points-icon'  /></span> We are going to add alarms so that user can set alarm to its favorite meal </h1>

              </div>


              <div className="points2">
                <h1  > <span><LunchDiningIcon className='points-icon'  /></span> We are thinking to add Girls Hostel mess</h1>
              </div>

              <div className="points2">
                <h1  > <span><FastfoodIcon className='points-icon'  /></span> We are thinking to add rating system for every meals </h1>
              </div>

              <div className="points2">
                <h1  > <span><RiceBowlIcon className='points-icon'  /></span> We are going to replace this internet Images to real Images. Please send good pictures of meals to my email </h1>
              </div>


             
            </div>
              <a  target="_blank" href="mailto:abhay.mishra2021@vitbhopal.ac.in?subject = Feedback&body = Message">

                <button><i style={{
                  fontSize:"2.2rem",
                  padding:"0rem 1rem 0rem 1rem ",
                  color:"black"
                }} class="fas fa-envelope"></i> Email Me </button>

              </a>

          </div>
        </div>


      </div>
      <Footer/>
    </>
  )
}

export default About
