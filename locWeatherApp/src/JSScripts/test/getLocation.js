import { useState, useEffect } from 'react';

const getLocation = () => {
  const [location, setLocation] = useState([]);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    //better? API - requiest limit reached (: ('https://ipapi.co/json/')
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
  //return location;
  // if (error) {
  //   return error.message;
  // } else if (!isLoaded) {
  //   return 'Loading...';
  // } else {
  //   return location;
  // }
  return location;
};

export default getLocation;

// if (error) {
//   return <div>Error: {error.message}</div>;
// } else if (!isLoaded) {
//   return <div>Loading...</div>;
// } else {
//   return (
//     <ul>
//       {items.map(item => (
//         <li key={item.id}>
//           {item.name} {item.price}
//         </li>
//       ))}
//     </ul>
//   );
// }
// }
