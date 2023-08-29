const hamburger = document.querySelector(".hamburger");
hamburger.addEventListener("click", function () {
  const navbar = document.querySelector(".nav-bar");
  navbar.classList.toggle("active");
  const hamburger = document.querySelector(".hamburger");
  hamburger.classList.toggle("active");
});
