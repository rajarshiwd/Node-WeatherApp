const request = require('request');

var geoLocation = (address)=>{

  return new Promise((resolve,reject)=>{
    var encodedAddress = encodeURIComponent(address);

    request({
      url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
      json: true
    }, (error, response, body) => {
      if (error) {
        resolve('Unable to connect to Google servers.');
      } else if (body.status === 'ZERO_RESULTS') {
        resolve('Unable to find that address.');
      } else if (body.status === 'OK') {

        resolve({
          Address: body.results[0].formatted_address,
          Latitude: body.results[0].geometry.location.lat,
          Longitude: body.results[0].geometry.location.lng
        })

      }
    });


});// promise ending
}// geoLocation ending

geoLocation('11812 sea shadow bend').then((response)=>{
  console.log(response);

},(errorMessage)=>{

  console.log(errorMessage);

})
