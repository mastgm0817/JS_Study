// 거듭제곱

console.log( 2 ** 3)

// 나머지

console.log( 5 % 3)
// 덧셈

console.log( 6 + 3)

// 뺄셈

console.log( 6 - 5)


// 형 변환

console.log('10' + '5')
console.log(10+5)

// String, Number, Boolean
// 파이썬이랑 다른점은 파이썬은 int() 함수를 쓰지만, 자바 스크립트에선 Number()함수를 쓴다

console.log(Number('10') + Number('5'))
console.log(String(10)+String(5))

// String에서도 형변환 할때 특징이 있다

let a = 'hi'
let b = '123'

console.log(Number(a)) // hi는 숫자형으로 변환 할수 없기때문에 NaN이 뜰것이고, 특이한점은 자료형은 Number형이다.
console.log(Number(b)) // 문자 '123'은 숫자로 형변환이 가능하기때문에 문제가 없을것이다.

// Boolean 형변환도 특징이 있다

let c = true;

console.log(Number(c)) // True 값을 형변환 하면 1로 바뀐다.

let d = "";
let e = "123"
let f = 123

console.log(Boolean(d)) // 값이 비어있으면 False
console.log(Boolean(e)) // 값이 문자든 숫자든 뭔가 들어있으면 True
console.log(Boolean(f))

// 형 변환 비교연산 (===, !==, ==, !=)
console.log(1 === '1')
console.log(1 === true)
console.log(1 == '1')
console.log(1 == true)

// 템플릿 문자열
// 백틱(`) 사용하는 방법
let year = 1990
let month = 02
let day = 11
console.log(`생년월일은 ${year}년 ${month}월 ${day}입니다.`)

let myNumber = 5

function getTwice(x){
  return x * 2
};

console.log(`${myNumber}의 2배는 ${getTwice(myNumber)}입니다.`)


// vs 파이썬은 f스트링을 사용한다.

/*
def getTwice(x):
  return x*2

my_Number = 5
print(f"{my_Number}의 2배는 {getTwice(my_Number)}입니다.")
*/

// null vs undefined
// null은 의도적으로 값이 없다고 표현해줄 때고 (의도적으로 없음)
// undefined은 지정된 값이 없다고 표현 할 때 (처음부터 아무것도 없음)

let codeit
console.log(codeit) //undefined
codeit = null;
console.log(codeit) //null



