// Function to simulate search suggestions
function showSuggestions() {
    const searchQuery = document.getElementById('search-bar').value;
    const suggestionsBox = document.getElementById('suggestions');
    if (searchQuery.length > 0) {
        const suggestions = [
            'Project 1: AI in Engineering',
            'Course 2: Introduction to Robotics',
            'Blog 3: Engineering Innovations',
            'Project 4: Autonomous Vehicles'
        ];
        
        // Filter suggestions based on search query
        const filteredSuggestions = suggestions.filter(item => item.toLowerCase().includes(searchQuery.toLowerCase()));
        
        suggestionsBox.innerHTML = '';
        filteredSuggestions.forEach(suggestion => {
            const suggestionItem = document.createElement('p');
            suggestionItem.textContent = suggestion;
            suggestionItem.onclick = function() {
                document.getElementById('search-bar').value = suggestion;
                suggestionsBox.innerHTML = '';
            };
            suggestionsBox.appendChild(suggestionItem);
        });
        
        suggestionsBox.style.display = filteredSuggestions.length ? 'block' : 'none';
    } else {
        suggestionsBox.style.display = 'none';
    }
}

// Function to show a search alert
function searchFunction() {
    const query = document.getElementById('search-bar').value;
    if (query) {
        alert("Searching for: " + query);
    } else {
        alert("Please enter a search term.");
    }
}

// Function to show an alert when clicking on cards
function showAlert(section) {
    alert("You clicked on the " + section);
}

// Login Form Validation
function validateLogin() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === "" || password === "") {
        alert("Please fill in both fields.");
        return false;
    }

    alert("Login successful! Welcome, " + username + ".");
    window.location.href = "index.html";
    return false;
}




// Projects Page - Show Project Details
function showProjectDetails(projectId) {
    const projectDetails = {
        "ev-chassis": {
            title: "Electric Vehicle Chassis Design",
            description: "Detailed design and analysis of an electric vehicle chassis using FEA.",
            moreInfo: "Research papers and project links here."
        },
        "robot-arm": {
            title: "Robotic Arm Design",
            description: "Design a robotic arm for industrial applications using advanced sensors.",
            moreInfo: "Link to research papers and more information."
        }
    };

    const project = projectDetails[projectId];
    if (project) {
        alert(`${project.title}\n\n${project.description}\n\nMore Info: ${project.moreInfo}`);
    }
}

document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('click', () => {
        const projectId = card.getAttribute('data-project-id');
        showProjectDetails(projectId);
    });
});

// Courses Page - Search Courses
function searchCourses() {
    const searchQuery = document.getElementById('course-search').value.toLowerCase();
    const courseCards = document.querySelectorAll('.course-card');

    courseCards.forEach(card => {
        const courseTitle = card.querySelector('h3').innerText.toLowerCase();
        if (courseTitle.includes(searchQuery)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

document.getElementById('course-search').addEventListener('input', searchCourses);

// Contact Us Form Validation
function validateContactForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name === "" || email === "" || message === "") {
        alert("All fields are required.");
        return false;
    }

    alert("Your message has been sent! We will get back to you soon.");
    document.getElementById('contact-form').reset();
    return false;
}

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    validateContactForm();
});