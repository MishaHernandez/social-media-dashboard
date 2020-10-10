// bg in body
const bg = document.getElementById('body');
const bg_top = document.querySelector('.bg-top');

// header
const title = document.querySelector('.title');
const subtitle = document.querySelector('.subtitle-2');
const toggle_btn = document.querySelector('.dark-mode__label');

// card
const card_1 = document.querySelectorAll('.card-1');
const card_2 = document.querySelectorAll('.card-2');

// text in first section
const section1_p1 = document.querySelectorAll('.card-1__paragraph-1');
const section1_p2 = document.querySelectorAll('.card-1__paragraph-2');
const section1_p3 = document.querySelectorAll('.card-1__paragraph-3');

// text in second section
const section2_p1 = document.querySelectorAll('.card-2__paragraph-1');
const section2_p2 = document.querySelectorAll('.card-2__paragraph-2');

const toggle = document.getElementById('toggle');

toggle.addEventListener('click', ()=> {
    bg.classList.toggle('bg-dark');
    bg_top.classList.toggle('bg-top-dark');
    title.classList.toggle('text-dark-2');
    subtitle.classList.toggle('text-dark-2');
    toggle_btn.classList.toggle('toggle-bg-dark');

    for (let i = 0; i < card_1.length; i++) {
        card_1[i].classList.toggle('card-dark');
        section1_p1[i].classList.toggle('text-dark-1');
        section1_p2[i].classList.toggle('text-dark-2');
        section1_p3[i].classList.toggle('text-dark-1');
    }
    for (let i = 0; i < card_2.length; i++) {
        card_2[i].classList.toggle('card-dark');
        section2_p1[i].classList.toggle('text-dark-1');
        section2_p2[i].classList.toggle('text-dark-2');
    }
})