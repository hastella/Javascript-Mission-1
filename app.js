const nav = document.querySelector("nav");
const navBtn = document.querySelector(".toggle");
const hiddenBody = document.querySelector("body");

navBtn.onclick = () => nav.classList.toggle("active");

// 토글 active 상태 locastorage 저장
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
  window.addEventListener("load", () => body.classList.add("body"));
}

// 초기 렌더링 시에 불필요한 트랜지션 방지
window.addEventListener(
  "load",
  function load() {
    window.removeEventListener("load", load, false);
    document.body.classList.remove("preload");
  },
  false
);
