// This file handles the simple fade effect used when the page changes.
// Routing calls these functions before and after page changes
// so the site feels smoother when moving between sections.

// If there is a year element in the footer, update it automatically
// so the year does not need to be changed by hand every year.
const yearElement = document.getElementById('year');

if (yearElement) {
    const currentYear = new Date().getFullYear();
    yearElement.textContent = currentYear;
}

// Fade the whole page out, then run the next step after the fade finishes.
// The callback is usually a navigation function from `routing.js`.
function fadeOut(callback) {
    document.body.style.transition = 'opacity 0.4s';
    document.body.style.opacity = '0';

    setTimeout(function () {
        callback();
    }, 400);
}

// Bring the page back in after new content has loaded.
// This resets the body opacity to full visibility.
function fadeIn() {
    document.body.style.opacity = '1';
}
