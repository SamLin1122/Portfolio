var colors = []
var num = 16
var squares = document.querySelectorAll(".square")
var mode = document.querySelectorAll(".mode")
var state = document.querySelector(".state")
var reset = document.querySelector(".reset")
var RGBdisplay = document.querySelector(".RGBdisplay")
var h1 = document.querySelector("h1")
var timer = document.querySelector(".timer")

function RGBRandom() {
  var r = Math.round(Math.random() * 255);
  var g = Math.round(Math.random() * 255);
  var b = Math.round(Math.random() * 255);
  return "rgb(" + r + ", " + g + ", " + b + ")";
}

function answer() {
  var i = Math.round(Math.random() * num)
  return colors[i];
}

function changbgColor() {
  colors = push(num)
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.background = colors[i]
  }
}

function push(e) {
  var arr = []
  for (var i = 0; i < e; i++) {
    arr.push(RGBRandom())
  }
  return arr
}

for (var i = 0; i < squares.length; i++) {
  squares[i].addEventListener("click", function () {
    if (this.style.background == RGBdisplay.textContent) {
      h1.style.background = RGBdisplay.textContent
      state.textContent = "Correct!"
      changeAll(RGBdisplay.textContent)
      reset.textContent = " Play Again?"
    }
    else {
      this.style.background = "rgba(0,0,0,0)"
      state.textContent = "Try Again!"
    }
  })
}

function changeAll(ans) {
  for (var i = 0; i < squares.length; i++)
    squares[i].style.background = ans
}

reset.addEventListener("click", function () {
  re()
})

function re() {
  color = push(num)
  changbgColor()
  h1.style.backgroundColor = "pink"
  RGBdisplay.textContent = answer()
  state.textContent = ""
  reset.textContent = "New Colors"
  for (var i = 0; i < squares.length; i++) {
    if (colors[i]) {
      squares[i].style.display = "block"
      squares[i].style.background = colors[i];
    } else {
      squares[i].style.display = "none";
    }
  }
}
var container = document.querySelector(".container")
function ModeSetup() {
  for (var i = 0; i < mode.length; i++) {
    mode[i].addEventListener("click", function () {
      mode[0].classList.remove("selected");
      mode[1].classList.remove("selected");
      this.classList.add("selected");
      if (this.textContent === "Easy") {
        num = 6
        container.style.gridTemplateColumns = "repeat(3, 150px)"
        container.style.width = "500px"
        re()
      }
      else {
        num = 16
        container.style.gridTemplateColumns = "2fr 2fr 2fr 2fr";
        container.style.width = "650px"
      }
      re();
    });
  }
}

ModeSetup()
changbgColor()
RGBdisplay.textContent = answer()