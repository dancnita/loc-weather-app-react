import SmallCard from './SmallCard';
import getUserDayTime from '../JSScripts/getUserDayTime';
import weatherCode from '../JSScripts/weatherCode';
import {
  imgWeathCodeFormat,
  maxTempFromatSC,
  minTempFromatSC,
  smallCardsDays,
} from '../JSScripts/utils';

const SmallCards = ({ weatherData, isLoadedWeather }) => {
  const userDayTime = getUserDayTime();
  const cardDays = smallCardsDays(userDayTime.daysDaysOfWeek, userDayTime.day);

  return (
    <>
      {cardDays.map((item, index) => (
        <SmallCard
          key={index}
          day={item}
          imgWeathCode={imgWeathCodeFormat(weatherCode, weatherData, index)}
          maxTemp={maxTempFromatSC(weatherData, index)}
          minTemp={minTempFromatSC(weatherData, index)}
          isLoadedWeather={isLoadedWeather}
        />
      ))}
    </>
  );
};

export default SmallCards;
