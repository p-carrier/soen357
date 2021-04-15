import React from 'react';
import './Home.css';


import {WeatherContainer, Mood } from '../../components';

const Home = () => {
  return (
    <div>
      <Mood/>
      <WeatherContainer />
    </div>
  );
};

export default Home;