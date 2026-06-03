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

  let mainProductImage = document.getElementById('main-product-image');
  if (mainProductImage) {
    mainProductImage.src = product.imgUrl;
  }

  let subImages = document.getElementById('sub-images');
  subImages.innerHTML = '';

  let allImages = [product.imgUrl, product.hover, product.images].flat().filter(Boolean);

  allImages.forEach(src => {
    let img = document.createElement('img');
    img.src = src;
    img.className = 'sub-image-thumb';
    img.style.cursor = 'pointer';

    img.addEventListener('click', () => {
      if (mainProductImage) mainProductImage.src = src;
    });

    subImages.appendChild(img);
  });

  let qtyInput = document.getElementById('quantity');

  document.getElementById('increase-bt').onclick = () => {
    let currentVal = parseInt(qtyInput.value) || 1;
    qtyInput.value = Math.min(4, currentVal + 1);
  };

  document.getElementById('decrease-bt').onclick = () => {
    let currentVal = parseInt(qtyInput.value) || 1;
    qtyInput.value = Math.max(1, currentVal - 1);
  };

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

  document.getElementById('add-to-cart-bt').onclick = () => {
    if (product.sizes && product.sizes.length > 0 && !selectedSize) {
      alert('Please select a size.');
      return;
    }

    let countToAdd = parseInt(qtyInput.value) || 1;

    for (let i = 0; i < countToAdd; i++) {
      cart.addItem(product);
    }

    updateCartBadge();
    renderCart();

    let cartDrawer = document.getElementById('cartDrawer');
    if (cartDrawer) {
      cartDrawer.classList.add('open');
    }
  };

  let scroll = document.getElementById('may-like-scroll');
  if (scroll) {
    scroll.innerHTML = '';
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
  }
});
