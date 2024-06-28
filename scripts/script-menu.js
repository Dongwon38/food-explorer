const body = document.body;
const btnMenu = document.getElementById("btn-menu");
const dropdownBox = document.getElementById("dropdown-box");

btnMenu.addEventListener("click", openMenu);

function openMenu() {
  body.classList.toggle("show");
  nav.classList.add("activated");
}
