(function (appl) {
  'use strict';

   // Map ######################################################################

    ymaps.ready(function () {
        var targetCoords = [55.708369, 37.653084];
        var mapCords = [55.709813927480994,37.65388567196652];
       var squareLayout = ymaps.templateLayoutFactory.createClass('<div class="popup _type_normal _position_top"><div class="popup__arrow"></div><div class="dot"></div><div class="popup__content"><div class="whats-here-preview"><div class="whats-here-preview__main"><div class="whats-here-preview__title">улица Ленинская Слобода, 19</div><div class="whats-here-preview__coords"><span>55.708354</span><span>,</span><span>37.652705</span></div></div><div class="whats-here-preview__route"></div></div></div></div>');
        var myMap = new ymaps.Map('map', {
                center: mapCords,
                zoom: 16,
                controls: []
                // controls: ['geolocationControl']
            }),

            // myMap.controls.add('geolocationControl');
            // myMap.controls.add('routeEditor');
            // Создание метки с квадратной активной областью.
            squarePlacemark = new ymaps.Placemark(
                targetCoords, {
                    hintContent: 'Ленинская Слобода, д. 19, БЦ «Омега Плаза»'
                }, {
                    iconLayout: squareLayout
                    // Описываем фигуру активной области "Прямоугольник".
                }
            ),

            //  myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
            //     hintContent: 'Собственный значок метки',
            //     balloonContent: 'Это красивая метка'
            // }, {
            //     // Опции.
            //     // Необходимо указать данный тип макета.
            //     iconLayout: 'default#image',
            //     // Своё изображение иконки метки.
            //     iconImageHref: 'http://icons.iconarchive.com/icons/paomedia/small-n-flat/256/sign-check-icon.png',
            //     // Размеры метки.
            //     iconImageSize: [42, 42],
            //     // Смещение левого верхнего угла иконки относительно
            //     // её "ножки" (точки привязки).
            //     iconImageOffset: [-3, -42]
            // }),

            // Создадим пользовательский макет ползунка масштаба.
            ZoomLayout = ymaps.templateLayoutFactory.createClass("<div class='controls_zoom'>" +
                    "<div id='zoom-in' class='btn'><i class='icon-plus'></i></div><br>" +
                    "<div id='zoom-out' class='btn'><i class='icon-minus'></i></div>" +
                "</div>", {

                // Переопределяем методы макета, чтобы выполнять дополнительные действия
                // при построении и очистке макета.
                build: function () {
                    // Вызываем родительский метод build.
                    ZoomLayout.superclass.build.call(this);

                    // Привязываем функции-обработчики к контексту и сохраняем ссылки
                    // на них, чтобы потом отписаться от событий.
                    this.zoomInCallback = ymaps.util.bind(this.zoomIn, this);
                    this.zoomOutCallback = ymaps.util.bind(this.zoomOut, this);

                    // Начинаем слушать клики на кнопках макета.
                    $('#zoom-in').bind('click', this.zoomInCallback);
                    $('#zoom-out').bind('click', this.zoomOutCallback);
                },

                clear: function () {
                    // Снимаем обработчики кликов.
                    $('#zoom-in').unbind('click', this.zoomInCallback);
                    $('#zoom-out').unbind('click', this.zoomOutCallback);

                    // Вызываем родительский метод clear.
                    ZoomLayout.superclass.clear.call(this);
                },

                zoomIn: function () {
                    var map = this.getData().control.getMap();
                    // Генерируем событие, в ответ на которое
                    // элемент управления изменит коэффициент масштабирования карты.
                    this.events.fire('zoomchange', {
                        oldZoom: map.getZoom(),
                        newZoom: map.getZoom() + 1
                    });
                },

                zoomOut: function () {
                    var map = this.getData().control.getMap();
                    this.events.fire('zoomchange', {
                        oldZoom: map.getZoom(),
                        newZoom: map.getZoom() - 1
                    });
                }
            }),
            zoomControl = new ymaps.control.ZoomControl({ options: { layout: ZoomLayout } });

        myMap.controls.add(zoomControl);
        // myMap.geoObjects.add(myPlacemark);
        myMap.geoObjects.add(squarePlacemark);

    });

    // #Moadl###################################################################

    $('.modal-trigger').leanModal({
        starting_top: '0%',
    });

    // #Carusel#################################################################
    var clienAboutUsCarusel, owl;
    clienAboutUsCarusel = {
        loop: false,
        margin: 0,
        items: 1,
        nav: true,
        dots: false,
        // autoHeight : true
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
