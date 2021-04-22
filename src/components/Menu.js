import React from 'react';
import styled from 'styled-components/macro';

import FoodCard from './FoodCard';

const Container = styled.div`
  max-width: 1200px;
  width: 100%;
  background: rgba(255,255,255,0.2);
  margin: auto;
  border-radius: 10px;
  padding: 3em;
  box-sizing: border-box;

`;

const Categories = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 4em;
  h2 {
    margin: 0;
    text-transform: uppercase;
  }
`;

const FoodContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Menu = ({ menu }) => {
  return (
    <Container>
      {Object.entries(menu).map((entry, index) => (
        <Categories key={index}>
          <h2>{entry[0]}</h2>
          <FoodContainer>
            {entry[1].map(({ id, img, ...props }) => (
              <FoodCard key={id} img={`../${img}`} {...props} />
            ))}
          </FoodContainer>
        </Categories>
      ))}
    </Container>
  );
};

export default Menu;
