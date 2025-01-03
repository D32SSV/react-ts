import { useState, useEffect, useRef } from "react";

const MutableRef = () => {
  const [timer, setTimer] = useState(0);

  const timerRef = useRef<number | null>(null);

  const stopTimer = () => {
    if(timerRef.current)
    window.clearInterval(timerRef.current);
  };

  const startTimer = () => {
    const currRef = window.setInterval(() => {
      setTimer((timer) => timer + 1);
    }, 1000);
    timerRef.current = currRef;
  };
  useEffect(() => {
    timerRef.current = window.setInterval(() => {
      setTimer((timer) => timer + 1);
    }, 1000);
    return () => {
      stopTimer();
    };
  }, []);
  return (
    <div>
      <p>Hook Timer : {timer}</p>
      <button onClick={() => stopTimer()}>Stop Timer</button>
      <button onClick={() => startTimer()}>Start Timer</button>
    </div>
  );
};

export default MutableRef;
