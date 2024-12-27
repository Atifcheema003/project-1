import React, { useState } from 'react';
import './home.css';
import { DownOutlined, SettingOutlined } from '@ant-design/icons';
import { Button, Drawer, Dropdown } from 'antd';
import { IoVideocamOutline } from "react-icons/io5";
import { MdOutlineAudiotrack } from "react-icons/md";
import { MdOutlineAddPhotoAlternate } from "react-icons/md";
import { IoText } from "react-icons/io5";
import { FaCode } from "react-icons/fa";
import animated from '../../assets/animated.jpg'

const items = [
  {
    key: '1',
    label: 'My Account',
    disabled: true,
  },
  {
    type: 'divider',
  },
  {
    key: '2',
    label: 'Profile',
    extra: '⌘P',
  },
  {
    key: '3',
    label: 'Billing',
    extra: '⌘B',
  },
  {
    key: '4',
    label: 'Settings',
    icon: <SettingOutlined />,
    extra: '⌘S',
  },
];

const Home = () => {
  // State for dropdown toggle
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // State for drawer
  const [open, setOpen] = useState(false);

  const handleToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div className="main-home-page">
        <div className="logo-div-home-page">logo</div>

        {/* Hamburger Menu */}
        <div className="hamburger-menu" onClick={handleToggle}>
          <Button style={{backgroundColor:'rgb(108, 13, 159)'}} type="primary" onClick={showDrawer}>
             ☰
          </Button>
          <Drawer style={{backgroundColor:'rgb(224, 139, 214)', color:'rgb(51, 41, 50)'}} title="Basic Drawer" onClose={onClose} open={open}>
            <div className="home-indropdown">Home</div>
            <div className="tools-indropdown">
              <Dropdown
                menu={{
                  items,
                }}
                onOpenChange={(open) => setIsMenuOpen(open)}  // Update isMenuOpen state when dropdown visibility changes
              > 
                <a onClick={(e) => e.preventDefault()}>
                  Tools
                  <DownOutlined 
                    className={`dropdown-arrow ${isMenuOpen ? "arrow-up" : ""}`} // Toggle class based on isMenuOpen state
                    style={{  transition: 'transform 0.3s ease' }} // Add transition for smooth rotation
                   
                  />
                </a>
              </Dropdown>
            </div>
          <div className="pages-indropdown">Pages</div>
          <div className="roadmap-indropdown">Roadmap</div>
          <div className="howtouse-indropdown">How To Use</div>
          </Drawer>
        </div>

        {/* Dropdown Menu */}
        <div className={`dropDown-div-home-page ${isMenuOpen ? 'active' : ''}`}>
          <div className="home-indropdown">Home</div>
          <div className="tools-indropdown">
            <Dropdown
              menu={{
                items,
              }}
              onOpenChange={(open) => setIsMenuOpen(open)} // Ensure correct dropdown state
            >
              <a onClick={(e) => e.preventDefault()}>
                Tools
                <DownOutlined
                  className={`dropdown-arrow ${isMenuOpen ? "arrow-up" : ""}`} // Toggle class based on isMenuOpen state
                  style={{ margin: '2px', transition: 'transform 0.3s ease' }} // Smooth rotation
                />
              </a>
            </Dropdown>
          </div>
          <div className="pages-indropdown">Pages</div>
          <div className="roadmap-indropdown">Roadmap</div>
          <div className="howtouse-indropdown">How To Use</div>
        </div>

        <div className="getStarted-div-home-page">Get Started</div>
      </div>
      <div className="main-heading-home-page">
       
        <h1> <img className='self-image-animated' src={animated}/>Examine the Potential of<img className='self-image-animated-left' src={animated}/><span>AI Writing </span>AI Hack</h1>
        <p>
        <img className='self-image-animated' src={animated}/>Unleash Brainwave's AI potential. Use the open AI conversation app
          Rainbow theme<img className='self-image-animated-left' src={animated}/>
        </p>
        <div className="startWithAi">
          <div className="para-startWithAi">
            Type here for connecting with AI, write your prompt here and move on
            by pressing the button given below in front of you
          </div>
          <hr />
          <button className="button-startWithAi">Start With AI</button>
        </div>
      </div>
      <div className="main-Ai-made">
        <div className="heading-div">
          <h3>RAINBOW UNLOCKS THE POTENTIAL ai</h3>
          <h1>Generative AI made for creators.</h1>
        </div>
        <div className="generator-main-div">
          <div className="video-generator"><IoVideocamOutline className='self-icon-generator' />Video Generator</div>
          <div className="audio-generator"><MdOutlineAudiotrack className='self-icon-generator' /> Audio Generator</div>
          <div className="video-generator"><MdOutlineAddPhotoAlternate className='self-icon-generator' /> Photo Generator</div>
          <div className="video-generator"><IoText className='self-icon-generator' /> Text Generator</div>
        </div>
        <div className="last-one">
          <div className="code-generator"><FaCode className='self-icon-generator' /> Code Generator</div>
        </div>
      </div>
    </>
  );
};

export default Home;
