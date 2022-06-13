function square(x){
  console.log("return 문 실행전")
  return x * x
  console.log("return문 실행 후")
};

console.log('함수 호출 전')
console.log(square(3))
console.log('함수 호출 후')


// 옵셔널 파라미터
function information(name, age, nationality='한국'){
  console.log(`이름은 ${name}이고 나이는 ${age}이며 국적은 ${nationality}입니다.`)
};


information("고병연", 32)
information("김원아", 27, "호주")


//Scope: 범위, 영역
// 호이스팅 문제

function myFunction(){ //블록문 (Block Statement)
  let x = 3 // local variable
  console.log(x);
};


let y = 4 // Global variable

function myFunction1(){
  console.log(y)
}
console.log(y)

myFunction()
myFunction1()
