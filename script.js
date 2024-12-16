var settingsmenu = document.querySelector(".settings-menu");
var darkBtn = document.getElementById("dark-btn");

function settingsMenuToggle(){
    settingsmenu.classList.toggle("settings-menu-height");
}
darkBtn.onclick  = function(){
    darkBtn.classList.toggle("dark-btn-on");
    document.body.classList.toggle("dark-theme");

    if(localStorage.getItem("theme") == "light"){
        localStorage.setItem("theme", "dark");
    }
    else{
        localStorage.setItem("theme", "light");
    }
}

if(localStorage.getItem("theme") == "light"){
    darkBtn.classList.remove("dark-btn-on");
    document.body.classList.remove("dark-theme");
}
else if(localStorage.getItem("theme") == "dark"){
    darkBtn.classList.add("dark-btn-on");
    document.body.classList.add("dark-theme");
}
else{
    localStorage.setItem("theme", "light");
}

window.onload = function() {
    const navbarColor = localStorage.getItem('navbarColor');
    if (navbarColor) {
        document.getElementById('navbar').style.backgroundColor = navbarColor;
        document.getElementById('navbarColor').value = navbarColor;
    }
    const fontSize = localStorage.getItem('fontSize');
    if (fontSize) {
        document.body.style.fontSize = fontSize;
        document.getElementById('fontSize').checked = fontSize === '18px';
    }
}

// Change Navbar Color
function changeNavbarColor() {
    const navbar = document.getElementById('navbar');
    const color = document.getElementById('navbarColor').value;
    if (color === 'blue') {
        navbar.style.backgroundColor = '#1876f2'; // Blue
    } else if (color === 'green') {
        navbar.style.backgroundColor = '#28a745'; // Green
    } else if (color === 'yellow') {
        navbar.style.backgroundColor = '#ffc107'; // Yellow
    }
    // Store the selected color in localStorage
    localStorage.setItem('navbarColor', navbar.style.backgroundColor);
}

// Apply Font Size Change
function toggleFontSize() {
    const body = document.body;
    const fontSizeCheckbox = document.getElementById('fontSize');
    if (fontSizeCheckbox.checked) {
        body.style.fontSize = '18px'; // Larger font size
        localStorage.setItem('fontSize', '18px');
    } else {
        body.style.fontSize = '16px'; // Default font size
        localStorage.setItem('fontSize', '16px');
    }
}

// Apply Navbar Color Change
function applyNavbarColor() {
    changeNavbarColor(); // Apply selected navbar color immediately
}

// Apply Font Size Change
function applyFontSizeChanges() {
    toggleFontSize(); // Apply selected font size change immediately
}