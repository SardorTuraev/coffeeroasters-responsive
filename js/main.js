
var elSiteHeaderSection = document.querySelector(".site-header");
var elSiteHeaderToggler = elSiteHeaderSection.querySelector(".site-header__toggle");

if (elSiteHeaderToggler) {
  elSiteHeaderToggler.addEventListener("click", function () {
    elSiteHeaderSection.classList.toggle("site-header--active");
  });
}



var elsOrderSection = document.querySelectorAll(".order-section");
var elsOrderButtonToggler = document.querySelectorAll('.order-section-toggler');

elsOrderButtonToggler.forEach( function (button) {
  button.addEventListener('click', function () {
    button.closest('.order-section').classList.toggle('order-section--active');

  })
})


var elBtnCreatePlan = document.querySelector(".btn-create");
var elOrderModal = document.querySelector('.order-modal');
elBtnCreatePlan.addEventListener("click", function () {
  elOrderModal.classList.add('order-modal--active');
})

var elOrderModalActiveSection = document.querySelector(".order-modal--active");


elOrderModal.addEventListener("click", function () {
    elOrderModal.classList.remove("order-modal--active");
})