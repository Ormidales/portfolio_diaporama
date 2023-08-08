// Récupère les éléments nécessaires du DOM
const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

// Affiche la diapositive actuelle
function showSlide(index) {
  slides[currentSlide].style.display = 'none';
  slides[index].style.display = 'block';
  currentSlide = index;
}

// Passe à la diapositive suivante
function nextSlide() {
  const nextIndex = (currentSlide + 1) % slides.length;
  showSlide(nextIndex);
}

// Démarre le diaporama
function startSlideshow() {
  showSlide(currentSlide);
  setInterval(nextSlide, 3000); // Change de diapositive toutes les 3 secondes
}

// Passe à la diapositive précédente
function prevSlide() {
  const prevIndex = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(prevIndex);
}

const slideIndicatorsContainer = document.querySelector('.slide-indicators');

// Crée les indicateurs de diapositives
function createSlideIndicators() {
  for (let i = 0; i < slides.length; i++) {
    const indicator = document.createElement('span');
    indicator.classList.add('slide-indicator');
    indicator.addEventListener('click', () => showSlide(i));
    slideIndicatorsContainer.appendChild(indicator);
  }
}

// Met à jour les indicateurs de diapositives actifs
function updateSlideIndicators() {
  const indicators = slideIndicatorsContainer.querySelectorAll('.slide-indicator');
  indicators.forEach((indicator, index) => {
    if (index === currentSlide) {
      indicator.classList.add('active');
    } else {
      indicator.classList.remove('active');
    }
  });
}

// Démarre le diaporama
function startSlideshow() {
  createSlideIndicators(); // Crée les indicateurs de diapositives
  showSlide(currentSlide);
  updateSlideIndicators(); // Met à jour les indicateurs actifs
  setInterval(nextSlide, 3000);
}

startSlideshow();