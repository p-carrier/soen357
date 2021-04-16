import React from 'react';
import './Mood.css';

const moods = [
  {
    name: 'excited',
    emoji: '🤗',
    restaurants: [
      { name: '', imageUrl: '' }
    ]
  },
  { name: 'happy', emoji: '😊' },
  { name: 'sad', emoji: '😟' },
  { name: 'depressed', emoji: '😞' },
  { name: 'in love', emoji: '😍' },
];

const Mood = () => {
  return (
    <div className="mood-container">
      <h2>Mood</h2>
      <div className="moods">
        {moods.map(({name, emoji}) => <button key={name} title={name} className="mood">{emoji}</button>)} 
      </div>
    </div>
  );
};

export default Mood;