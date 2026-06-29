// Playlist Data
const songs = [
    {
        title: 'Midnight Dreams',
        artist: 'Luna & The Stars',
        src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
        cover: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400&h=400&fit=crop'
    },
    {
        title: 'Electric Waves',
        artist: 'Neon Lights',
        src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
        cover: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=400&fit=crop'
    },
    {
        title: 'Ocean Breeze',
        artist: 'Coastal Vibes',
        src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3',
        cover: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=400&h=400&fit=crop'
    },
    {
        title: 'Urban Pulse',
        artist: 'City Sounds',
        src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3',
        cover: 'https://images.unsplash.com/photo-1487180144351-b8472da7d491?w=400&h=400&fit=crop'
    },
    {
        title: 'Forest Echo',
        artist: 'Nature Notes',
        src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3',
        cover: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400&h=400&fit=crop'
    },
    {
        title: 'Starlight Symphony',
        artist: 'Cosmic Harmony',
        src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3',
        cover: 'https://images.unsplash.com/photo-1511379938547-c1f69b13d835?w=400&h=400&fit=crop'
    },
    {
        title: 'Golden Hour',
        artist: 'Sunset Sessions',
        src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3',
        cover: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=400&fit=crop'
    }
];

// DOM Elements
const audioPlayer = document.getElementById('audioPlayer');
const playBtn = document.getElementById('playBtn');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const progressBar = document.getElementById('progressBar');
const volumeControl = document.getElementById('volumeControl');
const autoplayToggle = document.getElementById('autoplayToggle');
const playlistElement = document.getElementById('playlist');
const albumArt = document.getElementById('albumArt');
const songTitle = document.getElementById('songTitle');
const artistName = document.getElementById('artistName');
const currentTimeEl = document.getElementById('currentTime');
const durationEl = document.getElementById('duration');

// Player State
let currentSongIndex = 0;
let isPlaying = false;

// Initialize Player
function initializePlayer() {
    loadSong(currentSongIndex);
    renderPlaylist();
    setupEventListeners();
}

// Load Song
function loadSong(index) {
    if (index < 0 || index >= songs.length) {
        currentSongIndex = 0;
    } else {
        currentSongIndex = index;
    }

    const song = songs[currentSongIndex];
    audioPlayer.src = song.src;
    songTitle.textContent = song.title;
    artistName.textContent = song.artist;
    albumArt.src = song.cover;
    albumArt.alt = song.title;

    // Update active playlist item
    updatePlaylistActive();

    // Reset progress
    progressBar.value = 0;
    currentTimeEl.textContent = '0:00';
}

// Update Playlist Active Item
function updatePlaylistActive() {
    const playlistItems = document.querySelectorAll('.playlist li');
    playlistItems.forEach((item, index) => {
        item.classList.toggle('active', index === currentSongIndex);
    });
}

// Render Playlist
function renderPlaylist() {
    playlistElement.innerHTML = '';
    songs.forEach((song, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            <strong>${song.title}</strong>
            <span class="artist">${song.artist}</span>
        `;
        li.addEventListener('click', () => {
            currentSongIndex = index;
            loadSong(index);
            playSong();
        });
        playlistElement.appendChild(li);
    });
}

// Play Song
function playSong() {
    audioPlayer.play();
    isPlaying = true;
    playBtn.innerHTML = '<i class="fas fa-pause"></i>';
    playBtn.classList.add('playing');
}

// Pause Song
function pauseSong() {
    audioPlayer.pause();
    isPlaying = false;
    playBtn.innerHTML = '<i class="fas fa-play"></i>';
    playBtn.classList.remove('playing');
}

// Toggle Play/Pause
function togglePlayPause() {
    if (isPlaying) {
        pauseSong();
    } else {
        playSong();
    }
}

// Next Song
function nextSong() {
    currentSongIndex++;
    if (currentSongIndex >= songs.length) {
        currentSongIndex = 0;
    }
    loadSong(currentSongIndex);
    if (isPlaying) {
        playSong();
    }
}

// Previous Song
function previousSong() {
    currentSongIndex--;
    if (currentSongIndex < 0) {
        currentSongIndex = songs.length - 1;
    }
    loadSong(currentSongIndex);
    if (isPlaying) {
        playSong();
    }
}

// Format Time
function formatTime(seconds) {
    if (isNaN(seconds)) return '0:00';

    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
}

// Update Progress Bar
audioPlayer.addEventListener('timeupdate', () => {
    if (audioPlayer.duration) {
        const progress = (audioPlayer.currentTime / audioPlayer.duration) * 100;
        progressBar.value = progress;
        currentTimeEl.textContent = formatTime(audioPlayer.currentTime);
    }
});

// Update Duration
audioPlayer.addEventListener('loadedmetadata', () => {
    durationEl.textContent = formatTime(audioPlayer.duration);
});

// Progress Bar Seek
progressBar.addEventListener('input', (e) => {
    const time = (e.target.value / 100) * audioPlayer.duration;
    audioPlayer.currentTime = time;
});

// Volume Control
volumeControl.addEventListener('input', (e) => {
    audioPlayer.volume = e.target.value / 100;
});

// Autoplay Next Song
audioPlayer.addEventListener('ended', () => {
    if (autoplayToggle.checked) {
        nextSong();
    }
});

// Setup Event Listeners
function setupEventListeners() {
    playBtn.addEventListener('click', togglePlayPause);
    nextBtn.addEventListener('click', nextSong);
    prevBtn.addEventListener('click', previousSong);

    // Keyboard Controls
    document.addEventListener('keydown', (e) => {
        if (e.code === 'Space') {
            e.preventDefault();
            togglePlayPause();
        }
        if (e.code === 'ArrowRight') {
            nextSong();
        }
        if (e.code === 'ArrowLeft') {
            previousSong();
        }
    });
}

// Initialize on Page Load
window.addEventListener('DOMContentLoaded', initializePlayer);

// Set Initial Volume
volumeControl.value = 70;
audioPlayer.volume = 0.7;