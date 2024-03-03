// https://school.programmers.co.kr/learn/courses/30/lessons/120823
// 직각삼각형 출력하기
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input = line.split(" ");
  let num = Number(...input);
  for (let i = 1; i <= num; i++) {
    let str = "";
    for (let j = 1; j <= i; j++) {
      str += "*";
    }
    console.log(str);
  }
});
