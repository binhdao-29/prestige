const btnDrawer = document.querySelector('.button--open');
const menuDrawer = document.querySelector('.menu__drawer');
const btnClose = document.querySelector('.button-close');
const contentMenu = document.querySelector('.content');

const menuTransparent = document.querySelector('.header--transparent');
const btnOpenSearch = document.querySelector('.button--search');
const formSearch = document.querySelector('.search');
const btnCloseSearch = document.querySelector('.button--close');
const btnNavbarSearch = document.querySelector('.item--search');
//toggle menu
const btnOpenShop = document.querySelector('.button-drawer--open');
const shopArea = document.querySelector('.text__item');
// toggle menu-small
const shopInner = document.querySelector('.main__item--inner');
const btnOpenItem = document.getElementsByClassName('item--open');
const itemArea = document.getElementsByClassName('text__wrapper');
const menuSmall = document.getElementsByClassName('menu--small');

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


//open small menu

const toggleSmallMenu = () => {
  for (let i = 0; i < 3; i++) {
    itemArea[i].addEventListener('click', () => {
      for (let j = 0; j < 3; j++) {
        if (j !== i) {
          btnOpenItem[j].classList.remove('is-hidden');
          menuSmall[j].classList.remove('is-visible');
        }
      }

      btnOpenItem[i].classList.toggle('is-hidden');
      menuSmall[i].classList.toggle('is-visible');
    });
  }
}

toggleSmallMenu();


//search
btnOpenSearch.addEventListener('click', () => {
  menuTransparent.classList.toggle('z--index');
  menuTransparent.classList.toggle('bg--white');
  formSearch.classList.toggle('is-visible');
});

btnNavbarSearch.addEventListener('click', () => {
  formSearch.classList.toggle('is-visible');
})

btnCloseSearch.addEventListener('click', () => {
  formSearch.classList.toggle('is-visible');
});

// slide show

const swiper = new Swiper(".main__item--swiper", {
  slidesPerView: 1,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  }
});
