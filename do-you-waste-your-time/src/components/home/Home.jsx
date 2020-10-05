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
        <div className="sub-title-container">
          <div className="logo-container">
            <img src="/undraw_dev_productivity_umsq.png" alt="time-wasting-logo-2" className="time-wasting-logo"/>
          </div>
          <div className="sub-title">Worldwide, the average life expectancy at birth is 71 years. Is it a lot or no?</div>
        </div>
        <div className="sub-title-container">
          <div className="sub-title">On average, we spend 144 minutes per day on social media. Is it a lot or no?</div>
          <div className="logo-container">
            <img src="/undraw_Social_media_re_w12q.png" alt="time-wasting-logo-3" className="time-wasting-logo"/>
          </div>
        </div>
        <div className="question-title">So... what?</div>
        <div className="links-container">
          <div className="link-container">You can check <Link to="/facts" className="link">here</Link> facts about time wasting.</div>
          <div className="link-container">You can check <Link to="/test" className="link">here</Link> if you are wasting time.</div>
        </div>
      </div>
    );
  }
}

export default Home;