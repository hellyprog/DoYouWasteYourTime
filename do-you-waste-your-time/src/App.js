import React from 'react';
import { 
  BrowserRouter, 
  Switch,
  Route
} from 'react-router-dom'
import './App.css';
import Home from './components/home/Home';
import TestPage from './components/test-page/TestPage';
import Header from './components/header/Header';
import FactsPage from './components/facts-page/FactsPage';
import Analytics from 'react-router-ga';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Analytics id="UA-179606391-1" debug>
          <Header />
          <Switch>
            <Route path="/test">
              <TestPage />
            </Route>
            <Route path="/facts">
              <FactsPage />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Analytics>
      </BrowserRouter>
    );
  } 
}

export default App;