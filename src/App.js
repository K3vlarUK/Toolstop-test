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
      <div>
        <div className="top-bar">
          <div className="contact">
            <div className="number">
              <p className="klarna-text">Tel: 0800 107 8665 / 01698 819 000</p>
            </div>
            <div className="fake-buttons">
              <a>About Us</a>
              <a>Blog</a>
              <a>Customer Services</a>
              <a>Track Order</a>
              <a>Currency</a>
            </div>
          </div>
          <div className="klarna">
            <p className="klarna-text">3 months interest-free payments with <strong>Klarna</strong></p>
          </div>
          <div className="header-bar">
            <a href="/"><img src="https://cdn11.bigcommerce.com/s-7holhynnib/images/stencil/250x100/toolstop_logo_1582119093__49512.original.png" /></a>
            <input type="text" className="search-box" placeholder="Search product or brand..." />
            <button type="button" className="sign-in">Sign In</button>
          </div>
          <br/>
          <Navigation />
        </div>
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
