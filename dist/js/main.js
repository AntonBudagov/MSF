(function(appl) {
    "use strict";
    ymaps.ready(init);
    function init() {
        var myMap = new ymaps.Map("map", {
            center: [ 55.708354, 37.652705 ],
            zoom: 16
        }), myPlacemark1 = new ymaps.Placemark([ 55.708354, 37.652705 ], {
            iconContent: "",
            balloonContent: "улица Ленинская Слобода, 19",
            hintContent: "улица Ленинская Слобода, 19"
        }, {
            preset: "twirl#violetIcon"
        });
        myMap.geoObjects.add(myPlacemark1);
    }
    $(".modal-trigger").leanModal({
        starting_top: "0%"
    });
    var clienAboutUsCarusel, owl;
    clienAboutUsCarusel = {
        loop: false,
        margin: 0,
        items: 1,
        nav: true,
        dots: false
    };
    owl = $(".clienAboutUsCarusel");
    $(".UserReviewCarusel").owlCarousel(clienAboutUsCarusel);
    $(".clienAboutUsCarusel").on("initialized.owl.carousel changed.owl.carousel", function(e) {
        if (!e.namespace) return;
        var carousel = e.relatedTarget;
        $(".counter").html('<span class="active">' + (carousel.relative(carousel.current()) + 1) + "</span><span>/</span><span>" + carousel.items().length + "</span>");
    }).owlCarousel(clienAboutUsCarusel);
})(window);
(function(rippleBtn) {
    "use strict";
    var btnRipple = function(e) {
        return false;
    };
    document.addEventListener("click", btnRipple, false);
})(window);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiLCJyaXBwbGVCdXR0b24uanMiXSwibmFtZXMiOlsiYXBwbCIsInltYXBzIiwicmVhZHkiLCJpbml0IiwibXlNYXAiLCJNYXAiLCJjZW50ZXIiLCJ6b29tIiwibXlQbGFjZW1hcmsxIiwiUGxhY2VtYXJrIiwiaWNvbkNvbnRlbnQiLCJiYWxsb29uQ29udGVudCIsImhpbnRDb250ZW50IiwicHJlc2V0IiwiZ2VvT2JqZWN0cyIsImFkZCIsIiQiLCJsZWFuTW9kYWwiLCJzdGFydGluZ190b3AiLCJjbGllbkFib3V0VXNDYXJ1c2VsIiwib3dsIiwibG9vcCIsIm1hcmdpbiIsIml0ZW1zIiwibmF2IiwiZG90cyIsIm93bENhcm91c2VsIiwib24iLCJlIiwibmFtZXNwYWNlIiwiY2Fyb3VzZWwiLCJyZWxhdGVkVGFyZ2V0IiwiaHRtbCIsInJlbGF0aXZlIiwiY3VycmVudCIsImxlbmd0aCIsIndpbmRvdyIsInJpcHBsZUJ0biIsImJ0blJpcHBsZSIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciJdLCJtYXBwaW5ncyI6IkNBQUEsU0FBV0E7SUFDVDtJQUdDQyxNQUFNQyxNQUFNQztJQUVYLFNBQVNBO1FBQ0wsSUFBSUMsUUFBUSxJQUFJSCxNQUFNSSxJQUFJO1lBQ2xCQyxVQUFTLFdBQVc7WUFDcEJDLE1BQU07WUFJVkMsZUFBZSxJQUFJUCxNQUFNUSxZQUFXLFdBQVc7WUFHM0NDLGFBQWE7WUFDYkMsZ0JBQWdCO1lBQ2hCQyxhQUFhOztZQUliQyxRQUFROztRQU1oQlQsTUFBTVUsV0FDREMsSUFBSVA7O0lBS2JRLEVBQUUsa0JBQWtCQztRQUNoQkMsY0FBYzs7SUFLbEIsSUFBSUMscUJBQXFCQztJQUN6QkQ7UUFDSUUsTUFBTTtRQUNOQyxRQUFRO1FBQ1JDLE9BQU87UUFDUEMsS0FBSztRQUNMQyxNQUFNOztJQUdWTCxNQUFNSixFQUFFO0lBRVJBLEVBQUUsc0JBQXNCVSxZQUFZUDtJQUVwQ0gsRUFBRSx3QkFBd0JXLEdBQUcsaURBQWlELFNBQVNDO1FBQ25GLEtBQUtBLEVBQUVDLFdBQVc7UUFDZCxJQUFJQyxXQUFXRixFQUFFRztRQUVyQmYsRUFBRSxZQUFZZ0IsS0FBSywyQkFBeUJGLFNBQVNHLFNBQVNILFNBQVNJLGFBQVcsS0FBTSxnQ0FBZ0NKLFNBQVNQLFFBQVFZLFNBQVE7T0FDbEpULFlBQVlQO0dBRWhCaUI7Q0M1REgsU0FBV0M7SUFDVDtJQUNBLElBQUlDLFlBQVksU0FBU1Y7UUFFdkIsT0FBTzs7SUFHVFcsU0FBU0MsaUJBQWlCLFNBQVNGLFdBQVc7R0FJN0NGIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gKGFwcGwpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuXG4gICAvLyBNYXAgIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjI1xuICAgeW1hcHMucmVhZHkoaW5pdCk7XG5cbiAgICBmdW5jdGlvbiBpbml0ICgpIHtcbiAgICAgICAgdmFyIG15TWFwID0gbmV3IHltYXBzLk1hcChcIm1hcFwiLCB7XG4gICAgICAgICAgICAgICAgY2VudGVyOiBbNTUuNzA4MzU0LCAzNy42NTI3MDVdLFxuICAgICAgICAgICAgICAgIHpvb206IDE2XG4gICAgICAgICAgICB9KSxcblxuICAgICAgICAgICAgLy8g0KHQvtC30LTQsNC10Lwg0LzQtdGC0LrRgyDRgSDQv9C+0LzQvtGJ0YzRjiDQstGB0L/QvtC80L7Qs9Cw0YLQtdC70YzQvdC+0LPQviDQutC70LDRgdGB0LAuXG4gICAgICAgICAgICBteVBsYWNlbWFyazEgPSBuZXcgeW1hcHMuUGxhY2VtYXJrKFs1NS43MDgzNTQsIDM3LjY1MjcwNV0sIHtcbiAgICAgICAgICAgICAgICAvLyDQodCy0L7QudGB0YLQstCwLlxuICAgICAgICAgICAgICAgIC8vINCh0L7QtNC10YDQttC40LzQvtC1INC40LrQvtC90LrQuCwg0LHQsNC70YPQvdCwINC4INGF0LjQvdGC0LAuXG4gICAgICAgICAgICAgICAgaWNvbkNvbnRlbnQ6ICcnLFxuICAgICAgICAgICAgICAgIGJhbGxvb25Db250ZW50OiAn0YPQu9C40YbQsCDQm9C10L3QuNC90YHQutCw0Y8g0KHQu9C+0LHQvtC00LAsIDE5JyxcbiAgICAgICAgICAgICAgICBoaW50Q29udGVudDogJ9GD0LvQuNGG0LAg0JvQtdC90LjQvdGB0LrQsNGPINCh0LvQvtCx0L7QtNCwLCAxOSdcbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAvLyDQntC/0YbQuNC4LlxuICAgICAgICAgICAgICAgIC8vINCh0YLQsNC90LTQsNGA0YLQvdCw0Y8g0YTQuNC+0LvQtdGC0L7QstCw0Y8g0LjQutC+0L3QutCwLlxuICAgICAgICAgICAgICAgIHByZXNldDogJ3R3aXJsI3Zpb2xldEljb24nXG4gICAgICAgICAgICB9KTtcblxuXG5cbiAgICAgICAgLy8g0JTQvtCx0LDQstC70Y/QtdC8INCy0YHQtSDQvNC10YLQutC4INC90LAg0LrQsNGA0YLRgy5cbiAgICAgICAgbXlNYXAuZ2VvT2JqZWN0c1xuICAgICAgICAgICAgLmFkZChteVBsYWNlbWFyazEpXG5cbiAgICB9O1xuICAgIC8vICNNb2FkbCMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyNcblxuICAgICQoJy5tb2RhbC10cmlnZ2VyJykubGVhbk1vZGFsKHtcbiAgICAgICAgc3RhcnRpbmdfdG9wOiAnMCUnLFxuICAgIH0pO1xuICAgIC8vICQoJyNtb2RhbDMnKS5vcGVuTW9kYWwoKTtcbiAgICAvLyAkKCcjbW9kYWwyJykub3Blbk1vZGFsKCk7XG4gICAgLy8gI0NhcnVzZWwjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjI1xuICAgIHZhciBjbGllbkFib3V0VXNDYXJ1c2VsLCBvd2w7XG4gICAgY2xpZW5BYm91dFVzQ2FydXNlbCA9IHtcbiAgICAgICAgbG9vcDogZmFsc2UsXG4gICAgICAgIG1hcmdpbjogMCxcbiAgICAgICAgaXRlbXM6IDEsXG4gICAgICAgIG5hdjogdHJ1ZSxcbiAgICAgICAgZG90czogZmFsc2VcbiAgICB9O1xuXG4gICAgb3dsID0gJCgnLmNsaWVuQWJvdXRVc0NhcnVzZWwnKTtcblxuICAgICQoJy5Vc2VyUmV2aWV3Q2FydXNlbCcpLm93bENhcm91c2VsKGNsaWVuQWJvdXRVc0NhcnVzZWwpXG5cbiAgICAkKCcuY2xpZW5BYm91dFVzQ2FydXNlbCcpLm9uKCdpbml0aWFsaXplZC5vd2wuY2Fyb3VzZWwgY2hhbmdlZC5vd2wuY2Fyb3VzZWwnLCBmdW5jdGlvbihlKSB7XG4gICAgICAgIGlmICghZS5uYW1lc3BhY2UpIHJldHVyblxuICAgICAgICAgICAgdmFyIGNhcm91c2VsID0gZS5yZWxhdGVkVGFyZ2V0XG4gICAgICAgIC8vb3dsX2Nhcm91c2VsX3BhZ2VfbnVtYmVycyhlKTtcbiAgICAgICAgJCgnLmNvdW50ZXInKS5odG1sKCc8c3BhbiBjbGFzcz1cImFjdGl2ZVwiPicrKGNhcm91c2VsLnJlbGF0aXZlKGNhcm91c2VsLmN1cnJlbnQoKSkrMSkgICsgJzwvc3Bhbj48c3Bhbj4vPC9zcGFuPjxzcGFuPicgKyBjYXJvdXNlbC5pdGVtcygpLmxlbmd0aCsgJzwvc3Bhbj4nKVxuICAgIH0pLm93bENhcm91c2VsKGNsaWVuQWJvdXRVc0NhcnVzZWwpXG5cbn0pKHdpbmRvdyk7XG5cblxuIiwiKGZ1bmN0aW9uIChyaXBwbGVCdG4pIHtcbiAgJ3VzZSBzdHJpY3QnO1xuICB2YXIgYnRuUmlwcGxlID0gZnVuY3Rpb24oZSkge1xuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBidG5SaXBwbGUsIGZhbHNlKTtcblxuXG5cbn0pKHdpbmRvdyk7XG5cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
