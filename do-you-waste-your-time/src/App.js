import React from 'react';
import { 
  BrowserRouter, 
  Switch,
  Route
} from 'react-router-dom'
import './App.css';
import Home from './components/home/Home';
import Test from './components/test/Test';
import ContactUs from './components/contact-us/ContactUs';
import Header from './components/header/Header';
import TestResult from './components/test-result/TestResult';
import Analytics from 'react-router-ga';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Analytics id="UA-179606391-1" debug>
          <Header />
          <Switch>
            <Route path="/test-result">
              <TestResult />
            </Route>
            <Route path="/test">
              <Test />
            </Route>
            <Route path="/contact-us">
              <ContactUs />
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