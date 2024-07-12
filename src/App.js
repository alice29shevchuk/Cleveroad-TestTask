import logo from './logo.svg';
import './App.css';
import GoogleMapISS from './components/MapMarkerISS/GoogleMapISS';
import CurrentCrew from './components/Crew/CurrentCrew';
import TimeTracker from './components/TimeStatus/TimeTracker';
import styles from './App.module.css';

function App() {
  return (
    // <div>
    //   <GoogleMapISS></GoogleMapISS>
    //   <CurrentCrew></CurrentCrew>
    //   <div className="utc-time">
    //     <h2>Current UTC Time</h2>
    //     <TimeTracker></TimeTracker>
    //   </div>
    // </div>

    <div className={styles.appContainer}>
    <div className={styles.leftPanel}>
      <GoogleMapISS />
      <div className={styles.utcTime}>
        <h3>Current UTC Time</h3>
        <TimeTracker />
      </div>
    </div>
    <div className={styles.rightPanel}>
      <CurrentCrew />
    </div>
  </div>
  );
}

export default App;
