import { fetchProducts } from './product-data.js';
import { displayProducts, displayPopularProducts, createSeeMoreButton } from './product-display.js';
import { showModal, initializeModalEvents } from './product-modal.js';

const productGrid = document.querySelector('.product-cards-grid');

export async function getAndDisplayProducts() {
    try {
        const products = await fetchProducts();
        const shuffled = [...products].sort(() => 0.5 - Math.random());
        displayProducts(shuffled.slice(0, 8));
        if (shuffled.length > 8) {
            createSeeMoreButton(shuffled, (moreProducts) => {
                displayProducts(moreProducts, true);
            });
        }
    } catch (error) {
        console.error(error);
    }
}

export async function displayPopular() {
    try {
        const products = await fetchProducts();
        displayPopularProducts(products);
    } catch (error) {
        console.error(error);
    }
}

export function initializeProductEvents() {
    initializeModalEvents();

    if (productGrid) {
        productGrid.addEventListener('click', async event => {
            const target = event.target;
            if (target.classList.contains('view-details')) {
                const productId = target.dataset.id;
                const products = await fetchProducts();
                const product = products.find(p => p.id === productId);
                if (product) {
                    showModal(product);
                    localStorage.setItem('lastViewedProduct', JSON.stringify(product));
                }
            }
            if (target.classList.contains('add-to-cart')) {
                alert(`Product with ID ${target.dataset.id} has been added to your cart.`);
            }
        });
    }
}