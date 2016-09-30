angular.module('mainApp')
  .factory('cinemasFactory', function () {
    let factory = {};

    class MovieShedule {
      constructor(id = 0, screen2d = [], screen3d = [], screen4dx = []) {
        this.id = id;

        if (Array.isArray(screen2d)) {
          this.screen2d = screen2d;
        } else {
          this.screen2d = false;
        }

        if (Array.isArray(screen3d)) {
          this.screen3d = screen3d;
        } else {
          this.screen3d = false;
        }

        if (Array.isArray(screen4dx)) {
          this.screen4dx = screen4dx;
        } else {
          this.screen4dx = false;
        }
      }
    }
    class Showtime {
      constructor(time = '') {
        this.time = time;
        this.isBooked = false;
      }
    }
    class Cinema {
      constructor(name = '', address = '', description = '', datesInit = [], moviesInit = []) {
        this.name = name;
        this.address = address;
        this.description = description;

        if (Array.isArray(moviesInit)) {
          this.shedule.moviesShowtime = moviesInit;
        } else {
          this.shedule.moviesShowtime = [];
        }

        if (Array.isArray(moviesInit)) {
          this.shedule.dates = datesInit;
        } else {
          this.shedule.dates = [];
        }

        this.shedule.dates = datesInit;
      }
    }

    const dates = [new Date(2016, 8, 30), new Date(2016, 9, 1), new Date(2016, 9, 2), new Date(2016, 9, 3), new Date(2016, 9, 4), new Date(2016, 9, 5)];
    const planetMoviesData = [
      new MovieShedule(1, [new Showtime('10:15'), new Showtime('15:20'), new Showtime('16:35'), new Showtime('20:10'), new Showtime('20:45')],
        false, [new Showtime('12:30'), new Showtime('17:15'), new Showtime('22:00')]
      ),
      new MovieShedule(2,
        [new Showtime('12:45'), new Showtime('17:30'), new Showtime('21:45')], false, [new Showtime('10:00'), new Showtime('14:45'), new Showtime('19:30')]
      ),
      new MovieShedule(3, [new Showtime('12:30'), new Showtime('19:30')]),
      new MovieShedule(4, [new Showtime('22:00')]),
      new MovieShedule(5, [new Showtime('10:15'), new Showtime('14:45')], [new Showtime('13:50'), new Showtime('17:40'), new Showtime('18:50')]
      )
    ];
    const palaceMoviesData = [
      new MovieShedule(1, [new Showtime('10:40'), new Showtime('19:00')]),
      new MovieShedule(2, [new Showtime('12:40'), new Showtime('21:00')]),
      new MovieShedule(5, false, [new Showtime('15:00')])
    ];

    let cinemas = [
      new Cinema('Планета Кіно 4DX',
        'м. Львів, вул. Під Дубом, 7А, ТРЦ \"Forum Lviv\"',
        'У самому центрі Львова у 900 метрах від Оперного театру ми відкрили надсучасний кінотеатр Планета Кіно. Він знаходиться у ТРЦ \"Forum Lviv\" на вул. Під Дубом, 7А, на третьому поверсі та має кінозал з технологією 4DX та ще 5 залів покращеного комфорту. Тут класне все: дизайн, технології, розташування, обслуговування, Кіномаркет.',
        dates, planetMoviesData
      ),
      new Cinema('Кінопалац ім. Довженка',
        'м. Львів, просп. Червоної Калини, 81',
        'Синій (новий, комфортний) зал на 196, обладнаний звуковою системою DOLBY DIGITAL SURROUND, акустикою «JBL», панорамним сучасним екраном Perlux.',
        dates, palaceMoviesData
      )
    ];

    factory.getCinemas = () => {
      return cinemas;
    }
    return factory;
   })