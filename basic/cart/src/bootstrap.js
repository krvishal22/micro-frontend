import faker from "faker";

const mount = (el) => {
  const cartMessage = `<div> You have ${faker.random.number()} items in your cart. </div>`;
  el.innerHTML = cartMessage;
};

if (process.env.NODE_ENV === "development") {
  const el = document.querySelector("#my-cart");
  //   assuming our container doesn't have an elemnt with id my-products
  if (el) {
    mount(el);
  }
}

export { mount };
