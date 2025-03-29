let menuIcon = document.querySelector(".menu-icon");
let sidebar = document.querySelector(".sidebar");
let container = document.querySelector(".container");

// let menuIcon = document.querySelector(".menu-icon")

menuIcon.onclick = function(){
    sidebar.classList.toggle("small-sidebar");
    container.classList.toggle("large-container");    
    
}
const apiKey=AIzaSyBCF_e5Cpg1a9Nb-mHq0IVKDJ3vqzsZ39Q;
// Select elements
const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.body;

// Function to set the theme
function setTheme(isDarkMode) {
    if (isDarkMode) {
        body.classList.add('dark-mode');
    } else {
        body.classList.remove('dark-mode');
    }
}

// Function to save theme preference
function saveThemePreference(isDarkMode) {
    localStorage.setItem('darkMode', isDarkMode);
}

// Load theme preference on page load
const savedTheme = localStorage.getItem('darkMode');
if (savedTheme === 'true') {
    setTheme(true);
    darkModeToggle.checked = true;
}

// Toggle event listener
darkModeToggle.addEventListener('change', () => {
    const isDarkMode = darkModeToggle.checked;
    setTheme(isDarkMode);
    saveThemePreference(isDarkMode);
});