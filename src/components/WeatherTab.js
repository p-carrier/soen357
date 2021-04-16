import React from 'react';
import styled from 'styled-components';
import { ReactComponent as Cloud } from '../img/cloud.svg';
import { ReactComponent as Drizzle } from '../img/cloud-drizzle.svg';
import { ReactComponent as Lightning } from '../img/cloud-lightning.svg';
import { ReactComponent as Rain } from '../img/cloud-rain.svg';
import { ReactComponent as Snow } from '../img/cloud-snow.svg';
import { ReactComponent as Sun } from '../img/sun.svg';
import { ReactComponent as Wind } from '../img/wind.svg';

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

const Dot = styled.div`
  width: 4px;
  height: 4px;
  border-radius: 4px;
  background: #c4c4c4;
`;

const Button = styled.button`
  background: none;
  border: none;
  & svg {
    color: var(--color, 'black')
  }
`;

const tabs = [
  {
    id: 1,
    name: "sun",
    cp: () => <Sun />
  },
  {
    id: 2,
    name: "wind",
    cp: () => <Wind />
  },
  {
    id: 3,
    name: "cloud",
    cp: () => <Cloud />
  },
  {
    id: 4,
    name: "rain",
    cp: () => <Rain />
  },
  {
    id: 5,
    name: "drizzle",
    cp: () => <Drizzle />
  },
  {
    id: 6,
    name: "lightning",
    cp: () => <Lightning />
  },
  {
    id: 7,
    name: "snow",
    cp: () => <Snow />
  },
]

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
