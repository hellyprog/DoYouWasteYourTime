import React, {useState, useEffect} from 'react';
import './DayTimer.scss';
import BackToHome from '../common/back-to-home/BackToHome';

function DayTimer() {
  const [timeTillEndOfDay, setTimeLeft] = useState(calculateTimeTillEndOfToday());

  function calculateTimeTillEndOfToday() {
    const d = new Date();
    const h = d.getHours();
    const m = d.getMinutes();
    const s = d.getSeconds();
    const hoursTilEndOfDay = 23 - h;
    const minutesTilEndOfDay = 59 - m;
    const secondsTilEndOfDay = 59 - s;

    return `${hoursTilEndOfDay}h ${minutesTilEndOfDay}m ${secondsTilEndOfDay}s`;
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeTillEndOfToday());
    }, 1000);

    return () => clearTimeout(timer);
  });

  return (
    <>
      <div className="day-timer-container">
        <div className="timer">You still have <b>{timeTillEndOfDay}</b> to make this day more productive. Don't waste it!</div>
      </div>
      <BackToHome/>
    </>
  );
}

export default DayTimer;