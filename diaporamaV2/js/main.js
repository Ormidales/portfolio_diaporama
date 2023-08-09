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

const navigationButtons = document.querySelector('.navigation-buttons');
let timeout;
let isMouseOver = false; // Variable pour vérifier si la souris est sur le menu

function hideButtons() {
  if (!isMouseOver) { // Ne masquez que si la souris n'est pas sur le menu
    navigationButtons.style.opacity = '0';
  }
}

function showButtons() {
  navigationButtons.style.opacity = '1';
  clearTimeout(timeout);
  timeout = setTimeout(hideButtons, 2000); // Masquer après 2 secondes d'inactivité
}

// Ajouter un écouteur d'événements pour vérifier si la souris est sur le menu
navigationButtons.addEventListener('mouseover', function () {
  isMouseOver = true;
  showButtons(); // Affichez les boutons si la souris est dessus
});

// Ajouter un écouteur d'événements pour vérifier si la souris quitte le menu
navigationButtons.addEventListener('mouseout', function () {
  isMouseOver = false;
  hideButtons(); // Masquez les boutons si la souris n'est pas dessus
});

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
      slideWrapper.style.filter = 'blur(50px)';
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

function applyTextTransition(textElement, transition) {
  switch (transition) {
    case 'fade':
      textElement.style.opacity = '0';
      setTimeout(() => {
        textElement.style.opacity = '1';
      }, 500);
      break;
    case 'slide-in':
      textElement.style.transform = 'translateX(-100%)';
      setTimeout(() => {
        textElement.style.transform = 'translateX(0)';
      }, 500);
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
    let translateY = -currentSlide * 100;
    slideWrapper.style.transform = `translateY(${translateY}vh)`;

    const bgImage = slideWrapper.getAttribute('data-bg-image');
    slideWrapper.style.backgroundImage = `url(${bgImage})`;

    const textElements = slideWrapper.querySelectorAll('p'); // Supposons que chaque texte est dans un élément <p>

    textElements.forEach((textElement) => {
      const textPosition = textElement.getAttribute('data-text-position').split(',');
      const textOrientation = textElement.getAttribute('data-text-orientation');
      const textBgColor = textElement.getAttribute('data-text-bgcolor') || 'transparent'; // Couleur d'arrière-plan
      const textColor = textElement.getAttribute('data-text-color') || '#000000'; // Couleur du texte
      const textOpacity = textElement.getAttribute('data-text-opacity') || '1'; // Opacité
      const textSize = textElement.getAttribute('data-text-size') || '1rem'; // Taille du texte
      const textWidth = textElement.getAttribute('data-text-width') || '300px'; // Largeur du texte
      const textPadding = textElement.getAttribute('data-text-padding') || '1rem'; // Rembourrage du texte
      const textRoundness = textElement.getAttribute('data-text-roundness') || '0'; // Arrondi des coins du texte

      textElement.style.position = 'absolute';
      textElement.style.left = `${textPosition[0]}`; // Assurez-vous que textPosition[0] est en pixels
      textElement.style.top = `${textPosition[1]}`; // Assurez-vous que textPosition[1] est en pixels
      textElement.style.transform = `rotate(${textOrientation}deg)`; // Rotation du texte
      textElement.style.backgroundColor = textBgColor; // Couleur d'arrière-plan
      textElement.style.color = textColor; // Couleur du texte
      textElement.style.opacity = textOpacity; // Opacité
      textElement.style.fontSize = textSize; // Taille du texte
      textElement.style.maxWidth = textWidth; // Largeur du texte
      textElement.style.padding = textPadding; // Rembourrage du texte
      textElement.style.lineHeight = textSize; // Hauteur de ligne égale à la taille du texte
      textElement.style.borderRadius = textRoundness; // Arrondi des coins du texte

      if (index === currentSlide) {
        // Vous pouvez appliquer des transitions spécifiques ici si nécessaire
      }
    });

    if (index === currentSlide) {
      slideWrapper.classList.add('active');
    } else {
      slideWrapper.classList.remove('active');
    }
  });
}

// Ajuster les appels de la fonction pour naviguer entre les lignes et les colonnes
prevButton.addEventListener('click', () => {
  goToSlide(currentSlide - 1);
});

nextButton.addEventListener('click', () => {
  goToSlide(currentSlide + 1);
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowUp') {
    goToSlide(currentSlide - 1);
  } else if (event.key === 'ArrowDown') {
    goToSlide(currentSlide + 1);
  }
});

let autoplayInterval = null; // Pour conserver l'intervalle de l'autoplay

function toggleAutoplay() {
  if (autoplayInterval) {
    clearInterval(autoplayInterval);
    autoplayInterval = null;
    document.getElementById('autoplayButton').textContent = "Démarrer l'Autoplay";
  } else {
    autoplayInterval = setInterval(() => {
      goToSlide(currentSlide + 1);
    }, 3000); // Change la diapositive toutes les 3 secondes
    document.getElementById('autoplayButton').textContent = "Arrêter l'Autoplay";
  }
}

document.getElementById('autoplayButton').addEventListener('click', toggleAutoplay);

goToSlide(0);
