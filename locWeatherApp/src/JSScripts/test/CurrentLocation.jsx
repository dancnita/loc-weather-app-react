// import { useState, useEffect } from 'react';

// const CurrentLocation = () => {
//   const [location, setLocation] = useState([]);
//   //
//   const [error, setError] = useState(null);
//   const [isLoaded, setIsLoaded] = useState(false);

//   useEffect(() => {
//     fetch('https://ipapi.co/json/')
//       .then((response) => response.json())
//       .then(
//         (result) => {
//           setIsLoaded(true);
//           setLocation(result);
//           console.log('location successfully retrieved');
//         },
//         (error) => {
//           setIsLoaded(true);
//           setError(error);
//           console.log('location error:', error);
//         }
//       );
//   }, []);
//   return 'hello';
// };

// export default CurrentLocation;
