// Account profile, achievements, and saved quiz stats for the Puerto Rico site.
// This file handles everything related to the saved quiz profile:
// loading and saving localStorage data, calculating stats, unlocking
// achievements, rendering the account page, and showing achievement toasts.

// localStorage key used to persist the user's profile between visits.
const PROFILE_STORAGE_KEY = 'userProfile';
// Shared quiz settings also reused when showing profile stats.
const MAX_QUIZ_QUESTIONS = 10;
const MAX_HIGH_SCORES = 5;

// Default shape of the saved profile. New users start from this structure.
const defaultProfile = {
    attempts: 0,
    totalCorrect: 0,
    totalQuestions: 0,
    highestScore: 0,
    highestPercentage: 0,
    highestScores: [],
    perfectScores: 0,
    achievements: []
};

// Rules and display text for every achievement the quiz can unlock.
// Each achievement includes:
// - an id saved to the profile
// - an icon for the UI
// - English and Spanish text
// - a function that decides when it becomes unlocked
const achievementDefinitions = [
    {
        id: 'first-steps',
        icon: 'fa-shoe-prints',
        title: {
            english: 'First Steps',
            spanish: 'Primeros Pasos'
        },
        description: {
            english: 'Finish your first quiz.',
            spanish: 'Completa tu primer cuestionario.'
        },
        isUnlocked: function (profile) {
            return profile.attempts >= 1;
        }
    },
    {
        id: 'curious-mind',
        icon: 'fa-lightbulb',
        title: {
            english: 'Curious Mind',
            spanish: 'Mente Curiosa'
        },
        description: {
            english: 'Complete 5 quiz attempts.',
            spanish: 'Completa 5 intentos del cuestionario.'
        },
        isUnlocked: function (profile) {
            return profile.attempts >= 5;
        }
    },
    {
        id: 'island-expert',
        icon: 'fa-trophy',
        title: {
            english: 'Island Expert',
            spanish: 'Experto de la Isla'
        },
        description: {
            english: 'Score 8 out of 10 or higher.',
            spanish: 'Obtã©n 8 de 10 o mãis.'
        },
        isUnlocked: function (profile) {
            return profile.highestScore >= 8;
        }
    },
    {
        id: 'perfect-ten',
        icon: 'fa-star',
        title: {
            english: 'Perfect Ten',
            spanish: 'Diez Perfecto'
        },
        description: {
            english: 'Get a perfect score.',
            spanish: 'Consigue una puntuaciãn perfecta.'
        },
        isUnlocked: function (profile) {
            return profile.perfectScores >= 1;
        }
    },
    {
        id: 'streak-scholar',
        icon: 'fa-medal',
        title: {
            english: 'Streak Scholar',
            spanish: 'Racha de Oro'
        },
        description: {
            english: 'Get 3 perfect scores.',
            spanish: 'Consigue 3 puntuaciones perfectas.'
        },
        isUnlocked: function (profile) {
            return profile.perfectScores >= 3;
        }
    },
    {
        id: 'steady-learner',
        icon: 'fa-chart-line',
        title: {
            english: 'Steady Learner',
            spanish: 'Aprendiz Constante'
        },
        description: {
            english: 'Reach 70% overall accuracy.',
            spanish: 'Alcanza 70% de precisiãn general.'
        },
        isUnlocked: function (profile) {
            return Number(getAccuracy(profile)) >= 70;
        }
    },
    {
        id: 'master-of-borinquen',
        icon: 'fa-crown',
        title: {
            english: 'Master of Boriken',
            spanish: 'Maestro de Boriken'
        },
        description: {
            english: 'Reach 90% overall accuracy after at least 3 attempts.',
            spanish: 'Alcanza 90% de precisiãn general despuãcs de al menos 3 intentos.'
        },
        isUnlocked: function (profile) {
            return profile.attempts >= 3 && Number(getAccuracy(profile)) >= 90;
        }
    },
    {
        id: 'quiz-veteran',
        icon: 'fa-fire',
        title: {
            english: 'Quiz Veteran',
            spanish: 'Veterano del Cuestionario'
        },
        description: {
            english: 'Complete 10 quiz attempts.',
            spanish: 'Completa 10 intentos del cuestionario.'
        },
        isUnlocked: function (profile) {
            return profile.attempts >= 10;
        }
    }
];

// Creates a brand-new profile object with fresh arrays so nothing is shared
// by reference between users or function calls.
function createDefaultProfile() {
    return {
        attempts: defaultProfile.attempts,
        totalCorrect: defaultProfile.totalCorrect,
        totalQuestions: defaultProfile.totalQuestions,
        highestScore: defaultProfile.highestScore,
        highestPercentage: defaultProfile.highestPercentage,
        highestScores: [],
        perfectScores: defaultProfile.perfectScores,
        achievements: []
    };
}

// Cleans and sorts a possible high-score array loaded from storage.
function normalizeHighestScores(values) {
    const scores = [];

    if (!Array.isArray(values)) {
        return scores;
    }

    for (let i = 0; i < values.length; i++) {
        const score = Number(values[i]);

        if (!Number.isNaN(score)) {
            scores.push(score);
        }
    }

    scores.sort(function (a, b) {
        return b - a;
    });

    return scores.slice(0, MAX_HIGH_SCORES);
}

