import { useEffect, useState } from 'react';

type TimeArgs = {
    milisegundos: number
}

const Timer = ({milisegundos: TimeArgs}) => {

const [seconds, setSeconds] = useState(0);
useEffect(() => {
  setInterval(()=> setSeconds(s => s + 1), 1000);
}, []);

  return (
    <div>
        <h4>Timer: <small>{seconds}</small></h4>
    </div>
  )
};

export default Timer;
