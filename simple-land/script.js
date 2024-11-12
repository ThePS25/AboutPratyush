let button = document.querySelector('.bars');
let menu = document.querySelector('ul');
let btn = document.querySelector('#close');

button.addEventListener('click' , () =>{
    menu.classList.toggle('ShowMenu')
});

btn.addEventListener('click' , () =>{
    menu.classList.toggle('ShowMenu')
});


var swiper = new Swiper('.myswiper' , {
    slidesPerView:4,
    spaceBetween:4,
    autoplay:true,
    loop:true,
    breakpoints:{
        1600:{
            slidesPerView:3,
            spaceBetween:4,
        },
        1500:{
            slidesPerView:3,
            spaceBetween:4,
        },
        1400:{
            slidesPerView:3,
            spaceBetween:4,
        },
        1300:{
            slidesPerView:3,
            spaceBetween:4,
        },
        1200:{
            slidesPerView:3,
            spaceBetween:4,
        },
        1000:{
            slidesPerView:3,
            spaceBetween:4,
        },
        500:{
            slidesPerView:3,
            spaceBetween:4,
        },
        0:{
            slidesPerView:2,
            spaceBetween:4,
        },
    },
});