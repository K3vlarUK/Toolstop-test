import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navigation from './components/Navigation';

import HomePage from './components/HomePage';
import Top40 from './components/Top40';
import Categories from './components/Categories';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
      <header>Toolstop</header>
        <Navigation />
        <Switch>
          <Route exact path="/" component={ HomePage } />
          <Route path="/top40" component={ Top40 } />
          <Route path="/categories" component= { Categories } />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
