
$("ul").on("click", "li", function () {
  $(this).toggleClass("completed");
});
$("ul").on("click", "span", function (e) {
  $(this).parent().slideUp(500, function () {
    this.remove();
  })
})
$("input[type='text']").keypress(function (e) {
  if (e.which === 13) {
    $("ul").append(`<li><span><i class="far fa-trash-alt"></i></span>${this.value}</li>`);
    $(this).val("");
  };
})
$(".fa-plus").on("click", function () {
  $("input[type='text']").fadeToggle();
})

// --------------------colorpicker--------------------
var c1 = document.querySelector(".cl1")
var c2 = document.querySelector(".cl2")
var body = document.querySelector("body")
c1.addEventListener("change", colorChange)
c2.addEventListener("change", colorChange)
function colorChange() {
  body.style.background = `linear-gradient(to right bottom,${c1.value},${c2.value})`
  // document.documentElement.style.setProperty('--c1', c1.value);
  // document.documentElement.style.setProperty('--c2', c2.value);
}

// --------------------Randomcolor--------------------
var btn = document.querySelector(".btn")
btn.addEventListener("click", randomColor)

function randomString(len, charSet) {
  var randomString = '';
  for (var i = 0; i < len; i++) {
    var randomPoz = Math.round(Math.random() * charSet.length);
    if (randomPoz == 16) {
      randomString += charSet.substring(randomPoz - 1, randomPoz);
    }
    else {
      randomString += charSet.substring(randomPoz, randomPoz + 1);
    }
  }
  return randomString;
}
function randomColor() {
  var randomValue1 = randomString(6, '1234567890abcdef');
  var randomValue2 = randomString(6, '1234567890abcdef');
  c1.value = `#${randomValue1}`
  c2.value = `#${randomValue2}`
  colorChange()
}

// --------------------AutoRandomcolor--------------------
var auto = document.querySelector(".auto")
var qq
var hsl = 0

auto.addEventListener("click", autoMode)
function autoMode() {
  if (auto.value == "Stop Auto Mode") {
    clearInterval(qq)
    auto.value = "Auto Mode"
  }
  else {
    auto.value = "Stop Auto Mode"
    qq = setInterval(lll, 50)
  }
}
var u = true
function lll() {
  hsl += 5
  if (hsl >= 360) {
    hsl -= 360
  }
  cl()
}

function cl() {
  body.style.background = `
  linear-gradient(45deg, hsla(${hsl + 45},80%, 50%, 1) 10%, hsla(0, 0%, 0%, 0) 80%), 
  linear-gradient(135deg, hsla(${hsl + 135}, 80%, 50%, 1) 10%, hsla(0, 0%, 0%, 0) 70%), 
  linear-gradient(225deg, hsla(${hsl + 225}, 80%, 50%, 1) 10%, hsla(0, 0%, 0%, 0) 70%), 
  linear-gradient(315deg, hsla(${hsl + 315}, 80%, 50%, 1) 10%, hsla(0, 0%, 0%, 0) 80%)
  `
}

// ---------------------------old version for #color-----------------------------------------
// var s = 100
// setInterval(r, s)
// setInterval(g, s * 2)
// setInterval(b, s * 1.5)

// function color() {
//   c1.value = `#${rgb[i]}${rgb[j]}${rgb[j]}${rgb[k]}${rgb[k]}${rgb[i]}`
//   c2.value = `#${rgb[j]}${rgb[i]}${rgb[k]}${rgb[j]}${rgb[i]}${rgb[k]}`
//   colorChange()
// }
// var i = 0
// var j = 5
// var k = 13
// var a = true
// var d = false
// var c = true
// var rgb = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"]

// function r() {
//   if (a) {
//     i++
//     if (i == 15) {
//       a = false
//     }
//   }
//   else if (!a) {
//     i--
//     if (i == 0) {
//       a = true
//     }
//   }
// }
// function g() {
//   if (d) {
//     j++
//     if (j == 15) {
//       d = false
//     }
//   }
//   else if (!d) {
//     j--
//     if (j == 0) {
//       d = true
//     }
//   }
// }
// function b() {
//   if (c) {
//     k++
//     if (k == 15) {
//       c = false
//     }
//   }
//   else if (!c) {
//     k--
//     if (k == 0) {
//       c = true
//     }
//   }
// }