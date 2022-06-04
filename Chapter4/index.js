// 나의 나이와, 나의 성별을 저장하는 변수
let myAge = 26;
let myGender = 'male';

// 호칭을 담은 변수
let callOlderBrother = '형';
let callOlderSister = '누나';
let callFriend = '친구';
let callYoungerSister = '여동생';
let callYoungerBrother = '남동생';

// 상대방의 나이와 성별에 따른 호칭을 리턴하는 함수 whatShouldICall를 완성하세요.
function whatShouldICallYou(yourAge, yourGender) {
  // 여기에 코드를 작성해 주세요.
  if (yourAge < myAge)
  {
    if (yourGender != myGender)
    {
      return callYoungerSister
    }
    else
    {
      return callYoungerBrother 
    }
  }
  else if (yourAge > myAge)
  {
    if (yourGender != myGender)
    {
      return callOlderSister
    }
    else
    {
      return callOlderBrother
    }
  }
  else
  {
    return callFriend 
  }
}

// 테스트 코드
let result1 = whatShouldICallYou(25, 'female');
let result2 = whatShouldICallYou(20, 'male');
let result3 = whatShouldICallYou(26, 'female');
let result4 = whatShouldICallYou(30, 'male');
let result5 = whatShouldICallYou(31, 'female');

console.log(result1);
console.log(result2);
console.log(result3);
console.log(result4);
console.log(result5);

// 각 등급별 가격
let VIPPrice = 15;
let RPrice = 13;
let SPrice = 10;
let APrice = 8;

// 각 등급에 맞는 가격을 출력하는 함수 checkPrice를 완성하세요.
function checkPrice(grade) {
	// 여기에 코드를 작성해 주세요.
	switch (grade) {
	  case 'R':
	    console.log(`R석은 ${RPrice}만원 입니다.`)
	    break
	  case 'VIP':
	    console.log(`VIP석은 ${VIPPrice}만원 입니다.`)
	    break
	  case 'S':
	    console.log(`S석은 ${SPrice}만원 입니다.`)
	    break
	  case 'A':
	    console.log(`A석은 ${APrice}만원 입니다.`)
	    break
	  default:
	    console.log("VIP, R, S, A 중에서 하나를 선택해 주세요.")
	 }
}

// 테스트 코드
checkPrice('R');
checkPrice('VIP');
checkPrice('S');
checkPrice('A');
checkPrice('B');

// 구구단


for (let i = 1; i <= 9; i++)
  for(let j = 1; j <= 9; j++)
    console.log(`${i} * ${j} = ${(i*j)}`)


// 피보나치


const FIB = 50
let previous = 0
let current = 1


for (i = 1; i <= FIB; i++){
  console.log(current)
  let temp = previous
  previous = current
  current = current + temp
  
}


