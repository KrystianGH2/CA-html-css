const button = document.getElementById("js-toggle-button");
const menu = document.getElementById("nav-menu");

button.addEventListener("click", () => {
    menu.classList.toggle("is-visible");
  });
  