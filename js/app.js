const services = [
    { title: "Electrician", price: "From ₹199" },
    { title: "Plumber", price: "From ₹199" },
    { title: "Carpenter", price: "From ₹299" },
];

const workers = [
    { name: "Alice", category: "Electrician", rating: 4.8 },
    { name: "Bob", category: "Plumber", rating: 4.5 },
    { name: "Charlie", category: "Carpenter", rating: 4.9 },
];

function displayServices() {
    const container = document.querySelector(".service-grid");
    services.forEach(s => {
        const card = document.createElement("div");
        card.className = "service-card";
        card.innerHTML = `<h3>${s.title}</h3><p>${s.price}</p>`;
        container.appendChild(card);
    });
}

function displayWorkers() {
    const container = document.querySelector(".worker-grid");
    workers.forEach(w => {
        const card = document.createElement("div");
        card.className = "worker-card";
        card.innerHTML = `<h3>${w.name}</h3><p>${w.category}</p><p>⭐ ${w.rating}</p>`;
        container.appendChild(card);
    });
}

displayServices();
displayWorkers();
