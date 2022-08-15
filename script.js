"use strict";
const btn = document.getElementById("btn");
const bkg = document.getElementById("bkg");
const links = document.querySelectorAll("a");
// Links
links.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    let href = link.getAttribute("href").slice(1);
    if (href === "top") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
    console.log(href);
  });
});

// Menu
bkg.addEventListener("click", function () {
  document.body.classList.remove("show-menu");
});
btn.addEventListener("click", function (e) {
  e.preventDefault();
  console.log("hello");
  document.body.classList.add("show-menu");
});
