// 1. Theme Changer Logic (Light / Dark Mode)
const themeToggleButton = document.querySelector('.theme-toggle');

// Check if the user has a saved theme preference
const currentTheme = localStorage.getItem('theme') || 'light';

// Set the initial theme
if (currentTheme === 'dark') {
    document.body.classList.add('dark-theme');
    themeToggleButton.textContent = '🌞'; // Sun icon for dark mode
} else {
    document.body.classList.remove('dark-theme');
    themeToggleButton.textContent = '🌙'; // Moon icon for light mode
}

// Function to toggle theme
function toggleTheme() {
    document.body.classList.toggle('dark-theme');
    // Save the theme preference in localStorage
    if (document.body.classList.contains('dark-theme')) {
        localStorage.setItem('theme', 'dark');
        themeToggleButton.textContent = '🌞'; // Sun icon for dark mode
    } else {
        localStorage.setItem('theme', 'light');
        themeToggleButton.textContent = '🌙'; // Moon icon for light mode
    }
}

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