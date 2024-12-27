import React from 'react'
import './prices.css'
import { SiBasicattentiontoken } from "react-icons/si";
const Prices = () => {
  return (
    <>
      <div className="main-prices">
        <div className="main-text-area">
          <p>Pricing</p>
          <h1>Pricing plans for everyone</h1>
          <div className="monthly-price-div">
            Monthly <div className="discount-offer">-10%</div>
          </div>
          <div className="main-three-divs-monthly">
            <div className="main-three-divs-monthly-div1">
            <SiBasicattentiontoken size={36} style={{margin:'1rem'}}/>
            <h2>Basic</h2>
            <p>For large teams & corportaions</p>
            <h1>Free
            <span>/Per Year</span></h1>
            <h3>Features</h3>
            <ul>
              <li>7,700 3-5 day turnarouord</li>
              <li>6+ Naive development</li>
              <li>5+ Task delivered one-by-one</li>
              <li>AI Blog Updates via dashboard & slack</li>
              <li>Advance Updates via dashboard & slack</li>
            </ul>
            <div className="started-price">
            Get Started
          </div>
            </div>
            <div className="main-three-divs-monthly-div1">
            <SiBasicattentiontoken size={36}  style={{margin:'1rem'}}/>
            <h2>Basic</h2>
            <p>For large teams & corportaions</p>
            <h1>Free
            <span>/Per Year</span></h1>
            <h3>Features</h3>
            <ul>
              <li>7,700 3-5 day turnarouord</li>
              <li>6+ Naive development</li>
              <li>5+ Task delivered one-by-one</li>
              <li>AI Blog Updates via dashboard & slack</li>
              <li>Advance Updates via dashboard & slack</li>
            </ul>
            <div className="started-price">
            Get Started
          </div>
            </div>
            <div className="main-three-divs-monthly-div1">
            <SiBasicattentiontoken size={36}  style={{margin:'1rem'}} />
            <h2>Basic</h2>
            <p>For large teams & corportaions</p>
            <h1>Free
            <span>/Per Year</span></h1>
            <h3>Features</h3>
            <ul>
              <li>7,700 3-5 day turnarouord</li>
              <li>6+ Naive development</li>
              <li>5+ Task delivered one-by-one</li>
              <li>AI Blog Updates via dashboard & slack</li>
              <li>Advance Updates via dashboard & slack</li>
            </ul>
            <div className="started-price">
            Get Started
          </div>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default Prices