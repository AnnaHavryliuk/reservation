angular.module('mainApp')
  .factory('cinemasFactory', function () {
    let factory = {};

    class Showtime {
      constructor(time = '') {
        this.time = time;
        this.isBooked = false;
      }
    }

    class WatchType {
      constructor(type = '2d', showtime = []) {
        this.type = type;
        if (Array.isArray(showtime)) {
          this.showtimes = showtime;
        } else {
          this.showtimes = [];
        }
      }
    }

    class MovieSchedule {
      constructor(id = 1, watchTypes = []) {
        this.id = id;

        if (Array.isArray(watchTypes)) {
          this.watchTypes = watchTypes;
        } else {
          this.watchTypes = [];
        }
      }
    }

    class Cinema {
      constructor(name = '', address = '', moviesInit = [], description = '') {
        this.name = name;
        this.address = address;
        this.description = description;

        if (Array.isArray(moviesInit)) {
          this.moviesShowtime = moviesInit;
        } else {
          this.moviesShowtime = [];
        }
      }

      getMovieWatchTypes(movieId) {
        let watchTypes = [];
        this.moviesShowtime.forEach(function (movieScheduleItem) {
          if (movieScheduleItem.id == movieId) {
            watchTypes = movieScheduleItem.watchTypes;
          }
        });
        return watchTypes;
      }
    }

    const planetMoviesData = [
      new MovieSchedule(1, [
        new WatchType('2d', [
          new Showtime('10:15'),
          new Showtime('15:20'),
          new Showtime('16:35'),
          new Showtime('20:10'),
          new Showtime('20:45')
        ]),
        new WatchType('4dx', [
          new Showtime('12:30'),
          new Showtime('17:15'),
          new Showtime('22:00')
        ])
      ]),
      new MovieSchedule(2, [
        new WatchType('2d', [
          new Showtime('12:45'),
          new Showtime('17:30'),
          new Showtime('21:45')
        ]),
        new WatchType('4dx', [
          new Showtime('10:00'),
          new Showtime('14:45'),
          new Showtime('19:30')
        ])
      ]),
      new MovieSchedule(3, [
        new WatchType('2d', [
          new Showtime('12:30'),
          new Showtime('19:30')
        ])
      ]),
      new MovieSchedule(4, [
        new WatchType('2d', [
          new Showtime('22:00')
        ])
      ]),
      new MovieSchedule(5, [
        new WatchType('2d', [
          new Showtime('10:15'),
          new Showtime('14:45')
        ]),
        new WatchType('3d', [
          new Showtime('13:50'),
          new Showtime('17:40'),
          new Showtime('18:50')
        ])
      ])
    ];

    const palaceMoviesData = [
      new MovieSchedule(1, [
        new WatchType('2d', [
          new Showtime('10:40'),
          new Showtime('19:00')
        ])
      ]),
      new MovieSchedule(2, [
        new WatchType('2d', [
          new Showtime('12:40'),
          new Showtime('21:00')
        ])
      ]),
      new MovieSchedule(5, [
        new WatchType('3d', [
          new Showtime('15:00')
        ])
      ])
    ];

    let cinemas = [
      new Cinema('Планета Кіно 4DX',
        'м. Львів, вул. Під Дубом, 7А, ТРЦ \"Forum Lviv\"',
        planetMoviesData,
        'У самому центрі Львова у 900 метрах від Оперного театру ми відкрили надсучасний кінотеатр Планета Кіно. Він знаходиться у ТРЦ \"Forum Lviv\" на вул. Під Дубом, 7А, на третьому поверсі та має кінозал з технологією 4DX та ще 5 залів покращеного комфорту. Тут класне все: дизайн, технології, розташування, обслуговування, Кіномаркет.'
      ),
      new Cinema('Кінопалац ім. Довженка',
        'м. Львів, просп. Червоної Калини, 81',
        palaceMoviesData,
        'Синій (новий, комфортний) зал на 196, обладнаний звуковою системою DOLBY DIGITAL SURROUND, акустикою «JBL», панорамним сучасним екраном Perlux.'
      )
    ];

    factory.getCinemas = function () {
      return cinemas;
    }

    return factory;
   })