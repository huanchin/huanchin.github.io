//open sidebar
function showSidebar() {
  let sidebar = document.querySelector(".sidebar");
  sidebar.style.width = "50%";
}

//close sidebar
function closeSidebar() {
  let sidebar = document.querySelector(".sidebar");
  sidebar.style.width = "0px";
}

//header background turn white when scrolling
let header = document.querySelector("header");
window.addEventListener("scroll", () => {
  if (window.pageYOffset != 0) {
    header.style.backgroundColor = "rgba(255, 255, 255, 0.5)";
    header.style.backdropFilter = "blur(1.7px)";
  } else {
    header.style.backgroundColor = "";
    header.style.backdropFilter = "";
  }
});
