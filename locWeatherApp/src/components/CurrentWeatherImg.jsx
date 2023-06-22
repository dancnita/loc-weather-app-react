const CurrentWeatherImg = ({ source }) => {
  return (
    <div>
      <img src={source} alt='current weather img' className='weather-icon' />
    </div>
  );
};

export default CurrentWeatherImg;
