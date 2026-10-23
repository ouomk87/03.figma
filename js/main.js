//header 배경부분
window.addEventListener("scroll", function () {
  const header = document.querySelector("#header");

  if (window.scrollY > 0) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

//모바일 메뉴
const hambar = document.querySelector("#hamburger");
const mbMenu = document.querySelector(".mobil-menu");
const overlay = document.querySelector(".overlay");
hambar.addEventListener("click", () => {
  console.log("click");
  if (hambar.classList.contains("active")) {
    mbMenu.classList.remove("active");
    overlay.classList.remove("active");
    hambar.classList.remove("active");
    document.body.style.overflow = "";
  } else {
    mbMenu.classList.add("active");
    overlay.classList.add("active");
    hambar.classList.add("active");
    document.body.style.overflow = "hidden";
  }

  //스크롤 방지
});
overlay.addEventListener("click", () => {
  mbMenu.classList.remove("active");
  overlay.classList.remove("active");
  hambar.classList.remove("active");
  //다시 스크롤 생성
  document.body.style.overflow = "";
});
