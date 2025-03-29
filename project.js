// Theme Toggle Functionality
const themeToggleButton = document.querySelector('.theme-toggle');
const currentTheme = localStorage.getItem('theme') || 'light';

if (currentTheme === 'dark') {
    document.body.classList.add('dark-theme');
    themeToggleButton.textContent = '🌞'; // Sun icon for dark mode
} else {
    document.body.classList.remove('dark-theme');
    themeToggleButton.textContent = '🌙'; // Moon icon for light mode
}

function toggleTheme() {
    document.body.classList.toggle('dark-theme');
    if (document.body.classList.contains('dark-theme')) {
        localStorage.setItem('theme', 'dark');
        themeToggleButton.textContent = '🌞';
    } else {
        localStorage.setItem('theme', 'light');
        themeToggleButton.textContent = '🌙';
    }
}

// Search Functionality for Projects
document.getElementById('search-bar').addEventListener('input', searchProjects);

const projects = [
    { name: 'AI in Healthcare', description: 'AI model for diagnosing diseases', algorithms: 'Deep Learning, Neural Networks', researchPaper: 'https://research-paper.com/ai-healthcare' },
    { name: 'Smart Traffic System', description: 'Traffic management with IoT and AI', algorithms: 'IoT, Machine Learning, Data Analytics', researchPaper: 'https://research-paper.com/smart-traffic' }
];

function searchProjects() {
    const searchQuery = document.getElementById('search-bar').value.toLowerCase();
    const suggestionsBox = document.getElementById('suggestions');
    const projectCards = document.getElementById('project-cards');

    suggestionsBox.innerHTML = ''; // Clear previous results
    projectCards.innerHTML = ''; // Clear existing projects

    if (searchQuery.length > 2) {
        const filteredProjects = projects.filter(project => project.name.toLowerCase().includes(searchQuery));

        if (filteredProjects.length > 0) {
            filteredProjects.forEach(project => {
                const suggestionElement = document.createElement('div');
                suggestionElement.classList.add('suggestion-item');
                suggestionElement.textContent = project.name;
                suggestionElement.onclick = () => viewProjectDetails(project.name);
                suggestionsBox.appendChild(suggestionElement);

                // Also populate project cards dynamically
                let card = `
                    <div class="project-card">
                        <h3>${project.name}</h3>
                        <p>${project.description}</p>
                        <a href="#" class="btn" onclick="viewProjectDetails('${project.name}')">View Details</a>
                    </div>`;
                projectCards.innerHTML += card;
            });
            suggestionsBox.style.display = 'block';
        } else {
            suggestionsBox.innerHTML = `<p class="not-found">No projects found. Try a different search term.</p>`;
            suggestionsBox.style.display = 'block';
            projectCards.innerHTML = `<p class="not-found">No projects found.</p>`;
        }
    } else {
        suggestionsBox.style.display = 'none'; // Hide suggestions if input is too short
        projects.forEach(project => {
            let card = `
                <div class="project-card">
                    <h3>${project.name}</h3>
                    <p>${project.description}</p>
                    <a href="#" class="btn" onclick="viewProjectDetails('${project.name}')">View Details</a>
                </div>`;
            projectCards.innerHTML += card;
        });
    }
}

// View Project Details (opens a modal or section)
function viewProjectDetails(projectName) {
    const project = projects.find(p => p.name === projectName);
    if (project) {
        const projectDetailsSection = document.getElementById('project-details');
        const projectInfo = document.getElementById('project-info');
        projectDetailsSection.style.display = 'block';
        projectInfo.innerHTML = `
            <h3>${project.name}</h3>
            <p><strong>Description:</strong> ${project.description}</p>
            <p><strong>Algorithms:</strong> ${project.algorithms}</p>
            <p><strong>Research Paper:</strong> <a href="${project.researchPaper}" target="_blank">Click here</a></p>
        `;
    }
}

// Close Project Details Section
function closeProjectDetails() {
    document.getElementById('project-details').style.display = 'none';
}

// Ensure the search bar still works after clicking "View Details"
document.getElementById('search-bar').addEventListener('click', () => {
    document.getElementById('suggestions').style.display = 'block';
});
    