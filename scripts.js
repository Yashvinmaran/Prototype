// Selecting DOM elements
const loginForm = document.getElementById('loginForm');
const projectForm = document.getElementById('projectForm');
const updateForm = document.getElementById('updateForm');
const messageForm = document.getElementById('messageForm');
const projectsList = document.getElementById('projects');
const messagesList = document.getElementById('messages');
const fundReportsList = document.getElementById('funds');

// User roles and login simulation
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (email === 'admin@example.com' && password === 'admin123') {
        document.getElementById('adminConsole').classList.add('active');
        document.getElementById('login').classList.remove('active');
    } else if (email === 'researcher@example.com' && password === 'researcher123') {
        document.getElementById('researcherConsole').classList.add('active');
        document.getElementById('login').classList.remove('active');
    } else {
        alert('Invalid login details');
    }
});

// Handle project creation (Admin)
projectForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const projectTitle = document.getElementById('projectTitle').value;
    const principalAgency = document.getElementById('principalAgency').value;
    const projectCode = `P${Math.floor(Math.random() * 1000)}`;

    const newProject = document.createElement('li');
    newProject.textContent = `${projectTitle} - ${principalAgency} (Code: ${projectCode})`;
    projectsList.appendChild(newProject);

    // Automatically generate project code
    document.getElementById('projectCode').value = projectCode;

    // Clear form
    projectForm.reset();
});

// Handle progress update and fund utilization (Researcher)
updateForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const progress = document.getElementById('progress').value;
    const fundUtilization = document.getElementById('fundUtilization').value;

    const newReport = document.createElement('li');
    newReport.textContent = `Progress: ${progress}, Fund Utilization: ${fundUtilization}`;
    fundReportsList.appendChild(newReport);

    updateForm.reset();
});

// Handle new messages
messageForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const message = document.getElementById('message').value;

    const newMessage = document.createElement('li');
    newMessage.textContent = `New Message: ${message}`;
    messagesList.appendChild(newMessage);

    messageForm.reset();
});

// Search projects
const searchProjects = document.getElementById('searchProjects');
searchProjects.addEventListener('input', function() {
    const searchTerm = this.value.toLowerCase();
    const projectItems = projectsList.getElementsByTagName('li');
    Array.from(projectItems).forEach(function(project) {
        const title = project.textContent.toLowerCase();
        if (title.includes(searchTerm)) {
            project.style.display = 'block';
        } else {
            project.style.display = 'none';
        }
    });
});
