import CurrentData from './CurrentData';
import CurrentWeatherImg from './CurrentWeatherImg';
import { FaCloudRain } from 'react-icons/fa';
import ClipLoader from 'react-spinners/ClipLoader';

const MainCard = ({
  location,
  date,
  day,
  time,
  temperature,
  tempUnit,
  weathercodeCurrent,
  minTemp,
  maxTemp,
  precipChances,
  dailyWeatherImg,
  currWeatherImg,
  isLoadedWeather,
}) => {
  return (
    <div>
      <div className='current-weather-container'>
        {!isLoadedWeather ? (
          <ClipLoader color='#36d7b7' size={150} className='clip-loader' />
        ) : (
          <>
            <div className='loc-time-container'>
              <div>
                <CurrentData currData={location} />
                <CurrentData currData={date} />
              </div>
              <div>
                <CurrentData currData={day} />
                <CurrentData currData={time} />
              </div>
            </div>

            <div className='temp'>
              <CurrentData currData={temperature + tempUnit} />

              <span className='weather-type' id='current-wheather-type'>
                <CurrentWeatherImg source={currWeatherImg} />
                <CurrentData currData={weathercodeCurrent} />
              </span>
            </div>

            <div className='main-card-bottom-container'>
              <span className='flex'>
                <FaCloudRain className='i' />
                <CurrentData currData={precipChances} />
              </span>

              <CurrentWeatherImg source={dailyWeatherImg} />
            </div>
            <span className='flex main-card-bottom-container'>
              <CurrentData currData={minTemp + maxTemp} />
            </span>
          </>
        )}
      </div>
    </div>
  );
};

export default MainCard;
//
