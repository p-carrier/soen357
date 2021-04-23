import React, { useCallback, useState } from 'react';
import './MoodsTab.css';
import styled from 'styled-components/macro';

import OtherButton from '../OtherButton';

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
  // {
  //   name: 'celebrating',
  //   emoji: '🥳',
  // },
  // {
  //   name: 'worried',
  //   emoji: '😟',
  // },
  // {
  //   name: 'angry',
  //   emoji: '😠',
  // },
];

const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  button {
    align-self: flex-end;
    margin-top: 1em;
    margin-right: 1em;
    background: rgba(0,0,0,0.8);
    color: white;

    :hover {
      background: rgba(0,0,0,0.7);
    }
  }
`;

const InfoContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;
  padding: 3em 3em 1em 2em;
`;

const ModalList = styled.ul`
  flex: 2;
  display: flex; 
  flex-direction: column;
  height: 200px;
  overflow: scroll;
  background: rgb(200,200,200);
  padding: 1em 0 0;
  border-radius: 5px;
  box-shadow: inset 0 -5px 5px -1px rgba(0,0,0,0.2);
  padding-top: 90px;
  box-sizing: border-box;
  li {
    cursor: pointer;
    display: flex;
    padding: 1em;
    margin: 0;
  }
`;

const Display = styled.div`
  flex: 1;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-right: 2em;
  span {
    font-size: 6em;
    line-height: 1em;
  }
  p {
    text-transform: uppercase;

  }
`;

const MoodsTab = ({ dispatch, active }) => {
  const [mood, setMood] = useState({ mood: 'excited', emoji: '🤗' });

  const handleClick = useCallback((setModal) => {
    console.log(mood);
    dispatch({ type: 'MOOD', mood: mood.mood });
    setModal(false);
  }, [mood, dispatch]);

  return (
    <div className="moods-tab">
      {moods.slice(0,4).map(({ name, emoji }) => {
        return (
          <button
            key={name}
            title={name}
            className={active == name ? 'active' : ''}
            onClick={() => dispatch({ type: 'MOOD', mood: name })}
          >
            {emoji}
          </button>
        );
      })}
      <OtherButton
        modalInfo={(setModal) => (
          <ModalContainer>
            <InfoContainer>
              <Display>
                <span>{mood.emoji}</span>
                <p>{mood.mood}</p>
              </Display>
              <ModalList>
                {moods.map(mood => (
                  <li key={mood.name} onClick={() => setMood({ mood: mood.name, emoji: mood.emoji })}>
                    {mood.emoji} {mood.name}
                  </li>
                ))}
              </ModalList>
            </InfoContainer>
            <button onClick={() => handleClick(setModal)}>Select Mood</button>
          </ModalContainer>
        )}
      />
    </div>
  );
};

export default MoodsTab;