const menuButton = document.getElementById("menu-button");
const nav = document.querySelector("nav ul.navigation");

if (menuButton && nav) {
  menuButton.addEventListener("click", () => {
    nav.classList.toggle("open");
  });
}
 