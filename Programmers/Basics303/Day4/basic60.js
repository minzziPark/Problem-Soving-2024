// https://school.programmers.co.kr/learn/courses/30/lessons/181946
// 문자열 붙여서 출력하기
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input = line.split(" ");
  console.log(input.join(""));
});
