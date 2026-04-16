// Sidebar open/close helpers for the mobile menu.

// Uses safe DOM checks so the functions don't fail if the sidebar element is missing.
document.addEventListener("DOMContentLoaded", () => {
    const sidebar = document.getElementById("sidebar");

    // Open the sidebar when the menu button is clicked.
    window.openSidebar = function () {
        if (sidebar) sidebar.classList.add("sidebar-open");
    };

    // Close the sidebar when clicking outside of it on mobile.
    window.closeSidebar = function () {
        if (sidebar) sidebar.classList.remove("sidebar-open");
    };

    // Close the sidebar whenever a sidebar link is clicked.
    if (sidebar) {
        sidebar.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                window.closeSidebar();
            });
        });
    }
});