import './App.css';
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Resto, Home } from './pages';
import NavBar from './components/navBar/NavBar';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <main>
        <div className="container">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/resto" component={Resto} />
          </Switch>
        </div>
      </main>
    </BrowserRouter>
  );
}

export default App;
