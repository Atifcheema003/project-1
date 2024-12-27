import React from 'react'
import './footer.css'
import { FaLocationDot  } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import { MdAddCall } from "react-icons/md";
const Footer = () => {
  return (
    <>
    <div className="main-footer">
        <div className="footer-div1">Logo
            <p>It has long been known that a reader's
            attention will be diverted from</p> 
            <h4>Join a Newsletter</h4>
           <div className="email-and-button">
           <input type="email" placeholder='Enter your email here' />
           <div className="arrow-button">
            <button>➔</button>
           </div>
           </div>
        </div>
        <div className="footer-div2">
            <h2>Qucik Links</h2>
            <ul>
                <li>Pages</li>
                <li>Blog</li>
                <li>Contact</li>
                <li>How to use</li>
                <li>Roadmap</li>
            </ul>
        </div>
        <div className="footer-div3">
        <h2>Services</h2>
        <ul>
                <li>Image Generator</li>
                <li>Video Generator</li>
                <li>Text Generator</li>
                <li>Code Generator</li>
                <li>Education Feedback</li>
            </ul>
        </div>
        {/* <div className="footer-div4">
        <h2>Contact</h2>
        <ul>
            <li><FaLocationDot />Pakistan</li>
            <li><MdOutlineEmail />atifcheema003@gmail.com</li>
            <li><MdAddCall />+92307-6563079</li>
        </ul>
        </div> */}
    </div>
    <div className='hr'></div>
    <div className="footer-last">
        <div className="first-lastfooter-div"> 
            <ul>
            <li>Privacy Policy</li>
            <li>Terms And Condition</li>
            <li>Contact Us</li>
        </ul></div>
        <div className="second-lastfooter-div">Copyright © 2024 Rainbow-Themes.

</div>
    </div>

    </>
  )
}

export default Footer