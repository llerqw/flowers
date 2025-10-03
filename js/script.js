let bouquets = [
    { id: 1, name: "Розы", price: 1500, image: "rose.jpg" },
    { id: 2, name: "Тюльпаны", price: 1200, image: "tulip.jpg" },
    { id: 3, name: "Пионы", price: 1800, image: "peony.jpg" },
    { id: 4, name: "Лилии", price: 1600, image: "lily.jpg" },
    { id: 5, name: "Хризантемы", price: 1100, image: "chrysanthemum.jpg" },
    { id: 6, name: "Орхидеи", price: 2200, image: "orchid.jpg" },
    { id: 7, name: "Герберы", price: 1300, image: "gerbera.jpg" },
    { id: 8, name: "Ирисы", price: 1400, image: "iris.jpg" }
];

let orderItems = [];

const orderList = document.getElementById("order-list");
const totalPriceEl = document.getElementById("total-price");

let total = 0;

function bouquetCatalog() {
    const catalogContainer = document.getElementById('bouquet-catalog');

    bouquets.forEach(bouquet => {
        const bouquetCard = document.createElement('div');
        bouquetCard.className = 'bouquet-card';

        bouquetCard.innerHTML = `
                    <div class="bouquet-image">
                        <img src="img/${bouquet.image}" alt="${bouquet.name}" onerror="this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjgwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjhmOGY4Ii8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNCIgZmlsbD0iI2FhYSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPiR7Ym91cXVldC5uYW1lfTwvdGV4dD48L3N2Zz4='">
                    </div>
                    <div class="bouquet-info">
                        <h3 class="bouquet-name">${bouquet.name}</h3>
                        <div class="bouquet-price">${bouquet.price} руб.</div>
                        <button class="order-btn" onclick="addToOrder(${bouquet.id})">Заказать</button>
                    </div>
                `;

        catalogContainer.appendChild(bouquetCard);
    });
};

bouquetCatalog();

function addToOrder(id) {
    const bouquet = bouquets.find(bouquet => bouquet.id === id);

    const li = document.createElement("li");
    li.textContent = `${bouquet.name} = ${bouquet.price} руб.`;
    orderList.appendChild(li);

    total += bouquet.price;
    totalPriceEl.textContent = total;

    alert(`Вы выбрали: ${bouquet.name}`);
};