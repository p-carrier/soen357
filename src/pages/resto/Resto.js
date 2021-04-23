import React from 'react';
import styled from 'styled-components/macro';

import { MenuList } from '../../db/Menu';
import PageContainer from '../../components/PageContainer';

import RestoInfoContainer from '../../components/RestoInfoContainer';
import Menu from '../../components/Menu';

const AmbianceContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  flex-wrap: nowrap;
  max-width: 1200px;
  margin: auto;
  width: 100%;
  padding: 2em 0 7em;

  h2 {
    margin-right: 3em;
  }
`;

const Round = styled.div`
  background-color: #f7f7f7;
  background-image: linear-gradient(#f7f7f7, #e7e7e7);
  border-radius: 50%;
  box-shadow: 0 3px 8px #aaa, inset 0 2px 3px #fff;
  color: #878787;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 26px;
  margin: 24px;
  width: 120px;
  height: 120px;
`;

const Ambiances = ['intimate', 'elegant', 'warm', 'expensive'];

const Resto = () => {
  return (
    <PageContainer>
      <RestoInfoContainer />
      <AmbianceContainer>
        <h2>Ambiance</h2>
        {Ambiances.map(word => (
          <Round key={`ambiance-${word}`}>{word}</Round>
        ))}
      </AmbianceContainer>
      <Menu menu={MenuList}/>
    </PageContainer>
  );
};

export default Resto;
