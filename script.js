const hamburger = document.querySelector(".hamburger");
const overlay = document.querySelector(".overlay");
const mobileDrawer = document.querySelector(".mobile-drawer");

hamburger.addEventListener("click", () => {
  overlay.classList.add("active");
  mobileDrawer.classList.add("active");
});

overlay.addEventListener("click", () => {
  overlay.classList.remove("active");
  mobileDrawer.classList.remove("active");
});

window.addEventListener("resize", () => {
  if (window.screen.width > 768 && overlay.classList.contains("active")) {
    overlay.classList.remove("active");
    mobileDrawer.classList.remove("active");
  }
});
