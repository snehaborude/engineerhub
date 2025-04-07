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