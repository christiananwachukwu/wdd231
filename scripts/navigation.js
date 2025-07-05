const menuButton = document.getElementById("menu");
const nav = document.getElementById("navLinks");
menuButton.addEventListener("click", () => {
    nav.classList.toggle("open");
});