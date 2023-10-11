// 일종의 콜백함수
function outerOne(a) {
  const innerOne = b => console.log(b);
  innerOne(a);
}
console.log(outerOne("hello"));

fs.readFile("./html", data, (error) => {

})