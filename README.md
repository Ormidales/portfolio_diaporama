# Créateur de diaporama HTML
Ce projet est un diaporama interactif riche en fonctionnalités qui permet aux utilisateurs de naviguer à travers différentes diapositives contenant des images et des textes. Les textes dans les diapositives peuvent être personnalisés avec différentes orientations, positions, couleurs et opacités.

## Fonctionnalités
- Navigation fluide: Utilisez les boutons ou les touches de votre clavier pour naviguer entre les diapositives.
- Positionnement et orientation du texte: Personnalisez le positionnement et l'orientation de chaque texte dans une diapositive à l'aide des attributs data-text-position et data-text-orientation.
- Couleurs et opacité du texte: Modifiez les couleurs de fond et du texte ainsi que l'opacité à l'aide des attributs data-text-bgcolor, data-text-color et data-text-opacity.
- Menu de navigation: Un menu de navigation stylisé qui s'affiche et disparaît en fonction de l'interaction de l'utilisateur. Reste visible lorsque l'utilisateur passe la souris dessus.
- Autoplay: Un bouton pour activer la lecture automatique des diapositives.
- Positionnement et orientation des images: Personnalisez le positionnement et l'orientation de chaque image dans une diapositive à l'aide des attributs data-bg-position et data-bg-orientation.
- Couleurs et opacité des images: Modifiez les couleurs de fond et du texte ainsi que l'opacité à l'aide des attributs data-bg-color et data-bg-opacity.
- Menu de navigation verrouillé / déverrouillé avec la touche M
- Apparitions fluides des objets de vos slides (textes et images pour l'instant).

## Fonctionnalités à venir
- Autoplay avec une vitesse personnalisable.
- Autoplay verrouillé / déverrouillé avec la touche A.
- Transitions entre les slides (fade, fade-up, fade-down, fade-left, fade-right, blur, bounce).
- Ajout de vidéos et fonds vidéo.
- Ajout de boutons et de liens.
- Ajout de formes.
- Ajout de sons.

## Comment utiliser
### Structure HTML
Incluez vos diapositives dans une structure comme celle-ci :
```html
<div class="slideshow-container">
    <div style="background-position: center; background-size: cover;" class="slide" data-bg-image="https://saknyskarcios.lt/img/matrix-background-gif-15.gif">
        <p class="text" data-object-order="1" data-object-animation="3s ease-in-out 0s infinite normal none running scale-md" data-text-position="0%,0%" data-text-orientation="0" data-text-bgcolor="red" data-text-color="#ffffff" data-text-opacity="1" data-text-size="5rem" data-text-width="200vh" data-text-padding="1rem" data-text-roundness="10px">regjnerkgnerkgbnr</p>
        <p class="text" data-object-order="2" data-text-position="28%,35%" data-text-orientation="0" data-text-bgcolor="white" data-text-color="black" data-text-opacity="1" data-text-size="2.5rem" data-text-width="200vh" data-text-padding="0.5rem" data-text-roundness="5px">ergkljnerognergjoerngerjkogjergjerogjnero</p>
    </div>
    <div style="background-position: center; background-size: cover;" class="slide" data-bg-image="https://c4.wallpaperflare.com/wallpaper/568/777/264/video-games-digital-art-gordon-man-half-life-wallpaper-preview.jpg">
        <img alt="img1"  data-object-order="1" src="https://i.pinimg.com/originals/4c/7f/e5/4c7fe50c8311b06c1882e0e7cf4df090.png" data-img-position="5%, 10%" data-img-width="500px" data-object-animation="3s ease-in-out 0s infinite normal none running scale-md" data-img-index="5">
        <img alt="img2"  data-object-order="2" src="https://file1.elleadore.com/var/elleadore/storage/images/article/je-suis-une-fille-drole-a-ma-maniere-41656/426590-1-fre-FR/Je-suis-une-fille-drole-a-ma-maniere.jpg" data-img-index="1" data-img-position="40%, 20%" data-img-width="300px" data-object-animation="1s ease-in-out 0s infinite normal none running fade">
    </div>
    <div style="background-position: center; background-size: cover;" class="slide" data-bg-image="https://c4.wallpaperflare.com/wallpaper/568/777/264/video-games-digital-art-gordon-man-half-life-wallpaper-preview.jpg">
        <img alt="img1"  data-object-order="1" src="https://i.pinimg.com/originals/4c/7f/e5/4c7fe50c8311b06c1882e0e7cf4df090.png" data-img-position="5%, 10%" data-img-width="500px" data-object-animation="3s ease-in-out 0s infinite normal none running scale-md" data-img-index="5">
        <img alt="img2"  data-object-order="2" src="https://file1.elleadore.com/var/elleadore/storage/images/article/je-suis-une-fille-drole-a-ma-maniere-41656/426590-1-fre-FR/Je-suis-une-fille-drole-a-ma-maniere.jpg" data-img-index="1" data-img-position="40%, 20%" data-img-width="300px" data-object-animation="1s ease-in-out 0s infinite normal none running fade">
    </div>
    <!-- Ajoutez d'autres diapositives ici -->
</div>
```

## Documentation rapide

Ce code JavaScript implémente un carrousel de diapositives avec diverses fonctionnalités, y compris la navigation par boutons et roue de souris, des animations, la personnalisation des éléments textes et images, et un système de lecture automatique.
Structure HTML attendue

La structure HTML devrait contenir des éléments avec les classes .slide, .prev-button, .next-button, et .navigation-buttons, ainsi que des attributs de données spécifiques pour le style et l'animation.
Variables

    slides: Un tableau de tous les éléments de diapositive.
    prevButton: Élément pour passer à la diapositive précédente.
    nextButton: Élément pour passer à la diapositive suivante.
    currentSlide: Index de la diapositive actuelle.
    isMouseOver: Indique si la souris est sur le menu.
    menuLocked: Indique si le menu est verrouillé.
    timeout: Utilisé pour gérer le délai avant de masquer les boutons.
    currentOrder: Utilisé pour le suivi de l'ordre des éléments d'animation.
    autoplayInterval: Interval pour gérer l'autoplay.

### Fonctions

    hideButtons(): Masque les boutons de navigation.
    showButtons(): Affiche les boutons de navigation.
    goToSlide(slideIndex): Navigue vers la diapositive à l'index donné.
    toggleAutoplay(): Active ou désactive l'autoplay.

### Écouteurs d'événements

    Sur la molette de la souris pour naviguer entre les diapositives.
    Sur la touche "M" pour verrouiller/déverrouiller le menu.
    Sur la touche "Espace" pour afficher des éléments dans un ordre spécifié.
    Sur les flèches du clavier pour naviguer entre les diapositives.
    Sur les boutons précédent et suivant pour naviguer entre les diapositives.
    Sur l'ID autoplayButton pour gérer l'autoplay.

### Personnalisation

Les diapositives, les textes et les images peuvent être personnalisés en utilisant divers attributs de données comme data-bg-image, data-text-position, data-text-orientation, etc.

## Installation
Téléchargez ou clonez ce répertoire et ouvrez index.html dans votre navigateur.

---

Créé par [Ormidales](https://github.com/Ormidales)
