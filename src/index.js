'use strict';
function takeGift() {
    const btnGift = document.getElementById('gift');
    const modalGift = document.querySelector('.modal-gift');
    const closeBtn = document.querySelector('.modal-gift__close');

    btnGift.addEventListener('click', () => {
        modalGift.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    });

    closeBtn.addEventListener('click', () => {
        modalGift.style.display = 'none';
        document.body.style.overflow = '';
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
        document.body.style.overflow = 'hidden';
    });

    closeBtn.addEventListener('click', () => {
        modalThx.style.display = 'none';
        document.body.style.overflow = '';
    });
    endBtn.addEventListener('click', () => {
        modalThx.style.display = 'none';
        document.body.style.overflow = '';
    });
}
takeGift();
thx();