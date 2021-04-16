import React from 'react';
import './Home.css';

import ImgSlider from '../../components/ImgSlider';
import { WeatherContainer, Mood } from '../../components';

const Home = () => {
  return (
    <div>
      <ImgSlider />
      <Mood/>
      <WeatherContainer />
    </div>
  );
};

export default Home;