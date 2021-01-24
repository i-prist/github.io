'use strict';

var ymaps;

ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
            center: [55.751574, 37.573856],
            zoom: 11,
            controls: ['zoomControl', 'searchControl']
        }, {
            searchControlProvider: 'yandex#search'
        }),

        myPlacemark1 = new ymaps.Placemark(myMap.getCenter(), {
            balloonContentHeader: '<a href = "#">улица Смоленская набережная 53</a><br>' +
                '<span class="description">G-Energy сервис<br>Главный офис</span>',
            balloonContentBody: '<a href="tel:+7-123-456-78-90">+7 (123) 456-78-90</a><br/>' +
                '<b>Время работы:</b> <br/> 10:00-19:00 без перерывов.',
            balloonContentFooter: 'Информация предоставлена:<br/>"ПАО Газпром"',
            hintContent: 'Смоленская набережная 53'
        }, {
            iconLayout: 'default#image',
            iconImageHref: 'pic/market_service.png',
            iconImageSize: [36, 38],
        }),

        myPlacemark2 = new ymaps.Placemark([55.757380, 37.633944], {
            hintContent: 'Маросейка, 4/2с1',
            balloonContentHeader: '<a href = "#">улица Маросейка, 4/2с1</a><br>' +
                '<span class="description">G-Energy сервис</span>',
            balloonContentBody: '<a href="tel:+7-123-456-78-90">+7 (123) 456-78-90</a><br/>' +
                '<b>Время работы:</b> <br/> 10:00-19:00 без перерывов.',
            balloonContentFooter: 'Информация предоставлена:<br/>ИП Селезнёв"'
        }, {
            iconLayout: 'default#image',
            iconImageHref: 'pic/market_service.png',
            iconImageSize: [36, 38],
        }),

        myPlacemark3 = new ymaps.Placemark([55.767455, 37.594017], {
            balloonContentHeader: '<a href = "#">Большая Садовая улица, 14с1</a><br>' +
                '<span class="description">G-Energy сервис</span>',
            balloonContentBody: '<a href="tel:+7-123-456-78-90">+7 (123) 456-78-90</a><br/>' +
                '<b>Время работы:</b> <br/> 10:00-19:00 без перерывов.',
            balloonContentFooter: 'Информация предоставлена:<br/>ИП Саботович',
            hintContent: 'Большая Садовая, 14с1'
        }, {
            iconLayout: 'default#image',
            iconImageHref: 'pic/market_service.png',
            iconImageSize: [36, 38],
        }),

        myPlacemark4 = new ymaps.Placemark([55.743585, 37.584563], {
            balloonContentHeader: '<a href = "#">Глазовский переулок, 9</a><br>' +
                '<span class="description">G-Energy магазин</span>',
            balloonContentBody: '<a href="tel:+7-123-456-78-90">+7 (123) 456-78-90</a><br/>' +
                '<b>Время работы:</b> <br/> 10:00-19:00 без перерывов.',
            balloonContentFooter: 'Информация предоставлена:<br/>OOO "Стар-307"',
            hintContent: 'Глазовский пер., 9'
        }, {
            iconLayout: 'default#image',
            iconImageHref: 'pic/marker_market.png',
            iconImageSize: [36, 38],
        }),

        myPlacemark5 = new ymaps.Placemark([55.696006, 37.546604], {
            balloonContentHeader: '<a href = "#">Молодёжная улица, 6</a><br>' +
                '<span class="description">G-Energy магазин</span>',
            balloonContentBody: '<a href="tel:+7-123-456-78-90">+7 (123) 456-78-90</a><br/>' +
                '<b>Время работы:</b> <br/> 10:00-19:00 без перерывов.',
            balloonContentFooter: 'Информация предоставлена:<br/>OOO "Гараж рус"',
            hintContent: 'Молодёжная, 6'
        }, {
            iconLayout: 'default#image',
            iconImageHref: 'pic/marker_market.png',
            iconImageSize: [36, 38],
        }),

        myPlacemark6 = new ymaps.Placemark([55.656705, 37.706394], {
            balloonContentHeader: '<a href = "#">1-я Курьяновская улица, 6</a><br>' +
                '<span class="description">G-Energy сервис</span>',
            balloonContentBody: '<a href="tel:+7-123-456-78-90">+7 (123) 456-78-90</a><br/>' +
                '<b>Время работы:</b> <br/> 10:00-19:00 без перерывов.',
            balloonContentFooter: 'Информация предоставлена:<br/>ИП Антонов"',
            hintContent: '1-я Курьяновская, 6'
        }, {
            iconLayout: 'default#image',
            iconImageHref: 'pic/market_service.png',
            iconImageSize: [36, 38],
        }),

        myPlacemark7 = new ymaps.Placemark([55.795569, 37.643861], {
            balloonContentHeader: '<a href = "#">2-я Мытищинская улица, 2с14</a><br>' +
                '<span class="description">G-Energy магазин</span>',
            balloonContentBody: '<a href="tel:+7-123-456-78-90">+7 (123) 456-78-90</a><br/>' +
                '<b>Время работы:</b> <br/> 10:00-19:00 без перерывов.',
            balloonContentFooter: 'Информация предоставлена:<br/>OOO "Экзибит"',
            hintContent: '2-я Мытищинская, 2с14'
        }, {

            iconLayout: 'default#image',
            iconImageHref: 'pic/marker_market.png',
            iconImageSize: [36, 38],
        }),

        myPlacemark8 = new ymaps.Placemark([55.016893, 82.979580], {
            hintContent: 'Автогенная, 105к3',
            balloonContentHeader: '<a href = "#">Автогенная улица, 105к3</a><br>' +
                '<span class="description">G-Energy сервис</span>',
            balloonContentBody: '<a href="tel:+7-123-456-78-90">+7 (123) 456-78-90</a><br/>' +
                '<b>Время работы:</b> <br/> 10:00-19:00 без перерывов.',
            balloonContentFooter: 'Информация предоставлена:<br/>ООО "Сиб-сервис"'
        }, {
            iconLayout: 'default#image',
            iconImageHref: 'pic/market_service.png',
            iconImageSize: [36, 38],
        });

    myMap.geoObjects
        .add(myPlacemark1)
        .add(myPlacemark2)
        .add(myPlacemark3)
        .add(myPlacemark4)
        .add(myPlacemark5)
        .add(myPlacemark6)
        .add(myPlacemark7)
        .add(myPlacemark8);

    myMap.behaviors.disable('scrollZoom');

});

