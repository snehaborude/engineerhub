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
    { name: 'Bug Tracking System', domain:'cloud computing', description: 'AI model for diagnosing diseases', algorithms: 'Deep Learning, Neural Networks', researchPaper: 'https://www.dropbox.com/scl/fi/gmknbfwrut3ekomnjhted/21.Bug-Tracking-System.docx?rlkey=zc89g7nguxbxtuf7rql6s6rs5&st=khb4z6li&dl=1' },
    { name: 'File Storage System using hybrid crptographic',domain:'cloud computing,', description: 'Traffic management with IoT and AI', algorithms: 'IoT, Machine Learning, Data Analytics', researchPaper: 'https://www.dropbox.com/scl/fi/xgosql98m06mgicsawe0p/22.File-Storage-System-Using-Hybrid-Cryptography.docx?rlkey=b1778jsr3tdyei57ouwpnquxj&st=ubkzd4kr&dl=1' },
    { name: 'E-learning', domain:'cloud computing', description: 'Traffic management with IoT and AI', algorithms: 'IoT, Machine Learning, Data Analytics', researchPaper: 'https://www.dropbox.com/scl/fi/1ltkf5mf86e2pzxgdt3qv/25.E-learning.docx?rlkey=9drp7h861tponlcczi5gtmnyw&st=pxkv6mq0&dl=1' },
    { name: 'online BookStore', domain:'cloud computing',description: 'Traffic management with IoT and AI', algorithms: 'IoT, Machine Learning, Data Analytics', researchPaper: 'https://www.dropbox.com/scl/fi/792x96x3mdzodo2qs33my/26.Online-Bookstore.docx?rlkey=w0ojql7r65r464radzyasl1eq&st=rantcecy&dl=1' },
    { name: 'Information Chatbot',domain:'cloud computing' ,description: 'Traffic management with IoT and AI', algorithms: 'IoT, Machine Learning, Data Analytics', researchPaper: 'https://www.dropbox.com/scl/fi/4l2mijjtqvze6beluvy45/27.Information-Chatbot.docx?rlkey=ejy3l9mvcyulvb5l47pff6ydi&st=a7sqhaka&dl=1' },
    { name: 'Online Blood Bank System', domain:'cloud computing', description: 'Traffic management with IoT and AI', algorithms: 'IoT, Machine Learning, Data Analytics', researchPaper: 'https://www.dropbox.com/scl/fi/ekkeci1w1oy0g3vgoblk9/28.Online-Blood-Bank-System.docx?rlkey=zmze05uciokg6zj8b9fdq50m9&st=0rpw1m63&dl=1' },
    { name: 'personal Cloud Storage System', description: 'Traffic management with IoT and AI', algorithms: 'IoT, Machine Learning, Data Analytics', researchPaper: 'https://www.dropbox.com/scl/fi/voju8rtu4e7w8w9rfbr3n/29.Personal-Cloud-Storage-System.docx?rlkey=xii9x43kc4foedslqp6nllqhi&st=4ysrg7v1&dl=1' },
    { name: 'Automation of University', description: 'Traffic management with IoT and AI', algorithms: 'IoT, Machine Learning, Data Analytics', researchPaper: 'https://www.dropbox.com/scl/fi/op1pyy11689mxhrzkcslc/30.Automation-of-University-or-College-Data-System.docx?rlkey=tieiqjpep0hvsz72l2i9s9tb6&st=0n75en8e&dl=1' },
    { name: 'Creating to do list', description: 'Traffic management with IoT and AI', algorithms: 'IoT, Machine Learning, Data Analytics', researchPaper: 'https://www.dropbox.com/scl/fi/qm0ur30tvrqjz085zc5pb/11.-Creating-a-To-do-list.docx?rlkey=vl03ky0yk6c4hcpxsmz2p7efj&st=zgp27orf&dl=1' },
    { name: 'Email spam filter', description: 'Traffic management with IoT and AI', algorithms: 'IoT, Machine Learning, Data Analytics', researchPaper: 'https://www.dropbox.com/scl/fi/2baal2gk1fkp839xbrklv/12.Email-Spam-Filter.docx?rlkey=9dup1924u3wpw7nw696ajyn5a&st=l6h63s9q&dl=1' },
    { name: 'Real-time traffic analysis', description: 'Traffic management with IoT and AI', algorithms: 'IoT, Machine Learning, Data Analytics', researchPaper:'https://www.dropbox.com/scl/fi/3hycywvu52xhlmdmoyyg3/13.-Real-time-traffic-analysis?rlkey=g2siojp165d3g8pmp949l5o1o&st=bftlnxgy&dl=1' },
    { name: 'Real-Estate property search', description: 'Traffic management with IoT and AI', algorithms: 'IoT, Machine Learning, Data Analytics', researchPaper: 'https://www.dropbox.com/scl/fi/8ihmat3ovnhfdnfu87kh6/14.Real-Estate-Property-Search.docx?rlkey=60srzl32omm4j53a8vg21lzrp&st=tc93ponl&dl=1' },
    { name: 'Building a file zipper', description: 'Traffic management with IoT and AI', algorithms: 'IoT, Machine Learning, Data Analytics', researchPaper: 'https://www.dropbox.com/scl/fi/z38e3a54bhvgyw8l3su13/15.Building-a-File-Zipper.docx?rlkey=vb1q2y89d9iq68mrseu4dlvfw&st=2ipcbore&dl=1' },
    { name:'Library Management System', description: 'Traffic management with IoT and AI', algorithms: 'IoT, Machine Learning, Data Analytics', researchPaper: 'https://www.dropbox.com/scl/fi/fosw5i4n8i0zep6a76bzj/16.-Library-Management-System.docx?rlkey=kd1qi2ws7a7pvjmfrvufyajr2&st=nrfqmzdp&dl=1' },
    { name: 'Building', description: 'Traffic management with IoT and AI', algorithms: 'IoT, Machine Learning, Data Analytics', researchPaper: 'https://www.dropbox.com/scl/fi/p7l17yr4pppwye6dj52rw/17.Building-a-Crossword-Puzzle-Game.docx?rlkey=qiljizxd2i1na2vn5e163y69m&st=o3d4f7tt&dl=1' },
    { name: 'Travel planner using graph', description: 'Traffic management with IoT and AI', algorithms: 'IoT, Machine Learning, Data Analytics', researchPaper: 'https://www.dropbox.com/scl/fi/vlezbid8c877zfl1ladbl/19.Travel-Planner-Using-Graph.docx?rlkey=uk9kh9ljbil3q7nuao7i51xat&st=mcturjlq&dl=1' },
    { name: 'Banking Mangement System', description: 'Traffic management with IoT and AI', algorithms: 'IoT, Machine Learning, Data Analytics', researchPaper: 'https://www.dropbox.com/scl/fi/im3tyn8p39ew5b7gpo4cf/20.Banking-Management-System.docx?rlkey=gezhoxy9plrnq6brj1funyjh5&st=2ixbni2f&dl=1' },
    { name: 'Development and Analysis of a Line Following Robot Using Infrared Sensors', description: 'Traffic management with IoT and AI', algorithms: 'IoT, Machine Learning, Data Analytics', researchPaper:'https://drive.google.com/file/d/1lBrq6to9kVgEL3g6d1cVITqVqRtTabd6/view?usp=sharing' },
    { name: 'Obstacles  Avoidance Robot using Aurdino+Ultrasonic', description: 'Traffic management with IoT and AI', algorithms: 'IoT, Machine Learning, Data Analytics', researchPaper: 'https://www.dropbox.com/scl/fi/yxfs63ua720w85c91ms8q/2.Obstacle-Avoidance-Robot-using-Arduino-Ultrasonic-Sensorsproject.docx?rlkey=gs2eb36itaa843ohe8wltsjk5&st=kv8cf7yz&dl=1' },
    { name: 'Gesture Control Robot using Accelerometer', description: 'Traffic management with IoT and AI', algorithms: 'IoT, Machine Learning, Data Analytics', researchPaper: 'https://www.dropbox.com/scl/fi/4d4lf0ndmi6zq09beussk/3.Gesture-Controlled-Robot-Using-Accelerometer.docx?rlkey=ka587055vukzg4wf2iqn0z6jc&st=nm9x1bxt&dl=1' },
    { name: 'Self balancing Robot', description: 'Traffic management with IoT and AI', algorithms: 'IoT, Machine Learning, Data Analytics', researchPaper: 'https://www.dropbox.com/scl/fi/5vso6sxfvif6zpqo0r3g0/5.-Self-Balancing-Robot-Like-Segway.docx?rlkey=soqwksqsdidb83bpzee6fw7t2&st=8pyvqq12&dl=1' },
    { name: 'Maze solving Robot using BFS algorithm', description: 'Traffic management with IoT and AI', algorithms: 'IoT, Machine Learning, Data Analytics', researchPaper: 'https://www.dropbox.com/scl/fi/6847jzn821rnw1eow0c3e/6.Maze-Solving-Robot-Using-BFS-Algorithm.docx?rlkey=sdjoiqgv35lx209mwixvvnjw2&st=qnpqywg9&dl=1 ' },
    { name: 'Drone with Obstacles  Avoidance  using ROS', description: 'Traffic management with IoT and AI', algorithms: 'IoT, Machine Learning, Data Analytics', researchPaper: 'https://www.dropbox.com/scl/fi/nalc4qbfzpwe026yjowvw/7.Drone-with-Obstacle-Avoidance-Using-ROS.docx?rlkey=wxgreyy5nhbfn1p7ulanvaqq3&st=17i8s2c5&dl=1' },
    { name: 'Ai power face recognization', description: 'Traffic management with IoT and AI', algorithms: 'IoT, Machine Learning, Data Analytics', researchPaper: 'https://www.dropbox.com/scl/fi/jr9pywg9uaypborup4gff/8.-AI-Powered-Face-Recognition-Robot.docx?rlkey=sa89i0ehz9bi8487t3n9bkh4t&st=motwad2b&dl=1' },
    { name: 'AI Robot Using GPT + Speech (Voice Chatbot Robot)', description: 'Traffic management with IoT and AI', algorithms: 'IoT, Machine Learning, Data Analytics', researchPaper: 'https://www.dropbox.com/scl/fi/zi90ox14a5dj6mmhy2yoe/9.AI-Robot-Using-GPT.docx?rlkey=7m5d0rwwcu7b6isw4g6ssyi9v&st=07awagmf&dl=0' },
    { name: 'Pick and place Robotic arms using Aurdino', description: 'Traffic management with IoT and AI', algorithms: 'IoT, Machine Learning, Data Analytics', researchPaper: 'https://www.dropbox.com/scl/fi/3v9zdajyk7s64ftas2rfe/10.Pick-and-Place-Robotic-Arm-using-Arduino.docx?rlkey=b9v73w1nt4g5dxd61sp4ohrw5&st=rtee5lrd&dl=1' },
    { name: 'Implement a smart traffic management system using IoT and AI', description: 'Traffic management with IoT and AI', algorithms: 'IoT, Machine Learning, Data Analytics', researchPaper: 'https://research-paper.com/smart-traffic' },
    { name: 'Autonomous Vehicle Navigation using Deep learning data science', description: 'Traffic management with IoT and AI', algorithms: 'IoT, Machine Learning, Data Analytics', researchPaper: 'https://www.dropbox.com/scl/fi/raj4u2ex4f99y1s93dd87/Autonomous-Vehicle-Navigation-using-Deep-Learning-data-science-10.docx?rlkey=3gqxm4ibt0v2sfzxp7zsnnglc&st=a6cpk3bh&dl=1' },
    { name: 'autonomous Vehicle Simulation Project', description: 'Traffic management with IoT and AI', algorithms: 'IoT, Machine Learning, Data Analytics', researchPaper: 'https://www.dropbox.com/scl/fi/lwi6kb53n8fhdd056x9dq/Autonomous_Vehicle_Simulation_with_GitHub_Links.pdf?rlkey=8g9tvz3eno2fw642chz8fbvc0&st=1hmnvyye&dl=1' },
    { name: 'Job Board Website', description: 'Traffic management with IoT and AI', algorithms: 'IoT, Machine Learning, Data Analytics', researchPaper: 'https://www.dropbox.com/scl/fi/dg08kzabm0xpcfnm8dr38/Job_Board_Project_with_GitHub_Link.pdf?rlkey=6mflhkc9ig7so1s29orlzhaao&st=6b50glpg&dl=1' },
    { name: 'Online Learning Platform', description: 'Traffic management with IoT and AI', algorithms: 'IoT, Machine Learning, Data Analytics', researchPaper: 'https://www.dropbox.com/scl/fi/f198a18c0d63c37vv4dk4/Online_Learning_Platform_with_GitHub.pdf?rlkey=xxfqoxjrkjetcyr3hn9qt73wo&st=fpd9kd7c&dl=1' },
    { name: ' Personal Portfolio Website', description: 'Traffic management with IoT and AI', algorithms: 'IoT, Machine Learning, Data Analytics', researchPaper: 'https://www.dropbox.com/scl/fi/glc7p138aw94zpl9fw83w/Social_Media_Dashboard_with_GitHub_Links.pdf?rlkey=39uc3cpfpwmmwwof9ijiw0h9e&st=bp4gl8b8&dl=1' },
    { name: 'Social Media Dashboard Website', description: 'Traffic management with IoT and AI', algorithms: 'IoT, Machine Learning, Data Analytics', researchPaper: 'https://www.dropbox.com/scl/fi/baredbo88ch3tkpw2au10/Speech_Recognition_with_GitHub_Links.pdf?rlkey=47ldp616wbtp85ppb8wo3abw1&st=fizlzzye&dl=1' },
    { name: 'Stock Price Prediction Project', description: 'Traffic management with IoT and AI', algorithms: 'IoT, Machine Learning, Data Analytics', researchPaper: 'https://www.dropbox.com/scl/fi/wc4s9zddisrvr4nfcrcyw/Stock_Price_Prediction_with_GitHub_Links.pdf?rlkey=n3o1ejhwytefh1j5mm0gguem7&st=ue0yk86s&dl=1' },
    { name: 'Task Management App', description: 'Traffic management with IoT and AI', algorithms: 'IoT, Machine Learning, Data Analytics', researchPaper: 'https://www.dropbox.com/scl/fi/ecjeg26623jmq9bhgv98w/Task_Management_App_with_GitHub_Links.pdf?rlkey=imkwgv63u80tgnnwrv5m5hdep&st=3c327r28&dl=1' },
    { name: 'weather App', description: 'Traffic management with IoT and AI', algorithms: 'IoT, Machine Learning, Data Analytics', researchPaper: 'https://www.dropbox.com/scl/fi/9jc7vbjn8gs4pk2jwjdya/Weather_App_Project_Overview_with_GitHub.pdf?rlkey=dc0jwx4gs1dcv2jesp9rug9ed&st=b7co7fwu&dl=1' },
    { name: 'Financial pridiction project', description: 'Traffic management with IoT and AI', algorithms: 'IoT, Machine Learning, Data Analytics', researchPaper: 'https://www.dropbox.com/scl/fi/wi7w46hl9j5kh3qxfykrm/Financial_Prediction_Projects.pdf?rlkey=e2x87vtchpqtkziwul9eoe7jh&st=k1axegog&dl=1' },
    { name: 'Forex Rate Prediction using Ensemble Learning', description: 'Traffic management with IoT and AI', algorithms: 'IoT, Machine Learning, Data Analytics', researchPaper: 'https://www.dropbox.com/scl/fi/8xj9k884mzjco3qixly93/Forex_Rate_Prediction_Ensemble_Learning.pdf?rlkey=xzgb3nnm22xae6k6d5dnzgwhr&st=dqt4ak8i&dl=1' },
    { name: 'Cryptocurrency Price Prediction using Deep Learning', description: 'Traffic management with IoT and AI', algorithms: 'IoT, Machine Learning, Data Analytics', researchPaper: 'https://www.dropbox.com/scl/fi/i51cu4wxn01s3r8395jrz/nAlgDQAwhE.pdf?rlkey=ai65qkbruqk1x3eyezlkfvqf6&st=c00rd9mt&dl=1' },
    { name: 'House Price Prediction using ML Model', description: 'Traffic management with IoT and AI', algorithms: 'IoT, Machine Learning, Data Analytics', researchPaper: 'https://www.dropbox.com/scl/fi/nkx07xgn63lh283ftt23x/juSB6eNZ45.pdf?rlkey=jiis0ocec3a9s9qbqpxxi8t4w&st=mp2bndmx&dl=1' },
    { name: 'Gold Price Forecasting with Time Series Models', description: 'Traffic management with IoT and AI', algorithms: 'IoT, Machine Learning, Data Analytics', researchPaper: 'https://www.dropbox.com/scl/fi/nkx07xgn63lh283ftt23x/juSB6eNZ45.pdf?rlkey=jiis0ocec3a9s9qbqpxxi8t4w&st=mp2bndmx&dl=1' }















];

