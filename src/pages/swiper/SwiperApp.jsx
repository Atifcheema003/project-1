// import './Chat.css'
import React from 'react';
import './swiper.css'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

import service1 from '../../assets/chatbot.webp'
import service2 from '../../assets/chatbot.webp'
import service3 from '../../assets/chatbot.webp'

const swiperApp = () => 

   {
   
  return (
    <div>
      <div className="chat-container">


        <div className="sub-container">
{/* <div className="chat-container"> */}
<h4 className="subtitle">
        <span className="theme-gredient">
        Assisting individuals
                </span>
        </h4>
       
{/* </div> */}
    


        <div className="arrow-buttons">
        <h2 className="title">
        Chat Smarter, Not
        <br/>
        Harder with
        </h2>
    <div className="arrow-button">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path d="M15 19l-7-7 7-7" />
      </svg>
    </div>
    <div className="arrow-button">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path d="M9 5l7 7-7 7" />
      </svg>
    </div>
  </div>
        </div>


        <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>

          <div className="card-1">
            <div className="card-img">
            <img src={service1} className="card-self-img" />
            </div>
            <div className="card-text">
              <h5>
                Ask Anything
              </h5>
              <p className='description'>Lets users quickly find answers to their questions without having to search through multiple sources.</p>
              <a href="#">Explore More  &#x2192;</a>
            </div>

          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="card-1">
            <div className="card-img">
            <img src={service2} className="card-self-img" />
            </div>
            <div className="card-text">
              <h5>
                Connect Everywhere
              </h5>
              <p className='description'>Lets users quickly find answers to their questions without having to search through multiple sources.</p>
              <a href="#">Explore More  &#x2192;</a>
            </div>

          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="card-1">
            <div className="card-img">
            <img src={service3} className="card-self-img" />
            </div>
            <div className="card-text">
              <h5>
                Connect Anywhere
              </h5>
              <p className='description'>Lets users quickly find answers to their questions without having to search through multiple sources.</p>
              <a href="#">Explore More  &#x2192;</a>
            </div>

          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="card-1">
            <div className="card-img">
            <img src={service1} className="card-self-img" />
            </div>
            <div className="card-text">
              <h5>
                Fast Responding
              </h5>
              <p className='description'>Lets users quickly find answers to their questions without having to search through multiple sources.</p>
              <a href="#">Explore More  &#x2192;</a>
            </div>

          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="card-1">
            <div className="card-img">
            <img src={service2} className="card-self-img" />
            </div>
            <div className="card-text">
              <h5>
                Ask Anything
              </h5>
              <p className='description'>Lets users quickly find answers to their questions without having to search through multiple sources.</p>
              <a href="#">Explore More    &#x2192;</a>
            </div>

          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="card-1">
            <div className="card-img">
            <img src={service3} className="card-self-img" />
            </div>
            <div className="card-text">
              <h5>
                Ask Anything
              </h5>
              <p className='description'>Lets users quickly find answers to their questions without having to search through multiple sources.</p>
              <a href="#">Explore More!&#x2192;</a>
            </div>

          </div>
        </SwiperSlide>
      
      </Swiper>
        
      </div>
    </div>
  )
}

export default swiperApp;