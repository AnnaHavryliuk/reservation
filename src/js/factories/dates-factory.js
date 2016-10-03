angular.module('mainApp').factory('datesFactory', function () {
  let factory = {};

  const dates = [
    new Date(2016, 8, 30),
    new Date(2016, 9, 1),
    new Date(2016, 9, 2),
    new Date(2016, 9, 3),
    new Date(2016, 9, 4),
    new Date(2016, 9, 5)
  ];

  const isActualDate = function (date, currentDate) {
    let result = false;

    const month = date.getMonth();
    const currentMonth = currentDate.getMonth();

    if (month > currentMonth) {
      result = true;
    } else if (month === currentMonth) {
      result = date.getDate() >= currentDate.getDate();
    }
    return result;
  };

  factory.getActualDates = function () {
    let actualDates = [];
    let currentDate = new Date();

    actualDates = dates.filter(function (dateItem) {
      let result = isActualDate(dateItem, currentDate);
      return result;
    });
    return actualDates;
  };

  factory.getformatedDate = function (date) {
    const daysNames = ['Нд', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];
    let day = date.getDate();
    const dayName = daysNames[date.getDay()];

    if (day < 10) {
      day = '0' + day;
    }

    const monthesNames = ['Січень', 'Лютий', 'Березень', 'Квітень', 'Травень', 'Червень', 'Липень', 'Серпень', 'Вересень', 'Жовтень', 'Листопад', 'Грудень'];
    const monthString = monthesNames[date.getMonth()];

    return {day: day, dayName: dayName, month: monthString};
  };

  return factory;
});
