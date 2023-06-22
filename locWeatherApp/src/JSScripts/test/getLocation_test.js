import { useState, useEffect } from 'react';
import { forwardRef } from 'react';

const getLocationFWD = forwardRef((ref, props) => {
  useImperativeHandle(ref, () => {
    const getLocation = () => {
      const [location, setLocation] = useState([]);
      const [error, setError] = useState(null);
      const [isLoaded, setIsLoaded] = useState(false);

      useEffect(() => {
        fetch(
          'http://ip-api.com/json/?fields=status,country,region,regionName,city,zip,lat,lon,timezone,query'
        )
          .then((response) => response.json())
          .then(
            (result) => {
              setIsLoaded(true);
              setLocation(result);
              //console.log(result.city);
              console.log('location successfully retrieved');
            },
            (error) => {
              setIsLoaded(true);
              setError(error);
              console.log('location error:', error);
            }
          );
      }, []);

      return location;
    };
  });
});

export default getLocation;
