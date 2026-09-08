// ==========================================
// 1. CODE POUR LE MODE SOMBRE (AVEC MÉMOIRE)
// ==========================================
const toggleButton = document.getElementById('theme-toggle');

// Vérifie si l'utilisateur avait déjà choisi le mode sombre auparavant
if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
    toggleButton.textContent = '☀️';
}

if (toggleButton) {
    toggleButton.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        
        if (document.body.classList.contains('dark-mode')) {
            toggleButton.textContent = '☀️';
            localStorage.setItem('theme', 'dark'); // Garde en mémoire
        } else {
            toggleButton.textContent = '🌙';
            localStorage.setItem('theme', 'light');
        }
    });
}

// ==========================================
// 2. CODE POUR LE CHANGEMENT DE LANGUE
// ==========================================
const btnFr = document.getElementById('btn-fr');
const btnEn = document.getElementById('btn-en');

btnEn?.addEventListener('click', () => {
    alert("Bientôt disponible ! La traduction automatique sera ajoutée lors de la prochaine étape.");
});

btnFr?.addEventListener('click', () => {
    alert("Vous êtes déjà sur la version française !");
});