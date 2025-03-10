import Swiper from 'swiper/bundle';

const nav = document.querySelector('nav');
const navToggle = document.querySelector('.nav-toggle');
const links = document.querySelectorAll('nav a');

navToggle.addEventListener('click', () => {
  navToggle.classList.toggle('open');
  nav.classList.toggle('open');
});

document.addEventListener('click', (e) => {
  if (!nav.contains(e.target) && !navToggle.contains(e.target)) {
    navToggle.classList.remove('open');
    nav.classList.remove('open');
  }
});

links.forEach(link => {
  link.addEventListener('click', () => {
      links.forEach(link => link.classList.remove('link-active'));      
      link.classList.add('link-active');
      navToggle.classList.remove('open');
      nav.classList.remove('open');
  });
});

// Function to remove active class from all links
function removeActiveClasses() {
  links.forEach(link => link.classList.remove('link-active'));
}
 // Intersection Observer callback
 const observerCallback = (entries) => {
  entries.forEach(entry => {
      const link = document.querySelector(`a[href="#${entry.target.id}"]`);
      if (entry.isIntersecting) {
          removeActiveClasses();
          link.classList.add('link-active');
      }
  });
};
// Create an Intersection Observer
const observer = new IntersectionObserver(observerCallback, {
  threshold: 0.7 // Trigger when 50% of the section is visible
});

// Observe each section
document.querySelectorAll('section').forEach(section => {
  observer.observe(section);
});

// Add scroll event listener
window.addEventListener('scroll', setActiveLink);

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