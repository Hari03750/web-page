const menuBtn = document.getElementById("menu-btn");
const navList = document.querySelector("nav ul");

menuBtn.addEventListener("click", () => {
  navList.classList.toggle("active");
});

