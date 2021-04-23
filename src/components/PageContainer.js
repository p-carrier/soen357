import React from 'react';

import NavBar from './navBar/NavBar';

const PageContainer = ({ children, header = () => {} }) => {
  return (
    <>
      <NavBar>
        {header()}
      </NavBar>
      <main>
        {children}
      </main>
    </>
  );
};

export default PageContainer;
