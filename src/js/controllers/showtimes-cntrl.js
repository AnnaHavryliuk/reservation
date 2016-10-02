angular.module('mainApp').controller('ShowtimesController', ['$scope', 'datesFactory', 'moviesFactory', 'cinemasFactory', function ($scope, datesFactory, moviesFactory, cinemasFactory) {
    $scope.dates = datesFactory.getActualDates();
    $scope.getformatedDate = datesFactory.getformatedDate;
    $scope.chosenDate = $scope.getformatedDate($scope.dates[0]);

    $scope.chooseDate = function (date) {
      $scope.chosenDate = $scope.getformatedDate(date);
    }

    $scope.movies = moviesFactory.getMovies();
    $scope.cinemas = cinemasFactory.getCinemas();

    // $scope.saveInfoToBooking = function (cinema, movieName, watchType, showtime) {
    //   bookingFactory.setBooking(cinema, movieName, $scope.chosenDate, watchType, showtime);
    // }
  }]);
  // angular.module('mainApp').factory('bookingFactory', function() {
  //   let factory = {};
  //   let booking = {cinema: [], movieName:};

  //   factory.getBooking = function () {
  //     return booking;
  //   }
  //   factory.setBooking = function (cinema, movieName, chosenDate, watchType, showtime) {
  //     booking.cinema = cinema;
  //     booking.movieName = movieName;
  //     booking.date = chosenDate;
  //     booking.watchType = watchType;
  //     booking.showtime = showtime;
  //   }
  //   return factory;
  // });