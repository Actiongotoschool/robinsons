// Christmas Website JavaScript

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    initCountdown();
    initAdventCalendar();
    initMusicPlayer();
    initPlaylist();
    loadWishList();
});

// Countdown Timer
function initCountdown() {
    const christmasDate = new Date('December 25, 2024 00:00:00').getTime();
    
    function updateCountdown() {
        const now = new Date().getTime();
        const distance = christmasDate - now;
        
        if (distance < 0) {
            document.getElementById('days').textContent = '00';
            document.getElementById('hours').textContent = '00';
            document.getElementById('minutes').textContent = '00';
            document.getElementById('seconds').textContent = '00';
            document.getElementById('christmasMessage').textContent = '🎄 Merry Christmas! 🎅';
            return;
        }
        
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        document.getElementById('days').textContent = String(days).padStart(2, '0');
        document.getElementById('hours').textContent = String(hours).padStart(2, '0');
        document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
        document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
        
        if (days === 0 && hours === 0) {
            document.getElementById('christmasMessage').textContent = '🎁 Christmas is almost here! 🌟';
        } else if (days <= 7) {
            document.getElementById('christmasMessage').textContent = '✨ Less than a week until Christmas! ✨';
        } else {
            document.getElementById('christmasMessage').textContent = '🎄 Get ready for the magic! 🎅';
        }
    }
    
    updateCountdown();
    setInterval(updateCountdown, 1000);
}

// Advent Calendar
function initAdventCalendar() {
    const calendar = document.getElementById('adventCalendar');
    const today = new Date();
    const currentDay = today.getDate();
    const currentMonth = today.getMonth() + 1; // December is 12
    
    const surprises = [
        '🎄', '🎅', '⛄', '🎁', '🔔', '❄️', '🌟', '🕯️',
        '🦌', '🎀', '🍪', '🥛', '🎵', '🎶', '✨', '🎪',
        '🎨', '🧦', '🎭', '🎺', '🎸', '🎹', '🥁', '🎻'
    ];
    
    for (let i = 1; i <= 24; i++) {
        const door = document.createElement('div');
        door.className = 'advent-door';
        
        // Check if door can be opened (only in December and only current or past days)
        const canOpen = currentMonth === 12 && currentDay >= i;
        const isOpened = localStorage.getItem(`advent-day-${i}`) === 'opened';
        
        if (!canOpen) {
            door.classList.add('locked');
        }
        
        if (isOpened) {
            door.classList.add('opened');
            const surprise = document.createElement('div');
            surprise.className = 'door-surprise';
            surprise.textContent = surprises[i - 1];
            door.appendChild(surprise);
        } else {
            const number = document.createElement('div');
            number.className = 'door-number';
            number.textContent = i;
            
            const icon = document.createElement('div');
            icon.className = 'door-icon';
            icon.textContent = '🎁';
            
            door.appendChild(number);
            door.appendChild(icon);
        }
        
        if (canOpen && !isOpened) {
            door.addEventListener('click', () => openAdventDoor(door, i, surprises[i - 1]));
        }
        
        calendar.appendChild(door);
    }
}

function openAdventDoor(door, day, surprise) {
    door.classList.add('opened');
    door.innerHTML = '';
    
    const surpriseEl = document.createElement('div');
    surpriseEl.className = 'door-surprise';
    surpriseEl.textContent = surprise;
    door.appendChild(surpriseEl);
    
    localStorage.setItem(`advent-day-${day}`, 'opened');
    
    // Show message
    setTimeout(() => {
        alert(`🎉 Day ${day} surprise: ${surprise}\n\nMerry Christmas! Keep checking back each day for more surprises!`);
    }, 500);
}

// Music Player
let currentSongIndex = 0;
let isPlaying = false;

