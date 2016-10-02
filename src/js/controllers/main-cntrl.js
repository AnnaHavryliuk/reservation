angular.module('mainApp').controller('MainController', ['$scope', 'moviesFactory', 'cinemasFactory', function ($scope, moviesFactory, cinemasFactory) {
  $scope.movies = moviesFactory.getMovies();
  $scope.cinemas = cinemasFactory.getCinemas();
  }]);