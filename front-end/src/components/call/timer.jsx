/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react"

const Timer = () => {
    const [isRunning, setIsRunning] = useState(true);
    const [time, setTime] = useState(0);
  
    useEffect(() => {
      let interval = null;
  
      if (isRunning) {
        interval = setInterval(() => {
          setTime(prevTime => prevTime + 1);
        }, 1000);
      } else {
        clearInterval(interval);
      }
  
      return () => {
        clearInterval(interval);
      };
    }, [time]);
  
   
    const formatTime = () => {
      const minutes = Math.floor(time / 60);
      const seconds = time % 60;
      return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    };
  
   




  return (
    <div>
    <h6>{formatTime()}</h6>
    
    </div>
  )
}

export default Timer