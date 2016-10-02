angular.module('mainApp', ['ngRoute']);

const SetRoutesConfig = function ($routeProvider) {
  $routeProvider
    .when('/', {
      controller: 'MainController',
      controllerAs: 'vm',
      templateUrl: 'src/templates/main.html'
    })
    .when('/showtimes', {
      controller: 'ShowtimesController',
      controllerAs: 'vm',
      templateUrl: 'src/templates/showtimes.html'
    })
    .when('/cinemas', {
      controller: 'MainController',
      controllerAs: 'vm',
      templateUrl: 'src/templates/cinemas.html'
    })
    .when('/booking/:cinemaId/:movieId/:watchType/:time/:day/:month', {
      controller: 'BookingController',
      controllerAs: 'vm',
      templateUrl: 'src/templates/booking.html'
    });
};

SetRoutesConfig.$inject = ['$routeProvider'];

angular.module('mainApp').config(SetRoutesConfig);
