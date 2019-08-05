$(".skill").on("mouseenter", function () {
  $("span", this).css("opacity", "1")
  $(`.${$(this).text()}`).css("display", "flex")
  $("#skills .progress.noo").css("display", "none")
})
$(".skill").on("mouseleave", function () {
  $("span", this).css("opacity", "0")
  $(`.${$(this).text()}`).css("display", "none")
  $("#skills .progress.noo").css("display", "flex")
})
$("#skills .progress.noo").css("display", "flex")


var i = 0;
var a = "Hi 我是林展宏,<br>正在往Junior前端工程師的路上學習著！  "
var b = "一個喜歡思考創新、追求效率的學習者！ "
var c = "一個沒事找事做、懶惰 "
var set1 = setInterval(show1, 100);
var ser2
function set() {
  set2 = setInterval(show2, 100);
}
var del = false
function show1() {
  var j = a.substring(0, i);

  $("h1.typing1").html(`${j}|`);
  i++
  if (i == a.length) {
    clearInterval(set1)
    set()
    i = 0
    $("h1.typing1").html(j);
  }
}

function show2() {
  var j = c.substring(0, i);

  $("h1.typing2").html(`${j}|`);
  if (del) {
    i--;
    if (i == 0) {
      del = false
      c = b
    }
  }
  else if (!del) {
    i++
    if (i == c.length) {
      del = true
      if (c == b) {
        clearInterval(set2)
        $("h1.typing2").html(j);
      }
    }
  }
}