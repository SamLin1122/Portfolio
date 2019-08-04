var div = document.querySelectorAll("div");
var td = document.querySelectorAll("td");
var click = 0;
var reset=document.querySelector(".reset")
for (let i = 0; i < div.length; i++) {
  td[i].addEventListener("click", function () {
    if (click % 2 == 0) {
      div[i].classList.remove("X")
      div[i].classList.add("O")
    }
    else {
      div[i].classList.remove("O")
      div[i].classList.add("X")
    }
    click++
  })
}
reset.addEventListener("click",function(){
div.forEach(e=>e.classList.remove("O","X"))
})


var Shadow = document.querySelector(".Shadow")
var text = document.querySelector("h1")
var walk = 500;

function shadow(e) {
  var { offsetWidth: width, offsetHeight: height } = Shadow

  var xwalk = Math.round((e.x / width * walk) - (walk / 2));
  var ywalk = Math.round((e.y / height * walk) - (walk / 2));
  console.log(e.x,e.y)
  text.style.textShadow = `
  ${xwalk}px ${ywalk}px 5px rgba(255,0,0,0.7),
  ${xwalk * -1}px ${ywalk * -1}px 5px rgba(0,255,0,0.7),
  ${ywalk}px ${xwalk * -1}px 5px rgba(0,0,255,0.7),
  ${ywalk * -1}px ${xwalk}px 5px rgba(255,255,0,0.7)`
  e.y>=400? walk=0:walk=500
}

Shadow.addEventListener("mousemove", shadow);
text.addEventListener("mouseleave", function(){
  walk=0
});
