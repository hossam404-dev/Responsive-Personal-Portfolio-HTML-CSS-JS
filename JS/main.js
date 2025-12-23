//add class active to header when scroll down
let header = document.querySelector("header");

window.onscroll = function() {
  if (window.scrollY >= 50) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
};
