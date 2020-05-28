const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");
  // Toggle Nav
  burger.addEventListener("click", () => {
    nav.classList.toggle("nav-active");
  });
};

navSlide();

$(document).ready(function () {
  $(".slideshow > div:gt(0)").hide();

  setInterval(() => {
    $(".slideshow > div:first")
      .fadeOut(1000)
      .next()
      .fadeIn(1000)
      .end()
      .appendTo(".slideshow");
  }, 6000);
});
