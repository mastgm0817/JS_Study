const areas = document.querySelectorAll('[data-field]');
const toDoList = {
  work: '연습',
  duty: '고병연',
  status: '',
}

for (let i of areas) {
  const field = i.dataset.field;
  i.textContent = toDoList[field];
}

const bns = document.querySelectorAll('.btn');
for (let btn of bns) {
  const status = btn.dataset.status;
  btn.onclick = function (){
    areas[2].textContent = status
    areas[2].dataset.status = status
  }
}