const playlist = [
    { title: 'Jingle Bells', artist: 'Traditional' },
    { title: 'Silent Night', artist: 'Traditional' },
    { title: 'Deck the Halls', artist: 'Traditional' },
    { title: 'We Wish You a Merry Christmas', artist: 'Traditional' },
    { title: 'O Holy Night', artist: 'Traditional' },
    { title: 'Joy to the World', artist: 'Traditional' },
    { title: 'The First Noel', artist: 'Traditional' },
    { title: 'Hark! The Herald Angels Sing', artist: 'Traditional' },
    { title: 'O Come All Ye Faithful', artist: 'Traditional' },
    { title: 'Away in a Manger', artist: 'Traditional' }
];

function initMusicPlayer() {
    updateSongInfo();
    
    const musicToggle = document.getElementById('musicToggle');
    musicToggle.addEventListener('click', toggleMusicFromNav);
}

function initPlaylist() {
    const playlistEl = document.getElementById('playlist');
    
    playlist.forEach((song, index) => {
        const item = document.createElement('div');
        item.className = 'playlist-item';
        if (index === 0) item.classList.add('active');
        
        item.innerHTML = `
            <div>
                <div style="font-weight: bold; color: var(--christmas-gold);">${song.title}</div>
                <div style="font-size: 0.9rem; color: var(--christmas-light-gold);">${song.artist}</div>
            </div>
            <div>🎵</div>
        `;
        
        item.addEventListener('click', () => {
            currentSongIndex = index;
            updateSongInfo();
            updatePlaylist();
        });
        
        playlistEl.appendChild(item);
    });
}

function updateSongInfo() {
    document.getElementById('songTitle').textContent = playlist[currentSongIndex].title;
    document.getElementById('songArtist').textContent = playlist[currentSongIndex].artist;
}

function togglePlay() {
    isPlaying = !isPlaying;
    const playBtn = document.getElementById('playBtn');
    const vinyl = document.querySelector('.vinyl-record');
    
    if (isPlaying) {
        playBtn.textContent = '⏸️';
        vinyl.classList.add('playing');
    } else {
        playBtn.textContent = '▶️';
        vinyl.classList.remove('playing');
    }
}

function previousSong() {
    currentSongIndex = (currentSongIndex - 1 + playlist.length) % playlist.length;
    updateSongInfo();
    updatePlaylist();
}

function nextSong() {
    currentSongIndex = (currentSongIndex + 1) % playlist.length;
    updateSongInfo();
    updatePlaylist();
}

function updatePlaylist() {
    const items = document.querySelectorAll('.playlist-item');
    items.forEach((item, index) => {
        if (index === currentSongIndex) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });
}

function toggleMusicFromNav() {
    const btn = document.getElementById('musicToggle');
    const vinyl = document.querySelector('.vinyl-record');
    
    if (btn.classList.contains('playing')) {
        btn.classList.remove('playing');
        btn.textContent = '🎵 Play Music';
        vinyl.classList.remove('playing');
        isPlaying = false;
        const playBtn = document.getElementById('playBtn');
        if (playBtn) playBtn.textContent = '▶️';
    } else {
        btn.classList.add('playing');
        btn.textContent = '🎵 Music Playing';
        vinyl.classList.add('playing');
        isPlaying = true;
        const playBtn = document.getElementById('playBtn');
        if (playBtn) playBtn.textContent = '⏸️';
    }
}

// Modal Functions
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.classList.add('active');
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.classList.remove('active');
}

// Tree Decorator
function openTreeDecorator() {
    openModal('treeDecoratorModal');
}

let ornamentCount = 0;

function addOrnament(emoji) {
    const tree = document.getElementById('decoratorTree');
    const ornament = document.createElement('div');
    ornament.className = 'placed-ornament';
    ornament.textContent = emoji;
    ornament.style.left = Math.random() * 80 + 10 + '%';
    ornament.style.top = Math.random() * 80 + 10 + '%';
    
    // Make draggable
    makeDraggable(ornament);
    
    tree.appendChild(ornament);
    ornamentCount++;
}

