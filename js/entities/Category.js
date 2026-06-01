export class Category {
  constructor(id, name, parentCategory) {
  this.id = id;
  this.name = name;
  this.parentCategory = parentCategory;
  }

  isSubcategory() {
    return this.parentCategory != null;
  }

  toJSON() {
    return JSON.stringify(structuredClone(this), null, 2);
  }
}
