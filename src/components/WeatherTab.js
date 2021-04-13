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
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  box-shadow: inset 0 0 5px 1px rgba(0,0,0,0.1);
  padding-top: 2px;
`;

const Dot = styled.div`
  width: 4px;
  height: 4px;
  border-radius: 4px;
  background: black;
`;

const Button = styled.button`
  background: none;
  border: none;
`;

const WeatherTab = () => {
  const iconSelection = (id) => {
    switch(id) {
      case 0: return <Sun />;
      case 1: return <Wind />;
      case 2: return <Cloud />;
      case 3: return <Rain />;
      case 4: return <Drizzle />;
      case 5: return <Lightning />;
      case 6: return <Snow />;
      default: return;
    }
  }

  return (
    <Container>
      {[...Array(7).keys()].map(n => (
        <>
          <Button>
            {iconSelection(n)}
          </Button>
          {n !== 6 && <Dot />}
        </>
      ))}
    </Container>
  );
};

export default WeatherTab;
