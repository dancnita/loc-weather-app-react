import { useState, useEffect } from 'react';
import Header from './components/Header';
import MainCard from './components/MainCard';
import getUserDayTime from './JSScripts/getUserDayTime';
import weatherCode from './JSScripts/weatherCode';
import SmallCards from './components/SmallCards';
import { getLocWeatherData } from './JSScripts/getLocWeath';
import { locationAPIurl, weatherDataAPIurl } from './JSScripts/apiData';
import {
  dateFormat,
  currentTimeFormat,
  temperatureFormat,
  currentDayFormat,
  tempUnitFormat,
  locationFormat,
  weathercodeCurrentFormat,
  minTempFormat,
  maxTempFormat,
  precipChancesFormat,
  dailyWeatherImgFormat,
  currWeatherImgFormat,
} from './JSScripts/utils';

function App() {
  const userDayTime = getUserDayTime();
  const [location, setLocation] = useState([]);
  const [errorLocation, setErrorLocation] = useState(null);
  const [isLoadedLocation, setIsLoadedLocation] = useState(false);
  const [weatherData, setWeatherData] = useState([]);
  const [errorWeather, setErrorWeather] = useState(null);
  const [isLoadedWeather, setIsLoadedWeather] = useState(false);

  useEffect(() => {
    getLocWeatherData(locationAPIurl)
      .then((res) => {
        setIsLoadedLocation(true);
        setLocation(res);
      })
      .catch((e) => {
        setErrorLocation(e.message);
        console.log(e.message);
      });
  }, []);

  useEffect(() => {
    if (!isLoadedLocation) {
      console.log('Loading location...');
    } else {
      getLocWeatherData(weatherDataAPIurl(location.lat, location.lon))
        .then((res) => {
          setIsLoadedWeather(true);
          setWeatherData(res);
        })
        .catch((e) => {
          setErrorWeather(e.message);
          console.log(e.message);
        });
    }
  }, [location]);

  return (
    <>
      <Header />
      <MainCard
        location={locationFormat(location)}
        date={dateFormat(weatherData)}
        day={currentDayFormat(userDayTime)}
        time={currentTimeFormat(userDayTime)}
        temperature={temperatureFormat(weatherData)}
        tempUnit={tempUnitFormat(weatherData)}
        weathercodeCurrent={weathercodeCurrentFormat(weatherCode, weatherData)}
        minTemp={minTempFormat(weatherData)}
        maxTemp={maxTempFormat(weatherData)}
        precipChances={precipChancesFormat(weatherData)}
        dailyWeatherImg={dailyWeatherImgFormat(weatherCode, weatherData)}
        currWeatherImg={currWeatherImgFormat(weatherCode, weatherData)}
      />
      <div className='week-weather-container'>
        <SmallCards weatherData={weatherData} />
      </div>
    </>
  );
}

export default App;