function makeDraggable(element) {
    let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    
    element.onmousedown = dragMouseDown;
    
    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        document.onmousemove = elementDrag;
    }
    
    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        element.style.top = (element.offsetTop - pos2) + "px";
        element.style.left = (element.offsetLeft - pos1) + "px";
    }
    
    function closeDragElement() {
        document.onmouseup = null;
        document.onmousemove = null;
    }
}

function clearTree() {
    const ornaments = document.querySelectorAll('.placed-ornament');
    ornaments.forEach(ornament => ornament.remove());
    ornamentCount = 0;
}

function saveTree() {
    alert('🎄 Your beautiful Christmas tree has been saved! 📸\n\nYour creation is now preserved in your browser!');
}

// Santa Letter
function openSantaLetter() {
    openModal('santaLetterModal');
}

function sendLetterToSanta() {
    const name = document.getElementById('childName').value;
    const age = document.getElementById('childAge').value;
    const letter = document.getElementById('letterContent').value;
    const goodBehavior = document.getElementById('goodBehavior').checked;
    
    if (!name || !age || !letter) {
        alert('Please fill in all fields before sending your letter to Santa! 🎅');
        return;
    }
    
    if (!goodBehavior) {
        alert('Don\'t forget to promise you\'ve been good! Santa is watching! 👀🎅');
        return;
    }
    
    // Save letter
    const letters = JSON.parse(localStorage.getItem('santaLetters') || '[]');
    letters.push({
        name,
        age,
        letter,
        date: new Date().toISOString()
    });
    localStorage.setItem('santaLetters', JSON.stringify(letters));
    
    alert(`✉️ Dear ${name},\n\nYour letter has been sent to the North Pole! 🎅🏠\n\nSanta will read it soon. Keep being good!\n\n🎄 Merry Christmas! 🎁`);
    
    // Clear form
    document.getElementById('childName').value = '';
    document.getElementById('childAge').value = '';
    document.getElementById('letterContent').value = '';
    document.getElementById('goodBehavior').checked = false;
    
    closeModal('santaLetterModal');
}

// Card Creator
function openCardCreator() {
    openModal('cardCreatorModal');
}

function updateCardEmoji(emoji) {
    document.getElementById('cardEmoji').textContent = emoji;
}

function updateCardMessage() {
    const message = document.getElementById('cardMessageInput').value;
    document.getElementById('cardMessage').textContent = message;
}

function updateCardSubtext() {
    const subtext = document.getElementById('cardSubtextInput').value;
    document.getElementById('cardSubtext').textContent = subtext;
}

function updateCardFrom() {
    const from = document.getElementById('cardFromInput').value;
    document.getElementById('cardFrom').textContent = from;
}

function downloadCard() {
    alert('🎨 Your Christmas card design has been saved! 📥\n\nYou can now share it with your loved ones!\n\n🎄 Merry Christmas! 🎁');
}

// Wish List
function openWishList() {
    openModal('wishListModal');
    loadWishList();
}

function addWish() {
    const input = document.getElementById('wishInput');
    const wish = input.value.trim();
    
    if (!wish) return;
    
    const wishes = JSON.parse(localStorage.getItem('christmasWishes') || '[]');
    wishes.push(wish);
    localStorage.setItem('christmasWishes', JSON.stringify(wishes));
    
    input.value = '';
    loadWishList();
}

function loadWishList() {
    const wishList = document.getElementById('wishList');
    if (!wishList) return;
    
    const wishes = JSON.parse(localStorage.getItem('christmasWishes') || '[]');
    
    wishList.innerHTML = '';
    
    if (wishes.length === 0) {
        wishList.innerHTML = '<p style="text-align: center; color: var(--christmas-light-gold); padding: 2rem;">Your wish list is empty. Add your Christmas wishes! 🎁</p>';
        return;
    }
    
    wishes.forEach((wish, index) => {
        const item = document.createElement('li');
        item.className = 'wish-item';
        item.innerHTML = `
            <span>🎁 ${wish}</span>
            <button class="delete-btn" onclick="deleteWish(${index})">Delete</button>
        `;
        wishList.appendChild(item);
    });
}

