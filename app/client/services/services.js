'use strict';

angular.module('myApp')

.factory('Weather', ['$http', function ($http) {

// TODO fix routes
//
//

	var getWeather = function (){
		console.log("hey !!")
		return $http({
			method: 'GET',
			url: 'http://api.wunderground.com/api/89cc464a05898a17/geolookup/q/autoip.json'
		})
		.then(function (resp) {
			console.log("GOT a RESPONSE", resp)
			return resp.data
		})
		// .then(function (resp) {
		// 	console.log("fetching AGAIN")
		// 	return $http({
		// 		method: 'GET',
		// 		url: 'http://api.wunderground.com/api/89cc464a05898a17/conditions/q/' +resp.location.state+ '/' +resp.location.city+ '.json'
		// 	})

		})
		// .then(function (resp){
		// 	console.log("SERVE IT UP!")
		// 	return resp.data;
		// })
		.catch( function (err) {
			console.log(err);
			return;
		});
	};

	var getForecast = function () {
		console.log("Working for a living")
		return $http({
			method: 'GET',
			url: 'http://api.wunderground.com/api/89cc464a05898a17/geolookup/q/autoip.json'
		})
		.then(function (resp) {
			console.log("GOT a RESPONSE", resp)

			return resp.data
		})
		// .then(function (resp) {
		// 	console.log("fetching AGAIN")
		// 	return $http({
		// 		method: 'GET',
		// 		url: 'http://api.wunderground.com/api/89cc464a05898a17/forecast10day/q/' +resp.location.state+ '/' +resp.location.city+ '.json'
		// 	})
		//
		// })
		// .then(function (resp) {
		// 	console.log("HERE YOU GO!")
		// 	return resp.data
		// })
		.catch(function (err) {
			console.log(err);
			return;
		});
	};

	return {
		getWeather: getWeather,
		getForecast: getForecast
	}

}])
	.factory('Sesh', ['$http', function ($http) {

		var createSesh = function (text) {
			console.log("trying to work")
			return $http({
				method: 'POST',
				url: '/shreds',
				data: {
					text: text
				}
			})
			.then(function (resp) {
				return resp.data;
			});
		};

		return {
			createSesh: createSesh
		}
}])
