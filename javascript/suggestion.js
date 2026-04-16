// Suggestion form handler for the Puerto Rico website.
// Manages form submission, validation, confirmation feedback, and a separate 'send another suggestion' flow.

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("suggestionForm");
  const submitBtn = document.getElementById("submitBtn");
  const anotherSuggestionBtn = document.getElementById("anotherSuggestionBtn");
  if (!form || !submitBtn || !anotherSuggestionBtn) return;

  // Prevent form submission completely
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    return false;
  });

  // Handle "Send Another Suggestion" button
anotherSuggestionBtn.addEventListener("click", () => {
        // Reset the form and hide the confirmation banner and retake action button.
        form.reset();
        form.style.display = "block";
        const confirmationBanner = document.getElementById("confirmationBanner");
        if (confirmationBanner) confirmationBanner.style.display = "none";
        anotherSuggestionBtn.style.display = "none";
      });

  submitBtn.addEventListener("click", async (event) => {
    event.preventDefault();
    event.stopPropagation();

    const nameEl = document.getElementById("name");
    const suggestionEl = document.getElementById("suggestion");
    const commentsEl = document.getElementById("comments");

    if (!nameEl || !suggestionEl || !commentsEl) {
      alert("Form elements not found.");
      return;
    }

    const name = encodeURIComponent(nameEl.value.trim());
    const suggestion = encodeURIComponent(suggestionEl.value.trim());
    const comments = encodeURIComponent(commentsEl.value.trim());

    // Build the URL for the Google Apps Script backend that stores suggestions.
    const fullURL = `https://script.google.com/macros/s/AKfycbw15mF1Oik5qbwytc36ryT4Z1Gx3PMug0rf_JO3pZlTGv_nPo-wTz-EjVmiiCSZuBn8/exec?Name=${name}&Suggestion=${suggestion}&Comments=${comments}`;

    try {
      // Send the suggestion via GET and wait for the backend response.
      const response = await fetch(fullURL, { method: "GET", redirect: "follow" });
      const text = await response.text();

      // Expect the Apps Script to return exactly "Success"
      if (text.trim() === "Success") {
        form.style.display = "none";
        const confirmationBanner = document.getElementById("confirmationBanner");
        if (confirmationBanner) confirmationBanner.style.display = "block";
        anotherSuggestionBtn.style.display = "block";
      } else {
        alert("Server error: " + text);
      }
    } catch (error) {
      console.error("Fetch error:", error);
      alert("Network error. Please try again later.");
    }
  });
});

// fade in animations for the suggestion section

// fade in the suggestion section on load
window.addEventListener('load', () => {
    document.querySelectorAll('.suggest-section').forEach((card, i) => {
        setTimeout(() => {
            card.style.transition = '0.6s';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, i * 120);
    });
});