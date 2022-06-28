const list = document.querySelector('#list-1')
const myBtn = document.querySelector('#myBtn')


function addListItem(text){
  const li = document.createElement('li')
  li.textContent = text
  list.appendChild(li)
}

function btnClick()
{
  const item = document.getElementById('addList').value;
  addListItem(item)
}

function deleteClick(){
  list.removeChild(list.lastChild)
}