import React from 'react';
import styled from 'styled-components';
import RestaurantDisplay from './RestaurantDisplay'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
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

  background-image:var(--image);
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

const RestaurantDisplayCard = ({ name, desc, img}) => {

  return (
    <Container style={{ '--image' : `url(${img})`}}>
      <Title>{name}</Title>
    </Container>
  
  );
};

export default RestaurantDisplayCard;