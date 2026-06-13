function updateClocks() {
    // Options pour New York (EST/EDT)
    const optionsNY = {
        timeZone: 'America/New_York',
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    };
    
    // Options pour Paris (CET/CEST)
    const optionsParis = {
        timeZone: 'Europe/Paris',
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    };
    
    // Récupérer l'heure actuelle
    const now = new Date();
    
    // Formater les heures
    const heureNY = new Date(now.toLocaleString('fr-FR', optionsNY)).toLocaleTimeString('fr-FR', {
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    });
    
    const heureParis = new Date(now.toLocaleString('fr-FR', optionsParis)).toLocaleTimeString('fr-FR', {
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    });
    
    // Formater simplement avec Intl
    const formattedNY = now.toLocaleTimeString('fr-FR', optionsNY);
    const formattedParis = now.toLocaleTimeString('fr-FR', optionsParis);
    
    // Mettre à jour le DOM
    document.getElementById('time-ny').textContent = formattedNY;
    document.getElementById('time-paris').textContent = formattedParis;
}

// Mettre à jour les horloges immédiatement
updateClocks();

// Mettre à jour chaque seconde
setInterval(updateClocks, 1000);
