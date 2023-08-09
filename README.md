# Créateur de diaporama HTML
Ce projet est un diaporama interactif riche en fonctionnalités qui permet aux utilisateurs de naviguer à travers différentes diapositives contenant des images et des textes. Les textes dans les diapositives peuvent être personnalisés avec différentes orientations, positions, couleurs et opacités.

## Fonctionnalités
- Navigation fluide: Utilisez les boutons ou les touches de votre clavier pour naviguer entre les diapositives.
- Positionnement et orientation du texte: Personnalisez le positionnement et l'orientation de chaque texte dans une diapositive à l'aide des attributs data-text-position et data-text-orientation.
- Couleurs et opacité du texte: Modifiez les couleurs de fond et du texte ainsi que l'opacité à l'aide des attributs data-text-bgcolor, data-text-color et data-text-opacity.
- Menu de navigation: Un menu de navigation stylisé qui s'affiche et disparaît en fonction de l'interaction de l'utilisateur. Reste visible lorsque l'utilisateur passe la souris dessus.
- Autoplay: Un bouton pour activer la lecture automatique des diapositives.

## Comment utiliser
### Structure HTML
Incluez vos diapositives dans une structure comme celle-ci :
```html
<div class="slideshow-container">
  <div style="background-position: center; background-size: cover;" class="slide" data-bg-image="URL">
    <p class="text" data-text-position="350,350" data-text-orientation="-25" data-text-bgcolor="#FFFFFF" data-text-color="#000000" data-text-opacity="0.8">Texte 1 pour la diapositive</p>
    <p class="text" data-text-position="200,300" data-text-orientation="0" data-text-bgcolor="#FFFFFF" data-text-color="#000000" data-text-opacity="0.8">Texte 2 pour la diapositive</p>
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
