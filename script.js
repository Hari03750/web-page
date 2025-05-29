const menuIcon = document.getElementById("menu-icon");
const navbar = document.getElementById("navbar").querySelector("ul");

menuIcon.addEventListener("click", () => {
  navbar.classList.toggle("active");
});

