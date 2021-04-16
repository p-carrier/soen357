import React from 'react';
import styled from 'styled-components/macro';

const images = [
  {
    id: 1,
    url: "./img/slider/burger1.jpg",
  },
  {
    id: 2,
    url: "./img/slider/burger2.jpg",
  },
  {
    id: 3,
    url: "./img/slider/fish1.jpg",
  },
  {
    id: 4,
    url: "./img/slider/meal1.jpg",
  },
  {
    id: 5,
    url: "./img/slider/meal2.jpg",
  },
  {
    id: 6,
    url: "./img/slider/meal3.jpg",
  },
  {
    id: 7,
    url: "./img/slider/pizza1.jpg",
  },
  {
    id: 8,
    url: "./img/slider/salad.jpg",
  },
]

const Container = styled.div`
  overflow: hidden;
  display: flex;
  flex-wrap: nowrap;
`;

const Image = styled.img`
  width: 200px;
  height: 250px;
  border: 1px solid white;
  border-radius: 2px;
  box-shadow: 0 5px 5px -1px rgba(0,0,0,0.2);
  margin: 20px;
`;

const ImgSlider = () => {

  return (
    <Container>
      {images.map(({id, url}) => <Image key={id} src={url} />)}
    </Container>
  );
};

export default ImgSlider;
