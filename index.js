import { products } from "./scripts/data.js";
import { renderProducts } from "./scripts/products.js";
import { initBurgerMenu } from "./scripts/burgerMenu.js";

const burgerMenu = document.getElementById("burger-menu");
const nav = document.querySelector(".header__main-container");

initBurgerMenu(burgerMenu, nav);
renderProducts(products);
