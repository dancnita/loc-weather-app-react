import SmallCard from './SmallCard';
import getUserDayTime from '../JSScripts/getUserDayTime';
import weatherCode from '../JSScripts/weatherCode';

const SmallCards = ({ weatherData }) => {
  const userDayTime = getUserDayTime();
  // console.log(userDayTime);
  // console.log(weatherData.daily.temperature_2m_min);
  let cards = [];
  let nextDay = userDayTime.day;
  let nextDayOfWeek;
  for (let i = 0; i < 6; i++) {
    //nextDay
    nextDay++;
    if (nextDay > 6) {
      nextDay = 0;
    }
    nextDayOfWeek = Object.values(userDayTime.daysDaysOfWeek[nextDay]);
    //
    cards.push(
      <SmallCard
        key={i}
        day={nextDayOfWeek}
        imgWeathCode={
          weatherCode[weatherData.daily?.weathercode[i + 1]]?.[1].image
        }
        maxTemp={
          weatherData.daily?.temperature_2m_max[i + 1] +
          ' ' +
          weatherData.daily_units?.temperature_2m_min
        }
        minTemp={
          weatherData.daily?.temperature_2m_min[i + 1] +
          ' ' +
          weatherData.daily_units?.temperature_2m_min
        }
      />
    );
  }

  return cards;
};

export default SmallCards;
