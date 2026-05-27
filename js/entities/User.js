class User {
  constructor(name, lastname, email, password, address) {
    this.name = name;
    this.lastname = lastname;
    this.email = email;
    this.password = password;
    this.address = address;
  }

  getFullName() {
    return `${this.name} ${this.lastname}`;
  }
}
