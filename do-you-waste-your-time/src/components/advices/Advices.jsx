import React, {useState, useEffect} from 'react';
import {fileAdvices} from '../../data';
import Advice from '../advice/Advice';
import BackToHome from '../common/back-to-home/BackToHome';
import {Link} from 'react-router-dom';
import { ADVICE_TITLE } from '../../data';
import './Advices.scss';

function Advices () {
  const [advices] = useState(fileAdvices);

  const mappedAdvices = (advices.map((advice) =>
    <Advice id={advice.id} text={advice.text} title={advice.title} key={advice.id}/>
  ));

  useEffect(() => {
    document.title = ADVICE_TITLE;
  }, []);

  return (
    <>
      <div className="advices-container">
      <div className="heading">Check our list of time management advices.</div>
      <div className="heading">You can send us your advices via <Link to="/contact-us" className="link">contact-us</Link> page. The best ones will be published in this section.</div>
        {mappedAdvices}
      </div>
      <BackToHome/>
    </>
  );
}

export default Advices;