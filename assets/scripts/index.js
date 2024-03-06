"use strict";

const preloader = document.getElementById("preloader");
window.addEventListener("load", () => {
  preloader.style.display = "none";
});

const menuOpenBtn = document.getElementById("menuOpenBtn");
const sidebar = document.getElementById("sidebar");
menuOpenBtn.addEventListener("click", (e) => {
  sidebar.style.transform = "translateX(0)";
});

const themeBtn = document.getElementById("theme-btn");

themeBtn.addEventListener("click", () => {
  if (document.body.dataset.theme == "light")
    document.body.setAttribute("data-theme", "dark");
  else if (document.body.dataset.theme == "dark")
    document.body.setAttribute("data-theme", "light");
});
