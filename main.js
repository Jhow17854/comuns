const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

toggle.forEach(element => {
  element.addEventListener('click', () => {
    nav.classList.toggle('show')
  })
})

// Esconde o menu quando clicar em um item do menu
const links = document.querySelectorAll('nav ul li a')

links.forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('show')
  })
})
window.addEventListener('resize', () => {
  if (window.innerWidth > 768) {
    nav.classList.remove('show')
  }
})

// Altera o header da página quando der scroll
const header = document.querySelector('#header')
const navHeight = header.offsetHeight

function changeHeaderOnScroll() {
  if (window.scrollY >= navHeight) {
    header.classList.add('scroll')
  } else {
    header.classList.remove('scroll')
  }
}

window.addEventListener('scroll', changeHeaderOnScroll)

// Testimonials carousel slider swiper
const swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },

  mousewheel: false,
  keyboard: true,
  breakpoints: {
    767: {
      slidesPerView: 1,
      setWrapperSize: true
    }
  }
})

document.addEventListener('DOMContentLoaded', () => {
  const options = {
    strings: [
      'Ei, seja muito bem-vindo! É um prazer ter você aqui conosco. Neste espaço,\n você encontrará informações valiosas e recursos incríveis. Fique à vontade\n para explorar tudo com calma e aproveitar ao máximo o que temos a\n oferecer. Agradecemos de coração pela sua visita e esperamos que você se\n sinta em casa.'
    ],
    typeSpeed: 10,
    loop: false,
    loopCount: Infinity,
    showCursor: false,
    smartBackspace: false
  }

  new Typed('#home-title', options)
})

// ScrollReveal: Mostra elementos quando der scroll na página
const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '20px',
  duration: 600,
  reset: true,
  breakpoints: {
    767: {
      distance: '100px'
    }
  }
})

scrollReveal.reveal(
  `#home .image, #home .text, #about .image,#about .title, #services .title,
  #services .card, #testimonials .title,  #testimonials .testimonials, #testimonials .button,
  #contact .social, #contact .title, footer .brand, #about .text, #services .subtitle, #testimonials .subtitle `,
  { interval: 100 } // Adiciona um atraso de 2 segundos (2000 milissegundos) para os elementos com a classe ".subtitle"
)
function verificarRolagem() {
  const posicaoAtualScroll =
    window.pageYOffset || document.documentElement.scrollTop

  if (posicaoAtualScroll === 0) {
    // O usuário chegou ao topo da página
    // Coloque aqui o código que deseja executar ao chegar no topo da página
    window.scrollBy(0, 1)
  }
}

window.addEventListener('scroll', verificarRolagem)

// Botão voltar para o topo
const backToTopButton = document.querySelector('.back-to-top')

function showBackToTopButton() {
  if (window.scrollY >= 560) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

backToTopButton.addEventListener('mouseenter', () => {
  backToTopButton.classList.add('animated')
})

backToTopButton.addEventListener('mouseleave', () => {
  backToTopButton.classList.remove('animated')
})

window.addEventListener('scroll', showBackToTopButton)

function toggleColor() {
  var button = document.querySelector('.theme-button')
  button.classList.toggle('clicked')
}

function smoothScrollToTop() {
  const currentPosition = window.pageYOffset
  const targetPosition = 0
  const distance = targetPosition - currentPosition
  const duration = 500
  const increments = 20
  let currentTime = 0

  function animateScroll() {
    currentTime += increments
    const easing = Math.easeInOutQuad(
      currentTime,
      currentPosition,
      distance,
      duration
    )
    window.scrollTo(0, easing)
    if (currentTime < duration) {
      requestAnimationFrame(animateScroll)
    }
  }

  animateScroll()
}

backToTopButton.addEventListener('click', smoothScrollToTop)

// Função para suavizar o movimento de scroll
Math.easeInOutQuad = function (t, b, c, d) {
  t /= d / 2
  if (t < 1) return (c / 2) * t * t + b
  t--
  return (-c / 2) * (t * (t - 2) - 1) + b
}

window.addEventListener('scroll', showBackToTopButton)

// Menu ativo conforme a seção visível na página

function scrollToSection(event) {
  event.preventDefault()

  const targetId = event.currentTarget.getAttribute('href')
  const targetSection = document.querySelector(targetId)

  if (targetSection) {
    const targetOffset = targetSection.offsetTop
    const scrollOptions = {
      top: targetOffset,
      behavior: 'smooth'
    }

    window.scrollTo(scrollOptions)
  }
}

function toggleColor() {
  const themeButton = document.querySelector('.light-up')
  themeButton.classList.toggle('clicked')
  const root = document.documentElement

  if (themeButton.classList.contains('clicked')) {
    // tema escuro

    root.style.setProperty('--base-color-second', 'hsl(159, 36%, 57%)')
    root.style.setProperty('--header-color', 'hsl(0, 0%, 25%)')
    root.style.setProperty('--body-color', 'hsl(0, 0%, 20%)')
    root.style.setProperty('--title-color', 'hsl(0, 0%, 100%)')
    root.style.setProperty('--text-color', 'hsl(0, 0%, 100%)')
  } else {
    // tema claro
    root.style.setProperty('--base-color-second', 'hsl(159, 65%, 88%)')
    root.style.setProperty('--header-color', 'hsl(0, 0%, 95%)')
    root.style.setProperty('--body-color', 'hsl(0, 0%, 100%)')
    root.style.setProperty('--title-color', 'hsl(0, 0%, 10%)')
    root.style.setProperty('--text-color', 'hsl(0, 0%, 46%)')
  }
}
