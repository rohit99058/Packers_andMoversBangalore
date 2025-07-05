const toggle = document.querySelector(".toggle");
const nav = document.querySelector(".nav-list");

toggle.addEventListener("click", () => {
  nav.classList.toggle("show");
});
