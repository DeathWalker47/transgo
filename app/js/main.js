$(function(){
  
});

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
