angular.module('mainApp').controller('BookingController', ['$scope', '$routeParams', '$location', 'moviesFactory', 'cinemasFactory', function ($scope, $routeParams, $location, moviesFactory, cinemasFactory) {
   $scope.cinema = cinemasFactory.getCinemaById($routeParams.cinemaId);
   const movieId = $routeParams.movieId;
   $scope.movieName = moviesFactory.getMovieById(movieId).name;
   $scope.watchType = $routeParams.watchType;
   $scope.time = $routeParams.time;
   $scope.day = $routeParams.day;
   $scope.month = $routeParams.month;

   $scope.cinema.getMovieWatchTypes(movieId).some(function (watchTypeItem) {
      let result = false;
      if (watchTypeItem.type === $scope.watchType) {
        result = true;
        watchTypeItem.showtimes.some(function (showtimeItem) {
          let result = false;
          if (showtimeItem.time === $scope.time) {
            result = true;
            $scope.showtime = showtimeItem;
          }
          return result;
        });
      }
      return result;
   });

   $scope.isDisabled = function (row, place) {
      let mainResult = '';

      if ($scope.showtime.isBooked) {
        $scope.showtime.isBooked.some(function (item) {
            item.places.some(function (placeItem) {
              if (placeItem.row == row && placeItem.place == place) {
                mainResult = 'disabled btn-floating';
              }
              return mainResult;
            })
            return mainResult;
        });
      }
      return mainResult;
    }

   $scope.createArray = function (num) {
    let array = [];
    for(let i = 1; i <= num; i++) {
      array.push(i);
    }
    return array;
  }

  function matrixArray(rows,columns) {
    let arr = new Array();

    for(let i = 0; i < rows; i++) {
    arr[i] = new Array();

      for (let j = 0; j < columns; j++) {
        arr[i][j] = null;
      }
    }
    return arr;
  }

  $scope.classes = matrixArray($scope.cinema.hallSize.rows, $scope.cinema.hallSize.places);
  $scope.price = 80;
  $scope.totalPrice = 0;
  $scope.booked = [];

  const chosenPlaceManipulate = function (chosenRow, chosenPlace) {
    let indexBooked;
    const isntBooked = $scope.booked.every(function(item, index) {
      const result = item.row !== chosenRow || item.place !== chosenPlace;
      if (!result) {
        indexBooked = index;
      }
      return result;
    });
    if (isntBooked) {
      const place = {row: chosenRow, place: chosenPlace};
      $scope.booked.push(place);
      $scope.totalPrice += $scope.price;
    } else {
      $scope.booked.splice(indexBooked, 1);
      $scope.totalPrice -= $scope.price;
    }
  }

  const chosenPlaceClassManipulate = function (chosenRow, chosenPlace) {
    let item = $scope.classes[chosenRow - 1][chosenPlace - 1];
    if (item) {
      $scope.classes[chosenRow - 1][chosenPlace - 1] = null;
    } else {
      $scope.classes[chosenRow - 1][chosenPlace - 1] = 'chosen-place';
    }
  }
  $scope.bookPlace = function (chosenRow, chosenPlace) {
    chosenPlaceClassManipulate(chosenRow, chosenPlace);
    chosenPlaceManipulate(chosenRow, chosenPlace);
  }

  $scope.formHiden = true;

  $scope.getForm = function () {
    if ($scope.booked.length) {
      $scope.formHiden = false;
    }
  }

  $scope.endBooking = function () {
    if ($scope.booked.length) {
      $scope.showtime.isBooked.push({day: $scope.day, places: $scope.booked})
      $scope.formHiden = true;
      $location.path('/');
    }
  }
}]);