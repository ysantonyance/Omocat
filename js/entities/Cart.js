export class Cart {
  constructor() {
    this.items = [];
  }

  addItem(product) {
    let existingItem = this.items.find(item => item.id === product.name);

    if (existingItem) {
      existingItem.quantity++;
    } else {
      this.items.push({
        product: product,
        quantity: 1
      });
    }

    console.log(`Added ${product.name} to cart`);
  }

  removeItem(productName) {
    this.items = this.items.filter(item => item.product.name !== productName);
  }

  getTotal() {
    let total = 0;
    for (let item of this.items) {
      total += item.product.price * item.quantity;
    }
    return total;
  }

  showCart() {
    console.log(`Your cart`);
    for (let item of this.items) {
      console.log(`${item.product.name} - $${item.product.price} x${item.product.quantity}`);
    }

    console.log(`Total: $${this.getTotal()}`);
  }
}
