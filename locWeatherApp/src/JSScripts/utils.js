const locationFormat = (location) => {
  return location?.city;
};

const dateFormat = (weatherData) => {
  return (
    weatherData.current_weather?.time.substring(8, 10) +
    '-' +
    weatherData.current_weather?.time.substring(5, 7) +
    '-' +
    weatherData.current_weather?.time.substring(0, 4)
  );
};

const currentDayFormat = (userDayTime) => {
  return userDayTime?.currentDay;
};

const currentTimeFormat = (userDayTime) => {
  return userDayTime?.currentHour + ':' + userDayTime?.currentMinutes;
};

const temperatureFormat = (weatherData) => {
  return weatherData.current_weather?.temperature + ' ';
};

const tempUnitFormat = (weatherData) => {
  return weatherData.daily_units?.temperature_2m_min;
};

const weathercodeCurrentFormat = (weatherCode, weatherData) => {
  return weatherCode?.[weatherData.current_weather?.weathercode]?.[
    weatherData.current_weather?.is_day
  ]?.description;
};

const minTempFormat = (weatherData) => {
  return (
    weatherData.daily?.temperature_2m_min[0] +
    ' ' +
    weatherData.daily_units?.temperature_2m_min +
    ' / '
  );
};
const maxTempFormat = (weatherData) => {
  return (
    weatherData.daily?.temperature_2m_max[0] +
    ' ' +
    weatherData.daily_units?.temperature_2m_min
  );
};

const precipChancesFormat = (weatherData) => {
  return weatherData.daily?.precipitation_probability_max[0] + ' % ';
};

const dailyWeatherImgFormat = (weatherCode, weatherData) => {
  return weatherCode?.[weatherData.daily?.weathercode?.[0]]?.[
    weatherData.current_weather?.is_day
  ]?.image.toString();
};

const currWeatherImgFormat = (weatherCode, weatherData) => {
  return weatherCode?.[weatherData.current_weather?.weathercode]?.[
    weatherData.current_weather?.is_day
  ]?.image.toString();
};

const imgWeathCodeFormat = (weatherCode, weatherData, i) => {
  return weatherCode[weatherData.daily?.weathercode[i + 1]]?.[1].image;
};

const maxTempFromatSC = (weatherData, i) => {
  return (
    weatherData.daily?.temperature_2m_max[i + 1] +
    ' ' +
    weatherData.daily_units?.temperature_2m_min
  );
};
const minTempFromatSC = (weatherData, i) => {
  return (
    weatherData.daily?.temperature_2m_min[i + 1] +
    ' ' +
    weatherData.daily_units?.temperature_2m_min
  );
};

const smallCardsDays = (daysOfWeek, currentDay) => {
  const cardsDays = [];

  let nextDay = currentDay;
  for (let i = 0; i < 6; i++) {
    nextDay++;
    if (nextDay > 6) {
      nextDay = 0;
    }

    cardsDays.push(daysOfWeek[nextDay]);
  }
  return cardsDays;
};

export {
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
  imgWeathCodeFormat,
  maxTempFromatSC,
  minTempFromatSC,
  smallCardsDays,
};
