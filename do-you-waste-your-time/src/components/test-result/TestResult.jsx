import React from 'react';
import './TestResult.scss';
import BackToHome from '../common/back-to-home/BackToHome';

class TestResult extends React.Component {
  render() {
    return (
      <>
      <div className="test-result-container">
        <div className="result-text">
          You are definitely wasting your time if you passed this test. 
          So get back to work and close this tab.
        </div>
        <img className="result-logo" src="/undraw_close_tab_uk6g.png" alt="close-tab"/>
      </div>
      <BackToHome />
      </>
    );
  }
}

export default TestResult;