import React from 'react'
import axios from 'axios';
import styles from './CurrentCrew.module.css';

export const CurrentCrew = () => {
    const [crew, setCrew] = React.useState([]);
    const [isLoaded, setIsLoaded] = React.useState(false);
    React.useEffect(()=>{
        const getCurrentCountPeople=async()=>{
            try {
                const resp = await axios.get('http://api.open-notify.org/astros.json')

                const issCrew = resp.data.people.filter(person => person.craft === 'ISS');
                setCrew(issCrew);
                setIsLoaded(true);
            } catch (error) {
                console.log('Error fetching data: ',error);
            }
        }
        getCurrentCountPeople();
        const intervalId = setInterval(getCurrentCountPeople, 5000);
        return () => clearInterval(intervalId);
    },[]);
  return (
    <div className={styles.crewContainer}>
    <h3>Current ISS Crew</h3>
    {/* <ul className={styles.crewList}>
      {crew.map((member, index) => (
        <li key={index} className={styles.crewMember}>{member.name}</li>
      ))}
    </ul>
    <p className={styles.totalCrew}>Total amount: {crew.length} people on ISS</p> */}
     {isLoaded ? (
        <>
          <ul className={styles.crewList}>
            {crew.map((member, index) => (
              <li key={index} className={styles.crewMember}>{member.name}</li>
            ))}
          </ul>
          <p className={styles.totalCrew}>Total amount: {crew.length} people on ISS</p>
        </>
      ) : (
        <p>Loading...</p>
      )}
  </div>
  )
}
export default CurrentCrew;
