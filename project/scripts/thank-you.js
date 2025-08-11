export function displayThankYouMessage() {
    const urlParams = new URLSearchParams(window.location.search);
    const userName = urlParams.get('user_name');
    const userEmail = urlParams.get('user_email');
    const userTel = urlParams.get('user_tel');
    const purpose = urlParams.get('contact_purpose');
    const message = urlParams.get('user_message');

    const thankYouHeading = document.getElementById('thank-you-heading');
    const userDetails = document.getElementById('user-details');

    if (userName && thankYouHeading) {
        thankYouHeading.textContent = `Thank you, ${userName}!`;
    }

    if (userDetails) {
        userDetails.innerHTML = `
          <h3>Submission details</h3>
          <ul>
            <li><strong>Name:</strong> ${userName ? userName : '—'}</li>
            <li><strong>Email:</strong> ${userEmail ? userEmail : '—'}</li>
            <li><strong>Phone:</strong> ${userTel ? userTel : '—'}</li>
            <li><strong>Purpose:</strong> ${purpose ? purpose : '—'}</li>
            <li><strong>Message:</strong> ${message ? decodeURIComponent(message) : '—'}</li>
          </ul>
        `;
    }
}

// Call the function after it’s defined
displayThankYouMessage();