// This file changes the site between English and Spanish.
// It stores the text for both languages and updates buttons, labels,
// titles, and page content when the user presses the language button.

// This keeps track of the language being used right now.
let currentLanguage = 'english';

// This object stores all shared text for both languages.
// Different files read from this object when they need button labels,
// menu text, quiz text, or page titles.
const translations = {
    english: {
        // Home page
        title: 'Puerto Rico',
        history: 'History',
        musiclabel: 'Music',
        hurricanelabel: 'Hurricane Maria',
        artlabel: 'Artists',
        languageBtn: 'Español',
        footer: '© 2026 Jacob Borrero. All rights reserved.<div class="social-links"> <a href="mailto:jacob.borrero1@cttech.org" title="Email"><i class="fa-solid fa-envelope"></i></a> <a href="https://www.linkedin.com/in/jacob-borrero-ab4ba1368/" target="_blank" title="LinkedIn"><i class="fa-brands fa-linkedin"></i></a></div>',
        // Menu and navigation
        menu: 'Menu',
        close: "<i class='fa-solid fa-x'></i> Close",
        home: '<i class="fa fa-fw fa-home"></i> Home',
        navHistory: "<i class='fa fa-history'></i> History",
        navMusic: "<i class='fa fa-music'></i> Music",
        navArt: "<i class='fa fa-palette'></i> Art",
        navHurricane: "<i class='fa fa-cloud-showers-heavy'></i> Hurricane Maria",
        navQuiz: "<i class='fa fa-pencil'></i> Quiz",
        navAccount: "<i class='fa fa-user'></i> Account",
        // Page titles
        historyTitle: 'History of Puerto Rico',
        historySubtitle: 'From Taíno civilization to modern times',
        musicTitle: 'Puerto Rican Music',
        artTitle: 'Puerto Rican Art',
        hurricaneTitle: 'Hurricane Maria',
        quizTitle: 'Puerto Rico Quiz',
        accountTitle: 'Your <br> Account',
        // Quiz text
        questionOf: 'Question',
        of: 'of',
        previous: 'Previous',
        next: 'Next',
        finishQuiz: 'Finish Quiz',
        yourScore: 'You scored',
        outOf: 'out of',
        quizComplete: 'Quiz Complete!',
        retakeQuiz: 'Retake Quiz'
    },
    spanish: {
        title: 'Puerto Rico',
        history: 'Historia',
        musiclabel: 'Música',
        hurricanelabel: 'Huracán María',
        artlabel: 'Artistas',
        languageBtn: 'English',
        footer: '© 2026 Jacob Borrero. Reservados todos los derechos.<div class="social-links"> <a href="mailto:jacob.borrero1@cttech.org" title="Email"><i class="fa-solid fa-envelope"></i></a> <a href="https://www.linkedin.com/in/jacob-borrero-ab4ba1368/" target="_blank" title="LinkedIn"><i class="fa-brands fa-linkedin"></i></a></div>',
        menu: 'Menú',
        close: "<i class='fa-solid fa-x'></i> Cerrar",
        home: '<i class="fa fa-fw fa-home"></i> Inicio',
        navHistory: "<i class='fa fa-history'></i> Historia",
        navMusic: "<i class='fa fa-music'></i> Música",
        navArt: "<i class='fa fa-palette'></i> Arte",
        navHurricane: "<i class='fa fa-cloud-showers-heavy'></i> Huracán María",
        navQuiz: "<i class='fa fa-pencil'></i> Cuestionario",
        navAccount: "<i class='fa fa-user'></i> Cuenta",
        suggestionTitle: 'Sugerir una Adición',
        confirmationMessage: '¡Gracias por tu sugerencia!',
        nameLabel: 'Tu Nombre',
        suggestionLabel: 'Sugerencia de Adición',
        commentsLabel: 'Comentarios Adicionales',
        submitBtn: 'Enviar Sugerencia',
        clearBtn: 'Limpiar',
        anotherSuggestionBtn: 'Enviar Otra Sugerencia',
        historyTitle: 'Historia de Puerto Rico',
        musicTitle: 'Música Puertorriqueña',
        artTitle: 'Arte Puertorriqueño',
        hurricaneTitle: 'Huracán María',
        quizTitle: 'Cuestionario de Puerto Rico',
        accountTitle: 'Tu <br> Cuestionario',
        questionOf: 'Pregunta',
        of: 'de',
        previous: 'Anterior',
        next: 'Siguiente',
        finishQuiz: 'Terminar cuestionario',
        yourScore: 'Tu puntaje fue',
        outOf: 'de',
        quizComplete: '¡Cuestionario completado!',
        retakeQuiz: 'Repetir Cuestionario'
    }
};

