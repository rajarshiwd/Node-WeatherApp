const request = require('request');
var getWeather = (Latitude,Longitude,callback) => {
  request({
    url:`https://api.darksky.net/forecast/6ba05204f1fd7a7e19e0593c30c6d707/${Latitude},${Longitude}`,
    json:true,
  }, (error,response,body)=>{
    if(error){
      callback('connection error to server');
    }else if(response.statusCode === 400){
      callback('unable to fetch weather for given address');
    }else if(response.statusCode === 200){
      callback(undefined,{
        Temperature: body.currently.temperature,
        FeelsLike  : body.currently.apparentTemperature
      })
    }
    console.log();

  });
}

module.exports={
  getWeather
}
