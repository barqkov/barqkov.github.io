(function() {
  window.onresize = removeBurger;

  window.onload = function() {
    removeLoadScreen();
  };

  const burgerMenu = document.querySelector(".burger-menu");
  const mobileNav = document.querySelector(".mobile-nav-holder");

  let displayBurgerMenu = (function() {
    let counter = 0;

    return function() {
      counter++;
      if (counter % 2 === 1) {
        mobileNav.style.display = "block";
      } else {
        mobileNav.style.display = "none";
      }

      return counter;
    };
  })();

  burgerMenu.addEventListener("click", displayBurgerMenu);

  function removeBurger() {
    let width = window.innerWidth > 0 ? window.innerWidth : screen.width;

    if (width >= 600) {
      mobileNav.style.display = "none";
    }
  }

  function removeLoadScreen() {
    const bodyElement = document.getElementsByTagName("BODY")[0];
    const screenLoader = document.querySelector(".loading-screen");
    bodyElement.style.overflow = "auto";
    bodyElement.removeChild(screenLoader);
  }
})();
