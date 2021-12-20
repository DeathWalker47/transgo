$(function(){
  
});


const btns = document.querySelectorAll('.contact-popup');
const modalOverlay = document.querySelector('.modal-overlay');
const modal = document.querySelector('.modal');
const btnClose = document.querySelector('.modal__close');

btns.forEach((el) => {
  el.addEventListener('click', (e) => {
    modal.classList.add('modal--visible')
    modalOverlay.classList.add('modal-overlay--visible');
    document.querySelector('body').classList.add('body-hidden')
  })
});

if(modalOverlay) {
  modalOverlay.addEventListener('click', (e) => {
  if(e.target == modalOverlay || e.target == modal || e.target == btnClose) {
    modalOverlay.classList.remove('modal-overlay--visible')
    modal.classList.remove('modal--visible')
    document.querySelector('body').classList.remove('body-hidden')
  }
});
}


let accardeon = document.querySelectorAll('.accardeon__item');

accardeon.forEach(el => {
  el.addEventListener('click', (e) => {
    const self = e.currentTarget;
    const content = self.querySelector('.accardeon__content');

    // Проходимся циклом по каждому аккардеону и убираем у всех у них класс опен
    document.querySelectorAll('.accardeon__item').forEach(el => {
      el.classList.remove('accardeon__item--open')
      el.querySelector('.accardeon__content').style.maxHeight = null;
    })
    
    self.classList.toggle('accardeon__item--open');

    if(self.classList.contains('accardeon__item--open')) {
      content.style.maxHeight = content.scrollHeight + 'px';
    } else {
      content.style.maxHeight = null;
    }
    
  })
})


new Swiper('.reviews-swiper',{
  loop:true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  spaceBetween: 30,
  speed: 800,
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
  },
 });

new Swiper('.news-swiper',{
  loop:true,
  slidesPerView: 2,
  spaceBetween: 30,
  speed: 800,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
 });

 
 const item = document.querySelectorAll('.progress__item')
//  const line = document.querySelectorAll('.progress__line')
console.log(item);
 item.forEach(el => { //проходимся по блоку

  let line = el.querySelector('.progress__line')
  let percent = line.dataset.percent; //нашли атрибут блока с процентами %
  console.log(percent);
  let maxWidthLine = el.querySelector('.progress-max').getAttribute('width')

  let lineProgress = el.querySelector('.progress-percent') //нашли прогресс линию
  let lineWidth = lineProgress.getAttribute('width'); //атрибут длины прогресс линии

  let circle = el.querySelector('circle')
  let circlePosition = circle.getAttribute('cx')

  let textPercent = el.querySelector('.progress__percent')

  if(line.dataset.percent) {
    let percentProggrass = maxWidthLine * (percent / 100);
    lineProgress.setAttribute('width', percentProggrass)
    circle.setAttribute('cx', percentProggrass)
    textPercent.style.left = (percent - 2) + '%'
    textPercent.textContent = percent + '%'
  } 
 })


    function init(){
      let map = new ymaps.Map("map", {
        center: [39.43754855860376,-101.36742088474497],
        zoom: 6,
      });

     
      map.controls.remove('geolocationControl'); // удаляем геолокацию
       map.controls.remove('searchControl'); // удаляем поиск
       map.controls.remove('trafficControl'); // удаляем контроль трафика
       map.controls.remove('typeSelector'); // удаляем тип
       map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
       map.controls.remove('zoomControl'); // удаляем контрол зуммирования
       map.controls.remove('rulerControl'); // удаляем контрол правил


      let placemark = new ymaps.Placemark([39.43754855860376,-101.36742088474497], {
        hintContent: 'Кастомная метка',
        balloonContent: 'Это красивая метка'
      }, {
        iconLayout: 'default#image',
        iconImageHref: './images/icons/contact-marker.svg',
        iconImageSize: [30, 40],
        iconImageOffset: [-5, -34],
      });



      map.geoObjects.add(placemark);

    }
    
  ymaps.ready(init);
