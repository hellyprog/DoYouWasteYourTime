import React from 'react';
import { Link } from 'react-router-dom';

class Home extends React.Component {
  render() {
    return (
      <div>
        <div>There are two types of people: those who waste their time and those who don't</div>
        <div>You can check <Link to="/test">here</Link> which type are you.</div>
      </div>
    );
  }
}

export default Home;