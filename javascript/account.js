// This file saves quiz stats and builds the account page.
// It loads and saves the player's data from localStorage,
// checks which achievements are unlocked, builds the account page HTML,
// and shows the popup animation for new achievements.

// This is the key used when saving the profile in localStorage.
const PROFILE_STORAGE_KEY = 'userProfile';
// These numbers are shared with the quiz code so both files agree
// on how many questions are in a quiz and how many top scores to keep.
const MAX_QUIZ_QUESTIONS = 10;
const MAX_HIGH_SCORES = 5;

// This list defines every achievement in the site.
// Each achievement has:
// - an id used for saving
// - an icon for the UI
// - English and Spanish text
// - a rule that decides when the achievement is unlocked
const achievementDefinitions = [
    {
        id: 'first-steps',
        icon: 'fa-shoe-prints',
        title: { english: 'First Steps', spanish: 'Primeros Pasos' },
        description: { english: 'Finish your first quiz.', spanish: 'Completa tu primer cuestionario.' },
        isUnlocked: function (profile) { return profile.attempts >= 1; }
    },
    {
        id: 'curious-mind',
        icon: 'fa-lightbulb',
        title: { english: 'Curious Mind', spanish: 'Mente Curiosa' },
        description: { english: 'Complete 5 quiz attempts.', spanish: 'Completa 5 intentos del cuestionario.' },
        isUnlocked: function (profile) { return profile.attempts >= 5; }
    },
    {
        id: 'island-expert',
        icon: 'fa-trophy',
        title: { english: 'Island Expert', spanish: 'Experto de la Isla' },
        description: { english: 'Score 8 out of 10 or higher.', spanish: 'Obtén 8 de 10 o más.' },
        isUnlocked: function (profile) { return profile.highestScore >= 8; }
    },
    {
        id: 'perfect-ten',
        icon: 'fa-star',
        title: { english: 'Perfect Ten', spanish: 'Diez Perfecto' },
        description: { english: 'Get a perfect score.', spanish: 'Consigue una puntuación perfecta.' },
        isUnlocked: function (profile) { return profile.perfectScores >= 1; }
    },
    {
        id: 'streak-scholar',
        icon: 'fa-medal',
        title: { english: 'Streak Scholar', spanish: 'Racha de Oro' },
        description: { english: 'Get 3 perfect scores.', spanish: 'Consigue 3 puntuaciones perfectas.' },
        isUnlocked: function (profile) { return profile.perfectScores >= 3; }
    },
    {
        id: 'steady-learner',
        icon: 'fa-chart-line',
        title: { english: 'Steady Learner', spanish: 'Aprendiz Constante' },
        description: { english: 'Reach 70% overall accuracy.', spanish: 'Alcanza 70% de precisión general.' },
        isUnlocked: function (profile) { return Number(getAccuracy(profile)) >= 70; }
    },
    {
        id: 'master-of-borinquen',
        icon: 'fa-crown',
        title: { english: 'Master of Boriken', spanish: 'Maestro de Boriken' },
        description: { english: 'Reach 90% overall accuracy after at least 3 attempts.', spanish: 'Alcanza 90% de precisión general después de al menos 3 intentos.' },
        isUnlocked: function (profile) { return profile.attempts >= 3 && Number(getAccuracy(profile)) >= 90; }
    },
    {
        id: 'quiz-veteran',
        icon: 'fa-fire',
        title: { english: 'Quiz Veteran', spanish: 'Veterano del Cuestionario' },
        description: { english: 'Complete 10 quiz attempts.', spanish: 'Completa 10 intentos del cuestionario.' },
        isUnlocked: function (profile) { return profile.attempts >= 10; }
    }
];

// Make a brand-new empty profile for a new player.
function makeNewProfile() {
    return {
        attempts: 0,
        totalCorrect: 0,
        totalQuestions: 0,
        highestScore: 0,
        highestPercentage: 0,
        highestScores: [],
        perfectScores: 0,
        achievements: []
    };
}

// Clean the saved top scores list before using it.
// This removes bad values, changes the values to numbers,
// sorts them from highest to lowest, and keeps only the top few.
function normalizeHighestScores(list) {
    if (!Array.isArray(list)) {
        return [];
    }

    const scores = [];

    for (let i = 0; i < list.length; i++) {
        const score = Number(list[i]);

        if (!Number.isNaN(score)) {
            scores.push(score);
        }
    }

    scores.sort(function (a, b) {
        return b - a;
    });

    return scores.slice(0, MAX_HIGH_SCORES);
}

