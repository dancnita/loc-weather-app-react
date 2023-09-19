import CurrentData from './CurrentData';
import CurrentWeatherImg from './CurrentWeatherImg';
import ClipLoader from 'react-spinners/ClipLoader';

const SmallCard = ({
  day,
  imgWeathCode,
  maxTemp,
  minTemp,
  isLoadedWeather,
}) => {
  return (
    <div className='small-card'>
      {!isLoadedWeather ? (
        <ClipLoader color='#36d7b7' size={125} className='clip-loader' />
      ) : (
        <>
          <p className='days'>{day}</p>
          <CurrentWeatherImg source={imgWeathCode} />
          <div>
            <CurrentData currData={maxTemp + ' / ' + minTemp} />
          </div>
        </>
      )}
    </div>
  );
};

export default SmallCard;
