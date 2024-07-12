import React, { useEffect } from 'react'
import { GoogleMap, Marker,useJsApiLoader } from '@react-google-maps/api';
import axios from 'axios';
import styles from './GoogleMapISS.module.css';

const containerStyle = {
  width: '100%',
  height: '400px',
};
export const GoogleMapISS = () => {
    const [position, setPosition] = React.useState({ lat: 0, lng: 0 });
    useEffect(()=>{
        const getCurrentLocation=async()=>{
            try {
                const resp = await axios.get('http://api.open-notify.org/iss-now.json')
                const { latitude, longitude } = resp.data.iss_position;
                setPosition({lat:parseFloat(latitude),lng:parseFloat(longitude)});
            } catch (error) {
                console.log('Error fetching data: ',error);
            }
        }
        getCurrentLocation();
        const intervalId = setInterval(getCurrentLocation, 5000);
        return () => clearInterval(intervalId); 
    },[]);
    const { isLoaded } = useJsApiLoader({
      id: "google-map-script",
      googleMapsApiKey: "AIzaSyAPyBshr7SUggY1EtPwmCnARl7JoQIS5dE",
    });
  return isLoaded ? (
    <div>
      <div className={styles.coordinates}>
        <h3>ISS is now located at:</h3>
        <p>latitude: {position.lat}, longitude: {position.lng}</p>
      </div>
      <div>
      <GoogleMap mapContainerStyle={containerStyle} center={position} zoom={2}>
        <Marker position={position} />
      </GoogleMap>
      </div>
    </div>
  ) : (
    <></>
  );
}
export default GoogleMapISS;
