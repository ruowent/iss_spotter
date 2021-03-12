//main fetch function

const { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes } = require('./iss');


// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didn't work!" , error);
//     return;
//   }

//   console.log('It worked! Returned IP:' , ip);
// });

fetchCoordsByIP('99.228.72.100', (error, coords) => {
  if (error) {
    console.log("It didn't work!" , error);
  } else {
    console.log('It worked! Returned Geo Coordinates:' , coords);
  }
});

const coords = { latitude: '49.27670', longitude: '-123.13000' };

fetchISSFlyOverTimes(coords, (error, flyOverTimes)=> {
  if (error) {
    console.log("It didn't work!" , error);
  } else {
    console.log('It worked! Returned fly over times:' , flyOverTimes);
  }
});