import Swiper from 'swiper/bundle';

const swiper = new Swiper('.mySwiper', {
  slidesPerView: 'auto',
  spaceBetween: 20,    
  loop: true,           
  centeredSlides: true, 
  pagination: {
      el: '.swiper-pagination',
      clickable: true,
  },
});