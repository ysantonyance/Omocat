export class Product {
  constructor(imgUrl, name, price, isSold, hover) {
    this.imgUrl = imgUrl;
    this.name = name;
    this.price = price;
    this.isSold = isSold;
    this.hover = hover;
  }

  createCard() {
    let card = document.createElement('div');
    card.className = 'product-card';
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

    card.appendChild(imgContainer);
    card.appendChild(cardName);
    card.appendChild(price);

    return card;
  }
}
