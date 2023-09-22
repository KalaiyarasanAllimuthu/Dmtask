import React, { useState, useEffect } from 'react';
import './Timer.css'
import { FaPlay, FaPause, FaStop, FaUndo } from 'react-icons/fa';

const Timer = () => {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval;

    if (isActive) {
      interval = setInterval(() => {
        setSeconds((prevSeconds) => {
          if (prevSeconds === 59) {
            setMinutes((prevMinutes) => {
              if (prevMinutes === 59) {
                setHours((prevHours) => prevHours + 1);
                return 0;
              } 
              else {
                return prevMinutes + 1;
              }
            });
            return 0;
          } 
          else {
            return prevSeconds + 1;
          }
        });
      }, 1000);
    } 
    else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isActive]);

  const handleStart = () => {
    setIsActive(true);
  };

  const handleStop = () => {
    setIsActive(false);
  };

  const handleReset = () => {
    setIsActive(false);
    setHours(0);
    setMinutes(0);
    setSeconds(0);
  };

  const handleResume = () => {
    setIsActive(true);
  };

  return (
       <div className='Timer-parent-container'>
       <div className='Timer-cantainer'>
       <h1 className='heading'>Stop Watch</h1>
      <h1>
        {String(hours).padStart(2, '0')}:{String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
      </h1>
      <div className='Timer-btn'>
        <button onClick={handleStart}><FaPlay /> Start</button>
        <button onClick={handleStop}><FaStop /> Stop</button>
        <button onClick={handleReset}><FaUndo /> Reset</button>
        <button onClick={handleResume}><FaPause /> Resume</button>
      </div>
      </div>
    </div>
  );
};

export default Timer;
