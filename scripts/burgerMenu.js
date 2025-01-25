export const initBurgerMenu = (burgerMenu, nav) => {
  burgerMenu.addEventListener("click", () => {
    nav.classList.toggle("overlay");
    burgerMenu.classList.toggle("close");
    if (nav.classList.contains("overlay")) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  });
};
