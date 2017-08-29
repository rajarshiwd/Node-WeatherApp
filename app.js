
const yargs = require('yargs');
const geo = require('./request.js');
const weather = require('./weather.js');

const argv = yargs
  .options({
    a: {
      demand: true,
      alias: 'address',
      describe: 'Address to fetch weather for',
      string: true
    }
  })
  .help()
  .alias('help', 'h')
  .argv;

  var array = [];
  geo.getGeoLoc(argv.address,(errorMessage,results)=>{
    if(errorMessage){
      console.log(errorMessage);
    }else if(results){

    console.log(results);
weather.getWeather(results.Latitude,results.Longitude,(error,weatherresults) => {
  if (error){
    console.log(error);
  }else if (weatherresults){
    console.log(weatherresults);
  }
});
    }
  });
