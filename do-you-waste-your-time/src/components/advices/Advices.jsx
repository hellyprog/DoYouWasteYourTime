import React, {useState} from 'react';
import {fileAdvices} from '../../data/advices';
import Advice from '../advice/Advice';
import BackToHome from '../common/back-to-home/BackToHome';
import {Link} from 'react-router-dom';
import './Advices.scss';

function Advices () {
  const [advices] = useState(fileAdvices);

  const mappedAdvices = (advices.map((advice) =>
    <Advice id={advice.id} text={advice.text} title={advice.title} key={advice.id}/>
  ));

  return (
    <>
      <div className="advices-container">
      <div className="heading">Check our list of time management advices.</div>
      <div className="heading">You can send us your advices via <Link to="/contact-us" className="link">contact-us</Link> page.</div>
        {mappedAdvices}
      </div>
      <BackToHome/>
    </>
  );
}

export default Advices;