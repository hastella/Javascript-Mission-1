// do something!
const nav = document.querySelector("nav");
const navBtn = document.querySelector(".toggle");
const hiddenBody = document.querySelector("body");

window.addEventListener("load", () => body.classList.remove(".preload"));
window.addEventListener("load", () => body.classList.add("body"));

navBtn.onclick = () => nav.classList.toggle("active");

navBtn.addEventListener("click", function () {
  if (nav.classList.contains("active")) {
    localStorage.setItem("menu-state", "open");
    console.log(localStorage);
  } else {
    localStorage.setItem("menu-state", "closed");
  }
});
if (localStorage.getItem("menu-state") === "open") {
  nav.classList.toggle("active");
}
