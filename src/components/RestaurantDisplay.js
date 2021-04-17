import React from 'react';
import styled from 'styled-components';
import {restaurants} from './WeatherContainer';
import RestaurantDisplayCard from './RestaurantDisplayCard';
const ContainerResto = styled.div`
max-width: 1200px;
margin: auto;
`;
const CardContainerResto = styled.div`
display: flex;
justify-content: space-between;
`;
const Container = styled.div`
  position: relative;
  width: 230px;
  height: 100px;

  box-sizing: border-box;
  background: var(--color, rgba( 255, 255, 255, 0.40 ));
  box-shadow: 0 8px 22px 0 rgba( 31, 38, 135, 0.27 );
  backdrop-filter: blur( 11.0px );
  -webkit-backdrop-filter: blur( 11.0px );
  border-radius: 10px;
  border: 1px solid rgba( 255, 255, 255, 0.18 );


  background-size:cover;
  display: flex;
  align-items: center;
  padding-top: 120px;
  justify-content: flex-start;
  margin-top: 100px;
`;
  
const Title = styled.h3`
padding-top:30px;
  font-weight: 900;
  font-size: 34px;
  line-height: 28px;
  margin-bottom: 14px;
  /* color: rgba(255, 255, 255, 0.6); */
  color: black;
`;

const RestaurantDisplay = ({ name, desc, img}) => {

    return (
        <ContainerResto><CardContainerResto>{restaurants.map(({id, ...props}) => <RestaurantDisplayCard key={id} {...props} />)}</CardContainerResto></ContainerResto>
    );
  };
export default RestaurantDisplay;