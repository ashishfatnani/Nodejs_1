const request = require("request");

const forecast = (latitude, longitude, callback) => {
  const url =
    "https://api.darksky.net/forecast/256fd03fd652f181b1fe5bb0d034b8e1/" +
    encodeURIComponent(latitude) +
    "," +
    encodeURIComponent(longitude);

  request({ url: url, json: true }, (error, response) => {
    if (error) {
      callback("Error Occured", undefined);
    } else if (response.body.currently == 0) {
      callback("Result not found Try again", undefined);
    } else {
      callback(undefined, {
        Temprature: response.body.currently.temperature,
        Probability: response.body.currently.precipProbability
      });
    }
  });
};

module.exports = forecast;
