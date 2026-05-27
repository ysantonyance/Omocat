class OrderHistory {
  constructor(name) {
    this.name = name;
    this.orders = [];
    this.loadFromLocalStorage();
  }

  addOrder(cart, totalPrice) {
    let order = {
      id: Date.now(),
      date: new Date().toLocaleDateString(),
      items: cart.items.map(item => ({
        name: item.product.name,
        price: item.product.price,
        quantity: item.quantity,
        total: item.product.price * item.quantity
      })),
      total: totalPrice
    };

    this.orders.push(order);
    this.saveToLocalStorage();
    console.log(`Order placed for ${this.name} \n Total: $${totalPrice}`);
    return order;
  }

  getOrders() {
    return this.orders;
  }

  showHistory() {
    console.log(`Order history fro ${this.name}:`);
    if (this.orders.length === 0) {
      console.log(`No orders found for ${this.name}`);
      return;
    }

    for (let order of this.orders) {
      console.log(`Order #${order.id} - $${order.date} - total: $${order.total}`);
      for (let item of order.items) {
        console.log(`   - ${item.name} x${item.quantity}: $${item.total}`);
      }
    }
  }

  saveToLocalStorage() {
    localStorage.setItem(`orders - ${this.name}`, JSON.stringify(this.orders));
  }

  loadFromLocalStorage() {
    let saved = localStorage.getItem(`orders - ${this.name}`);
    if (saved) {
      this.orders = JSON.parse(saved);
    }
  }
}
