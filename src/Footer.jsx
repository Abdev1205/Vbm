import React from 'react'
import MyLogo from "./images/myLogo.png"
import Coder from "./images/coder.png"
import About from "./images/about.png"
import Portfolio from "./images/portfolio.png"
import Resume from "./images/resume.png"
import Home from "./images/home.png"

function Footer() {
  return (
    <>
      <div className="footer-social">

        <a target="_blank" href="https://www.linkedin.com/in/ab-ideas-9669711b5/">

          <i class="fa-brands fa-linkedin"></i>
        </a>

        <a target="_blank" href="https://www.instagram.com/abhay_desire_yt/">
          <i class="fa-brands fa-square-instagram"></i>

        </a>

        <a target="_blank" href="https://github.com/Abdev1205">

          <i class="fa-brands fa-square-github"></i>
        </a>

        <a target="_blank" href="https://www.youtube.com/c/Abideas">

          <i class="fa-brands fa-square-youtube"></i>
        </a>

        <a target="_blank" href="https://www.facebook.com/profile.php?id=100067140832883">

          <i class="fa-brands fa-square-facebook"></i>
        </a>

      </div>
      <div className="footer">


        <div className="footer-main">
          <div className="footer-content-1">
            <img src={MyLogo} alt="" srcset="" />


          </div>
          <div className="footer-domain">
            <div className="footer-profile">

              <div className="footer-name">
                <p>Mern Developer <br /></p>
                <h1> Abhay <br /> Mishra </h1>

              </div>
              <div className="footer-image">

                <img src={Coder} alt="" srcset="" />
              </div>
            </div>

            <ul className='footer-about-list'>
              <li> <span className='footer-about-image'><img src={About} alt="" srcset="" /></span> About me</li>
              <li> <span className='footer-portfolio-image'><img src={Portfolio} alt="" srcset="" /></span> Portfolio Website</li>
              <li> <span className='footer-resume-image'><img src={Resume} alt="" srcset="" /></span> Resume</li>

            </ul>
          </div>
        </div>
        <div className="footer-main">
          <div className="projects">
            <h1>Projects</h1>
            <ul>
              <a target="_blank" href="https://devab-hostinger-clone.netlify.app/">

                <span>
                  <li> Hostinger Clone</li>
                </span>
              </a>

              <a target="_blank" href="https://devab.herokuapp.com/">

                <span>

                  <li>Make Pet Family</li>
                </span>
              </a>

              <a target="_blank" href="">
                <span>

                  <li>Portfolio Webite</li>
                </span>

              </a>

              <a target="_blank" href="">

                <span>

                  <li>VBM</li>
                </span>
              </a>

              <a target="_blank" href="">

                <span>

                  <li>VBT (comming Soon)</li>
                </span>
              </a>

              <a target="_blank" href="">

                <span>

                  <li>FRP (comming Soon)</li>
                </span>
              </a>

              <a target="_blank" href="">

                <span>

                  <li>BeFap (not deployed)</li>
                </span>
              </a>

            </ul>

          </div>
        </div>

        <div className="footer-main">
          <div className="footer-useful-links">
            <h1>Useful Links</h1>
            <ul>
              <a target="_blank" href="https://www.youtube.com/watch?v=6mbwJ2xhgzM&list=PLu0W_9lII9agiCUZYRsvtGTXdxkzPyItg">

                <li>Web Development Course</li>

              </a>

              <a target="_blank" href="https://stackoverflow.com/">

              <li>Rectify Your Error</li>

              </a>

              <a target="_blank" href="https://github.com/">

                <li>Programmers Community</li>

              </a>

              <a target="_blank" href="https://www.google.com/">

                <li>Best Source For Programmer</li>

              </a>

              <a target="_blank" href="https://www.youtube.com/watch?v=bMknfKXIFA8&t=35s">

                <li>React Js Course</li>

              </a>

              <a target="_blank" href="https://www.youtube.com/watch?v=zaLfOjNEOaQ&list=PL8p2I9GklV456iofeMKReMTvWLr7Ki9At">

                <li>Node Js Course </li>

              </a>

              <a target="_blank" href="https://www.youtube.com/watch?v=WXI27H8oPUM&list=PLbGui_ZYuhigerSlDF_v1t1mM2iGomXnq">

                <li>Express Js Course </li>

              </a>

              <a target="_blank" href="https://www.youtube.com/watch?v=ExcRbA7fy_A&list=PL4cUxeGkcC9h77dJ-QJlwGlZlTd4ecZOA">

                <li>Mongo db Course </li>

              </a>

              
              

            </ul>

          </div>
        </div>

        <div className="footer-main">
          <div className="footer-contact">
            <h1>Contact</h1>
            <ul>
              <li><img src={Home} alt="" srcset="" />Korba Chattisgarh India 495452 </li>
              <a  target="_blank" href="mailto:abhay.mishra2021@vitbhopal.ac.in?subject = Feedback&body = Message">

                <li><i style={{
                  fontSize:"2.2rem",
                  padding:"0rem 1rem 0rem 1rem "
                }} class="fas fa-envelope"></i> My Email </li>

              </a>

              <a target="_blank" href="https://www.linkedin.com/in/ab-ideas-9669711b5/">
              <li><i style={{
                  fontSize:"2.5rem",
                  padding:"0rem 1rem 0rem 1rem "
                }} class="fa-brands fa-linkedin"></i> Linkedin Account </li>
          
        </a>

        <a target="_blank" href="https://www.instagram.com/abhay_desire_yt/">
        <li><i style={{
                  fontSize:"2.5rem",
                  padding:"0rem 1rem 0rem 1rem "
                }} class="fa-brands fa-square-instagram"></i> Instagram Account </li>
          

        </a>

        <a target="_blank" href="https://github.com/Abdev1205">
        <li><i style={{
                  fontSize:"2.5rem",
                  padding:"0rem 1rem 0rem 1rem "
                }} class="fa-brands fa-square-github"></i> Github Acount </li>
          
        </a>

        <a target="_blank" href="https://www.youtube.com/c/Abideas">
        <li><i style={{
                  fontSize:"2.5rem",
                  padding:"0rem 1rem 0rem 1rem "
                }} class="fa-brands fa-square-youtube"></i> Youtube Channel </li>
          
        </a>

        <a target="_blank" href="https://www.facebook.com/profile.php?id=100067140832883">
        <li><i style={{
                  fontSize:"2.5rem",
                  padding:"0rem 1rem 0rem 1rem "
                }} class="fa-brands fa-square-facebook"></i> Facebook id </li>
          
        </a>
              
              


            </ul>

          </div>

          
        </div>

      </div>

      
    </>
  )
}

export default Footer
