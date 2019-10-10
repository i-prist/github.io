'use strict';
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
function thx() {
    const modalGift = document.querySelector('.modal-gift');
    const btnTake = document.getElementById('take-gift');
    const modalThx = document.querySelector('.modal-thx');
    const closeBtn = document.querySelector('.modal-thx__close');
    const endBtn = document.getElementById('end');
    const shadow = document.getElementById('shadow');

    btnTake.addEventListener('click', () => {
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
thx();