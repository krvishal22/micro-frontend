import faker from "faker";

const mount = (el) => {
  let products = "";

  for (let i = 0; i < 5; i++) {
    const productName = faker.commerce.productName();
    products += `<div>${productName}</div>`;
  }
  el.innerHTML = products;
};

/*
Situation:- 

1 -> running this file in development in isolation 
     here we are using our local index.html file and querySelector('#my-products') is 100% present in my index.html
     in this scenario we want to immediately render our app into that element
*/

if (process.env.NODE_ENV === "development") {
  const el = document.querySelector("#my-products");
  //   assuming our container doesn't have an elemnt with id my-products
  if (el) {
    mount(el);
  }
}


/*

2 -> running this file in development or production through the Container
     there is no guarantee that element with id ('#my-products') will be available in the index.html file of the container
     in this scenario we don't want to immediately render our app into that element

*/

// it should be in such way that container can call this whenever it want to
export { mount };
