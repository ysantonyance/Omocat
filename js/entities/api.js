import { Product } from "./Product.js";


export async function loadProducts() {
  try {
    let res = await fetch('https://fakestoreapi.com/products');
    let data = await res.json();
    return data.map(item => {
      let categories = [];
      return new Product(
        item.id,
        item.image,
        item.title,
        item.price,
        false,
        item.image,
        categories
      );
    });
  } catch (error) {
    console.log(error);
    return [];
  }
}
