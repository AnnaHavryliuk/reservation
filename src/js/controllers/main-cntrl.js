angular.module('mainApp').controller('MainController', ['$scope', 'moviesFactory', function ($scope, moviesFactory) {
  $scope.movies = moviesFactory.getMovies();
  }]);