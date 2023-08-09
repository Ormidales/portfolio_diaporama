const slides = document.querySelectorAll('.slide');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
let currentSlide = 0;

document.addEventListener('wheel', (event) => {
  const delta = event.deltaY;
  if (delta > 0) {
    goToSlide(currentSlide + 1);
  } else if (delta < 0) {
    goToSlide(currentSlide - 1);
  }
});

prevButton.addEventListener('click', () => {
  goToSlide(currentSlide - 1, 'right');
});

nextButton.addEventListener('click', () => {
  goToSlide(currentSlide + 1, 'left');
});

const navigationButtons = document.querySelector('.navigation-buttons');
let timeout;

function hideButtons() {
  navigationButtons.style.opacity = '0';
}

function showButtons() {
  navigationButtons.style.opacity = '1';
  clearTimeout(timeout);
  timeout = setTimeout(hideButtons, 2000); // Masquer après 2 secondes d'inactivité
}

// Afficher les boutons lors de l'interaction avec la souris ou les boutons
document.addEventListener('mousemove', showButtons);
document.addEventListener('mousedown', showButtons);
document.addEventListener('keydown', showButtons);

// Masquer les boutons après un délai initial
timeout = setTimeout(hideButtons, 2000);

function applyTransition(slideWrapper, transition) {
  switch (transition) {
    case 'fade':
      slideWrapper.style.opacity = '0';
      setTimeout(() => {
        slideWrapper.style.opacity = '1';
      }, 500); // Même durée que la transition CSS
      break;
    case 'zoom-in':
      slideWrapper.style.transform = 'scale(0)';
      slideWrapper.style.opacity = '0';
      setTimeout(() => {
        slideWrapper.style.transform = 'scale(1)';
        slideWrapper.style.opacity = '1';
      }, 500); // Même durée que la transition CSS
      break;
    case 'slide-in':
      slideWrapper.style.transform = 'translateX(100%)';
      slideWrapper.style.opacity = '1';
      setTimeout(() => {
        slideWrapper.style.transform = 'translateX(0)';
      }, 10);
      break;
    case 'rotate':
      slideWrapper.style.transform = 'rotate(-360deg)';
      slideWrapper.style.opacity = '1';
      setTimeout(() => {
        slideWrapper.style.transform = 'rotate(0)';
      }, 10);
      break;
    case 'flip':
      slideWrapper.style.transform = 'rotateY(180deg)';
      slideWrapper.style.opacity = '1';
      setTimeout(() => {
        slideWrapper.style.transform = 'rotateY(0)';
      }, 10);
      break;
    case 'bounce':
      slideWrapper.style.transform = 'scale(0.9)';
      slideWrapper.style.opacity = '1';
      setTimeout(() => {
        slideWrapper.style.transform = 'scale(1.1)';
      }, 150);
      setTimeout(() => {
        slideWrapper.style.transform = 'scale(1)';
      }, 300);
      break;
    case 'blur':
      slideWrapper.style.filter = 'blur(10px)';
      slideWrapper.style.opacity = '1';
      setTimeout(() => {
        slideWrapper.style.filter = 'blur(0)';
      }, 10);
      break;
    case 'scale-up':
      slideWrapper.style.transform = 'scale(0.5)';
      slideWrapper.style.opacity = '1';
      setTimeout(() => {
        slideWrapper.style.transform = 'scale(1)';
      }, 10);
      break;
    // Ajoutez d'autres transitions ici...
  }
}

function goToSlide(slideIndex) {
  if (slideIndex < 0) {
    slideIndex = slides.length - 1;
  } else if (slideIndex >= slides.length) {
    slideIndex = 0;
  }

  currentSlide = slideIndex;

  slides.forEach((slideWrapper, index) => {
    const transition = slideWrapper.getAttribute('data-transition') || 'none';
    let translateY = -currentSlide * 100;

    const text = slideWrapper.getAttribute('data-text');
    const textPosition = slideWrapper.getAttribute('data-text-position');
    const textElement = slideWrapper.querySelector('.text');
    textElement.textContent = text;

    switch (textPosition) {
      case 'top-left':
        textElement.style.left = '50px';
        textElement.style.top = '50px';
        break;
      case 'top-right':
        textElement.style.right = '50px';
        textElement.style.top = '50px';
        break;
      case 'bottom-right':
        textElement.style.right = '50px';
        textElement.style.bottom = '50px';
        break;
      case 'bottom-left':
        textElement.style.left = '50px';
        textElement.style.bottom = '50px';
        break;
      case 'center':
        textElement.style.left = '50%';
        textElement.style.top = '50%';
        textElement.style.transform = 'translate(-50%, -50%)';
        break;
      // etc...
    }

    const bgImage = slideWrapper.getAttribute('data-bg-image');
    slideWrapper.style.backgroundImage = `url(${bgImage})`;
    slideWrapper.querySelector('.text').textContent = text;

    if (index === currentSlide) {
      slideWrapper.classList.add('active');
    } else {
      slideWrapper.classList.remove('active');
    }

    applyTransition(slideWrapper, transition);

    setTimeout(() => {
      slideWrapper.style.transform = `translateY(${translateY}vh)`;
    }, 500); // Même durée que la transition CSS
  });
}

goToSlide(0);
