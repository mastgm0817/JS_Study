let btn1 = document.querySelector('#myBtn1')
let btn2 = document.querySelector("#myBtn2")
let myInput = document.querySelector("#myInput")
let btn3 = document.querySelector("#myBtn3")


function event1() {
  console.log("Hi Javascript!")
}

function event2() {
  console.log("Hi HTML!")
}

function event3(e){
  console.log(e)
}

btn1.addEventListener("click", event1)
btn2.addEventListener("click", event2)
btn3.addEventListener("click", event3)
myInput.addEventListener("keydown", event3)