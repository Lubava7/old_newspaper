var siteWidth = 1500;
var scale = screen.width / siteWidth;

document
  .querySelector('meta[name="viewport"]')
  .setAttribute(
    'content',
    'width=' + siteWidth + ', initial-scale=' + scale + ''
  );

// текущие дата и время
const dateTimeElement = document.getElementById('date_time');
const updateDateTime = () => {
  const now = new Date();

  const weekdayOptions = { weekday: 'long' };
  const dateOptions = { day: 'numeric', month: 'long', year: 'numeric' };

  let weekday = now.toLocaleDateString('ru-RU', weekdayOptions);
  weekday = weekday.charAt(0).toUpperCase() + weekday.slice(1);

  const fullDate = now.toLocaleDateString('ru-RU', dateOptions);

  dateTimeElement.innerHTML = `
    ${weekday}</br> № 46 (13626)</br> ${fullDate}
  `;
};

updateDateTime();
