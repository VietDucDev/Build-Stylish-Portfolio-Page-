var menu = document.querySelector(".menu-btn-open");
var open = document.querySelector(".menu");
var closed1 = document.querySelector(".menu-btn-closed");

menu.addEventListener("click", function () {
  console.log("open");
  open.classList = "menu bg-info d-block custom-slide-in-left";
});

closed1.addEventListener("click", function () {
  console.log("open");
  open.classList = "menu bg-info d-none";
});

var copyright = document.querySelector(".copyright");
const currentYear = new Date().getFullYear();
copyright.textContent = `Copyright © Your Website ${currentYear}`;
