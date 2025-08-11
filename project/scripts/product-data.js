export let allProducts = [];

export async function fetchProducts() {
    if (allProducts.length > 0) return allProducts;

    try {
        const response = await fetch('./data/products.json');
        if (!response.ok) throw new Error('Network response was not ok');
        allProducts = await response.json();
        return allProducts;
    } catch (error) {
        console.error('Error fetching product data:', error);
        return [];
    }
}

export function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}