import faker from "faker";

let products = "";

for (let i = 0; i < 5; i++) {
  const productName = faker.commerce.productName();
  products += `<div>${productName}</div>`;
}
document.querySelector('#products').innerHTML = products;
