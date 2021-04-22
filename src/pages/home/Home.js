import React from 'react';
import './Home.css';
// import restos from '../../db/Restaurants';

// import ImgSlider from '../../components/ImgSlider';
import { WeatherContainer, MoodsContainer, OccasionContainer } from '../../components';
import RestoContainer from '../../components/RestoContainer';

const Home = () => {
  return (
    <div>
      <RestoContainer />
      <MoodsContainer />
      <WeatherContainer />
      <OccasionContainer/>
    </div>
  );
};

export default Home;