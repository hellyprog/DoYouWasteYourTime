import React from 'react';
import { Link } from 'react-router-dom';
import './BackToHome.scss';

class BackToHome extends React.Component {
  render () {
    return (
      <div className="back-to-home-link-container">
        <Link to="/" className="back-to-home-link">Back to home page</Link>;
      </div>
    );
  }
}

export default BackToHome;