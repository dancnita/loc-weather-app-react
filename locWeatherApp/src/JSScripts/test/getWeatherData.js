import { useState, useEffect } from 'react';
import getLocation from './getLocation';

const getWeatherData = () => {
  const [weatherData, setWeatherData] = useState([]);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  //const [location, setLocation] = useState([]);
  const location = getLocation();
  // useEffect(() => {
  //   setLocation(getingLocation);
  // });

  useEffect(() => {
    // or use another state to monitor location data?

    fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${location.lat}&longitude=${location.lon}&daily=weathercode,temperature_2m_max,temperature_2m_min,precipitation_sum,precipitation_probability_max,windspeed_10m_max&current_weather=true&timezone=auto`
    )
      .then((response) => response.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setWeatherData([location, result]);
          console.log('weatherData successfully retrieved');
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
          console.log('weatherData error:', error);
        }
      );
  }, [location]);

  return weatherData;
};

export default getWeatherData;
