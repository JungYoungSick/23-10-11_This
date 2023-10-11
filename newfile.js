function student(name, number) {
  this.name = name;
  this.number = number;
}
let list = ["이은정", "윤준현"];
let studentArr = [];
let test = new student(list[0], "0")

for(let i=0; i<list.length; i++) {
  studentArr[i] = new student(list[0], i+1)
}
console.log(studentArr);