// Filters the stored achievement list so only truthy ids remain.
function normalizeAchievements(values) {
    const achievements = [];

    if (!Array.isArray(values)) {
        return achievements;
    }

    for (let i = 0; i < values.length; i++) {
        if (values[i]) {
            achievements.push(values[i]);
        }
    }

    return achievements;
}

// Makes sure any loaded profile has the full expected shape and safe value
// types before the rest of the app uses it.
function normalizeProfile(profile) {
    const safeProfile = profile || {};
    const normalized = createDefaultProfile();

    normalized.attempts = Number(safeProfile.attempts) || 0;
    normalized.totalCorrect = Number(safeProfile.totalCorrect) || 0;
    normalized.totalQuestions = Number(safeProfile.totalQuestions) || 0;
    normalized.highestScore = Number(safeProfile.highestScore) || 0;
    normalized.highestPercentage = Number(safeProfile.highestPercentage) || 0;
    normalized.highestScores = normalizeHighestScores(safeProfile.highestScores);
    normalized.perfectScores = Number(safeProfile.perfectScores) || 0;
    normalized.achievements = normalizeAchievements(safeProfile.achievements);

    return normalized;
}

// Reads the saved profile from localStorage. If nothing is stored, or if the
// saved data cannot be parsed, a new default profile is returned instead.
function loadProfile() {
    const saved = localStorage.getItem(PROFILE_STORAGE_KEY);

    if (!saved) {
        return createDefaultProfile();
    }

    try {
        return normalizeProfile(JSON.parse(saved));
    } catch (error) {
        console.error('Could not parse saved profile:', error);
        return createDefaultProfile();
    }
}

// Saves a profile back to localStorage after normalizing it first.
function saveProfile(profile) {
    localStorage.setItem(PROFILE_STORAGE_KEY, JSON.stringify(normalizeProfile(profile)));
}

// Calculates overall answer accuracy as a percentage string for display.
function getAccuracy(profile) {
    if (!profile.totalQuestions) {
        return '0.0';
    }

    return ((profile.totalCorrect / profile.totalQuestions) * 100).toFixed(1);
}

// Returns the label text used by both the quiz results and account page,
// matching the site's current language.
function getQuizLabels() {
    if (currentLanguage === 'spanish') {
        return {
            profileTitle: 'Perfil del Jugador',
            attempts: 'Intentos',
            highestScore: 'Puntaje Mãis Alto',
            highestScores: 'Mejores Puntajes',
            accuracy: 'Precisiãn',
            achievementsUnlocked: 'logros desbloqueados',
            locked: 'Bloqueado',
            unlocked: 'Desbloqueado',
            unlockPrefix: 'Logro desbloqueado:',
            explanationPrefixCorrect: '¡Correcto!',
            explanationPrefixIncorrect: 'Incorrecto.',
            noScores: 'Todavã no hay puntajes.',
            scoreLine: 'Tu puntaje fue'
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

// Reads a translated field from an achievement object, preferring the active
// language and falling back to English if needed.
function getAchievementText(achievement, field) {
    const fieldData = achievement[field];

    if (!fieldData) {
        return '';
    }

    if (fieldData[currentLanguage]) {
        return fieldData[currentLanguage];
    }

    if (fieldData.english) {
        return fieldData.english;
    }

    return '';
}

// Builds the achievement card markup for the account page and marks cards
// as unlocked when the profile already contains that achievement id.
function buildAchievementMarkup(profile) {
    const labels = getQuizLabels();
    let markup = '';

    for (let i = 0; i < achievementDefinitions.length; i++) {
        const achievement = achievementDefinitions[i];
        const unlocked = profile.achievements.indexOf(achievement.id) !== -1;

        markup += `
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

    return markup;
}

// Builds the full account page summary showing attempts, best score,
// top scores, accuracy, and the achievement grid.
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

// Inserts the account page markup into the requested container.
function renderProfileSummary(containerId) {
    const profileContainer = document.getElementById(containerId);

    if (!profileContainer) {
        return;
    }

    profileContainer.innerHTML = buildProfileMarkup();
}

// Public page loader used by the routing file when the account page opens.
function loadAccountContent() {
    renderProfileSummary('account-content');
}

// Checks every achievement rule against the latest profile and records newly
// earned achievements so the caller can animate them.
function unlockAchievements(profile) {
    const newlyUnlocked = [];

    for (let i = 0; i < achievementDefinitions.length; i++) {
        const achievement = achievementDefinitions[i];
        const alreadyUnlocked = profile.achievements.indexOf(achievement.id) !== -1;

        if (!alreadyUnlocked && achievement.isUnlocked(profile)) {
            profile.achievements.push(achievement.id);
            newlyUnlocked.push(achievement);
        }
    }

    return newlyUnlocked;
}

// Shows a temporary achievement toast on screen with an optional delay so
// multiple unlocks can appear one after another instead of all at once.
function showAchievementAnimation(achievement, delay) {
    const labels = getQuizLabels();
    const toast = document.createElement('div');
    const toastDelay = delay || 0;

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
    }, toastDelay);
}

// Debug helper that prints the current saved profile stats to the console.
function displayStats() {
    const profile = loadProfile();

    console.log('Attempts:', profile.attempts);
    console.log('High Score:', profile.highestScore);
    console.log('Top Scores:', profile.highestScores.join(', '));
    console.log('Accuracy:', getAccuracy(profile) + '%');
    console.log('Achievements:', profile.achievements);
}
