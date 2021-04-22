import React from 'react';

export const UserContext = React.createContext({
  signin: false,
  username: '',
  toggle: () => {}
});