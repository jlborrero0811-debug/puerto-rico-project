// Visual animation helper for page cards, suggestion section, and page fade transitions.
// This file contains simple load and transition effects to improve the user experience.

// Set the current year in the footer dynamically when the page loads if the target exists.
const yearElement = document.getElementById('year');
if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}

// Smooth page transition helpers
// fadeOut is used when navigating away from a page, fadeIn is used when showing a page.
function fadeOut(callback) {
    document.body.style.transition = 'opacity 0.4s';
    document.body.style.opacity = '0';
    setTimeout(callback, 400);
}

// fadeIn is called after the new page content is loaded to create a smooth transition effect.
function fadeIn() {
    document.body.style.opacity = '1';
}

// Page transition effects - simplified
document.addEventListener('DOMContentLoaded', function() {
});
