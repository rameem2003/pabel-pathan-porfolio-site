const tog = document.querySelector(".tog");

const navMenu = document.querySelectorAll(".navbar-nav li a");

tog.addEventListener("click", () => {
  tog.classList.toggle("fa-xmark");
});

navMenu.forEach((m) => {
  m.addEventListener("click", () => {
    document.querySelector(".navbar-nav .active").classList.remove("active");
    m.classList.add("active");
  });
});
