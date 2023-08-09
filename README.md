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

## Fonctionnalités à venir
- Autoplay avec une vitesse personnalisable.
- Autoplay verrouillé / déverrouillé avec la touche A.
- Transitions entre les slides (fade, fade-up, fade-down, fade-left, fade-right, blur, bounce).
- Animations d'apparitions des textes sur le diaporama (fade, fade-up, fade-down, fade-left, fade-right, blur, bounce).

## Comment utiliser
### Structure HTML
Incluez vos diapositives dans une structure comme celle-ci :
```html
<div class="slideshow-container">
    <div style="background-position: center; background-size: cover;" class="slide" data-bg-image="https://saknyskarcios.lt/img/matrix-background-gif-15.gif">
        <p class="text" data-text-position="0%,0%" data-text-orientation="0" data-text-bgcolor="red" data-text-color="#ffffff" data-text-opacity="1" data-text-size="5rem" data-text-width="200vh" data-text-padding="1rem" data-text-roundness="10px">regjnerkgnerkgbnr</p>
        <p class="text" data-text-position="28%,35%" data-text-orientation="0" data-text-bgcolor="white" data-text-color="black" data-text-opacity="1" data-text-size="2.5rem" data-text-width="200vh" data-text-padding="0.5rem" data-text-roundness="5px">ergkljnerognergjoerngerjkogjergjerogjnero</p>
    </div>
    <div style="background-position: center; background-size: cover;" class="slide" data-bg-image="https://c4.wallpaperflare.com/wallpaper/568/777/264/video-games-digital-art-gordon-man-half-life-wallpaper-preview.jpg">
        <img src="https://i.pinimg.com/originals/4c/7f/e5/4c7fe50c8311b06c1882e0e7cf4df090.png" data-img-position="50%,50%" data-img-width="500px" data-img-orientation="15">
        <img src="https://file1.elleadore.com/var/elleadore/storage/images/article/je-suis-une-fille-drole-a-ma-maniere-41656/426590-1-fre-FR/Je-suis-une-fille-drole-a-ma-maniere.jpg" data-img-position="25%,68%" data-img-width="300px" data-img-orientation="-15">
    </div>
    <div style="background-position: center; background-size: cover;" class="slide" data-bg-image="https://c4.wallpaperflare.com/wallpaper/568/777/264/video-games-digital-art-gordon-man-half-life-wallpaper-preview.jpg">
        <p class="text" data-text-position="50,100" data-text-orientation="45">Texte 1 pour la diapositive</p>
        <p class="text" data-text-position="200,300" data-text-orientation="0">Texte 2 pour la diapositive</p>
    </div>
    <!-- Ajoutez d'autres diapositives ici -->
</div>
```

### JavaScript
Utilisez la fonction goToSlide pour naviguer entre les diapositives.

### CSS
Stylez votre diaporama en fonction de vos besoins en utilisant les classes CSS appropriées.

## Installation
Téléchargez ou clonez ce répertoire et ouvrez index.html dans votre navigateur.

---

Créé par [Ormidales](https://github.com/Ormidales)
