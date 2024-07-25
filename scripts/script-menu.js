const header = document.getElementById("header-wrapper");
const btnMenu = document.getElementById("btn-menu");
const dropdownBox = document.getElementById("dropdown-box");

btnMenu.addEventListener("click", openMenu);

btnMenu.addEventListener("mousedown", function (e) {
  e.preventDefault();
});

function openMenu() {
  header.classList.toggle("show");
  dropdownBox.classList.toggle("activated");
}
