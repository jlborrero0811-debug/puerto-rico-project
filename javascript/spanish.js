// Language translation manager for the Puerto Rico website.
// Holds the English and Spanish translation strings used throughout the UI.

let currentLanguage = "english";

// Shared translations for UI labels, navigation, quiz text, and the suggestion form.
const translations = {
    english: {
        // Home page
        title: "Puerto Rico",
        history: "History",
        musiclabel: "Music",
        hurricanelabel: "Hurricane Maria",
        artlabel: "Artists",
        languageBtn: "Español",
        footer: '© 2026 Jacob Borrero. All rights reserved.<div class="social-links"> <a href="mailto:jacob.borrero1@cttech.org" title="Email"><i class="fa-solid fa-envelope"></i></a> <a href="https://www.linkedin.com/in/jacob-borrero-ab4ba1368/" target="_blank" title="LinkedIn"><i class="fa-brands fa-linkedin"></i></a></div>',
        // Nav bar
        menu: "Menu",
        close: "<i class='fa-solid fa-x'></i> Close",
        home: '<i class="fa fa-fw fa-home"></i> Home',
        navHistory: "<i class='fa fa-history'></i> History",
        navMusic: "<i class='fa fa-music'></i> Music",
        navArt: "<i class='fa fa-palette'></i> Art",
        navHurricane: "<i class='fa fa-cloud-showers-heavy'></i> Hurricane Maria",
        navQuiz: "<i class='fa fa-pencil'></i> Quiz",
        navAccount: "<i class='fa fa-user'></i> Account",
        // Suggestion card
        suggestionTitle: "Suggest an Addition",
        confirmationMessage: "Thanks for your suggestion!",
        nameLabel: "Your Name",
        suggestionLabel: "Addition Suggestion",
        commentsLabel: "Additional Comments",
        submitBtn: "Submit Suggestion",
        clearBtn: "Clear",
        anotherSuggestionBtn: "Send Another Suggestion",
        // Page titles and subtitles
        historyTitle: "History of Puerto Rico",
        historySubtitle: "From Taíno civilization to modern times",
        musicTitle: "Puerto Rican Music",
        artTitle: "Puerto Rican Art",
        hurricaneTitle: "Hurricane Maria",
        quizTitle: "Puerto Rico Quiz",
        accountTitle: "Quiz Account",
        // Quiz translations
        questionOf: "Question",
        of: "of",
        previous: "Previous",
        next: "Next",
        finishQuiz: "Finish Quiz",
        yourScore: "You scored",
        outOf: "out of",
        quizComplete: "Quiz Complete!",
        retakeQuiz: "Retake Quiz"
    },
    spanish: {
        // Home page
        title: "Puerto Rico",
        history: "Historia",
        musiclabel: "Música",
        hurricanelabel: "Huracán María",
        artlabel: "Artistas",
        languageBtn: "English",
        footer: '© 2026 Jacob Borrero. Reservados todos los derechos.<div class="social-links"> <a href="mailto:jacob.borrero1@cttech.org" title="Email"><i class="fa-solid fa-envelope"></i></a> <a href="https://www.linkedin.com/in/jacob-borrero-ab4ba1368/" target="_blank" title="LinkedIn"><i class="fa-brands fa-linkedin"></i></a></div>',
        // Nav bar
        menu: "Menú",
        close: "<i class='fa-solid fa-x'></i> Cerrar",
        home: '<i class="fa fa-fw fa-home"></i> Inicio',
        navHistory: "<i class='fa fa-history'></i> Historia",
        navMusic: "<i class='fa fa-music'></i> Música",
        navArt: "<i class='fa fa-palette'></i> Arte",
        navHurricane: "<i class='fa fa-cloud-showers-heavy'></i> Huracán María",
        navQuiz: "<i class='fa fa-pencil'></i> Cuestionario",
        navAccount: "<i class='fa fa-user'></i> Cuenta",
        // Suggestion card
        suggestionTitle: "Sugerir una Adición",
        confirmationMessage: "¡Gracias por tu sugerencia!",
        nameLabel: "Tu Nombre",
        suggestionLabel: "Sugerencia de Adición",
        commentsLabel: "Comentarios Adicionales",
        submitBtn: "Enviar Sugerencia",
        clearBtn: "Limpiar",
        anotherSuggestionBtn: "Enviar Otra Sugerencia",
        // Page titles and subtitles
        historyTitle: "Historia de Puerto Rico",
        musicTitle: "Música Puertorriqueña",
        artTitle: "Arte Puertorriqueño",
        hurricaneTitle: "Huracán María",
        quizTitle: "Cuestionario de Puerto Rico",
        accountTitle: "Cuenta del Cuestionario",
        // Quiz translations
        questionOf: "Pregunta",
        of: "de",
        previous: "Anterior",
        next: "Siguiente",
        finishQuiz: "Terminar cuestionario",
        yourScore: "Tu puntaje fue",
        outOf: "de",
        quizComplete: "¡Cuestionario completado!",
        retakeQuiz: "Repetir Cuestionario"
    }
};

// Change the current language and update all UI text accordingly.
function changeLanguage() {
    currentLanguage = currentLanguage === "english" ? "spanish" : "english";

    const lang = translations[currentLanguage];

    const setText = (id, value, html = false) => {
        const el = document.getElementById(id);
        if (!el) return;
        if (html) el.innerHTML = value;
        else el.textContent = value;
    };

    setText("historylabel", lang.history);
    setText("musiclabel", lang.musiclabel);
    setText("hurricanelabel", lang.hurricanelabel);
    setText("artlabel", lang.artlabel);
    setText("footer", lang.footer, true);

    setText("menu", lang.menu);
    setText("close", lang.close, true);
    setText("home", lang.home, true);
    setText("nav-history", lang.navHistory, true);
    setText("nav-music", lang.navMusic, true);
    setText("nav-art", lang.navArt, true);
    setText("nav-hurricane", lang.navHurricane, true);
    setText("nav-quiz", lang.navQuiz, true);
    setText("nav-account", lang.navAccount, true);

    setText("suggestionTitle", lang.suggestionTitle);
    setText("confirmationMessage", lang.confirmationMessage);
    setText("labelName", lang.nameLabel);
    setText("labelSuggestion", lang.suggestionLabel);
    setText("labelComments", lang.commentsLabel);
    setText("submitBtn", lang.submitBtn);
    setText("clearBtn", lang.clearBtn);
    setText("anotherSuggestionBtn", lang.anotherSuggestionBtn);

    setText("history-title", lang.historyTitle);
    setText("history-subtitle", lang.historySubtitle);
    setText("music-title", lang.musicTitle);
    setText("music-subtitle", lang.musicSubtitle);
    setText("art-title", lang.artTitle);
    setText("art-subtitle", lang.artSubtitle);
    setText("hurricane-title", lang.hurricaneTitle);
    setText("hurricane-subtitle", lang.hurricaneSubtitle);
    setText("quiz-title", lang.quizTitle);
    setText("quiz-subtitle", lang.quizSubtitle);
    setText("account-title", lang.accountTitle);

    const activePage = document.querySelector('.page.active');
    if (activePage && activePage.id !== 'home') {
        const pageId = activePage.id;
        if (pageId === 'quiz') {
            loadQuizContent();
        } else if (pageId === 'account') {
            loadAccountContent();
        } else {
            loadStandardContent(pageId);
        }
    }

    const langBtn = document.getElementById("languageBtn");
    if (langBtn) langBtn.textContent = lang.languageBtn;
}
