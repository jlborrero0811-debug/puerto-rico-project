// Sidebar open and close helpers.
// This file exposes the sidebar functions on `window` because the HTML uses
// them directly in button click handlers.

// Wait until the page is ready before searching for the sidebar element.
document.addEventListener('DOMContentLoaded', function () {
    const sidebar = document.getElementById('sidebar');

    // Opens the sidebar menu by adding the CSS class the stylesheet expects.
    window.openSidebar = function () {
        if (sidebar) {
            sidebar.classList.add('sidebar-open');
        }
    };

    // Closes the sidebar menu by removing the open-state CSS class.
    window.closeSidebar = function () {
        if (sidebar) {
            sidebar.classList.remove('sidebar-open');
        }
    };

    if (!sidebar) {
        return;
    }

    // Every link inside the sidebar also closes the menu after navigation so
    // the mobile layout does not stay open over the page content.
    const links = sidebar.querySelectorAll('a');

    for (let i = 0; i < links.length; i++) {
        links[i].addEventListener('click', function () {
            window.closeSidebar();
        });
    }
});
