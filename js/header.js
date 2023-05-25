const links = document.querySelectorAll(".header__link");
const activePage = window.location.pathname;

links.forEach((link) => {
  if (link.href.includes(`${activePage}`)) {
    link.classList.add("active");
  }
});

const menu = document.querySelector(".menu");
const navBar = document.querySelector(".header__nav-links");

menu.addEventListener("click", () => {
  navBar.classList.toggle("visible");
  console.log("foi");
});
