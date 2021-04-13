import React from 'react';
import './Home.css';

import WeatherContainer from '../../components/WeatherContainer';

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <WeatherContainer />
    </div>
  );
};

export default Home;