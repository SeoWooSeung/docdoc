const MAIN_SLIDE_DOTS = document.querySelectorAll('.main_visual_slide .dots li')
const MAIN_SLIDE = new Swiper('.main_visual_slide', {
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },

    slideActiveClass:'on',

    on:{
        init : function(){
            MAIN_SLIDE_DOTS[0].classList.add('on');
        },
        slideChangeTransitionEnd : function(){
            console.log(this.realIndex);
            document.querySelector('.num strong').innerHTML = `0${this.realIndex + 1}`;
            MAIN_SLIDE_DOTS.forEach(it=>it.classList.remove('on'));
            MAIN_SLIDE_DOTS[this.realIndex].classList.add('on');
        }
    }
});

const MAIN_SLIDE_LEFT_BUTTON = document.querySelector('.main_visual_slide .arrows .left')
const MAIN_SLIDE_RIGHT_BUTTON = document.querySelector('.main_visual_slide .arrows .right')

MAIN_SLIDE_LEFT_BUTTON.addEventListener('click',() => {
    MAIN_SLIDE.slidePrev();
});
MAIN_SLIDE_RIGHT_BUTTON.addEventListener('click',() => {
    MAIN_SLIDE.slideNext();
});

console.log(MAIN_SLIDE_DOTS);


MAIN_SLIDE_DOTS.forEach((it,idx) => {
it.addEventListener("click", ()=> { //각각을 클릭했을때//
// console.log("번호 : ", idx);
MAIN_SLIDE.slideTo(idx);
// MAIN_SLIDE_DOTS.forEach((it)=>{it.classList.remove('on')})
// MAIN_SLIDE_DOTS[idx].classList.add('on');
});
});























    // pagination: {
    //     el: '.pg',
    //     clickable: true,
    // },
    // navigation: {
    //     nextEl: '.next',
    //     prevEl: '.prev',    
    // },

    // scrollbar: {
    //     el: '.swiper-scrollbar',
    // },
    
    // effect: "coverflow",
    // grabCursor: true,
    // centeredSlides: true,
    // slidesPerView: "auto",
    // coverflowEffect: {
    //     rotate: 50,
    //     stretch: 0,
    //     depth: 100,
    //     modifier: 1,
    //     slideShadows: true,
    // }
