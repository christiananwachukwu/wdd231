document.addEventListener('DOMContentLoaded', () => {
    const discoverCardsContainer = document.getElementById('discover-cards-container');

    async function getDiscoverData() {
        try {
            const response = await fetch('data/discover.json');
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            displayDiscoverCards(data);
        } catch (error) {
            console.error('Error fetching discover data:', error);
            discoverCardsContainer.innerHTML = '<p>Failed to load discover items. Please try again later.</p>';
        }
    }

    function displayDiscoverCards(items) {
        if (!discoverCardsContainer) {
            console.error('Discover cards container not found.');
            return;
        }

        // Clear existing content if any
        discoverCardsContainer.innerHTML = '<h2>Highlights of Owerri</h2>';

        items.forEach((item, index) => {
            const card = document.createElement('div');
            card.classList.add('discover-card');

            const h2 = document.createElement('h2');
            h2.textContent = item.name;

            const figure = document.createElement('figure');
            const img = document.createElement('img');
            img.src = `images/${item.image}`;
            img.alt = item.name;

            // Set explicit width and height attributes and styles
            img.setAttribute('width', '300');
            img.setAttribute('height', '200');
            img.style.width = '300px';
            img.style.height = '200px';
            img.style.backgroundColor = '#eee'; // Optional placeholder background

            // Lazy load all images except the first one
            if (index !== 0) {
                img.loading = 'lazy';
            }

            figure.appendChild(img);

            const address = document.createElement('address');
            address.textContent = item.address;

            const description = document.createElement('p');
            description.textContent = item.description;

            const button = document.createElement('a');
            button.href = item.learnMoreUrl;
            button.textContent = 'Learn More';
            button.target = '_blank';
            button.rel = 'noopener noreferrer';
            button.classList.add('learn-more-button');

            card.appendChild(h2);
            card.appendChild(figure);
            card.appendChild(address);
            card.appendChild(description);
            card.appendChild(button);

            discoverCardsContainer.appendChild(card);
        });
    }

    getDiscoverData();
});