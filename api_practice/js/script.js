const element = document.querySelector('select');
const choices = new Choices(element, {
    searchEnabled: false,
    shouldSort: false,
});


// Функция ymaps.ready() будет вызвана, когда
// загрузятся все компоненты API, а также когда будет готово DOM-дерево.
ymaps.ready(init);
function init(){
    // Создание карты.
    var myMap = new ymaps.Map("map", {
        // Координаты центра карты.
        // Порядок по умолчанию: «широта, долгота».
        // Чтобы не определять координаты центра карты вручную,
        // воспользуйтесь инструментом Определение координат.
        center: [48.872185073737896,2.354223999999991],
        // Уровень масштабирования. Допустимые значения:
        // от 0 (весь мир) до 19.
        zoom: 15
    });
    // Создание геообъекта с типом точка (метка).
    var myPlacemark = new ymaps.Placemark([48.872185073737896,2.354223999999991], {}, {
        iconLayout: 'default#image',
        iconImageHref: '../img/mdi_location_on.svg',
        iconImageSize: [58, 70],
        iconImageOffset: [-29, -70]
    });

    // Размещение геообъекта на карте.
    myMap.geoObjects.add(myPlacemark); 
}

