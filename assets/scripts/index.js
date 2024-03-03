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
