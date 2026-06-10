function setCookie(name, value, days) {
  let expires = "";
  if (days) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + value + expires + "; path=/; SameSite=Lax"; // кукі надсилаються тільки при навігаційних запитах
  // (наприклад, перехід за посиланням) з іншого сайту, але не для крос-доменних AJAX-запитів чи інших не-навігаційних дій
  // це баланс між безпекою (захист від CSRF-атак) і зручністю для користувача
}

function getCookie(name) {
  const nameEQ = name + "=";
  const cookies = document.cookie.split(';');
  for (let cookie of cookies) {
    cookie = cookie.trim();
    if (cookie.startsWith(nameEQ)) {
      return cookie.substring(nameEQ.length);
    }
  }
  return null;
}

export class Cart {
  constructor() {
    this.items = [];
    this.loadFromCart();
  }

  addItem(product) {
    let existingItem = this.items.find(item => item.product.id === product.id);

    if (existingItem) {
      existingItem.quantity++;
    } else {
      this.items.push({
        product: product,
        quantity: 1
      });
    }

    console.log(`Added ${product.name} to cart`);
    this.saveToCart();
  }

  removeItem(productId) {
    this.items = this.items.filter(item => item.product.id !== productId);
    this.saveToCart();
  }

  updateQuantity(productId, quantity) {
    let item = this.items.find(item => item.product.id === productId);
    if (item) {
      if (quantity <= 0) {
        this.removeItem(productId);
      } else {
        item.quantity = quantity;
        this.saveToCart();
      }
    }
  }

  getTotal() {
    let total = 0;
    for (let item of this.items) {
      total += item.product.price * item.quantity;
    }
    return total;
  }

  getItemCount() {
    return this.items.reduce((acc, item) => acc + item.quantity, 0);
  }

  saveToCart() {
    let cleanData = this.items.map(item => ({
      quantity: item.quantity,
      product: {
        id: item.product.id,
        name: item.product.name,
        price: item.product.price,
        imgUrl: item.product.imgUrl,
        isSold: item.product.isSold || false
      }
    }));

    setCookie('cartItems', JSON.stringify(cleanData), 7);
  }

  loadFromCart() {
    let data = getCookie('cartItems');
    if (data) {
      try {
        let parsedItems = JSON.parse(data);

        if (Array.isArray(parsedItems)) {
          this.items = parsedItems.filter(item => {
            return item && item.product && item.product.name && item.product.id;
          });
        } else {
          this.items = [];
        }
      } catch (e) {
        console.log(e);
        this.items = [];
      }
    }
  }

  showCart() {
    console.log(`Your cart`);
    for (let item of this.items) {
      console.log(`${item.product.name} - $${item.product.price} x${item.product.quantity}`);
    }

    console.log(`Total: $${this.getTotal()}`);
  }

  toJSON() {
    return JSON.stringify(structuredClone(this), null, 2);
  }
}

function createOrder(orderId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.1) {
        reject('Rejected');
      } else {
        resolve('Accepted');
      }
    }, 1000)
  })
}

function processOrder(orderId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.1) {
        reject('Rejected');
      } else {
        resolve('Accepted');
      }
    }, 3000)
  })
}

function deliverOrder(orderId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.1) {
        reject('Rejected');
      } else {
        resolve('Accepted');
      }
    }, 3000)
  })
}

function handleOrder(cart) {
  let orderId = Date.now();

  console.log('started forming an order: ', orderId);

  createOrder(orderId)
    .then((msg) => {
      console.log(msg);
      return processOrder(orderId);
    })
    .then((msg) => {
      console.log(msg);
      return deliverOrder(orderId);
    })
    .then((msg) => {
      console.log(msg);
      console.log('order is done');
    })
    .catch((err) => {
      console.log(err);
      console.log('order is not done due to error :(');
    })
}

export function checkout(cart) {
  if (cart.items.length === 0) {
    console.log('The cart is empty');
    return;
  }
  return handleOrder(cart);
}

