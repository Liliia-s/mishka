var menuButton = document.querySelector(".main-nav__toggle");
var menuList = document.querySelectorAll(".main-nav__list--hide");

menuButton.addEventListener("click", function (evt) {
  menuButton.classList.toggle("main-nav__toggle--close");
  for (var i = 0; i < menuList.length; i++) {
    menuList[i].classList.toggle("main-nav__list--show");
  };
});
