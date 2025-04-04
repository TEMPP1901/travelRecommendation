// Lấy dữ liệu từ travel_recommendation_api.json
fetch('./travel_recommendation_api.json')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        console.log("Travel Data Loaded:", data); // Kiểm tra dữ liệu trong console
        window.travelData = data; // Lưu dữ liệu toàn cục
    })
    .catch(error => console.error('Error fetching travel data:', error));

// Xử lý nút Search
document.getElementById('searchBtn').addEventListener('click', () => {
    const query = document.getElementById('searchInput').value.toLowerCase().trim();
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = '';

    if (!window.travelData) {
        resultsDiv.innerHTML = '<p>Data is still loading. Please try again in a moment.</p>';
        return;
    }

    let results = [];
    if (query.includes('beach') || query.includes('beaches')) {
        results = window.travelData.beaches;
    } else if (query.includes('temple') || query.includes('temples')) {
        results = window.travelData.temples;
    } else if (query.includes('country') || query.includes('countries')) {
        results = window.travelData.countries;
    }

    if (results.length > 0) {
        results.forEach(item => {
            const options = { timeZone: 'America/New_York', hour12: true, hour: 'numeric', minute: 'numeric' };
            const localTime = new Date().toLocaleTimeString('en-US', options);
            resultsDiv.innerHTML += `
                <div>
                    <h3>${item.name}</h3>
                    <p>${item.description}</p>
                    <p>Local Time (example): ${localTime}</p>
                    <img src="${item.imageUrl}" alt="${item.name}">
                </div>
            `;
        });
    } else {
        resultsDiv.innerHTML = '<p>No results found. Try "beaches", "temples", or "countries".</p>';
    }
});

// Xử lý nút Reset
document.getElementById('resetBtn').addEventListener('click', () => {
    document.getElementById('results').innerHTML = '';
    document.getElementById('searchInput').value = '';
});

// Xử lý biểu mẫu Contact Us
document.getElementById('contactForm').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    e.target.reset();
});