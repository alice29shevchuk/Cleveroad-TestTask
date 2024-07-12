import React from 'react'
import styles from './TimeTracker.module.css';

export const TimeTracker = () => {
    const [time, setTime] = React.useState(new Date().toUTCString());

    React.useEffect(() => {
        const intervalId = setInterval(() => {
          setTime(new Date().toUTCString());
        }, 1000);
        return () => clearInterval(intervalId);
      }, []);
  return (
    <p className={styles.time}>{time}</p>
  )
}
export default TimeTracker;
