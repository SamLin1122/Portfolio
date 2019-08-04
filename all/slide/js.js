var a = document.querySelectorAll("a")
var highlight = document.createElement("span")
highlight.classList.add("highlight");
document.body.appendChild(highlight);

function highligntthis() {
  var thisoords = this.getBoundingClientRect();
  var coords = {
    width: thisoords.width,
    height: thisoords.height,
    top: thisoords.top + window.scrollY,
    left: thisoords.left + window.scrollX
  };
  highlight.style.width = `${coords.width}px`;
  highlight.style.height = `${coords.height}px`;
  highlight.style.transform = `translate(${coords.left}px, ${coords.top}px)`;
}
a.forEach(a => a.addEventListener("mouseenter", highligntthis))

// ------------------------------------------------------------------
var images = document.querySelectorAll(".slide-in");
var header = document.querySelector("header");
var nav = document.querySelector("nav");
var logo = document.querySelector("li.logo")
window.addEventListener("scroll", fixed)
let navTop = nav.offsetTop
function fixed() {
  if (window.scrollY > navTop) {
    nav.style.position = "fixed"
    logo.style.maxWidth = "500px"
  }
  else {
    nav.style.position = ""
    logo.style.maxWidth = ""
  }
}
// ------------------------------------------------------------------
function check() {
  images.forEach(image => {
    var sliderIn = (window.innerHeight + window.scrollY) - image.height / 2
    var imageBottom = image.offsetTop + image.height + header.offsetHeight + nav.offsetHeight;

    if (sliderIn > image.offsetTop + header.offsetHeight + nav.offsetHeight && window.scrollY < imageBottom) {
      image.classList.add("active");
    }
    else {
      image.classList.remove("active");
    }
  })
}
window.addEventListener("scroll", check)