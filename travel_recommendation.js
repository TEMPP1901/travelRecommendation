// Dữ liệu gợi ý du lịch được nhúng trực tiếp
const travelData = {
    beaches: [
        { name: "Malibu", description: "Sunny beaches in California.", imageUrl: "https://images.unsplash.com/photo-1506953823976-52e1fdc0149a" },
        { name: "Bora Bora", description: "Tropical paradise in French Polynesia.", imageUrl: "https://images.unsplash.com/photo-1519047269169-0e9d12e995d6" }
    ],
    temples: [
        { name: "Angkor Wat", description: "Ancient temple in Cambodia.", imageUrl: "https://images.unsplash.com/photo-1562602833-0f9d38836a66" },
        { name: "Kyoto Temple", description: "Serenity in Japan.", imageUrl: "https://images.unsplash.com/photo-1542051841857-5f90071e7988" }
    ],
    countries: [
        { name: "Italy", description: "Rich history and culture.", imageUrl: "https://images.unsplash.com/photo-1518581252057-194d3456ff7d" },
        { name: "Japan", description: "Blend of old and new.", imageUrl: "https://images.unsplash.com/photo-1545569341-9eb8b30979d9" }
    ]
};

// Xác minh dữ liệu trong console
console.log("Travel Data:", travelData);

// Xử lý sự kiện nút Search
document.getElementById('searchBtn').addEventListener('click', () => {
    const query = document.getElementById('searchInput').value.toLowerCase().trim();
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = '';

    let results = [];
    if (query.includes('beach') || query.includes('beaches')) {
        results = travelData.beaches;
    } else if (query.includes('temple') || query.includes('temples')) {
        results = travelData.temples;
    } else if (query.includes('country') || query.includes('countries')) {
        results = travelData.countries;
    }

    if (results.length > 0) {
        results.forEach(item => {
            const options = { timeZone: 'America/New_York', hour12: true, hour: 'numeric', minute: 'numeric' }; // Ví dụ timezone
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

// Xử lý sự kiện nút Reset
document.getElementById('resetBtn').addEventListener('click', () => {
    document.getElementById('results').innerHTML = '';
    document.getElementById('searchInput').value = '';
});

// Xử lý biểu mẫu Contact Us (thêm tính năng cơ bản)
document.getElementById('contactForm').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    e.target.reset();
});