// Clean the saved achievements list before using it.
// This removes empty or invalid values.
function normalizeAchievements(list) {
    if (!Array.isArray(list)) {
        return [];
    }

    const result = [];

    for (let i = 0; i < list.length; i++) {
        if (list[i]) {
            result.push(list[i]);
        }
    }

    return result;
}

// Make sure a loaded profile always has safe values and the full shape we expect.
// This protects the rest of the code from broken or missing saved data.
function normalizeProfile(profile) {
    const safe = profile || {};

    return {
        attempts: Number(safe.attempts) || 0,
        totalCorrect: Number(safe.totalCorrect) || 0,
        totalQuestions: Number(safe.totalQuestions) || 0,
        highestScore: Number(safe.highestScore) || 0,
        highestPercentage: Number(safe.highestPercentage) || 0,
        highestScores: normalizeHighestScores(safe.highestScores),
        perfectScores: Number(safe.perfectScores) || 0,
        achievements: normalizeAchievements(safe.achievements)
    };
}

// Load the saved profile from localStorage.
// If there is no saved data, or the saved data is broken,
// return a new empty profile instead.
function loadProfile() {
    const saved = localStorage.getItem(PROFILE_STORAGE_KEY);

    if (!saved) {
        return makeNewProfile();
    }

    try {
        return normalizeProfile(JSON.parse(saved));
    } catch (error) {
        console.error('Could not load profile:', error);
        return makeNewProfile();
    }
}

// Save a profile back to localStorage after cleaning it.
function saveProfile(profile) {
    localStorage.setItem(PROFILE_STORAGE_KEY, JSON.stringify(normalizeProfile(profile)));
}

// Work out the player's overall accuracy across every quiz attempt.
// The result is returned as a string like "78.4".
function getAccuracy(profile) {
    if (!profile.totalQuestions) {
        return '0.0';
    }

    return ((profile.totalCorrect / profile.totalQuestions) * 100).toFixed(1);
}

// Return the labels used by the quiz results and account page
// in the current language.
function getQuizLabels() {
    if (currentLanguage === 'spanish') {
        return {
            profileTitle: 'Perfil del Jugador',
            attempts: 'Intentos',
            highestScore: 'Puntuación Más Alta',
            highestScores: 'Mejores Puntuaciones',
            accuracy: 'Exactitud',
            achievementsUnlocked: 'logros desbloqueados',
            locked: 'Bloqueado',
            unlocked: 'Desbloqueado',
            unlockPrefix: 'Logro desbloqueado:',
            explanationPrefixCorrect: '¡Correcto!',
            explanationPrefixIncorrect: 'Incorrecto.',
            noScores: 'Aún no hay puntuaciones.',
            scoreLine: 'Anotaste'
        };
    }

    return {
        profileTitle: 'Player Profile',
        attempts: 'Attempts',
        highestScore: 'Highest Score',
        highestScores: 'Top Scores',
        accuracy: 'Accuracy',
        achievementsUnlocked: 'achievements unlocked',
        locked: 'Locked',
        unlocked: 'Unlocked',
        unlockPrefix: 'Achievement unlocked:',
        explanationPrefixCorrect: 'Correct!',
        explanationPrefixIncorrect: 'Incorrect.',
        noScores: 'No scores yet.',
        scoreLine: 'You scored'
    };
}

// Get the correct language text from one achievement object.
// If the current language is missing, fall back to English.
function getAchievementText(achievement, field) {
    if (achievement[field] && achievement[field][currentLanguage]) {
        return achievement[field][currentLanguage];
    }

    if (achievement[field] && achievement[field].english) {
        return achievement[field].english;
    }

    return '';
}

// Build all of the achievement cards shown on the account page.
// Cards look different depending on whether they are locked or unlocked.
function buildAchievementMarkup(profile) {
    const labels = getQuizLabels();
    let html = '';

    for (let i = 0; i < achievementDefinitions.length; i++) {
        const achievement = achievementDefinitions[i];
        const unlocked = profile.achievements.indexOf(achievement.id) !== -1;

        html += `
            <div class="achievement-card${unlocked ? ' unlocked' : ''}">
                <div class="achievement-icon">
                    <i class="fa-solid ${achievement.icon}"></i>
                </div>
                <div class="achievement-copy">
                    <div class="achievement-title-row">
                        <h4>${getAchievementText(achievement, 'title')}</h4>
                        <span class="achievement-state">${unlocked ? labels.unlocked : labels.locked}</span>
                    </div>
                    <p>${getAchievementText(achievement, 'description')}</p>
                </div>
            </div>
        `;
    }

    return html;
}

