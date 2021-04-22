/* eslint-disable react/react-in-jsx-scope */
import { useReducer } from 'react';
import restos from '../../db/Restaurants';
import MoodsTab from './MoodsTab';
import './MoodsContainer.css';

const initialState = { mood: 'exited', restos: restos.excited };

const reducer = (state, action) => {
  return { mood: action.type, restos: restos[action.type] };
};



const MoodsContainer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="moods-container">
      <h2>Mood</h2>
      <MoodsTab dispatch={dispatch} active={state.mood} />
      <div className="restaurants">
        {
          state.restos.map(({ id, img, name }, index) => {
            var firstItem = index == 0;
            return (
              <div key={id} className={`custom-resto-card ${firstItem ? 'big-thumbnail' : ''}`} 
                style={{'backgroundImage':`url('${img}')`}}
              >
                <span>{name}</span>
              </div>
            );
          })
        }
      </div>
    </div>
  );

};

export default MoodsContainer;