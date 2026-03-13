const video = document.getElementById('video');
const playBtn = document.getElementById('play');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const volumeSlider = document.getElementById('volume');
const videoMenu = document.getElementById('video-menu');

// Playlist avec titres et liens vidéo
const playlist = [
    { title: "Vidéo 1", src: "https://www.w3schools.com/html/mov_bbb.mp4" },
    { title: "Vidéo 2", src: "https://www.w3schools.com/html/movie.mp4" }
];

let current = 0;

// Charger vidéo
function loadVideo(index) {
    current = index;
    video.src = playlist[index].src;
    video.play();
    playBtn.textContent = "⏸️";
}

// Menu dynamique
playlist.forEach((item, index) => {
    const li = document.createElement('li');
    li.textContent = item.title;
    li.addEventListener('click', () => loadVideo(index));
    videoMenu.appendChild(li);
});

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

// Auto next quand fin de vidéo
video.addEventListener('ended', () => nextBtn.click());

// Démarrage
loadVideo(0);    } else {
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

// Auto passer à la vidéo suivante quand la vidéo se termine
video.addEventListener('ended', () => {
    nextBtn.click();
});

// Démarrage initial
loadVideo(0);
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
