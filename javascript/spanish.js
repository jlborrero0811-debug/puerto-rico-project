// Language translation manager for the Puerto Rico website.
// This file stores all shared interface text for English and Spanish and
// updates the page whenever the language toggle button is pressed.

// Keeps track of the active language used by the site.
let currentLanguage = 'english';

// Text used throughout the site. The rest of the application reads from this
// object when it needs labels, button text, navigation text, quiz wording,
// and page titles in the current language.
const translations = {
    english: {
        title: 'Puerto Rico',
        history: 'History',
        musiclabel: 'Music',
        hurricanelabel: 'Hurricane Maria',
        artlabel: 'Artists',
        languageBtn: 'Español',
        footer: '© 2026 Jacob Borrero. All rights reserved.<div class="social-links"> <a href="mailto:jacob.borrero1@cttech.org" title="Email"><i class="fa-solid fa-envelope"></i></a> <a href="https://www.linkedin.com/in/jacob-borrero-ab4ba1368/" target="_blank" title="LinkedIn"><i class="fa-brands fa-linkedin"></i></a></div>',
        menu: 'Menu',
        close: "<i class='fa-solid fa-x'></i> Close",
        home: '<i class="fa fa-fw fa-home"></i> Home',
        navHistory: "<i class='fa fa-history'></i> History",
        navMusic: "<i class='fa fa-music'></i> Music",
        navArt: "<i class='fa fa-palette'></i> Art",
        navHurricane: "<i class='fa fa-cloud-showers-heavy'></i> Hurricane Maria",
        navQuiz: "<i class='fa fa-pencil'></i> Quiz",
        navAccount: "<i class='fa fa-user'></i> Account",
        suggestionTitle: 'Suggest an Addition',
        confirmationMessage: 'Thanks for your suggestion!',
        nameLabel: 'Your Name',
        suggestionLabel: 'Addition Suggestion',
        commentsLabel: 'Additional Comments',
        submitBtn: 'Submit Suggestion',
        clearBtn: 'Clear',
        anotherSuggestionBtn: 'Send Another Suggestion',
        historyTitle: 'History of Puerto Rico',
        historySubtitle: 'From Taíno civilization to modern times',
        musicTitle: 'Puerto Rican Music',
        artTitle: 'Puerto Rican Art',
        hurricaneTitle: 'Hurricane Maria',
        quizTitle: 'Puerto Rico Quiz',
        accountTitle: 'Quiz Account',
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
        accountTitle: 'Cuenta del Cuestionario',
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

// Small helper that updates a DOM element by id using either plain text or
// HTML depending on the type of content being inserted.
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

// Reloads whichever page content is currently active so translated content
// sections, quiz text, or account labels refresh immediately after a
// language change.
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

// Toggles between English and Spanish, updates the shared UI labels, then
// reloads the active page content so the visible content matches the new
// language.
function changeLanguage() {
    if (currentLanguage === 'english') {
        currentLanguage = 'spanish';
    } else {
        currentLanguage = 'english';
    }

    const lang = translations[currentLanguage];

    setLanguageText('historylabel', lang.history, false);
    setLanguageText('musiclabel', lang.musiclabel, false);
    setLanguageText('hurricanelabel', lang.hurricanelabel, false);
    setLanguageText('artlabel', lang.artlabel, false);
    setLanguageText('footer', lang.footer, true);

    setLanguageText('menu', lang.menu, false);
    setLanguageText('close', lang.close, true);
    setLanguageText('home', lang.home, true);
    setLanguageText('nav-history', lang.navHistory, true);
    setLanguageText('nav-music', lang.navMusic, true);
    setLanguageText('nav-art', lang.navArt, true);
    setLanguageText('nav-hurricane', lang.navHurricane, true);
    setLanguageText('nav-quiz', lang.navQuiz, true);
    setLanguageText('nav-account', lang.navAccount, true);

    setLanguageText('suggestionTitle', lang.suggestionTitle, false);
    setLanguageText('confirmationMessage', lang.confirmationMessage, false);
    setLanguageText('labelName', lang.nameLabel, false);
    setLanguageText('labelSuggestion', lang.suggestionLabel, false);
    setLanguageText('labelComments', lang.commentsLabel, false);
    setLanguageText('submitBtn', lang.submitBtn, false);
    setLanguageText('clearBtn', lang.clearBtn, false);
    setLanguageText('anotherSuggestionBtn', lang.anotherSuggestionBtn, false);

    setLanguageText('history-title', lang.historyTitle, false);
    setLanguageText('history-subtitle', lang.historySubtitle, false);
    setLanguageText('music-title', lang.musicTitle, false);
    setLanguageText('music-subtitle', lang.musicSubtitle, false);
    setLanguageText('art-title', lang.artTitle, false);
    setLanguageText('art-subtitle', lang.artSubtitle, false);
    setLanguageText('hurricane-title', lang.hurricaneTitle, false);
    setLanguageText('hurricane-subtitle', lang.hurricaneSubtitle, false);
    setLanguageText('quiz-title', lang.quizTitle, false);
    setLanguageText('quiz-subtitle', lang.quizSubtitle, false);
    setLanguageText('account-title', lang.accountTitle, false);

    reloadActivePageContent();

    const languageButton = document.getElementById('languageBtn');

    if (languageButton) {
        languageButton.textContent = lang.languageBtn;
    }
}
