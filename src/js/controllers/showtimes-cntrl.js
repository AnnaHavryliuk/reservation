angular.module('mainApp').controller('ShowtimesController', function (datesFactory, moviesFactory, cinemasFactory) {
  const vm = this;
  vm.dates = datesFactory.getActualDates();
  vm.getformatedDate = datesFactory.getformatedDate;
  vm.chosenDate = vm.getformatedDate(vm.dates[0]);

  vm.chooseDate = function (date) {
    vm.chosenDate = vm.getformatedDate(date);
  };

  vm.movies = moviesFactory.getMovies();
  vm.cinemas = cinemasFactory.getCinemas();
});
