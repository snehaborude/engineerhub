// Toggle Theme Function
function toggleTheme() {
    const body = document.body;
    const icon = document.getElementById('theme-icon');

    // Toggle 'dark-mode' class on body
    body.classList.toggle('dark-mode');

    // Change icon image (optional)
    if (body.classList.contains('dark-mode')) {
        icon.src = 'images/sun-icon'; // Light mode icon
        icon.alt = 'Switch to Light Mode';
    } else {
        icon.src = 'images/moon-icon.png'; // Dark mode icon
        icon.alt = 'Switch to Dark Mode';
    }

    // Optional: Save user's theme preference
    localStorage.setItem('theme', body.classList.contains('dark-mode') ? 'dark' : 'light');
}

// On page load, apply saved theme if any
window.onload = () => {
    const savedTheme = localStorage.getItem('theme');
    const body = document.body;
    const icon = document.getElementById('theme-icon');

    if (savedTheme === 'dark') {
        body.classList.add('dark-mode');
        icon.src = 'images/sun-icon.png';
        icon.alt = 'Switch to Light Mode';
    } else {
        icon.src = 'images/moon-icon.png';
        icon.alt = 'Switch to Dark Mode';
    }
};


// 2. Search Bar Suggestions Logic
function showSuggestions() {
    const searchQuery = document.getElementById('search-bar').value.toLowerCase();
    const suggestionsBox = document.getElementById('suggestions');
    
    // Placeholder for an example of search suggestions
    const sampleData = [
        'Project 1: AI in Healthcare',
        'Course: Machine Learning Basics',
        'Project 2: Smart Traffic System',
        'Course: Advanced Robotics'
    ];

    // Clear previous suggestions
    suggestionsBox.innerHTML = '';

    if (searchQuery.length > 2) {
        const filteredSuggestions = sampleData.filter(item => item.toLowerCase().includes(searchQuery));
        
        if (filteredSuggestions.length > 0) {
            filteredSuggestions.forEach(suggestion => {
                const suggestionElement = document.createElement('div');
                suggestionElement.classList.add('suggestion-item');
                suggestionElement.textContent = suggestion;
                suggestionsBox.appendChild(suggestionElement);
            });
        } else {
            suggestionsBox.innerHTML = '<p>No results found.</p>';
        }
    }
}

// 3. Image Gallery Slider (Automatic & Manual Navigation)
let slideIndex = 0;
const slides = document.getElementsByClassName('slide');
const totalSlides = slides.length;

function showSlides() {
    for (let i = 0; i < totalSlides; i++) {
        slides[i].style.display = 'none'; // Hide all slides
    }

    slideIndex++;
    if (slideIndex > totalSlides) {
        slideIndex = 1; // Reset to the first slide
    }

    slides[slideIndex - 1].style.display = 'block'; // Show the current slide
}

// Manual navigation (next/prev)
function moveSlide(n) {
    slideIndex += n;
    if (slideIndex > totalSlides) {
        slideIndex = 1; // Reset to the first slide
    } else if (slideIndex < 1) {
        slideIndex = totalSlides; // Reset to the last slide
    }
    showSlides();
}

// Automatically change slides every 3 seconds
setInterval(showSlides, 3000);

// Show the first slide initially
showSlides();

// 4. Additional Interactions (No action needed here, already handled in HTML/CSS)
// Like any button click, or event handler interactions