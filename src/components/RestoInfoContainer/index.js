import React from 'react';
import styled from 'styled-components/macro';

import Dot from '../Dot';

const Container = styled.div`
  display: grid;
  grid-template-columns: 3fr 2fr;
  width: 100%;
  padding: 5em 0;
`;

const Info = styled.div`
  grid-column: 1 / span 1;
  padding: 2em 7em;
  display: flex;
  flex-direction: column;

  p {
    flex: 1;
  }
`;

const Gallerie = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  overflow: hidden;
`;

const Image = styled.img`
  width: 350px;
  height: 450px;
  margin-right: 24px;
  border-radius: 2px;
`;

const Line = styled.span`
  display: flex;
  justify-content: space-between;
  width: 100px;
  flex-direction: row;
`;

const Numbers = styled.div`
  display: flex;
`;

const Number = styled.div`
  margin-right: 4em;
  span {
    font-size: 42px;
    line-height: 1em;
  }
  p {
    font-size: 16px;
    margin: 0;
    text-transform: uppercase;
    letter-spacing: 5px;
    font-weight: bolder;
  }
`;

const images = [
  {
    id: 1,
    url: '../img/resto1.jpg',
  },
  {
    id: 2,
    url: '../img/resto2.jpg',
  }
];

const numbers = {
  'tables': 42,
  'services': 2,
};

const RestoInfoContainer = () => {

  return (
    <Container>
      <Info>
        <h2>About this restaurant</h2>
        <Line>{[...Array(5)].map((n) => <Dot key={n} />)}</Line>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
          ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
          velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
          cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
          id est laborum.</p>
        <Numbers>
          {Object.entries(numbers).map((value, index) => (
            <Number key={index}>
              <span>{value[1]}</span>
              <Line>{[...Array(5)].map((n) => <Dot key={n} />)}</Line>
              <p>{value[0]}</p>
            </Number>
          ))}
        </Numbers>
      </Info>
      <Gallerie>
        {images.map(({ id, url}) => <Image key={id} src={url} />)}
      </Gallerie>
    </Container>
  );
};

export default RestoInfoContainer;
