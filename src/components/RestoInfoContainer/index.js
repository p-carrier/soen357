import React from 'react';
import styled from 'styled-components/macro';

import Dot from '../Dot';

const Container = styled.div`
  display: grid;
  grid-template-columns: 3fr 2fr;
  width: 100%;
`;

const Info = styled.div`
  grid-column: 1 / span 1;
  padding: 2em 7em;
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
`;

const Line = styled.span`
  display: flex;
  justify-content: space-between;
  width: 100px;
  flex-direction: row;
`;

const images = [
  {
    id: 1,
    url: './img/resto1.jpg',
  },
  {
    id: 2,
    url: './img/resto2.jpg',
  }
];

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
      </Info>
      <Gallerie>
        {images.map(({ id, url}) => <Image key={id} src={url} />)}
      </Gallerie>
    </Container>
  );
};

export default RestoInfoContainer;
