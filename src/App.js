import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import history from './history';
import './App.css';
import HomePage from './Containers/HomePage';
import About from './Containers/About';
import AffordableHousing from './Containers/AffordableHousing';
import GeoLab from './Containers/GeoLab';
import HousekeepingService from './Containers/HousekeepingService';
import AutomationService from './Containers/AutomationService';
import ScrollToTop from './Components/ScrollToTop';

class App extends Component {
  render() {
    return (
      <Router history={history} onUpdate={() => window.scrollTo(0, 0)} >
      <ScrollToTop>
        <div>
          <Switch>
            <Route name="home" exact path="/" component={HomePage} />
            <Route name="about" path="/about" component={About} />
            <Route name="affordable" path="/affordablehousing" component={AffordableHousing} />
            <Route name="lab" path="/civilengineering" component={GeoLab} />
            <Route name="housekeeping" path="/housekeeping" component={HousekeepingService} />
            <Route name="automation" path="/homeautomation" component={AutomationService} />
          </Switch>
        </div>
        </ScrollToTop>
      </Router>
    );
  }
}

export default App;