// Change the text inside one element.
// Some elements need plain text and some need HTML,
// so the function supports both.
function setLanguageText(id, value, useHtml) {
    const element = document.getElementById(id);

    if (!element) {
        return;
    }

    if (useHtml) {
        element.innerHTML = value;
    } else {
        element.textContent = value;
    }
}

// Reload the page that is open right now
// so the visible content changes to the new language too.
// This is needed because some page content is built by JavaScript
// after the page opens.
function reloadActivePageContent() {
    const activePage = document.querySelector('.page.active');

    if (!activePage || activePage.id === 'home') {
        return;
    }

    if (activePage.id === 'quiz') {
        loadQuizContent();
    } else if (activePage.id === 'account') {
        loadAccountContent();
    } else {
        loadStandardContent(activePage.id);
    }
}

// Switch to the other language and update the page text.
// This updates the home cards, sidebar text, form labels,
// page titles, and the currently visible page content.
function changeLanguage() {
    if (currentLanguage === 'english') {
        currentLanguage = 'spanish';
    } else {
        currentLanguage = 'english';
    }

    // This is the object for the language we just switched to.
    const lang = translations[currentLanguage];

    // Update the home page card labels.
    setLanguageText('historylabel', lang.history, true);
    setLanguageText('musiclabel', lang.musiclabel, true);
    setLanguageText('hurricanelabel', lang.hurricanelabel, true);
    setLanguageText('artlabel', lang.artlabel, true);
    setLanguageText('footer', lang.footer, true);

    // Update the sidebar text.
    setLanguageText('menu', lang.menu, true);
    setLanguageText('close', lang.close, true);
    setLanguageText('home', lang.home, true);
    setLanguageText('nav-history', lang.navHistory, true);
    setLanguageText('nav-music', lang.navMusic, true);
    setLanguageText('nav-art', lang.navArt, true);
    setLanguageText('nav-hurricane', lang.navHurricane, true);
    setLanguageText('nav-quiz', lang.navQuiz, true);
    setLanguageText('nav-account', lang.navAccount, true);

    // Update the suggestion form text.
    setLanguageText('suggestionTitle', lang.suggestionTitle, true);
    setLanguageText('confirmationMessage', lang.confirmationMessage, true);
    setLanguageText('labelName', lang.nameLabel, true);
    setLanguageText('labelSuggestion', lang.suggestionLabel, true);
    setLanguageText('labelComments', lang.commentsLabel, true);
    setLanguageText('submitBtn', lang.submitBtn, true);
    setLanguageText('clearBtn', lang.clearBtn, true);
    setLanguageText('anotherSuggestionBtn', lang.anotherSuggestionBtn, true);

    // Update page titles and subtitles.
    setLanguageText('history-title', lang.historyTitle, true);
    setLanguageText('history-subtitle', lang.historySubtitle, true);
    setLanguageText('music-title', lang.musicTitle, true);
    setLanguageText('music-subtitle', lang.musicSubtitle, true);
    setLanguageText('art-title', lang.artTitle, true);
    setLanguageText('art-subtitle', lang.artSubtitle, true);
    setLanguageText('hurricane-title', lang.hurricaneTitle, false);
    setLanguageText('hurricane-subtitle', lang.hurricaneSubtitle, true);
    setLanguageText('quiz-title', lang.quizTitle, true);
    setLanguageText('quiz-subtitle', lang.quizSubtitle, true);
    setLanguageText('account-title', lang.accountTitle, true);

    // Reload page content so the visible section changes language too.
    reloadActivePageContent();

    // Change the button text so it shows the other language option.
    const languageButton = document.getElementById('languageBtn');

    if (languageButton) {
        languageButton.textContent = lang.languageBtn;
    }
}