// Build the full HTML for the account page.
// This includes the player's attempts, scores, accuracy, and achievement cards.
function buildProfileMarkup() {
    const profile = loadProfile();
    const labels = getQuizLabels();
    let topScores = labels.noScores;

    if (profile.highestScores.length > 0) {
        topScores = profile.highestScores.join(', ');
    }

    return `
        <div class="quiz-profile-card">
            <div class="quiz-profile-header">
                <h3>${labels.profileTitle}</h3>
                <span class="quiz-profile-badge">${profile.achievements.length}/${achievementDefinitions.length} ${labels.achievementsUnlocked}</span>
            </div>
            <div class="quiz-stats-grid">
                <div class="quiz-stat">
                    <span class="quiz-stat-label">${labels.attempts}</span>
                    <strong>${profile.attempts}</strong>
                </div>
                <div class="quiz-stat">
                    <span class="quiz-stat-label">${labels.highestScore}</span>
                    <strong>${profile.highestScore}/${MAX_QUIZ_QUESTIONS}</strong>
                </div>
                <div class="quiz-stat">
                    <span class="quiz-stat-label">${labels.highestScores}</span>
                    <strong>${topScores}</strong>
                </div>
                <div class="quiz-stat">
                    <span class="quiz-stat-label">${labels.accuracy}</span>
                    <strong>${getAccuracy(profile)}%</strong>
                </div>
            </div>
            <div class="achievement-grid">
                ${buildAchievementMarkup(profile)}
            </div>
        </div>
    `;
}

// Put the built account page HTML into the requested container.
function renderProfileSummary(containerId) {
    const container = document.getElementById(containerId);

    if (container) {
        container.innerHTML = buildProfileMarkup();
    }
}

// Public function used by routing when the account page opens.
function loadAccountContent() {
    renderProfileSummary('account-content');
}

// Check every achievement rule against the current profile.
// Newly unlocked achievements are added to the profile and returned
// so the quiz can show popup animations for them.
function unlockAchievements(profile) {
    const newUnlocks = [];

    for (let i = 0; i < achievementDefinitions.length; i++) {
        const achievement = achievementDefinitions[i];
        const alreadyUnlocked = profile.achievements.indexOf(achievement.id) !== -1;

        if (!alreadyUnlocked && achievement.isUnlocked(profile)) {
            profile.achievements.push(achievement.id);
            newUnlocks.push(achievement);
        }
    }

    return newUnlocks;
}

// Show a temporary popup for a new achievement.
// `delay` lets multiple achievements appear one after another.
function showAchievementAnimation(achievement, delay) {
    const labels = getQuizLabels();
    const toast = document.createElement('div');

    toast.className = 'achievement-toast';
    toast.innerHTML = `
        <div class="achievement-toast-icon">
            <i class="fa-solid ${achievement.icon}"></i>
        </div>
        <div class="achievement-toast-copy">
            <div class="achievement-toast-label">${labels.unlockPrefix}</div>
            <div class="achievement-toast-title">${getAchievementText(achievement, 'title')}</div>
            <div class="achievement-toast-desc">${getAchievementText(achievement, 'description')}</div>
        </div>
    `;

    setTimeout(function () {
        document.body.appendChild(toast);

        requestAnimationFrame(function () {
            toast.classList.add('show');
        });

        setTimeout(function () {
            toast.classList.remove('show');

            setTimeout(function () {
                toast.remove();
            }, 350);
        }, 2800);
    }, delay || 0);
}

// Simple debug helper that prints the saved profile information to the console.
function displayStats() {
    const profile = loadProfile();

    console.log('Attempts:', profile.attempts);
    console.log('High Score:', profile.highestScore);
    console.log('Top Scores:', profile.highestScores.join(', '));
    console.log('Accuracy:', getAccuracy(profile) + '%');
    console.log('Achievements:', profile.achievements);
}
