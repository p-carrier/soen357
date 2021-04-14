import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  position: relative;
  width: 230px;
  height: 302px;

  box-sizing: border-box;
  background: var(--color, rgba( 255, 255, 255, 0.40 ));
  box-shadow: 0 8px 22px 0 rgba( 31, 38, 135, 0.27 );
  backdrop-filter: blur( 11.0px );
  -webkit-backdrop-filter: blur( 11.0px );
  border-radius: 10px;
  border: 1px solid rgba( 255, 255, 255, 0.18 );

  padding-top: 120px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
  margin-top: 100px;
`;

const Image = styled.img`
  position: absolute;
  left: 0;
  top: -75px;
  width: 100%;
`;

const Title = styled.h3`
  font-weight: 900;
  font-size: 24px;
  line-height: 28px;
  margin-bottom: 14px;
  /* color: rgba(255, 255, 255, 0.6); */
  color: black;
`;

const FoodCard = ({ img, name, desc, restaurant}) => {

  return (
    <Container>
      <Image src={img} alt={`${name}-image`} />
      <Title>{name}</Title>
      <p>{desc}</p>
    </Container>
  );
};

export default FoodCard;