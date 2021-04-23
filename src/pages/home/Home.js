import React from 'react';
import './Home.css';

import PageContainer from '../../components/PageContainer';
import { WeatherContainer, OccasionContainer } from '../../components';
import RestoContainer from '../../components/RestoContainer';
import Search from '../../components/search/Search';

const Home = () => {
  return (
    <PageContainer
      header={() => (
        <div className="search">
          <Search />
        </div>
      )}
    >
      <RestoContainer />
      <WeatherContainer />
      <OccasionContainer/>
    </PageContainer>
  );
};

export default Home;