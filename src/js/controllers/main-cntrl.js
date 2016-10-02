angular.module('mainApp').controller('MainController', function (moviesFactory, cinemasFactory) {
  const vm = this;
  vm.movies = moviesFactory.getMovies();
  vm.cinemas = cinemasFactory.getCinemas();
});
