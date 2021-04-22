import React from 'react';
import './MoodsTab.css';

const moods = [
  {
    name: 'excited',
    emoji: '🤗',
  },
  {
    name: 'happy',
    emoji: '😊',
  },
  {
    name: 'sad',
    emoji: '😟',
  },
  {
    name: 'depressed',
    emoji: '😞',
  },
  {
    name: 'in love',
    emoji: '😍',
  },
];

const MoodsTab = ({ dispatch, active }) => {
  return (
    <div className="moods-tab">
      {moods.map(({ name, emoji }) =>
        <button
          key={name}
          title={name}
          className={active == name ? 'active' : ''}
          onClick={() => dispatch({ type: 'MOOD', mood: name })}
        >{emoji}</button>)}
    </div>
  );
};

export default MoodsTab;