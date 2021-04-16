import React from 'react';
import './Home.css';

import WeatherContainer from '../../components/WeatherContainer';
import ImgSlider from '../../components/ImgSlider';

const Home = () => {
  return (
    <div>
      <ImgSlider />
      <WeatherContainer />
    </div>
  );
};

export default Home;