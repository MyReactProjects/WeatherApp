var axios = require('axios')

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=e596828d2a446010e2548bee02b4e40a&units=metric'
//   e596828d2a446010e2548bee02b4e40a api key
module.exports = {
  getTemp: function(location) {
    var encodedLocation = encodeURIComponent(location)
    var requesUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`

    return axios.get(requesUrl).then(function(res) {
      if (res.data.cod && res.data.message) {
        throw new Error(res.data.message);
      } else {
        return res.data.main.temp;
      }
    }, function(res) {
      throw new Error(res.data.message);
    });
  }
} // end exports
