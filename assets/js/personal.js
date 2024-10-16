document.getElementById('learn-more').addEventListener('click', function(event) {
    event.preventDefault(); // Empêche le rechargement de la page
    var hiddenText = document.getElementById('hidden-text');
    
    // Alterne l'affichage du texte
    if (hiddenText.style.display === 'none') {
        hiddenText.style.display = 'block';
        this.textContent = 'Voir moins'; // Change le texte du bouton
    } else {
        hiddenText.style.display = 'none';
        this.textContent = 'Voir plus'; // Restaure le texte du bouton
    }
});
