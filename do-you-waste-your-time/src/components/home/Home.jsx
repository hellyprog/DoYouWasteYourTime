import React from 'react';
import { Link } from 'react-router-dom';
import './Home.scss';

class Home extends React.Component {
  render() {
    return (
      <div className="home-container">
        <div className="title-container">
          <div className="title">Everyone is wasting time.</div>
          <div className="logo-container">
            <img src="/pixeltrue-time-management-1.png" alt="time-wasting-logo" className="time-wasting-logo"/>
          </div>
        </div>
        <div className="home-content">
          There are two types of people: those who waste their time and those who don't.<br />
          You can check <Link to="/facts" className="link">here</Link> facts about time wasting.<br />
          Or<br />
          You can check <Link to="/test" className="link">here</Link> which type are you.
        </div>
      </div>
    );
  }
}

export default Home;