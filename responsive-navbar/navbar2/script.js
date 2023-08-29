const hamburger = document.querySelector(".hamburger");
hamburger.addEventListener("click", function () {
  const navbar = document.querySelector(".nav-bar");
  navbar.classList.toggle("active");
  if (navbar.classList.contains("active")) {
    navbar.style.transform = "translateX(0)";
  } else {
    navbar.style.transform = "translateX(100%)";
  }
  const hamburger = document.querySelector(".hamburger");
  hamburger.classList.toggle("active");
});
