console.log('Hello Javascript!')

/* 아래 코드는 15를 출력하는 코드입니다. */

console.log(10 + 5)
console.log(150 / 10)


// 변수 선언

let latte = 4800
let longblack = 3000

console.log(latte + longblack)

function greetings (sentence) {
  console.log('Hi');
  console.log('안녕');
  console.log('Bonjour');
  console.log(sentence)
};

let sentence = "Hola!"
greetings(sentence);

function welcome(name){
  console.log('안녕하세요 ' + name + '님!')
};

welcome('고병연')
welcome('김원아')
welcome('고다온')
welcome('김연아')

function printSquare(x){
  console.log( x * x );
};

printSquare(5)