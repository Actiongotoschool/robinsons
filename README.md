# 🎮 Robinsons Game Arcade

A collection of classic games you can play right in your web browser! No downloads, no installations - just pure fun.

## 🕹️ Available Games

| Game | Description |
|------|-------------|
| 🐍 **Snake** | Classic snake game - eat food and grow longer! |
| 🧱 **Tetris** | Stack falling blocks and clear lines! |
| 🃏 **Memory Match** | Flip cards and find matching pairs! |
| 🏓 **Pong** | Classic paddle game vs AI opponent! |
| ⭕ **Tic-Tac-Toe** | Play against a smart AI opponent! |
| 🔢 **2048** | Slide tiles and reach 2048! |
| 🧱 **Breakout** | Smash bricks with a bouncing ball! |
| 🐦 **Flappy Bird** | Tap to fly through the pipes! |

## 🚀 How to Play

Simply open `index.html` in any modern web browser to access the game arcade. Click on any game card to start playing!

### Quick Start
```bash
# Option 1: Open directly in browser
open index.html

# Option 2: Use a local server
python -m http.server 8000
# Then visit http://localhost:8000
```

## 🎯 Features

- **No Installation Required** - Games run entirely in your browser
- **Responsive Design** - Play on desktop, tablet, or mobile
- **Keyboard & Touch Controls** - Multiple input methods supported
- **Score Tracking** - High scores saved locally
- **Beautiful UI** - Modern, dark-themed design

## 🎮 Controls

### Snake
- Arrow keys or WASD to move
- Space to pause

### Tetris
- ← → to move, ↑ or W to rotate
- ↓ for soft drop, Space for hard drop
- P to pause

### Memory Match
- Click/tap cards to flip them

### Pong
- ↑ ↓ or W/S keys to move paddle
- Mouse movement also works

### Tic-Tac-Toe
- Click any empty cell to place your mark

### 2048
- Arrow keys or WASD to slide tiles
- Swipe on mobile

### Breakout
- ← → keys or mouse to move paddle

### Flappy Bird
- Click, tap, or Space/Up to flap

## 📁 Project Structure

```
robinsons/
├── index.html          # Main arcade page
├── css/
│   └── main.css        # Shared styles
├── games/
│   ├── snake/          # Snake game
│   ├── tetris/         # Tetris game
│   ├── memory/         # Memory match game
│   ├── pong/           # Pong game
│   ├── tictactoe/      # Tic-Tac-Toe game
│   ├── 2048/           # 2048 puzzle game
│   ├── breakout/       # Breakout game
│   └── flappybird/     # Flappy Bird game
└── README.md
```

## 🛠️ Technologies

- Pure HTML5, CSS3, and JavaScript
- Canvas API for game rendering
- CSS Grid for responsive layouts
- LocalStorage for saving scores

## 📜 License

Free to play and share! Enjoy the games!
