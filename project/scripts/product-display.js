import { shuffleArray } from './product-data.js';

// UPDATED: Changed to new class names
const productGrid = document.querySelector('.product-grid.vertical');
const popularProductsContainer = document.querySelector('.product-grid.horizontal');
const seeMoreButtonContainer = document.querySelector('.see-more-button-container');

export function displayProducts(products, append = false) {
    if (!append && productGrid) productGrid.innerHTML = '';

    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}" loading="lazy" width="300" height="200">
            <h3>${product.name}</h3>
            <p>Price: ₦${product.price.toLocaleString()}</p>
            <p>${product.description}</p>
            <button class="btn primary view-details" data-id="${product.id}">View Details</button>
            <button class="btn dark add-to-cart" data-id="${product.id}">Add to Cart</button>
        `;
        productGrid.appendChild(productCard);
    });
}

export function displayPopularProducts(products) {
    if (!popularProductsContainer) return;

    const popularProducts = shuffleArray([...products]).slice(0, 3);
    popularProductsContainer.innerHTML = '';

    popularProducts.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        productCard.innerHTML = `
            <a href="products.html">
                <img src="${product.image}" alt="${product.name}" width="300" height="200" loading="lazy">
                <h3>${product.name}</h3>
            </a>
        `;
        popularProductsContainer.appendChild(productCard);
    });
}

export function createSeeMoreButton(allProducts, callback) {
    if (!seeMoreButtonContainer) return;

    const button = document.createElement('button');
    button.textContent = 'See More';
    button.classList.add('see-more-button');
    seeMoreButtonContainer.innerHTML = '';
    seeMoreButtonContainer.appendChild(button);

    button.addEventListener('click', () => {
        callback(allProducts.slice(8));
        button.style.display = 'none';
    });
}