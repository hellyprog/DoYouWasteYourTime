import React, {useState} from 'react';
import {fileAdvices} from '../../data/advices';
import Advice from '../advice/Advice';
import BackToHome from '../common/back-to-home/BackToHome';
import './Advices.scss';

function Advices () {
  const [advices] = useState(fileAdvices);

  const mappedAdvices = (advices.map((advice) =>
    <Advice id={advice.id} text={advice.text} title={advice.title} key={advice.id}/>
  ));

  return (
    <>
      <div className="advices-container">
        {mappedAdvices}
      </div>
      <BackToHome/>
    </>
  );
}

export default Advices;