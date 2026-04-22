// Visual animation helper for page transitions.
// This file keeps the page transition behavior isolated so routing can call
// these helpers without needing to manage CSS timing directly.

// If a footer year element exists, fill it with the current year
// automatically so it does not need to be updated by hand.
const yearElement = document.getElementById('year');

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}

// Fades the whole page out before navigation, then runs the callback after
// the opacity transition finishes.
function fadeOut(callback) {
    document.body.style.transition = 'opacity 0.4s';
    document.body.style.opacity = '0';
    setTimeout(callback, 400);
}

// Restores the page opacity after new content has been loaded.
function fadeIn() {
    document.body.style.opacity = '1';
}

// Reserved hook for any future fade-related startup behavior.
document.addEventListener('DOMContentLoaded', function () {
});
