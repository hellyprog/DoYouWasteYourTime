import React from 'react';
import { 
  BrowserRouter as Router, 
  Switch,
  Route
} from 'react-router-dom'
import './App.css';
import Home from './components/home/Home';
import TestPage from './components/test-page/TestPage';
import Header from './components/header/Header';

class App extends React.Component {
  render() {
    return (
      <Router>
        <Header />
        <Switch>
          <Route path="/test">
            <TestPage />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    );
  } 
}

export default App;