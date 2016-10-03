const BookingController = function ($routeParams, $location, moviesFactory, cinemasFactory) {
  const vm = this;
  vm.cinema = cinemasFactory.getCinemaById($routeParams.cinemaId);
  const movieId = $routeParams.movieId;
  vm.movieName = moviesFactory.getMovieById(movieId).name;
  vm.watchType = $routeParams.watchType;
  vm.time = $routeParams.time;
  vm.date = {
    day: $routeParams.day,
    dayName: $routeParams.dayName,
    month: $routeParams.month
  };

  vm.cinema.getMovieWatchTypes(movieId).some(function (watchTypeItem) {
    let result = false;
    if (watchTypeItem.type === vm.watchType) {
      result = true;
      watchTypeItem.showtimes.some(function (showtimeItem) {
        let result = false;
        if (showtimeItem.time === vm.time) {
          result = true;
          vm.showtime = showtimeItem;
        }
        return result;
      });
    }
    return result;
  });

  vm.isDisable = function (row, place) {
    let mainResult = false;

    if (vm.showtime.isBooked.length) {
      vm.showtime.isBooked.some(function (item) {
        if (item.day === vm.date.day) {
          item.places.some(function (placeItem) {
            if (placeItem.row == row && placeItem.place == place) {
              mainResult = 'disabled btn-floating';
            } else {
            }
            return mainResult;
          });
        }
        return mainResult;
      });
    }
    return mainResult;
  };

  vm.createArray = function (num) {
    let array = [];
    for (let i = 1; i <= num; i++) {
      array.push(i);
    }
    return array;
  };

  vm.price = 80;
  vm.totalPrice = 0;
  vm.booked = [];

  const chosenPlaceManipulate = function (chosenRow, chosenPlace) {
    let indexBooked;
    const isntBooked = vm.booked.every(function(item, index) {
      const result = item.row !== chosenRow || item.place !== chosenPlace;
      if (!result) {
        indexBooked = index;
      }
      return result;
    });

    if (isntBooked) {
      const place = {row: chosenRow, place: chosenPlace};
      vm.booked.push(place);
      vm.totalPrice += vm.price;
    } else {
      vm.booked.splice(indexBooked, 1);
      vm.totalPrice -= vm.price;
    }
  };

  vm.bookPlace = function (event, chosenRow, chosenPlace) {
    const elem = angular.element(event.target);
    elem.toggleClass('chosen-place');
    if (!elem.hasClass('disabled')) {
      chosenPlaceManipulate(chosenRow, chosenPlace);
    }
  };

  vm.formHiden = true;

  vm.getForm = function () {
    if (vm.booked.length) {
      vm.formHiden = false;
    }
  };

  vm.endBooking = function () {
    if (vm.booked.length) {
      vm.showtime.isBooked.push({day: vm.day, places: vm.booked});
      vm.formHiden = true;
      $location.path('/');
    }
  };
};

BookingController.$inject = ['$routeParams', '$location', 'moviesFactory', 'cinemasFactory'];

angular.module('mainApp').controller('BookingController', BookingController);
