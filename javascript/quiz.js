// Quiz profile, achievements, and scoring for the Puerto Rico quiz.

const PROFILE_STORAGE_KEY = 'userProfile';
const MAX_QUIZ_QUESTIONS = 10;
const MAX_HIGH_SCORES = 5;

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
        isUnlocked: profile => profile.attempts >= 1
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
        isUnlocked: profile => profile.attempts >= 5
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
            spanish: 'Obtén 8 de 10 o más.'
        },
        isUnlocked: profile => profile.highestScore >= 8
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
            spanish: 'Consigue una puntuación perfecta.'
        },
        isUnlocked: profile => profile.perfectScores >= 1
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
        isUnlocked: profile => profile.perfectScores >= 3
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
            spanish: 'Alcanza 70% de precisión general.'
        },
        isUnlocked: profile => Number(getAccuracy(profile)) >= 70
    },
    {
        id: 'master-of-borinquen',
        icon: 'fa-crown',
        title: {
            english: 'Master of Borikén',
            spanish: 'Maestro de Borikén'
        },
        description: {
            english: 'Reach 90% overall accuracy after at least 3 attempts.',
            spanish: 'Alcanza 90% de precisión general después de al menos 3 intentos.'
        },
        isUnlocked: profile => profile.attempts >= 3 && Number(getAccuracy(profile)) >= 90
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
        isUnlocked: profile => profile.attempts >= 10
    }
];

let currentQuizQuestion = 0;
let quizAnswers = [];
let currentQuizQuestions = [];

function createDefaultProfile() {
    return { ...defaultProfile, highestScores: [], achievements: [] };
}

function loadProfile() {
    const saved = localStorage.getItem(PROFILE_STORAGE_KEY);

    if (!saved) {
        return createDefaultProfile();
    }

    try {
        const parsed = JSON.parse(saved);
        return normalizeProfile(parsed);
    } catch (error) {
        console.error('Could not parse saved profile:', error);
        return createDefaultProfile();
    }
}

function normalizeProfile(profile) {
    return {
        ...createDefaultProfile(),
        ...profile,
        highestScores: Array.isArray(profile?.highestScores)
            ? profile.highestScores
                .map(value => Number(value))
                .filter(value => !Number.isNaN(value))
                .sort((a, b) => b - a)
                .slice(0, MAX_HIGH_SCORES)
            : [],
        achievements: Array.isArray(profile?.achievements)
            ? profile.achievements.filter(Boolean)
            : []
    };
}

function saveProfile(profile) {
    localStorage.setItem(PROFILE_STORAGE_KEY, JSON.stringify(normalizeProfile(profile)));
}

function getAccuracy(profile) {
    if (!profile.totalQuestions) {
        return '0.0';
    }

    return ((profile.totalCorrect / profile.totalQuestions) * 100).toFixed(1);
}

