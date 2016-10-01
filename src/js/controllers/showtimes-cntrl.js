angular.module('mainApp').controller('ShowtimesController', ['$scope', 'datesFactory', 'moviesFactory', 'cinemasFactory', function ($scope, datesFactory, moviesFactory, cinemasFactory) {
    $scope.dates = datesFactory.getActualDates();
    $scope.getformatedDate = datesFactory.getformatedDate;
    $scope.chosenDate = $scope.getformatedDate($scope.dates[0]);

    $scope.chooseDate = function (date) {
      $scope.chosenDate = $scope.getformatedDate(date);
    }

    $scope.movies = moviesFactory.getMovies();
    $scope.cinemas = cinemasFactory.getCinemas();
  }]);