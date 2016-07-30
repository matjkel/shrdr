'use strict';

angular.module('myApp')
  
  .controller('WeatherCtrl', [ '$scope','$http', '$location', 'Weather', 'Sesh', function ($scope, $http, $location ,Weather, Sesh) {
    $scope.headerTwo = "Let's Shred"
    $scope.text = ''
    $scope.header = "Shred Planner";	
    $scope.user = {}
    // $scope.data = ''
    $scope.weather = ''
    $scope.wind = ''
    $scope.feels = ''
    $scope.icon = ''
    $scope.time = ''
    // $scope.forcast_icon = ''
    $scope.mday = ''
    $scope.tday = ''
    $scope.wday = ''
    $scope.thday = ''
    $scope.fday = ''
    $scope.sday = ''
    $scope.snday = ''
    $scope.mnday = ''
    $scope.tuday = ''
    $scope.weday = ''
    $scope.mday_icon = ''
    $scope.tday_icon = ''
    $scope.wday_icon = ''
    $scope.thday_icon = ''
    $scope.fday_icon = ''
    $scope.sday_icon = ''
    $scope.snday_icon = ''
    $scope.mnday_icon = ''
    $scope.tuday_icon = ''
    $scope.weday_icon = ''
    $scope.mday_temp = ''
    $scope.tday_temp = ''
    $scope.wday_temp = ''
    $scope.thday_temp = ''
    $scope.fday_temp = ''
    $scope.sday_temp = ''
    $scope.snday_temp = ''
    $scope.mnday_temp = ''
    $scope.tuday_temp = ''
    $scope.weday_temp = ''
    
    $scope.getWeather = function () {
        console.log("fetching")
    	Weather.getWeather()
    	.then( function (data) {
            console.log("This is your data " , data)
    		// $scope.data = data.current_observation;
            $scope.weather = data.current_observation.weather;
            $scope.wind = data.current_observation.wind_string;
            $scope.icon = data.current_observation.icon_url;
            $scope.feels = data.current_observation.temperature_string;
            $scope.time = data.current_observation.observation_time;
    	})
    }

    $scope.getForecast = function () {
        console.log("I think I'm working")
        Weather.getForecast()
        .then( function (data){
            console.log("I AM WORKING BOSS!", data)
            $scope.mday = data.forecast.simpleforecast.forecastday[0].date.weekday_short;
            $scope.tday = data.forecast.simpleforecast.forecastday[1].date.weekday_short;
            $scope.wday = data.forecast.simpleforecast.forecastday[2].date.weekday_short;
            $scope.thday = data.forecast.simpleforecast.forecastday[3].date.weekday_short;
            $scope.fday = data.forecast.simpleforecast.forecastday[4].date.weekday_short;
            $scope.sday = data.forecast.simpleforecast.forecastday[5].date.weekday_short;
            $scope.snday = data.forecast.simpleforecast.forecastday[6].date.weekday_short;
            $scope.mnday = data.forecast.simpleforecast.forecastday[7].date.weekday_short;
            $scope.tuday = data.forecast.simpleforecast.forecastday[8].date.weekday_short;
            $scope.weday = data.forecast.simpleforecast.forecastday[9].date.weekday_short;

            $scope.mday_icon = data.forecast.simpleforecast.forecastday[0].icon_url
            $scope.tday_icon = data.forecast.simpleforecast.forecastday[1].icon_url
            $scope.wday_icon = data.forecast.simpleforecast.forecastday[2].icon_url
            $scope.thday_icon = data.forecast.simpleforecast.forecastday[3].icon_url
            $scope.fday_icon = data.forecast.simpleforecast.forecastday[4].icon_url
            $scope.sday_icon = data.forecast.simpleforecast.forecastday[5].icon_url
            $scope.snday_icon = data.forecast.simpleforecast.forecastday[6].icon_url
            $scope.mnday_icon = data.forecast.simpleforecast.forecastday[7].icon_url
            $scope.tuday_icon = data.forecast.simpleforecast.forecastday[8].icon_url
            $scope.weday_icon = data.forecast.simpleforecast.forecastday[9].icon_url

            $scope.mday_temp = data.forecast.simpleforecast.forecastday[0].high.fahrenheit;
            $scope.tday_temp = data.forecast.simpleforecast.forecastday[1].high.fahrenheit;
            $scope.wday_temp = data.forecast.simpleforecast.forecastday[2].high.fahrenheit;
            $scope.thday_temp = data.forecast.simpleforecast.forecastday[3].high.fahrenheit;
            $scope.fday_temp = data.forecast.simpleforecast.forecastday[4].high.fahrenheit;
            $scope.sday_temp = data.forecast.simpleforecast.forecastday[5].high.fahrenheit;
            $scope.snday_temp = data.forecast.simpleforecast.forecastday[6].high.fahrenheit;
            $scope.mnday_temp = data.forecast.simpleforecast.forecastday[7].high.fahrenheit;
            $scope.tuday_temp = data.forecast.simpleforecast.forecastday[8].high.fahrenheit;
            $scope.weday_temp = data.forecast.simpleforecast.forecastday[9].high.fahrenheit;

            $scope.mday_wind = data.forecast.simpleforecast.forecastday[0].avewind.mph;
            $scope.tday_wind = data.forecast.simpleforecast.forecastday[1].avewind.mph;
            $scope.wday_wind = data.forecast.simpleforecast.forecastday[2].avewind.mph;
            $scope.thday_wind = data.forecast.simpleforecast.forecastday[3].avewind.mph;
            $scope.fday_wind = data.forecast.simpleforecast.forecastday[4].avewind.mph;
            $scope.sday_wind = data.forecast.simpleforecast.forecastday[5].avewind.mph;
            $scope.snday_wind = data.forecast.simpleforecast.forecastday[6].avewind.mph;
            $scope.mnday_wind = data.forecast.simpleforecast.forecastday[7].avewind.mph;
            $scope.tuday_wind = data.forecast.simpleforecast.forecastday[8].avewind.mph;
            $scope.weday_wind = data.forecast.simpleforecast.forecastday[9].avewind.mph;

        })
    }

    $scope.createSesh = function () {
        console.log("I've been called")
        Sesh.createSesh($scope.user)
        // console.log("heres your text" , text)
        // .then(function (resp) {
        //     // console.log("yo response" , resp)
        //     return resp.data;
        // })
        .catch(function (err) {
            console.error(err);
        })
        .then(function () {
            $location.path('/shreds')
        });
    };

}]);
