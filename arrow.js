// outer라는 함수명이 있어 명시적이다.
function outer() {
  return "Hello";
}

// 대입연산자를 사용하여 이름없는 함수를 대입한 것이다.
const outerTwo = function() {
  return "bye";
}


const outerThree = () => "wow";

console.log(outer());
console.log(outerTwo());
console.log(outerThree());



//코드는 대폭 짧아지며 압축되지만, 읽기가 편해진다.
//함수가 짧아지면 짧아질수록 함수를 더 많이 뜰 수 있다.