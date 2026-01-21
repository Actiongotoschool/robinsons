/**
 * Movies System - Core functionality
 * Handles movie display, filtering, sorting, and user interactions
 */

const MoviesSystem = (function() {
    // Storage keys
    const STORAGE_KEYS = {
        favorites: 'robinsons_favorite_movies',
        watched: 'robinsons_watched_movies',
        settings: 'robinsons_movie_settings'
    };

    // State
    let favorites = [];
    let watched = [];
    let settings = {
        sortBy: 'rating', // rating, year, title
        sortOrder: 'desc',
        viewMode: 'grid' // grid, list
    };

    /**
     * Initialize the movies system
     */
    function init() {
        loadFromStorage();
        setupEventListeners();
        applyTheme();
    }

    /**
     * Load data from localStorage
     */
    function loadFromStorage() {
        try {
            const savedFavorites = localStorage.getItem(STORAGE_KEYS.favorites);
            const savedWatched = localStorage.getItem(STORAGE_KEYS.watched);
            const savedSettings = localStorage.getItem(STORAGE_KEYS.settings);

            if (savedFavorites) favorites = JSON.parse(savedFavorites);
            if (savedWatched) watched = JSON.parse(savedWatched);
            if (savedSettings) settings = { ...settings, ...JSON.parse(savedSettings) };
        } catch (error) {
            console.error('Error loading from storage:', error);
        }
    }

    /**
     * Save data to localStorage
     */
    function saveToStorage() {
        try {
            localStorage.setItem(STORAGE_KEYS.favorites, JSON.stringify(favorites));
            localStorage.setItem(STORAGE_KEYS.watched, JSON.stringify(watched));
            localStorage.setItem(STORAGE_KEYS.settings, JSON.stringify(settings));
        } catch (error) {
            console.error('Error saving to storage:', error);
        }
    }

    /**
     * Setup event listeners
     */
    function setupEventListeners() {
        // Search functionality
        const searchInput = document.getElementById('movie-search');
        if (searchInput) {
            searchInput.addEventListener('input', handleSearch);
        }

        // Sort controls
        const sortSelect = document.getElementById('sort-by');
        if (sortSelect) {
            sortSelect.addEventListener('change', handleSort);
        }

        // View mode toggle
        const viewToggle = document.querySelectorAll('.view-toggle-btn');
        viewToggle.forEach(btn => {
            btn.addEventListener('click', () => toggleViewMode(btn.dataset.view));
        });

        // Filter controls
        const filterButtons = document.querySelectorAll('.filter-btn');
        filterButtons.forEach(btn => {
            btn.addEventListener('click', () => handleFilter(btn.dataset.filter));
        });
    }

    /**
     * Apply theme from main arcade
     */
    function applyTheme() {
        const currentTheme = localStorage.getItem('robinsons_settings');
        if (currentTheme) {
            try {
                const settings = JSON.parse(currentTheme);
                if (settings.theme) {
                    document.documentElement.setAttribute('data-theme', settings.theme);
                }
            } catch (error) {
                console.error('Error applying theme:', error);
            }
        }
    }

    /**
     * Display movies for a specific genre
     */
    function displayMovies(genre, movies, containerId = 'movie-grid') {
        const container = document.getElementById(containerId);
        if (!container) return;

        // Sort movies
        const sortedMovies = sortMovies(movies);

        // Clear container
        container.innerHTML = '';

        // Apply view mode class
        container.className = `movie-grid ${settings.viewMode}-view`;

        // Create movie cards
        sortedMovies.forEach(movie => {
            const card = createMovieCard(movie);
            container.appendChild(card);
        });
    }

    /**
     * Create a movie card element
     */
    function createMovieCard(movie) {
        const card = document.createElement('div');
        card.className = 'movie-card';
        card.dataset.movieId = movie.id;

        const isFavorite = favorites.includes(movie.id);
        const isWatched = watched.includes(movie.id);

        card.innerHTML = `
            <button class="favorite-btn ${isFavorite ? 'active' : ''}" 
                    data-movie-id="${movie.id}" 
                    title="${isFavorite ? 'Remove from favorites' : 'Add to favorites'}">
                ${isFavorite ? '❤️' : '🤍'}
            </button>
            ${isWatched ? '<span class="watched-badge" title="Watched">✓</span>' : ''}
            <div class="movie-poster">
                <img src="${movie.poster}" alt="${movie.title}" onerror="this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 300 450%22%3E%3Crect fill=%22%231e293b%22 width=%22300%22 height=%22450%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 fill=%22%2394a3b8%22 font-size=%2224%22 text-anchor=%22middle%22 dy=%22.3em%22%3E${movie.title}%3C/text%3E%3C/svg%3E'">
                <div class="movie-rating">⭐ ${movie.rating}</div>
            </div>
            <div class="movie-info">
                <h3>${movie.title}</h3>
                <p class="movie-year">${movie.year} • ${movie.runtime}</p>
                <p class="movie-plot">${movie.plot}</p>
                <div class="movie-meta">
                    <span class="movie-director">🎬 ${movie.director}</span>
                </div>
            </div>
        `;

        // Add click handler for favorite button
        const favoriteBtn = card.querySelector('.favorite-btn');
        favoriteBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            toggleFavorite(movie.id);
        });

        // Add click handler for the card
        card.addEventListener('click', () => {
            showMovieDetails(movie);
        });

        return card;
    }

    /**
     * Show detailed movie modal
     */
    function showMovieDetails(movie) {
        const modal = document.createElement('div');
        modal.className = 'movie-modal';
        modal.innerHTML = `
            <div class="movie-modal-content">
                <button class="modal-close">✕</button>
                <div class="modal-layout">
                    <div class="modal-poster">
                        <img src="${movie.poster}" alt="${movie.title}">
                    </div>
                    <div class="modal-details">
                        <h2>${movie.title} <span class="modal-year">(${movie.year})</span></h2>
                        <div class="modal-rating">
                            <span class="rating-stars">⭐ ${movie.rating}/10</span>
                            <span class="rating-runtime">${movie.runtime}</span>
                        </div>
                        <div class="modal-genres">
                            ${movie.genre.map(g => `<span class="genre-tag">${g}</span>`).join('')}
                        </div>
                        <div class="modal-section">
                            <h3>Plot</h3>
                            <p>${movie.plot}</p>
                        </div>
                        <div class="modal-section">
                            <h3>Director</h3>
                            <p>🎬 ${movie.director}</p>
                        </div>
                        <div class="modal-section">
                            <h3>Cast</h3>
                            <p>${movie.cast.join(', ')}</p>
                        </div>
                        <div class="modal-actions">
                            <button class="modal-btn favorite-modal-btn" data-movie-id="${movie.id}">
                                ${favorites.includes(movie.id) ? '❤️ Remove from Favorites' : '🤍 Add to Favorites'}
                            </button>
                            <button class="modal-btn watched-modal-btn" data-movie-id="${movie.id}">
                                ${watched.includes(movie.id) ? '✓ Mark as Unwatched' : '✓ Mark as Watched'}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        `;

        document.body.appendChild(modal);

        // Add event listeners
        modal.querySelector('.modal-close').addEventListener('click', () => {
            modal.remove();
        });

        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.remove();
            }
        });

        modal.querySelector('.favorite-modal-btn').addEventListener('click', () => {
            toggleFavorite(movie.id);
            modal.remove();
            // Refresh current view
            if (window.currentGenre) {
                displayMovies(window.currentGenre, MovieDatabase[window.currentGenre]);
            }
        });

        modal.querySelector('.watched-modal-btn').addEventListener('click', () => {
            toggleWatched(movie.id);
            modal.remove();
            // Refresh current view
            if (window.currentGenre) {
                displayMovies(window.currentGenre, MovieDatabase[window.currentGenre]);
            }
        });

        // Animate in
        setTimeout(() => modal.classList.add('show'), 10);
    }

    /**
     * Toggle favorite status
     */
    function toggleFavorite(movieId) {
        const index = favorites.indexOf(movieId);
        if (index > -1) {
            favorites.splice(index, 1);
        } else {
            favorites.push(movieId);
        }
        saveToStorage();

        // Update UI
        const card = document.querySelector(`[data-movie-id="${movieId}"]`);
        if (card) {
            const btn = card.querySelector('.favorite-btn');
            const isFavorite = favorites.includes(movieId);
            btn.textContent = isFavorite ? '❤️' : '🤍';
            btn.classList.toggle('active', isFavorite);
            btn.title = isFavorite ? 'Remove from favorites' : 'Add to favorites';
        }
    }

    /**
     * Toggle watched status
     */
    function toggleWatched(movieId) {
        const index = watched.indexOf(movieId);
        if (index > -1) {
            watched.splice(index, 1);
        } else {
            watched.push(movieId);
        }
        saveToStorage();
    }

    /**
     * Sort movies based on current settings
     */
    function sortMovies(movies) {
        const sorted = [...movies];
        sorted.sort((a, b) => {
            let comparison = 0;
            switch (settings.sortBy) {
                case 'rating':
                    comparison = b.rating - a.rating;
                    break;
                case 'year':
                    comparison = b.year - a.year;
                    break;
                case 'title':
                    comparison = a.title.localeCompare(b.title);
                    break;
            }
            return settings.sortOrder === 'desc' ? comparison : -comparison;
        });
        return sorted;
    }

    /**
     * Handle search input
     */
    function handleSearch(event) {
        const query = event.target.value.toLowerCase();
        const cards = document.querySelectorAll('.movie-card');
        
        cards.forEach(card => {
            const title = card.querySelector('h3').textContent.toLowerCase();
            const plot = card.querySelector('.movie-plot').textContent.toLowerCase();
            const director = card.querySelector('.movie-director').textContent.toLowerCase();
            
            const matches = title.includes(query) || plot.includes(query) || director.includes(query);
            card.style.display = matches ? '' : 'none';
        });
    }

    /**
     * Handle sort change
     */
    function handleSort(event) {
        settings.sortBy = event.target.value;
        saveToStorage();
        
        // Re-display current genre
        if (window.currentGenre) {
            displayMovies(window.currentGenre, MovieDatabase[window.currentGenre]);
        }
    }

    /**
     * Toggle view mode
     */
    function toggleViewMode(mode) {
        settings.viewMode = mode;
        saveToStorage();

        // Update active button
        document.querySelectorAll('.view-toggle-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.view === mode);
        });

        // Re-display current genre
        if (window.currentGenre) {
            displayMovies(window.currentGenre, MovieDatabase[window.currentGenre]);
        }
    }

    /**
     * Handle filter
     */
    function handleFilter(filter) {
        // Implementation for filtering (e.g., by year range, rating range)
        console.log('Filter:', filter);
    }

    /**
     * Get favorite movies
     */
    function getFavoriteMovies() {
        const allMovies = [];
        Object.values(MovieDatabase).forEach(genreMovies => {
            allMovies.push(...genreMovies);
        });
        return allMovies.filter(movie => favorites.includes(movie.id));
    }

    /**
     * Get watched movies
     */
    function getWatchedMovies() {
        const allMovies = [];
        Object.values(MovieDatabase).forEach(genreMovies => {
            allMovies.push(...genreMovies);
        });
        return allMovies.filter(movie => watched.includes(movie.id));
    }

    /**
     * Search across all movies
     */
    function searchAllMovies(query) {
        const allMovies = [];
        Object.values(MovieDatabase).forEach(genreMovies => {
            allMovies.push(...genreMovies);
        });
        
        query = query.toLowerCase();
        return allMovies.filter(movie => {
            return movie.title.toLowerCase().includes(query) ||
                   movie.plot.toLowerCase().includes(query) ||
                   movie.director.toLowerCase().includes(query) ||
                   movie.cast.some(actor => actor.toLowerCase().includes(query));
        });
    }

    // Public API
    return {
        init,
        displayMovies,
        showMovieDetails,
        toggleFavorite,
        toggleWatched,
        getFavoriteMovies,
        getWatchedMovies,
        searchAllMovies,
        sortMovies
    };
})();

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', MoviesSystem.init);
} else {
    MoviesSystem.init();
}
