// This file controls the quiz.
// It creates the quiz on the page, shows one question at a time,
// checks the user's answers, shows feedback, calculates the final score,
// and saves the result to the user's profile.

// This stores which question the user is currently looking at.
let currentQuizQuestion = 0;
// This stores the answer the user picked for each question.
let quizAnswers = [];
// This stores the list of questions being used for the current quiz attempt.
let currentQuizQuestions = [];

// Shuffle an array without changing the original array.
// This is used to randomize the quiz order each time the quiz starts.
function shuffleArray(array) {
    const copy = array.slice();

    for (let i = copy.length - 1; i > 0; i--) {
        const randomIndex = Math.floor(Math.random() * (i + 1));
        const temp = copy[i];
        copy[i] = copy[randomIndex];
        copy[randomIndex] = temp;
    }

    return copy;
}

// Get the quiz questions for the current language.
// A new copy is made so changes in the quiz do not affect the original data.
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

// Start a fresh quiz attempt.
// This randomizes the questions, limits how many are used,
// and clears out any old answers from the last attempt.
function initializeQuiz() {
    currentQuizQuestions = shuffleArray(getQuizQuestions()).slice(0, MAX_QUIZ_QUESTIONS);
    currentQuizQuestion = 0;
    quizAnswers = [];
}

// Count how many answers the user got correct.
function calculateQuizScore() {
    let score = 0;

    for (let i = 0; i < currentQuizQuestions.length; i++) {
        if (quizAnswers[i] === currentQuizQuestions[i].correctAnswer) {
            score++;
        }
    }

    return score;
}

// Build the quiz HTML inside the quiz section.
// This creates the question area, navigation buttons,
// score area, and retake button.
function loadQuizContent() {
    const quizContainer = document.getElementById('quiz-content');

    if (!quizContainer) {
        return;
    }

    // Start fresh each time the quiz page is opened.
    initializeQuiz();

    quizContainer.innerHTML = `
        <div class="quiz-question" id="quiz-question">
            <div class="quiz-progress" id="quiz-progress"></div>
            <h3 id="question-text"></h3>
            <div class="quiz-options" id="quiz-options"></div>
            <div class="quiz-explanation" id="quiz-explanation"></div>
        </div>
        <div class="quiz-navigation">
            <button class="btn-primary-site" id="prev-btn" style="display:none;">${translations[currentLanguage].previous}</button>
            <button class="btn-primary-site" id="next-btn">${translations[currentLanguage].next}</button>
        </div>
        <div class="quiz-score" id="quiz-score"></div>
        <button class="btn-primary-site" id="retake-btn" style="display:none;">${translations[currentLanguage].retakeQuiz}</button>
    `;

    // Add click events to the quiz buttons after the HTML exists on the page.
    document.getElementById('next-btn').addEventListener('click', nextQuizQuestion);
    document.getElementById('prev-btn').addEventListener('click', previousQuizQuestion);
    document.getElementById('retake-btn').addEventListener('click', retakeQuiz);

    // Show the first question right away.
    loadQuizQuestion(0);
}

// Show one question on the screen.
// This updates the question text, builds the answer buttons,
// shows old feedback if the question was already answered,
// and updates the previous/next buttons.
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

    // Update the question counter at the top.
    progressElement.textContent = translations[currentLanguage].questionOf + ' ' + (questionIndex + 1) + ' ' + translations[currentLanguage].of + ' ' + currentQuizQuestions.length;
    questionText.textContent = question.question;
    optionsContainer.innerHTML = '';
    questionElement.classList.add('show');
    explanationElement.style.display = 'none';
    explanationElement.textContent = '';

    // Make one answer button for each option in the question.
    for (let i = 0; i < question.options.length; i++) {
        const button = document.createElement('button');

        button.className = 'quiz-option';
        button.textContent = question.options[i];
        button.dataset.index = i;
        button.addEventListener('click', function () {
            selectQuizOption(questionIndex, i);
        });

        optionsContainer.appendChild(button);
    }

    // If the user already answered this question before,
    // show the saved feedback again.
    if (quizAnswers[questionIndex] !== undefined) {
        renderQuizFeedback(questionIndex);
    }

    updateQuizNavigation(questionIndex);
}

