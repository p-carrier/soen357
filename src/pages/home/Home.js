import React from 'react';
import './Home.css';
import restos from '../../db/Restaurants';
import occasion from '../../db/Occasion';
import MoodsTab from '../../components/mood/MoodsTab';
import OccasionTab from '../../components/occasion/OccasionTab';

import PageContainer from '../../components/PageContainer';
import { WeatherContainer } from '../../components';
import RestoContainer from '../../components/RestoContainer';
import Search from '../../components/search/Search';

const moodInitialState = { mood: 'exited', restos: restos.excited };
const moodReducer = (state, action) => { 
  switch(action.type) {
  case 'MOOD':
    return { mood: action.mood, restos: restos[action.mood] };
  default: 
    return state;
  }
};

const occasionInitialState = { occasion: 'date', restos: occasion.date };
const occasionReducer = (state, action) => {
  return { mood: action.type, restos: occasion[action.type] };
};

const Home = () => {
  return (
    <PageContainer
      header={() => (
        <div className="search">
          <Search />
        </div>
      )}
    >
      <RestoContainer
        name="Mood"
        el={(state, dispatch) => (
          <MoodsTab dispatch={dispatch} active={state.mood} />
        )}
        reducer={moodReducer}
        initialState={moodInitialState}
      />
      <WeatherContainer />
      <RestoContainer
        name="Occasion"
        el={(state, dispatch) => (
          <OccasionTab dispatch={dispatch} active={state.occasion} />
        )}
        reducer={occasionReducer}
        initialState={occasionInitialState}
      />
    </PageContainer>
  );
};

export default Home;