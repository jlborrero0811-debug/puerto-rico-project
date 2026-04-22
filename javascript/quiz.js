// Quiz question flow and scoring for the Puerto Rico quiz.
// This file is responsible for building the quiz UI, moving between
// questions, showing answer feedback, calculating the score, and saving
// results to the player's profile.

// Tracks which question the user is currently viewing.
let currentQuizQuestion = 0;
// Stores the answer index the user picked for each question.
let quizAnswers = [];
// Holds the current randomized set of quiz questions for this attempt.
let currentQuizQuestions = [];

// Creates a shuffled copy of an array so the original data stays unchanged.
function shuffleArray(array) {
    const result = array.slice();

    for (let i = result.length - 1; i > 0; i--) {
        const randomIndex = Math.floor(Math.random() * (i + 1));
        const temp = result[i];
        result[i] = result[randomIndex];
        result[randomIndex] = temp;
    }

    return result;
}

// Reads the quiz data for the current language and creates a fresh copy of
// each question object so the quiz can safely work with its own data.
function getQuizQuestions() {
    const questions = quizData[currentLanguage].questions;
    const result = [];

    for (let i = 0; i < questions.length; i++) {
        result.push({
            question: questions[i].question,
            options: questions[i].options.slice(),
            correctAnswer: questions[i].correctAnswer,
            explanation: questions[i].explanation
        });
    }

    return result;
}

// Starts a brand-new quiz attempt by randomizing questions, limiting the
// total number used, and clearing the user's previous selections.
function initializeQuiz() {
    const shuffledQuestions = shuffleArray(getQuizQuestions());
    currentQuizQuestions = shuffledQuestions.slice(0, MAX_QUIZ_QUESTIONS);
    currentQuizQuestion = 0;
    quizAnswers = [];
}

// Counts how many answers the user got correct in the current quiz attempt.
function calculateQuizScore() {
    let score = 0;

    for (let i = 0; i < currentQuizQuestions.length; i++) {
        if (quizAnswers[i] === currentQuizQuestions[i].correctAnswer) {
            score++;
        }
    }

    return score;
}

// Builds the quiz HTML inside the quiz container and wires up the
// navigation buttons for next, previous, and retake actions.
function loadQuizContent() {
    const quizContainer = document.getElementById('quiz-content');

    if (!quizContainer) {
        return;
    }

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

// Loads a single question into the page, creates its answer buttons,
// restores feedback if the question was already answered, and updates the
// progress display and navigation button states.
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

    progressElement.textContent = translations[currentLanguage].questionOf + ' ' + (questionIndex + 1) + ' ' + translations[currentLanguage].of + ' ' + currentQuizQuestions.length;
    questionText.textContent = question.question;
    optionsContainer.innerHTML = '';
    questionElement.classList.add('show');

    for (let i = 0; i < question.options.length; i++) {
        const optionElement = document.createElement('button');
        optionElement.className = 'quiz-option';
        optionElement.textContent = question.options[i];
        optionElement.dataset.index = i;
        optionElement.addEventListener('click', function () {
            selectQuizOption(questionIndex, i);
        });
        optionsContainer.appendChild(optionElement);
    }

    if (quizAnswers[questionIndex] !== undefined) {
        renderQuizFeedback(questionIndex);
    } else {
        explanationElement.style.display = 'none';
        explanationElement.textContent = '';
    }

    updateQuizNavigation(questionIndex);
}

// Visually marks the correct answer, the user's selected answer, and shows
// the explanation text for the current question.
function renderQuizFeedback(questionIndex) {
    const question = currentQuizQuestions[questionIndex];
    const selectedIndex = quizAnswers[questionIndex];
    const explanationElement = document.getElementById('quiz-explanation');
    const labels = getQuizLabels();
    const optionElements = document.querySelectorAll('#quiz-options .quiz-option');

    for (let i = 0; i < optionElements.length; i++) {
        const optionElement = optionElements[i];
        const optionIndex = Number(optionElement.dataset.index);

        optionElement.classList.remove('selected');
        optionElement.classList.remove('correct');
        optionElement.classList.remove('incorrect');

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
    }

    if (explanationElement) {
        let prefix = labels.explanationPrefixIncorrect;

        if (selectedIndex === question.correctAnswer) {
            prefix = labels.explanationPrefixCorrect;
        }

        explanationElement.innerHTML = '<strong>' + prefix + '</strong> ' + question.explanation;
        explanationElement.style.display = 'block';
    }
}

