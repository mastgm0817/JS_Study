const list = document.querySelector('.list');
const adbtn = document.querySelector('.add-btn');
const data = [{
    title: '자바스크립트 공부하기',
    isClear: true,
  }, {
    title: '쓰레기 분리수거',
    isClear: false,
  }, {
    title: '고양이 밥주기',
    isClear: true,
  }, {
    title: '독서하기',
    isClear: false,
  }, {
    title: '영어 공부하기',
    isClear: false,
  }
];


data.forEach((work, i) => {
  const li = document.createElement('li');
  li.classList.add('item');
  if (work.isClear === true){
    li.classList.add('done');
  }
  li.textContent = `${i + 1}. ${work.title}`;
  list.append(li); 
})

function addToDoList(){
    const li = document.createElement('li');
    let msg = document.getElementById("add-input").value;
    console.log(msg)
    li.classList.add('item');
    li.textContent = `6 + ${msg}`;
    list.appendChild(li);
  
}

adbtn.addEventListener('click', addToDoList);