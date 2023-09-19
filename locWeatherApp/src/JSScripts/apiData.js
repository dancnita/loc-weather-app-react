const locationAPIurl = 'https://ipapi.co/json/';
//'http://ip-api.com/json/?fields=status,country,region,regionName,city,zip,lat,lon,timezone,query';

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

// { status: "success", country: "Romania", region: "CJ", regionName: "Cluj", city: "Cluj-Napoca", zip: "400530", lat: 46.7657, lon: 23.5943, timezone: "Europe/Bucharest", query: "86.127.67.137" }
// ​
// city: "Cluj-Napoca"
// ​
// country: "Romania"
// ​
// lat: 46.7657
// ​
// lon: 23.5943
// ​
// query: "86.127.67.137"
// ​
// region: "CJ"
// ​
// regionName: "Cluj"
// ​
// status: "success"
// ​
// timezone: "Europe/Bucharest"
// ​
// zip: "400530"
