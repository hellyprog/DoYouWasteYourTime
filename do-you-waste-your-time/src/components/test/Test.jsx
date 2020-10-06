import React from 'react';
import {questions} from '../common/data/questions';

class Test extends React.Component {
  constructor () {
    super();

    this.state = {
      questions: questions
    };
  }
  
  render() {
    return <div>Test</div>;
  }
}

export default Test;