function deleteWish(index) {
    const wishes = JSON.parse(localStorage.getItem('christmasWishes') || '[]');
    wishes.splice(index, 1);
    localStorage.setItem('christmasWishes', JSON.stringify(wishes));
    loadWishList();
}

// Christmas Trivia
let currentQuestion = 0;
let score = 0;

const triviaQuestions = [
    {
        question: "What do people traditionally put on top of a Christmas tree?",
        options: ["A star or angel", "A bell", "A snowflake", "A candy cane"],
        correct: 0
    },
    {
        question: "In which country did the tradition of putting up a Christmas tree originate?",
        options: ["United States", "England", "Germany", "France"],
        correct: 2
    },
    {
        question: "What are the traditional Christmas colors?",
        options: ["Blue and white", "Red and green", "Gold and silver", "Purple and orange"],
        correct: 1
    },
    {
        question: "How many reindeer does Santa have (including Rudolph)?",
        options: ["6", "8", "9", "12"],
        correct: 2
    },
    {
        question: "What is Frosty the Snowman's nose made of?",
        options: ["A carrot", "A button", "Coal", "A stick"],
        correct: 1
    },
    {
        question: "In the song '12 Days of Christmas,' what is given on the 5th day?",
        options: ["Five golden rings", "Five calling birds", "Five French hens", "Five turtle doves"],
        correct: 0
    },
    {
        question: "What do children typically leave out for Santa on Christmas Eve?",
        options: ["Pizza and soda", "Cookies and milk", "Cake and juice", "Candy and water"],
        correct: 1
    },
    {
        question: "What is the name of the Grinch's dog?",
        options: ["Buddy", "Max", "Charlie", "Sam"],
        correct: 1
    },
    {
        question: "Which country started the tradition of exchanging gifts?",
        options: ["Italy", "Greece", "Rome", "Egypt"],
        correct: 0
    },
    {
        question: "What Christmas beverage is also known as 'milk punch'?",
        options: ["Hot chocolate", "Eggnog", "Apple cider", "Mulled wine"],
        correct: 1
    }
];

function openTrivia() {
    openModal('triviaModal');
    currentQuestion = 0;
    score = 0;
    document.getElementById('triviaScore').textContent = score;
    showTriviaQuestion();
}

function showTriviaQuestion() {
    if (currentQuestion >= triviaQuestions.length) {
        showTriviaResults();
        return;
    }
    
    const question = triviaQuestions[currentQuestion];
    document.getElementById('triviaQuestion').textContent = question.question;
    document.getElementById('triviaResult').textContent = '';
    document.getElementById('triviaResult').className = 'trivia-result';
    document.getElementById('nextTriviaBtn').style.display = 'none';
    
    const optionsEl = document.getElementById('triviaOptions');
    optionsEl.innerHTML = '';
    
    question.options.forEach((option, index) => {
        const btn = document.createElement('div');
        btn.className = 'trivia-option';
        btn.textContent = option;
        btn.addEventListener('click', () => checkTriviaAnswer(index, btn));
        optionsEl.appendChild(btn);
    });
}

function checkTriviaAnswer(selected, btn) {
    const question = triviaQuestions[currentQuestion];
    const options = document.querySelectorAll('.trivia-option');
    
    // Disable all options
    options.forEach(opt => {
        opt.style.pointerEvents = 'none';
    });
    
    if (selected === question.correct) {
        btn.classList.add('correct');
        score++;
        document.getElementById('triviaScore').textContent = score;
        document.getElementById('triviaResult').textContent = '🎉 Correct! Great job!';
        document.getElementById('triviaResult').className = 'trivia-result correct';
    } else {
        btn.classList.add('incorrect');
        options[question.correct].classList.add('correct');
        document.getElementById('triviaResult').textContent = '❌ Oops! The correct answer is highlighted.';
        document.getElementById('triviaResult').className = 'trivia-result incorrect';
    }
    
    document.getElementById('nextTriviaBtn').style.display = 'block';
}

