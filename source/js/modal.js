var link = document.querySelectorAll(".product__btn, .product-card__button");
var popup = document.querySelector(".modal-basket");
var overlay = document.querySelector(".overlay");

for (var i = 0; i < link.length; i++) {
  link[i].addEventListener("click", function (evt) {
    evt.preventDefault();
    overlay.classList.add("overlay__show");
    popup.classList.add("modal-basket__show");
  })
};

overlay.addEventListener("click", function (evt) {
  overlay.classList.remove("overlay__show");
  popup.classList.remove("modal-basket__show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains("modal-basket__show")) {
      popup.classList.remove("modal-basket__show");
      overlay.classList.remove("overlay__show");
    }
  }
});
