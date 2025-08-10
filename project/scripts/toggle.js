// Toggle.js
export function initializeMenuToggle() {
    const menuButton = document.getElementById('menu-button');
    const nav = document.querySelector('nav');

    function toggleMenu() {
        nav.classList.toggle('open');
    }

    if (menuButton) {
        menuButton.addEventListener('click', toggleMenu);
    }
}

export function initializeContactFormToggle() {
    const showFormButton = document.getElementById('show-form-button');
    const contactFormContainer = document.getElementById('contact-form-container');

    if (showFormButton) {
        showFormButton.addEventListener('click', () => {
            showFormButton.style.display = 'none';
            if (contactFormContainer) {
                contactFormContainer.style.display = 'block';
            }
        });
    }
}