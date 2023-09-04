const modal = document.querySelector('.modal')
const close = modal.querySelector('.close')
const open = document.querySelector('button')

open.addEventListener('click', () => {
modal.classList.add("opened")
})

close.addEventListener('click', () => {
  modal.classList.remove("opened")
})

modal.addEventListener('click', (evt) => {
  if (evt.target.classList.contains("modal")) {
    modal.classList.remove("opened")
  }
})