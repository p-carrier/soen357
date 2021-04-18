import React from 'react';
import './Home.css';

// import ImgSlider from '../../components/ImgSlider';
import { WeatherContainer, MoodsContainer, OccasionContainer } from '../../components';


const Home = () => {
  return (
    <div>
      {/* <ImgSlider /> */}
      <MoodsContainer />
      <WeatherContainer />
      <OccasionContainer/>
    </div>
  );
};

export default Home;