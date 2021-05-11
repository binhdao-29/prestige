const btnDrawer = document.querySelector('.button__drawer');
const menuDrawer = document.querySelector('.menu__drawer');
const btnClose = document.querySelector('.button-close');
const contentMenu = document.querySelector('.content');

const menuTransparent = document.querySelector('.header--transparent');
const btnOpenSearch = document.querySelector('.button--search');
const formSearch = document.querySelector('.search');
const btnCloseSearch = document.querySelector('.button--close');

const btnOpenShop = document.querySelector('.button-drawer--open');
const btnOpenItem = document.querySelector('.item--open');
const shopArea = document.querySelector('.text__item');
const itemArea = document.querySelector('.text__wrapper');
const shopInner = document.querySelector('.main__item--inner');
const menuSmall = document.querySelector('.menu--small');

//drawer menu
btnDrawer.addEventListener('click', () => {
  menuDrawer.classList.add('is-visible');
  contentMenu.classList.add('is-visible');
});

btnClose.addEventListener('click', () => {
  menuDrawer.classList.remove('is-visible');
  contentMenu.classList.remove('is-visible');
});

shopArea.addEventListener('click', () => {
  btnOpenShop.classList.toggle('is-hidden');
  shopInner.classList.toggle('is-visible');  
});

itemArea.addEventListener('click', () => {
  btnOpenItem.classList.toggle('is-hidden');
  menuSmall.classList.toggle('is-visible');
})

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
  slidesPerView: 1,
  spaceBetween: 0,
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  }
  
});
