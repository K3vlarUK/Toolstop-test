import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navigation from './components/Navigation';

import HomePage from './components/HomePage';
import Top40 from './containers/Top40';
import Top20 from './containers/Top20';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
      <div className="header-bar">
        <a href="/"><span className="company">Toolstop</span></a>
        <input type="text" className="search-box" placeholder="Search product or brand..." />
        <button type="button" className="sign-in">Sign In</button>
      </div>
      <br/>
        <Navigation />
        <Switch>
          <Route exact path="/" component={ HomePage } />
          <Route exact path="/top40" component={ Top40 } />
          <Route path="/top40/:brand" component={ Top20 } />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
