import './App.css';
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import {  Resto, Home } from './pages';
import NavBar from './components/navBar/NavBar';
import RestaurantDisplay from './components/RestaurantDisplay';
import RestoCard from './components/RestaurantCard'
function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <main>
        <div className="Container">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/resto" component={Resto} />
            <Route exact path={"/RestaurantDisplay"} component={RestaurantDisplay} />
          </Switch>
        </div>
      </main>
    </BrowserRouter>
  );
}

export default App;