function getQuizLabels() {
    if (currentLanguage === 'spanish') {
        return {
            profileTitle: 'Perfil del Jugador',
            attempts: 'Intentos',
            highestScore: 'Puntaje Más Alto',
            highestScores: 'Mejores Puntajes',
            accuracy: 'Precisión',
            achievementsUnlocked: 'logros desbloqueados',
            locked: 'Bloqueado',
            unlocked: 'Desbloqueado',
            unlockPrefix: 'Logro desbloqueado:',
            explanationPrefixCorrect: '¡Correcto!',
            explanationPrefixIncorrect: 'Incorrecto.',
            noScores: 'Todavía no hay puntajes.',
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

function getAchievementText(achievement, field) {
    return achievement[field]?.[currentLanguage] || achievement[field]?.english || '';
}

function shuffleArray(array) {
    const result = array.slice();
    for (let i = result.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [result[i], result[j]] = [result[j], result[i]];
    }
    return result;
}

function getQuizQuestions() {
    return quizData[currentLanguage].questions.map(question => ({
        ...question,
        options: question.options.slice()
    }));
}

function initializeQuiz() {
    currentQuizQuestions = shuffleArray(getQuizQuestions()).slice(0, MAX_QUIZ_QUESTIONS);
    currentQuizQuestion = 0;
    quizAnswers = [];
}

function calculateQuizScore() {
    return currentQuizQuestions.reduce((score, question, index) => {
        return score + (quizAnswers[index] === question.correctAnswer ? 1 : 0);
    }, 0);
}

function buildAchievementMarkup(profile) {
    const labels = getQuizLabels();

    return achievementDefinitions.map(achievement => {
        const unlocked = profile.achievements.includes(achievement.id);
        return `
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
    }).join('');
}

function buildProfileMarkup() {
    const profile = loadProfile();
    const labels = getQuizLabels();
    const topScores = profile.highestScores.length
        ? profile.highestScores.join(', ')
        : labels.noScores;

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

function renderProfileSummary(containerId) {
    const profileContainer = document.getElementById(containerId);
    if (!profileContainer) return;

    profileContainer.innerHTML = buildProfileMarkup();
}

function loadAccountContent() {
    renderProfileSummary('account-content');
}

function loadQuizContent() {
    const quizContainer = document.getElementById('quiz-content');
    if (!quizContainer) return;

    initializeQuiz();

    quizContainer.innerHTML = `
        <div class="quiz-question" id="quiz-question">
            <div class="quiz-progress" id="quiz-progress">${translations[currentLanguage].questionOf} 1 ${translations[currentLanguage].of} ${currentQuizQuestions.length}</div>
            <h3 id="question-text"></h3>
            <div class="quiz-options" id="quiz-options"></div>
            <div class="quiz-explanation" id="quiz-explanation"></div>
        </div>
        <div class="quiz-navigation">
            <button class="btn-primary-site" id="prev-btn" style="display: none;">${translations[currentLanguage].previous}</button>
            <button class="btn-primary-site" id="next-btn">${translations[currentLanguage].next}</button>
        </div>
        <div class="quiz-score" id="quiz-score"></div>
        <button class="btn-primary-site" id="retake-btn" style="display: none;">${translations[currentLanguage].retakeQuiz}</button>
    `;

    loadQuizQuestion(0);

    document.getElementById('next-btn').addEventListener('click', nextQuizQuestion);
    document.getElementById('prev-btn').addEventListener('click', previousQuizQuestion);
    document.getElementById('retake-btn').addEventListener('click', retakeQuiz);
}

function loadQuizQuestion(questionIndex) {
    const question = currentQuizQuestions[questionIndex];
    const questionElement = document.getElementById('quiz-question');
    const questionText = document.getElementById('question-text');
    const optionsContainer = document.getElementById('quiz-options');
    const progressElement = document.getElementById('quiz-progress');
    const explanationElement = document.getElementById('quiz-explanation');

    if (!question || !questionElement || !questionText || !optionsContainer || !progressElement || !explanationElement) {
        return;
    }

    progressElement.textContent = `${translations[currentLanguage].questionOf} ${questionIndex + 1} ${translations[currentLanguage].of} ${currentQuizQuestions.length}`;
    questionText.textContent = question.question;
    optionsContainer.innerHTML = '';
    questionElement.classList.add('show');

    question.options.forEach((option, index) => {
        const optionElement = document.createElement('button');
        optionElement.className = 'quiz-option';
        optionElement.textContent = option;
        optionElement.dataset.index = index;
        optionElement.addEventListener('click', () => selectQuizOption(questionIndex, index));
        optionsContainer.appendChild(optionElement);
    });

    if (quizAnswers[questionIndex] !== undefined) {
        renderQuizFeedback(questionIndex);
    } else {
        explanationElement.style.display = 'none';
        explanationElement.textContent = '';
    }

    updateQuizNavigation(questionIndex);
}

function renderQuizFeedback(questionIndex) {
    const question = currentQuizQuestions[questionIndex];
    const selectedIndex = quizAnswers[questionIndex];
    const explanationElement = document.getElementById('quiz-explanation');
    const labels = getQuizLabels();

    document.querySelectorAll('#quiz-options .quiz-option').forEach(optionElement => {
        const optionIndex = Number(optionElement.dataset.index);
        optionElement.classList.remove('selected', 'correct', 'incorrect');

        if (optionIndex === question.correctAnswer) {
            optionElement.classList.add('correct');
        }

        if (optionIndex === selectedIndex) {
            optionElement.classList.add('selected');
            if (selectedIndex !== question.correctAnswer) {
                optionElement.classList.add('incorrect');
            }
        }

        optionElement.disabled = true;
    });

    if (explanationElement) {
        const prefix = selectedIndex === question.correctAnswer
            ? labels.explanationPrefixCorrect
            : labels.explanationPrefixIncorrect;
        explanationElement.innerHTML = `<strong>${prefix}</strong> ${question.explanation}`;
        explanationElement.style.display = 'block';
    }
}

function selectQuizOption(questionIndex, optionIndex) {
    if (quizAnswers[questionIndex] !== undefined) {
        return;
    }

    quizAnswers[questionIndex] = optionIndex;
    renderQuizFeedback(questionIndex);
}

function nextQuizQuestion() {
    if (currentQuizQuestion < currentQuizQuestions.length - 1) {
        currentQuizQuestion++;
        loadQuizQuestion(currentQuizQuestion);
    } else {
        showQuizResults();
    }
}

function previousQuizQuestion() {
    if (currentQuizQuestion > 0) {
        currentQuizQuestion--;
        loadQuizQuestion(currentQuizQuestion);
    }
}

function updateQuizNavigation(questionIndex) {
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');

    if (!prevBtn || !nextBtn) return;

    prevBtn.style.display = 'block';
    prevBtn.disabled = questionIndex === 0;
    prevBtn.style.opacity = questionIndex === 0 ? '0.6' : '1';
    nextBtn.textContent = questionIndex === currentQuizQuestions.length - 1
        ? (translations[currentLanguage].finishQuiz || translations[currentLanguage].quizComplete)
        : translations[currentLanguage].next;
}

function updateProfileWithResults(score, total) {
    const profile = loadProfile();
    const percentage = Math.round((score / total) * 100);

    profile.attempts += 1;
    profile.totalCorrect += score;
    profile.totalQuestions += total;
    profile.highestScore = Math.max(profile.highestScore, score);
    profile.highestPercentage = Math.max(profile.highestPercentage, percentage);
    profile.highestScores = [...profile.highestScores, score]
        .sort((a, b) => b - a)
        .slice(0, MAX_HIGH_SCORES);

    if (score === total) {
        profile.perfectScores += 1;
    }

    const newUnlocks = unlockAchievements(profile);
    saveProfile(profile);

    return { percentage, newUnlocks };
}

function unlockAchievements(profile) {
    const newlyUnlocked = [];

    achievementDefinitions.forEach(achievement => {
        const alreadyUnlocked = profile.achievements.includes(achievement.id);
        if (!alreadyUnlocked && achievement.isUnlocked(profile)) {
            profile.achievements.push(achievement.id);
            newlyUnlocked.push(achievement);
        }
    });

    return newlyUnlocked;
}

function showAchievementAnimation(achievement, delay = 0) {
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

    setTimeout(() => {
        document.body.appendChild(toast);
        requestAnimationFrame(() => toast.classList.add('show'));

        setTimeout(() => {
            toast.classList.remove('show');
            setTimeout(() => toast.remove(), 350);
        }, 2800);
    }, delay);
}

function showQuizResults() {
    const scoreElement = document.getElementById('quiz-score');
    const questionElement = document.getElementById('quiz-question');
    const navigationElement = document.querySelector('.quiz-navigation');
    const retakeBtn = document.getElementById('retake-btn');
    const score = calculateQuizScore();
    const total = currentQuizQuestions.length;
    const labels = getQuizLabels();

    if (!scoreElement || !questionElement || !navigationElement || !retakeBtn) {
        return;
    }

    const { percentage, newUnlocks } = updateProfileWithResults(score, total);

    scoreElement.innerHTML = `
        ${translations[currentLanguage].quizComplete} ${labels.scoreLine} ${score} ${translations[currentLanguage].outOf} ${total} (${percentage}%)
    `;
    scoreElement.style.display = 'block';

    questionElement.style.display = 'none';
    navigationElement.style.display = 'none';
    retakeBtn.style.display = 'inline-block';

    newUnlocks.forEach((achievement, index) => {
        showAchievementAnimation(achievement, index * 450);
    });
}

function retakeQuiz() {
    loadQuizContent();
}

function displayStats() {
    const profile = loadProfile();

    console.log('Attempts:', profile.attempts);
    console.log('High Score:', profile.highestScore);
    console.log('Top Scores:', profile.highestScores.join(', '));
    console.log('Accuracy:', `${getAccuracy(profile)}%`);
    console.log('Achievements:', profile.achievements);
}
