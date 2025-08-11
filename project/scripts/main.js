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

    // UPDATED CLASS NAMES - Changed from old to new class structure
    if (document.querySelector('.product-grid.vertical')) {
        getAndDisplayProducts();
    } else if (document.querySelector('.product-grid.horizontal')) {
        displayPopular();
    }

    if (window.location.pathname.endsWith('form-action.html')) {
        displayThankYouMessage();
    }
})();