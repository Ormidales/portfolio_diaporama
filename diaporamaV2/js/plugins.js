function goToSlide2(slideIndex) {
  if (slideIndex < 0) {
    slideIndex = slides.length - 1;
  } else if (slideIndex >= slides.length) {
    slideIndex = 0;
  }

  currentSlide = slideIndex;

  slides.forEach((slideWrapper, index) => {
    const transition = slideWrapper.getAttribute('data-transition') || 'none';

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

    let translateY = -currentSlide * 100;
    setTimeout(() => {
      slideWrapper.style.transform = `translateY(${translateY}vh)`;
    }, 1000); // Même durée que la transition CSS
  });
}
