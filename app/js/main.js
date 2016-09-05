(function (appl) {
  'use strict';

   // Map ######################################################################
   ymaps.ready(init);

    function init () {
        var myMap = new ymaps.Map("map", {
                center: [55.708354, 37.652705],
                zoom: 16
            }),

            // Создаем метку с помощью вспомогательного класса.
            myPlacemark1 = new ymaps.Placemark([55.708354, 37.652705], {
                // Свойства.
                // Содержимое иконки, балуна и хинта.
                iconContent: '',
                balloonContent: 'улица Ленинская Слобода, 19',
                hintContent: 'улица Ленинская Слобода, 19'
            }, {
                // Опции.
                // Стандартная фиолетовая иконка.
                preset: 'twirl#violetIcon'
            });



        // Добавляем все метки на карту.
        myMap.geoObjects
            .add(myPlacemark1)

    }
    // #Moadl###################################################################

    $('.modal-trigger').leanModal();

})(window);
