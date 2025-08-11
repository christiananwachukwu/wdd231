import { setFooterInfo } from './date.js';
import { initializeMenuToggle, initializeContactFormToggle } from './toggle.js';
import { displayThankYouMessage } from './thank-you.js';

import { 
    displayPopular,  
    getAndDisplayProducts, 
    initializeProductEvents
} from './products.js';

(() => {
    setFooterInfo();
    initializeMenuToggle();
    initializeContactFormToggle();
    initializeProductEvents();

    if (document.querySelector('.product-cards-grid')) {
        getAndDisplayProducts();
    } else if (document.querySelector('.product-cards-container')) {
        displayPopular();
    }

    if (window.location.pathname.endsWith('form-action.html')) {
        displayThankYouMessage();
    }
})();