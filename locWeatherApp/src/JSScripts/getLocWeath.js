const getLocWeatherData = async (apiUrl) => {
  const response = await fetch(apiUrl);
  const result = await response.json();
  return result;
};

export { getLocWeatherData };
