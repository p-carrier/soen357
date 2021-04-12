import './App.css';
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { NavBar, Resto, Home } from './pages';
function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <main>
        <div className="Container">
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
