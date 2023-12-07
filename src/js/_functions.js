// Реализация бургер-меню
import { burger } from './functions/burger';

// Подключение свайпера
import Swiper, {
  Navigation,
  Pagination,
  Scrollbar,
  Thumbs,
  FreeMode,
  Autoplay,
} from 'swiper';
Swiper.use([Navigation, Pagination, Scrollbar, Thumbs, FreeMode, Autoplay]);

const swiperSpeakers = new Swiper('.speakers__slider', {
  slidesPerView: 2,
  spaceBetween: 42,
  navigation: {
    nextEl: '.swiper-next',
    prevEl: '.swiper-prev',
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        renderBullet: function (i, className) {
          return `
   <button class="${className}">
<span>${i + 1}</span>
  </button>
      `;
        },
      },
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 42,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        renderBullet: function (i, className) {
          return `
   <button class="${className}">
  <span>${i + 1}</span>
  </button>
      `;
        },
      },
    },
  },
});

// Подключение анимаций по скроллу
import AOS from 'aos';
AOS.init();
