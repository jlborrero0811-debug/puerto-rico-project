// Suggestion form handler for the Puerto Rico website.
// This file manages the suggestion form UI, sends submissions to the Google
// Apps Script endpoint, and controls the confirmation / reset flow.

// Wait for the DOM before wiring up the form and buttons.
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('suggestionForm');
    const submitBtn = document.getElementById('submitBtn');
    const anotherSuggestionBtn = document.getElementById('anotherSuggestionBtn');

    if (!form || !submitBtn || !anotherSuggestionBtn) {
        return;
    }

    // Prevent the browser's normal form submission because the form is sent
    // manually with `fetch` instead.
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        return false;
    });

    // Lets the user clear the confirmation state and open a blank form to
    // send another idea.
    anotherSuggestionBtn.addEventListener('click', function () {
        const confirmationBanner = document.getElementById('confirmationBanner');

        form.reset();
        form.style.display = 'block';

        if (confirmationBanner) {
            confirmationBanner.style.display = 'none';
        }

        anotherSuggestionBtn.style.display = 'none';
    });

    // Collects the current field values, sends them to the Apps Script URL,
    // and swaps the form view to a confirmation state after success.
    submitBtn.addEventListener('click', async function (event) {
        event.preventDefault();
        event.stopPropagation();

        const nameEl = document.getElementById('name');
        const suggestionEl = document.getElementById('suggestion');
        const commentsEl = document.getElementById('comments');

        if (!nameEl || !suggestionEl || !commentsEl) {
            alert('Form elements not found.');
            return;
        }

        // Encode each value so it is safe to place inside a URL query string.
        const name = encodeURIComponent(nameEl.value.trim());
        const suggestion = encodeURIComponent(suggestionEl.value.trim());
        const comments = encodeURIComponent(commentsEl.value.trim());

        // Build the full GET request URL expected by the Google Apps Script
        // backend that stores the submission data.
        const fullURL = 'https://script.google.com/macros/s/AKfycbw15mF1Oik5qbwytc36ryT4Z1Gx3PMug0rf_JO3pZlTGv_nPo-wTz-EjVmiiCSZuBn8/exec?Name=' + name + '&Suggestion=' + suggestion + '&Comments=' + comments;

        try {
            // Send the suggestion to the backend and read the returned text.
            const response = await fetch(fullURL, { method: 'GET', redirect: 'follow' });
            const text = await response.text();

            // The backend is expected to return the exact word "Success" when
            // the submission is stored correctly.
            if (text.trim() === 'Success') {
                const confirmationBanner = document.getElementById('confirmationBanner');

                form.style.display = 'none';

                if (confirmationBanner) {
                    confirmationBanner.style.display = 'block';
                }

                anotherSuggestionBtn.style.display = 'block';
            } else {
                alert('Server error: ' + text);
            }
        } catch (error) {
            console.error('Fetch error:', error);
            alert('Network error. Please try again later.');
        }
    });
});

// Adds a soft reveal animation to the suggestion section once the page is
// fully loaded.
window.addEventListener('load', function () {
    const cards = document.querySelectorAll('.suggest-section');

    for (let i = 0; i < cards.length; i++) {
        setTimeout(function () {
            cards[i].style.transition = '0.6s';
            cards[i].style.opacity = '1';
            cards[i].style.transform = 'translateY(0)';
        }, i * 120);
    }
});
