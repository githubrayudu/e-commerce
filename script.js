const products = [
    { id: 1, name: "Wireless Headphones", price: 59.99, image: "https://via.placeholder.com/200" },
    { id: 2, name: "Smart Watch", price: 89.99, image: "https://via.placeholder.com/200" },
    { id: 3, name: "Bluetooth Speaker", price: 39.99, image: "https://via.placeholder.com/200" },
    { id: 4, name: "Gaming Mouse", price: 29.99, image: "https://via.placeholder.com/200" }
  ];
  
  const cart = [];
  
  function renderProducts() {
    const productList = document.getElementById("product-list");
    products.forEach(product => {
      const div = document.createElement("div");
      div.classList.add("product");
      div.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>$${product.price.toFixed(2)}</p>
        <button onclick="addToCart(${product.id})">Add to Cart</button>
      `;
      productList.appendChild(div);
    });
  }
  
  function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    cart.push(product);
    updateCart();
  }
  
  function updateCart() {
    const count = cart.length;
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    document.getElementById("cart-count").textContent = count;
    document.getElementById("cart-total").textContent = total.toFixed(2);
  }
  
  renderProducts();
  