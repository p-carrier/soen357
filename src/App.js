import './App.css';
import React, { useContext } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Resto, Home, Login } from './pages';
import { UserContext } from './UserContext';
import NavBar from './components/navBar/NavBar';

function App() {
  const user = useContext(UserContext);

  user.toggle = ({ isSignIn, username }) => {
    user.signin = isSignIn;
    user.username = username;
  };

  return (
    <UserContext.Provider value={user}>
      <BrowserRouter>
        <NavBar />
        <main>
          {user.username}
          <div className="container">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/login" component={Login} />
              <Route path="/resto" component={Resto} />
              <Route path="/restaurant/:id" component={Resto} />
            </Switch>
          </div>
        </main>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
