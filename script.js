// Exemple de données pour les œuvres
const oeuvres = [
    {
        titre: "La Joconde",
        image: "https://upload.wikimedia.org/wikipedia/commons/6/6a/Mona_Lisa.jpg",
        description: "Peinture de Léonard de Vinci, exposée au Louvre.",
        audio: "assets/audio/joconde.mp3"
    },
    {
        titre: "Le Penseur",
        image: "https://upload.wikimedia.org/wikipedia/commons/5/5f/The_Thinker%2C_Rodin.jpg",
        description: "Sculpture d'Auguste Rodin.",
        audio: "assets/audio/penseur.mp3"
    }
];

function afficherOeuvres() {
    const container = document.getElementById('oeuvres');
    if (!container) return;
    container.innerHTML = '';
    oeuvres.forEach(oeuvre => {
        const div = document.createElement('div');
        div.className = 'oeuvre';
        div.innerHTML = `
            <h3>${oeuvre.titre}</h3>
            <img src="${oeuvre.image}" alt="${oeuvre.titre}">
            <p>${oeuvre.description}</p>
            <audio controls>
                <source src="${oeuvre.audio}" type="audio/mpeg">
                Votre navigateur ne supporte pas l'audio.
            </audio>
        `;
        container.appendChild(div);
    });
}

document.addEventListener('DOMContentLoaded', afficherOeuvres);