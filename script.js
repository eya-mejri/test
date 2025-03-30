document.getElementById('myForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Réinitialiser les messages d'erreur
    document.querySelectorAll('.error').forEach(el => el.textContent = '');
    
    // Valider les champs
    let isValid = true;
    
    const name = document.getElementById('name').value;
    if (name.trim() === '') {
        document.getElementById('nameError').textContent = 'Le nom est requis';
        isValid = false;
    }
    
    const email = document.getElementById('email').value;
    if (email.trim() === '') {
        document.getElementById('emailError').textContent = 'L\'email est requis';
        isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        document.getElementById('emailError').textContent = 'Email invalide';
        isValid = false;
    }
    
    const message = document.getElementById('message').value;
    if (message.trim() === '') {
        document.getElementById('messageError').textContent = 'Le message est requis';
        isValid = false;
    }
    
    if (isValid) {
        alert('Formulaire soumis avec succès!');
        // Ici vous pourriez ajouter le code pour envoyer les données au serveur
        // this.submit();
    }
});