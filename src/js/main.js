const $ = require("jquery");

$(function() {
  // Когда страница загрузится
  $(".navigation__link").each(function() {
    // получаем все нужные нам ссылки
    var location = window.location.href; // получаем адрес страницы
    var link = this.href; // получаем адрес ссылки
    
    if (location == link) {
      $(".navigation__link").removeClass("active"); // удаляем класс у остальных ссылок
      $(this).addClass("active"); //добавляем класс
    }
  });
});
