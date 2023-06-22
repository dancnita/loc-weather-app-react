import { useState, useEffect } from 'react';
const getlocation = () => {
  const [location, setLocation] = useState([]);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    fetch('https://ipapi.co/json/')
      .then((response) => response.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setLocation(result);
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

export default getlocation;

//   if (error) {
//     return <div>Error: {error.message}</div>;
//   } else if (!isLoaded) {
//     return <div>Loading...</div>;
//   } else {
//     return (
//       <ul>
//         {items.map(item => (
//           <li key={item.id}>
//             {item.name} {item.price}
//           </li>
//         ))}
//       </ul>
//     );
//   }
// }
