angular.module('mainApp', ['ngRoute']);

angular.module('mainApp')
  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider
      .when('/', {
          controller: 'MainController',
          templateUrl: 'src/templates/main.html'
      })
      .when('/showtimes', {
        controller: 'ShowtimesController',
        templateUrl: 'src/templates/showtimes.html'
      })
      .when('/cinemas', {
        controller: 'MainController',
        templateUrl: 'src/templates/cinemas.html'
      })
      .when('/booking/:cinemaId/:movieId/:watchType/:time/:day/:month', {
        controller: 'BookingController',
        templateUrl: 'src/templates/booking.html'
      });
  }]);
