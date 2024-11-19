
const product = {
    name: "Redragon Gaming Keyyboard",
    price: 39.00,
    category: "Electrical",
    available: true,
    details: {
        color: "Black",
        waterproof: true
    },
    img : "keyboard.jpg"
    
};

document.getElementById("product-name").textContent = product.name;
document.getElementById("product-price").textContent = product.price.toFixed(2);
document.getElementById("product-category").textContent = product.category;
document.getElementById("product-available").textContent = product.available ? "In stock" : "Out of stock";
document.getElementById("product-color").textContent = product.details.color;
document.getElementById("product-waterproof").textContent = product.details.waterproof ? "Yes" : "No";
document.getElementById("image").src = product.img;
