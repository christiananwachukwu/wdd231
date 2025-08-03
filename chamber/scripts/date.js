document.addEventListener('DOMContentLoaded', () => {
    // Get the element where the visit message will be displayed
    const visitMessageElement = document.getElementById('visit-message');

    // Ensure the element exists before proceeding
    if (!visitMessageElement) {
        console.error('Element with ID "visit-message" not found.');
        return;
    }

    // Get the current timestamp in milliseconds
    const currentVisitTime = Date.now();

    // Get the last visit timestamp from localStorage
    const lastVisitTime = localStorage.getItem('lastVisit');

    // Check if it's the first visit
    if (lastVisitTime === null) {
        visitMessageElement.textContent = "Welcome! Let us know if you have any questions.";
    } else {
        // Calculate the difference in milliseconds
        const timeDifference = currentVisitTime - parseInt(lastVisitTime);

        // Define milliseconds in a day
        const oneDay = 24 * 60 * 60 * 1000; // milliseconds in a day

        // Check if the visit was less than a day ago
        if (timeDifference < oneDay) {
            visitMessageElement.textContent = "Back so soon! Awesome!";
        } else {
            // Calculate days ago (round down to get whole days)
            const daysAgo = Math.floor(timeDifference / oneDay);

            if (daysAgo === 1) {
                visitMessageElement.textContent = "You last visited 1 day ago.";
            } else {
                visitMessageElement.textContent = `You last visited ${daysAgo} days ago.`;
            }
        }
    }

    // Store the current visit time for the next visit
    localStorage.setItem('lastVisit', currentVisitTime.toString());

    // --- Footer date logic (kept for convenience, ensure IDs exist in HTML) ---
    const yearElement = document.getElementById('year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }

    const lastModifiedElement = document.getElementById('lastModified');
    if (lastModifiedElement) {
        lastModifiedElement.textContent = `Last Modified: ${document.lastModified}`;
    }
});