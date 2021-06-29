var elToggleButton = document.querySelector(".site-header__toggle");
var elMenu = document.querySelector(".site-header");


elToggleButton.addEventListener("click", function () {
  elMenu.classList.toggle("site-header--active");
});