import { mount } from "productsApp/ProductsIndex";
import { mount as cartMount } from "cart/CartShow";

console.log("Container");
mount(document.querySelector("#container-products"));
cartMount(document.querySelector("#container-cart"));