function nextTrivia() {
    currentQuestion++;
    showTriviaQuestion();
}

function showTriviaResults() {
    const percentage = (score / triviaQuestions.length) * 100;
    let message = '';
    
    if (percentage === 100) {
        message = '🎉 Perfect Score! You\'re a Christmas expert! 🎅';
    } else if (percentage >= 80) {
        message = '🌟 Excellent! You know your Christmas trivia! 🎄';
    } else if (percentage >= 60) {
        message = '✨ Good job! You did well! 🎁';
    } else {
        message = '🎄 Keep learning about Christmas traditions! ⛄';
    }
    
    document.getElementById('triviaQuestion').innerHTML = `
        <h3>Quiz Complete!</h3>
        <p style="margin-top: 1rem;">You scored ${score} out of ${triviaQuestions.length}</p>
        <p style="margin-top: 1rem;">${message}</p>
    `;
    document.getElementById('triviaOptions').innerHTML = '';
    document.getElementById('triviaResult').textContent = '';
    
    document.getElementById('nextTriviaBtn').textContent = 'Play Again';
    document.getElementById('nextTriviaBtn').style.display = 'block';
    document.getElementById('nextTriviaBtn').onclick = () => {
        document.getElementById('nextTriviaBtn').textContent = 'Next Question';
        document.getElementById('nextTriviaBtn').onclick = nextTrivia;
        openTrivia();
    };
}

// Gingerbread Designer
function openGingerbread() {
    openModal('gingerbreadModal');
}

function addGBDecoration(emoji) {
    const container = document.getElementById('gbDecorations');
    const decoration = document.createElement('div');
    decoration.className = 'gb-decoration';
    decoration.textContent = emoji;
    decoration.style.left = Math.random() * 80 + 10 + '%';
    decoration.style.top = Math.random() * 80 + 10 + '%';
    
    makeDraggable(decoration);
    
    container.appendChild(decoration);
}

function clearGingerbread() {
    const decorations = document.querySelectorAll('.gb-decoration');
    decorations.forEach(decoration => decoration.remove());
}

function saveGingerbread() {
    alert('🍪 Your gingerbread design has been saved! 📸\n\nYour delicious creation is preserved!\n\n🎄 Merry Christmas! 🎅');
}

// Close modals when clicking outside
window.addEventListener('click', function(event) {
    if (event.target.classList.contains('modal')) {
        event.target.classList.remove('active');
    }
});

// Keyboard shortcuts
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        const activeModal = document.querySelector('.modal.active');
        if (activeModal) {
            activeModal.classList.remove('active');
        }
    }
});

// Add sparkle effect on hover
document.addEventListener('mousemove', function(e) {
    // Occasionally create sparkles
    if (Math.random() > 0.98) {
        createSparkle(e.clientX, e.clientY);
    }
});

function createSparkle(x, y) {
    const sparkle = document.createElement('div');
    sparkle.textContent = '✨';
    sparkle.style.position = 'fixed';
    sparkle.style.left = x + 'px';
    sparkle.style.top = y + 'px';
    sparkle.style.fontSize = '20px';
    sparkle.style.pointerEvents = 'none';
    sparkle.style.zIndex = '9999';
    sparkle.style.animation = 'sparkleFloat 1s ease-out forwards';
    
    document.body.appendChild(sparkle);
    
    setTimeout(() => {
        sparkle.remove();
    }, 1000);
}

// Add CSS for sparkle animation if not already present
const style = document.createElement('style');
style.textContent = `
    @keyframes sparkleFloat {
        0% {
            transform: translateY(0) scale(1);
            opacity: 1;
        }
        100% {
            transform: translateY(-50px) scale(0);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

console.log('🎄 Merry Christmas! 🎅 Website loaded successfully!');
