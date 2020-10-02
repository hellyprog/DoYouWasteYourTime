import React from 'react';
import { 
  BrowserRouter as Router, 
  Switch,
  Route,
  Link
} from 'react-router-dom'
import './App.css';
import Home from './components/home/Home';
import TestPage from './components/test-page/TestPage';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <div>
            <Link to="/"><img src="logo.svg" alt="logo"/></Link>
          </div>
          <Switch>
            <Route path="/test">
              <TestPage />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  } 
}

export default App;