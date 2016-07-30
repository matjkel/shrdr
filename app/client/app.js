'use strict';

angular.module('myApp', [
    'ui.router'
  ])

    .config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/');
    
    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: 'views/main.html',
            controller: 'MainCtrl'
        })

        .state('weather', {
          url: '/weather',
          templateUrl: 'views/weather.html',
          controller: 'WeatherCtrl'
        })

        .state('shreds', {
          url: '/shreds', 
          templateUrl: 'views/shreds.html',  
          controller: 'WeatherCtrl'
        });
        
});

