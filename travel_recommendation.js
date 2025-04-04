// Lấy dữ liệu từ API giả
fetch('travel_recommendation_api.json')
    .then(response => response.json())
    .then(data => {
        console.log("Data fetched successfully:", data); // Kiểm tra dữ liệu trong console

        // Thêm logic tìm kiếm
        const searchBtn = document.getElementById('searchBtn');
        const clearBtn = document.getElementById('clearBtn');
        const results = document.getElementById('results');
        
        searchBtn.addEventListener('click', () => {
            const keyword = document.getElementById('searchBar').value.toLowerCase();
            results.innerHTML = ""; // Xóa kết quả cũ

            const recommendations = data.filter(item => item.keyword.includes(keyword));
            recommendations.forEach(item => {
                results.innerHTML += `
                    <div class="recommendation">
                        <img src="${item.imageUrl}" alt="${item.name}">
                        <h2>${item.name}</h2>
                        <p>${item.description}</p>
                    </div>
                `;
            });
        });

        // Nút xóa kết quả
        clearBtn.addEventListener('click', () => {
            results.innerHTML = "";
            document.getElementById('searchBar').value = "";
        });
    })
    .catch(error => console.error("Error fetching data:", error));