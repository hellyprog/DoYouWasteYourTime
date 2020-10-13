import React from 'react';
import './Advice.scss';

function Advice (props) {
  return (
  <div className="advice-container">
    <div className="title">{props.title}</div>
    <div className="text">{props.text}</div>
  </div>
  );
}

export default Advice;