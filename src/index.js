'use strict';

ymaps.ready(init);

function init() {
    let myMap = new ymaps.Map("map", {
        center: [55.76, 37.64],
        zoom: 10
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