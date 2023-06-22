import CurrentData from './CurrentData';
import CurrentWeatherImg from './CurrentWeatherImg';

const SmallCard = ({ day, imgWeathCode, maxTemp, minTemp }) => {
  return (
    <div className='small-card'>
      <p className='days'>{day}</p>
      <CurrentWeatherImg source={imgWeathCode} />
      <div>
        <CurrentData currData={maxTemp + ' / ' + minTemp} />
      </div>
    </div>
  );
};

export default SmallCard;
