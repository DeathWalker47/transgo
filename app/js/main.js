$(function(){
  
});
document.addEventListener('DOMContentLoaded', () => {


  // Кнопка для меню
  const btnMenu = document.querySelector('.burger');
  const menuList = document.querySelector('.menu__list');
  btnMenu.addEventListener('click', () => {
    menuList.classList.toggle('active');
    document.querySelector('body').classList.toggle('body-hidden')
  })

  //Кнопка показать весь текст
  let heightList = document.querySelector(".article__list");
  let loadMoreBtn = document.querySelector('.article__load-more');
    if(loadMoreBtn) {
      loadMoreBtn.addEventListener('click', () => {
        console.log(loadMoreBtn);
        console.log(heightList);
        loadMoreBtn.style.display = 'none';
        heightList.style.maxHeight = heightList.scrollHeight + 'px';
      })
  }
  // Счетчик цифр
  function counter(ms){
    let counter = 0;
    let interval1 = setInterval(() => {
        document.querySelector('.info-numbers__num--one').textContent = ++counter +'k+';
        counter === 127 ? clearInterval(interval1) : false;
    }, ms);
    let counter1 = 0;
    let interval2 = setInterval(() => {
        document.querySelector('.info-numbers__num--two').textContent = ++counter1;
        counter1 === 654 ? clearInterval(interval2) : false;
    }, ms)
    let counter2 = 0;
    let interval3 = setInterval(() => {
        document.querySelector('.info-numbers__num--three').textContent = ++counter2 +'k+';
        counter2 === 8 ? clearInterval(interval3) : false;
    }, ms)
    let counter3 = 0;
    let interval4 = setInterval(() => {
      document.querySelector('.info-numbers__num--four').textContent = ++counter3;
      counter3 === 300 ? clearInterval(interval4) : false;
  }, ms)
    let counter4 = 0;
    let interval5 = setInterval(() => {
      document.querySelector('.info-numbers__num--five').textContent = ++counter4 +'k+';
      counter4 === 4 ? clearInterval(interval5) : false;
  }, ms)
  }

  if(document.querySelector('.info-numbers__list')) {
    counter(10);
  }
  
  
  
//Открытие формы поиска и музыкальное сопровождение
 const searchBtn = document.querySelector('.cup__search-btn');
 const searchForm = document.querySelector('.search-container');
 const audioSearch = document.querySelectorAll('.audio-search');

 searchBtn.addEventListener('click', () => {
   document.querySelector('.cup__search-img').classList.toggle('none')
   document.querySelector('.cup__search-close').classList.toggle('block')
  searchForm.classList.toggle('active');
  audioSearch.forEach(el => {
    el.classList.toggle('audio-active');
    if(el.classList.contains('audio-active')) {
      el.play();
    }
  })
 })

  // Появление модального окна
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

  // Аккардеон
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

  // Свайпер
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
    // slidesPerView: 2,
    spaceBetween: 30,
    speed: 800,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      1200: {
        slidesPerView: 2,
        spaceBetween: 30
      },
      320: {
        slidesPerView: 1,
        spaceBetween: 20
      }
    }
   });



//  Прогресс линия
 const item = document.querySelectorAll('.progress__item')
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


 

// Яндекс карта
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
   map.controls.remove('rulerControl'); // удаляем контрол прави
  let placemark = new ymaps.Placemark([39.43754855860376,-101.36742088474497], {
    hintContent: 'Кастомная метка',
    balloonContent: 'Это красивая метка'
  }, {
    iconLayout: 'default#image',
    iconImageHref: './images/icons/contact-marker.svg',
    iconImageSize: [30, 40],
    iconImageOffset: [-5, -34],
  })
  map.geoObjects.add(placemark);
}
ymaps.ready(init);
});


// Плавный скролл наверх
const target = document.querySelector("footer");
const scrollToTopBtn = document.querySelector(".scroll-top");
const rootElement = document.documentElement;

function callback(entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      scrollToTopBtn.classList.add("scroll-top--active");
    } else {
      scrollToTopBtn.classList.remove("scroll-top--active");
    }
  });
}

function scrollToTop() {
  rootElement.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}
scrollToTopBtn.addEventListener("click", scrollToTop);

let observer = new IntersectionObserver(callback);
observer.observe(target);

