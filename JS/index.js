// const { active } = require("browser-sync");

$(document).ready(function () {
   $('.slider').slick({
      dots: true,
      slidesToShow: 3,
      slidesToScroll: 1,
   });
})

// const modal = [
//    { text: 'с 3% до 30% позиций достигли ТOП-30 поиска', id: 1 },
//    { text: 'с 3% до 30% позиций достигли ТOП-30 поиска', id: 2 },
//    // { text: 'Тестовый текст', id: 3 },
//    // { text: 'Тестовый текст', id: 4 },
//    // { text: 'Тестовый текст', id: 5 }
// ]

// function createModal(object) {
//    const block2 = document.querySelector('.block2')

//    return block2.insertAdjacentHTML('beforeend', `
//       <div class="block2__info info info${object.id}">
//          <div class="info__text">${object.text}</div>
//       </div>
//    `)
// }


// modal.forEach(obj => {
//    createModal(obj)
// })

const cr = document.querySelectorAll('.cr')


cr.forEach((cir, index) => {
   const info = document.querySelector(`.info${index + 1}`)
   cir.addEventListener('mouseover', () => {
      info.classList.add('active')
   })
   cir.addEventListener('mouseout', () => {
      info.classList.remove('active')
   })
})




