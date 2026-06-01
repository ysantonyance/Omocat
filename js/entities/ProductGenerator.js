import { Product } from "./Product.js";

export class ProductGenerator {
  constructor() {}

  generate(products, container) {
    for (let i = 0; i < products.length; i++) {
      let card = new Product(
        products[i].name,
        products[i].imgUrl,
        products[i].name,
        products[i].price,
        products[i].isSold,
        products[i].hover,
        products[i].categories
      );
      let cardElement = card.createCard();
      container.appendChild(cardElement);
    }
  }
}