// Show which answer was correct and which answer the user picked.
// This also disables the answer buttons and shows the explanation text.
function renderQuizFeedback(questionIndex) {
    const question = currentQuizQuestions[questionIndex];
    const selectedIndex = quizAnswers[questionIndex];
    const explanationElement = document.getElementById('quiz-explanation');
    const optionElements = document.querySelectorAll('#quiz-options .quiz-option');
    const labels = getQuizLabels();

    // Go through every answer button and apply the right colors.
    for (let i = 0; i < optionElements.length; i++) {
        const optionIndex = Number(optionElements[i].dataset.index);

        optionElements[i].classList.remove('selected');
        optionElements[i].classList.remove('correct');
        optionElements[i].classList.remove('incorrect');

        if (optionIndex === question.correctAnswer) {
            optionElements[i].classList.add('correct');
        }

        if (optionIndex === selectedIndex) {
            optionElements[i].classList.add('selected');

            if (selectedIndex !== question.correctAnswer) {
                optionElements[i].classList.add('incorrect');
            }
        }

        optionElements[i].disabled = true;
    }

    // Show the explanation underneath the answers.
    if (explanationElement) {
        let startText = labels.explanationPrefixIncorrect;

        if (selectedIndex === question.correctAnswer) {
            startText = labels.explanationPrefixCorrect;
        }

        explanationElement.innerHTML = '<strong>' + startText + '</strong> ' + question.explanation;
        explanationElement.style.display = 'block';
    }
}

// Save the answer the first time the user clicks a choice.
// After that, show the feedback right away.
function selectQuizOption(questionIndex, optionIndex) {
    if (quizAnswers[questionIndex] !== undefined) {
        return;
    }

    quizAnswers[questionIndex] = optionIndex;
    renderQuizFeedback(questionIndex);
}

// Move to the next question.
// If the user is already on the last question, show the results screen instead.
function nextQuizQuestion() {
    if (currentQuizQuestion < currentQuizQuestions.length - 1) {
        currentQuizQuestion++;
        loadQuizQuestion(currentQuizQuestion);
    } else {
        showQuizResults();
    }
}

// Move back to the previous question.
function previousQuizQuestion() {
    if (currentQuizQuestion > 0) {
        currentQuizQuestion--;
        loadQuizQuestion(currentQuizQuestion);
    }
}

// Update the quiz buttons at the bottom.
// This handles the Previous button state and changes Next to Finish on the last question.
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

// Save the completed quiz result to the user's profile.
// This updates attempts, total score data, best score data,
// top scores, perfect scores, and newly unlocked achievements.
function updateProfileWithResults(score, total) {
    const profile = loadProfile();
    const percentage = Math.round((score / total) * 100);

    profile.attempts = profile.attempts + 1;
    profile.totalCorrect = profile.totalCorrect + score;
    profile.totalQuestions = profile.totalQuestions + total;

    if (score > profile.highestScore) {
        profile.highestScore = score;
    }

    if (percentage > profile.highestPercentage) {
        profile.highestPercentage = percentage;
    }

    profile.highestScores.push(score);
    profile.highestScores.sort(function (a, b) {
        return b - a;
    });
    profile.highestScores = profile.highestScores.slice(0, MAX_HIGH_SCORES);

    if (score === total) {
        profile.perfectScores = profile.perfectScores + 1;
    }

    const newUnlocks = unlockAchievements(profile);
    saveProfile(profile);

    return {
        percentage: percentage,
        newUnlocks: newUnlocks
    };
}

// Hide the quiz questions and show the final score instead.
// This also shows any newly unlocked achievement popups.
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

    // Save the results before showing the final score on screen.
    const resultData = updateProfileWithResults(score, total);

    scoreElement.innerHTML = translations[currentLanguage].quizComplete + ' ' + labels.scoreLine + ' ' + score + ' ' + translations[currentLanguage].outOf + ' ' + total + ' (' + resultData.percentage + '%)';
    scoreElement.style.display = 'block';
    questionElement.style.display = 'none';
    navigationElement.style.display = 'none';
    retakeBtn.style.display = 'inline-block';

    // Show each new achievement one after another instead of all at once.
    for (let i = 0; i < resultData.newUnlocks.length; i++) {
        showAchievementAnimation(resultData.newUnlocks[i], i * 450);
    }
}

// Start the quiz over from the beginning.
function retakeQuiz() {
    loadQuizContent();
}
