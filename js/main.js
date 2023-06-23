const sr = ScrollReveal({
          origin: 'top',
          distance: '60px',
          duration: 2500,
          delay: 300,
          // reset: true
})

sr.reveal(`.home__data`)
sr.reveal(`.about__img-l`, { origin: 'left' })
sr.reveal(`.about__img-r`, { origin: 'right' })

sr.reveal(`.about__discription-r`, { origin: 'right' })
sr.reveal(`.about__discription-l`, { origin: 'left', interval: 100 })
sr.reveal(`.img__footer`, { interval: 100 })

sr.reveal(`.home__data`)

function scrollUp() {
          const scrollUp = document.getElementById('scroll-up')
          if (this.scrollY > 400) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')

}
window.addEventListener('scroll', scrollUp)


// TIMELINE



