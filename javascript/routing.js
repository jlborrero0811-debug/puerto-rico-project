// Routing and page loading for the single-page Puerto Rico website.
// This file controls which section is visible, updates browser history,
// reacts to back/forward navigation, and loads the correct content for
// normal pages, the quiz page, and the account page.

// Keeps track of the currently visible page id.
let currentPage = 'home';
// Helps prevent the first page load from trying to animate like a later move.
let isFirstNavigation = true;
// Lists every page id the site is allowed to navigate to.
const validPages = ['home', 'history', 'music', 'art', 'hurricane', 'quiz', 'account'];

// Cleans up page names from hashes, file paths, or direct strings and
// converts them into one of the known page ids. Invalid values fall back to
// the home page.
function normalizePageName(pageName) {
    let cleanedPage = '';

    if (pageName) {
        cleanedPage = pageName.toString().trim().toLowerCase();
    }

    if (!cleanedPage) {
        return 'home';
    }

    if (cleanedPage.charAt(0) === '#') {
        cleanedPage = cleanedPage.substring(1);
    }

    while (cleanedPage.endsWith('/')) {
        cleanedPage = cleanedPage.substring(0, cleanedPage.length - 1);
    }

    if (cleanedPage.indexOf('/') !== -1) {
        const parts = cleanedPage.split('/');
        cleanedPage = parts[parts.length - 1];
    }

    if (cleanedPage.endsWith('.html')) {
        cleanedPage = cleanedPage.substring(0, cleanedPage.length - 5);
    }

    if (validPages.includes(cleanedPage)) {
        return cleanedPage;
    }

    return 'home';
}

// Highlights the correct sidebar link so the user can see which page is
// currently active.
function updateActiveNav(pageId) {
    const links = document.querySelectorAll('.sidebar-menu a');

    for (let i = 0; i < links.length; i++) {
        links[i].classList.remove('active-page');
        links[i].removeAttribute('aria-current');
    }

    let activeNavId = 'home';

    if (pageId !== 'home') {
        activeNavId = 'nav-' + pageId;
    }

    const activeLink = document.getElementById(activeNavId);

    if (activeLink) {
        activeLink.classList.add('active-page');
        activeLink.setAttribute('aria-current', 'page');
    }
}

// Main public navigation helper. This is what the cards and sidebar links
// use to move between sections. It also handles fade transitions when those
// helpers are available.
function navigateToPage(pageName) {
    const targetPage = normalizePageName(pageName);

    function navigate() {
        performNavigation(targetPage);

        if (!isFirstNavigation && typeof fadeIn === 'function') {
            fadeIn();
        }
    }

    if (isFirstNavigation || typeof fadeOut !== 'function') {
        navigate();
    } else {
        fadeOut(navigate);
    }

    isFirstNavigation = false;
}

// Shows the requested page, hides the others, updates page-specific
// containers, and syncs the browser history entry.
function performNavigation(pageName, options) {
    const settings = options || {};
    const replaceHistory = settings.replaceHistory || false;
    const pageId = normalizePageName(pageName);
    const pages = document.querySelectorAll('.page');
    const mainElements = document.querySelector('.page-grid');
    const suggestSection = document.querySelector('.suggest-section');
    const heroRow = document.querySelector('.hero-row');

    for (let i = 0; i < pages.length; i++) {
        pages[i].classList.remove('active');
    }

    updateActiveNav(pageId);

    if (pageId === 'home') {
        if (mainElements) {
            mainElements.style.display = 'grid';
        }

        if (heroRow) {
            heroRow.style.display = 'flex';
        }

        if (suggestSection) {
            suggestSection.style.display = 'block';
        }

        history.replaceState({ page: 'home' }, document.title, window.location.pathname);
    } else {
        if (mainElements) {
            mainElements.style.display = 'none';
        }

        if (heroRow) {
            heroRow.style.display = 'none';
        }

        if (suggestSection) {
            suggestSection.style.display = 'none';
        }

        const targetPage = document.getElementById(pageId);

        if (!targetPage) {
            performNavigation('home', { replaceHistory: true });
            return;
        }

        targetPage.classList.add('active');
        loadPageContent(pageId);

        if (replaceHistory) {
            history.replaceState({ page: pageId }, '', '#' + pageId);
        } else {
            history.pushState({ page: pageId }, '', '#' + pageId);
        }
    }

    currentPage = pageId;
}

// Sends each page id to the correct content loader.
function loadPageContent(pageId) {
    if (pageId === 'quiz') {
        loadQuizContent();
    } else if (pageId === 'account') {
        loadAccountContent();
    } else {
        loadStandardContent(pageId);
    }
}

// Loads the standard text-content pages from `pageContent` and rebuilds the
// visible sections for the selected language.
function loadStandardContent(pageId) {
    const contentData = pageContent[pageId][currentLanguage];
    const contentContainer = document.getElementById(pageId + '-content');

    if (!contentContainer || !contentData) {
        return;
    }

    const titleElement = document.getElementById(pageId + '-title');
    const subtitleElement = document.getElementById(pageId + '-subtitle');

    if (titleElement) {
        titleElement.textContent = contentData.title;
    }

    if (subtitleElement) {
        subtitleElement.textContent = contentData.subtitle;
    }

    contentContainer.innerHTML = '';

    for (let i = 0; i < contentData.sections.length; i++) {
        const section = contentData.sections[i];
        const sectionElement = document.createElement('div');

        sectionElement.className = 'content-section show';
        sectionElement.innerHTML = `
            <h3>${section.heading}</h3>
            <p>${section.content}</p>
        `;

        contentContainer.appendChild(sectionElement);
    }
}

// Decides which page should load first based on the URL hash or the file
// name in the browser address bar.
function getInitialPage() {
    const hashPage = normalizePageName(window.location.hash);

    if (hashPage !== 'home' || window.location.hash === '#home') {
        return hashPage;
    }

    const pathSegments = window.location.pathname.split('/');
    const lastSegment = pathSegments[pathSegments.length - 1];
    return normalizePageName(lastSegment);
}

// Re-renders the right page when the user uses the browser back or forward
// buttons.
window.addEventListener('popstate', function (event) {
    if (event.state && event.state.page) {
        performNavigation(event.state.page, { replaceHistory: true });
    } else {
        performNavigation(getInitialPage(), { replaceHistory: true });
    }
});

// Attaches click handlers to the home page cards and loads the correct page
// when the site first opens.
document.addEventListener('DOMContentLoaded', function () {
    const pageCards = document.querySelectorAll('.page-card');

    for (let i = 0; i < pageCards.length; i++) {
        pageCards[i].addEventListener('click', function () {
            navigateToPage(this.dataset.page);
        });
    }

    performNavigation(getInitialPage(), { replaceHistory: true });
    isFirstNavigation = false;
});

// Simple helper used by the Home link to return to the landing page.
function showHome() {
    navigateToPage('home');
}
