const btn1 = document.querySelector("#myBtn1");
const btn2 = document.querySelector("#myBtn2");
const box = document.querySelector("#myCheckbox")


function printBtn1 (){
  console.log("Hello JS")
}
function printBtn2 (){
  console.log("Hello HTML")
}


btn1.addEventListener("click", printBtn1);
btn2.addEventListener("click", printBtn2);

const toDoList = document.querySelector("#to-do-list")
const items = toDoList.children

toDoList.addEventListener("click", checkList);

function checkList (event){
  if (event.target.tagName === "LI")
  {
    event.target.classList.toggle('done')
  }
}

function addToDoList(){
    const li = document.createElement("li")
    const message = document.getElementById("txtToDo").value
    li.classList.add('className')
    li.textContent = message
    toDoList.appendChild(li)
  }


const myBtn3 = document.querySelector("#myBtn3")
myBtn3.addEventListener("click", addToDoList)

const myBtn4 = document.querySelector("#myBtn4")
myBtn4.addEventListener("click", deleteToDoList)

function deleteToDoList(e) {
  if (!box.checked){
    e.preventDefault()
    alert("Please tick the box")
  }
  else
  {
  toDoList.removeChild(toDoList.lastChild)
  }
}

document.addEventListener("contextmenu", protectRightClick)
const ptBox = document.querySelector("#protectBox")
function protectRightClick(e) {
  if (ptBox.checked){
    e.preventDefault()
    alert("복사는 금지되어있습니다.")
  }
}

