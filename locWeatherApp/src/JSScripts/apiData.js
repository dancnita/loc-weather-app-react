const locationAPIurl =
  'http://ip-api.com/json/?fields=status,country,region,regionName,city,zip,lat,lon,timezone,query';

const weatherDataAPIurl = (userLatitude, userLongitude) => {
  return (
    'https://api.open-meteo.com/v1/forecast?latitude=' +
    `${userLatitude}` +
    '&longitude=' +
    `${userLongitude}` +
    '&daily=weathercode,temperature_2m_max,temperature_2m_min,precipitation_sum,precipitation_probability_max,windspeed_10m_max&current_weather=true&timezone=auto'
  );
};

export { locationAPIurl, weatherDataAPIurl };
