var link = document.querySelectorAll(".product__btn, .product-card__button");
var popup = document.querySelector(".modal-basket");
var overlay = document.querySelector(".overlay");
var menuButton = document.querySelector(".main-nav__toggle");
var menuList = document.querySelectorAll(".main-nav__list--hide");

menuButton.addEventListener("click", function (evt) {
  menuButton.classList.toggle("main-nav__toggle--close");
  for (var i = 0; i < menuList.length; i++) {
    menuList[i].classList.toggle("main-nav__list--show");
  };
});

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

// for (var i = 0; i < basket.length; i++) {
//   basket[i].addEventListener("click", function (evt) {
//     evt.preventDefault();
//     overlay.classList.add("overlay__show");
//     popup.classList.add("modal-basket__show");
//   })
// };

// link.addEventListener("click", function (evt) {
//   evt.preventDefault();
//   overlay.classList.add("overlay__show");
//   popup.classList.add("modal-basket__show");
// });

// var menuButton = document.querySelector(".main-nav__toggle");
// var menuList = document.querySelectorAll(".main-nav__list--hide");

// menuButton.addEventListener("click", function (evt) {
//   menuButton.classList.toggle("main-nav__toggle--close");
//   menuList.forEach((el) => {
//     el.classList.toggle("main-nav__list--show");
//   });
// });
