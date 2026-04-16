// Routing and page loading for the single-page Puerto Rico website.
// This file controls page navigation, hash-based browser history, and loading
// the appropriate page content or quiz content when a user selects a section.

let currentPage = 'home';
let isFirstNavigation = true;
const validPages = ['home', 'history', 'music', 'art', 'hurricane', 'quiz', 'account'];

function normalizePageName(pageName) {
    const rawPage = (pageName || '').toString().trim().toLowerCase();

    if (!rawPage) {
        return 'home';
    }

    const cleanedPage = rawPage
        .replace(/^#/, '')
        .replace(/\/+$/, '')
        .replace(/^.*\//, '')
        .replace(/\.html$/, '');

    return validPages.includes(cleanedPage) ? cleanedPage : 'home';
}

function updateActiveNav(pageId) {
    document.querySelectorAll('.sidebar-menu a').forEach(link => {
        link.classList.remove('active-page');
        link.removeAttribute('aria-current');
    });

    const activeNavId = pageId === 'home' ? 'home' : `nav-${pageId}`;
    const activeLink = document.getElementById(activeNavId);

    if (activeLink) {
        activeLink.classList.add('active-page');
        activeLink.setAttribute('aria-current', 'page');
    }
}

function navigateToPage(pageName) {
    const targetPage = normalizePageName(pageName);

    const navigate = () => {
        performNavigation(targetPage);
        if (!isFirstNavigation && typeof fadeIn === 'function') {
            fadeIn();
        }
    };

    if (isFirstNavigation || typeof fadeOut !== 'function') {
        navigate();
    } else {
        fadeOut(navigate);
    }

    isFirstNavigation = false;
}

function performNavigation(pageName, options = {}) {
    const { replaceHistory = false } = options;
    const pageId = normalizePageName(pageName);

    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });

    const mainElements = document.querySelector('.page-grid');
    const suggestSection = document.querySelector('.suggest-section');
    const heroRow = document.querySelector('.hero-row');

    updateActiveNav(pageId);

    if (pageId === 'home') {
        if (mainElements) mainElements.style.display = 'grid';
        if (heroRow) heroRow.style.display = 'flex';
        if (suggestSection) suggestSection.style.display = 'block';

        history.replaceState({ page: 'home' }, document.title, window.location.pathname);
    } else {
        if (mainElements) mainElements.style.display = 'none';
        if (heroRow) heroRow.style.display = 'none';
        if (suggestSection) suggestSection.style.display = 'none';

        const targetPage = document.getElementById(pageId);
        if (targetPage) {
            targetPage.classList.add('active');
            loadPageContent(pageId);
            const historyMethod = replaceHistory ? 'replaceState' : 'pushState';
            history[historyMethod]({ page: pageId }, '', `#${pageId}`);
        } else {
            performNavigation('home', { replaceHistory: true });
            return;
        }
    }

    currentPage = pageId;
}

function loadPageContent(pageId) {
    if (pageId === 'quiz') {
        loadQuizContent();
    } else if (pageId === 'account') {
        loadAccountContent();
    } else {
        loadStandardContent(pageId);
    }
}

function loadStandardContent(pageId) {
    console.log('Loading standard content for:', pageId);
    const contentData = pageContent[pageId][currentLanguage];
    const contentContainer = document.getElementById(`${pageId}-content`);

    console.log('contentData:', contentData);
    console.log('contentContainer:', contentContainer);

    if (!contentContainer || !contentData) {
        console.log('Missing container or data for', pageId);
        return;
    }

    const titleElement = document.getElementById(`${pageId}-title`);
    const subtitleElement = document.getElementById(`${pageId}-subtitle`);

    console.log('titleElement:', titleElement);
    console.log('subtitleElement:', subtitleElement);

    if (titleElement) titleElement.textContent = contentData.title;
    if (subtitleElement) subtitleElement.textContent = contentData.subtitle;

    contentContainer.innerHTML = '';

    contentData.sections.forEach(section => {
        console.log('Adding section:', section.heading);
        const sectionElement = document.createElement('div');
        sectionElement.className = 'content-section show';
        sectionElement.innerHTML = `
            <h3>${section.heading}</h3>
            <p>${section.content}</p>
        `;
        contentContainer.appendChild(sectionElement);
    });
}

window.addEventListener('popstate', function(event) {
    if (event.state && event.state.page) {
        performNavigation(event.state.page, { replaceHistory: true });
    } else {
        performNavigation(getInitialPage(), { replaceHistory: true });
    }
});

function getInitialPage() {
    const hashPage = normalizePageName(window.location.hash);

    if (hashPage !== 'home' || window.location.hash === '#home') {
        return hashPage;
    }

    const pathSegments = window.location.pathname.split('/');
    const lastSegment = pathSegments[pathSegments.length - 1];
    return normalizePageName(lastSegment);
}

document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.page-card').forEach(card => {
        card.addEventListener('click', function() {
            const page = this.dataset.page;
            navigateToPage(page);
        });
    });

    performNavigation(getInitialPage(), { replaceHistory: true });
    isFirstNavigation = false;
});

function showHome() {
    navigateToPage('home');
}
