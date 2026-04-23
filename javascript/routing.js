// Simple page routing for the Puerto Rico website.
// This file is in charge of changing what the user sees when they click
// a card, a sidebar link, the Home button, or the browser back/forward buttons.
// It also updates the URL and loads the correct page content after navigation.

// This keeps track of which page is currently open.
let currentPage = 'home';
// This helps us skip the fade animation on the very first page load.
let firstLoad = true;

// These are the only page names the site should ever allow.
const validPages = ['home', 'history', 'music', 'art', 'hurricane', 'quiz', 'account'];

// Clean up a page name before using it.
// This lets the function handle values like "#quiz", "quiz.html",
// or a full path ending in a page name.
function cleanPageName(pageName) {
    if (!pageName) {
        return 'home';
    }

    let name = pageName.toString().toLowerCase().trim();

    if (name.startsWith('#')) {
        name = name.substring(1);
    }

    if (name.endsWith('/')) {
        name = name.substring(0, name.length - 1);
    }

    if (name.indexOf('/') !== -1) {
        const parts = name.split('/');
        name = parts[parts.length - 1];
    }

    if (name.endsWith('.html')) {
        name = name.replace('.html', '');
    }

    if (validPages.includes(name)) {
        return name;
    }

    return 'home';
}

// Update the highlighted sidebar link so the user can tell
// which section is active right now.
function updateSidebar(pageName) {
    const links = document.querySelectorAll('.sidebar-menu a');

    for (let i = 0; i < links.length; i++) {
        links[i].classList.remove('active-page');
        links[i].removeAttribute('aria-current');
    }

    let linkId = 'home';

    if (pageName !== 'home') {
        linkId = 'nav-' + pageName;
    }

    const activeLink = document.getElementById(linkId);

    if (activeLink) {
        activeLink.classList.add('active-page');
        activeLink.setAttribute('aria-current', 'page');
    }
}

// Show the home page layout pieces that only belong on the landing page.
// That includes the large card grid, the top hero, and the suggestion area.
function showHomeLayout() {
    const pageGrid = document.querySelector('.page-grid');
    const heroRow = document.querySelector('.hero-row');
    const suggestSection = document.querySelector('.suggest-section');

    if (pageGrid) {
        pageGrid.style.display = 'grid';
    }

    if (heroRow) {
        heroRow.style.display = 'flex';
    }

    if (suggestSection) {
        suggestSection.style.display = 'block';
    }
}

// Hide the home page layout pieces when the user moves to another page.
function hideHomeLayout() {
    const pageGrid = document.querySelector('.page-grid');
    const heroRow = document.querySelector('.hero-row');
    const suggestSection = document.querySelector('.suggest-section');

    if (pageGrid) {
        pageGrid.style.display = 'none';
    }

    if (heroRow) {
        heroRow.style.display = 'none';
    }

    if (suggestSection) {
        suggestSection.style.display = 'none';
    }
}

// Remove the `active` class from every content page so only one section
// is visible at a time.
function hideAllPages() {
    const pages = document.querySelectorAll('.page');

    for (let i = 0; i < pages.length; i++) {
        pages[i].classList.remove('active');
    }
}

// Send the page name to the right content loader.
// Quiz and account have their own loaders, while the other pages
// all use the regular text-content loader.
function loadPageContent(pageName) {
    if (pageName === 'quiz') {
        loadQuizContent();
        return;
    }

    if (pageName === 'account') {
        loadAccountContent();
        return;
    }

    loadStandardContent(pageName);
}

// Load one of the regular content pages like history, music, art, or hurricane.
// This updates the title and subtitle and then rebuilds the content boxes below it.
function loadStandardContent(pageName) {
    const contentContainer = document.getElementById(pageName + '-content');
    const titleElement = document.getElementById(pageName + '-title');
    const subtitleElement = document.getElementById(pageName + '-subtitle');
    const contentData = pageContent[pageName] && pageContent[pageName][currentLanguage];

    if (!contentContainer || !contentData) {
        return;
    }

    if (titleElement) {
        titleElement.textContent = contentData.title;
    }

    if (subtitleElement) {
        subtitleElement.textContent = contentData.subtitle;
    }

    contentContainer.innerHTML = '';

    for (let i = 0; i < contentData.sections.length; i++) {
        const section = contentData.sections[i];
        const box = document.createElement('div');

        box.className = 'content-section show';
        box.innerHTML =
            '<h3>' + section.heading + '</h3>' +
            '<p>' + section.content + '</p>';

        contentContainer.appendChild(box);
    }
}

// Change the browser URL after navigation.
// The home page removes the hash, while the other pages use `#pageName`.
function updateUrl(pageName, replaceHistory) {
    if (pageName === 'home') {
        history.replaceState({ page: 'home' }, document.title, window.location.pathname);
        return;
    }

    if (replaceHistory) {
        history.replaceState({ page: pageName }, '', '#' + pageName);
    } else {
        history.pushState({ page: pageName }, '', '#' + pageName);
    }
}

// This is the main helper that actually changes pages.
// It hides the old page, shows the new one, loads its content,
// updates the sidebar, and updates the URL.
function goToPage(pageName, replaceHistory) {
    const cleanName = cleanPageName(pageName);
    const pageElement = document.getElementById(cleanName);

    hideAllPages();
    updateSidebar(cleanName);

    if (cleanName === 'home') {
        showHomeLayout();
        updateUrl('home', true);
        currentPage = 'home';
        return;
    }

    hideHomeLayout();

    if (!pageElement) {
        goToPage('home', true);
        return;
    }

    pageElement.classList.add('active');
    loadPageContent(cleanName);
    updateUrl(cleanName, replaceHistory);
    currentPage = cleanName;
}

// This is the public function the HTML uses for navigation.
// It handles the fade effect first, then calls `goToPage`.
function navigateToPage(pageName) {
    const cleanName = cleanPageName(pageName);

    if (firstLoad || typeof fadeOut !== 'function') {
        goToPage(cleanName, false);

        if (!firstLoad && typeof fadeIn === 'function') {
            fadeIn();
        }

        firstLoad = false;
        return;
    }

    fadeOut(function () {
        goToPage(cleanName, false);

        if (typeof fadeIn === 'function') {
            fadeIn();
        }
    });

    firstLoad = false;
}

// Figure out which page should open first when the site loads.
// It checks the hash first, then falls back to the file name in the URL.
function getStartingPage() {
    const hash = cleanPageName(window.location.hash);

    if (window.location.hash && hash !== '') {
        return hash;
    }

    const parts = window.location.pathname.split('/');
    const lastPart = parts[parts.length - 1];
    return cleanPageName(lastPart);
}

// When the user uses the browser back or forward button,
// load the correct page again without adding another history entry.
window.addEventListener('popstate', function (event) {
    if (event.state && event.state.page) {
        goToPage(event.state.page, true);
    } else {
        goToPage(getStartingPage(), true);
    }
});

// When the page first loads, add click events to the home page cards
// and open the correct starting page.
document.addEventListener('DOMContentLoaded', function () {
    const pageCards = document.querySelectorAll('.page-card');

    for (let i = 0; i < pageCards.length; i++) {
        pageCards[i].addEventListener('click', function () {
            navigateToPage(this.dataset.page);
        });
    }

    goToPage(getStartingPage(), true);
    firstLoad = false;
});

// Small helper used by the Home sidebar link.
function showHome() {
    navigateToPage('home');
}