function close() {
    const modalThx = document.querySelector('.modal-thx');
    const closeBtn = document.querySelector('.modal-thx__close');
    const shadow = document.getElementById('shadow');
    const endBtn = document.getElementById('end');

    closeBtn.addEventListener('click', () => {
        modalThx.style.display = 'none';
        shadow.style.display = 'none';
        document.body.style.overflow = '';
    });
    endBtn.addEventListener('click', () => {
        modalThx.style.display = 'none';
        shadow.style.display = 'none';
        document.body.style.overflow = '';
    });
}

function takeGift() {
    const btnGift = document.getElementById('gift');
    const modalGift = document.querySelector('.modal-gift');
    const closeBtn = document.querySelector('.modal-gift__close');
    const shadow = document.getElementById('shadow');

    btnGift.addEventListener('click', () => {
        shadow.style.display = 'flex';
        modalGift.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    });
    closeBtn.addEventListener('click', () => {
        modalGift.style.display = 'none';
        shadow.style.display = 'none';
        document.body.style.overflow = '';
    });
}

function validate() {
    const form = document.querySelector('.modal-gift__form');
    const modalGift = document.querySelector('.modal-gift');
    let inputs = form.querySelectorAll('.modal-gift__input');
    const modalThx = document.querySelector('.modal-thx');
    
    let generateSucsess = function () {
        modalGift.style.display = 'none';
        modalThx.style.display = 'flex';
    };

    let checkInputs = function () {
        for (let i = 0; i < inputs.length; i++) {
            if (!inputs[i].value) {} 
            else {
                generateSucsess();
            }
        }
    };

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        checkInputs();
    });
}

takeGift();
validate();
close();