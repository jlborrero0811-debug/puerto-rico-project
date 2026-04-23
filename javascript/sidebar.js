// This file opens and closes the sidebar menu.
// The HTML uses `onclick` attributes, so these functions need to be
// available on `window` for the buttons and links to call them.

// Open the sidebar by adding the class that moves it on screen.
function openSidebar() {
    const sidebar = document.getElementById('sidebar');

    // Add the class that opens the sidebar.
    if (sidebar) {
        sidebar.classList.add('sidebar-open');
    }
}

// Close the sidebar by removing the open class.
function closeSidebar() {
    const sidebar = document.getElementById('sidebar');

    // Remove the class so the sidebar closes.
    if (sidebar) {
        sidebar.classList.remove('sidebar-open');
    }
}

// Make both functions global so the HTML can use them.
window.openSidebar = openSidebar;
window.closeSidebar = closeSidebar;

// Wait until the page loads before adding click events to the sidebar links.
document.addEventListener('DOMContentLoaded', function () {
    const sidebar = document.getElementById('sidebar');

    if (!sidebar) {
        return;
    }

    // Close the sidebar when a link is clicked so the menu does not stay
    // covering the page on smaller screens.
    const links = sidebar.querySelectorAll('a');

    for (let i = 0; i < links.length; i++) {
        links[i].addEventListener('click', function () {
            closeSidebar();
        });
    }
});
