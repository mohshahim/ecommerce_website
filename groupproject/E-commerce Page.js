// script.js
const products = [
    {
      id: 1,
      name: "Mens Jackets",
      price: 80.00,
      description: "This is an amazing product A.",
      image: "Men Jackets.jpg"
    },
    {
      id: 2,
      name: "Mens Shorts",
      price: 35.00,
      description: "This is a fantastic product B.",
      image: "Men Shorts.jpg"
    },
    {
      id: 3,
      name: "Mens Tshirt",
      price: 20.00,
      description: "This is an outstanding product C.",
      image: "Men Tshirt.jpg"
    },
    {
      id: 4,
      name: "Women Coat",
      price: 65.00,
      description: "This is a wonderful product D.",
      image: "Women Coat.jpg"
    }
  ];
  
  let cart = [];
  
  // Display products
  function displayProducts() {
    const productContainer = document.getElementById('products');
    productContainer.innerHTML = products.map(product => `
      <div class="product">
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>Price: $${product.price.toFixed(2)}</p>
        <button onclick="addToCart(${product.id})">Add to Cart</button>
        <button class="details-btn" onclick="viewProduct(${product.id})">View Details</button>
      </div>
    `).join('');
  }
  
  // View Product Details
  function viewProduct(productId) {
    const product = products.find(p => p.id === productId);
    const productDetailsContainer = document.getElementById('product-details');
    const productInfo = document.getElementById('product-info');
    productInfo.innerHTML = `
      <div class="product-details-card">
        <img src="${product.image}" alt="${product.name}">
        <div>
          <h3>${product.name}</h3>
          <p>${product.description}</p>
          <p><strong>Price:</strong> $${product.price.toFixed(2)}</p>
          <button onclick="addToCart(${product.id})">Add to Cart</button>
        </div>
      </div>
    `;
    showDetails();
  }
  
  
  // Show Product Details Page
  function showDetails() {
    document.getElementById('products').classList.add('hidden'); // Hide products grid
    document.getElementById('product-details').classList.remove('hidden'); // Show product details
  }
  
  // Back to Products Page
  function showProducts() {
    document.getElementById('products').classList.remove('hidden'); // Show products grid
    document.getElementById('product-details').classList.add('hidden'); // Hide product details
  }
  
  
  // Add product to cart
  function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    cart.push(product);
    updateCart();
  }
  
  // Update cart display
  function updateCart() {
    const cartContainer = document.getElementById('cart');
    const totalCost = document.getElementById('total-cost');
  
    if (cart.length === 0) {
      cartContainer.innerHTML = '<p>Your cart is empty.</p>';
      totalCost.textContent = '0.00';
      return;
    }
  
    cartContainer.innerHTML = cart.map(item => `
      <div class="cart-item">
        <p>${item.name} - $${item.price.toFixed(2)}</p>
      </div>
    `).join('');
  
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    totalCost.textContent = total.toFixed(2);
  }
  
  // Initialize
  displayProducts();
  