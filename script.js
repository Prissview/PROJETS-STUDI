// script.js

// Attend que le DOM soit chargé avant d'exécuter le script
document.addEventListener('DOMContentLoaded', function () {
    // Sélectionne un élément par son ID
    var avisContainer = document.getElementById('avis-container');

    // Tableau d'avis
    var avis = [
        { nom: 'JULIEN', commentaire: 'Très satisfait du service.' },
        { nom: 'Mr.DUPONT', commentaire: 'Excellent travail, je recommande.' },
        { nom: 'A_MARTIN', commentaire: 'Rapide et efficace. Difficile de faire mieux, le service etait tres bien ' },
    ];

    // Affiche les avis dans l'élément avec l'ID 'avis-container'
    avis.forEach(function (avisItem) {
        var avisDiv = document.createElement('div');
        avisDiv.className = 'avis-item';
        avisDiv.innerHTML = '<strong>' + avisItem.nom + '</strong>: ' + avisItem.commentaire;
        avisContainer.appendChild(avisDiv);
    });
});
