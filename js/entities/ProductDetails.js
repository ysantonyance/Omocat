import { products, setupCart } from '../app.js';

document.addEventListener('DOMContentLoaded', () => {
  let { cart, renderCart, updateCartBadge } = setupCart();

  let params = new URLSearchParams(window.location.search);
  let name = decodeURIComponent(params.get('productName'));
  let product = products.find(p => p.name === name);

  if (!product) {
    document.body.innerHTML = '<p style="padding:2rem">Product not found.</p>';
    return;
  }

  document.title = `${product.name} - OMOCAT`;
  document.getElementById('product-name').textContent = product.name;
  document.getElementById('product-price').textContent = `$${product.price}`;

  let avail = document.getElementById('product-availability');
  avail.textContent = product.isSold ? 'SOLD OUT' : 'IN STOCK';
  avail.className = product.isSold ? 'sold-out' : 'in-stock';

  let cats = document.getElementById('product-categories');
  cats.textContent = product.categories.map(c => c.name).join(' / ');

  let subImages = document.getElementById('sub-images');
  let allImages = [product.imgUrl, product.hover, ...(product.images || [])].filter(Boolean);
  allImages.forEach(src => {
    let img = document.createElement('img');
    img.src = src;
    subImages.appendChild(img);
  });

  let sizeSection = document.querySelector('.size-section');
  let selectedSize = null;

  if (!product.sizes || product.sizes.length === 0) {
    sizeSection.style.display = 'none';
  } else {
    sizeSection.innerHTML = '<p>SIZE</p>';
    selectedSize = product.sizes.find(s => s.inStock)?.size ?? null;

    product.sizes.forEach(({ size, inStock }) => {
      let btn = document.createElement('button');
      btn.textContent = size;
      btn.className = 'size-button' + (!inStock ? ' out-of-stock' : '');
      btn.disabled = !inStock;
      if (size === selectedSize) btn.classList.add('active');
      btn.addEventListener('click', () => {
        sizeSection.querySelectorAll('.size-button').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        selectedSize = size;
      });
      sizeSection.appendChild(btn);
    });
  }

  document.getElementById('add-to-cart-bt').addEventListener('click', () => {
    if (product.sizes && product.sizes.length > 0 && !selectedSize) {
      alert('Please select a size.');
      return;
    }
    cart.addItem(product);
    updateCartBadge();
    renderCart();
  });

  let qtyInput = document.getElementById('quantity');
  document.getElementById('increase-bt').addEventListener('click', () => {
    qtyInput.value = Math.min(4, parseInt(qtyInput.value) + 1);
  });
  document.getElementById('decrease-bt').addEventListener('click', () => {
    qtyInput.value = Math.max(1, parseInt(qtyInput.value) - 1);
  });

  let scroll = document.getElementById('may-like-scroll');
  let related = products
    .filter(p => p.name !== product.name && p.categories.some(c =>
      product.categories.map(pc => pc.id).includes(c.id)
    ))
    .slice(0, 7);

  related.forEach(p => {
    let card = document.createElement('a');
    card.href = `product.html?productName=${encodeURIComponent(p.name)}`;
    card.className = 'may-like-card';
    card.innerHTML = `
      <img src="${p.imgUrl}" alt="${p.name}">
      <p class="card-name">${p.name}</p>
      <p class="card-price">$${p.price}</p>
      ${p.isSold ? '<span class="sold-badge">SOLD OUT</span>' : ''}
    `;
    scroll.appendChild(card);
  });
});
