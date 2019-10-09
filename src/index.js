'use strict';
function takeGift() {
    const btnGift = document.getElementById('gift');
    const modalGift = document.querySelector('.modal-gift');
    const closeBtn = document.querySelector('.modal-gift__close');

    btnGift.addEventListener('click', () => {
        modalGift.style.display = 'flex';
    });

    closeBtn.addEventListener('click', () => {
        modalGift.style.display = 'none';
    });
}
function thx() {
    const modalGift = document.querySelector('.modal-gift');
    const btnTake = document.getElementById('take-gift');
    const modalThx = document.querySelector('.modal-thx');
    const closeBtn = document.querySelector('.modal-thx__close');
    const endBtn = document.getElementById('end');

    btnTake.addEventListener('click', () => {
        modalGift.style.display = 'none';
        modalThx.style.display = 'flex';
    });

    closeBtn.addEventListener('click', () => {
        modalThx.style.display = 'none';
    });
    endBtn.addEventListener('click', () => {
        modalThx.style.display = 'none';
    });
}
takeGift();
thx();