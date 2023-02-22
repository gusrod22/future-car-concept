window.addEventListener("scroll", function () {
  const scrollPos = window.scrollY;
  const herocanvasHeight = document.querySelector(".hero-canvas").offsetHeight;
  const homecanvasHeight = document.querySelector(".home-canvas").offsetHeight;
  const nightcanvasHeight = document.querySelector(".night-canvas").offsetHeight;

  if (scrollPos >= 0 && scrollPos < herocanvasHeight) {
    // Scroll to the first section
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  } else if (
    scrollPos >= herocanvasHeight &&
    scrollPos < herocanvasHeight + homecanvasHeight
  ) {
    // Scroll to the second section
    window.scrollTo({
      top: herocanvasHeight,
      behavior: "smooth",
    });
  } else if (scrollPos >= herocanvasHeight + homecanvasHeight) {
    // Scroll to the third section
    window.scrollTo({
      top: herocanvasHeight + homecanvasHeight,
      behavior: "smooth",
    });
  }
});
