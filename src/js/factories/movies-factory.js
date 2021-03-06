angular.module('mainApp').factory('moviesFactory', function () {
  let factory = {};
  let movies = [
    {
      id: 1,
      name: 'Глибоководний горизонт',
      originName: 'Deepwater Horizon',
      year: 2016,
      country: 'США',
      genre: 'бойовик, трилер, драма',
      time: '106 хв',
      directedBy: 'Пітер Берг',
      imgUrl: 'src/img/deepwater.jpg',
      description: 'Видобуток нафти передбачає розробку нових родовищ. У 2009 році нафтова платформа пробурила в Мексиканській затоці унікальну за глибиною свердловину. У процесі цементування десятикілометрової свердловини сталася аварія. Для 126 осіб, які перебували в цей час на платформі, вибух нафти став найстрашнішою подією в їхньому житті.'
    },
    {
      id: 2,
      name: 'Чудова сімка',
      originName: 'The Magnificent Seven',
      year: 2016,
      country: 'США',
      genre: 'бойовик, вестерн',
      time: '132 хв',
      directedBy: 'Антуан Фукуа',
      imgUrl: 'src/img/seven.jpg',
      description: 'Дії розгортаються на кордоні США та Мексики наприкінці ХІХ століття. Жителі маленького села вже звикли перебувати в постійному страху. Регулярно сюди навідується банда, яка грабує і вбиває. Останньою надією жителів села стають семеро найманців, готових за гроші вбити знахабнілих бандитів. На чолі сміливців – Сем (Дензел Вашингтон), відомий мисливець за головами.'
    },
    {
      id: 3,
      name: 'Дев\'яте життя Луї Дракса',
      originName: 'The 9th Life of Louis Drax',
      year: 2016,
      country: 'США, Великобританія, Канада',
      genre: 'трилер, детектив',
      time: '108 хв',
      directedBy: 'Олександр Ажа',
      imgUrl: 'src/img/drax.jpg',
      description: 'Головний герой фільму – дев\'ятирічний хлопчик на ім\'я Луї Дракс. Святкування чергового дня народження обернулося для нього трагедією. Він упав із високої кручі у воду. Усі видимі обставини вказували на те, що хлопчина мав би померти. Але Луї Дракс вижив, хоча й досі перебуває в глибокій комі. За словами доктора Аллана Паскаля (Джеймі Дорнан), багато хто не хоче прокидатися саме тому, що вві сні почувається в безпеці. Що ж таке може знати хлопчик, що йому простіше бути в комі, аніж повернутися до повноцінного життя?'
    },
    {
      id: 4,
      name: 'Дитинство лідера',
      originName: 'The Childhood of a Leader',
      year: 2015,
      country: 'Великобританія, Франція, Бельгія',
      genre: 'драма, жахи, детектив',
      time: '115 хв',
      directedBy: 'Брейді Корбет',
      imgUrl: 'src/img/leader.jpg',
      description: 'Події драми розгортаються у Франції в 1918 році. У родині американського дипломата (Ліам Каннінгем) та його дружини (Береніс Бежо) підростає син на ім\'я Прескотт (Том Світ, Роберт Паттінсон). Стаючи мимовільним свідком ділових розмов батька, хлопчик формує своє ставлення до світового порядку. Разом з цим, надмірний деспотизм батьків призводить до того, що з Прескотта виростає тиран і диктатор, рівних якому світ ще не бачив.'
    },
    {
      id: 5,
      name: 'Лелеки',
      originName: 'Storks',
      year: 2015,
      country: 'США',
      genre: 'мультфільм, комедія, сімейний',
      time: '86 хв',
      directedBy: 'Ніколас Столлер, Даг Світленд',
      imgUrl: 'src/img/storks.jpg',
      description: 'Новий оригінальний погляд на легенду про лелек, які приносять новонароджених дітей, можна переглянути в мультфільмі. Сучасні пернаті друзі також йдуть в ногу з часом: тепер вони не літають, аби віднести дитинча своїм батькам, а займаються доставкою малечі через Інтернет. Однак коли лелека на ім’я Молодший випадково створює несанкціоновану дівчинку, він має виправити ситуацію, перш ніж хтось дізнається.'
    }
  ];

  factory.getMovies = function () {
    return movies;
  };

  factory.getMovieById = function (id) {
    let movie;
    movies.some(function (movieItem) {
      let result = false;
      if (movieItem.id == id) {
        result = true;
        movie = movieItem;
      }
      return result;
    });
    return movie;
  };
  return factory;
});
