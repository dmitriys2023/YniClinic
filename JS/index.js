$(document).ready(function () {
   $('.slider').slick({
      dots: true,
      slidesToShow: 3,
      slidesToScroll: 1,
   });
})


const cr1 = document.querySelector('.circle1')
const cr2 = document.querySelector('.circle2')

const info1 = document.querySelector('.info1')
const info2 = document.querySelector('.info2')

console.log(cr1)

cr1.addEventListener('mouseover', (e) => {
   info1.classList.add('active')
})
cr1.addEventListener('mouseout', (e) => {
   info1.classList.remove('active')
})


cr2.addEventListener('mouseover', (e) => {
   info2.classList.add('active')
})
cr2.addEventListener('mouseout', (e) => {
   info2.classList.remove('active')
})
