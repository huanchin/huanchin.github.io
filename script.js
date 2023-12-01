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

// lazy loading img
const imgTarget = document.querySelector("img[data-src]");
// console.log(imgTarget);
// console.log(imgTarget.src);
// console.log(imgTarget.dataset.src);
imgTarget.src = imgTarget.dataset.src;
// console.log(imgTarget.src);

imgTarget.addEventListener("load", function () {
  // console.log(imgTarget.classList);
  imgTarget.classList.remove("lazy-img");
});
