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

    };
    // #Moadl###################################################################

    $('.modal-trigger').leanModal({
        starting_top: '0%',
    });
    // $('#modal3').openModal();
    // $('#modal2').openModal();
    // #Carusel#################################################################
    var clienAboutUsCarusel, owl;
    clienAboutUsCarusel = {
        loop: false,
        margin: 0,
        items: 1,
        nav: true,
        dots: false
    };

    owl = $('.clienAboutUsCarusel');

    $('.UserReviewCarusel').owlCarousel(clienAboutUsCarusel)

    $('.clienAboutUsCarusel').on('initialized.owl.carousel changed.owl.carousel', function(e) {
        if (!e.namespace) return
            var carousel = e.relatedTarget
        //owl_carousel_page_numbers(e);
        $('.counter').html('<span class="active">'+(carousel.relative(carousel.current())+1)  + '</span><span>/</span><span>' + carousel.items().length+ '</span>')
    }).owlCarousel(clienAboutUsCarusel)

})(window);


