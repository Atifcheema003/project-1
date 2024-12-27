
import React from 'react';
import './swiper.css';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import codeImage from '../../assets/code-image-project.webp'
import chatbot from '../../assets/chatbot.webp'
// Import required modules
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

const SwiperApp = () => {
  return (
    <>
      <div className="main-swiper-page">
        <h3>Assisting individuals</h3>
        <h1>
          Chat Smarter, Not
          <br />
          Harder with
        </h1>
        <div className="swiper-class">
          <Swiper
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            style={{ backgroundColor: 'rgba(65, 50, 63, 0.35)', border: '4px solid rgba(105, 37, 96, 0.35)' }}
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            coverflowEffect={{
              stretch: 0,  // No extra space between slides
              // Depth perspective
              modifier: 1,
              slideShadows: true,
            }}
            pagination={{ clickable: true }}
            navigation={true} // Enable navigation
            modules={[EffectCoverflow, Pagination, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-1.jpg" alt="Nature 1" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-2.jpg" alt="Nature 2" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-3.jpg" alt="Nature 3" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-4.jpg" alt="Nature 4" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-5.jpg" alt="Nature 5" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-6.jpg" alt="Nature 6" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-7.jpg" alt="Nature 7" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-8.jpg" alt="Nature 8" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-9.jpg" alt="Nature 9" />
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="main-code-image-container">
          <div className="paragraph-side">
            <h1>Code generating AI refers to artificial intelligence.</h1>
            <ul>
              <li>Transformer Models</li>
              <li>Conditional Generative Models</li>
              <li>Pre-trained Models</li>
              <li>Variational Autoencoders</li>
            </ul>
            <button>Start Exploring Now</button>
          </div>
          <div className="image-side">
            <img className='self-image-image-side' src={codeImage} />
          </div>
        </div>
        <div className="main-chatbot-page">
          <div className="image-side-chatbot">
            <img className='self-image-chatabot' src={chatbot} />
          </div>
          <div className="text-side-chatbot">
            <h3>How it work</h3>
            <h1>Connect with Al chatbot</h1>
            <p>Dentify the platform or interface through which you can access the chatbot.
               This could be a website, a messaging app, or a dedicated application.
              Try It Now </p>
            <button>Try It Now</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SwiperApp;

