import React from 'react';
import styled from 'styled-components';

import WeatherTab from './WeatherTab';
import FoodCard from './FoodCard';

const Container = styled.div`
  max-width: 1200px;
  margin: auto;
`;

const CardContainer = styled.div`
  padding-top: 100px;
  display: flex;
  justify-content: space-between;
`;

const Foods = [
  {
    id: 1,
    img: './img/food1.png',
    name: 'Mini Pancake',
    desc: 'Lorme ipsum',
    restaurant: 'Papa John\'s'
  },
  {
    id: 2,
    img: './img/food1.png',
    name: 'Mini Pancake',
    desc: 'Lorme ipsum',
    restaurant: 'Papa John\'s'
  },
  {
    id: 3,
    img: './img/food1.png',
    name: 'Mini Pancake',
    desc: 'Lorme ipsum',
    restaurant: 'Papa John\'s'
  },
  {
    id: 4,
    img: './img/food1.png',
    name: 'Mini Pancake',
    desc: 'Lorme ipsum',
    restaurant: 'Papa John\'s'
  },
]

const WeatherContainer = () => {

  return (
    <Container>
      <WeatherTab />
      <CardContainer>
        {Foods.map(({id, ...props}) => <FoodCard key={id} {...props} />)}
      </CardContainer>
    </Container>
  );
};

export default WeatherContainer;
