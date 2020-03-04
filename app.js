const request = require("request");
const geourl = require("./utils/geourl");
const forecast = require("./utils/forecast");
// const url =
//   "https://api.darksky.net/forecast/256fd03fd652f181b1fe5bb0d034b8e1/37.8267,-122.4233";

// request({ url: url, json: true }, (error, response) => {
//   console.log(
//     "The current temprature is " +
//       response.body.currently.temperature +
//       " and there are " +
//       response.body.currently.precipProbability +
//       "% chances of rain"
//   );
// });

// const geourl =
//   "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiYXNoaXNoZmF0bmFuaSIsImEiOiJjazdiazR5OGwwNW1pM2VwdTN5b25oOHc2In0.DlDyG6op2pRG93UK-iGmrg";

// request({ url: geourl, json: true }, (error, response) => {
//   console.log(
//     "The latitude is " +
//       response.body.features[0].center[0] +
//       " The longitude is " +
//       response.body.features[0].center[1]
//   );
// });
const address = process.argv[2];

if (!address) {
  console.log("Please provide the Location");
} else {
  geourl(address, (error, data) => {
    if (error) {
      return console.log(error);
    } else {
      console.log("Data", data);
      forecast(data.latitude, data.longitude, (error, forecastdata) => {
        if (error) {
          return console.log(error);
        }
        console.log(data.location);
        console.log(forecastdata);
      });
    }
  });
}
