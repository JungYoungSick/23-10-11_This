function outer() {
return "Hello";
}
// outer라는 함수명이 있어 명시적이다.
const outerTwo = function() {
return "bye";
}
// 대입연산자를 사용하여 이름없는 함수를 대입한 것이다.

console.log(outer());
console.log(outerTwo());