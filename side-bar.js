let menuIcon = document.querySelector(".menu-icon");
let sidebar = document.querySelector(".sidebar");
let container = document.querySelector(".container");

// let menuIcon = document.querySelector(".menu-icon")

menuIcon.onclick = function(){
    sidebar.classList.toggle("small-sidebar");
    container.classList.toggle("large-container");    
    
}
const apiKey=AIzaSyBCF_e5Cpg1a9Nb-mHq0IVKDJ3vqzsZ39Q;
// Get toggle switch and store user's preference in local storage
const darkModeToggle = document.getElementById("darkModeToggle");
const body = document.body;

// Check local storage for dark mode preference
if (localStorage.getItem("darkMode") === "enabled") {
    body.classList.add("dark-mode");
    darkModeToggle.checked = true;
}

// Toggle dark mode on checkbox change
darkModeToggle.addEventListener("change", () => {
    if (darkModeToggle.checked) {
        body.classList.add("dark-mode");
        localStorage.setItem("darkMode", "enabled"); // Save preference
    } else {
        body.classList.remove("dark-mode");
        localStorage.setItem("darkMode", "disabled"); // Save preference
    }
});


document.getElementById("searchButton").addEventListener("click", function () {
    let query = document.getElementById("searchInput").value.toLowerCase();
    let videos = document.querySelectorAll(".vid-list");

    videos.forEach(video => {
        let title = video.querySelector(".vid-info a").innerText.toLowerCase();
        if (title.includes(query)) {
            video.style.display = "block"; // Show matching videos
        } else {
            video.style.display = "none"; // Hide non-matching videos
        }
    });
});