// Saves the selected answer for a question the first time the user clicks
// an option, then immediately shows the feedback for that answer.
function selectQuizOption(questionIndex, optionIndex) {
    if (quizAnswers[questionIndex] !== undefined) {
        return;
    }

    quizAnswers[questionIndex] = optionIndex;
    renderQuizFeedback(questionIndex);
}

// Moves forward through the quiz one question at a time. If the user is on
// the last question, this shows the final results screen instead.
function nextQuizQuestion() {
    if (currentQuizQuestion < currentQuizQuestions.length - 1) {
        currentQuizQuestion++;
        loadQuizQuestion(currentQuizQuestion);
        return;
    }

    showQuizResults();
}

// Moves back to the previous question so the user can review earlier items.
function previousQuizQuestion() {
    if (currentQuizQuestion > 0) {
        currentQuizQuestion--;
        loadQuizQuestion(currentQuizQuestion);
    }
}

// Updates the previous and next buttons so the user gets the right labels
// and disabled state based on where they are in the quiz.
function updateQuizNavigation(questionIndex) {
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');

    if (!prevBtn || !nextBtn) {
        return;
    }

    prevBtn.style.display = 'block';
    prevBtn.disabled = questionIndex === 0;
    prevBtn.style.opacity = questionIndex === 0 ? '0.6' : '1';

    if (questionIndex === currentQuizQuestions.length - 1) {
        nextBtn.textContent = translations[currentLanguage].finishQuiz || translations[currentLanguage].quizComplete;
    } else {
        nextBtn.textContent = translations[currentLanguage].next;
    }
}

// Updates the saved player profile after a completed quiz attempt. This
// includes attempts, totals, best scores, perfect scores, and achievement
// unlock checks.
function updateProfileWithResults(score, total) {
    const profile = loadProfile();
    const percentage = Math.round((score / total) * 100);
    const updatedHighScores = profile.highestScores.slice();

    profile.attempts += 1;
    profile.totalCorrect += score;
    profile.totalQuestions += total;
    profile.highestScore = Math.max(profile.highestScore, score);
    profile.highestPercentage = Math.max(profile.highestPercentage, percentage);

    updatedHighScores.push(score);
    updatedHighScores.sort(function (a, b) {
        return b - a;
    });
    profile.highestScores = updatedHighScores.slice(0, MAX_HIGH_SCORES);

    if (score === total) {
        profile.perfectScores += 1;
    }

    const newUnlocks = unlockAchievements(profile);
    saveProfile(profile);

    return {
        percentage: percentage,
        newUnlocks: newUnlocks
    };
}

// Hides the question UI, shows the score summary, and triggers any new
// achievement animations the player earned during this attempt.
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

    const resultData = updateProfileWithResults(score, total);
    const percentage = resultData.percentage;
    const newUnlocks = resultData.newUnlocks;

    scoreElement.innerHTML = translations[currentLanguage].quizComplete + ' ' + labels.scoreLine + ' ' + score + ' ' + translations[currentLanguage].outOf + ' ' + total + ' (' + percentage + '%)';
    scoreElement.style.display = 'block';

    questionElement.style.display = 'none';
    navigationElement.style.display = 'none';
    retakeBtn.style.display = 'inline-block';

    for (let i = 0; i < newUnlocks.length; i++) {
        showAchievementAnimation(newUnlocks[i], i * 450);
    }
}

// Restarts the quiz by rebuilding the quiz interface from scratch.
function retakeQuiz() {
    loadQuizContent();
}
