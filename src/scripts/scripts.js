const btnDrawer = document.querySelector('.button-drawer');
const menuDrawer = document.querySelector('.menu-drawer');
const btnClose = document.querySelector('.button-close');
const menuMain = document.querySelector('.menu-drawer__main');

const menuTransparent = document.querySelector('.header--transparent');
const btnOpenSearch = document.querySelector('.button--search');
const formSearch = document.querySelector('.search');
const btnCloseSearch = document.querySelector('.button--close');

const btnOpenShop = document.querySelector('.button-drawer--open');
const shopArea = document.querySelector('.item--content__text');
const shopInner = document.querySelector('.main__item--inner');

//drawer menu
btnDrawer.addEventListener('click', () => {
  menuDrawer.classList.add('is-visible');
  menuMain.classList.add('is-visible');
});

btnClose.addEventListener('click', () => {
  menuDrawer.classList.remove('is-visible');
  menuMain.classList.remove('is-visible');
});

shopArea.addEventListener('click', () => {
  btnOpenShop.classList.toggle('is-hidden');
  shopInner.classList.toggle('is-visible');  
});

//search
btnOpenSearch.addEventListener('click', () => {
  menuTransparent.classList.toggle('z--index');
  menuTransparent.classList.toggle('bg--white');
  formSearch.classList.toggle('is-visible');
});

btnCloseSearch.addEventListener('click', () => {
  formSearch.classList.toggle('is-visible');
});

// slide show

var swiper = new Swiper(".main__item--swiper", {
  // slidesPerView: 1,
  // spaceBetween: 0,
  // slidesPerGroup: 1,
  // loop: true,
  // loopFillGroupWithBlank: true,

  // autoplay: {
  //   delay: 3000,
  // },
  
  // pagination: {
  //   el: ".swiper-pagination",
  // },

  slidesPerView: 1,
  spaceBetween: 0,
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  }
  
});
