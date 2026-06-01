export class Product {
  constructor(id, imgUrl, name, price, isSold, hover, categories = [], images = [], sizes = []) {
    this.id = id;
    this.imgUrl = imgUrl;
    this.name = name;
    this.price = price;
    this.isSold = isSold;
    this.hover = hover;
    this.categories = categories;
    this.images = images;
    this.sizes = sizes;
  }

  createCard() {
    let card = document.createElement('div');
    card.className = 'product-card';

    let link = document.createElement('a');
    link.href = `product.html?productName=${encodeURIComponent(this.name)}`;
    link.style.textDecoration = 'none';
    link.style.color = 'inherit';

    let imgContainer = document.createElement('div');
    imgContainer.className = 'img-container';
    let img = document.createElement('img');
    img.src = this.imgUrl;
    img.className = 'product-img';

    imgContainer.appendChild(img);

    let cardName = document.createElement("p");
    cardName.textContent = this.name;
    cardName.className = 'card-name';

    let price = document.createElement("p");
    price.textContent = `$${this.price}`;
    price.className = 'card-price';

    if (this.isSold) {
      let soldBadge = document.createElement('div');
      soldBadge.className = 'sold-badge';
      soldBadge.textContent = 'SOLD OUT';
      imgContainer.appendChild(soldBadge);
    }

    if (this.hover) {
      img.addEventListener('mouseenter', () => {
        img.src = this.hover;
      })
      img.addEventListener('mouseleave', () => {
        img.src = this.imgUrl;
      })
    }

    link.appendChild(imgContainer);
    link.appendChild(cardName);
    link.appendChild(price);

    card.appendChild(link);

    return card;
  }

  toJSON() {
    return JSON.stringify(structuredClone(this), null, 2);
  }
}
