import React from 'react';
import './OccasionTab.css';

const occasion = [
  {
    name: 'date',
  },
  {
    name: 'meeting',
  },
  {
    name: 'hangout', 
  },
  {
    name: 'event',
  },
  {
    name: 'birthday',
  },
];

const OccasionTab = ({ dispatch, active }) => {
  return (
    <div className="occasion-tab">
      {occasion.map(({ name }) =>
        <button
          key={name}
          title={name}
          className={active == name ? 'active' : ''}
          onClick={() => dispatch({ type: name })}
        >{name}</button>)}
    </div>
  );
};

export default OccasionTab;