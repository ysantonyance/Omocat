class SearchBar {
  constructor(products, container, searchInputId) {
    this.products = products;
    this.container = container;
    this.searchInput = document.getElementById(searchInputId);
    this.setupSearch();
  }

  setupSearch() {
    this.searchInput.addEventListener("input", e => {
      let searchItem = e.target.value.toLowerCase();
      this.filterBySearch(searchItem);
    });
  }

  filterBySearch(searchItem) {
    this.container.innerHTML = searchItem;

    let filtered = this.products.filter(product => product.name.toLowerCase().includes(searchItem)
    );

    filtered.forEach(product => {
      this.container.appendChild(product.createCard())
    });
  }
}
