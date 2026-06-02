let form = document.getElementById("checkout-for");

let email = document.getElementById("email");
let firstName = document.getElementById("firstName");
let lastName = document.getElementById("lastName");
let address = document.getElementById("address");
let city = document.getElementById("city");
let postalCode = document.getElementById("postalCode");
let phone = document.getElementById("phone");

form.addEventListener('submit', (e) => {
  let isValid = true;
  document.querySelectorAll("small").forEach(el => el.textContent = '')
  document.querySelectorAll(".invalid").forEach(el => el.classList.remove('invalid'));

  if (email.value === "") {
    email.classList.add('invalid');
    document.getElementById('email-error').textContent = 'Enter an email';
    isValid = false;
  }

  if (firstName.value === "") {
    firstName.classList.add('invalid');
    document.getElementById('firstName-error').textContent = 'Enter first name';
    isValid = false;
  }

  if (lastName.value === "") {
    lastName.classList.add('invalid');
    document.getElementById('lastName-error').textContent = 'Enter last name';
    isValid = false;
  }

  if (address.value === "") {
    address.classList.add('invalid');
    document.getElementById('address-error').textContent = 'Enter address';
    isValid = false;
  }

  if (city.value === "") {
    city.classList.add('invalid');
    document.getElementById('city-error').textContent = 'Enter city';
    isValid = false;
  }

  if (postalCode.value === "") {
    postalCode.classList.add('invalid');
    document.getElementById('postalCode-error').textContent = 'Enter postal code';
    isValid = false;
  }

  if (phone.value === "") {
    phone.classList.add('invalid');
    document.getElementById('phone-error').textContent = 'Enter phone';
    isValid = false;
  }

  if (!isValid) {
    e.preventDefault();
  }
});
