const video = document.getElementById('video');
const playBtn = document.getElementById('play');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const volumeSlider = document.getElementById('volume');

// Playlist de 2 vidéos (son + fond vidéo)
const playlist = [
    'https://www.w3schools.com/html/mov_bbb.mp4',  // Vidéo 1
    'https://www.w3schools.com/html/movie.mp4'     // Vidéo 2
];

let current = 0;

// Charger une vidéo
function loadVideo(index) {
    video.src = playlist[index];
    video.play();
    playBtn.textContent = "⏸️";
}

// Play / Pause
playBtn.addEventListener('click', () => {
    if (video.paused) {
        video.play();
        playBtn.textContent = "⏸️";
    } else {
        video.pause();
        playBtn.textContent = "▶️";
    }
});

// Volume
volumeSlider.addEventListener('input', () => {
    video.volume = volumeSlider.value;
});

// Vidéo précédente
prevBtn.addEventListener('click', () => {
    current = (current - 1 + playlist.length) % playlist.length;
    loadVideo(current);
});

// Vidéo suivante
nextBtn.addEventListener('click', () => {
    current = (current + 1) % playlist.length;
    loadVideo(current);
});

// Démarrage initial
loadVideo(current);
