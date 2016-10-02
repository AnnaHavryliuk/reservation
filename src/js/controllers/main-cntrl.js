const MainController = function (moviesFactory, cinemasFactory) {
  const vm = this;
  vm.movies = moviesFactory.getMovies();
  vm.cinemas = cinemasFactory.getCinemas();
};

MainController.$inject = ['moviesFactory', 'cinemasFactory'];

angular.module('mainApp').controller('MainController', MainController);
