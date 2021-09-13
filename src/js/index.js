import galleryItems from './components/app.js';
import '../style/index.scss';
import gallery from '../templates/gallery.hbs';
import slider from '../templates/slider.hbs';
 window.jQuery = window.$ = require('jquery');
 require('./slick/slick.min.js');
 


//refs
const galleryCollection = document.querySelector('.js-gallery')
const galleryModalWindow = document.querySelector('.js-lightbox')
const createSlider = galleryModalWindow.querySelector('.slider-js')
const overlayLink = galleryModalWindow.querySelector('.lightbox__overlay')
const btnLink = galleryModalWindow.querySelector('.lightbox__button')

const cardsImag = gallery(galleryItems);
galleryCollection.insertAdjacentHTML('beforeend', cardsImag);

const sliderMarkup = slider(galleryItems);
createSlider.insertAdjacentHTML('beforeend', sliderMarkup);

  $(document).ready(function () {
  $('.slider-js').slick({
    arrows: false,
    dots: true, // точки
    adaptiveHeight: true, // адаптирование по высоте
    slidesToShow: 1, // сколько слайдеров активно
    slidesToScroll: 1, // по сколько пролистывать
    speed: 2000, // скорость пролистывания
    easing: '_ease_', // тип анамации
    infinite: true,
    initialSlide: arr, // с какого слайда старт 
    autoplay: false, // авто проигрывание 
    autoplaySpeed: 3500, // скрость листания
    pauseOnFocus: true,
    pauseOnHover: true,
    pauseOnDotsHover: true, // пауза при ховере по точкам
    draggable: false, // отключение свайпа на ПК
    swipe: true,
    touchThreshold: 5, //срабатываниe свайпа
    touchMove: true, //срабатывание тача
    waitForAnimate: true, //анимация переключения
  })

  });
  

const arrLink = galleryCollection.querySelectorAll('.gallery__image')
let arr = {
  value: 0,
}

galleryCollection.addEventListener('click', evt => {
  evt.preventDefault();
  if (evt.target.nodeName !== 'IMG') {
    return
  }
  modalOpen('is-open')
  window.addEventListener('keydown', onEscKeyPress)

  const valueIndex = arrLink.forEach((currentValue, index, array) => {
    if (evt.target.alt === currentValue.alt) {
      arr.value = index
      $('.slider-js').slick('goTo', arr.value)
    }
  })
})

btnLink.addEventListener('click', evt => {
  window.removeEventListener('keydown', onEscKeyPress)
  modalClose('is-open')

})

overlayLink.addEventListener('click', evt => {
  if (evt.currentTarget === evt.target) {
    window.removeEventListener('keydown', onEscKeyPress)
    modalClose('is-open')
  }
})


function onEscKeyPress(evt) {
  if (evt.code === 'Escape') {
    modalClose('is-open')
  }

}

function modalOpen(value) {
  galleryModalWindow.classList.add(value)

}

function modalClose(value) {
  galleryModalWindow.classList.remove(value)

}



