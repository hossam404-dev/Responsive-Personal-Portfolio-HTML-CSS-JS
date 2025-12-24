//add class active to header when scroll down
let header = document.querySelector("header");

window.onscroll = function() {
  if (window.scrollY >= 50) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
}

let nav_links = document.getElementById("links");
function open_close_menu() {
  nav_links.classList.toggle("active");
}

let menuLinks = document.querySelectorAll(".links a");
menuLinks.forEach(link => {
  link.addEventListener("click", () => {
    nav_links.classList.remove("active");
  });
});
