import React, { Component } from 'react';
import moment from "moment";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


import NavigationContainer from './navigation/navigation-container'
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import Blog from "./pages/blog";
import PortfolioDetail from "./portfolio/portfolio-detail";
import NoMatch from "./pages/no-match"

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <Router>
          <div>
            <div className="top-navigation">
              <h1 className="title">Alivia Liljenquist's Portfolio</h1>
              <div className="date">{moment().format('MMMM Do YYYY, h:mm:ss a')}</div>
              <hr/>
              <NavigationContainer />
              <hr className="hr_2"/>
            </div>
            
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about-me" component={About} />
              <Route path="/contact-me" component={Contact} />
              <Route path="/blog" component={Blog} />
              <Route exact path="/portfolio/:slug" component={PortfolioDetail} />
              <Route component={NoMatch} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}
