const video = document.getElementById('video');
const playBtn = document.getElementById('play');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const volumeSlider = document.getElementById('volume');
const playlistBtn = document.getElementById('playlist-btn');
const playlistMenu = document.getElementById('playlist-menu');
const videoMenu = document.getElementById('video-menu');
const closeMenu = document.getElementById('close-menu');

// Playlist
const playlist = [
    { title: "Musique 1", src: "https://www.w3schools.com/html/mov_bbb.mp4" },
    { title: "Musique 2", src: "https://www.w3schools.com/html/movie.mp4" }
];

let current = 0;
let history = [];

// Charger vidéo
function loadVideo(index) {
    if(current !== index) history.push(current);
    current = index;
    video.src = playlist[index].src;
    video.play();
    playBtn.textContent = "⏸️";
}

// Play / Pause
playBtn.addEventListener('click', () => {
    if(video.paused){
        video.play();
        playBtn.textContent = "⏸️";
    } else {
        video.pause();
        playBtn.textContent = "▶️";
    }
});

// Volume
volumeSlider.addEventListener('input', () => video.volume = volumeSlider.value);

// Vidéo précédente dans l’historique
prevBtn.addEventListener('click', () => {
    if(history.length > 0){
        const last = history.pop();
        loadVideo(last);
    } else {
        // si pas d'historique, reste sur la même
        video.currentTime = 0;
    }
});

// Vidéo suivante
nextBtn.addEventListener('click', () => {
    current = (current + 1) % playlist.length;
    loadVideo(current);
});

// Auto next quand fin
video.addEventListener('ended', () => nextBtn.click());

// Menu Playlist
playlistBtn.addEventListener('click', () => playlistMenu.style.display = 'block');
closeMenu.addEventListener('click', () => playlistMenu.style.display = 'none');

// Remplir menu
playlist.forEach((item, index) => {
    const li = document.createElement('li');
    li.textContent = item.title;
    li.addEventListener('click', () => {
        loadVideo(index);
        playlistMenu.style.display = 'none';
    });
    videoMenu.appendChild(li);
});

// Démarrage
loadVideo(0);
