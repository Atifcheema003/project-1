import React from 'react'
import './App.css'
import Header from './theme/header/Header';
import UpperHeader from './theme/upperHeader/UpperHeader';
import Home from './pages/home/Home';
import Footer from './theme/footer/Footer';
import SwiperApp from './pages/swiper/SwiperApp';
import Prices from './pages/prices/Prices';


const App = () => {
  return (
    <div>
      <UpperHeader/>
      <Header/>
      <Home/>
      <SwiperApp/>
      <Prices/>
      <Footer/>
    </div>
  )
}

export default App;