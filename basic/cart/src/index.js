import faker from "faker";

const cartMessage = `<div> You have ${faker.random.number()} items in your cart. </div>`;
document.querySelector('#my-cart').innerHTML = cartMessage;
