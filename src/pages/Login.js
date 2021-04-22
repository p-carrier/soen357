import React, { useCallback, useState } from 'react';
import styled from 'styled-components/macro';
import { UserContext } from '../UserContext';

const Container = styled.div``;

const Input = styled.input``;

const Login = () => {
  const [username, setUsername] = useState('');

  const onChange = useCallback(e => {
    setUsername(e.target.value);
  });

  const onSubmit = useCallback((toggle) => {
    toggle(true, username);
  }, [username]);

  return (
    <Container>
      {username}
      <Input 
        onChange={onChange}
      />
      <UserContext.Consumer>
        {({toggle}) => (
          <button onSubmit={() => onSubmit(toggle)}>Login</button>
        )}
      </UserContext.Consumer>
    </Container>
  );
};

export default Login;
