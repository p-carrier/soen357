import React from 'react';
import styled from 'styled-components/macro';
import { ReactComponent as Cloud } from '../img/cloud.svg';
import { ReactComponent as Drizzle } from '../img/cloud-drizzle.svg';
import { ReactComponent as Lightning } from '../img/cloud-lightning.svg';
import { ReactComponent as Rain } from '../img/cloud-rain.svg';
import { ReactComponent as Snow } from '../img/cloud-snow.svg';
import { ReactComponent as Sun } from '../img/sun.svg';
import { ReactComponent as Wind } from '../img/wind.svg';

import Dot from './Dot';

const Container = styled.div`
  width: 100%;
  height: 2.5rem;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  box-shadow: inset 0 0 5px 1px rgba(0,0,0,0.1);
  padding-top: 2px;
  background-color: white;
`;

const Button = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  & svg {
    color: var(--color, 'black')
  }
`;

const tabs = [
  {
    id: 1,
    name: 'sun',
    cp: function Svg(){ return <Sun />;}
  },
  {
    id: 2,
    name: 'wind',
    cp: function Svg(){ return <Wind />;}
  },
  {
    id: 3,
    name: 'cloud',
    cp: function Svg(){ return <Cloud />;}
  },
  {
    id: 4,
    name: 'rain',
    cp: function Svg(){ return <Rain />;}
  },
  {
    id: 5,
    name: 'drizzle',
    cp: function Svg(){ return <Drizzle />;}
  },
  {
    id: 6,
    name: 'lightning',
    cp: function Svg(){ return <Lightning />;}
  },
  {
    id: 7,
    name: 'snow',
    cp: function Svg(){ return <Snow />;}
  },
];

const WeatherTab = ({ dispatch, active }) => {
  return (
    <Container>
      {tabs.map(({id, name, cp}) => (
        <>
          <Button
            onClick={() => dispatch({ type: name, active: id })} 
            key={id}
            style={ id === active ? {
              '--color': 'red'
            } : {}}
          >
            {cp()}
          </Button>
          {id !== 7 && <Dot key={`${id}-dot`} />}
        </>
      ))}
    </Container>
  );
};

export default WeatherTab;
