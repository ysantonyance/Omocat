export class Cart {
  constructor() {
    this.items = [];
  }

  addItem(product) {
    let existingItem = this.items.find(item => item.id === product.id);

    if (existingItem) {
      existingItem.quantity++;
    } else {
      this.items.push({
        product: product,
        quantity: 1
      });
    }

    console.log(`Added ${product.name} to cart`);
    this.saveToLocalStorage();
  }

  removeItem(productId) {
    this.items = this.items.filter(item => item.product.id !== productId);
    this.saveToLocalStorage();
  }

  updateQuantity(productId, quantity) {
    let item = this.items.find(item => item.prouct.id === productId);
    if (item) {
      if (quantity <= 0) {
        this.removeItem(productId);
      } else {
        item.quantity = quantity;
        this.saveToLocalStorage();
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

  saveToLocalStorage() {
    localStorage.setItem('cartItems', JSON.stringify(this.items));
  }

  loadFromLocalStorage() {
    let savedItems = localStorage.getItem('cartItems');
    if (savedItems) {
      this.items = JSON.parse(savedItems);
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
