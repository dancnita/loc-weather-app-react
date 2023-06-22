import { useState, useEffect } from 'react';
import Header from './components/Header';
import MainCard from './components/MainCard';
import getUserDayTime from './JSScripts/getUserDayTime';
import weatherCode from './JSScripts/weatherCode';
import SmallCards from './components/SmallCards';

function App() {
  const userDayTime = getUserDayTime();
  const [location, setLocation] = useState([]);
  const [errorLocation, setErrorLocation] = useState(null);
  const [isLoadedLocation, setIsLoadedLocation] = useState(false);
  const [weatherData, setWeatherData] = useState([]);
  const [errorWeather, setErrorWeather] = useState(null);
  const [isLoadedWeather, setIsLoadedWeather] = useState(false);
  //console.log(weatherData);

  useEffect(() => {
    getLocation()
      .then((res) => {
        console.log('got loc res1');
        setIsLoadedLocation(true);
        setLocation(res);
        console.log(location);
      })
      .catch((e) => {
        setErrorLocation(e.message);
        console.log(e.message);
      });
    getWeatherData()
      .then((res) => {
        console.log('got weather res1');
        setIsLoadedWeather(true);
        setWeatherData(res);
        console.log(weatherData);
      })
      .catch((e) => {
        setErrorWeather(e.message);
        console.log(e.message);
      });
  }, []);

  const getLocation = async () => {
    const response = await fetch(
      'http://ip-api.com/json/?fields=status,country,region,regionName,city,zip,lat,lon,timezone,query'
    );
    console.log('got Loc res');
    const result = await response.json();
    return result;
  };

  const getWeatherData = async () => {
    const location = await getLocation();
    console.log('locationTest', location.lat, location.lat);
    console.log('getWeather call ', `${location.lat}`);
    const response = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${location.lat}&longitude=${location.lon}&daily=weathercode,temperature_2m_max,temperature_2m_min,precipitation_sum,precipitation_probability_max,windspeed_10m_max&current_weather=true&timezone=auto`
    );
    const result = await response.json();
    return result;
  };

  return (
    <>
      <Header />
      <MainCard
        location={location?.city}
        date={
          weatherData.current_weather?.time.substring(8, 10) +
          '-' +
          weatherData.current_weather?.time.substring(5, 7) +
          '-' +
          weatherData.current_weather?.time.substring(0, 4)
        }
        day={userDayTime?.currentDay}
        time={userDayTime?.currentHour + ':' + userDayTime?.currentMinutes}
        temperature={weatherData?.current_weather?.temperature + ' '}
        tempUnit={weatherData.daily_units?.temperature_2m_min}
        weathercodeCurrent={
          weatherCode?.[weatherData.current_weather?.weathercode]?.[
            weatherData.current_weather?.is_day
          ]?.description
        }
        minTemp={
          weatherData.daily?.temperature_2m_min[0] +
          ' ' +
          weatherData.daily_units?.temperature_2m_min +
          ' / '
        }
        maxTemp={
          weatherData.daily?.temperature_2m_max[0] +
          ' ' +
          weatherData.daily_units?.temperature_2m_min
        }
        precipChances={
          weatherData.daily?.precipitation_probability_max[0] + ' % '
        }
        dailyWeatherImg={weatherCode?.[weatherData.daily?.weathercode?.[0]]?.[
          weatherData.current_weather?.is_day
        ]?.image.toString()}
        currWeatherImg={weatherCode?.[
          weatherData.current_weather?.weathercode
        ]?.[weatherData.current_weather?.is_day]?.image.toString()}
      />
      <div className='week-weather-container'>
        <SmallCards weatherData={weatherData} />
      </div>
    </>
  );
}

export default App;
