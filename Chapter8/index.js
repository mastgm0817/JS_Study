// 조건 표현식
const score = 80

function passChecker ( getScore) {
  return score > getScore ? '합격' : '불합격';
}

console.log(passChecker(75))


// Spread 구문

const numbers = [1,2,3]
console.log(...numbers) // rest Parameters와 비슷

// 배열을 사용할때 유용

const arr1 = [1,2,3];
const tmpArr1 = arr1

tmpArr1.push(4)
console.log(arr1)
console.log(tmpArr1)

// arr1과 tmpArr1의 값이 똑같다. 왜냐하면 배열은 주소지를 대입하는 방식이기에
// 그래서 slice를 이용해서 배열을 복사해야한다.
// 하지만 Spread 구문 방식을 이용하면 
const temArr2 = [...arr1]

const snacks = ['원카칩', '꿀버터칩', '헛스윙칩', '태양칩', '야채시간'];
const drinks = ['사이다', '콜라', '우유', '물', '커피', '레몬에이드'];
const mySnacks = [...snacks]
const myDrinks = [...drinks]
mySnacks.splice(2, 3); //  배열[2]번째 이후부터 3개 삭제한 나머지 뽑기
myDrinks.splice(1); // 배열 인덱스[1]꺼만 뽑기
const myChoice = [...mySnacks, ...myDrinks]

function printArguments(...args) {
  for (const arg of args) {
    console.log(arg);
  }
}

// 3. Spread 구문을 활용해서 myChoice의 각 요소들을 printArguments 함수의 아규먼트로 전달해 주세요.
printArguments(...myChoice);


// 분해기법 destructuring method
// 파이썬이랑 비슷한 방법

const rank = ['유나','효준','민환','재하','규식']

// const mackbook = rank[0]
// const ipad = rank[2]
// const airpods = rank[3]
// const coupon = rank[4]
// const resting = rank[4]

const [mackbook, ipad, airpods, coupon, ...resting] = rank

