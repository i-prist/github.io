'use strict';

ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
            center: [55.751574, 37.573856],
            zoom: 9,
            controls: []
        }, {
            searchControlProvider: 'yandex#search'
        }),

        myPlacemark1 = new ymaps.Placemark(myMap.getCenter(), {
            balloonContentHeader: '<a href = "#">Рога и копыта</a><br>' +
            '<span class="description">Сеть кинотеатров</span>',
        balloonContentBody:
            '<a href="tel:+7-123-456-78-90">+7 (123) 456-78-90</a><br/>' +
            '<b>Ближайшие сеансы</b> <br/> Сеансов нет.',
        balloonContentFooter: 'Информация предоставлена:<br/>OOO "Рога и копыта"',
        hintContent: 'Рога и копыта'
        }, {
            iconLayout: 'default#image',
            iconImageHref: 'pic/market_service.png',
            iconImageSize: [36, 38],
            iconImageOffset: [-5, -38]
        }),

        myPlacemark2 = new ymaps.Placemark([55.661574, 37.573856], {
            hintContent: 'Собственный значок метки',
            balloonContent: 'А эта не менее красивая'
        }, {
           
            iconLayout: 'default#image',
            iconImageHref: 'pic/marker_market.png',
            iconImageSize: [36, 38],
            iconImageOffset: [-24, -24],
        });

    myMap.geoObjects
        .add(myPlacemark1)
        .add(myPlacemark2);
});


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
    let inputs = form.querySelectorAll('.modal-gift__input');

    let generateError = function (text) {
        let error = document.createElement('div');
        error.className = 'error';
        error.style.color = 'red';
        error.innerHTML = text;
        return error;
    };

    let removeValidation = function () {
        let errors = form.querySelectorAll('error');

        for (let i = 0; i < errors.length; i++) {
            errors[i].remove();
        }
    };

    let checkInputs = function () {
        for (let i = 0; i < inputs.length; i++) {
            if (!inputs[i].value) {
                let error = generateError('Заполните поле');
                form[i].parentElement.insertBefore(error, inputs[i]);
            }
        }
    };

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        removeValidation();
        checkInputs();
    });
}

function thx() {
    const modalGift = document.querySelector('.modal-gift');
    const btnTake = document.getElementById('take-gift');
    const modalThx = document.querySelector('.modal-thx');
    const closeBtn = document.querySelector('.modal-thx__close');
    const endBtn = document.getElementById('end');
    const shadow = document.getElementById('shadow');

    btnTake.addEventListener('onsubmit', () => {
        modalGift.style.display = 'none';
        modalThx.style.display = 'flex';
    });

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

takeGift();
validate();
thx();