import React, { useReducer } from 'react';
import styled from 'styled-components';

import WeatherTab from './WeatherTab';
import FoodCard from './FoodCard';
import { Foods } from '../db/Food';

const Container = styled.div`
  max-width: 1200px;
  margin: auto;
`;
const CardContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
// const ContainerResto = styled.div`
// max-width: 1200px;
// margin: auto;
// `;
// const CardContainerResto = styled.div`
// display: flex;
// justify-content: space-between;
// `;

const initialState = { color: 'red', food: Foods.sun };

const reducer = (state, action) => {
  console.log(action);
  switch(action.type) {
  case 'sun':
    return { color: 'red', food: Foods.sun, active: action.active };
  case 'wind':
    return { color: 'red', food: Foods.wind, active: action.active  };
  case 'cloud':
    return { color: 'red', food: Foods.cloud, active: action.active  };
  case 'rain':
    return { color: 'red', food: Foods.rain, active: action.active  };
  case 'drizzle':
    return { color: 'red', food: Foods.drizzle, active: action.active  };
  case 'lightning':
    return { color: 'red', food: Foods.lightning, active: action.active  };
  case 'snow':
    return { color: 'red', food: Foods.snow, active: action.active  };
  default:
    return { color: 'red', food: Foods.sun, active: 1 };
  }
};


export const restaurants=[
  {
      id: 1,
      img: './img/pouletRouge.png',
      name: 'Poulet Rouge',
      desc: 'Lorme ipsum',
    },
    {
      id: 2,
      img: './img/restaurant2.png',
      name: 'The Keg',
      desc: 'Lorme ipsum',
    },
    {
      id: 3,
      img: './img/laCage.png',
      name: 'La Cage',
      desc: 'Lorme ipsum',
    },
    {
      id: 4,
      img: './img/stHubert.png',
      name: 'St-Hubert',
      desc: 'Lorme ipsum',
    },
]




const WeatherContainer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Container>
      <WeatherTab dispatch={dispatch} active={state.active}/>
      <CardContainer>
        {state.food.map(({id, ...props}) => <FoodCard key={id} {...props} />)}
      </CardContainer>

      <ContainerResto>
        <CardContainerResto>
          {restaurants.map(({id, ...props}) => <RestoCard key={id} {...props} />)}
        </CardContainerResto>
      </ContainerResto>
    </Container>
  );
};

export default WeatherContainer;
