const links = document.querySelectorAll(".header__link");
const activePage = window.location.pathname;

links.forEach((link) => {
  if (link.href.includes(`${activePage}`)) {
    link.classList.add("active");
  }
});
