var link = document.querySelector(".product__btn");
var popup = document.querySelector(".modal-basket");

link.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");
});

var menu = document.querySelector(".main-nav__toggle");

menu.addEventListener("click", function() {
  menu.classList.toggle("modal-show");
}


// popup.classList.remove("modal-show");


