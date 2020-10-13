import React, { useState } from 'react';
import {fileQuestions} from '../../data/questions';
import Question from '../question/Question';
import './Test.scss';
import BackToHome from '../common/back-to-home/BackToHome';
import { useHistory } from 'react-router-dom';

function Test () {
  const [questions] = useState(fileQuestions);
  const history = useHistory();

  const submitForm = (ev) => {
    ev.preventDefault();  
    history.push('/test-result');
  }

  const mappedQuestions = (questions.map((question) => 
    <Question text={question.text} answers={question.answers} id={question.id} key={question.id}/>));

  return (
    <>
    <div className="questions-container">
      <form onSubmit={submitForm} className="question-form">
        {mappedQuestions}
        <input type="submit" value="Submit" />
      </form>
    </div>
    <BackToHome/>
    </>
  );
}

export default Test;