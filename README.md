# Music Player

A modern, responsive music player built with HTML, CSS, and JavaScript with all essential audio controls and features.

## Features

✅ **Audio Controls**
- Play/Pause functionality
- Next/Previous song navigation
- Smooth transitions between tracks

✅ **Song Information**
- Dynamic song title and artist display
- Album cover artwork
- Current time and total duration

✅ **Progress Bar**
- Visual progress indicator
- Click to seek through the song
- Real-time current time and duration display

✅ **Volume Control**
- Adjustable volume slider
- Visual indicators (mute/max icons)
- Default volume at 70%

✅ **Playlist Management**
- 7 sample songs included
- Click any song to play
- Active song highlighting
- Scrollable playlist

✅ **Autoplay**
- Toggle autoplay feature
- Automatically plays next song when current one ends
- Loops back to first song after last

✅ **Keyboard Controls**
- **Spacebar**: Play/Pause
- **Right Arrow**: Next song
- **Left Arrow**: Previous song

## File Structure

```
music-player/
├── index.html      # Main HTML structure
├── style.css       # Styling and animations
├── script.js       # JavaScript functionality
└── README.md       # This file
```

## How to Use

1. **Open the Music Player**
   - Open `index.html` in your web browser

2. **Playing Music**
   - Click the play button or press Spacebar
   - Use previous/next buttons to navigate songs
   - Click any song in the playlist to start playing it

3. **Control Playback**
   - Drag the progress bar to seek through the song
   - Adjust volume using the volume slider
   - Enable/disable autoplay as needed

## Sample Playlist

The player comes with 7 sample songs:
1. Midnight Dreams - Luna & The Stars
2. Electric Waves - Neon Lights
3. Ocean Breeze - Coastal Vibes
4. Urban Pulse - City Sounds
5. Forest Echo - Nature Notes
6. Starlight Symphony - Cosmic Harmony
7. Golden Hour - Sunset Sessions

## Customization

### Add Your Own Songs

Edit the `songs` array in `script.js`:

```javascript
const songs = [
    {
        title: 'Your Song Title',
        artist: 'Artist Name',
        src: 'path/to/your/song.mp3',
        cover: 'path/to/album/cover.jpg'
    },
    // Add more songs...
];
```

### Styling

Modify colors and fonts in `style.css`:
- Primary gradient: `#667eea` to `#764ba2`
- Font: `'Segoe UI', Tahoma, Geneva, Verdana, sans-serif`

## Browser Compatibility

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Modern mobile browsers

## Features Breakdown

### 🎵 **Audio Control System**
- Fully functional play/pause mechanism
- Smooth song transitions
- Next/Previous navigation with loop handling

### 🎨 **Visual Design**
- Modern gradient background
- Responsive layout (mobile-friendly)
- Smooth animations and transitions
- Dynamic album art

### 📊 **Progress Tracking**
- Real-time progress bar with seeking capability
- Time display (current/total duration)
- Accurate time formatting

### 🔊 **Volume Management**
- Independent volume control
- Ranges from 0-100%
- Default set to 70%

### 📝 **Playlist System**
- Multiple songs with metadata
- Active song highlighting
- Click to play any song
- Scrollable container

### ⚙️ **Autoplay Feature**
- Toggle ON/OFF with checkbox
- Automatically advances to next song
- Loops back to start after last song

## Advanced Keyboard Shortcuts

- **Space**: Toggle Play/Pause
- **Right Arrow**: Next Track
- **Left Arrow**: Previous Track

## Technical Details

- **HTML5 Audio API** for audio playback
- **CSS3** for animations and responsive design
- **Vanilla JavaScript** (no frameworks required)
- **Font Awesome Icons** for UI elements
- **Unsplash Images** for album artwork

## Future Enhancement Ideas

- Local file upload support
- Shuffle and repeat modes
- Equalizer controls
- Lyrics display
- Favorite/Like functionality
- Search and filter
- Drag-and-drop playlist reordering
- Dark/Light theme toggle

## License

Free to use and modify for personal or commercial projects.

---

Enjoy your music! 🎶