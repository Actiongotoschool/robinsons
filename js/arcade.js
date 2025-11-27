/**
 * Robinsons Game Arcade - Core System
 * Handles themes, settings, high scores, achievements, stats, and more
 */

const RobinsonsArcade = (function() {
    // Default settings
    const DEFAULT_SETTINGS = {
        theme: 'dark',
        soundEnabled: true,
        musicEnabled: false,
        notifications: true,
        autoSave: true,
        showFPS: false,
        difficulty: 'normal'
    };

    // Game definitions
    const GAMES = {
        snake: { name: 'Snake', emoji: '🐍', path: 'games/snake/index.html' },
        tetris: { name: 'Tetris', emoji: '🧱', path: 'games/tetris/index.html' },
        memory: { name: 'Memory Match', emoji: '🃏', path: 'games/memory/index.html' },
        pong: { name: 'Pong', emoji: '🏓', path: 'games/pong/index.html' },
        tictactoe: { name: 'Tic-Tac-Toe', emoji: '⭕', path: 'games/tictactoe/index.html' },
        '2048': { name: '2048', emoji: '🔢', path: 'games/2048/index.html' },
        breakout: { name: 'Breakout', emoji: '🧱', path: 'games/breakout/index.html' },
        flappybird: { name: 'Flappy Bird', emoji: '🐦', path: 'games/flappybird/index.html' },
        minesweeper: { name: 'Minesweeper', emoji: '💣', path: 'games/minesweeper/index.html' },
        spaceinvaders: { name: 'Space Invaders', emoji: '👾', path: 'games/spaceinvaders/index.html' },
        wordle: { name: 'Word Guess', emoji: '📝', path: 'games/wordle/index.html' },
        sudoku: { name: 'Sudoku', emoji: '🔢', path: 'games/sudoku/index.html' },
        chess: { name: 'Chess', emoji: '♟️', path: 'games/chess/index.html' },
        simon: { name: 'Simon Says', emoji: '🔴', path: 'games/simon/index.html' },
        dino: { name: 'Dino Run', emoji: '🦖', path: 'games/dino/index.html' },
        connect4: { name: 'Connect Four', emoji: '🔴', path: 'games/connect4/index.html' }
    };

    // Achievement definitions
    const ACHIEVEMENTS = {
        firstGame: { name: 'First Steps', icon: '🎮', description: 'Play your first game', xp: 10 },
        snake100: { name: 'Snake Charmer', icon: '🐍', description: 'Score 100+ in Snake', xp: 25 },
        snake500: { name: 'Python Master', icon: '🐍', description: 'Score 500+ in Snake', xp: 50 },
        tetris1000: { name: 'Block Builder', icon: '🧱', description: 'Score 1000+ in Tetris', xp: 25 },
        tetris5000: { name: 'Tetris Legend', icon: '🧱', description: 'Score 5000+ in Tetris', xp: 75 },
        memory30: { name: 'Sharp Memory', icon: '🧠', description: 'Complete Memory in under 30 moves', xp: 30 },
        pongWin: { name: 'Paddle Pro', icon: '🏓', description: 'Beat AI in Pong', xp: 20 },
        tictactoeWin: { name: 'Strategist', icon: '⭕', description: 'Win Tic-Tac-Toe', xp: 15 },
        reach2048: { name: '2048 Master', icon: '🔢', description: 'Reach 2048 tile', xp: 100 },
        breakoutLevel3: { name: 'Brick Breaker', icon: '🧱', description: 'Reach level 3 in Breakout', xp: 30 },
        flappy10: { name: 'Bird Brain', icon: '🐦', description: 'Score 10+ in Flappy Bird', xp: 25 },
        flappy50: { name: 'Sky High', icon: '🐦', description: 'Score 50+ in Flappy Bird', xp: 75 },
        minesweeperWin: { name: 'Mine Sweeper', icon: '💣', description: 'Complete a Minesweeper game', xp: 30 },
        spaceScore: { name: 'Space Defender', icon: '👾', description: 'Score 1000+ in Space Invaders', xp: 35 },
        wordStreak: { name: 'Word Smith', icon: '📝', description: 'Get 5 word streak', xp: 40 },
        sudokuComplete: { name: 'Number Ninja', icon: '🔢', description: 'Complete a Sudoku puzzle', xp: 35 },
        chessWin: { name: 'Checkmate!', icon: '♟️', description: 'Beat the AI in Chess', xp: 50 },
        simonScore: { name: 'Memory Master', icon: '🔴', description: 'Reach level 15 in Simon', xp: 40 },
        dinoScore: { name: 'Dino Champion', icon: '🦖', description: 'Score 500+ in Dino Run', xp: 30 },
        connect4Win: { name: 'Four in a Row', icon: '🔴', description: 'Win Connect Four', xp: 25 },
        allGames: { name: 'Arcade Master', icon: '🏆', description: 'Play all 16 games', xp: 100 },
        hours5: { name: 'Dedicated', icon: '⏰', description: 'Play for 5 hours total', xp: 100 },
        streak7: { name: 'Weekly Warrior', icon: '🔥', description: 'Play 7 days in a row', xp: 75 }
    };

    // Storage keys
    const STORAGE_KEYS = {
        settings: 'robinsons_settings',
        profile: 'robinsons_profile',
        highScores: 'robinsons_highscores',
        achievements: 'robinsons_achievements',
        stats: 'robinsons_stats',
        favorites: 'robinsons_favorites',
        recentGames: 'robinsons_recent',
        gameSaves: 'robinsons_saves',
        allGamesPlayed: 'robinsons_all_games_played'
    };

    // State
    let settings = { ...DEFAULT_SETTINGS };
    let profile = {
        name: 'Player',
        avatar: '🎮',
        level: 1,
        xp: 0,
        xpToNext: 100,
        joinDate: new Date().toISOString()
    };
    let highScores = {};
    let achievements = {};
    let stats = {
        gamesPlayed: 0,
        totalPlayTime: 0,
        lastPlayed: null,
        streak: 0,
        lastStreakDate: null
    };
    let favorites = [];
    let recentGames = [];
    let gameSaves = {};

    // Initialize
    function init() {
        loadAllData();
        applyTheme(settings.theme);
        updateStreak();
        setupEventListeners();
        renderUI();
    }

    // Load all data from localStorage
    function loadAllData() {
        try {
            const savedSettings = localStorage.getItem(STORAGE_KEYS.settings);
            if (savedSettings) settings = { ...DEFAULT_SETTINGS, ...JSON.parse(savedSettings) };

            const savedProfile = localStorage.getItem(STORAGE_KEYS.profile);
            if (savedProfile) profile = { ...profile, ...JSON.parse(savedProfile) };

            const savedHighScores = localStorage.getItem(STORAGE_KEYS.highScores);
            if (savedHighScores) highScores = JSON.parse(savedHighScores);

            const savedAchievements = localStorage.getItem(STORAGE_KEYS.achievements);
            if (savedAchievements) achievements = JSON.parse(savedAchievements);

            const savedStats = localStorage.getItem(STORAGE_KEYS.stats);
            if (savedStats) stats = { ...stats, ...JSON.parse(savedStats) };

            const savedFavorites = localStorage.getItem(STORAGE_KEYS.favorites);
            if (savedFavorites) favorites = JSON.parse(savedFavorites);

            const savedRecent = localStorage.getItem(STORAGE_KEYS.recentGames);
            if (savedRecent) recentGames = JSON.parse(savedRecent);

            const savedGameSaves = localStorage.getItem(STORAGE_KEYS.gameSaves);
            if (savedGameSaves) gameSaves = JSON.parse(savedGameSaves);

            // Migrate old high scores
            migrateOldHighScores();
        } catch (e) {
            console.error('Error loading data:', e);
        }
    }

    // Migrate old individual game high scores
    function migrateOldHighScores() {
        const oldScoreKeys = {
            'snakeHighScore': 'snake',
            '2048Best': '2048',
            'flappyBest': 'flappybird'
        };

        for (const [oldKey, gameId] of Object.entries(oldScoreKeys)) {
            const oldScore = localStorage.getItem(oldKey);
            if (oldScore && (!highScores[gameId] || parseInt(oldScore) > highScores[gameId])) {
                highScores[gameId] = parseInt(oldScore);
            }
        }
        saveHighScores();
    }

    // Save functions
    function saveSettings() {
        localStorage.setItem(STORAGE_KEYS.settings, JSON.stringify(settings));
    }

    function saveProfile() {
        localStorage.setItem(STORAGE_KEYS.profile, JSON.stringify(profile));
    }

    function saveHighScores() {
        localStorage.setItem(STORAGE_KEYS.highScores, JSON.stringify(highScores));
    }

    function saveAchievements() {
        localStorage.setItem(STORAGE_KEYS.achievements, JSON.stringify(achievements));
    }

    function saveStats() {
        localStorage.setItem(STORAGE_KEYS.stats, JSON.stringify(stats));
    }

    function saveFavorites() {
        localStorage.setItem(STORAGE_KEYS.favorites, JSON.stringify(favorites));
    }

    function saveRecentGames() {
        localStorage.setItem(STORAGE_KEYS.recentGames, JSON.stringify(recentGames));
    }

    function saveGameSaves() {
        localStorage.setItem(STORAGE_KEYS.gameSaves, JSON.stringify(gameSaves));
    }

    // Theme management
    function applyTheme(themeName) {
        document.documentElement.setAttribute('data-theme', themeName);
        settings.theme = themeName;
        saveSettings();
    }

    // High score management
    function updateHighScore(gameId, score) {
        if (!highScores[gameId] || score > highScores[gameId]) {
            highScores[gameId] = score;
            saveHighScores();
            showToast(`New high score in ${GAMES[gameId]?.name || gameId}: ${score}!`, 'success');
            checkScoreAchievements(gameId, score);
            return true;
        }
        return false;
    }

    function getHighScore(gameId) {
        return highScores[gameId] || 0;
    }

    // Achievement management
    function unlockAchievement(achievementId) {
        if (achievements[achievementId]) return false;

        const achievement = ACHIEVEMENTS[achievementId];
        if (!achievement) return false;

        achievements[achievementId] = {
            unlockedAt: new Date().toISOString()
        };
        saveAchievements();

        addXP(achievement.xp);
        showToast(`🏆 Achievement Unlocked: ${achievement.name}!`, 'success');
        
        return true;
    }

    function checkScoreAchievements(gameId, score) {
        switch (gameId) {
            case 'snake':
                if (score >= 100) unlockAchievement('snake100');
                if (score >= 500) unlockAchievement('snake500');
                break;
            case 'tetris':
                if (score >= 1000) unlockAchievement('tetris1000');
                if (score >= 5000) unlockAchievement('tetris5000');
                break;
            case 'flappybird':
                if (score >= 10) unlockAchievement('flappy10');
                if (score >= 50) unlockAchievement('flappy50');
                break;
        }
    }

    // XP and leveling
    function addXP(amount) {
        profile.xp += amount;
        while (profile.xp >= profile.xpToNext) {
            profile.xp -= profile.xpToNext;
            profile.level++;
            profile.xpToNext = Math.floor(profile.xpToNext * 1.5);
            showToast(`🎉 Level Up! You're now level ${profile.level}!`, 'success');
        }
        saveProfile();
        updateProfileUI();
    }

    // Stats management
    function recordGamePlayed(gameId) {
        stats.gamesPlayed++;
        stats.lastPlayed = new Date().toISOString();
        saveStats();

        // Add to recent games
        recentGames = recentGames.filter(g => g !== gameId);
        recentGames.unshift(gameId);
        if (recentGames.length > 5) recentGames.pop();
        saveRecentGames();

        // Track all games ever played for achievement
        let allGamesEverPlayed = JSON.parse(localStorage.getItem(STORAGE_KEYS.allGamesPlayed) || '[]');
        if (!allGamesEverPlayed.includes(gameId)) {
            allGamesEverPlayed.push(gameId);
            localStorage.setItem(STORAGE_KEYS.allGamesPlayed, JSON.stringify(allGamesEverPlayed));
        }

        // Check first game achievement
        if (stats.gamesPlayed === 1) {
            unlockAchievement('firstGame');
        }

        // Check all games achievement - use persistent tracking
        if (allGamesEverPlayed.length >= Object.keys(GAMES).length) {
            unlockAchievement('allGames');
        }

        addXP(5); // XP for playing
    }

    function updateStreak() {
        const today = new Date().toDateString();
        const lastDate = stats.lastStreakDate;

        if (lastDate) {
            const yesterday = new Date();
            yesterday.setDate(yesterday.getDate() - 1);
            
            if (lastDate === today) {
                // Already played today
            } else if (lastDate === yesterday.toDateString()) {
                // Continuing streak
                stats.streak++;
                stats.lastStreakDate = today;
                if (stats.streak >= 7) unlockAchievement('streak7');
            } else {
                // Streak broken
                stats.streak = 1;
                stats.lastStreakDate = today;
            }
        } else {
            stats.streak = 1;
            stats.lastStreakDate = today;
        }
        saveStats();
    }

    // Favorites management
    function toggleFavorite(gameId) {
        const index = favorites.indexOf(gameId);
        if (index > -1) {
            favorites.splice(index, 1);
        } else {
            favorites.push(gameId);
        }
        saveFavorites();
        return favorites.includes(gameId);
    }

    function isFavorite(gameId) {
        return favorites.includes(gameId);
    }

    // Game save management
    function saveGameState(gameId, state) {
        gameSaves[gameId] = {
            state,
            savedAt: new Date().toISOString()
        };
        saveGameSaves();
        showToast('Game saved!', 'success');
    }

    function loadGameState(gameId) {
        return gameSaves[gameId]?.state || null;
    }

    function hasSavedGame(gameId) {
        return !!gameSaves[gameId];
    }

    // Profile management
    function updateProfile(updates) {
        profile = { ...profile, ...updates };
        saveProfile();
        updateProfileUI();
    }

    // Toast notifications
    function showToast(message, type = 'info') {
        if (!settings.notifications) return;

        let container = document.querySelector('.toast-container');
        if (!container) {
            container = document.createElement('div');
            container.className = 'toast-container';
            document.body.appendChild(container);
        }

        const toast = document.createElement('div');
        toast.className = `toast ${type}`;
        toast.innerHTML = `<span>${message}</span>`;
        container.appendChild(toast);

        setTimeout(() => {
            toast.style.animation = 'slideIn 0.3s ease reverse';
            setTimeout(() => toast.remove(), 300);
        }, 3000);
    }

    // Fullscreen
    function toggleFullscreen() {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen().catch(e => console.error('Fullscreen error:', e));
        } else {
            document.exitFullscreen();
        }
    }

    // Export all data for offline use
    function exportAllData() {
        return {
            settings,
            profile,
            highScores,
            achievements,
            stats,
            favorites,
            recentGames,
            gameSaves,
            exportedAt: new Date().toISOString()
        };
    }

    // Import data
    function importData(data) {
        if (data.settings) { settings = data.settings; saveSettings(); }
        if (data.profile) { profile = data.profile; saveProfile(); }
        if (data.highScores) { highScores = data.highScores; saveHighScores(); }
        if (data.achievements) { achievements = data.achievements; saveAchievements(); }
        if (data.stats) { stats = data.stats; saveStats(); }
        if (data.favorites) { favorites = data.favorites; saveFavorites(); }
        if (data.recentGames) { recentGames = data.recentGames; saveRecentGames(); }
        if (data.gameSaves) { gameSaves = data.gameSaves; saveGameSaves(); }
        
        applyTheme(settings.theme);
        renderUI();
        showToast('Data imported successfully!', 'success');
    }

    // Generate offline HTML bundle
    async function generateOfflineBundle() {
        showToast('Generating offline bundle...', 'info');
        
        try {
            // This would need to fetch all game files and bundle them
            // For now, we'll create a simple downloadable version
            const arcadeData = exportAllData();
            const dataScript = `<script>
                const importedArcadeData = ${JSON.stringify(arcadeData)};
                if (window.RobinsonsArcade) {
                    window.RobinsonsArcade.importData(importedArcadeData);
                }
            </script>`;

            // Create download instruction
            showToast('To use offline: Save complete webpage (Ctrl+S) and all files', 'info');
            
            // Trigger save dialog for data backup
            const blob = new Blob([JSON.stringify(arcadeData, null, 2)], { type: 'application/json' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = 'robinsons-arcade-backup.json';
            a.click();
            URL.revokeObjectURL(url);

        } catch (e) {
            console.error('Error generating bundle:', e);
            showToast('Error generating bundle', 'error');
        }
    }

    // UI Setup
    function setupEventListeners() {
        // Settings button
        document.addEventListener('click', (e) => {
            if (e.target.closest('.settings-btn')) {
                toggleSettingsPanel();
            }
            if (e.target.closest('.settings-panel .close-btn')) {
                closeSettingsPanel();
            }
            if (e.target.closest('.overlay')) {
                closeSettingsPanel();
            }
            if (e.target.closest('.theme-btn')) {
                const theme = e.target.closest('.theme-btn').dataset.theme;
                applyTheme(theme);
                updateThemeButtons();
            }
            if (e.target.closest('.favorite-btn')) {
                const gameId = e.target.closest('.favorite-btn').dataset.game;
                const isFav = toggleFavorite(gameId);
                e.target.closest('.favorite-btn').classList.toggle('active', isFav);
                e.target.closest('.favorite-btn').textContent = isFav ? '❤️' : '🤍';
            }
            if (e.target.closest('.fullscreen-btn')) {
                toggleFullscreen();
            }
            if (e.target.closest('.download-btn')) {
                generateOfflineBundle();
            }
        });

        // Toggle settings
        document.addEventListener('change', (e) => {
            if (e.target.closest('.toggle-setting input')) {
                const setting = e.target.dataset.setting;
                if (setting) {
                    settings[setting] = e.target.checked;
                    saveSettings();
                }
            }
        });

        // Keyboard shortcuts
        document.addEventListener('keydown', (e) => {
            // F11 or Ctrl+F for fullscreen
            if (e.key === 'F11' || (e.ctrlKey && e.key === 'f')) {
                e.preventDefault();
                toggleFullscreen();
            }
            // Escape to close panels
            if (e.key === 'Escape') {
                closeSettingsPanel();
            }
        });
    }

    function toggleSettingsPanel() {
        const panel = document.querySelector('.settings-panel');
        const overlay = document.querySelector('.overlay');
        if (panel && overlay) {
            panel.classList.toggle('open');
            overlay.classList.toggle('active');
        }
    }

    function closeSettingsPanel() {
        const panel = document.querySelector('.settings-panel');
        const overlay = document.querySelector('.overlay');
        if (panel) panel.classList.remove('open');
        if (overlay) overlay.classList.remove('active');
    }

    function updateThemeButtons() {
        document.querySelectorAll('.theme-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.theme === settings.theme);
        });
    }

    function updateProfileUI() {
        const profileSection = document.querySelector('.profile-section');
        if (profileSection) {
            profileSection.querySelector('.profile-name').textContent = profile.name;
            profileSection.querySelector('.profile-level').textContent = `Level ${profile.level}`;
            const xpPercent = (profile.xp / profile.xpToNext) * 100;
            profileSection.querySelector('.profile-xp-fill').style.width = `${xpPercent}%`;
        }
    }

    function renderUI() {
        updateThemeButtons();
        updateProfileUI();
        renderHighScores();
        renderAchievements();
        renderStats();
        renderRecentGames();
    }

    function renderHighScores() {
        const container = document.querySelector('.highscore-list');
        if (!container) return;

        container.innerHTML = Object.entries(GAMES).map(([id, game]) => `
            <div class="highscore-item">
                <span class="game-emoji">${game.emoji}</span>
                <div>
                    <div class="game-name">${game.name}</div>
                    <div class="score">${highScores[id] || 0}</div>
                </div>
            </div>
        `).join('');
    }

    function renderAchievements() {
        const container = document.querySelector('.achievements-grid');
        if (!container) return;

        container.innerHTML = Object.entries(ACHIEVEMENTS).map(([id, ach]) => `
            <div class="achievement ${achievements[id] ? 'unlocked' : ''}">
                <div class="icon">${ach.icon}</div>
                <div class="name">${ach.name}</div>
            </div>
        `).join('');
    }

    function renderStats() {
        const container = document.querySelector('.stats-grid');
        if (!container) return;

        const totalAchievements = Object.keys(achievements).length;
        const playTimeHours = Math.floor(stats.totalPlayTime / 3600);

        container.innerHTML = `
            <div class="stat-card">
                <div class="stat-value">${stats.gamesPlayed}</div>
                <div class="stat-label">Games Played</div>
            </div>
            <div class="stat-card">
                <div class="stat-value">${stats.streak}</div>
                <div class="stat-label">Day Streak</div>
            </div>
            <div class="stat-card">
                <div class="stat-value">${totalAchievements}</div>
                <div class="stat-label">Achievements</div>
            </div>
            <div class="stat-card">
                <div class="stat-value">${playTimeHours}h</div>
                <div class="stat-label">Play Time</div>
            </div>
        `;
    }

    function renderRecentGames() {
        const container = document.querySelector('.recent-games');
        if (!container || recentGames.length === 0) return;

        container.innerHTML = recentGames.map(id => {
            const game = GAMES[id];
            if (!game) return '';
            return `
                <a href="${game.path}" class="recent-game" onclick="RobinsonsArcade.recordGamePlayed('${id}')">
                    <span class="emoji">${game.emoji}</span>
                    <span>${game.name}</span>
                </a>
            `;
        }).join('');
    }

    // Public API
    return {
        init,
        applyTheme,
        updateHighScore,
        getHighScore,
        unlockAchievement,
        recordGamePlayed,
        toggleFavorite,
        isFavorite,
        saveGameState,
        loadGameState,
        hasSavedGame,
        updateProfile,
        showToast,
        toggleFullscreen,
        exportAllData,
        importData,
        generateOfflineBundle,
        getSettings: () => ({ ...settings }),
        getProfile: () => ({ ...profile }),
        getStats: () => ({ ...stats }),
        getAchievements: () => ({ ...achievements }),
        GAMES,
        ACHIEVEMENTS
    };
})();

// Auto-initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => RobinsonsArcade.init());
} else {
    RobinsonsArcade.init();
}