function searchProjects() {
    const searchQuery = document.getElementById('search-bar').value.toLowerCase();
    const suggestionsBox = document.getElementById('suggestions');
    const projectCards = document.getElementById('project-cards');

    suggestionsBox.innerHTML = ''; // Clear previous results
    projectCards.innerHTML = ''; // Clear existing projects

    if (searchQuery.length > 2) {
        const filteredProjects = projects.filter(project => project.domain.toLowerCase().includes(searchQuery));
        



        if (filteredProjects.length > 0) {
            filteredProjects.forEach(project => {
                const suggestionElement = document.createElement('div');
                suggestionElement.classList.add('suggestion-item');
                suggestionElement.textContent = project.doamin;
                suggestionElement.onclick = () => viewProjectDetails(project.domain);
                suggestionsBox.appendChild(suggestionElement);

                // Also populate project cards dynamically
                let card = `
                    <div class="project-card">
                        <h3>${project.name}</h3>
                        <p>${project.description}</p>
                        <a href="#" class="btn" onclick="viewProjectDetails('${project.domain}')">View Details</a>
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
                    <a href="#" class="btn" onclick="viewProjectDetails('${project.domain}')">View Details</a>
                </div>`;
            projectCards.innerHTML += card;
        });
    }
}

// View Project Details (opens a modal or section)
function viewProjectDetails(projectdomain) {
    const project = projects.find(p => p.name === projectdomain);
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
    