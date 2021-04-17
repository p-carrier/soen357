/* eslint-disable react/react-in-jsx-scope */
import { useReducer } from 'react';
import restos from '../../db/Restaurants';
import OccasionTab from './OccasionTab';
import './OccasionContainer.css';

const initialState = { occasion: 'exited', restos: restos.excited };

const reducer = (state, action) => {
  return { occasion: action.type, restos: restos[action.type] };
};



const OccasionContainer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="occasion-container">
      <h2>Occasion</h2>
      <OccasionTab dispatch={dispatch} active={state.occasion} />
      <div className="restaurants">
        {
          state.restos.map(({ id, img, name }, index) => {
            var firstItem = index == 0;
            return <div className={`custom-resto-card ${firstItem ? 'big-thumbnail' : ''}`} 
              style={{'background-image':`url('${img}')`}}
              key={id}>
              <span>{name}</span>
            </div>;
          })
        }
      </div>
    </div>
  );

};

export default OccasionContainer;