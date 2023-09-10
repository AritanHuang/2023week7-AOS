import './assets/scss/all.scss';
import 'bootstrap/dist/js/bootstrap.min.js';

// AOS
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init({
    once: true,
});

const swiper = new Swiper(".mySwiper", {

    //避免使用者移動到
    allowTouchMove: false,

    //能呈現幾個.swiper-slide
    slidesPerView: "auto",

    //跑馬燈的速度(毫秒)
    speed: 10000,

    //是否重複
    loop: true,

    autoplay: {

        //到下一個幻燈片時，停下的時間
        delay: 0,

        //避免點擊造成跑馬燈失效，視情況增加
        disableOnInteraction: false
    }
});
