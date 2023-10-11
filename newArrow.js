// 일종의 콜백함수
function outerOne(a) {

  function innerOne(b) {
    console.log(b);
  }
  innerOne(a);
}
console.log(outerOne("hello"))