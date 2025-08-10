const productModal = document.getElementById('product-modal');
const modalContent = document.getElementById('modal-content-details');
const closeButton = document.querySelector('.close-button');

export function showModal(product) {
    modalContent.innerHTML = `
        <img src="${product.image}" alt="${product.name}" width="400" height="400">
        <h2>${product.name}</h2>
        <p><strong>Price:</strong> ₦${product.price.toLocaleString()}</p>
        <p><strong>Category:</strong> ${product.category}</p>
        <p>${product.description}</p>
    `;
    productModal.style.display = 'block';
}

export function initializeModalEvents() {
    if (closeButton) {
        closeButton.addEventListener('click', () => {
            productModal.style.display = 'none';
        });
    }

    if (productModal) {
        window.addEventListener('click', event => {
            if (event.target === productModal) {
                productModal.style.display = 'none';
            }
        });
    }
}