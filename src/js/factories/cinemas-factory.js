angular.module('mainApp')
  .factory('cinemasFactory', function () {
    let factory = {};

    class Showtime {
      constructor(time = '', isBooked = []) {
        this.time = time;

        if (Array.isArray(isBooked)) {
          this.isBooked = isBooked;
        } else {
          this.isBooked = [];
        }
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
      constructor(id = 0, name = '', address = '', moviesInit = [], workTime = '', description = '', size = {rows: 0, places: 0}, url = '') {
        this.id = id;
        this.name = name;
        this.address = address;
        this.description = description;
        this.hallSize = size;
        this.workTime = workTime;
        this.imgUrl = url;

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
          new Showtime('10:15', [
            {day: '04', places: [
                {row: 1, place: 1},
                {row: 1, place: 2}
              ]
            }
          ]),
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
      new Cinema(1,
        'Планета Кіно 4DX',
        'м. Львів, вул. Під Дубом, 7А, ТРЦ \"Forum Lviv\"',
        planetMoviesData,
        'З 10:00 Каси і Кіномаркет — до початку останнього сеансу Гардероб — до 22:00',
        'У самому центрі Львова у 900 метрах від Оперного театру ми відкрили надсучасний кінотеатр Планета Кіно. Він знаходиться у ТРЦ \"Forum Lviv\" на вул. Під Дубом, 7А, на третьому поверсі та має кінозал з технологією 4DX та ще 5 залів покращеного комфорту. Тут класне все: дизайн, технології, розташування, обслуговування, Кіномаркет.',
        {rows: 10, places: 15},
        'src/img/lviv-forum.jpg'
      ),
      new Cinema(2,
        'Кінопалац ім. Довженка',
        'м. Львів, просп. Червоної Калини, 81',
        palaceMoviesData,
        'З 10:00 Каси і Кіномаркет — до початку останнього сеансу Гардероб — до 22:00',
        'Синій (новий, комфортний) зал на 196, обладнаний звуковою системою DOLBY DIGITAL SURROUND, акустикою «JBL», панорамним сучасним екраном Perlux.',
        {rows: 10, places: 15},
        'src/img/kinopalace_dovzhenka.jpg'
      )
    ];

    factory.getCinemas = function () {
      return cinemas;
    }

    factory.getCinemaById = function (id) {
      let cinema;
      cinemas.some(function (cinemaItem) {
        let result = false;
        if (cinemaItem.id == id) {
          result = true;
          cinema = cinemaItem;
        }
        return result;
      });
      return cinema;
    }

    return factory;
   })