const Header = ({ isLoadedLocation }) => {
  return (
    <div className='header'>
      <h1>Weather Forecast</h1>

      {!isLoadedLocation ? <p>Loading location...</p> : null}
    </div>
  );
};

export default Header;
