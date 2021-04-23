import React, { useReducer } from 'react';
import styled from 'styled-components/macro';


import { Link } from 'react-router-dom';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1em 0 2em;
  h2 {
    font-size: 2.2rem;
    font-weight: bolder;
  }
`;

const RContainer = styled.div`
  padding: 2em 0;
  max-width: 1200px;
  width: 100%;
  display: grid;
  grid-template-columns: 39% 28% 28%;
  grid-template-rows: 10rem 10rem;
  grid-template-areas:
    'big-resto resto resto'
    'big-resto resto resto';
  grid-gap: 2rem;
  height: 25rem;
`;

const RLink = styled(Link)`
  background-position: center;
  background-size: cover;
  background-image: url(${props => props.img});
  border-radius: 0.3rem;
  position: relative;
  grid-area: ${props => props.first ? 'big-resto' : ''};

  span {
    position: absolute;
    bottom: 0;
    left: 0;
    padding: 0.2rem 0.5rem;
    font-size: 1.2rem;
    color: black;
    display: inline-block;
    background-color: #ffffff99;
    border-radius: 0.1rem;
  }

`;



const RestoContainer = ({ name, reducer, initialState, el = () => {}}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Container>
      <h2>{name}</h2>
      {el(state, dispatch)}
      <RContainer>
        {state.restos.map(({ id, resto_id, img, name }, index) => (
          <RLink to={`restaurant/${resto_id}`} key={`rlink-${id}`} first={index === 0} img={`${img}`}>
            <span>{name}</span>
          </RLink>
        ))}
      </RContainer>
    </Container>
  );
};

export default RestoContainer;