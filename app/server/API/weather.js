'use strict'

let request = ('request');
let Weather = module.eports;

// get current weather for current location
Weather.getWeather = function(data){
  let options = {
    'url': 'http://api.wunderground.com/api/89cc464a05898a17/conditions/q/' +data.location.state+ '/' +data.location.city+ '.json'
  }
  return new Promise(function(resolve, reject){
    request.get(options, function(err, resp, body){
      if(err){
        reject(err)
        return
      }
      resolve(body, resp)
    });
  });
};

// get 10 day forecast for current location
Weather.getForecast = function(data){
  let options = {
    'url': 'http://api.wunderground.com/api/89cc464a05898a17/forecast10day/q/' +data.location.state+ '/' +data.location.city+ '.json'
  }
  return new Promise(function(resolve, reject){
    request.get(options, function(err, resp, body){
      if(err){
        reject(err)
        return
      }
      resolve(body, resp)
    });
  });
};
